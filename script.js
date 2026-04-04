/* ============================================= */
/* Vietnamese Learning Website - Main Script      */
/* TTS: Web Speech API (vi-VN) + Google TTS       */
/* ============================================= */

// ===================================================
// DATA
// ===================================================
const ALPHABET = [
    { letter: 'A',  lower: 'a',  example: 'Ăn',     emoji: '🍚',  sound: 'A',      audioKey: 'a' },
    { letter: 'Ă',  lower: 'ă',  example: 'Ăn',     emoji: '🍜',  sound: 'á',      audioKey: 'aw' },
    { letter: 'Â',  lower: 'â',  example: 'Ấm',     emoji: '☕',  sound: 'ớ',      audioKey: 'aa' },
    { letter: 'B',  lower: 'b',  example: 'Bóng',   emoji: '⚽',  sound: 'Bờ',     audioKey: 'b' },
    { letter: 'C',  lower: 'c',  example: 'Cá',     emoji: '🐟',  sound: 'Cờ',     audioKey: 'c' },
    { letter: 'D',  lower: 'd',  example: 'Dê',     emoji: '🐐',  sound: 'Dờ',     audioKey: 'd' },
    { letter: 'Đ',  lower: 'đ',  example: 'Đèn',    emoji: '💡',  sound: 'Đờ',     audioKey: 'dd' },
    { letter: 'E',  lower: 'e',  example: 'Em bé',  emoji: '👶',  sound: 'E',      audioKey: 'e' },
    { letter: 'Ê',  lower: 'ê',  example: 'Ếch',    emoji: '🐸',  sound: 'Ê',      audioKey: 'ee' },
    { letter: 'G',  lower: 'g',  example: 'Gà',     emoji: '🐔',  sound: 'Gờ',     audioKey: 'g' },
    { letter: 'H',  lower: 'h',  example: 'Hoa',    emoji: '🌸',  sound: 'Hờ',     audioKey: 'h' },
    { letter: 'I',  lower: 'i',  example: 'Ích',    emoji: '✨',  sound: 'I',      audioKey: 'i' },
    { letter: 'K',  lower: 'k',  example: 'Kẹo',    emoji: '🍬',  sound: 'ka',     audioKey: 'k' },
    { letter: 'L',  lower: 'l',  example: 'Lá',     emoji: '🍃',  sound: 'Lờ',     audioKey: 'l' },
    { letter: 'M',  lower: 'm',  example: 'Mèo',    emoji: '🐱',  sound: 'Mờ',     audioKey: 'm' },
    { letter: 'N',  lower: 'n',  example: 'Nai',    emoji: '🦌',  sound: 'Nờ',     audioKey: 'n' },
    { letter: 'O',  lower: 'o',  example: 'Ong',    emoji: '🐝',  sound: 'O',      audioKey: 'o' },
    { letter: 'Ô',  lower: 'ô',  example: 'Ô tô',  emoji: '🚗',  sound: 'Ô',      audioKey: 'oo' },
    { letter: 'Ơ',  lower: 'ơ',  example: 'Ơi',    emoji: '👋',  sound: 'Ơ',      audioKey: 'ow' },
    { letter: 'P',  lower: 'p',  example: 'Pin',    emoji: '🔋',  sound: 'Pờ',     audioKey: 'p' },
    { letter: 'Q',  lower: 'q',  example: 'Quả',    emoji: '🍎',  sound: 'quờ',    audioKey: 'q' },
    { letter: 'R',  lower: 'r',  example: 'Rùa',    emoji: '🐢',  sound: 'Rờ',     audioKey: 'r' },
    { letter: 'S',  lower: 's',  example: 'Sao',    emoji: '⭐',  sound: 'Sờ',     audioKey: 's' },
    { letter: 'T',  lower: 't',  example: 'Thỏ',    emoji: '🐰',  sound: 'Tờ',     audioKey: 't' },
    { letter: 'U',  lower: 'u',  example: 'Ủng',    emoji: '🥾',  sound: 'U',      audioKey: 'u' },
    { letter: 'Ư',  lower: 'ư',  example: 'Ước mơ', emoji: '🌈',  sound: 'Ư',      audioKey: 'uw' },
    { letter: 'V',  lower: 'v',  example: 'Voi',    emoji: '🐘',  sound: 'Vờ',     audioKey: 'v' },
    { letter: 'X',  lower: 'x',  example: 'Xe đạp', emoji: '🚲',  sound: 'Xờ',     audioKey: 'x' },
    { letter: 'Y',  lower: 'y',  example: 'Yêu',    emoji: '❤️', sound: 'i',      audioKey: 'y' },
];

// Phụ âm ghép
const PHU_AM_GHEP = [
    { letters: 'CH', sound: 'chờ', example: 'Chó', emoji: '🐶' },
    { letters: 'GH', sound: 'gờ', example: 'Ghế', emoji: '🪑' },
    { letters: 'GI', sound: 'di', example: 'Gió', emoji: '💨' },
    { letters: 'KH', sound: 'khờ', example: 'Khỉ', emoji: '🐒' },
    { letters: 'NG', sound: 'ngờ', example: 'Ngựa', emoji: '🐴' },
    { letters: 'NGH', sound: 'ngờ', example: 'Nghé', emoji: '🐃' },
    { letters: 'NH', sound: 'nhờ', example: 'Nhà', emoji: '🏡' },
    { letters: 'PH', sound: 'phờ', example: 'Phở', emoji: '🍜' },
    { letters: 'QU', sound: 'quờ', example: 'Quạ', emoji: '🐦‍⬛' },
    { letters: 'TH', sound: 'thờ', example: 'Thỏ', emoji: '🐰' },
    { letters: 'TR', sound: 'trờ', example: 'Tre', emoji: '🎋' },
];

