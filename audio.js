/* ============================================= */
/* HỆ THỐNG ÂM THANH HOÀN CHỈNH                  */
/* Vietnamese Learning Website                     */
/* TTS: Web Speech API + Google TTS + Local Audio  */
/* speakVietnamese() / speakEnglish() riêng biệt  */
/* ============================================= */

// ===================================================
// CẤU HÌNH
// ===================================================
const AUDIO_CONFIG = {
    viRate: 0.95, // Tăng tốc độ một chút cho tự nhiên hơn
    viPitch: 1.05,
    enRate: 0.85,
    enPitch: 1.0,
    spellDelay: 900,
};

// ===================================================
// PHÁT ÂM CHỮ CÁI – KIỂU ĐÁNH VẦN TRẺ EM
// ===================================================
const LETTER_SOUNDS = {
    'a': 'a', 'ă': 'á', 'â': 'ớ',
    'e': 'e', 'ê': 'ê', 'i': 'i',
    'o': 'o', 'ô': 'ô', 'ơ': 'ơ',
    'u': 'u', 'ư': 'ư', 'y': 'i',
    'b': 'bờ', 'c': 'cờ', 'd': 'dờ', 'đ': 'đờ',
    'g': 'gờ', 'h': 'hờ', 'k': 'ka', 'l': 'lờ',
    'm': 'mờ', 'n': 'nờ', 'p': 'pờ', 'q': 'quờ',
    'r': 'rờ', 's': 'sờ', 't': 'tờ', 'v': 'vờ',
    'x': 'xờ',
};

const LETTER_AUDIO_MAP = {
    'a': 'a', 'ă': 'aw', 'â': 'aa',
    'b': 'b', 'c': 'c', 'd': 'd', 'đ': 'dd',
    'e': 'e', 'ê': 'ee', 'g': 'g', 'h': 'h',
    'i': 'i', 'k': 'k', 'l': 'l', 'm': 'm',
    'n': 'n', 'o': 'o', 'ô': 'oo', 'ơ': 'ow',
    'p': 'p', 'q': 'q', 'r': 'r', 's': 's',
    't': 't', 'u': 'u', 'ư': 'uw', 'v': 'v',
    'x': 'x', 'y': 'y',
};

// ===================================================
// SỐ TIẾNG VIỆT (0-100)
// ===================================================
const VN_NUM = {
    0:'không',1:'một',2:'hai',3:'ba',4:'bốn',
    5:'năm',6:'sáu',7:'bảy',8:'tám',9:'chín',10:'mười',
    11:'mười một',12:'mười hai',13:'mười ba',14:'mười bốn',
    15:'mười lăm',16:'mười sáu',17:'mười bảy',18:'mười tám',
    19:'mười chín',20:'hai mươi',
};

function numberToVietnamese(n) {
    if (n < 0) return '';
    if (VN_NUM[n] !== undefined) return VN_NUM[n];
    if (n < 100) {
        const tens = Math.floor(n / 10), ones = n % 10;
        let r = VN_NUM[tens] + ' mươi';
        if (ones === 0) return r;
        if (ones === 1) return r + ' mốt';
        if (ones === 5) return r + ' lăm';
        if (ones === 4 && tens >= 2) return r + ' tư';
        return r + ' ' + VN_NUM[ones];
    }
    if (n === 100) return 'một trăm';
    return String(n);
}

function speakNumberVi(n) {
    const w = numberToVietnamese(n);
    if (w) speakVietnamese(w);
}

// ===================================================
// VOICE STATE
// ===================================================
let viVoice = null;
let enVoice = null;
let hasViVoice = false;
let hasEnVoice = false;
let audioReady = false;
let currentAudio = null;
let isSpeaking = false;
let spellTimeout = null;

