/* ============================================= */
/* 🇬🇧 ENGLISH LEARNING MODULE                    */
/* Alphabet, Vocabulary, Flashcard, Lessons,      */
/* Games, Tests — cho trẻ em ~5 tuổi              */
/* ============================================= */

// ===================================================
// ENGLISH ALPHABET A-Z
// ===================================================
const EN_ALPHABET = [
    { letter: 'A', sound: 'eɪ', example: 'Apple', emoji: '🍎', word_vi: 'quả táo' },
    { letter: 'B', sound: 'biː', example: 'Ball', emoji: '⚽', word_vi: 'quả bóng' },
    { letter: 'C', sound: 'siː', example: 'Cat', emoji: '🐱', word_vi: 'con mèo' },
    { letter: 'D', sound: 'diː', example: 'Dog', emoji: '🐶', word_vi: 'con chó' },
    { letter: 'E', sound: 'iː', example: 'Egg', emoji: '🥚', word_vi: 'quả trứng' },
    { letter: 'F', sound: 'ef', example: 'Fish', emoji: '🐟', word_vi: 'con cá' },
    { letter: 'G', sound: 'dʒiː', example: 'Girl', emoji: '👧', word_vi: 'bé gái' },
    { letter: 'H', sound: 'eɪtʃ', example: 'Hat', emoji: '🎩', word_vi: 'cái mũ' },
    { letter: 'I', sound: 'aɪ', example: 'Ice cream', emoji: '🍦', word_vi: 'kem' },
    { letter: 'J', sound: 'dʒeɪ', example: 'Jam', emoji: '🍯', word_vi: 'mứt' },
    { letter: 'K', sound: 'keɪ', example: 'Kite', emoji: '🪁', word_vi: 'diều' },
    { letter: 'L', sound: 'el', example: 'Lion', emoji: '🦁', word_vi: 'sư tử' },
    { letter: 'M', sound: 'em', example: 'Moon', emoji: '🌙', word_vi: 'mặt trăng' },
    { letter: 'N', sound: 'en', example: 'Nose', emoji: '👃', word_vi: 'cái mũi' },
    { letter: 'O', sound: 'oʊ', example: 'Orange', emoji: '🍊', word_vi: 'quả cam' },
    { letter: 'P', sound: 'piː', example: 'Pen', emoji: '✏️', word_vi: 'cái bút' },
    { letter: 'Q', sound: 'kjuː', example: 'Queen', emoji: '👸', word_vi: 'nữ hoàng' },
    { letter: 'R', sound: 'ɑːr', example: 'Rain', emoji: '🌧️', word_vi: 'mưa' },
    { letter: 'S', sound: 'es', example: 'Sun', emoji: '☀️', word_vi: 'mặt trời' },
    { letter: 'T', sound: 'tiː', example: 'Tree', emoji: '🌳', word_vi: 'cái cây' },
    { letter: 'U', sound: 'juː', example: 'Umbrella', emoji: '☂️', word_vi: 'ô dù' },
    { letter: 'V', sound: 'viː', example: 'Van', emoji: '🚐', word_vi: 'xe tải' },
    { letter: 'W', sound: 'ˈdʌbəljuː', example: 'Water', emoji: '💧', word_vi: 'nước' },
    { letter: 'X', sound: 'eks', example: 'Box', emoji: '📦', word_vi: 'hộp' },
    { letter: 'Y', sound: 'waɪ', example: 'Yellow', emoji: '💛', word_vi: 'vàng' },
    { letter: 'Z', sound: 'ziː', example: 'Zebra', emoji: '🦓', word_vi: 'ngựa vằn' },
];

