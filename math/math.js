/* ============================================= */
/* Math Module - Học Toán cho trẻ 5 tuổi          */
/* Số đếm 0-10, phép cộng, phép trừ, 3 games    */
/* Level system, voice guidance, drag-drop, rewards */
/* ============================================= */

// ===================================================
// MATH DATA
// ===================================================
const NUMBERS = [
    { digit: 0, word: 'Không', emoji: '🔵' },
    { digit: 1, word: 'Một',   emoji: '🍎' },
    { digit: 2, word: 'Hai',   emoji: '🍊' },
    { digit: 3, word: 'Ba',    emoji: '🍋' },
    { digit: 4, word: 'Bốn',   emoji: '🍏' },
    { digit: 5, word: 'Năm',   emoji: '🍇' },
    { digit: 6, word: 'Sáu',   emoji: '🍉' },
    { digit: 7, word: 'Bảy',   emoji: '🍌' },
    { digit: 8, word: 'Tám',   emoji: '🍑' },
    { digit: 9, word: 'Chín',  emoji: '🍒' },
    { digit: 10, word: 'Mười',  emoji: '🌟' },
];

// Emojis dùng cho visual
const MATH_EMOJIS = ['🍎', '🍊', '🐱', '🐶', '⭐', '🌸', '🦋', '🐟', '🍌', '🍇'];
const COUNTING_EMOJIS = ['🐱', '🐶', '🐟', '🍎', '🌸', '⭐', '🦋', '🐝', '🍊', '🐰', '🐸', '🌺', '🐧', '🎈'];

// Number words for TTS
const NUMBER_WORDS = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười'];

let currentNumber = null;
let addState = { a: 0, b: 0, answer: 0 };
let subState = { a: 0, b: 0, answer: 0 };
let mathGameState = { type: null, questions: [], currentQ: 0, score: 0, totalQ: 10 };
let mathLevel = 2; // Level 1: 0-5, Level 2: 0-10 (Default set to 2 without UI)

// Sticker rewards
const STICKER_TYPES = ['🌟', '🏆', '🎖️', '🥇', '💎', '👑', '🦄', '🌈', '🎯', '💪', '🔥', '✨'];

// ===================================================
// MATH NAVIGATION
// ===================================================

function showMathSection(section) {
    document.getElementById('mathMenu').classList.add('hidden');
    document.querySelectorAll('#page-math .math-section').forEach(s => s.classList.add('hidden'));

    if (section === 'numbers') {
        document.getElementById('mathNumbers').classList.remove('hidden');
        renderNumberGrid();
    } else if (section === 'addition') {
        document.getElementById('mathAddition').classList.remove('hidden');
        generateAddition();
    } else if (section === 'subtraction') {
        document.getElementById('mathSubtraction').classList.remove('hidden');
        generateSubtraction();
    } else if (section === 'mathgames') {
        document.getElementById('mathGamesSection').classList.remove('hidden');
    }
}

function backToMathMenu() {
    document.querySelectorAll('#page-math .math-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('mathMenu').classList.remove('hidden');
}

function backToMathGames() {
    document.querySelectorAll('#page-math .math-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('mathGamesSection').classList.remove('hidden');
}

// ===================================================
// LEVEL SYSTEM
// ===================================================

function getMathLevel() {
    try { return parseInt(localStorage.getItem('vn_math_level')) || 1; }
    catch { return 1; }
}

function setMathLevel(level) {
    mathLevel = level;
    try { localStorage.setItem('vn_math_level', level); } catch {}
    updateLevelDisplay();
}

function updateLevelDisplay() {
    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.level) === mathLevel);
    });
}

function getMaxNumber() {
    return mathLevel === 1 ? 5 : 10;
}

// ===================================================
// STICKER/REWARD SYSTEM
// ===================================================

function getStickers() {
    try { return JSON.parse(localStorage.getItem('vn_stickers')) || []; }
    catch { return []; }
}

function awardSticker() {
    const stickers = getStickers();
    const newSticker = STICKER_TYPES[Math.floor(Math.random() * STICKER_TYPES.length)];
    stickers.push({ emoji: newSticker, date: new Date().toISOString() });
    try { localStorage.setItem('vn_stickers', JSON.stringify(stickers)); } catch {}
    showStickerReward(newSticker);
    return newSticker;
}