// ===================================================
// KHỞI TẠO – tìm voice vi-VN và en-US
// ===================================================
function initAudioSystem() {
    if (!('speechSynthesis' in window)) {
        audioReady = true;
        return;
    }

    const findVoices = () => {
        const voices = speechSynthesis.getVoices();
        if (!voices || voices.length === 0) return false;

        // Vietnamese search
        const vi = voices.filter(v => v.lang.includes('vi'));
        if (vi.length > 0) {
            // Ưu tiên giọng Google đầu tiên, sau đó đến giọng Nữ
            const preferred = vi.find(v => /google/i.test(v.name)) || 
                              vi.find(v => /female|nữ|woman/i.test(v.name)) || 
                              vi[0];
            viVoice = preferred;
            hasViVoice = true;
        }

        // English search
        const en = voices.filter(v => v.lang.startsWith('en'));
        if (en.length > 0) {
            const us = en.filter(v => v.lang === 'en-US');
            const targetList = us.length > 0 ? us : en;
            // Ưu tiên giọng Google US English, sau đó đến các giọng Nữ
            const preferred = targetList.find(v => /google/i.test(v.name)) || 
                              targetList.find(v => /female|woman/i.test(v.name)) || 
                              targetList[0];
            enVoice = preferred;
            hasEnVoice = true;
        }

        if (hasViVoice || hasEnVoice) {
            audioReady = true;
            return true;
        }
        return false;
    };

    // Initial find
    findVoices();
    speechSynthesis.onvoiceschanged = findVoices;

    // Retry loop for slow mobile browsers
    let retries = 0;
    const retryInterval = setInterval(() => {
        retries++;
        if (findVoices() || retries > 20) {
            clearInterval(retryInterval);
            audioReady = true;
        }
    }, 250);

    // Audio Unlocking for Mobile Browsers
    const unlock = () => {
        if ('speechSynthesis' in window) {
            speechSynthesis.resume();
            const ut = new SpeechSynthesisUtterance(' ');
            ut.volume = 0;
            speechSynthesis.speak(ut);
        }
        
        // Unlock HTML5 Audio
        const silentAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
        silentAudio.play().catch(() => {});
        
        document.removeEventListener('touchstart', unlock);
        document.removeEventListener('click', unlock);
        document.removeEventListener('mousedown', unlock);
    };
    document.addEventListener('touchstart', unlock, { passive: true });
    document.addEventListener('click', unlock, { passive: true });
    document.addEventListener('mousedown', unlock, { passive: true });
}
initAudioSystem();

function speakVietnamese(text, onEndCallback) {
    stopAllAudio();
    // Ưu tiên dùng giọng "Chị Google" theo yêu cầu người dùng
    playGoogleTTS(text, 'vi', onEndCallback);
}

function speakEnglish(text, onEndCallback) {
    stopAllAudio();
    // Ưu tiên dùng giọng "Chị Google" theo yêu cầu người dùng
    playGoogleTTS(text, 'en', onEndCallback);
}

function speakLetterSound(letterLower, onEndCallback) {
    stopAllAudio();
    const key = LETTER_AUDIO_MAP[letterLower];
    if (key) {
        const url = 'assets/audio/' + key + '.mp3';
        const a = new Audio(url);
        a.volume = 1;
        a.onended = () => { if (onEndCallback) onEndCallback(); };
        a.onerror = () => {
            const sound = LETTER_SOUNDS[letterLower];
            if (sound) speakVietnamese(sound, onEndCallback);
            else if (onEndCallback) onEndCallback();
        };
        a.play().then(() => { 
            currentAudio = a; 
        }).catch((err) => {
            console.warn('Audio play failed, falling back to TTS', err);
            const sound = LETTER_SOUNDS[letterLower];
            if (sound) speakVietnamese(sound, onEndCallback);
            else if (onEndCallback) onEndCallback();
        });
        currentAudio = a;
    } else {
        const sound = LETTER_SOUNDS[letterLower];
        if (sound) speakVietnamese(sound, onEndCallback);
        else if (onEndCallback) onEndCallback();
    }
}