// Vần
const VAN_LIST = [
    // A, Ă, Â
    { van: 'ac', example: 'Bác', emoji: '👨' }, { van: 'ach', example: 'Sách', emoji: '📕' },
    { van: 'ai', example: 'Tai', emoji: '👂' }, { van: 'am', example: 'Cam', emoji: '🍊' },
    { van: 'an', example: 'Bàn', emoji: '🪑' }, { van: 'ang', example: 'Vàng', emoji: '💰' },
    { van: 'anh', example: 'Bánh', emoji: '🍰' }, { van: 'ao', example: 'Sao', emoji: '⭐' },
    { van: 'ap', example: 'Sạp', emoji: '🏪' }, { van: 'at', example: 'Hát', emoji: '🎤' },
    { van: 'au', example: 'Tàu', emoji: '🚢' }, { van: 'ay', example: 'Tay', emoji: '✋' },
    
    { van: 'ăc', example: 'Mặc', emoji: '👕' }, { van: 'ăm', example: 'Tăm', emoji: '🥢' },
    { van: 'ăn', example: 'Khăn', emoji: '🧣' }, { van: 'ăng', example: 'Trăng', emoji: '🌙' },
    { van: 'ăp', example: 'Bắp', emoji: '🌽' }, { van: 'ăt', example: 'Cắt', emoji: '✂️' },
    
    { van: 'âc', example: 'Gấc', emoji: '🍅' }, { van: 'âm', example: 'Ấm', emoji: '🫖' },
    { van: 'ân', example: 'Chân', emoji: '🦶' }, { van: 'âng', example: 'Vâng', emoji: '👍' },
    { van: 'âp', example: 'Cấp', emoji: '🚑' }, { van: 'ât', example: 'Đất', emoji: '🪴' },
    { van: 'âu', example: 'Trâu', emoji: '🐃' }, { van: 'ây', example: 'Mây', emoji: '☁️' },

    // E, Ê
    { van: 'ec', example: 'Éc', emoji: '🐷' }, { van: 'em', example: 'Kem', emoji: '🍦' },
    { van: 'en', example: 'Đèn', emoji: '💡' }, { van: 'eng', example: 'Xẻng', emoji: '⛏️' },
    { van: 'eo', example: 'Mèo', emoji: '🐱' }, { van: 'ep', example: 'Dép', emoji: '🩴' },
    { van: 'et', example: 'Sét', emoji: '⚡' },
    
    { van: 'êch', example: 'Ếch', emoji: '🐸' }, { van: 'êm', example: 'Đêm', emoji: '🌃' },
    { van: 'ên', example: 'Nến', emoji: '🕯️' }, { van: 'ênh', example: 'Kênh', emoji: '📺' },
    { van: 'êp', example: 'Bếp', emoji: '🍳' }, { van: 'êt', example: 'Tết', emoji: '🧧' },
    { van: 'êu', example: 'Lều', emoji: '⛺' },

    // I, Y
    { van: 'ia', example: 'Bia', emoji: '🍺' }, { van: 'ic', example: 'Ích', emoji: '🦸' },
    { van: 'ich', example: 'Lịch', emoji: '📅' }, { van: 'im', example: 'Chim', emoji: '🐦' },
    { van: 'in', example: 'Pin', emoji: '🔋' }, { van: 'inh', example: 'Kính', emoji: '👓' },
    { van: 'ip', example: 'Nhịp', emoji: '🥁' }, { van: 'it', example: 'Mít', emoji: '🍈' },
    { van: 'iu', example: 'Dịu', emoji: '😌' },
    
    { van: 'iêc', example: 'Việc', emoji: '💼' }, { van: 'iêm', example: 'Tiêm', emoji: '💉' },
    { van: 'iên', example: 'Tiền', emoji: '💵' }, { van: 'iêng', example: 'Giếng', emoji: '🕳️' },
    { van: 'iêp', example: 'Tiếp', emoji: '🤝' }, { van: 'iêt', example: 'Viết', emoji: '✍️' },
    { van: 'iêu', example: 'Diều', emoji: '🪁' },

    { van: 'yêm', example: 'Yếm', emoji: '👶' }, { van: 'yên', example: 'Yên', emoji: '🛵' },
    { van: 'yêng', example: 'Yểng', emoji: '🐦' }, { van: 'yêu', example: 'Yêu', emoji: '❤️' },
    { van: 'yêt', example: 'Yết', emoji: '📜' },

    // O
    { van: 'oa', example: 'Hoa', emoji: '🌸' }, { van: 'oac', example: 'Khoác', emoji: '🧥' },
    { van: 'oach', example: 'Hoạch', emoji: '📋' }, { van: 'oai', example: 'Xoài', emoji: '🥭' },
    { van: 'oam', example: 'Ngoạm', emoji: '🦖' }, { van: 'oan', example: 'Toán', emoji: '🔢' },
    { van: 'oang', example: 'Choang', emoji: '💫' }, { van: 'oanh', example: 'Doanh', emoji: '🏢' },
    { van: 'oap', example: 'Oáp', emoji: '🥱' }, { van: 'oat', example: 'Hoạt', emoji: '🏃' },
    { van: 'oay', example: 'Xoay', emoji: '🌀' }, { van: 'oăc', example: 'Ngoắc', emoji: '🤙' },
    { van: 'oăm', example: 'Khoằm', emoji: '🦅' }, { van: 'oăn', example: 'Xoăn', emoji: '🧑‍🦱' },
    { van: 'oăng', example: 'Choăng', emoji: '🔗' }, { van: 'oăt', example: 'Choắt', emoji: '🐁' },
    
    { van: 'oe', example: 'Khoẻ', emoji: '💪' }, { van: 'oen', example: 'Hoen', emoji: '😢' },
    { van: 'oeo', example: 'Ngoèo', emoji: '〰️' }, { van: 'oet', example: 'Khoét', emoji: '⛏️' },
    
    { van: 'oc', example: 'Cóc', emoji: '🐸' }, { van: 'oi', example: 'Voi', emoji: '🐘' },
    { van: 'om', example: 'Xóm', emoji: '🏘️' }, { van: 'on', example: 'Con', emoji: '👶' },
    { van: 'ong', example: 'Ong', emoji: '🐝' }, { van: 'op', example: 'Cọp', emoji: '🐅' },
    { van: 'ot', example: 'Gót', emoji: '👠' },

    // Ô, Ơ
    { van: 'ôc', example: 'Cốc', emoji: '🥤' }, { van: 'ôi', example: 'Môi', emoji: '👄' },
    { van: 'ôm', example: 'Ôm', emoji: '🫂' }, { van: 'ôn', example: 'Chồn', emoji: '🦡' },
    { van: 'ông', example: 'Bông', emoji: '🌼' }, { van: 'ôp', example: 'Hộp', emoji: '📦' },
    { van: 'ôt', example: 'Cột', emoji: '🗼' },
    
    { van: 'ơi', example: 'Bơi', emoji: '🏊' }, { van: 'ơm', example: 'Cơm', emoji: '🍚' },
    { van: 'ơn', example: 'Lợn', emoji: '🐷' }, { van: 'ơp', example: 'Lớp', emoji: '🏫' },
    { van: 'ơt', example: 'Vớt', emoji: '🎣' },

    // U
    { van: 'ua', example: 'Cua', emoji: '🦀' }, { van: 'uân', example: 'Tuần', emoji: '🗓️' },
    { van: 'uâng', example: 'Khuâng', emoji: '😌' }, { van: 'uât', example: 'Luật', emoji: '⚖️' },
    { van: 'uây', example: 'Khuấy', emoji: '🥄' }, { van: 'uơ', example: 'Huơ', emoji: '👋' },
    
    { van: 'uê', example: 'Thuê', emoji: '🏠' }, { van: 'uêch', example: 'Tuếch', emoji: '🗑️' },
    { van: 'uênh', example: 'Huênh', emoji: '🤷' }, { van: 'uêt', example: 'Quệt', emoji: '🖌️' },

    { van: 'uc', example: 'Cúc', emoji: '🌼' }, { van: 'ui', example: 'Núi', emoji: '⛰️' },
    { van: 'um', example: 'Chùm', emoji: '🍇' }, { van: 'un', example: 'Mùn', emoji: '🪵' },
    { van: 'ung', example: 'Thùng', emoji: '🗑️' }, { van: 'up', example: 'Búp', emoji: '🌷' },
    { van: 'ut', example: 'Bút', emoji: '🖊️' },
    
    { van: 'uôc', example: 'Cuốc', emoji: '⛏️' }, { van: 'uôi', example: 'Muối', emoji: '🧂' },
    { van: 'uôm', example: 'Nhuộm', emoji: '🎨' }, { van: 'uôn', example: 'Cuộn', emoji: '🧻' },
    { van: 'uông', example: 'Vuông', emoji: '🟦' }, { van: 'uôt', example: 'Chuột', emoji: '🐁' },

    // UY
    { van: 'uy', example: 'Huy', emoji: '🏅' }, { van: 'uya', example: 'Khuya', emoji: '🕰️' },
    { van: 'uych', example: 'Huỵch', emoji: '💥' }, { van: 'uynh', example: 'Huynh', emoji: '👨' },
    { van: 'uyn', example: 'Tuyn', emoji: '⛺' }, { van: 'uyp', example: 'Tuýp', emoji: '🧴' },
    { van: 'uyt', example: 'Suýt', emoji: '😬' }, { van: 'uyên', example: 'Thuyền', emoji: '⛵' },
    { van: 'uyêt', example: 'Tuyết', emoji: '❄️' },

    // Ư
    { van: 'ưa', example: 'Mưa', emoji: '🌧️' }, { van: 'ưc', example: 'Mực', emoji: '🦑' },
    { van: 'ưi', example: 'Gửi', emoji: '✉️' }, { van: 'ưng', example: 'Sừng', emoji: '🦌' },
    { van: 'ưt', example: 'Mứt', emoji: '🍬' }, { van: 'ưu', example: 'Cừu', emoji: '🐑' },
    
    { van: 'ươc', example: 'Lược', emoji: '🪮' }, { van: 'ươi', example: 'Bưởi', emoji: '🍊' },
    { van: 'ươm', example: 'Bướm', emoji: '🦋' }, { van: 'ươn', example: 'Lươn', emoji: '🐍' },
    { van: 'ương', example: 'Giường', emoji: '🛏️' }, { van: 'ươp', example: 'Mướp', emoji: '🥒' },
    { van: 'ươt', example: 'Lướt', emoji: '🏄' }, { van: 'ươu', example: 'Hươu', emoji: '🦌' },
];

