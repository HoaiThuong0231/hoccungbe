/* ============================================= */
/* FLASHCARD Tiếng Anh – Tiếng Việt               */
/* ============================================= */

// ===================================================
// FLASHCARD DATA
// ===================================================
const FLASHCARDS = [
    // Động vật
    { word_en:'cat', word_vi:'con mèo', emoji:'🐱', category:'animals' },
    { word_en:'dog', word_vi:'con chó', emoji:'🐶', category:'animals' },
    { word_en:'fish', word_vi:'con cá', emoji:'🐟', category:'animals' },
    { word_en:'bird', word_vi:'con chim', emoji:'🐦', category:'animals' },
    { word_en:'rabbit', word_vi:'con thỏ', emoji:'🐰', category:'animals' },
    { word_en:'elephant', word_vi:'con voi', emoji:'🐘', category:'animals' },
    { word_en:'monkey', word_vi:'con khỉ', emoji:'🐒', category:'animals' },
    { word_en:'duck', word_vi:'con vịt', emoji:'🦆', category:'animals' },
    { word_en:'chicken', word_vi:'con gà', emoji:'🐔', category:'animals' },
    { word_en:'frog', word_vi:'con ếch', emoji:'🐸', category:'animals' },
    // Trái cây
    { word_en:'apple', word_vi:'quả táo', emoji:'🍎', category:'fruits' },
    { word_en:'banana', word_vi:'quả chuối', emoji:'🍌', category:'fruits' },
    { word_en:'orange', word_vi:'quả cam', emoji:'🍊', category:'fruits' },
    { word_en:'grape', word_vi:'quả nho', emoji:'🍇', category:'fruits' },
    { word_en:'watermelon', word_vi:'quả dưa hấu', emoji:'🍉', category:'fruits' },
    { word_en:'mango', word_vi:'quả xoài', emoji:'🥭', category:'fruits' },
    { word_en:'strawberry', word_vi:'quả dâu', emoji:'🍓', category:'fruits' },
    // Đồ vật
    { word_en:'book', word_vi:'cuốn sách', emoji:'📕', category:'objects' },
    { word_en:'pen', word_vi:'cái bút', emoji:'✏️', category:'objects' },
    { word_en:'car', word_vi:'xe ô tô', emoji:'🚗', category:'objects' },
    { word_en:'ball', word_vi:'quả bóng', emoji:'⚽', category:'objects' },
    { word_en:'house', word_vi:'ngôi nhà', emoji:'🏠', category:'objects' },
    { word_en:'star', word_vi:'ngôi sao', emoji:'⭐', category:'objects' },
    { word_en:'flower', word_vi:'bông hoa', emoji:'🌸', category:'objects' },
    { word_en:'sun', word_vi:'mặt trời', emoji:'☀️', category:'objects' },
];

// ===================================================
// STATE
// ===================================================
let currentFCIndex = 0;
let fcFlipped = false;
let fcCategory = 'all';

// ===================================================
// RENDER FLASHCARD GRID
// ===================================================
function renderFlashcardGrid(cat) {
    const grid = document.getElementById('flashcardGrid');
    if (!grid) return;
    fcCategory = cat || 'all';
    const list = cat === 'all' ? FLASHCARDS : FLASHCARDS.filter(f => f.category === cat);
    grid.innerHTML = list.map(card => {
        const ri = FLASHCARDS.indexOf(card);
        return `<button class="fc-preview" onclick="openFlashcard(${ri})" aria-label="${card.word_en}">
            <span class="fc-preview-emoji">${card.emoji}</span>
            <span class="fc-preview-en">${card.word_en}</span>
            <span class="fc-preview-vi">${card.word_vi}</span>
        </button>`;
    }).join('');
}

function filterFlashcards(cat) {
    document.querySelectorAll('.fc-cat-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.cat === cat)
    );
    renderFlashcardGrid(cat);
}

// ===================================================
// FLASHCARD MODAL – Flip Card
// ===================================================
function openFlashcard(i) {
    currentFCIndex = i;
    fcFlipped = false;
    const card = FLASHCARDS[i];
    document.getElementById('fcFrontEmoji').textContent = card.emoji;
    document.getElementById('fcFrontWord').textContent = card.word_en;
    document.getElementById('fcBackEmoji').textContent = card.emoji;
    document.getElementById('fcBackWord').textContent = card.word_vi;
    document.getElementById('flashcardInner').classList.remove('flipped');
    document.getElementById('flashcardModal').classList.add('show');
    playClickSound();
}

function flipFlashcard() {
    fcFlipped = !fcFlipped;
    document.getElementById('flashcardInner').classList.toggle('flipped', fcFlipped);
    playClickSound();
}

// 🔊 Loa mặt trước – tiếng Anh
function speakFC_EN(e) {
    e.stopPropagation();
    speakEnglish(FLASHCARDS[currentFCIndex].word_en);
    animateSpeaker(e.currentTarget);
}

// 🔊 Loa mặt sau – tiếng Việt
function speakFC_VI(e) {
    e.stopPropagation();
    speakVietnamese(FLASHCARDS[currentFCIndex].word_vi);
    animateSpeaker(e.currentTarget);
}

function animateSpeaker(btn) {
    btn.classList.add('speaker-active');
    setTimeout(() => btn.classList.remove('speaker-active'), 600);
}

function prevFC(e) {
    e.stopPropagation();
    const list = fcCategory === 'all' ? FLASHCARDS : FLASHCARDS.filter(f => f.category === fcCategory);
    let ci = list.indexOf(FLASHCARDS[currentFCIndex]);
    ci = (ci - 1 + list.length) % list.length;
    openFlashcard(FLASHCARDS.indexOf(list[ci]));
}

function nextFC(e) {
    e.stopPropagation();
    const list = fcCategory === 'all' ? FLASHCARDS : FLASHCARDS.filter(f => f.category === fcCategory);
    let ci = list.indexOf(FLASHCARDS[currentFCIndex]);
    ci = (ci + 1) % list.length;
    openFlashcard(FLASHCARDS.indexOf(list[ci]));
}

// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    renderFlashcardGrid('all');
});