// ===================================================
// ENGLISH VOCABULARY – 3 CẤP ĐỘ (MỞ RỘNG)
// ===================================================
const EN_VOCAB = {
    level1: {
        animals: [
            { en: 'cat', vi: 'con mèo', emoji: '🐱' },
            { en: 'dog', vi: 'con chó', emoji: '🐶' },
            { en: 'fish', vi: 'con cá', emoji: '🐟' },
            { en: 'bird', vi: 'con chim', emoji: '🐦' },
            { en: 'rabbit', vi: 'con thỏ', emoji: '🐰' },
            { en: 'elephant', vi: 'con voi', emoji: '🐘' },
            { en: 'monkey', vi: 'con khỉ', emoji: '🐒' },
            { en: 'duck', vi: 'con vịt', emoji: '🦆' },
            { en: 'frog', vi: 'con ếch', emoji: '🐸' },
            { en: 'cow', vi: 'con bò', emoji: '🐄' },
            { en: 'horse', vi: 'con ngựa', emoji: '🐴' },
            { en: 'pig', vi: 'con lợn', emoji: '🐷' },
            { en: 'sheep', vi: 'con cừu', emoji: '🐑' },
            { en: 'lion', vi: 'sư tử', emoji: '🦁' },
            { en: 'tiger', vi: 'con hổ', emoji: '🐯' },
            { en: 'bear', vi: 'gấu', emoji: '🐻' },
            { en: 'fox', vi: 'con cáo', emoji: '🦊' },
            { en: 'wolf', vi: 'chó sói', emoji: '🐺' },
            { en: 'panda', vi: 'gấu trúc', emoji: '🐼' },
            { en: 'penguin', vi: 'chim cánh cụt', emoji: '🐧' },
            { en: 'turtle', vi: 'con rùa', emoji: '🐢' },
            { en: 'snake', vi: 'con rắn', emoji: '🐍' },
            { en: 'butterfly', vi: 'bướm', emoji: '🦋' },
            { en: 'bee', vi: 'con ong', emoji: '🐝' },
            { en: 'ant', vi: 'con kiến', emoji: '🐜' },
            { en: 'hen', vi: 'gà mái', emoji: '🐔' },
            { en: 'chick', vi: 'gà con', emoji: '🐣' },
            { en: 'whale', vi: 'cá voi', emoji: '🐳' },
            { en: 'giraffe', vi: 'hươu cao cổ', emoji: '🦒' },
            { en: 'zebra', vi: 'ngựa vằn', emoji: '🦓' },
        ],
        colors: [
            { en: 'red', vi: 'đỏ', emoji: '🔴' },
            { en: 'blue', vi: 'xanh dương', emoji: '🔵' },
            { en: 'green', vi: 'xanh lá', emoji: '🟢' },
            { en: 'yellow', vi: 'vàng', emoji: '🟡' },
            { en: 'orange', vi: 'cam', emoji: '🟠' },
            { en: 'pink', vi: 'hồng', emoji: '💗' },
            { en: 'purple', vi: 'tím', emoji: '🟣' },
            { en: 'white', vi: 'trắng', emoji: '⚪' },
            { en: 'black', vi: 'đen', emoji: '⚫' },
            { en: 'brown', vi: 'nâu', emoji: '🟤' },
            { en: 'gray', vi: 'xám', emoji: '🩶' },
            { en: 'gold', vi: 'vàng kim', emoji: '🌟' },
        ],
        numbers: [
            { en: 'one', vi: 'một', emoji: '1️⃣' },
            { en: 'two', vi: 'hai', emoji: '2️⃣' },
            { en: 'three', vi: 'ba', emoji: '3️⃣' },
            { en: 'four', vi: 'bốn', emoji: '4️⃣' },
            { en: 'five', vi: 'năm', emoji: '5️⃣' },
            { en: 'six', vi: 'sáu', emoji: '6️⃣' },
            { en: 'seven', vi: 'bảy', emoji: '7️⃣' },
            { en: 'eight', vi: 'tám', emoji: '8️⃣' },
            { en: 'nine', vi: 'chín', emoji: '9️⃣' },
            { en: 'ten', vi: 'mười', emoji: '🔟' },
            { en: 'zero', vi: 'không', emoji: '0️⃣' },
            { en: 'eleven', vi: 'mười một', emoji: '🔢' },
            { en: 'twelve', vi: 'mười hai', emoji: '🔢' },
            { en: 'twenty', vi: 'hai mươi', emoji: '🔢' },
        ],
        body: [
            { en: 'head', vi: 'đầu', emoji: '🗣️' },
            { en: 'eye', vi: 'mắt', emoji: '👁️' },
            { en: 'nose', vi: 'mũi', emoji: '👃' },
            { en: 'ear', vi: 'tai', emoji: '👂' },
            { en: 'mouth', vi: 'miệng', emoji: '👄' },
            { en: 'hand', vi: 'tay', emoji: '✋' },
            { en: 'foot', vi: 'bàn chân', emoji: '🦶' },
            { en: 'hair', vi: 'tóc', emoji: '💇' },
            { en: 'teeth', vi: 'răng', emoji: '🦷' },
            { en: 'arm', vi: 'cánh tay', emoji: '💪' },
            { en: 'leg', vi: 'chân', emoji: '🦵' },
            { en: 'finger', vi: 'ngón tay', emoji: '☝️' },
        ],
        shapes: [
            { en: 'circle', vi: 'hình tròn', emoji: '⭕' },
            { en: 'square', vi: 'hình vuông', emoji: '🟦' },
            { en: 'triangle', vi: 'hình tam giác', emoji: '🔺' },
            { en: 'star', vi: 'ngôi sao', emoji: '⭐' },
            { en: 'heart', vi: 'trái tim', emoji: '❤️' },
            { en: 'rectangle', vi: 'hình chữ nhật', emoji: '▬' },
            { en: 'oval', vi: 'hình bầu dục', emoji: '🥚' },
            { en: 'diamond', vi: 'hình thoi', emoji: '💎' },
        ],
    },
    level2: {
        food: [
            { en: 'bread', vi: 'bánh mì', emoji: '🍞' },
            { en: 'rice', vi: 'cơm', emoji: '🍚' },
            { en: 'milk', vi: 'sữa', emoji: '🥛' },
            { en: 'cake', vi: 'bánh', emoji: '🍰' },
            { en: 'candy', vi: 'kẹo', emoji: '🍬' },
            { en: 'egg', vi: 'trứng', emoji: '🥚' },
            { en: 'water', vi: 'nước', emoji: '💧' },
            { en: 'juice', vi: 'nước ép', emoji: '🧃' },
            { en: 'meat', vi: 'thịt', emoji: '🥩' },
            { en: 'soup', vi: 'canh', emoji: '🍲' },
            { en: 'noodle', vi: 'mì', emoji: '🍜' },
            { en: 'pizza', vi: 'pizza', emoji: '🍕' },
            { en: 'ice cream', vi: 'kem', emoji: '🍦' },
            { en: 'cookie', vi: 'bánh quy', emoji: '🍪' },
            { en: 'chocolate', vi: 'sô cô la', emoji: '🍫' },
            { en: 'carrot', vi: 'cà rốt', emoji: '🥕' },
            { en: 'potato', vi: 'khoai tây', emoji: '🥔' },
            { en: 'corn', vi: 'bắp ngô', emoji: '🌽' },
        ],
        fruits: [
            { en: 'apple', vi: 'quả táo', emoji: '🍎' },
            { en: 'banana', vi: 'quả chuối', emoji: '🍌' },
            { en: 'orange', vi: 'quả cam', emoji: '🍊' },
            { en: 'grape', vi: 'nho', emoji: '🍇' },
            { en: 'strawberry', vi: 'dâu tây', emoji: '🍓' },
            { en: 'watermelon', vi: 'dưa hấu', emoji: '🍉' },
            { en: 'mango', vi: 'xoài', emoji: '🥭' },
            { en: 'pineapple', vi: 'dứa', emoji: '🍍' },
            { en: 'cherry', vi: 'anh đào', emoji: '🍒' },
        ],
        family: [
            { en: 'mother', vi: 'mẹ', emoji: '👩' },
            { en: 'father', vi: 'bố', emoji: '👨' },
            { en: 'sister', vi: 'chị/em gái', emoji: '👧' },
            { en: 'brother', vi: 'anh/em trai', emoji: '👦' },
            { en: 'baby', vi: 'em bé', emoji: '👶' },
            { en: 'grandmother', vi: 'bà', emoji: '👵' },
            { en: 'grandfather', vi: 'ông', emoji: '👴' },
            { en: 'family', vi: 'gia đình', emoji: '👨‍👩‍👧‍👦' },
            { en: 'uncle', vi: 'chú/bác', emoji: '👨' },
            { en: 'aunt', vi: 'cô/dì', emoji: '👩' },
            { en: 'cousin', vi: 'anh chị em họ', emoji: '👫' },
            { en: 'friend', vi: 'bạn bè', emoji: '🤝' },
        ],
        objects: [
            { en: 'book', vi: 'sách', emoji: '📕' },
            { en: 'pen', vi: 'bút', emoji: '✏️' },
            { en: 'ball', vi: 'bóng', emoji: '⚽' },
            { en: 'car', vi: 'xe ô tô', emoji: '🚗' },
            { en: 'house', vi: 'nhà', emoji: '🏠' },
            { en: 'chair', vi: 'ghế', emoji: '🪑' },
            { en: 'table', vi: 'bàn', emoji: '🪵' },
            { en: 'phone', vi: 'điện thoại', emoji: '📱' },
            { en: 'bag', vi: 'túi/cặp', emoji: '🎒' },
            { en: 'shoe', vi: 'giày', emoji: '👟' },
            { en: 'bed', vi: 'giường', emoji: '🛏️' },
            { en: 'door', vi: 'cửa', emoji: '🚪' },
            { en: 'window', vi: 'cửa sổ', emoji: '🪟' },
            { en: 'clock', vi: 'đồng hồ', emoji: '🕐' },
            { en: 'lamp', vi: 'đèn', emoji: '💡' },
            { en: 'cup', vi: 'cốc', emoji: '☕' },
            { en: 'spoon', vi: 'thìa', emoji: '🥄' },
            { en: 'fork', vi: 'nĩa', emoji: '🍴' },
            { en: 'plate', vi: 'đĩa', emoji: '🍽️' },
            { en: 'box', vi: 'hộp', emoji: '📦' },
        ],
        clothes: [
            { en: 'shirt', vi: 'áo sơ mi', emoji: '👕' },
            { en: 'pants', vi: 'quần', emoji: '👖' },
            { en: 'dress', vi: 'váy', emoji: '👗' },
            { en: 'hat', vi: 'mũ', emoji: '🎩' },
            { en: 'socks', vi: 'tất/vớ', emoji: '🧦' },
            { en: 'jacket', vi: 'áo khoác', emoji: '🧥' },
            { en: 'boots', vi: 'giày ủng', emoji: '👢' },
            { en: 'gloves', vi: 'găng tay', emoji: '🧤' },
            { en: 'scarf', vi: 'khăn quàng', emoji: '🧣' },
            { en: 'skirt', vi: 'chân váy', emoji: '👗' },
        ],
        transport: [
            { en: 'car', vi: 'ô tô', emoji: '🚗' },
            { en: 'bus', vi: 'xe buýt', emoji: '🚌' },
            { en: 'train', vi: 'tàu hỏa', emoji: '🚂' },
            { en: 'plane', vi: 'máy bay', emoji: '✈️' },
            { en: 'boat', vi: 'thuyền', emoji: '⛵' },
            { en: 'bike', vi: 'xe đạp', emoji: '🚲' },
            { en: 'truck', vi: 'xe tải', emoji: '🚛' },
            { en: 'taxi', vi: 'taxi', emoji: '🚕' },
            { en: 'ship', vi: 'tàu thủy', emoji: '🚢' },
            { en: 'rocket', vi: 'tên lửa', emoji: '🚀' },
        ],
    },
    level3: {
        actions: [
            { en: 'run', vi: 'chạy', emoji: '🏃' },
            { en: 'jump', vi: 'nhảy', emoji: '🤸' },
            { en: 'eat', vi: 'ăn', emoji: '🍽️' },
            { en: 'drink', vi: 'uống', emoji: '🥤' },
            { en: 'sleep', vi: 'ngủ', emoji: '😴' },
            { en: 'read', vi: 'đọc', emoji: '📖' },
            { en: 'write', vi: 'viết', emoji: '✍️' },
            { en: 'play', vi: 'chơi', emoji: '🎮' },
            { en: 'sing', vi: 'hát', emoji: '🎤' },
            { en: 'dance', vi: 'nhảy múa', emoji: '💃' },
            { en: 'swim', vi: 'bơi', emoji: '🏊' },
            { en: 'climb', vi: 'leo trèo', emoji: '🧗' },
            { en: 'draw', vi: 'vẽ', emoji: '🎨' },
            { en: 'cook', vi: 'nấu ăn', emoji: '👨‍🍳' },
            { en: 'walk', vi: 'đi bộ', emoji: '🚶' },
            { en: 'fly', vi: 'bay', emoji: '🕊️' },
            { en: 'throw', vi: 'ném', emoji: '⚾' },
            { en: 'catch', vi: 'bắt', emoji: '🤾' },
            { en: 'kick', vi: 'đá', emoji: '🦵' },
            { en: 'clap', vi: 'vỗ tay', emoji: '👏' },
        ],
        adjectives: [
            { en: 'big', vi: 'to', emoji: '🐘' },
            { en: 'small', vi: 'nhỏ', emoji: '🐜' },
            { en: 'happy', vi: 'vui', emoji: '😊' },
            { en: 'sad', vi: 'buồn', emoji: '😢' },
            { en: 'hot', vi: 'nóng', emoji: '🔥' },
            { en: 'cold', vi: 'lạnh', emoji: '❄️' },
            { en: 'fast', vi: 'nhanh', emoji: '⚡' },
            { en: 'slow', vi: 'chậm', emoji: '🐢' },
            { en: 'tall', vi: 'cao', emoji: '🏀' },
            { en: 'short', vi: 'thấp', emoji: '🧍' },
            { en: 'long', vi: 'dài', emoji: '📏' },
            { en: 'clean', vi: 'sạch', emoji: '✨' },
            { en: 'dirty', vi: 'bẩn', emoji: '💩' },
            { en: 'loud', vi: 'ồn ào', emoji: '📢' },
            { en: 'quiet', vi: 'yên tĩnh', emoji: '🤫' },
            { en: 'new', vi: 'mới', emoji: '🆕' },
            { en: 'old', vi: 'cũ/già', emoji: '👴' },
            { en: 'strong', vi: 'mạnh', emoji: '💪' },
            { en: 'soft', vi: 'mềm', emoji: '🧸' },
            { en: 'hard', vi: 'cứng', emoji: '🪨' },
        ],
        weather: [
            { en: 'sunny', vi: 'nắng', emoji: '☀️' },
            { en: 'rainy', vi: 'mưa', emoji: '🌧️' },
            { en: 'cloudy', vi: 'nhiều mây', emoji: '☁️' },
            { en: 'windy', vi: 'có gió', emoji: '💨' },
            { en: 'snowy', vi: 'có tuyết', emoji: '❄️' },
            { en: 'foggy', vi: 'có sương mù', emoji: '🌫️' },
            { en: 'stormy', vi: 'bão', emoji: '⛈️' },
            { en: 'rainbow', vi: 'cầu vồng', emoji: '🌈' },
            { en: 'thunder', vi: 'sấm sét', emoji: '⚡' },
            { en: 'hot', vi: 'nóng', emoji: '🌡️' },
        ],
        school: [
            { en: 'pencil', vi: 'bút chì', emoji: '✏️' },
            { en: 'ruler', vi: 'thước kẻ', emoji: '📏' },
            { en: 'eraser', vi: 'cục tẩy', emoji: '🧹' },
            { en: 'scissors', vi: 'kéo', emoji: '✂️' },
            { en: 'notebook', vi: 'vở', emoji: '📓' },
            { en: 'crayon', vi: 'bút màu', emoji: '🖍️' },
            { en: 'glue', vi: 'keo dán', emoji: '🪣' },
            { en: 'backpack', vi: 'ba lô', emoji: '🎒' },
            { en: 'teacher', vi: 'giáo viên', emoji: '👩‍🏫' },
            { en: 'student', vi: 'học sinh', emoji: '👨‍🎓' },
            { en: 'classroom', vi: 'lớp học', emoji: '🏫' },
            { en: 'desk', vi: 'bàn học', emoji: '🪑' },
        ],
        sports: [
            { en: 'football', vi: 'bóng đá', emoji: '⚽' },
            { en: 'basketball', vi: 'bóng rổ', emoji: '🏀' },
            { en: 'tennis', vi: 'quần vợt', emoji: '🎾' },
            { en: 'swimming', vi: 'bơi lội', emoji: '🏊' },
            { en: 'cycling', vi: 'đạp xe', emoji: '🚴' },
            { en: 'running', vi: 'chạy bộ', emoji: '🏃' },
            { en: 'gymnastics', vi: 'thể dục', emoji: '🤸' },
            { en: 'dancing', vi: 'khiêu vũ', emoji: '💃' },
            { en: 'baseball', vi: 'bóng chày', emoji: '⚾' },
            { en: 'badminton', vi: 'cầu lông', emoji: '🏸' },
        ],
        feelings: [
            { en: 'happy', vi: 'vui vẻ', emoji: '😄' },
            { en: 'sad', vi: 'buồn', emoji: '😢' },
            { en: 'angry', vi: 'tức giận', emoji: '😠' },
            { en: 'scared', vi: 'sợ hãi', emoji: '😱' },
            { en: 'surprised', vi: 'ngạc nhiên', emoji: '😲' },
            { en: 'tired', vi: 'mệt mỏi', emoji: '😴' },
            { en: 'excited', vi: 'hào hứng', emoji: '🤩' },
            { en: 'shy', vi: 'nhút nhát', emoji: '😊' },
            { en: 'proud', vi: 'tự hào', emoji: '😤' },
            { en: 'love', vi: 'yêu thương', emoji: '🥰' },
        ],
    }
};