function showStickerReward(sticker) {
    // Create floating sticker animation
    const container = document.createElement('div');
    container.className = 'sticker-reward';
    container.innerHTML = `
        <div class="sticker-reward-content">
            <div class="sticker-reward-emoji">${sticker}</div>
            <div class="sticker-reward-text">Nhận sticker!</div>
        </div>
    `;
    document.body.appendChild(container);
    setTimeout(() => container.classList.add('show'), 50);
    setTimeout(() => {
        container.classList.remove('show');
        setTimeout(() => container.remove(), 500);
    }, 2000);
}

function renderStickerCollection() {
    const stickers = getStickers();
    const el = document.getElementById('stickerCollection');
    if (!el) return;
    if (stickers.length === 0) {
        el.innerHTML = '<div class="sticker-empty">Chưa có sticker nào. Hãy chơi game để nhận sticker nhé! 🎮</div>';
    } else {
        el.innerHTML = stickers.slice(-20).map(s =>
            `<span class="sticker-item">${s.emoji}</span>`
        ).join('');
    }
}

// ===================================================
// VOICE GUIDANCE for Math
// ===================================================

function speakEquation(a, op, b) {
    const aWord = NUMBER_WORDS[a] || a;
    const bWord = NUMBER_WORDS[b] || b;
    const opWord = op === '+' ? 'cộng' : 'trừ';
    const text = `${aWord} ${opWord} ${bWord} bằng mấy?`;
    speakVietnamese(text);
}

function speakNumber(n) {
    if (n >= 0 && n <= 10) {
        speakVietnamese(NUMBER_WORDS[n]);
    }
}

function speakCorrect() {
    const phrases = ['Đúng rồi! Giỏi lắm!', 'Tuyệt vời!', 'Hay quá!', 'Bạn giỏi lắm!'];
    speakVietnamese(phrases[Math.floor(Math.random() * phrases.length)]);
}

function speakWrong() {
    speakVietnamese('Thử lại nhé!');
}

// ===================================================
// HỌC SỐ ĐẾM (0 - 10)
// ===================================================

function renderNumberGrid() {
    const grid = document.getElementById('numberGrid');
    if (!grid) return;
    const progress = getProgress();

    grid.innerHTML = NUMBERS.map((num, i) => {
        const learned = progress.learnedNumbers.includes(num.digit);
        // Visual: show emoji count
        const visual = num.digit === 0 ? '⭕' : Array(num.digit).fill(num.emoji).join('');
        return `<button class="number-card ${learned ? 'learned' : ''}" onclick="openNumberModal(${i})">
            <span class="number-digit">${num.digit}</span>
            <span class="number-word">${num.word}</span>
            <span class="number-visual">${visual}</span>
        </button>`;
    }).join('');
}

function openNumberModal(i) {
    const num = NUMBERS[i];
    currentNumber = num;
    document.getElementById('numberModalDigit').textContent = num.digit;
    document.getElementById('numberModalWord').textContent = num.word;

    // Animated visual: items appear one by one
    const visualEl = document.getElementById('numberModalVisual');
    if (num.digit === 0) {
        visualEl.innerHTML = '<span style="font-size:3rem;">⭕</span>';
    } else {
        const items = Array(num.digit).fill(num.emoji);
        visualEl.innerHTML = items.map((e, idx) =>
            `<span class="math-item" style="animation-delay:${idx * 0.2}s; font-size:2.5rem;">${e}</span>`
        ).join(' ');
    }

    document.getElementById('numberModal').classList.add('show');
    playClickSound();
    markNumberLearned(num.digit);

    // Dừng âm thanh cũ (nếu có)
    stopAllAudio();
    
    // Tự động đếm sổ: Một, Hai, Ba... tương ứng với số lượng emoji
    if (num.digit > 0) {
        let count = 1;
        const countInterval = setInterval(() => {
            speakNumberVi(count);
            if (count >= num.digit) {
                clearInterval(countInterval);
                // Đọc lại từ vựng tổng quát sau khi đếm xong
                setTimeout(() => speakVietnamese(num.word), 800);
            }
            count++;
        }, 900); // Đếm mỗi 0.9s
        
        // Lưu ID interval vào biến global để có thể xoá nếu user đóng modal sớm
        window.currentCountingInterval = countInterval;
    } else {
        setTimeout(() => speakVietnamese("Không"), 400);
    }
}