const VOCABULARY = [
    // === Động vật (Animals) ===
    { word: 'Chó', emoji: '🐶', category: 'animals', spell: 'C - H - Ó' },
    { word: 'Mèo', emoji: '🐱', category: 'animals', spell: 'M - È - O' },
    { word: 'Gà', emoji: '🐔', category: 'animals', spell: 'G - À' },
    { word: 'Lợn', emoji: '🐷', category: 'animals', spell: 'L - Ợ - N' },
    { word: 'Bò', emoji: '🐄', category: 'animals', spell: 'B - Ò' },
    { word: 'Trâu', emoji: '🐃', category: 'animals', spell: 'T - R - Â - U' },
    { word: 'Vịt', emoji: '🦆', category: 'animals', spell: 'V - Ị - T' },
    { word: 'Ngựa', emoji: '🐴', category: 'animals', spell: 'N - G - Ự - A' },
    { word: 'Khỉ', emoji: '🐒', category: 'animals', spell: 'K - H - Ỉ' },
    { word: 'Voi', emoji: '🐘', category: 'animals', spell: 'V - O - I' },
    { word: 'Thỏ', emoji: '🐰', category: 'animals', spell: 'T - H - Ỏ' },
    { word: 'Hổ', emoji: '🐯', category: 'animals', spell: 'H - Ổ' },
    { word: 'Sư tử', emoji: '🦁', category: 'animals', spell: 'S - Ư - T - Ử' },
    { word: 'Gấu', emoji: '🐻', category: 'animals', spell: 'G - Ấ - U' },
    { word: 'Ếch', emoji: '🐸', category: 'animals', spell: 'Ế - C - H' },
    { word: 'Rùa', emoji: '🐢', category: 'animals', spell: 'R - Ù - A' },
    { word: 'Chim', emoji: '🐦', category: 'animals', spell: 'C - H - I - M' },
    { word: 'Cá', emoji: '🐟', category: 'animals', spell: 'C - Á' },
    { word: 'Ong', emoji: '🐝', category: 'animals', spell: 'O - N - G' },
    { word: 'Bướm', emoji: '🦋', category: 'animals', spell: 'B - Ư - Ớ - M' },
    // === Trái cây (Fruits) ===
    { word: 'Táo', emoji: '🍎', category: 'fruits', spell: 'T - Á - O' },
    { word: 'Chuối', emoji: '🍌', category: 'fruits', spell: 'C - H - U - Ố - I' },
    { word: 'Cam', emoji: '🍊', category: 'fruits', spell: 'C - A - M' },
    { word: 'Chanh', emoji: '🍋', category: 'fruits', spell: 'C - H - A - N - H' },
    { word: 'Dưa hấu', emoji: '🍉', category: 'fruits', spell: 'D - Ư - A - H - Ấ - U' },
    { word: 'Nho', emoji: '🍇', category: 'fruits', spell: 'N - H - O' },
    { word: 'Xoài', emoji: '🥭', category: 'fruits', spell: 'X - O - À - I' },
    { word: 'Dâu tây', emoji: '🍓', category: 'fruits', spell: 'D - Â - U - T - Â - Y' },
    { word: 'Dứa', emoji: '🍍', category: 'fruits', spell: 'D - Ứ - A' },
    { word: 'Đào', emoji: '🍑', category: 'fruits', spell: 'Đ - À - O' },
    { word: 'Dừa', emoji: '🥥', category: 'fruits', spell: 'D - Ừ - A' },
    // === Đồ vật (Objects) ===
    { word: 'Bàn', emoji: '🪑', category: 'objects', spell: 'B - À - N' },
    { word: 'Ghế', emoji: '🪑', category: 'objects', spell: 'G - H - Ế' },
    { word: 'Sách', emoji: '📕', category: 'objects', spell: 'S - Á - C - H' },
    { word: 'Vở', emoji: '📓', category: 'objects', spell: 'V - Ở' },
    { word: 'Bút', emoji: '✏️', category: 'objects', spell: 'B - Ú - T' },
    { word: 'Cặp', emoji: '🎒', category: 'objects', spell: 'C - Ặ - P' },
    { word: 'Áo', emoji: '👕', category: 'objects', spell: 'Á - O' },
    { word: 'Quần', emoji: '👖', category: 'objects', spell: 'Q - U - Ầ - N' },
    { word: 'Mũ', emoji: '🧢', category: 'objects', spell: 'M - Ũ' },
    { word: 'Giày', emoji: '👟', category: 'objects', spell: 'G - I - À - Y' },
    { word: 'Đồng hồ', emoji: '⌚', category: 'objects', spell: 'Đ - Ồ - N - G - H - Ồ' },
    { word: 'Ti vi', emoji: '📺', category: 'objects', spell: 'T - I - V - I' },
    { word: 'Điện thoại', emoji: '📱', category: 'objects', spell: 'Đ - I - Ệ - N - T - H - O - Ạ - I' },
    { word: 'Giường', emoji: '🛏️', category: 'objects', spell: 'G - I - Ư - Ờ - N - G' },
    { word: 'Quạt', emoji: '🪭', category: 'objects', spell: 'Q - U - Ạ - T' },
    { word: 'Cốc', emoji: '🥤', category: 'objects', spell: 'C - Ố - C' },
    { word: 'Bát', emoji: '🥣', category: 'objects', spell: 'B - Á - T' },
    { word: 'Thìa', emoji: '🥄', category: 'objects', spell: 'T - H - Ì - A' },
    { word: 'Xe đạp', emoji: '🚲', category: 'objects', spell: 'X - E - Đ - Ạ - P' },
    { word: 'Ô tô', emoji: '🚗', category: 'objects', spell: 'Ô - T - Ô' },
    // === Thiên nhiên (Nature) ===
    { word: 'Mặt trời', emoji: '☀️', category: 'nature', spell: 'M - Ặ - T - T - R - Ờ - I' },
    { word: 'Mặt trăng', emoji: '🌙', category: 'nature', spell: 'M - Ặ - T - T - R - Ă - N - G' },
    { word: 'Ngôi sao', emoji: '⭐', category: 'nature', spell: 'N - G - Ô - I - S - A - O' },
    { word: 'Đám mây', emoji: '☁️', category: 'nature', spell: 'Đ - Á - M - M - Â - Y' },
    { word: 'Trời mưa', emoji: '🌧️', category: 'nature', spell: 'T - R - Ờ - I - M - Ư - A' },
    { word: 'Sấm sét', emoji: '⚡', category: 'nature', spell: 'S - Ấ - M - S - É - T' },
    { word: 'Cầu vồng', emoji: '🌈', category: 'nature', spell: 'C - Ầ - U - V - Ồ - N - G' },
    { word: 'Ngọn núi', emoji: '⛰️', category: 'nature', spell: 'N - G - Ọ - N - N - Ú - I' },
    { word: 'Bãi biển', emoji: '🏖️', category: 'nature', spell: 'B - Ã - I - B - I - Ể - N' },
    { word: 'Dòng sông', emoji: '🏞️', category: 'nature', spell: 'D - Ò - N - G - S - Ô - N - G' },
    { word: 'Hoa', emoji: '🌸', category: 'nature', spell: 'H - O - A' },
    { word: 'Cây', emoji: '🌳', category: 'nature', spell: 'C - Â - Y' },
    { word: 'Lá', emoji: '🍃', category: 'nature', spell: 'L - Á' },
];