// ===================================================
// BÀI HỌC
// ===================================================

// ===================================================
// PHIÊN ÂM IPA (EN_PHONETICS)
// ===================================================
const EN_PHONETICS = {
    // Animals
    'cat': '/kæt/', 'dog': '/dɔːɡ/', 'fish': '/fɪʃ/', 'bird': '/bɜːrd/',
    'rabbit': '/ˈræbɪt/', 'elephant': '/ˈɛlɪfənt/', 'monkey': '/ˈmʌŋki/',
    'duck': '/dʌk/', 'frog': '/frɔːɡ/', 'cow': '/kaʊ/', 'horse': '/hɔːrs/',
    'pig': '/pɪɡ/', 'sheep': '/ʃiːp/', 'lion': '/ˈlaɪən/', 'tiger': '/ˈtaɪɡər/',
    'bear': '/bɛr/', 'fox': '/fɒks/', 'wolf': '/wʊlf/', 'panda': '/ˈpændə/',
    'penguin': '/ˈpɛŋɡwɪn/', 'turtle': '/ˈtɜːrtl/', 'snake': '/sneɪk/',
    'butterfly': '/ˈbʌtərflaɪ/', 'bee': '/biː/', 'ant': '/ænt/',
    'hen': '/hɛn/', 'chick': '/tʃɪk/', 'whale': '/weɪl/',
    'giraffe': '/dʒəˈræf/', 'zebra': '/ˈziːbrə/',
    // Colors
    'red': '/rɛd/', 'blue': '/bluː/', 'green': '/ɡriːn/', 'yellow': '/ˈjɛloʊ/',
    'orange': '/ˈɔːrɪndʒ/', 'pink': '/pɪŋk/', 'purple': '/ˈpɜːrpl/',
    'white': '/waɪt/', 'black': '/blæk/', 'brown': '/braʊn/',
    'gray': '/ɡreɪ/', 'gold': '/ɡoʊld/',
    // Numbers
    'one': '/wʌn/', 'two': '/tuː/', 'three': '/θriː/', 'four': '/fɔːr/',
    'five': '/faɪv/', 'six': '/sɪks/', 'seven': '/ˈsɛvən/', 'eight': '/eɪt/',
    'nine': '/naɪn/', 'ten': '/tɛn/', 'zero': '/ˈzɪroʊ/',
    'eleven': '/ɪˈlɛvən/', 'twelve': '/twɛlv/', 'twenty': '/ˈtwɛnti/',
    // Body
    'head': '/hɛd/', 'eye': '/aɪ/', 'nose': '/noʊz/', 'ear': '/ɪr/',
    'mouth': '/maʊθ/', 'hand': '/hænd/', 'foot': '/fʊt/', 'hair': '/hɛr/',
    'teeth': '/tiːθ/', 'arm': '/ɑːrm/', 'leg': '/lɛɡ/', 'finger': '/ˈfɪŋɡər/',
    // Shapes
    'circle': '/ˈsɜːrkl/', 'square': '/skwɛr/', 'triangle': '/ˈtraɪæŋɡl/',
    'star': '/stɑːr/', 'heart': '/hɑːrt/', 'rectangle': '/ˈrɛktæŋɡl/',
    'oval': '/ˈoʊvl/', 'diamond': '/ˈdaɪəmənd/',
    // Food
    'apple': '/ˈæpl/', 'banana': '/bəˈnænə/', 'bread': '/brɛd/',
    'rice': '/raɪs/', 'milk': '/mɪlk/', 'cake': '/keɪk/', 'candy': '/ˈkændi/',
    'egg': '/ɛɡ/', 'water': '/ˈwɔːtər/', 'juice': '/dʒuːs/',
    'grape': '/ɡreɪp/', 'strawberry': '/ˈstrɔːbɛri/',
    'watermelon': '/ˈwɔːtərmɛlən/', 'mango': '/ˈmæŋɡoʊ/',
    'pineapple': '/ˈpaɪnæpl/', 'cherry': '/ˈtʃɛri/', 'meat': '/miːt/',
    'soup': '/suːp/', 'noodle': '/ˈnuːdl/', 'pizza': '/ˈpiːtsə/',
    'ice cream': '/ˈaɪs kriːm/', 'cookie': '/ˈkʊki/', 'chocolate': '/ˈtʃɔːklɪt/',
    'carrot': '/ˈkærət/', 'potato': '/pəˈteɪtoʊ/', 'corn': '/kɔːrn/',
    // Family
    'mother': '/ˈmʌðər/', 'father': '/ˈfɑːðər/', 'sister': '/ˈsɪstər/',
    'brother': '/ˈbrʌðər/', 'baby': '/ˈbeɪbi/', 'grandmother': '/ˈɡrænmʌðər/',
    'grandfather': '/ˈɡrænfɑːðər/', 'family': '/ˈfæməli/',
    'uncle': '/ˈʌŋkl/', 'aunt': '/ænt/', 'cousin': '/ˈkʌzn/', 'friend': '/frɛnd/',
    // Objects
    'book': '/bʊk/', 'pen': '/pɛn/', 'ball': '/bɔːl/', 'car': '/kɑːr/',
    'house': '/haʊs/', 'chair': '/tʃɛr/', 'table': '/ˈteɪbl/', 'phone': '/foʊn/',
    'bag': '/bæɡ/', 'shoe': '/ʃuː/', 'bed': '/bɛd/', 'door': '/dɔːr/',
    'window': '/ˈwɪndoʊ/', 'clock': '/klɒk/', 'lamp': '/læmp/',
    'cup': '/kʌp/', 'spoon': '/spuːn/', 'fork': '/fɔːrk/', 'plate': '/pleɪt/',
    'box': '/bɒks/',
    // Clothes
    'shirt': '/ʃɜːrt/', 'pants': '/pænts/', 'dress': '/drɛs/', 'hat': '/hæt/',
    'socks': '/sɒks/', 'jacket': '/ˈdʒækɪt/', 'boots': '/buːts/',
    'gloves': '/ɡlʌvz/', 'scarf': '/skɑːrf/', 'skirt': '/skɜːrt/',
    // Transport
    'bus': '/bʌs/', 'train': '/treɪn/', 'plane': '/pleɪn/', 'boat': '/boʊt/',
    'bike': '/baɪk/', 'truck': '/trʌk/', 'taxi': '/ˈtæksi/',
    'ship': '/ʃɪp/', 'rocket': '/ˈrɒkɪt/',
    // Actions
    'run': '/rʌn/', 'jump': '/dʒʌmp/', 'eat': '/iːt/', 'drink': '/drɪŋk/',
    'sleep': '/sliːp/', 'read': '/riːd/', 'write': '/raɪt/', 'play': '/pleɪ/',
    'sing': '/sɪŋ/', 'dance': '/dæns/', 'swim': '/swɪm/', 'climb': '/klaɪm/',
    'draw': '/drɔː/', 'cook': '/kʊk/', 'walk': '/wɔːk/', 'fly': '/flaɪ/',
    'throw': '/θroʊ/', 'catch': '/kætʃ/', 'kick': '/kɪk/', 'clap': '/klæp/',
    // Adjectives
    'big': '/bɪɡ/', 'small': '/smɔːl/', 'happy': '/ˈhæpi/', 'sad': '/sæd/',
    'hot': '/hɒt/', 'cold': '/koʊld/', 'fast': '/fæst/', 'slow': '/sloʊ/',
    'tall': '/tɔːl/', 'short': '/ʃɔːrt/', 'long': '/lɔːŋ/', 'clean': '/kliːn/',
    'dirty': '/ˈdɜːrti/', 'loud': '/laʊd/', 'quiet': '/ˈkwaɪət/',
    'new': '/njuː/', 'old': '/oʊld/', 'strong': '/strɔːŋ/', 'soft': '/sɒft/',
    'hard': '/hɑːrd/',
    // Weather
    'sunny': '/ˈsʌni/', 'rainy': '/ˈreɪni/', 'cloudy': '/ˈklaʊdi/',
    'windy': '/ˈwɪndi/', 'snowy': '/ˈsnoʊi/', 'foggy': '/ˈfɒɡi/',
    'stormy': '/ˈstɔːrmi/', 'rainbow': '/ˈreɪnboʊ/', 'thunder': '/ˈθʌndər/',
    // School
    'pencil': '/ˈpɛnsəl/', 'ruler': '/ˈruːlər/', 'eraser': '/ɪˈreɪzər/',
    'scissors': '/ˈsɪzərz/', 'notebook': '/ˈnoʊtbʊk/', 'crayon': '/ˈkreɪɒn/',
    'glue': '/ɡluː/', 'backpack': '/ˈbækpæk/', 'teacher': '/ˈtiːtʃər/',
    'student': '/ˈstjuːdənt/', 'classroom': '/ˈklɑːsruːm/', 'desk': '/dɛsk/',
    // Sports
    'football': '/ˈfʊtbɔːl/', 'basketball': '/ˈbɑːskɪtbɔːl/',
    'tennis': '/ˈtɛnɪs/', 'swimming': '/ˈswɪmɪŋ/', 'cycling': '/ˈsaɪklɪŋ/',
    'running': '/ˈrʌnɪŋ/', 'gymnastics': '/dʒɪmˈnæstɪks/',
    'dancing': '/ˈdænsɪŋ/', 'baseball': '/ˈbeɪsbɔːl/', 'badminton': '/ˈbædmɪntən/',
    // Feelings
    'angry': '/ˈæŋɡri/', 'scared': '/skɛrd/', 'surprised': '/sərˈpraɪzd/',
    'tired': '/ˈtaɪərd/', 'excited': '/ɪkˈsaɪtɪd/', 'shy': '/ʃaɪ/',
    'proud': '/praʊd/', 'love': '/lʌv/',
};

function getPhonetic(word) {
    return EN_PHONETICS[word.toLowerCase()] || '';
}