function speakCurrentNumber() {
    if (currentNumber) {
        speakVietnamese(currentNumber.word);
    }
}

// ===================================================
// PHÉP CỘNG with Level System
// ===================================================

function generateAddition() {
    const max = getMaxNumber();
    const a = Math.floor(Math.random() * (max + 1));
    const bMax = Math.min(max, 10 - a);
    const b = Math.floor(Math.random() * (bMax + 1));
    addState = { a, b, answer: a + b };
    renderAddition();
}

function renderAddition() {
    const { a, b, answer } = addState;
    const emoji = MATH_EMOJIS[Math.floor(Math.random() * MATH_EMOJIS.length)];

    // Visual with delayed animation
    const group1 = a > 0 ? Array(a).fill(emoji).map((e, i) =>
        `<span class="math-item" style="animation-delay:${i * 0.15}s">${e}</span>`).join('') : '⭕';
    const group2 = b > 0 ? Array(b).fill(emoji).map((e, i) =>
        `<span class="math-item" style="animation-delay:${(a + i) * 0.15}s">${e}</span>`).join('') : '⭕';

    document.getElementById('addVisual').innerHTML =
        `<div class="math-visual-group">${group1}</div>` +
        '<span class="math-visual-op">+</span>' +
        `<div class="math-visual-group">${group2}</div>` +
        '<span class="math-visual-op">=</span>' +
        '<span class="math-visual-q">❓</span>';

    document.getElementById('addEquation').textContent = `${a} + ${b} = ?`;

    // Speak the equation
    setTimeout(() => speakEquation(a, '+', b), 500);

    const options = generateOptions(answer, 0, 10);
    document.getElementById('addOptions').innerHTML = options.map(o =>
        `<button class="math-option-btn" onclick="answerAddition(${o}, this)">${o}</button>`
    ).join('');

    document.getElementById('addFeedback').classList.add('hidden');
}

function answerAddition(val, btn) {
    const correct = val === addState.answer;
    document.querySelectorAll('#addOptions .math-option-btn').forEach(b => {
        b.disabled = true;
        if (parseInt(b.textContent) === addState.answer) b.classList.add('correct');
    });

    const fb = document.getElementById('addFeedbackText');
    if (correct) {
        btn.classList.add('correct');
        if (window.addStars) window.addStars(1);
        if (window.markNumberLearned && addState.answer <= 10) window.markNumberLearned(addState.answer);
        fb.textContent = window.getRandomPraise();
        fb.className = 'feedback-text correct-feedback';
        playCorrectSound();
        showConfetti();
        speakCorrect();
    } else {
        btn.classList.add('wrong');
        btn.classList.add('shake-anim');
        fb.textContent = `❌ Chưa đúng rồi! Đáp án là ${addState.answer}. Bé cố gắng nhé! 💪`;
        fb.className = 'feedback-text wrong-feedback';
        playWrongSound();
        speakWrong();
    }
    document.getElementById('addFeedback').classList.remove('hidden');

    // Auto-advance
    setTimeout(() => {
        generateAddition();
    }, 3000);
}

function nextAddition() { /* Deprecated */ }

// ===================================================
// PHÉP TRỪ with Level System
// ===================================================

function generateSubtraction() {
    const max = getMaxNumber();
    const a = Math.floor(Math.random() * max) + 1;
    const b = Math.floor(Math.random() * (a + 1));
    subState = { a, b, answer: a - b };
    renderSubtraction();
}