// ===================================================
// STATE
// ===================================================
let currentPage = 'vietnamese';
let currentModalLetter = null;
let currentVocabWord = null;
let gameState = { type: null, questions: [], currentQ: 0, score: 0, totalQuestions: 10 };

// ===================================================
// TTS: Đã chuyển sang audio.js
// speakVietnamese(), speakEnglish(), stopAllAudio()...
// ===================================================

// ===================================================
// SOUND EFFECTS (Web Audio API)
// ===================================================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function getAudioCtx() { if (!audioCtx) audioCtx = new AudioCtx(); return audioCtx; }

function playCorrectSound() {
    try {
        const ctx = getAudioCtx(); const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.setValueAtTime(523, ctx.currentTime);
        o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        g.gain.setValueAtTime(0.3, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.4);
    } catch (e) {}
}

function playWrongSound() {
    try {
        const ctx = getAudioCtx(); const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination); o.type = 'sawtooth';
        o.frequency.setValueAtTime(200, ctx.currentTime);
        o.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        g.gain.setValueAtTime(0.2, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.3);
    } catch (e) {}
}

function playClickSound() {
    try {
        const ctx = getAudioCtx(); const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.setValueAtTime(800, ctx.currentTime);
        g.gain.setValueAtTime(0.15, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.1);
    } catch (e) {}
}

// ===================================================
// CONFETTI
// ===================================================
function showConfetti() {
    const c = document.getElementById('confettiContainer');
    const colors = ['#FF6B9D','#C084FC','#60A5FA','#22D3EE','#4ADE80','#FBBF24','#FB923C'];
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div'); p.className = 'confetti-piece';
        p.style.left = Math.random()*100+'%';
        p.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        p.style.width = (6+Math.random()*8)+'px'; p.style.height = (6+Math.random()*8)+'px';
        p.style.borderRadius = Math.random()>0.5?'50%':'2px';
        p.style.animationDuration = (1.5+Math.random()*2)+'s';
        p.style.animationDelay = Math.random()*0.5+'s';
        c.appendChild(p);
    }
    setTimeout(() => { c.innerHTML = ''; }, 4000);
}

// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundStars();
    renderAlphabetGrid();
    renderVocabGrid('all');
    updateProgress();
    setupMascot();
});

// ===================================================
// BACKGROUND STARS
// ===================================================
function createBackgroundStars() {
    const c = document.getElementById('bgStars');
    const emojis = ['⭐','🌟','✨','💫','🌈','🦋','🌸','🍀'];
    for (let i = 0; i < 15; i++) {
        const s = document.createElement('span'); s.className = 'bg-star';
        s.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        s.style.left = Math.random()*100+'%';
        s.style.animationDuration = (15+Math.random()*20)+'s';
        s.style.animationDelay = Math.random()*15+'s';
        s.style.fontSize = (16+Math.random()*16)+'px';
        c.appendChild(s);
    }
}

// ===================================================
// MASCOT
// ===================================================
function setupMascot() {
    const img = document.getElementById('mascotImg');
    const container = document.getElementById('mascot');
    let t;
    img.addEventListener('click', () => {
        container.classList.toggle('show-speech');
        clearTimeout(t);
        if (container.classList.contains('show-speech')) {
            updateMascotSpeech();
            t = setTimeout(() => container.classList.remove('show-speech'), 4000);
        }
    });
    setTimeout(() => {
        container.classList.add('show-speech');
        setTimeout(() => container.classList.remove('show-speech'), 4000);
    }, 1500);
}

function updateMascotSpeech() {
    const msgs = {
        vietnamese: ['Chào bạn nhỏ! 🌟<br>Chọn bài học tiếng Việt!', 'Học tiếng Việt<br>rất vui đấy! 📚'],
        home: ['Chào bạn nhỏ! 🌟<br>Hãy chọn bài học nhé!','Hôm nay học gì nào? 📚'],
        alphabet: ['Chạm vào chữ để<br>nghe phát âm nha! 🔊','Bảng chữ cái có<br>29 chữ đấy! 🔤'],
        vocabulary: ['Học từ vựng rất vui! 📚','Chạm vào từ để<br>xem hình nhé! 🖼️'],
        flashcard: ['Lật thẻ học tiếng<br>Anh nào! 🃏','Bấm loa để nghe<br>phát âm nhé! 🔊'],
        math: ['Toán rất thú vị! 🔢','Cùng đếm số nào! 🧮'],
        english: ['Let\'s learn English! 🇬🇧','Học tiếng Anh<br>thật vui! 🌟'],
        games: ['Chơi game vừa vui<br>vừa học nè! 🎮','Cố gắng lên nào! 💪'],
    };
    const list = msgs[currentPage] || msgs.home;
    document.getElementById('mascotSpeech').innerHTML = list[Math.floor(Math.random()*list.length)];
}