// ===================================================
// BÀI HỌC
// ===================================================
const EN_LESSONS = [
    {
        id: 1, title: 'Animals & Colors', emoji: '🐾🎨',
        vocabTopics: [{ level: 'level1', topic: 'animals' }, { level: 'level1', topic: 'colors' }],
        sentences: [
            { en: 'This is a cat', vi: 'Đây là con mèo' },
            { en: 'The dog is big', vi: 'Con chó to' },
            { en: 'I see a red bird', vi: 'Tôi thấy con chim đỏ' },
            { en: 'The frog is green', vi: 'Con ếch màu xanh' },
        ],
        grammar: {
            title: 'a / an', rule: 'Dùng "a" trước phụ âm, "an" trước nguyên âm',
            examples: ['a cat', 'a dog', 'an elephant', 'an egg', 'an apple']
        },
    },
    {
        id: 2, title: 'Numbers & Food', emoji: '🔢🍎',
        vocabTopics: [{ level: 'level1', topic: 'numbers' }, { level: 'level2', topic: 'food' }],
        sentences: [
            { en: 'I have one apple', vi: 'Tôi có một quả táo' },
            { en: 'Two bananas please', vi: 'Cho tôi hai quả chuối' },
            { en: 'I like milk', vi: 'Tôi thích sữa' },
            { en: 'The cake is good', vi: 'Bánh ngon lắm' },
        ],
        grammar: {
            title: 'I have / I like', rule: '"I have" = tôi có, "I like" = tôi thích',
            examples: ['I have a pen', 'I like cake', 'I have two eggs', 'I like juice']
        },
    },
    {
        id: 3, title: 'Family & Objects', emoji: '👨‍👩‍👧🎒',
        vocabTopics: [{ level: 'level2', topic: 'family' }, { level: 'level2', topic: 'objects' }],
        sentences: [
            { en: 'This is my mother', vi: 'Đây là mẹ tôi' },
            { en: 'I love my family', vi: 'Tôi yêu gia đình' },
            { en: 'The book is on the table', vi: 'Sách ở trên bàn' },
            { en: 'My bag is big', vi: 'Cặp của tôi to' },
        ],
        grammar: {
            title: 'my / your', rule: '"my" = của tôi, "your" = của bạn',
            examples: ['my book', 'your pen', 'my mother', 'your house']
        },
    },
    {
        id: 4, title: 'Actions & Adjectives', emoji: '🏃⭐',
        vocabTopics: [{ level: 'level3', topic: 'actions' }, { level: 'level3', topic: 'adjectives' }],
        sentences: [
            { en: 'I can run fast', vi: 'Tôi chạy nhanh' },
            { en: 'The elephant is big', vi: 'Con voi to' },
            { en: 'I like to sing', vi: 'Tôi thích hát' },
            { en: 'She is happy', vi: 'Bạn ấy vui' },
        ],
        grammar: {
            title: 'I can', rule: '"I can" = tôi có thể',
            examples: ['I can run', 'I can jump', 'I can read', 'I can sing']
        },
    },
    {
        id: 5, title: 'Body & Shapes', emoji: '🫀🔷',
        vocabTopics: [{ level: 'level1', topic: 'body' }, { level: 'level1', topic: 'shapes' }],
        sentences: [
            { en: 'I have two eyes', vi: 'Tôi có hai mắt' },
            { en: 'My hair is long', vi: 'Tóc tôi dài' },
            { en: 'A circle is round', vi: 'Hình tròn là tròn' },
            { en: 'I see a red heart', vi: 'Tôi thấy một trái tim đỏ' },
        ],
        grammar: {
            title: 'I have', rule: '"I have" dùng để nói về bộ phận cơ thể',
            examples: ['I have two eyes', 'I have one nose', 'I have two hands']
        },
    },
    {
        id: 6, title: 'Clothes & Transport', emoji: '👕🚗',
        vocabTopics: [{ level: 'level2', topic: 'clothes' }, { level: 'level2', topic: 'transport' }],
        sentences: [
            { en: 'I wear a blue shirt', vi: 'Tôi mặc áo xanh' },
            { en: 'The bus is big', vi: 'Xe buýt to' },
            { en: 'I go to school by bike', vi: 'Tôi đi học bằng xe đạp' },
            { en: 'My hat is red', vi: 'Mũ của tôi màu đỏ' },
        ],
        grammar: {
            title: 'I wear / I go by', rule: '"I wear" = tôi mặc, "I go by" = tôi đi bằng',
            examples: ['I wear a hat', 'I go by bus', 'I wear socks', 'I go by car']
        },
    },
    {
        id: 7, title: 'Weather & Feelings', emoji: '☀️😊',
        vocabTopics: [{ level: 'level3', topic: 'weather' }, { level: 'level3', topic: 'feelings' }],
        sentences: [
            { en: 'Today is sunny', vi: 'Hôm nay trời nắng' },
            { en: 'I am happy today', vi: 'Hôm nay tôi vui' },
            { en: 'It is cold and I am sad', vi: 'Trời lạnh và tôi buồn' },
            { en: 'The rainbow is beautiful', vi: 'Cầu vồng đẹp' },
        ],
        grammar: {
            title: 'It is / I am', rule: '"It is" = trời/nó, "I am" = tôi là/tôi đang',
            examples: ['It is sunny', 'It is cold', 'I am happy', 'I am tired']
        },
    },
    {
        id: 8, title: 'School & Sports', emoji: '🏫⚽',
        vocabTopics: [{ level: 'level3', topic: 'school' }, { level: 'level3', topic: 'sports' }],
        sentences: [
            { en: 'I go to school every day', vi: 'Tôi đi học mỗi ngày' },
            { en: 'I like football', vi: 'Tôi thích bóng đá' },
            { en: 'The teacher is kind', vi: 'Cô giáo tốt bụng' },
            { en: 'I can swim fast', vi: 'Tôi bơi nhanh' },
        ],
        grammar: {
            title: 'I go to / I like', rule: '"I go to" = tôi đi đến, "I like" = tôi thích',
            examples: ['I go to school', 'I like tennis', 'I go to the park', 'I like swimming']
        },
    },
    {
        id: 9, title: 'Big Review', emoji: '🏆🌟',
        vocabTopics: [
            { level: 'level1', topic: 'animals' }, { level: 'level1', topic: 'colors' },
            { level: 'level2', topic: 'food' }, { level: 'level3', topic: 'actions' },
        ],
        sentences: [
            { en: 'The cat is small and white', vi: 'Con mèo nhỏ và trắng' },
            { en: 'I have five apples', vi: 'Tôi có năm quả táo' },
            { en: 'My dog is happy', vi: 'Con chó của tôi vui' },
            { en: 'I can eat cake and drink juice', vi: 'Tôi có thể ăn bánh và uống nước' },
        ],
        grammar: {
            title: 'Ôn tập tổng hợp', rule: 'Ôn lại: a/an, I have, my, I can, I am, It is',
            examples: ['a cat', 'an apple', 'I have a dog', 'I can jump', 'It is sunny', 'I am happy']
        },
    },
];

// ===================================================
// STATE
// ===================================================
let enSection = 'menu'; // menu, alphabet, vocab, flashcard, lessons, games, tests
let enCurrentAlpha = null;
let enVocabLevel = 'level1';
let enVocabTopic = 'animals';
let enCurrentVocab = null;
let enFCIndex = 0;
let enFCFlipped = false;
let enFCList = [];
let enCurrentLesson = null;
let enLessonStep = 0; // 0=vocab, 1=practice, 2=sentences, 3=grammar
let enGameType = null;
let enGameTopic = null;
let enGameDifficulty = 'easy';
let enGameState = { questions: [], current: 0, score: 0, total: 10 };
let enTestState = { lessonId: null, questions: [], current: 0, score: 0, total: 10 };

// ===================================================
// HELPERS
// ===================================================
function getAllEnVocab() {
    const all = [];
    for (const lv of Object.keys(EN_VOCAB)) {
        for (const tp of Object.keys(EN_VOCAB[lv])) {
            EN_VOCAB[lv][tp].forEach(w => all.push({ ...w, level: lv, topic: tp }));
        }
    }
    return all;
}

function getEnVocabByTopics(topics) {
    const result = [];
    topics.forEach(t => {
        const list = EN_VOCAB[t.level]?.[t.topic] || [];
        list.forEach(w => result.push({ ...w, level: t.level, topic: t.topic }));
    });
    return result;
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ===================================================
// NAVIGATION
// ===================================================
function showEnSection(section) {
    enSection = section;
    // Hide all en-sub-sections
    document.querySelectorAll('.en-sub-section').forEach(s => s.classList.add('hidden'));
    const el = document.getElementById('en-' + section);
    if (el) el.classList.remove('hidden');
    // Render content
    switch (section) {
        case 'menu': break;
        case 'alphabet': renderEnAlphabet(); break;
        case 'vocab': renderEnVocab(); break;
        case 'flashcard': initEnFlashcard(); break;
        case 'lessons': renderEnLessons(); break;
        case 'games': renderEnGamesMenu(); break;
        case 'tests': renderEnTests(); break;
    }
    if (section !== 'menu') {
        document.querySelector('#page-english .page-header')?.scrollIntoView({ behavior: 'smooth' });
    }
}

function backToEnMenu() {
    showEnSection('menu');
}

// ===================================================
// ALPHABET
// ===================================================
function renderEnAlphabet() {
    const grid = document.getElementById('enAlphabetGrid');
    if (!grid) return;
    grid.innerHTML = EN_ALPHABET.map((item, i) =>
        `<button class="en-letter-card" onclick="openEnLetterModal(${i})">
            <span class="en-letter-main">${item.letter}</span>
            <span class="en-letter-sound">/${item.sound}/</span>
            <span class="en-letter-example">${item.emoji} ${item.example}</span>
        </button>`
    ).join('');
}

function openEnLetterModal(i) {
    try {
        enCurrentAlpha = EN_ALPHABET[i];
        if (!enCurrentAlpha) return;
        
        if (window.markEnAlphaLearned) window.markEnAlphaLearned(enCurrentAlpha.letter);
        if (window.addStars) window.addStars(1);
        
        const setEl = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };
        
        setEl('enModalLetter', enCurrentAlpha.letter);
        setEl('enModalLetterLower', enCurrentAlpha.letter.toLowerCase());
        setEl('enModalSound', '/' + enCurrentAlpha.sound + '/');
        setEl('enModalExampleEmoji', enCurrentAlpha.emoji);
        setEl('enModalExample', enCurrentAlpha.example);
        setEl('enModalExampleVi', enCurrentAlpha.word_vi);
        
        const modal = document.getElementById('enAlphabetModal');
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.add('show');
        }
        
        if (typeof playClickSound === 'function') playClickSound();
    } catch (e) {
        console.error('Error opening EN modal:', e);
    }
}

function closeEnAlphabetModal() {
    const modal = document.getElementById('enAlphabetModal');
    if (modal) {
        modal.style.display = '';
        modal.classList.remove('show');
    }
}

function speakEnLetter() {
    if (!enCurrentAlpha) return;
    // Phát âm chữ cái trước, sau đó phát âm từ ví dụ (dùng callback để tránh bị chặn trên mobile)
    speakEnglish(enCurrentAlpha.letter, () => {
        setTimeout(() => {
            if (enCurrentAlpha) speakEnglish(enCurrentAlpha.example);
        }, 500);
    });
}