function renderSubtraction() {
    const { a, b, answer } = subState;
    const emoji = MATH_EMOJIS[Math.floor(Math.random() * MATH_EMOJIS.length)];

    // Visual: show a items, fade out b of them
    const items = Array(a).fill(emoji).map((e, i) => {
        const fade = i >= (a - b) ? ' math-item-fade' : '';
        return `<span class="math-item${fade}" style="animation-delay:${i * 0.12}s">${e}</span>`;
    }).join('');

    document.getElementById('subVisual').innerHTML =
        `<div class="math-visual-group">${items}</div>` +
        '<span class="math-visual-op">=</span>' +
        '<span class="math-visual-q">❓</span>';

    document.getElementById('subEquation').textContent = `${a} - ${b} = ?`;

    // Speak the equation
    setTimeout(() => speakEquation(a, '-', b), 500);

    const options = generateOptions(answer, 0, 10);
    document.getElementById('subOptions').innerHTML = options.map(o =>
        `<button class="math-option-btn" onclick="answerSubtraction(${o}, this)">${o}</button>`
    ).join('');

    document.getElementById('subFeedback').classList.add('hidden');
}

function answerSubtraction(val, btn) {
    const correct = val === subState.answer;
    document.querySelectorAll('#subOptions .math-option-btn').forEach(b => {
        b.disabled = true;
        if (parseInt(b.textContent) === subState.answer) b.classList.add('correct');
    });

    const fb = document.getElementById('subFeedbackText');
    if (correct) {
        btn.classList.add('correct');
        if (window.addStars) window.addStars(1);
        if (window.markNumberLearned && subState.answer <= 10) window.markNumberLearned(subState.answer);
        fb.textContent = window.getRandomPraise();
        fb.className = 'feedback-text correct-feedback';
        playCorrectSound();
        showConfetti();
        speakCorrect();
    } else {
        btn.classList.add('wrong');
        btn.classList.add('shake-anim');
        fb.textContent = `❌ Chưa chính xác! Đáp án đúng là ${subState.answer}. Thử lại câu sau nhé! 💪`;
        fb.className = 'feedback-text wrong-feedback';
        playWrongSound();
        speakWrong();
    }
    document.getElementById('subFeedback').classList.remove('hidden');

    // Auto-advance
    setTimeout(() => {
        generateSubtraction();
    }, 3000);
}

function nextSubtraction() { /* Deprecated */ }

