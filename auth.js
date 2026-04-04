// auth.js - Hệ thống đăng nhập (1 Account = 1 Bé)
(function() {
    const AUTH_KEY = 'app_auth_data';
    const INTERNAL_KEYS = [AUTH_KEY];

    const originalGetItem = Storage.prototype.getItem;
    const originalSetItem = Storage.prototype.setItem;
    const originalRemoveItem = Storage.prototype.removeItem;

    function getAuthData() {
        try {
            return JSON.parse(originalGetItem.call(localStorage, AUTH_KEY)) || { users: {}, activeUser: null };
        } catch {
            return { users: {}, activeUser: null };
        }
    }

    function saveAuthData(data) {
        originalSetItem.call(localStorage, AUTH_KEY, JSON.stringify(data));
    }

    function getActiveUserData() {
        const auth = getAuthData();
        if (auth.activeUser && auth.users[auth.activeUser]) {
            const user = auth.users[auth.activeUser];
            if (!user.data) user.data = {};
            return { auth, user };
        }
        return null;
    }

    Storage.prototype.getItem = function(key) {
        if (INTERNAL_KEYS.includes(key) || key.startsWith('app_auth_')) {
            return originalGetItem.call(this, key);
        }
        const active = getActiveUserData();
        if (active) {
            if (active.user.data[key] !== undefined) return active.user.data[key];
            return null;
        }
        return originalGetItem.call(this, key);
    };

    Storage.prototype.setItem = function(key, value) {
        if (INTERNAL_KEYS.includes(key) || key.startsWith('app_auth_')) {
            originalSetItem.call(this, key, value);
            return;
        }
        const active = getActiveUserData();
        if (active) {
            if (!active.user.data) active.user.data = {};
            active.user.data[key] = value;
            saveAuthData(active.auth);
            if (key.includes('progress') || key.includes('score')) {
               if (window.renderAuthUI) window.renderAuthUI();
            }
        } else {
            originalSetItem.call(this, key, value);
            if (key.includes('progress') || key.includes('score')) {
               if (window.renderAuthUI) window.renderAuthUI();
            }
        }
    };

    Storage.prototype.removeItem = function(key) {
        if (INTERNAL_KEYS.includes(key) || key.startsWith('app_auth_')) {
            originalRemoveItem.call(this, key);
            return;
        }
        const active = getActiveUserData();
        if (active) {
            delete active.user.data[key];
            saveAuthData(active.auth);
        } else {
            originalRemoveItem.call(this, key);
        }
    };

    window.PRAISE_PHRASES = [
        "🎉 Đúng rồi! Bé giỏi quá!",
        "🌟 Xuất sắc! Bé thông minh lắm!",
        "❤️ Tuyệt vời ông mặt trời!",
        "👏 Hoan hô! Bé làm đúng rồi!",
        "✨ Bé thật là siêu nhân!",
        "🌈 Hay quá bạn nhỏ ơi!",
        "💎 Bé làm tốt lắm, cố lên!",
        "🏆 Bé là nhà vô địch!",
        "🍭 Khen bé giỏi, tiếp tục nhé!",
        "🚀 Siêu quá! Bé thật tuyệt vời!"
    ];

    window.getRandomPraise = function() {
        return window.PRAISE_PHRASES[Math.floor(Math.random() * window.PRAISE_PHRASES.length)];
    };

    window.calculateUserStats = function(user) {
        if (!user) return { stars: 0, lessons: 0, streak: 1 };
        const data = user.data || {};
        
        let p = { 
            learnedLetters:[], learnedWords:[], learnedNumbers:[], learnedRhymes:[], 
            learnedDigraphs: [], learnedThemes: [],
            enLetters: [], enVocab: [], enLessons: [], 
            stars: 0, stars_math: 0, stars_en: 0 
        };
        try { if (data['vn_learn_progress']) p = Object.assign(p, JSON.parse(data['vn_learn_progress'])); } catch(e) {}
        
        // Math Calculation
        let mathProg = {}; try { if (data['math_progress']) mathProg = JSON.parse(data['math_progress']); } catch(e) {}
        let mathCount = 0;
        for (let k in mathProg) {
            if (mathProg[k] && mathProg[k].total > 0 && (mathProg[k].score / mathProg[k].total >= 0.8)) mathCount++;
        }
        let mathStars = Number(p.stars_math) || 0;
        mathCount = Math.max(mathCount, (p.learnedNumbers || []).length);

        // Vietnamese Calculation
        let viAlpha = (p.learnedLetters || []).length;
        let viDigraphs = (p.learnedDigraphs || []).length;
        let viRhymes = (p.learnedRhymes || []).length;
        let viThemes = (p.learnedThemes || []).length || Math.ceil((p.learnedWords || []).length / 3);
        let viDiscrete = viAlpha + viDigraphs + viRhymes + viThemes;
        let viStars = Number(p.stars) || 0;
        let viCount = viDiscrete;
        
        // English Calculation
        let enDiscrete = (p.enLetters || []).length + (p.enVocab || []).length + (p.enLessons || []).length;
        let enStars = Number(p.stars_en) || 0;
        let enCount = enDiscrete;
        
        let totalStars = mathStars + viStars + enStars;
        let totalLessons = viCount + mathCount + enCount;

        return { stars: totalStars || 0, lessons: totalLessons || 0, streak: Number(data.streak) || 1 };
    };

    function updateStreak(user) {
        if (!user || !user.data) return;
        const today = new Date().toISOString().split('T')[0];
        const lastDate = user.data.lastActivityDate;
        
        if (!lastDate) {
            user.data.streak = 1;
            user.data.lastActivityDate = today;
            return true;
        }
        
        if (lastDate === today) return false;
        
        const last = new Date(lastDate);
        const curr = new Date(today);
        const diff = (curr - last) / (1000 * 60 * 60 * 24);
        
        if (diff === 1) {
            user.data.streak = (user.data.streak || 0) + 1;
        } else if (diff > 1) {
            user.data.streak = 1;
        }
        
        user.data.lastActivityDate = today;
        return true;
    }
    window.updateStreak = updateStreak;

    window.getAuthData = getAuthData;
    window.saveAuthData = saveAuthData;
    window.getActiveUserData = getActiveUserData;
})();