// ===================================================
// VOCABULARY
// ===================================================
function renderEnVocab() {
    // Update level tabs
    document.querySelectorAll('.en-level-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.level === enVocabLevel)
    );
    // Update topic tabs
    renderEnTopicTabs();
    renderEnVocabGrid();
}

function selectEnLevel(level) {
    enVocabLevel = level;
    const topics = Object.keys(EN_VOCAB[level]);
    enVocabTopic = topics[0];
    renderEnVocab();
}

function selectEnTopic(topic) {
    enVocabTopic = topic;
    renderEnVocab();
}

function renderEnTopicTabs() {
    const container = document.getElementById('enTopicTabs');
    if (!container) return;
    const topics = Object.keys(EN_VOCAB[enVocabLevel]);
    const topicNames = {
        animals: '🐾 Animals', colors: '🎨 Colors', numbers: '🔢 Numbers',
        body: '🫀 Body', shapes: '🔷 Shapes',
        food: '🍎 Food', family: '👨‍👩‍👧 Family', objects: '🎒 Objects',
        clothes: '👕 Clothes', transport: '🚗 Transport',
        actions: '🏃 Actions', adjectives: '⭐ Adjectives',
        weather: '☀️ Weather', school: '🏫 School',
        sports: '⚽ Sports', feelings: '😊 Feelings'
    };
    container.innerHTML = topics.map(t =>
        `<button class="en-topic-btn ${t === enVocabTopic ? 'active' : ''}" onclick="selectEnTopic('${t}')">${topicNames[t] || t}</button>`
    ).join('');
}

function renderEnVocabGrid() {
    const grid = document.getElementById('enVocabGrid');
    if (!grid) return;
    const list = EN_VOCAB[enVocabLevel]?.[enVocabTopic] || [];
    grid.innerHTML = list.map((item, i) =>
        `<button class="en-vocab-card" onclick="openEnVocabModal('${enVocabLevel}','${enVocabTopic}',${i})">
            <span class="en-vocab-emoji">${item.emoji}</span>
            <span class="en-vocab-en">${item.en}</span>
            <span class="en-vocab-vi">${item.vi}</span>
        </button>`
    ).join('');
}

function openEnVocabModal(level, topic, i) {
    const item = EN_VOCAB[level][topic][i];
    enCurrentVocab = item;
    document.getElementById('enVocabModalEmoji').textContent = item.emoji;
    document.getElementById('enVocabModalEn').textContent = item.en;
    const phoneticEl = document.getElementById('enVocabModalPhonetic');
    if (phoneticEl) phoneticEl.textContent = getPhonetic(item.en);
    document.getElementById('enVocabModalVi').textContent = item.vi;
    document.getElementById('enVocabModal').classList.add('show');
    playClickSound();
}

function speakEnVocabEN() { if (enCurrentVocab) speakEnglish(enCurrentVocab.en); }
function speakEnVocabVI() { if (enCurrentVocab) speakVietnamese(enCurrentVocab.vi); }

// ===================================================
// FLASHCARD (PARTS & TESTS)
// ===================================================
let enFcParts = [];
let currentFcPartIdx = -1;
let fcTestQs = [];
let fcTestIdx = 0;
let fcTestScore = 0;

function initEnFlashcard() {
    document.getElementById('enFCTitle').textContent = '🃏 English Flashcard';
    const counterEl = document.getElementById('enFCCounter');
    if (counterEl) counterEl.classList.add('hidden');

    document.getElementById('enFcPartsMenu').classList.remove('hidden');
    document.getElementById('enFcLearningArea').classList.add('hidden');
    document.getElementById('enFcTestArea').classList.add('hidden');
    document.getElementById('enFcTestComplete').classList.add('hidden');

    const backBtn = document.getElementById('fcBackBtn');
    if (backBtn) backBtn.onclick = handleFCBack;

    const allVocab = getAllEnVocab();
    const CHUNK_SIZE = 15;
    enFcParts = [];
    if (allVocab.length > 0) {
        for (let i = 0; i < allVocab.length; i += CHUNK_SIZE) {
            enFcParts.push(allVocab.slice(i, i + CHUNK_SIZE));
        }
    }

    renderFcPartsMenu();
}

function handleFCBack() {
    if (!document.getElementById('enFcPartsMenu').classList.contains('hidden')) {
        backToEnMenu();
    } else {
        initEnFlashcard(); // Quanh lại màn hình chọn Parts
    }
}

let enFcProgress = JSON.parse(localStorage.getItem('en_fc_progress') || '{}');

function renderFcPartsMenu() {
    // Read progress on demand for current user
    let currentProgress = {};
    try {
        currentProgress = JSON.parse(localStorage.getItem('en_fc_progress') || '{}');
    } catch (e) { currentProgress = {}; }

    const grid = document.getElementById('enFcPartsMenu');
    if (!grid) return;

    if (!enFcParts || enFcParts.length === 0) {
        // Emergency re-init if enFcParts empty
        const allVocab = getAllEnVocab();
        enFcParts = [];
        for (let i = 0; i < allVocab.length; i += 15) {
            enFcParts.push(allVocab.slice(i, i + 15));
        }
    }

    grid.innerHTML = enFcParts.map((part, idx) => {
        const score = currentProgress[idx] !== undefined ? currentProgress[idx] : null;
        let badgeClass = 'badge-orange';
        let badgeText = '⭐ Học & Thi';
        let cardClass = 'fc-part-unfinished';

        if (score !== null) {
            if (score === part.length) {
                badgeClass = 'badge-green';
                badgeText = `✅ Done (${score}/${part.length})`;
                cardClass = 'fc-part-done';
            } else {
                badgeClass = 'badge-pink';
                badgeText = `🔄 Doing (${score}/${part.length})`;
                cardClass = 'fc-part-doing';
            }
        }

        return `
        <div class="game-card ${cardClass}" onclick="startFcPart(${idx})">
            <div class="game-card-icon">🃏</div>
            <div>
                <div class="game-card-title">Phần ${idx + 1}</div>
                <div class="game-card-desc">${part.length} từ vựng</div>
            </div>
            <div class="game-card-badge ${badgeClass}">${badgeText}</div>
        </div>
        `;
    }).join('');
}

function startFcPart(idx) {
    currentFcPartIdx = idx;
    enFCList = shuffleArray(enFcParts[idx]);
    enFCIndex = 0;
    enFCFlipped = false;

    document.getElementById('enFcPartsMenu').classList.add('hidden');
    document.getElementById('enFcTestArea').classList.add('hidden');
    document.getElementById('enFcTestComplete').classList.add('hidden');
    document.getElementById('enFcLearningArea').classList.remove('hidden');
    const counterEl = document.getElementById('enFCCounter');
    if (counterEl) counterEl.classList.remove('hidden');
    document.getElementById('enFCTitle').textContent = `Phần ${idx + 1}`;

    showEnFC();
}

function showEnFC() {
    if (!enFCList.length) return;

    document.getElementById('enFcLearningArea').classList.remove('hidden');

    const card = enFCList[enFCIndex];
    document.getElementById('enFCFrontEmoji').textContent = card.emoji;
    document.getElementById('enFCFrontWord').textContent = card.en;
    const phoneticEl = document.getElementById('enFCPhonetic');
    if (phoneticEl) phoneticEl.textContent = getPhonetic(card.en);
    document.getElementById('enFCBackEmoji').textContent = card.emoji;
    document.getElementById('enFCBackWord').textContent = card.vi;
    document.getElementById('enFCInner').classList.remove('flipped');
    enFCFlipped = false;

    const counterEl = document.getElementById('enFCCounter');
    if (counterEl) {
        counterEl.classList.remove('hidden');
        counterEl.textContent = (enFCIndex + 1) + '/' + enFCList.length;
    }

    const nextBtn = document.getElementById('enFCNextBtn');
    if (nextBtn) {
        nextBtn.textContent = (enFCIndex === enFCList.length - 1) ? 'Xong! 🏁' : 'Tiếp ➡️';
    }
}

function flipEnFC() {
    enFCFlipped = !enFCFlipped;
    document.getElementById('enFCInner').classList.toggle('flipped', enFCFlipped);
    playClickSound();
}

function prevEnFC() {
    if (enFCIndex > 0) {
        enFCIndex--;
        showEnFC();
    }
}

function nextEnFC() {
    if (enFCIndex < enFCList.length - 1) {
        enFCIndex++;
        showEnFC();
    } else {
        // Hoàn thành bộ thẻ, chuyển trực tiếp sang bài test luôn
        startEnFCTest();
    }
}

function speakEnFCEn(e) { e.stopPropagation(); speakEnglish(enFCList[enFCIndex].en); }
function speakEnFCVi(e) { e.stopPropagation(); speakVietnamese(enFCList[enFCIndex].vi); }

// ===================================================
// FLASHCARD TEST
// ===================================================
function startEnFCTest() {
    document.getElementById('enFcLearningArea').classList.add('hidden');
    document.getElementById('enFcTestComplete').classList.add('hidden');
    document.getElementById('enFcTestArea').classList.remove('hidden');
    document.getElementById('enFCTitle').textContent = `Kiểm tra - Phần ${currentFcPartIdx + 1}`;
    const counterEl = document.getElementById('enFCCounter');
    if (counterEl) counterEl.classList.add('hidden');

    fcTestQs = [];
    const pool = shuffleArray(enFCList);
    const maxQs = pool.length; // Sử dụng toàn bộ câu hỏi thay vì min(10)
    for (let i = 0; i < maxQs; i++) {
        const correct = pool[i];
        const type = Math.floor(Math.random() * 3); // 0: en->vi, 1: vi->en, 2: listen->en
        const wrongList = shuffleArray(getAllEnVocab().filter(w => w.en !== correct.en)).slice(0, 3);
        const options = shuffleArray([correct, ...wrongList]);
        fcTestQs.push({ correct, options, type });
    }

    fcTestIdx = 0;
    fcTestScore = 0;
    showEnFcTestQ();
}