function playGoogleTTS(text, lang, onEndCallback) {
    stopCurrentAudio();
    const tl = (lang === 'en') ? 'en' : 'vi';
    
    // Sử dụng bộ tham số đầy đủ hơn để tránh bị Google chặn (status failed)
    const encodedText = encodeURIComponent(text);
    const providers = [
        `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${tl}&total=1&idx=0&textlen=${text.length}&client=gtx`,
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${tl}&total=1&idx=0&textlen=${text.length}&client=tw-ob`,
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${tl}&client=p`
    ];
    
    let currentIdx = 0;
    const a = new Audio();
    a.volume = 1;

    const tryNextProvider = () => {
        if (currentIdx >= providers.length) {
            console.warn('Fallback to Web Speech API');
            speakWithWebSpeech(text, lang, onEndCallback);
            return;
        }
        
        const url = providers[currentIdx];
        currentIdx++;
        
        a.src = url;
        a.play().then(() => {
            currentAudio = a;
        }).catch(err => {
            console.warn('Provider failed, trying next...');
            tryNextProvider();
        });
    };

    a.onended = () => { if (onEndCallback) onEndCallback(); };
    a.onerror = () => { tryNextProvider(); };

    tryNextProvider();
}

function speakWithWebSpeech(text, lang, onEndCallback) {
    if (!('speechSynthesis' in window)) {
        console.error('Trình duyệt không hỗ trợ Web Speech API.');
        if (onEndCallback) onEndCallback();
        return;
    }

    // Dừng các giọng đang đọc dở để tránh kẹt hàng đợi
    speechSynthesis.cancel();

    const ut = new SpeechSynthesisUtterance(text);
    const isEn = lang === 'en';
    ut.lang = isEn ? 'en-US' : 'vi-VN';
    
    // Gán giọng đọc ưu tiên đã tìm thấy ở initAudioSystem()
    if (isEn && enVoice) ut.voice = enVoice;
    else if (!isEn && viVoice) ut.voice = viVoice;
    
    ut.rate = isEn ? AUDIO_CONFIG.enRate : AUDIO_CONFIG.viRate;
    ut.pitch = isEn ? AUDIO_CONFIG.enPitch : AUDIO_CONFIG.viPitch;
    ut.volume = 1;

    ut.onend = () => { if (onEndCallback) onEndCallback(); };
    ut.onerror = (e) => {
        console.error('WebSpeech error:', e);
        if (onEndCallback) onEndCallback();
    };

    speechSynthesis.speak(ut);
}

// ===================================================
// LOCAL AUDIO
// ===================================================
function playLocalAudio(path) {
    stopCurrentAudio();
    const a = new Audio(path);
    a.play().catch(() => {});
    currentAudio = a;
    return a;
}

function playAudio(fileName) {
    return playLocalAudio('assets/audio/' + fileName + '.mp3');
}

// ===================================================
// ĐÁNH VẦN TỪ – Vietnamese Word Spelling Engine
// ===================================================
const TONE_MAP = {};
(function buildToneMap() {
    const data = [
        ['a','à','á','ả','ã','ạ'], ['ă','ằ','ắ','ẳ','ẵ','ặ'],
        ['â','ầ','ấ','ẩ','ẫ','ậ'], ['e','è','é','ẻ','ẽ','ẹ'],
        ['ê','ề','ế','ể','ễ','ệ'], ['i','ì','í','ỉ','ĩ','ị'],
        ['o','ò','ó','ỏ','õ','ọ'], ['ô','ồ','ố','ổ','ỗ','ộ'],
        ['ơ','ờ','ớ','ở','ỡ','ợ'], ['u','ù','ú','ủ','ũ','ụ'],
        ['ư','ừ','ứ','ử','ữ','ự'], ['y','ỳ','ý','ỷ','ỹ','ỵ'],
    ];
    const tones = ['', 'huyền', 'sắc', 'hỏi', 'ngã', 'nặng'];
    data.forEach(row => {
        const base = row[0];
        for (let i = 1; i < row.length; i++) {
            TONE_MAP[row[i]] = { base, tone: tones[i] };
        }
    });
})();