// ===================================================
// NAVIGATION
// ===================================================
function navigateTo(page) {
    // === NEW LOGIC: Support physical HTML files ===
    const isFile = window.location.protocol === 'file:';
    let path = window.location.pathname || '';
    let filename = path.split('/').pop().toLowerCase();
    if (filename.includes('?')) filename = filename.split('?')[0];
    if (filename.includes('#')) filename = filename.split('#')[0];
    
    const pageMap = {
        'home': 'index.html',
        'vietnamese': 'vietnamese.html',
        'english': 'english.html',
        'math': 'math.html'
    };

    if (pageMap[page]) {
        let expectedFile = pageMap[page];
        if (!filename) filename = 'index.html'; // Default
        
        // Cần điều hướng sang trang khác nếu khác file hiện tại
        if (filename !== expectedFile) {
            window.location.href = expectedFile;
            return;
        }
    }
    
    // === KEEP OLD SPA LOGIC for inner navigations ===
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    
    // Highlight the correct tab
    const tabPage = ['alphabet','vocabulary','flashcard','games'].includes(page) ? 'vietnamese' : page;
    document.querySelectorAll('.nav-btn, .bottom-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === tabPage);
    });
    
    currentPage = page;
    if (page === 'games') backToGames();
    if (page === 'math') backToMathMenu();
    if (page === 'english') backToEnMenu();
    if (['vietnamese', 'home'].includes(page)) updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateMascotSpeech();
}

// ===================================================
// LOCAL STORAGE
// ===================================================
function getProgress() {
    try { 
        let p = JSON.parse(localStorage.getItem('vn_learn_progress')) || { 
            learnedLetters: [], learnedWords: [], learnedNumbers: [], learnedRhymes: [],
            learnedDigraphs: [], learnedThemes: [],
            enLetters: [], enVocab: [], enLessons: [], 
            stars: 0, stars_math: 0, stars_en: 0 
        }; 
        if (!p.migratedStars) {
            // Migrate English stars if they haven't been
            let enProg = {}; try { enProg = JSON.parse(localStorage.getItem('en_fc_progress') || '{}'); } catch {}
            let enScore = 0; Object.values(enProg).forEach(v => enScore += v);
            if (enScore > 0 && p.stars >= enScore) {
                p.stars_en = (p.stars_en || 0) + enScore;
                p.stars -= enScore; // Remove from total pool which is now VI pool
            }
            p.migratedStars = true; saveProgress(p);
        }
        return p;
    }
    catch { return { learnedLetters: [], learnedWords: [], learnedNumbers: [], stars: 0, stars_math: 0, stars_en: 0, migratedStars: true }; }
}
function saveProgress(p) { try { localStorage.setItem('vn_learn_progress', JSON.stringify(p)); } catch {} }
function markLetterLearned(l) { const p = getProgress(); if (!p.learnedLetters.includes(l)) { p.learnedLetters.push(l); p.stars += 1; saveProgress(p); updateProgress(); renderAlphabetGrid(); } }
function markWordLearned(w) { const p = getProgress(); if (!p.learnedWords.includes(w)) { p.learnedWords.push(w); p.stars += 1; saveProgress(p); updateProgress(); } }
function markThemeLearned(t) { const p = getProgress(); if (!(p.learnedThemes||[]).includes(t)) { if(!p.learnedThemes) p.learnedThemes=[]; p.learnedThemes.push(t); p.stars += 1; saveProgress(p); updateProgress(); } }
function markNumberLearned(n) { const p = getProgress(); if (!p.learnedNumbers.includes(n)) { p.learnedNumbers.push(n); p.stars_math = (p.stars_math || 0) + 1; saveProgress(p); updateProgress(); } }
function markRhymeLearned(r) { const p = getProgress(); if (!p.learnedRhymes.includes(r)) { p.learnedRhymes.push(r); p.stars = (p.stars || 0) + 1; saveProgress(p); updateProgress(); } }
function markDigraphLearned(d) { const p = getProgress(); if (!(p.learnedDigraphs||[]).includes(d)) { if(!p.learnedDigraphs) p.learnedDigraphs=[]; p.learnedDigraphs.push(d); p.stars += 1; saveProgress(p); updateProgress(); } }

// English Tracking
function markEnAlphaLearned(l) { const p = getProgress(); if (!p.enLetters.includes(l)) { p.enLetters.push(l); p.stars_en = (p.stars_en || 0) + 1; saveProgress(p); updateProgress(); } }
function markEnFcLearned(t) { const p = getProgress(); if (!p.enVocab.includes(t)) { p.enVocab.push(t); p.stars_en = (p.stars_en || 0) + 1; saveProgress(p); updateProgress(); } }
function markEnLessonLearned(id) { const p = getProgress(); if (!p.enLessons.includes(id)) { p.enLessons.push(id); p.stars_en = (p.stars_en || 0) + 1; saveProgress(p); updateProgress(); } }

function addStars(c) { 
    const p = getProgress();
    const path = (window.location.pathname || '').toLowerCase();
    
    // Check if we are on index.html (SPA) or separate files
    let subject = 'vi';
    if (path.includes('math') || (typeof currentPage !== 'undefined' && currentPage === 'math')) {
        subject = 'math';
    } else if (path.includes('english') || (typeof currentPage !== 'undefined' && currentPage === 'english')) {
        subject = 'en';
    } else if (typeof currentPage !== 'undefined') {
        // Handle other sub-pages of SPA
        if (currentPage.startsWith('math')) subject = 'math';
        if (currentPage.startsWith('english') || currentPage.startsWith('en-')) subject = 'en';
    }

    if (subject === 'math') {
        p.stars_math = (p.stars_math || 0) + c;
    } else if (subject === 'en') {
        p.stars_en = (p.stars_en || 0) + c;
    } else {
        p.stars = (Number(p.stars) || 0) + c;
    }
    saveProgress(p); 
    updateProgress(); 
}

function updateProgress() {
    const p = getProgress();
    const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.style.width = val + '%'; };
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    
    // Vietnamese calculations (Standardized to 93 as requested)
    let alphaCount = p.learnedLetters ? p.learnedLetters.length : 0;
    let digraphCount = p.learnedDigraphs ? p.learnedDigraphs.length : 0;
    let rhymeCount = p.learnedRhymes ? p.learnedRhymes.length : 0;
    let themeCount = p.learnedThemes ? p.learnedThemes.length : 0;

    let viLessonsLearned = Math.min(29, alphaCount) + Math.min(11, digraphCount) + Math.min(34, rhymeCount) + Math.min(19, themeCount);
    const totalVi = 93;
    
    setEl('alphabetProgress', (alphaCount/29)*100);
    setEl('vocabProgress', (viLessonsLearned/totalVi)*100);
    setTxt('alphabetCount', alphaCount+'/29');
    setTxt('vocabCount', viLessonsLearned+'/93');

    // Math calculations (115 total lessons as requested)
    let mathProg = {}; try { mathProg = JSON.parse(localStorage.getItem('math_progress') || '{}'); } catch {}
    let mathDoneCount = 0;
    for (let k in mathProg) {
        if (mathProg[k].score === mathProg[k].total && mathProg[k].total > 0) mathDoneCount++;
    }
    setEl('mathProgress', (mathDoneCount/115)*100);
    setTxt('mathCount', mathDoneCount+'/115');

    // English calculations (51 total: 26 alpha + 16 vocab themes + 9 lessons)
    let enLearnedCount = (p.enLetters ? p.enLetters.length : 0) + (p.enVocab ? p.enVocab.length : 0) + (p.enLessons ? p.enLessons.length : 0);
    setEl('enProgress', (enLearnedCount/51)*100); // Note: Assume ID 'enProgress' exists or add if needed
    setTxt('enCount', enLearnedCount+'/51');
    
    const path = (window.location.pathname || '').toLowerCase();
    if (path.includes('math')) setTxt('starsDisplay', (p.stars_math || 0) + ' ⭐');
    else if (path.includes('english')) setTxt('starsDisplay', (p.stars_en || 0) + ' ⭐');
    else setTxt('starsDisplay', p.stars + ' ⭐');
    
    // Landing Page stats
    const active = window.authManager ? window.authManager.getActive() : null;
    const stats = window.calculateUserStats(active ? active.user : null);
    
    setTxt('lbTotalStars', stats.stars);
    setTxt('lbTotalLessons', stats.lessons);
    setTxt('lbStreak', stats.streak);
    setTxt('starsDisplay', stats.stars + ' ⭐');
}