function showEnFcTestQ() {
    const q = fcTestQs[fcTestIdx];
    const roundEl = document.querySelector('#enFcTestArea .game-round');
    if (roundEl) roundEl.innerHTML = `Câu <span id="enFcTestRound">${fcTestIdx + 1}</span>/${fcTestQs.length}`;

    document.getElementById('enFcTestScore').textContent = fcTestScore;
    document.getElementById('enFcTestFeedback').classList.add('hidden');

    const qTextEl = document.getElementById('enFcTestQuestion');
    const listenBtn = document.getElementById('enFcTestListenBtnContainer');
    listenBtn.classList.add('hidden');

    let html = '';
    if (q.type === 0) {
        qTextEl.textContent = `Từ "${q.correct.en}" nghĩa là gì?`;
        html = q.options.map(o => `<button class="game-option-btn" data-en="${o.en}" onclick="answerEnFcTest('${o.en}', this)">${o.emoji} ${o.vi}</button>`).join('');
    } else if (q.type === 1) {
        qTextEl.textContent = `"${q.correct.emoji} ${q.correct.vi}" tiếng Anh là gì?`;
        html = q.options.map(o => `<button class="game-option-btn" data-en="${o.en}" onclick="answerEnFcTest('${o.en}', this)">${o.en}</button>`).join('');
    } else {
        qTextEl.textContent = `Nghe và chọn từ đúng`;
        listenBtn.classList.remove('hidden');
        html = q.options.map(o => `<button class="game-option-btn" data-en="${o.en}" onclick="answerEnFcTest('${o.en}', this)">${o.emoji} ${o.vi}</button>`).join('');
        setTimeout(() => speakEnglish(q.correct.en), 300);
    }
    document.getElementById('enFcTestOptions').innerHTML = html;
}

function playEnFcTestListen() {
    speakEnglish(fcTestQs[fcTestIdx].correct.en);
}

function answerEnFcTest(ansEn, btn) {
    const q = fcTestQs[fcTestIdx];
    const isCorrect = (ansEn === q.correct.en);

    document.querySelectorAll('#enFcTestOptions .game-option-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.en === q.correct.en) b.classList.add('correct');
    });

    const fText = document.getElementById('enFcTestFeedbackText');
    const feedbackArea = document.getElementById('enFcTestFeedback');

    if (isCorrect) {
        btn.classList.add('correct');
        fcTestScore++;
        const praises = [
            'Hoan hô! Bé thật là giỏi!',
            'Tuyệt vời quá! Bé làm đúng rồi!',
            'Xuất sắc! Bé thông minh nhất luôn!',
            'Chính xác! Bé giỏi lắm!',
            'Đúng rồi! Bé thật là giỏi!',
            'Bé giỏi quá! Cú Mèo khen bé nè!',
            'Bé làm đúng rồi! Cú Mèo thưởng cho bé 1 ngôi sao nhé!'
        ];
        const praise = praises[Math.floor(Math.random() * praises.length)];
        if (typeof window.addStars === 'function') window.addStars(1);
        fText.textContent = praise;
        fText.className = 'feedback-text correct-feedback'; 

        if (typeof playCorrectSound === 'function') playCorrectSound();
        if (typeof showConfetti === 'function') showConfetti();

        // Voice praise (enthusiastic)
        speakVietnamese(praise.replace(/[!🌟👏🎯😊🚀💪]/g, ''));
    } else {
        btn.classList.add('wrong');
        const cheers = [
            'Cố gắng lên nào! Bé sắp làm đúng rồi đó!',
            'Đừng buồn nhé, lần sau bé sẽ làm được mà! Cố lên!',
            'Gần đúng rồi! Bé thử suy nghĩ lại một chút nhé!',
            'Không sao đâu! Bé làm lại câu khác nha!',
            'Bé làm sai rồi! Cú Mèo sẽ chỉ cho bé đáp án nhé!',
            'Chưa đúng rồi, bé cố gắng lần sau nhé!',
            'Chưa chính xác, bé thử lại nhé!'
        ];
        const cheer = cheers[Math.floor(Math.random() * cheers.length)];
        fText.innerHTML = `<span style="display:block;margin-bottom:5px">${cheer}</span><small>Đáp án: "${q.correct.en}" (${q.correct.vi})</small>`;
        fText.className = 'feedback-text wrong-feedback';

        if (typeof playWrongSound === 'function') playWrongSound();

        // Voice encouragement
        speakVietnamese(cheer.replace(/[!💪😊🦉🧠]/g, ''));
    }

    document.getElementById('enFcTestScore').textContent = fcTestScore;
    feedbackArea.classList.remove('hidden');

    // Lưu điểm tạm thời vào localStorage để tính tiến độ "Doing" (nếu thoát ra giữa chừng)
    const currentProgressByPart = JSON.parse(localStorage.getItem('en_fc_progress') || '{}');
    const existingMax = currentProgressByPart[currentFcPartIdx] || 0;
    // Cập nhật nếu điểm hiện tại cao hơn hoặc nếu đơn giản là đang "làm" (Doing)
    // Để đúng ý user "Doing kèm tiến độ", ta có thể lưu điểm hiện tại
    currentProgressByPart[currentFcPartIdx] = Math.max(existingMax, fcTestScore);
    localStorage.setItem('en_fc_progress', JSON.stringify(currentProgressByPart));
    enFcProgress = currentProgressByPart; // Đồng bộ biến local

    // Tự động chuyển câu sau 3.5 giây
    if (window.enFcTestTimer) clearTimeout(window.enFcTestTimer);
    window.enFcTestTimer = setTimeout(() => {
        const testArea = document.getElementById('enFcTestArea');
        if (testArea && !testArea.classList.contains('hidden')) {
            nextEnFcTest();
        }
    }, 3500);
}

function nextEnFcTest() {
    if (window.enFcTestTimer) clearTimeout(window.enFcTestTimer);
    fcTestIdx++;
    if (fcTestIdx >= fcTestQs.length) {
        endEnFcTest();
    } else {
        showEnFcTestQ();
    }
}

function endEnFcTest() {
    // Lưu điểm cuối cùng
    const currentProgressByPart = JSON.parse(localStorage.getItem('en_fc_progress') || '{}');
    currentProgressByPart[currentFcPartIdx] = Math.max(currentProgressByPart[currentFcPartIdx] || 0, fcTestScore);
    localStorage.setItem('en_fc_progress', JSON.stringify(currentProgressByPart));
    enFcProgress = currentProgressByPart;

    if (window.markEnFcLearned) window.markEnFcLearned(currentFcPartIdx);

    document.getElementById('enFcTestArea').classList.add('hidden');
    document.getElementById('enFcTestComplete').classList.remove('hidden');
    document.getElementById('enFcTestFinalScore').textContent = fcTestScore;
    document.getElementById('enFcTestMaxScore').textContent = fcTestQs.length;

    const msg = document.getElementById('enFcTestMsg');
    if (fcTestScore === fcTestQs.length) {
        const finalPraise = 'Quá tuyệt vời! Bé đã nhớ hết tất cả từ vựng rồi! 🌟🏆';
        msg.textContent = finalPraise;
        if (typeof showConfetti === 'function') showConfetti();
        if (typeof playCorrectSound === 'function') playCorrectSound();
        speakVietnamese('Quá tuyệt vời! Bé đã nhớ hết tất cả từ vựng rồi!');
    } else if (fcTestScore >= fcTestQs.length / 2) {
        const mediumPraise = 'Bé làm khá lắm! Cùng luyện tập thêm để đạt điểm tuyệt đối nhé! 👏';
        msg.textContent = mediumPraise;
        if (typeof playCorrectSound === 'function') playCorrectSound();
        speakVietnamese('Bé làm khá lắm! Cùng luyện tập thêm để đạt điểm tuyệt đối nhé!');
    } else {
        const encourageMsg = 'Không sao đâu, bé hãy học lại một chút rồi thử lại nhé! Cú Mèo tin bé làm được! 💪';
        msg.textContent = encourageMsg;
        if (typeof playWrongSound === 'function') playWrongSound();
        speakVietnamese('Không sao đâu, bé hãy học lại một chút rồi thử lại nhé! Cú Mèo tin bé làm được!');
    }
}

function backToEnFcMenu() {
    initEnFlashcard();
}

// ===================================================
// LESSONS
// ===================================================
function renderEnLessons() {
    const grid = document.getElementById('enLessonsGrid');
    if (!grid) return;
    grid.innerHTML = EN_LESSONS.map((l, i) => {
        // Split emojis string into individual emojis for better styling
        const emojis = Array.from(l.emoji);
        const emojiHtml = emojis.map(e => `<span class="en-icon-item">${e}</span>`).join('');

        // Simple progress check (we can expand this later)
        const isFirst = i === 0; // Just for demo in screenshot
        const cardClass = isFirst ? 'en-lesson-card fc-part-doing' : 'en-lesson-card';
        const badgeClass = isFirst ? 'badge-pink' : 'badge-orange';
        const badgeText = isFirst ? '🔄 Doing' : `📝 Lesson ${l.id}`;

        return `
        <button class="game-card ${cardClass}" onclick="startEnLesson(${i})">
            <div class="en-icon-wrapper">
                ${emojiHtml}
            </div>
            <div class="game-card-title">Bài ${l.id}: ${l.title}</div>
            <div class="game-card-desc" style="color: #64748B; font-weight: 600;">📚 ${l.vocabTopics.length} chủ đề chính</div>
            <div class="game-card-badge ${badgeClass}">${badgeText}</div>
        </button>`;
    }).join('');
}

function startEnLesson(idx) {
    enCurrentLesson = EN_LESSONS[idx];
    enLessonStep = 0;
    document.getElementById('en-lessons').classList.add('hidden');
    document.getElementById('en-lesson-active').classList.remove('hidden');
    document.getElementById('enLessonTitle').textContent = 'Bài ' + enCurrentLesson.id + ': ' + enCurrentLesson.title;
    renderEnLessonStep();
}