const INIT_CONSONANTS = [
    'ngh','ng','nh','gh','gi','kh','ph','th','tr','ch','qu',
    'b','c','d','đ','g','h','k','l','m','n','p','q','r','s','t','v','x'
];

const CONSONANT_SPELL = {
    'b':'bờ','c':'cờ','ch':'chờ','d':'dờ','đ':'đờ',
    'g':'gờ','gh':'gờ','gi':'di','h':'hờ',
    'k':'ka','kh':'khờ','l':'lờ','m':'mờ',
    'n':'nờ','ng':'ngờ','ngh':'ngờ','nh':'nhờ',
    'p':'pờ','ph':'phờ','q':'quờ','qu':'quờ',
    'r':'rờ','s':'sờ','t':'tờ','th':'thờ',
    'tr':'trờ','v':'vờ','x':'xờ',
};

function parseViSyllable(syllable) {
    const lower = syllable.toLowerCase();
    let consonant = '', rest = lower;
    for (const c of INIT_CONSONANTS) {
        if (rest.startsWith(c)) { consonant = c; rest = rest.substring(c.length); break; }
    }
    let tone = '', baseRest = '';
    for (const ch of rest) {
        if (TONE_MAP[ch]) { tone = TONE_MAP[ch].tone; baseRest += TONE_MAP[ch].base; }
        else { baseRest += ch; }
    }
    return { consonant, vowel: rest, baseVowel: baseRest, tone, baseWord: consonant + baseRest, original: syllable };
}

function getSingleWordSpellingSteps(word) {
    const s = parseViSyllable(word);
    const steps = [];
    if (s.consonant) {
        steps.push({ text: s.consonant, speak: CONSONANT_SPELL[s.consonant] || s.consonant, type: 'consonant' });
    }
    if (s.baseVowel) {
        steps.push({ text: s.baseVowel, speak: s.baseVowel, type: 'vowel' });
    }
    if (s.consonant && s.baseVowel) {
        steps.push({ text: s.baseWord, speak: s.baseWord, type: 'combined' });
    }
    if (s.tone) {
        steps.push({ text: word.toLowerCase(), speak: s.tone + ' ' + word.toLowerCase(), type: 'tone' });
    }
    return steps;
}

function getSpellingSteps(text) {
    const words = text.trim().split(/\s+/);
    if (words.length === 1) {
        return getSingleWordSpellingSteps(words[0]);
    }
    
    let allSteps = [];
    words.forEach(w => {
        const wordSteps = getSingleWordSpellingSteps(w);
        allSteps = allSteps.concat(wordSteps);
    });
    // Thêm bước đọc cả cụm từ cuối cùng
    allSteps.push({ text: text.toLowerCase(), speak: text, type: 'combined' });
    return allSteps;
}

function spellWordAnimated(word, onStep, onComplete) {
    cancelSpelling();
    const steps = getSpellingSteps(word);
    let idx = 0;
    function next() {
        if (idx >= steps.length) { if (onComplete) onComplete(); return; }
        const step = steps[idx];
        if (onStep) onStep(step, idx, steps.length);
        speakVietnamese(step.speak);
        idx++;
        spellTimeout = setTimeout(next, AUDIO_CONFIG.spellDelay);
    }
    next();
}

function cancelSpelling() {
    if (spellTimeout) { clearTimeout(spellTimeout); spellTimeout = null; }
}

// ===================================================
// DỪNG ÂM THANH
// ===================================================
function stopAllAudio() {
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; currentAudio = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    isSpeaking = false;
    cancelSpelling();
}

function stopCurrentAudio() {
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; currentAudio = null; }
}