// ===================================================
// HELPER: Generate option buttons
// ===================================================
function generateOptions(correct, min, max) {
    const opts = new Set([correct]);
    let attempts = 0;
    while (opts.size < 3 && attempts < 30) {
        // Generate close values for more challenging options
        let v;
        if (Math.random() > 0.5) {
            v = correct + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
        } else {
            v = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        if (v >= min && v <= max && v !== correct) opts.add(v);
        attempts++;
    }
    // Fill if still not enough
    while (opts.size < 3) {
        const v = Math.floor(Math.random() * (max - min + 1)) + min;
        opts.add(v);
    }
    return shuffle([...opts]);
}

// ===================================================
// MATH GAMES
// ===================================================

function startMathGame(type) {
    mathGameState = { type, questions: [], currentQ: 0, score: 0, totalQ: 10 };

    document.getElementById('mathGamesSection').classList.add('hidden');
    document.getElementById('mathGameComplete').classList.add('hidden');
    document.getElementById('mathGameArea').classList.remove('hidden');

    if (type === 'mathchoose') generateMathChooseQs();
    else if (type === 'counting') generateCountingQs();
    else if (type === 'mathdrag') generateMathDragQs();

    showMathGameQ();
}

function replayMathGame() {
    if (mathGameState.type) startMathGame(mathGameState.type);
}

// ------- Game 1: Chọn đáp án phép tính -------
function generateMathChooseQs() {
    const max = getMaxNumber();
    for (let i = 0; i < 10; i++) {
        const isAdd = Math.random() > 0.5;
        let a, b, answer, text, emoji;
        if (isAdd) {
            a = Math.floor(Math.random() * (max + 1));
            const bMax = Math.min(max, 10 - a);
            b = Math.floor(Math.random() * (bMax + 1));
            answer = a + b;
            text = `${a} + ${b} = ?`;
            emoji = '➕';
        } else {
            a = Math.floor(Math.random() * max) + 1;
            b = Math.floor(Math.random() * (a + 1));
            answer = a - b;
            text = `${a} - ${b} = ?`;
            emoji = '➖';
        }
        mathGameState.questions.push({ text, answer, emoji, options: generateOptions(answer, 0, 10) });
    }
}

// ------- Game 2: Đếm số -------
function generateCountingQs() {
    const max = getMaxNumber();
    for (let i = 0; i < 10; i++) {
        const count = Math.floor(Math.random() * max) + 1;
        const em = COUNTING_EMOJIS[Math.floor(Math.random() * COUNTING_EMOJIS.length)];
        mathGameState.questions.push({
            text: 'Đếm xem có bao nhiêu?',
            emoji: '🔢',
            countEmoji: em,
            count: count,
            answer: count,
            options: generateOptions(count, 1, 10)
        });
    }
}

// ------- Game 3: Kéo thả (Drag & Drop) -------
function generateMathDragQs() {
    const max = getMaxNumber();
    for (let i = 0; i < 10; i++) {
        const isAdd = Math.random() > 0.4;
        let a, b, answer, text;
        if (isAdd) {
            a = Math.floor(Math.random() * (max + 1));
            const bMax = Math.min(max, 10 - a);
            b = Math.floor(Math.random() * (bMax + 1));
            answer = a + b;
            text = `${a} + ${b} = ?`;
        } else {
            a = Math.floor(Math.random() * max) + 1;
            b = Math.floor(Math.random() * (a + 1));
            answer = a - b;
            text = `${a} - ${b} = ?`;
        }

        // Generate drag options: correct answer + distractors
        const dragOptions = generateOptions(answer, 0, 10);
        mathGameState.questions.push({
            text,
            answer,
            emoji: '🎯',
            isDrag: true,
            dragOptions
        });
    }
}

// ------- Show math game question -------
function showMathGameQ() {
    const q = mathGameState.questions[mathGameState.currentQ];
    if (!q) return;

    document.getElementById('mathGameRound').textContent = mathGameState.currentQ + 1;
    document.getElementById('mathGameScore').textContent = mathGameState.score;
    document.getElementById('mathGameFeedback').classList.add('hidden');

    const qEl = document.getElementById('mathGameQuestion');
    const optEl = document.getElementById('mathGameOptions');
    let html = '';

    if (q.countEmoji) {
        // Counting game - show items with staggered animation
        html += '<div class="counting-visual">';
        for (let i = 0; i < q.count; i++) {
            html += `<span class="math-item counting-item" style="animation-delay:${i * 0.15}s">${q.countEmoji}</span>`;
        }
        html += '</div>';
        html += `<div class="game-question-text" style="font-size:1.4rem; font-weight:700; margin-top:12px;">${q.text}</div>`;

        // Speak question
        setTimeout(() => speakVietnamese('Đếm xem có bao nhiêu?'), 300);

    } else if (q.isDrag) {
        // Drag & Drop game
        html += `<div class="game-question-emoji" style="font-size:3rem;">${q.emoji}</div>`;
        html += `<div class="game-question-text" style="font-size:1.8rem; font-weight:800;">${q.text}</div>`;
        html += `<div class="drag-drop-zone" id="dragDropZone" ondragover="handleDragOver(event)" ondrop="handleDrop(event)">
            <span class="drag-drop-placeholder">Kéo số vào đây</span>
        </div>`;

        // Speak equation
        const parts = q.text.match(/(\d+)\s*([+\-])\s*(\d+)/);
        if (parts) {
            setTimeout(() => speakEquation(parseInt(parts[1]), parts[2], parseInt(parts[3])), 300);
        }

    } else {
        html += `<div class="game-question-emoji" style="font-size:3rem;">${q.emoji}</div>`;
        html += `<div class="game-question-text" style="font-size:1.8rem; font-weight:800;">${q.text}</div>`;

        // Speak equation
        const parts = q.text.match(/(\d+)\s*([+\-])\s*(\d+)/);
        if (parts) {
            setTimeout(() => speakEquation(parseInt(parts[1]), parts[2], parseInt(parts[3])), 300);
        }
    }

    qEl.innerHTML = html;

    // Render options
    if (q.isDrag) {
        // Drag & Drop buttons
        optEl.innerHTML = q.dragOptions.map(o =>
            `<div class="drag-number" draggable="true" ondragstart="handleDragStart(event, ${o})" data-value="${o}">
                <span>${o}</span>
            </div>`
        ).join('');
        optEl.classList.add('drag-options-layout');

        // Also add touch support
        setTimeout(() => setupTouchDrag(), 100);
    } else {
        optEl.classList.remove('drag-options-layout');
        optEl.innerHTML = q.options.map(o =>
            `<button class="game-option-btn" onclick="answerMathGame(${o}, this)" style="font-size:2rem;">${o}</button>`
        ).join('');
    }
}

// ===================================================
// DRAG & DROP HANDLERS
// ===================================================

let draggedValue = null;

function handleDragStart(e, value) {
    draggedValue = value;
    e.dataTransfer.setData('text/plain', value);
    e.target.closest('.drag-number').classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const value = parseInt(e.dataTransfer.getData('text/plain'));
    if (!isNaN(value)) {
        checkDragAnswer(value);
    }
    // Remove dragging state
    document.querySelectorAll('.drag-number.dragging').forEach(el => el.classList.remove('dragging'));
}

function setupTouchDrag() {
    const dragItems = document.querySelectorAll('.drag-number');
    const dropZone = document.getElementById('dragDropZone');
    if (!dropZone) return;

    dragItems.forEach(item => {
        item.addEventListener('touchstart', handleTouchStart, { passive: false });
        item.addEventListener('touchmove', handleTouchMove, { passive: false });
        item.addEventListener('touchend', handleTouchEnd, { passive: false });

        // Also: click as fallback for touch
        item.addEventListener('click', () => {
            const value = parseInt(item.dataset.value);
            checkDragAnswer(value);
        });
    });
}

function handleTouchStart(e) {
    const touch = e.touches[0];
    const item = e.currentTarget;
    item.classList.add('dragging');
    draggedValue = parseInt(item.dataset.value);

    // Create clone for visual drag
    const clone = item.cloneNode(true);
    clone.id = 'dragClone';
    clone.style.cssText = `position:fixed; z-index:9999; pointer-events:none; 
        left:${touch.clientX - 30}px; top:${touch.clientY - 30}px; 
        width:60px; height:60px; opacity:0.8; transform:scale(1.2);`;
    document.body.appendChild(clone);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const clone = document.getElementById('dragClone');
    if (clone) {
        clone.style.left = (touch.clientX - 30) + 'px';
        clone.style.top = (touch.clientY - 30) + 'px';
    }

    // Check if over drop zone
    const dropZone = document.getElementById('dragDropZone');
    if (dropZone) {
        const rect = dropZone.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
            dropZone.classList.add('drag-over');
        } else {
            dropZone.classList.remove('drag-over');
        }
    }
}