function renderEnLessonStep() {
    const content = document.getElementById('enLessonContent');
    // Update step indicator
    document.querySelectorAll('.en-lesson-step-btn').forEach((b, i) => {
        b.classList.toggle('active', i === enLessonStep);
        b.classList.toggle('done', i < enLessonStep);
    });

    if (enLessonStep === 0) {
        // Vocab cards
        const vocab = getEnVocabByTopics(enCurrentLesson.vocabTopics);
        content.innerHTML = `<h3 class="en-lesson-subtitle">📖 Học từ vựng</h3>
            <div class="en-lesson-vocab-grid">${vocab.map(w =>
            `<div class="en-lesson-vocab-card" onclick="speakEnglish('${w.en}')">
                    <span class="en-lv-emoji">${w.emoji}</span>
                    <span class="en-lv-en">${w.en}</span>
                    <span class="en-lv-vi">${w.vi}</span>
                </div>`
        ).join('')}</div>
            <button class="en-lesson-next-btn" onclick="nextEnLessonStep()">Tiếp theo →</button>`;
    } else if (enLessonStep === 1) {
        // Practice - multiple choice
        const vocab = shuffleArray(getEnVocabByTopics(enCurrentLesson.vocabTopics));
        const q = vocab[0];
        const opts = shuffleArray([q, ...shuffleArray(vocab.filter(w => w.en !== q.en)).slice(0, 3)]);
        content.innerHTML = `<h3 class="en-lesson-subtitle">🎯 Luyện tập</h3>
            <div class="en-practice-question">
                <div class="en-practice-emoji">${q.emoji}</div>
                <div class="en-practice-text">Đây là gì?</div>
            </div>
            <div class="en-practice-options">${opts.map(o =>
            `<button class="en-practice-opt" onclick="checkEnPractice(this,'${q.en}','${o.en}')">${o.en}</button>`
        ).join('')}</div>
            <button class="en-lesson-next-btn" onclick="nextEnLessonStep()" style="margin-top:16px">Tiếp theo →</button>`;
    } else if (enLessonStep === 2) {
        // Sentences
        content.innerHTML = `<h3 class="en-lesson-subtitle">💬 Câu đơn giản</h3>
            <div class="en-sentences-list">${enCurrentLesson.sentences.map(s =>
            `<div class="en-sentence-card" onclick="speakEnglish('${s.en.replace(/'/g, "\\'")}')">
                    <div class="en-sentence-en">🔊 ${s.en}</div>
                    <div class="en-sentence-vi">${s.vi}</div>
                </div>`
        ).join('')}</div>
            <button class="en-lesson-next-btn" onclick="nextEnLessonStep()">Tiếp theo →</button>`;
    } else if (enLessonStep === 3) {
        // Grammar
        const g = enCurrentLesson.grammar;
        content.innerHTML = `<h3 class="en-lesson-subtitle">📏 Ngữ pháp: ${g.title}</h3>
            <div class="en-grammar-rule">${g.rule}</div>
            <div class="en-grammar-examples">${g.examples.map(e =>
            `<span class="en-grammar-ex" onclick="speakEnglish('${e}')">${e}</span>`
        ).join('')}</div>
            <div class="en-lesson-complete">
                <div class="game-complete-emoji">🎉</div>
                <h3>Hoàn thành bài học!</h3>
                <button class="en-lesson-next-btn" onclick="startEnTestFromLesson()">✅ Làm kiểm tra</button>
                <button class="en-lesson-back-btn" onclick="backToEnLessons()">← Quay lại</button>
            </div>`;
    }
}

function nextEnLessonStep() {
    if (enLessonStep < 3) { enLessonStep++; renderEnLessonStep(); }
}

function checkEnPractice(btn, correct, chosen) {
    const isCorrect = correct === chosen;
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) { 
        if (typeof window.addStars === 'function') window.addStars(1);
        playCorrectSound(); 
    } else { playWrongSound(); }
    document.querySelectorAll('.en-practice-opt').forEach(b => {
        b.disabled = true;
        if (b.textContent === correct) b.classList.add('correct');
    });
}

function backToEnLessons() {
    document.getElementById('en-lesson-active').classList.add('hidden');
    document.getElementById('en-lessons').classList.remove('hidden');
}

// ===================================================
// GAMES
// ===================================================
function renderEnGamesMenu() {
    const grid = document.getElementById('enGamesMenu');
    if (!grid) return;
    grid.innerHTML = `
        <button class="game-card" onclick="startEnGame('picture')">
            <div class="game-card-icon">🖼️</div>
            <div class="game-card-title">Đuổi Hình Bắt Chữ</div>
            <div class="game-card-desc">Xem hình → chọn từ tiếng Anh</div>
            <div class="game-card-badge">⭐ Game 1</div>
        </button>
        <button class="game-card" onclick="startEnGame('listen')">
            <div class="game-card-icon">🎧</div>
            <div class="game-card-title">Nghe Và Chọn</div>
            <div class="game-card-desc">Nghe phát âm → chọn từ đúng</div>
            <div class="game-card-badge">⭐ Game 2</div>
        </button>
        <button class="game-card" onclick="startEnGame('spell')">
            <div class="game-card-icon">🔤</div>
            <div class="game-card-title">Ghép Từ</div>
            <div class="game-card-desc">Xếp chữ cái thành từ</div>
            <div class="game-card-badge">⭐ Game 3</div>
        </button>
        <button class="game-card" onclick="startEnGame('speed')">
            <div class="game-card-icon">⚡</div>
            <div class="game-card-title">Flashcard Nhanh</div>
            <div class="game-card-desc">Trả lời nhanh trong 15 giây</div>
            <div class="game-card-badge">⭐ Game 4</div>
        </button>`;
}

function startEnGame(type) {
    enGameType = type;
    document.getElementById('en-games').classList.add('hidden');
    document.getElementById('en-game-config').classList.remove('hidden');
    document.getElementById('enGameConfigStep1').classList.remove('hidden');
    document.getElementById('enGameConfigStep2').classList.add('hidden');

    // Render topics based on EN_VOCAB
    const topicsGrid = document.getElementById('enGameTopicList');
    const topics = [
        { id: 'all', name: 'Tất cả', icon: '🌈', list: getAllEnVocab() },
        { id: 'animals', name: 'Động vật', icon: '🐾', list: getEnVocabByTopics([{ level: 'level1', topic: 'animals' }]) },
        { id: 'colors', name: 'Màu sắc', icon: '🎨', list: getEnVocabByTopics([{ level: 'level1', topic: 'colors' }]) },
        { id: 'fruits', name: 'Trái cây', icon: '🍎', list: getEnVocabByTopics([{ level: 'level2', topic: 'fruits' }]) },
        { id: 'food', name: 'Thức ăn', icon: '🍔', list: getEnVocabByTopics([{ level: 'level2', topic: 'food' }]) },
        { id: 'objects', name: 'Đồ vật', icon: '🎒', list: getEnVocabByTopics([{ level: 'level2', topic: 'objects' }]) },
        { id: 'transport', name: 'Giao thông', icon: '🚀', list: getEnVocabByTopics([{ level: 'level2', topic: 'transport' }]) }
    ];

    topicsGrid.innerHTML = topics.map(t => `
        <button class="game-card" onclick="selectEnGameTopic('${t.id}')">
            <div class="game-card-icon">${t.icon}</div>
            <div class="game-card-title">${t.name}</div>
            <div class="game-card-desc">${t.list.length} từ vựng</div>
        </button>
    `).join('');
}

function selectEnGameTopic(topicId) {
    if (topicId === 'all') {
        enGameTopic = getAllEnVocab();
    } else {
        let list = [];
        for (let lv of Object.keys(EN_VOCAB)) {
            if (EN_VOCAB[lv][topicId]) list = [...list, ...EN_VOCAB[lv][topicId]];
        }
        enGameTopic = list;
    }
    
    if (enGameType === 'spell') {
        document.getElementById('enGameConfigStep1').classList.add('hidden');
        document.getElementById('enGameConfigStep2').classList.remove('hidden');
    } else {
        // Skip difficulty for these 3 games
        setEnGameDiff('easy');
    }
}

function setEnGameDiff(diff) {
    enGameDifficulty = diff;
    const badge = document.getElementById('enGameDiffBadge');
    badge.textContent = diff === 'easy' ? 'Dê' : diff === 'medium' ? 'Trung bình' : 'Khó';
    badge.className = 'game-card-badge ' + (diff === 'easy' ? 'badge-green' : diff === 'medium' ? 'badge-orange' : 'badge-pink');

    startEnGameActual();
}

let enSpeedTimer = null;
let enSpeedTimeLeft = 15;

function startEnGameActual() {
    enGameState = { questions: shuffleArray(enGameTopic), current: 0, score: 0, total: 10 };
    
    // UI Reset
    document.getElementById('enGameTimerArea').classList.add('hidden');
    document.getElementById('enGameRoundArea').classList.remove('hidden');
    
    if (enGameType === 'speed') {
        enGameState.total = 100; // Unlimited as long as time exists
        enSpeedTimeLeft = 15;
        document.getElementById('enGameTimerArea').classList.remove('hidden');
        document.getElementById('enGameRoundArea').classList.add('hidden'); // Hide "Câu 1/10" for speed game
        startEnSpeedTimer();
    }
    
    document.getElementById('en-game-config').classList.add('hidden');
    document.getElementById('en-game-active').classList.remove('hidden');
    document.getElementById('enGameScore').textContent = '0';
    renderEnGameQuestion();
}

function startEnSpeedTimer() {
    clearInterval(enSpeedTimer);
    document.getElementById('enGameTimer').textContent = enSpeedTimeLeft;
    enSpeedTimer = setInterval(() => {
        enSpeedTimeLeft--;
        const timerSpan = document.getElementById('enGameTimer');
        if (timerSpan) timerSpan.textContent = enSpeedTimeLeft;
        if (enSpeedTimeLeft <= 0) {
            clearInterval(enSpeedTimer);
            showEnGameComplete();
        }
    }, 1000);
}

function renderEnGameQuestion() {
    const area = document.getElementById('enGameArea');
    if (enGameState.current >= enGameState.total) { showEnGameComplete(); return; }
    const q = enGameState.questions[enGameState.current % enGameState.questions.length];
    const allVocab = getAllEnVocab();
    
    // Update round display for non-speed games
    if (enGameType !== 'speed') {
        document.getElementById('enGameRound').textContent = enGameState.current + 1;
    }

    if (enGameType === 'picture') {
        const opts = shuffleArray([q, ...shuffleArray(allVocab.filter(w => w.en !== q.en)).slice(0, 3)]);
        area.innerHTML = `<div class="en-game-q">
            <div class="en-game-q-emoji">${q.emoji}</div>
            <div class="en-game-q-text">Đây là gì bằng tiếng Anh?</div>
        </div>
        <div class="game-options">${opts.map(o =>
            `<button class="game-option-btn" onclick="answerEnGame(this,'${q.en}','${o.en}')">${o.en}</button>`
        ).join('')}</div>`;
    } else if (enGameType === 'listen') {
        const opts = shuffleArray([q, ...shuffleArray(allVocab.filter(w => w.en !== q.en)).slice(0, 3)]);
        speakEnglish(q.en);
        area.innerHTML = `<div class="en-game-q">
            <button class="listen-play-btn" onclick="speakEnglish('${q.en}')">🔊 Nghe lại</button>
            <div class="en-game-q-text">Từ nào vừa được đọc?</div>
        </div>
        <div class="game-options">${opts.map(o =>
            `<button class="game-option-btn" onclick="answerEnGame(this,'${q.en}','${o.en}')">${o.emoji} ${o.en}</button>`
        ).join('')}</div>`;
    } else if (enGameType === 'spell') {
        let letters = q.en.split('');
        // Difficulty Logic: Add distractor characters
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let distractors = [];
        if (enGameDifficulty === 'medium') {
            distractors = [alphabet[Math.floor(Math.random() * 26)]];
        } else if (enGameDifficulty === 'hard') {
            for (let i = 0; i < 3; i++) {
                distractors.push(alphabet[Math.floor(Math.random() * 26)]);
            }
        }

        const finalLetters = shuffleArray([...letters, ...distractors]);

        area.innerHTML = `<div class="en-game-q">
            <div class="en-game-q-emoji">${q.emoji}</div>
            <div class="en-game-q-text">Ghép chữ thành từ: <b>${q.vi}</b></div>
        </div>
        <div class="en-spell-target" id="enSpellTarget"></div>
        <div class="en-spell-letters" id="enSpellLetters">${finalLetters.map((l, i) =>
            `<button class="en-spell-letter" onclick="pickEnSpellLetter(this,'${l}')">${l}</button>`
        ).join('')}</div>
        <div class="en-spell-actions">
            <button class="en-spell-clear-btn" onclick="clearEnSpell()">🔄 Xóa</button>
            <button class="en-spell-check-btn" onclick="checkEnSpell('${q.en}')">✅ Kiểm tra</button>
        </div>`;
    } else if (enGameType === 'speed') {
        const opts = shuffleArray([q, ...shuffleArray(allVocab.filter(w => w.en !== q.en)).slice(0, 3)]);
        area.innerHTML = `<div class="en-game-q">
            <div class="en-game-q-emoji" style="font-size:6rem; animation: pulse 0.5s infinite alternate;">${q.emoji}</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: #3B82F6;">Chọn từ đúng thật nhanh!</div>
        </div>
        <div class="game-options" style="grid-template-columns: 1fr 1fr;">${opts.map(o =>
            `<button class="game-option-btn" onclick="answerEnGame(this,'${q.en}','${o.en}')" style="padding: 20px; font-size: 1.3rem;">${o.en}</button>`
        ).join('')}</div>`;
    }
}