// ==========================================
// RENDER UI & MODALS
// ==========================================
function initAuthSystem() {
    try {
        const style = document.createElement('style');
        style.innerHTML = `
            .auth-container { font-family: 'Nunito', 'Baloo 2', sans-serif; }
            .auth-btn { padding: 8px 16px; border-radius: 20px; border: none; font-weight: 800; cursor: pointer; transition: all 0.3s; font-size: 1rem; margin-left: 8px; }
            .auth-btn-primary { background: #3B82F6; color: white; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3); }
            .auth-btn-primary:hover { background: #2563EB; transform: scale(1.05); }
            .auth-btn-outline { background: white; color: #3B82F6; border: 2px solid #3B82F6; }
            .auth-btn-outline:hover { background: #F3F4F6; }
            .auth-profile-badge { display: flex; align-items: center; gap: 8px; background: #FEF3C7; padding: 6px 16px; border-radius: 30px; border: 2px solid #FBCFE8; cursor: pointer; transition: all 0.3s; }
            .auth-profile-badge:hover { background: #FDE68A; transform: scale(1.02); }
            .auth-profile-avatar { font-size: 1.5rem; }
            .auth-profile-name { font-weight: 800; font-size: 1.1rem; color: #1F2937; line-height: 1.2; }
            .auth-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: none; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; }
            .auth-modal.show { display: flex; opacity: 1; }
            .auth-modal-content { background: white; padding: 32px; border-radius: 24px; width: 90%; max-width: 400px; text-align: center; position: relative; transform: scale(0.9); transition: 0.3s; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
            .auth-modal.show .auth-modal-content { transform: scale(1); }
            .auth-close { position: absolute; top: 16px; right: 16px; font-size: 1.5rem; cursor: pointer; color: #9CA3AF; border: none; background: transparent; }
            .auth-input { width: 100%; padding: 12px 16px; margin-bottom: 16px; border-radius: 12px; border: 2px solid #E5E7EB; font-family: 'Nunito', sans-serif; font-size: 1rem; box-sizing: border-box; }
            .auth-input:focus { outline: none; border-color: #3B82F6; }
            .auth-form-btn { width: 100%; padding: 14px; background: #3B82F6; color: white; border: none; border-radius: 12px; font-size: 1.1rem; font-weight: 800; cursor: pointer; transition: 0.3s; margin-bottom: 12px; }
            .auth-form-btn:hover { background: #2563EB; }
            .avatar-selector { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; justify-content: center; }
            .avatar-opt { font-size: 2rem; cursor: pointer; padding: 8px; border-radius: 50%; border: 2px solid transparent; transition: 0.2s; }
            .avatar-opt:hover { transform: scale(1.1); background: #F3F4F6; }
            .avatar-opt.selected { border-color: #3B82F6; background: #EFF6FF; }
            .profile-stats-row { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
            .profile-stat-item { background: #F9FAFB; padding: 16px; border-radius: 16px; display: flex; align-items: center; gap: 16px; text-align: left; }
            .profile-prog-bar { flex: 1; background: #E5E7EB; height: 12px; border-radius: 6px; overflow: hidden; margin-top: 8px; position: relative;}
            .profile-prog-fill { height: 100%; border-radius: 6px; transition: 0.5s; }
            .profile-prog-text { position: absolute; right: 0; top: -20px; font-size: 0.8rem; font-weight: 800; color: #4B5563; }
        `;
        document.head.appendChild(style);

        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const authDiv = document.createElement('div');
            authDiv.id = 'authContainer';
            authDiv.className = 'auth-container';
            authDiv.style.display = 'inline-flex';
            authDiv.style.alignItems = 'center';
            authDiv.style.marginRight = '16px';
            authDiv.style.borderRight = '2px solid #E5E7EB';
            authDiv.style.paddingRight = '16px';
            navLinks.insertBefore(authDiv, navLinks.firstChild);
        }

        const modalsContainer = document.createElement('div');
        modalsContainer.innerHTML = `
            <div class="auth-modal" id="loginModal">
                <div class="auth-modal-content">
                    <button class="auth-close" onclick="closeAuthModal('loginModal')">&times;</button>
                    <h2 id="loginTitle" style="font-size: 1.8rem; font-weight: 800; color: #1F2937; margin-bottom: 24px;">Đăng Nhập</h2>
                    <input type="text" id="authUsername" class="auth-input" placeholder="Tên đăng nhập">
                    <input type="password" id="authPassword" class="auth-input" placeholder="Mật khẩu">
                    <div id="registerFields" style="display: none;">
                        <input type="text" id="authChildName" class="auth-input" placeholder="Tên của bé là gì?">
                        <p style="font-weight: 700; color: #4B5563; margin-bottom: 8px; text-align: left;">Chọn ảnh đại diện:</p>
                        <div class="avatar-selector">
                            <span class="avatar-opt selected" onclick="selectAvatar(this)">👦</span>
                            <span class="avatar-opt" onclick="selectAvatar(this)">👧</span>
                            <span class="avatar-opt" onclick="selectAvatar(this)">🦁</span>
                            <span class="avatar-opt" onclick="selectAvatar(this)">🐰</span>
                            <span class="avatar-opt" onclick="selectAvatar(this)">🐼</span>
                        </div>
                    </div>
                    <p id="authError" style="color: #EF4444; font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; display: none;"></p>
                    <button class="auth-form-btn" id="authSubmitBtn" onclick="submitAuth()">Đăng Nhập</button>
                    <p style="margin-top: 8px; font-weight: 600; color: #6B7280; font-size: 0.95rem;">
                        <span id="authToggleText">Chưa có tài khoản?</span> 
                        <a href="#" onclick="toggleAuthMode()" style="color: #3B82F6; text-decoration: none;">Đăng ký ngay</a>
                    </p>
                </div>
            </div>
            <div class="auth-modal" id="profileDetailModal">
                <div class="auth-modal-content" style="max-width: 500px; padding: 40px;">
                    <button class="auth-close" onclick="closeAuthModal('profileDetailModal')">&times;</button>
                    <div id="profAvatar" style="font-size: 5rem; margin-bottom: 12px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));">👦</div>
                    <div id="profName" style="font-size: 2.2rem; font-weight: 900; color: #1F2937; margin-bottom: 24px; font-family: 'Baloo 2', sans-serif;">Bé Của Mẹ</div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 30px;">
                        <div style="background: #FFF7ED; border: 3px solid #FED7AA; border-radius: 24px; padding: 20px; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 4px;">⭐</div>
                            <div id="profStars" style="font-size: 1.8rem; font-weight: 900; color: #EA580C;">0</div>
                            <div style="font-size: 0.9rem; font-weight: 700; color: #9A3412;">Số sao</div>
                        </div>
                        <div style="background: #F0FDF4; border: 3px solid #BBF7D0; border-radius: 24px; padding: 20px; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 4px;">📚</div>
                            <div id="profLessons" style="font-size: 1.8rem; font-weight: 900; color: #16A34A;">0</div>
                            <div style="font-size: 0.9rem; font-weight: 700; color: #065F46;">Bài học</div>
                        </div>
                    </div>

                    <button class="auth-form-btn" style="background: #FEE2E2; color: #EF4444; border: 2px solid #FECACA; border-radius: 20px; font-weight: 800;" onclick="authManager.logout()">👋 Đăng Xuất</button>
                </div>
            </div>
        `;
        document.body.appendChild(modalsContainer);
        window.renderAuthUI();
        
        // Update streak if active
        const active = authManager.getActive();
        if (active && updateStreak(active.user)) {
            window.saveAuthData(active.auth);
            window.renderAuthUI();
        }
    } catch(err) {}
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initAuthSystem); } else { initAuthSystem(); }