function handleTouchEnd(e) {
    const clone = document.getElementById('dragClone');
    if (clone) clone.remove();

    const item = e.currentTarget;
    item.classList.remove('dragging');

    const dropZone = document.getElementById('dragDropZone');
    if (dropZone && dropZone.classList.contains('drag-over')) {
        dropZone.classList.remove('drag-over');
        checkDragAnswer(draggedValue);
    }
}

function checkDragAnswer(value) {
    const q = mathGameState.questions[mathGameState.currentQ];
    if (!q) return;
    const correct = value === q.answer;

    // Update drop zone
    const dropZone = document.getElementById('dragDropZone');
    if (dropZone) {
        dropZone.innerHTML = `<span class="drag-result ${correct ? 'correct' : 'wrong'}">${value}</span>`;
    }

    // Disable all drag numbers
    document.querySelectorAll('.drag-number').forEach(d => {
        d.setAttribute('draggable', 'false');
        d.style.pointerEvents = 'none';
        if (parseInt(d.dataset.value) === q.answer) {
            d.classList.add('correct');
        }
    });

    const fb = document.getElementById('mathGameFeedbackText');
    if (correct) {
        mathGameState.score++;
        if (window.authManager && window.authManager.recordScore) window.authManager.recordScore(1, 1);
        if (window.addStars) window.addStars(1);
        if (window.markNumberLearned && q.answer <= 10) window.markNumberLearned(q.answer);
        fb.textContent = window.getRandomPraise();
        fb.className = 'feedback-text correct-feedback';
        playCorrectSound();
        showConfetti();
        speakCorrect();
    } else {
        if (window.authManager && window.authManager.recordScore) window.authManager.recordScore(0, 1);
        fb.textContent = `❌ Gần đúng rồi! Đáp án đúng là ${q.answer}. Cố lên nào! 💪`;
        fb.className = 'feedback-text wrong-feedback';
        playWrongSound();
        speakWrong();
    }

    document.getElementById('mathGameScore').textContent = mathGameState.score;
    document.getElementById('mathGameFeedback').classList.remove('hidden');

    // Auto-advance
    setTimeout(() => {
        mathGameState.currentQ++;
        if (mathGameState.currentQ >= 10) showMathGameComplete();
        else showMathGameQ();
    }, 3000);
}