function answerEnGame(btn, correct, chosen) {
    const isCorrect = correct === chosen;
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
        enGameState.score++;
        if (typeof window.addStars === 'function') window.addStars(1);
        playCorrectSound(); showConfetti();
        btn.innerHTML = `<span>${window.getRandomPraise()}</span>`;
    }
    else {
        playWrongSound();
        btn.innerHTML = `<span>❌ Đáp án là "${correct}" bé nhé! 💪</span>`;
    }
    document.getElementById('enGameScore').textContent = enGameState.score;
    document.querySelectorAll('.game-option-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent.includes(correct)) b.classList.add('correct');
    });
    
    // speed game advances faster
    const delay = enGameType === 'speed' ? 800 : 3000;
    setTimeout(() => { enGameState.current++; renderEnGameQuestion(); }, delay);
}

// Spell game helpers
let enSpellWord = '';
function pickEnSpellLetter(btn, letter) {
    enSpellWord += letter;
    btn.disabled = true;
    btn.style.opacity = '0.3';
    document.getElementById('enSpellTarget').textContent = enSpellWord;
}
function clearEnSpell() {
    enSpellWord = '';
    document.getElementById('enSpellTarget').textContent = '';
    document.querySelectorAll('.en-spell-letter').forEach(b => { b.disabled = false; b.style.opacity = '1'; });
}
function checkEnSpell(correct) {
    const target = document.getElementById('enSpellTarget');
    if (enSpellWord.toLowerCase() === correct.toLowerCase()) {
        enGameState.score++;
        if (typeof window.addStars === 'function') window.addStars(1);
        playCorrectSound(); showConfetti();
        target.textContent = window.getRandomPraise();
        target.classList.add('correct');
    } else {
        playWrongSound();
        target.textContent = `❌ Chưa đúng rồi! Đó là "${correct}". 💪`;
        target.classList.add('wrong');
    }
    document.getElementById('enGameScore').textContent = enGameState.score;
    setTimeout(() => { enGameState.current++; renderEnGameQuestion(); }, 3000);
}

function showEnGameComplete() {
    const area = document.getElementById('enGameArea');
    const pct = Math.round(enGameState.score / enGameState.total * 100);
    const msg = pct >= 80 ? 'Giỏi lắm! 🌟' : pct >= 50 ? 'Tốt lắm! 👍' : 'Cố gắng thêm nhé! 💪';
    area.innerHTML = `<div class="game-complete-content">
        <div class="game-complete-emoji">🎉</div>
        <h2 class="game-complete-title">Hoàn Thành!</h2>
        <div class="game-complete-score">Bạn đạt ${enGameState.score}/${enGameState.total} ⭐</div>
        <div class="game-complete-message">${msg}</div>
        <div class="game-complete-buttons">
            <button class="game-btn-replay" onclick="startEnGame('${enGameType}')">🔄 Chơi lại</button>
            <button class="game-btn-menu" onclick="backToEnGames()">📋 Game khác</button>
        </div>
    </div>`;
}

function backToEnGames() {
    clearInterval(enSpeedTimer); // Stop timer on exit
    document.getElementById('en-game-active').classList.add('hidden');
    document.getElementById('en-games').classList.remove('hidden');
}

// ===================================================
// TESTS
// ===================================================
function renderEnTests() {
    const grid = document.getElementById('enTestsGrid');
    if (!grid) return;
    grid.innerHTML = EN_LESSONS.map((l, i) =>
        `<button class="game-card" onclick="startEnTest(${i})">
            <div class="game-card-icon">✅</div>
            <div class="game-card-title">Kiểm tra Bài ${l.id}</div>
            <div class="game-card-desc">${l.title}</div>
            <div class="game-card-badge">📝 ${l.vocabTopics.length * 5} câu</div>
        </button>`
    ).join('');
}

function startEnTestFromLesson() {
    const idx = EN_LESSONS.indexOf(enCurrentLesson);
    backToEnLessons();
    showEnSection('tests');
    startEnTest(idx);
}

function startEnTest(lessonIdx) {
    const lesson = EN_LESSONS[lessonIdx];
    const vocab = shuffleArray(getEnVocabByTopics(lesson.vocabTopics));
    const questions = [];
    const allVocab = getAllEnVocab();

    vocab.slice(0, 10).forEach((q, i) => {
        const type = i % 3; // 0=picture, 1=translate, 2=listen
        const opts = shuffleArray([q, ...shuffleArray(allVocab.filter(w => w.en !== q.en)).slice(0, 3)]);
        questions.push({ ...q, type, options: opts });
    });

    enTestState = { lessonId: lessonIdx, questions, current: 0, score: 0, total: questions.length };
    document.getElementById('en-tests').classList.add('hidden');
    document.getElementById('en-test-active').classList.remove('hidden');
    document.getElementById('enTestScore').textContent = '0';
    document.getElementById('enTestRound').textContent = '1';
    renderEnTestQuestion();
}

function renderEnTestQuestion() {
    const area = document.getElementById('enTestArea');
    if (enTestState.current >= enTestState.total) { showEnTestComplete(); return; }
    const q = enTestState.questions[enTestState.current];
    document.getElementById('enTestRound').textContent = enTestState.current + 1;

    if (q.type === 0) {
        area.innerHTML = `<div class="en-game-q">
            <div class="en-game-q-emoji">${q.emoji}</div>
            <div class="en-game-q-text">Đây là gì?</div>
        </div>
        <div class="game-options">${q.options.map(o =>
            `<button class="game-option-btn" onclick="answerEnTest(this,'${q.en}','${o.en}')">${o.en}</button>`
        ).join('')}</div>`;
    } else if (q.type === 1) {
        area.innerHTML = `<div class="en-game-q">
            <div class="en-game-q-text" style="font-size:1.5rem">"${q.en}" nghĩa là gì?</div>
        </div>
        <div class="game-options">${q.options.map(o =>
            `<button class="game-option-btn" onclick="answerEnTest(this,'${q.en}','${o.en}')">${o.emoji} ${o.vi}</button>`
        ).join('')}</div>`;
    } else {
        speakEnglish(q.en);
        area.innerHTML = `<div class="en-game-q">
            <button class="listen-play-btn" onclick="speakEnglish('${q.en}')">🔊 Nghe lại</button>
            <div class="en-game-q-text">Từ nào vừa được đọc?</div>
        </div>
        <div class="game-options">${q.options.map(o =>
            `<button class="game-option-btn" onclick="answerEnTest(this,'${q.en}','${o.en}')">${o.emoji} ${o.en}</button>`
        ).join('')}</div>`;
    }
}

function answerEnTest(btn, correct, chosen) {
    const isCorrect = correct === chosen;
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if (window.authManager && window.authManager.recordScore) window.authManager.recordScore(isCorrect ? 1 : 0, 1);
    if (isCorrect) {
        enTestState.score++;
        if (window.addStars) window.addStars(1);
        if (enGameType === 'flashcard' && enGameTopic && window.markEnFcLearned) {
            // If it's a flashcard test session, track the topic
            window.markEnFcLearned(enGameTopic);
        }
        playCorrectSound(); showConfetti();
        btn.innerHTML = `<span>${window.getRandomPraise()}</span>`;
    }
    else {
        playWrongSound();
        btn.innerHTML = `<span>❌ Đáp án đúng là "${correct}"! 💪</span>`;
    }
    document.getElementById('enTestScore').textContent = enTestState.score;
    document.querySelectorAll('.game-option-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent.includes(correct)) b.classList.add('correct');
    });
    setTimeout(() => { enTestState.current++; renderEnTestQuestion(); }, 3000);
}

function showEnTestComplete() {
    const area = document.getElementById('enTestArea');
    const pct = Math.round(enTestState.score / enTestState.total * 100);
    const msg = pct >= 80 ? 'Xuất sắc! 🌟🌟🌟' : pct >= 60 ? 'Giỏi lắm! 🌟🌟' : pct >= 40 ? 'Khá tốt! 🌟' : 'Thử lại nhé! 💪';

    if (pct >= 80 && window.markEnLessonLearned) {
        window.markEnLessonLearned(EN_LESSONS[enTestState.lessonId].id);
    }
    
    area.innerHTML = `<div class="game-complete-content">
        <div class="game-complete-emoji">${pct >= 60 ? '🏆' : '📝'}</div>
        <h2 class="game-complete-title">${pct >= 60 ? 'Tuyệt vời!' : 'Cố gắng thêm!'}</h2>
        <div class="game-complete-score">${enTestState.score}/${enTestState.total} ⭐ (${pct}%)</div>
        <div class="game-complete-message">${msg}</div>
        <div class="game-complete-buttons">
            <button class="game-btn-replay" onclick="startEnTest(${enTestState.lessonId})">🔄 Làm lại</button>
            <button class="game-btn-menu" onclick="backToEnTests()">📋 Bài khác</button>
        </div>
    </div>`;
}

function backToEnTests() {
    document.getElementById('en-test-active').classList.add('hidden');
    document.getElementById('en-tests').classList.remove('hidden');
}

// Sound effects (reuse from script.js if available)
function playCorrectSound() { try { playClickSound(); } catch (e) { } }
function playWrongSound() { try { playClickSound(); } catch (e) { } }