// ===================================================
// ALPHABET
// ===================================================
function renderAlphabetGrid() {
    const grid = document.getElementById('alphabetGrid');
    if (!grid) return;
    const p = getProgress();
    grid.innerHTML = ALPHABET.map((item, i) => {
        const learned = p.learnedLetters.includes(item.letter);
        return `<button class="letter-card ${learned?'learned':''}" onclick="openLetterModal(${i})" aria-label="Chữ ${item.letter}">
            <span class="letter-main">${item.letter}</span><span class="letter-lower">${item.lower}</span>
            <span class="letter-example">${item.emoji} ${item.example}</span></button>`;
    }).join('');

    // Render phụ âm ghép
    renderPhuAmGhep();
    renderVan();
}

function renderPhuAmGhep() {
    const grid = document.getElementById('phuAmGhepGrid');
    if (!grid) return;
    grid.innerHTML = PHU_AM_GHEP.map(item =>
        `<button class="alpha-extra-card" onclick="speakVietnamese('${item.sound}')" aria-label="${item.letters}">
            <span class="alpha-extra-main">${item.letters}</span>
            <span class="alpha-extra-sound">${item.sound}</span>
            <span class="alpha-extra-example">${item.emoji} ${item.example}</span>
        </button>`
    ).join('');
}

function renderVan() {
    const grid = document.getElementById('vanGrid');
    if (!grid) return;
    grid.innerHTML = VAN_LIST.map(item =>
        `<button class="alpha-extra-card van-card" onclick="speakVietnamese('${item.van}')" aria-label="${item.van}">
            <span class="alpha-extra-main">${item.van}</span>
            <span class="alpha-extra-example">${item.emoji} ${item.example}</span>
        </button>`
    ).join('');
}

function openLetterModal(i) {
    const item = ALPHABET[i]; currentModalLetter = item;
    document.getElementById('modalLetter').textContent = item.letter;
    document.getElementById('modalLetterLower').textContent = item.lower;
    document.getElementById('modalExampleEmoji').textContent = item.emoji;
    document.getElementById('modalExampleWord').textContent = item.example;
    document.getElementById('alphabetModal').classList.add('show');
    playClickSound();
    markLetterLearned(item.letter);
    // KHÔNG auto play - chỉ phát khi user bấm nút
}

function speakModalLetter() {
    if (!currentModalLetter) return;
    // Phát âm đánh vần trước, rồi từ ví dụ
    speakLetterSound(currentModalLetter.lower);
    // Sau 1 giây, đọc từ ví dụ
    setTimeout(() => speakVietnamese(currentModalLetter.example), 1000);
}

function closeModal(id) { 
    if (window.currentCountingInterval) clearInterval(window.currentCountingInterval);
    stopAllAudio(); // Also stop any TTS currently playing
    document.getElementById(id).classList.remove('show'); 
}

// Close modal on backdrop click
document.addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay')) {
        if (window.currentCountingInterval) clearInterval(window.currentCountingInterval);
        stopAllAudio();
        e.target.classList.remove('show');
    }
});

// ===================================================
// VOCABULARY
// ===================================================
function renderVocabGrid(cat) {
    const grid = document.getElementById('vocabGrid');
    if (!grid) return;
    const p = getProgress();
    const list = cat === 'all' ? VOCABULARY : VOCABULARY.filter(v => v.category === cat);
    grid.innerHTML = list.map(item => {
        const idx = VOCABULARY.indexOf(item);
        const learned = p.learnedWords.includes(item.word);
        return `<button class="vocab-card ${learned?'learned':''}" onclick="openVocabModal(${idx})" aria-label="${item.word}">
            <span class="vocab-emoji">${item.emoji}</span><span class="vocab-word">${item.word}</span></button>`;
    }).join('');
}