// Normal game answer (choose)
function answerMathGame(val, btn) {
    const q = mathGameState.questions[mathGameState.currentQ];
    const correct = val === q.answer;

    document.querySelectorAll('#mathGameOptions .game-option-btn').forEach(b => {
        b.disabled = true;
        if (parseInt(b.textContent) === q.answer) b.classList.add('correct');
    });

    const fb = document.getElementById('mathGameFeedbackText');
    if (correct) {
        btn.classList.add('correct');
        mathGameState.score++;
        if (window.authManager && window.authManager.recordScore) window.authManager.recordScore(1, 1);
        if (window.addStars) window.addStars(1);
        if (window.markNumberLearned && q.answer <= 10) window.markNumberLearned(q.answer);
        fb.textContent = window.getRandomPraise();
        fb.className = 'feedback-text correct-feedback';
        playCorrectSound();
        showConfetti();
        speakCorrect();
    } else {
        btn.classList.add('wrong');
        btn.classList.add('shake-anim');
        if (window.authManager && window.authManager.recordScore) window.authManager.recordScore(0, 1);
        fb.textContent = `❌ Sai một chút rồi! Đáp án là ${q.answer}. Bé làm lại nhé! 💪`;
        fb.className = 'feedback-text wrong-feedback';
        playWrongSound();
        speakWrong();
    }

    document.getElementById('mathGameScore').textContent = mathGameState.score;
    document.getElementById('mathGameFeedback').classList.remove('hidden');

    // Auto-advance after 3s
    setTimeout(() => {
        mathGameState.currentQ++;
        if (mathGameState.currentQ >= 10) showMathGameComplete();
        else showMathGameQ();
    }, 3000);
}

function nextMathGameQuestion() {
    mathGameState.currentQ++;
    if (mathGameState.currentQ >= 10) {
        showMathGameComplete();
    } else {
        showMathGameQ();
    }
}

function showMathGameComplete() {
    document.getElementById('mathGameArea').classList.add('hidden');
    document.getElementById('mathGameComplete').classList.remove('hidden');

    document.getElementById('mathFinalScore').textContent = mathGameState.score;
    const msg = document.getElementById('mathCompleteMsg');
    let stars = 0;

    if (mathGameState.score === 10) {
        msg.textContent = '🌟 Xuất sắc! Hoàn hảo! 🌟';
        stars = 3;
        showConfetti();
        awardSticker();
    } else if (mathGameState.score >= 7) {
        msg.textContent = '👏 Rất giỏi!';
        stars = 2;
        showConfetti();
        if (Math.random() > 0.3) awardSticker();
    } else if (mathGameState.score >= 5) {
        msg.textContent = '😊 Khá tốt! Luyện thêm nha!';
        stars = 1;
    } else {
        msg.textContent = '💪 Cố gắng thêm nhé!';
    }

    if (stars > 0) addStars(5);
    
    playCorrectSound();
    renderStickerCollection();
    speakVietnamese(msg.textContent.replace(/[🌟👏😊💪]/g, ''));
}

// Initialize level on load
document.addEventListener('DOMContentLoaded', () => {
    mathLevel = getMathLevel();
});