let isRegisterMode = false;
window.renderAuthUI = function() {
    const active = authManager.getActive();
    let authContainer = document.getElementById('authContainer');
    if (!authContainer) return;
    if (active) {
        const stats = window.calculateUserStats(active.user);
        authContainer.innerHTML = `
            <div class="auth-profile-badge" onclick="openProfileDetailModal()">
                <span class="auth-profile-avatar">${active.user.avatar || '👦'}</span>
                <span class="auth-profile-name">${active.user.name || active.auth.activeUser}</span>
            </div>`;
        if (document.querySelector('.lb-hero-btn')) document.querySelector('.lb-hero-btn').style.display = 'none';
        if (document.getElementById('lbAchievementsSection')) document.getElementById('lbAchievementsSection').style.display = 'block';
    } else {
        authContainer.innerHTML = `<button class="auth-btn auth-btn-outline" onclick="openAuthModal('login')">Đăng nhập</button><button class="auth-btn auth-btn-primary" onclick="openAuthModal('register')">Đăng ký</button>`;
        if (document.querySelector('.lb-hero-btn')) document.querySelector('.lb-hero-btn').style.display = 'inline-block';
        if (document.getElementById('lbAchievementsSection')) document.getElementById('lbAchievementsSection').style.display = 'none';
    }
    if (window.renderLeaderboard) window.renderLeaderboard();
};