function filterVocab(cat) {
    document.querySelectorAll('.vocab-cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    renderVocabGrid(cat);
}

function openVocabModal(i) {
    const item = VOCABULARY[i]; currentVocabWord = item;
    document.getElementById('vocabModalEmoji').textContent = item.emoji;
    document.getElementById('vocabModalWord').textContent = item.word;
    document.getElementById('vocabModalSpell').textContent = item.spell;
    document.getElementById('vocabModal').classList.add('show');
    playClickSound();
    markWordLearned(item.word);
}

function speakVocabWord() { if (currentVocabWord) speakVietnamese(currentVocabWord.word); }

function spellVocabWord() {
    if (!currentVocabWord) return;
    const display = document.getElementById('vocabSpellDisplay');
    const stepsEl = document.getElementById('vocabSpellSteps');
    display.classList.remove('hidden');
    const steps = getSpellingSteps(currentVocabWord.word);
    stepsEl.innerHTML = steps.map((step, i) =>
        `<div class="spell-step" id="vocabSpellStep${i}">
            <span class="spell-step-text">${step.text}</span>
            <span class="spell-step-type">${
                step.type === 'consonant' ? 'Phụ âm' :
                step.type === 'vowel' ? 'Vần' :
                step.type === 'combined' ? 'Ghép' : 'Thanh'
            }</span>
        </div>`
    ).join('<span class="spell-arrow">→</span>');
    spellWordAnimated(currentVocabWord.word,
        (step, idx, total) => {
            for (let i = 0; i < total; i++) {
                const el = document.getElementById('vocabSpellStep' + i);
                if (el) { el.classList.toggle('active', i === idx); el.classList.toggle('done', i < idx); }
            }
        },
        () => {
            steps.forEach((_, i) => {
                const el = document.getElementById('vocabSpellStep' + i);
                if (el) { el.classList.add('done'); el.classList.remove('active'); }
            });
        }
    );
}

// ===================================================
// ALPHABET GAMES
// ===================================================
function shuffle(arr) { const a = [...arr]; for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function startGame(type) {
    gameState = { type, questions: [], currentQ: 0, score: 0, totalQuestions: 10 };
    document.getElementById('gamesMenu').classList.add('hidden');
    document.getElementById('game-complete').classList.add('hidden');
    if (type === 'choose') { generateChooseQs(); showChooseQ(); document.getElementById('game-choose').classList.remove('hidden'); }
    else if (type === 'match') { generateMatchQs(); showMatchQ(); document.getElementById('game-match').classList.remove('hidden'); }
    else if (type === 'listen') { generateListenQs(); showListenQ(); document.getElementById('game-listen').classList.remove('hidden'); }
}

function backToGames() { document.querySelectorAll('.game-area').forEach(g => g.classList.add('hidden')); document.getElementById('gamesMenu').classList.remove('hidden'); }
function replayGame() { if (gameState.type) startGame(gameState.type); }

// Game 1: Choose Letter
function generateChooseQs() {
    const s = shuffle(ALPHABET);
    gameState.questions = s.slice(0,10).map(item => {
        const wrong = shuffle(ALPHABET.filter(a => a.letter !== item.letter)).slice(0,3);
        return { correct: item, options: shuffle([item,...wrong]) };
    });
}
function showChooseQ() {
    const q = gameState.questions[gameState.currentQ]; if (!q) return;
    document.getElementById('chooseEmoji').textContent = q.correct.emoji;
    document.getElementById('chooseQuestion').textContent = `"${q.correct.example}" bắt đầu bằng chữ gì?`;
    document.getElementById('chooseRound').textContent = gameState.currentQ+1;
    document.getElementById('chooseScore').textContent = gameState.score;
    document.getElementById('chooseFeedback').classList.add('hidden');
    document.getElementById('chooseOptions').innerHTML = q.options.map(o => `<button class="game-option-btn" onclick="answerChoose('${o.letter}',this)">${o.letter}</button>`).join('');
}
function answerChoose(letter, btn) {
    const q = gameState.questions[gameState.currentQ]; const correct = letter === q.correct.letter;
    document.querySelectorAll('#chooseOptions .game-option-btn').forEach(b => { 
        b.disabled = true; 
        if (b.textContent.trim() === q.correct.letter) b.classList.add('correct'); 
    });
    if (correct) { 
        btn.classList.add('correct'); gameState.score++; 
        if (window.addStars) window.addStars(1);
        if (window.markLetterLearned) window.markLetterLearned(q.correct.letter);
        document.getElementById('chooseFeedbackText').textContent = window.getRandomPraise(); 
        document.getElementById('chooseFeedbackText').className = 'feedback-text correct-feedback'; 
        playCorrectSound(); showConfetti(); 
    }
    else { 
        btn.classList.add('wrong'); 
        document.getElementById('chooseFeedbackText').textContent = `❌ Chưa đúng rồi! Đáp án là "${q.correct.letter}". Cố gắng lên bé nhé! 💪`; 
        document.getElementById('chooseFeedbackText').className = 'feedback-text wrong-feedback'; 
        playWrongSound(); 
    }
    document.getElementById('chooseScore').textContent = gameState.score;
    document.getElementById('chooseFeedback').classList.remove('hidden');
    
    // Auto-advance after 3s
    setTimeout(() => {
        gameState.currentQ++;
        if (gameState.currentQ >= 10) showGameComplete();
        else showChooseQ();
    }, 3000);
}
function nextChooseQuestion() { /* Deprecated */ }

// Game 2: Match
function generateMatchQs() {
    const words = shuffle(VOCABULARY.filter(v => v.word.length <= 4));
    gameState.questions = words.slice(0,10).map(item => ({ word: item.word, emoji: item.emoji, letters: item.word.split('') }));
}
function showMatchQ() {
    const q = gameState.questions[gameState.currentQ]; if (!q) return;
    document.getElementById('matchQuestion').textContent = `Ghép chữ để tạo từ: ${q.emoji}`;
    document.getElementById('matchRound').textContent = gameState.currentQ+1;
    document.getElementById('matchScore').textContent = gameState.score;
    document.getElementById('matchFeedback').classList.add('hidden');
    document.getElementById('matchTarget').innerHTML = q.letters.map((_,i) => `<div class="match-drop-zone" data-index="${i}" onclick="removeFromDropZone(${i})"></div>`).join('');
    const sl = shuffle(q.letters);
    document.getElementById('matchLetters').innerHTML = sl.map((l,i) => `<button class="match-letter-btn" data-letter="${l}" data-btn-index="${i}" onclick="placeMatchLetter(this)">${l}</button>`).join('');
    gameState.matchPlaced = new Array(q.letters.length).fill(null);
}
function placeMatchLetter(btn) {
    if (btn.classList.contains('used')) return;
    const letter = btn.dataset.letter, bi = parseInt(btn.dataset.btnIndex);
    const ei = gameState.matchPlaced.indexOf(null); if (ei === -1) return;
    playClickSound(); gameState.matchPlaced[ei] = { letter, btnIndex: bi }; btn.classList.add('used');
    const zones = document.querySelectorAll('.match-drop-zone'); zones[ei].textContent = letter; zones[ei].classList.add('filled');
    if (!gameState.matchPlaced.includes(null)) checkMatchAnswer();
}
function removeFromDropZone(i) {
    const pl = gameState.matchPlaced[i]; if (!pl) return;
    playClickSound();
    document.querySelectorAll('.match-letter-btn')[pl.btnIndex].classList.remove('used');
    const z = document.querySelectorAll('.match-drop-zone'); z[i].textContent = ''; z[i].classList.remove('filled');
    gameState.matchPlaced[i] = null;
}
function checkMatchAnswer() {
    const q = gameState.questions[gameState.currentQ];
    const ans = gameState.matchPlaced.map(p => p.letter).join('');
    const correct = ans === q.word;
    if (correct) { 
        gameState.score++; 
        if (window.addStars) window.addStars(1);
        if (window.markWordLearned) window.markWordLearned(q.word);
        document.getElementById('matchFeedbackText').textContent = `${window.getRandomPraise()} ("${q.word}" ${q.emoji})`; 
        document.getElementById('matchFeedbackText').className = 'feedback-text correct-feedback'; 
        playCorrectSound(); showConfetti(); 
    }
    else { 
        document.getElementById('matchFeedbackText').textContent = `❌ Gần đúng rồi! Đáp án là "${q.word}". Hãy thử lại ở câu sau nhé! 💪`; 
        document.getElementById('matchFeedbackText').className = 'feedback-text wrong-feedback'; 
        playWrongSound(); 
    }
    document.getElementById('matchScore').textContent = gameState.score;
    document.getElementById('matchFeedback').classList.remove('hidden');
    document.querySelectorAll('.match-letter-btn').forEach(b => b.disabled = true);
    
    // Auto-advance after 3s
    setTimeout(() => {
        gameState.currentQ++;
        if (gameState.currentQ >= 10) showGameComplete();
        else showMatchQ();
    }, 3000);
}
function nextMatchQuestion() { /* Deprecated */ }

// Game 3: Listen
function generateListenQs() {
    const s = shuffle(ALPHABET);
    gameState.questions = s.slice(0,10).map(item => {
        const wrong = shuffle(ALPHABET.filter(a => a.letter !== item.letter)).slice(0,3);
        return { correct: item, options: shuffle([item,...wrong]) };
    });
}
function showListenQ() {
    const q = gameState.questions[gameState.currentQ]; if (!q) return;
    document.getElementById('listenRound').textContent = gameState.currentQ+1;
    document.getElementById('listenScore').textContent = gameState.score;
    document.getElementById('listenFeedback').classList.add('hidden');
    document.getElementById('listenOptions').innerHTML = q.options.map(o => `<button class="game-option-btn" onclick="answerListen('${o.letter}',this)">${o.letter}</button>`).join('');
    // Không auto play - user bấm nút nghe
}
function playListenAudio() {
    const q = gameState.questions[gameState.currentQ];
    if (q) speakVietnamese(q.correct.sound);
}
function answerListen(letter, btn) {
    const q = gameState.questions[gameState.currentQ]; const correct = letter === q.correct.letter;
    document.querySelectorAll('#listenOptions .game-option-btn').forEach(b => { 
        b.disabled = true; 
        if (b.textContent.trim() === q.correct.letter) b.classList.add('correct'); 
    });
    if (correct) { 
        btn.classList.add('correct'); gameState.score++; 
        if (window.addStars) window.addStars(1);
        document.getElementById('listenFeedbackText').textContent = window.getRandomPraise(); 
        document.getElementById('listenFeedbackText').className = 'feedback-text correct-feedback'; 
        playCorrectSound(); showConfetti(); 
    }
    else { 
        btn.classList.add('wrong'); 
        document.getElementById('listenFeedbackText').textContent = `❌ Sai một chút rồi! Đáp án là "${q.correct.letter}". Bé hãy nghe thật kỹ nhé! 💪`; 
        document.getElementById('listenFeedbackText').className = 'feedback-text wrong-feedback'; 
        playWrongSound(); 
    }
    document.getElementById('listenScore').textContent = gameState.score;
    document.getElementById('listenFeedback').classList.remove('hidden');
    
    // Auto-advance after 3s
    setTimeout(() => {
        gameState.currentQ++;
        if (gameState.currentQ >= 10) showGameComplete();
        else showListenQ();
    }, 3000);
}
function nextListenQuestion() { /* Deprecated */ }

// Game Complete
function showGameComplete() {
    document.querySelectorAll('.game-area').forEach(g => g.classList.add('hidden'));
    document.getElementById('game-complete').classList.remove('hidden');
    document.getElementById('finalScore').textContent = gameState.score;
    const msg = document.getElementById('completeMessage');
    let stars = 0;
    if (gameState.score === 10) { msg.textContent = '🌟 Xuất sắc! Hoàn hảo! 🌟'; stars = 3; showConfetti(); }
    else if (gameState.score >= 7) { msg.textContent = '👏 Rất giỏi!'; stars = 2; showConfetti(); }
    else if (gameState.score >= 5) { msg.textContent = '😊 Khá tốt!'; stars = 1; }
    else { msg.textContent = '💪 Cố gắng thêm!'; }
    if (stars > 0) addStars(stars);
    
    // Record accuracy globally
    if (window.authManager && window.authManager.recordScore) {
        window.authManager.recordScore(gameState.score, 10);
    }
    
    playCorrectSound();
}

// Keyboard shortcuts
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.show').forEach(m => m.classList.remove('show')); });

// Initialize data
window.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    
    // Auto-navigate to correct SPA view based on file name
    let path = window.location.pathname || '';
    let filename = path.split('/').pop().toLowerCase();
    if (filename.includes('?')) filename = filename.split('?')[0];

    // Chỉ gọi init view cho đúng filename tương ứng
    if (filename === 'vietnamese.html') navigateTo('vietnamese');
    else if (filename === 'english.html') navigateTo('english');
    else if (filename === 'math.html') navigateTo('math');
    else navigateTo('home'); // Default cho index.html
});

// ===================================================
// SETTINGS & ACHIEVEMENTS MODALS
// ===================================================
function openAchievementsModal() {
    const active = window.authManager ? window.authManager.getActive() : null;
    const stats = window.calculateUserStats(active ? active.user : null);
    const p = getProgress();
    const modal = document.getElementById('achievementsModal');
    if (!modal) return;

    // Calculate individual subject lessons
    let mathProg = {}; try { mathProg = JSON.parse(localStorage.getItem('math_progress') || '{}'); } catch {}
    let mathCount = 0; for (let k in mathProg) if (mathProg[k] && mathProg[k].total > 0 && (mathProg[k].score / mathProg[k].total >= 0.8)) mathCount++;
    mathCount = Math.max(mathCount, (p.learnedNumbers || []).length);
    
    let alphaCount = (p.learnedLetters || []).length;
    let viDiscrete = Math.min(29, alphaCount) + Math.min(11, (p.learnedDigraphs || []).length) + Math.min(34, (p.learnedRhymes || []).length) + Math.min(19, (p.learnedThemes || []).length);
    let viCount = viDiscrete;
    
    let enDiscrete = (p.enLetters || []).length + (p.enVocab || []).length + (p.enLessons || []).length;
    let enCount = enDiscrete;

    modal.innerHTML = `
        <div class="modal-overlay show" id="achModalOverlay">
            <div class="modal-content ach-modal-content">
                <button class="modal-close" onclick="closeModal('achModalOverlay')">&times;</button>
                <div class="ach-modal-header" style="justify-content: center;">
                    <div class="ach-modal-titles" style="text-align: center;">
                        <h2 class="ach-modal-main-title">Bảng Thành Tích</h2>
                        <p class="ach-modal-subtitle">Bé đã học được rất nhiều rồi đó!</p>
                    </div>
                </div>
                
                <div class="ach-cards-grid">
                    <div class="ach-card card-vi">
                        <div class="ach-card-info">
                            <div class="ach-card-label">Tiếng Việt</div>
                            <div class="ach-card-val">${viCount}/93</div>
                            <div class="ach-card-desc">Bài học hoàn thành</div>
                        </div>
                        <div class="ach-card-stars">⭐ ${p.stars || 0}</div>
                    </div>

                    <div class="ach-card card-math">
                        <div class="ach-card-info">
                            <div class="ach-card-label">Toán Học</div>
                            <div class="ach-card-val">${mathCount}/115</div>
                            <div class="ach-card-desc">Bài học hoàn thành</div>
                        </div>
                        <div class="ach-card-stars">⭐ ${p.stars_math || 0}</div>
                    </div>

                    <div class="ach-card card-en">
                        <div class="ach-card-info">
                            <div class="ach-card-label">Tiếng Anh</div>
                            <div class="ach-card-val">${enCount}/51</div>
                            <div class="ach-card-desc">Bài học hoàn thành</div>
                        </div>
                        <div class="ach-card-stars">⭐ ${p.stars_en || 0}</div>
                    </div>
                </div>

                <div class="ach-modal-footer">
                    Chuỗi ngày học: <strong>${stats.streak} ngày</strong>
                </div>
            </div>
        </div>
    `;

    window.closeModal = function(id) {
        const m = document.getElementById(id);
        if (m) m.classList.remove('show');
        if (id === 'achModalOverlay' && modal) modal.innerHTML = '';
    };
}

function openSettingsModal() {
    const speechVol = localStorage.getItem('app_speech_volume') || 1;
    const sfxVol = localStorage.getItem('app_sfx_volume') || 0.5;
    
    if (document.getElementById('volumeSpeech')) document.getElementById('volumeSpeech').value = speechVol;
    if (document.getElementById('volumeSfx')) document.getElementById('volumeSfx').value = sfxVol;
    
    const settingsMod = document.getElementById('settingsModal');
    if (settingsMod) settingsMod.classList.add('show');
}

function setAudioVolume(type, value) {
    if (type === 'speech') {
        localStorage.setItem('app_speech_volume', value);
    } else if (type === 'sfx') {
        localStorage.setItem('app_sfx_volume', value);
    }
}

function resetAllGlobalProgress() {
    if (confirm("Bạn có chắc chắn muốn xóa TOÀN BỘ tiến độ học tập?")) {
        localStorage.removeItem('vn_learn_progress');
        localStorage.removeItem('math_progress');
        localStorage.removeItem('en_fc_progress');
        alert("Đã xóa toàn bộ tiến độ. Trang web sẽ tải lại.");
        location.reload();
    }
}