window.renderLeaderboard = function() {
    const lbContainer = document.getElementById('leaderboardContainer'); if (!lbContainer) return;
    const auth = authManager.getAllData();
    const active = authManager.getActive();
    let usersList = Object.keys(auth.users).map(username => ({
        ...auth.users[username],
        username: username
    }));
    
    usersList.sort((a,b) => {
        const statsA = window.calculateUserStats(a); const statsB = window.calculateUserStats(b);
        return statsB.stars - statsA.stars || statsB.lessons - statsA.lessons;
    });

    if (usersList.length === 0) { 
        lbContainer.innerHTML = `
            <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 16px;">🐣</div>
                <p style="color:#6B7280; font-weight:600; font-size: 1.1rem;">Chưa có bạn nhỏ nào tham gia.<br>Hãy là người đầu tiên nhé!</p>
            </div>`; 
        return; 
    }

    let html = '<div class="ranking-list">';
    usersList.forEach((u, idx) => {
        const stats = window.calculateUserStats(u);
        const isSelf = active && active.auth.activeUser === u.username;
        const rank = idx + 1;
        let rankIcon = rank;
        let rankClass = '';
        
        if (rank === 1) { rankIcon = '🥇'; rankClass = 'rank-1'; }
        else if (rank === 2) { rankIcon = '🥈'; rankClass = 'rank-2'; }
        else if (rank === 3) { rankIcon = '🥉'; rankClass = 'rank-3'; }

        html += `
            <div class="ranking-item ${rankClass} ${isSelf ? 'ranking-self' : ''}">
                <div class="ranking-pos">${rankIcon}</div>
                <div class="ranking-avatar">${u.avatar || '👦'}</div>
                <div class="ranking-info">
                    <div class="ranking-name">${u.name || u.username}</div>
                    <div class="ranking-stats">📚 ${stats.lessons} bài học</div>
                </div>
                <div class="ranking-stars">⭐ ${stats.stars}</div>
            </div>`;
    });
    html += '</div>';
    
    lbContainer.innerHTML = html;
};

window.openAuthModal = function(mode) {
    isRegisterMode = (mode === 'register');
    document.getElementById('loginTitle').textContent = isRegisterMode ? 'Đăng Ký Tài Khoản' : 'Đăng Nhập';
    document.getElementById('registerFields').style.display = isRegisterMode ? 'block' : 'none';
    document.getElementById('authSubmitBtn').textContent = isRegisterMode ? 'Đăng Ký 🚀' : 'Đăng Nhập 🎮';
    document.getElementById('loginModal').classList.add('show');
};

window.closeAuthModal = function(id) { document.getElementById(id).classList.remove('show'); };
window.toggleAuthMode = function() { window.openAuthModal(isRegisterMode ? 'login' : 'register'); };
window.selectAvatar = function(el) { document.querySelectorAll('.avatar-opt').forEach(opt => opt.classList.remove('selected')); el.classList.add('selected'); };

window.submitAuth = function() {
    const un = document.getElementById('authUsername').value; const pw = document.getElementById('authPassword').value;
    if (!un || !pw) return;
    let res;
    if (isRegisterMode) {
        const name = document.getElementById('authChildName').value || un;
        const avatar = document.querySelector('.avatar-opt.selected').textContent;
        res = authManager.register(un, pw, name, avatar);
    } else {
        res = authManager.login(un, pw);
    }
    if (res.success) { window.closeAuthModal('loginModal'); window.location.reload(); }
};

window.openProfileDetailModal = function() {
    const active = authManager.getActive(); if (!active) return;
    const stats = window.calculateUserStats(active.user);
    document.getElementById('profAvatar').textContent = active.user.avatar || '👦';
    document.getElementById('profName').textContent = active.user.name || active.auth.activeUser;
    document.getElementById('profStars').textContent = stats.stars;
    document.getElementById('profLessons').textContent = stats.lessons;
    document.getElementById('profileDetailModal').classList.add('show');
};

const authManager = {
    register: function(u, p, n, a) {
        const d = window.getAuthData(); if (d.users[u]) return { success:false, msg:"Đã có tên này!" };
        d.users[u] = { password:p, name:n, avatar:a, data:{} };
        window.saveAuthData(d); return this.login(u, p);
    },
    login: function(u, p) {
        const d = window.getAuthData();
        if (d.users[u] && d.users[u].password === p) { d.activeUser = u; window.saveAuthData(d); return { success:true }; }
        return { success:false, msg:"Sai tên hoặc mật khẩu!" };
    },
    logout: function() {
        const d = window.getAuthData(); d.activeUser = null; window.saveAuthData(d); window.location.reload();
    },
    getActive: window.getActiveUserData,
    getAllData: window.getAuthData,
    recordScore: function(c, t) {
        const active = this.getActive(); if (!active) return;
        const d = window.getAuthData(); const u = d.users[active.auth.activeUser];
        u.data.totalCorrect = (u.data.totalCorrect || 0) + c; u.data.totalQuestions = (u.data.totalQuestions || 0) + t;
        window.saveAuthData(d); window.renderAuthUI();
    },
    handleHeroClick: function() {
        if (!window.getAuthData().activeUser) window.openAuthModal('login');
    }
};
window.authManager = authManager;
