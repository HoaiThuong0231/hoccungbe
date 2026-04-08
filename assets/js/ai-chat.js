// AI CHAT INTEGRATION FOR MASCOT (CÚ MÈO) - VERSION 2.0.1
console.log("Cú Mèo AI Chat: v2.0.1 (gemini-pro)");

window.addEventListener('load', () => {
    setTimeout(() => {
        const img = document.getElementById('mascotImg');
        const container = document.getElementById('mascot');
        
        if (img && container) {
            // Remove existing listeners from script.js by recreating the node
            const newImg = img.cloneNode(true);
            img.parentNode.replaceChild(newImg, img);

            newImg.addEventListener('click', () => {
                openAiChatModal();
            });

            // Initial speech bubble animation
            container.classList.add('show-speech');
            setTimeout(() => container.classList.remove('show-speech'), 4000);
        }
    }, 500); // Slight delay to ensure script.js has already bound its events
});

let owlChatHistory = [];
let isAiThinking = false;

function openAiChatModal() {
    let aiModal = document.getElementById('aiChatModal');
    if (!aiModal) {
        aiModal = document.createElement('div');
        aiModal.id = 'aiChatModal';
        aiModal.className = 'modal-overlay';
        aiModal.innerHTML = `
            <div class="modal-content" style="max-width: 500px; padding: 24px; text-align: left; display: flex; flex-direction: column; width: 90%; height: 80dvh; max-height: min(600px, 80dvh); border: 4px solid #FBCFE8; border-radius: 32px; box-sizing: border-box;">
                <button class="modal-close" onclick="closeAiModal()" style="right: 20px; top: 20px;">&times;</button>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                    <span style="font-size: 2.5rem; animation: bounce 3s infinite;">🦉</span>
                    <div>
                        <h2 style="font-family: 'Baloo 2', sans-serif; color: #DB2777; margin: 0; font-size: 1.8rem; font-weight: 800; line-height: 1.2;">Cú Mèo Thông Thái</h2>
                        <p style="margin: 0; color: #6B7280; font-weight: 600; font-size: 0.85rem;">Powered by ai.btoan.com</p>
                    </div>
                </div>
                
                <div id="aiChatHistory" style="flex: 1; overflow-y: auto; background: #FDF2F8; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 16px; margin-bottom: 16px; border: 2px solid #FCE7F3;">
                    <div style="display: flex; gap: 12px; align-items: flex-end;">
                        <div style="font-size: 1.8rem;">🦉</div>
                        <div style="background: white; padding: 12px 16px; border-radius: 20px; border-bottom-left-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 2px solid #FCE7F3; color: #4B5563; font-weight: 700; font-size: 1rem; max-width: 80%;">
                            Chào bạn nhỏ! Cú Mèo đây! Bạn muốn hỏi tớ điều gì nào? 🌈
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 8px; align-items: stretch;">
                    <input type="text" id="aiChatInput" placeholder="Ví dụ: Giảng cho tớ về Trái Đất..." style="flex: 1; min-width: 0; padding: 12px 16px; border: 3px solid #FBCFE8; border-radius: 20px; outline: none; font-family: inherit; font-size: 0.95rem; font-weight: 700;" onkeypress="if(event.key === 'Enter') sendAiMessage()">
                    <button onclick="sendAiMessage()" style="background: #EC4899; color: white; border: none; padding: 0 16px; border-radius: 20px; font-weight: 800; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 0 #BE123C; font-family: 'Baloo 2', sans-serif; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; min-width: 70px;">
                        GỬI
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(aiModal);
        
        aiModal.addEventListener('click', (e) => {
            if(e.target === aiModal) closeAiModal();
        });
    }
    
    if(typeof playClickSound === 'function') playClickSound();
    
    aiModal.style.display = 'flex';
    setTimeout(() => {
        aiModal.classList.add('show');
        document.getElementById('aiChatInput').focus();
    }, 10);
}

function closeAiModal() {
    const aiModal = document.getElementById('aiChatModal');
    if (aiModal) {
        aiModal.style.display = '';
        aiModal.classList.remove('show');
    }
}

async function sendAiMessage() {
    if (isAiThinking) return;
    
    const input = document.getElementById('aiChatInput');
    const text = input.value.trim();
    if (!text) return;

    if(typeof playClickSound === 'function') playClickSound();
    
    const historyEl = document.getElementById('aiChatHistory');
    
    historyEl.innerHTML += `
        <div style="display: flex; gap: 12px; align-items: flex-end; justify-content: flex-end;">
            <div style="background: #EC4899; padding: 12px 16px; border-radius: 20px; border-bottom-right-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); color: white; font-weight: 700; font-size: 1rem; max-width: 80%;">
                ${escapeAiHtml(text)}
            </div>
        </div>
    `;
    input.value = '';
    historyEl.scrollTop = historyEl.scrollHeight;

    isAiThinking = true;

    const typingId = 'typing-' + Date.now();
    historyEl.innerHTML += `
        <div id="${typingId}" style="display: flex; gap: 12px; align-items: flex-end;">
            <div style="font-size: 1.8rem; animation: bounce 1s infinite;">🦉</div>
            <div style="background: white; padding: 12px 16px; border-radius: 20px; border-bottom-left-radius: 4px; border: 2px solid #FCE7F3; color: #9CA3AF; font-weight: 700; font-size: 1rem; font-style: italic;">
                Cú Mèo đang nghĩ... 🤔
            </div>
        </div>
    `;
    historyEl.scrollTop = historyEl.scrollHeight;

    if (owlChatHistory.length === 0) {
        owlChatHistory.push({
            role: "user",
            parts: [{ text: "Hãy đóng vai Cú Mèo Thông Thái của trang web Học Cùng Bé. Bạn có thể trả lời mọi thắc mắc của người dùng về bất kỳ chủ đề nào (Toán, Lý, Hóa, Khoa học...). Hãy dùng LaTeX (kẹp trong dấu $ cho inline hoặc $$ cho block) để trình bày các công thức, ký hiệu khoa học cho đẹp mắt. Hãy trả lời thật đầy đủ, dễ hiểu, luôn xưng là 'Cú Mèo' và gọi người dùng là 'bạn nhỏ' hoặc 'bé'. Dùng emoji dễ thương. \n\nCâu hỏi: " + text }]
        });
    } else {
        owlChatHistory.push({
            role: "user",
            parts: [{ text }]
        });
    }

    try {
        const res = await fetch("https://ai.btoan.com/ai/api/chat.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "gemini-pro",
                _v: Date.now(),
                user_id: 1,
                user: "1",
                pass: "1",
                contents: owlChatHistory,
                generationConfig: {
                    maxOutputTokens: 1000,
                    temperature: 0.8
                }
            })
        });

        const raw = await res.text();
        console.log("AI RAW RESP:", raw);
        const data = JSON.parse(raw);
        if(!res.ok) throw new Error(data.error?.message || "Lỗi mạng");
        
        let reply = "Xin lỗi, Cú Mèo bị mệt một chút xíu rùi! 😢";
        // Gemini standard
        if(data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            reply = data.candidates[0].content.parts.map(p => p.text).join("");
        } 
        // Proxy alternates
        else if (data.reply) reply = data.reply;
        else if (data.text) reply = data.text;
        else if (data.content) reply = data.content;
        else if (data.choices?.[0]?.message?.content) reply = data.choices[0].message.content;
        else if (typeof data === 'string' && data.length > 5) reply = data;

        const tEl = document.getElementById(typingId);
        if(tEl) tEl.remove();
        
        owlChatHistory.push({
            role: "model",
            parts: [{ text: reply }]
        });
        
        historyEl.innerHTML += `
            <div style="display: flex; gap: 12px; align-items: flex-end;">
                <div style="font-size: 1.8rem;">🦉</div>
                <div style="background: white; padding: 12px 16px; border-radius: 20px; border-bottom-left-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 2px solid #FCE7F3; color: #374151; font-weight: 700; font-size: 1rem; max-width: 80%; line-height: 1.5;">
                    ${escapeAiHtml(reply).replace(/\n/g, "<br>")}
                </div>
            </div>
        `;
        
        // Render math
        if (window.renderMathInElement) {
            try {
                renderMathInElement(historyEl, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ],
                    throwOnError: false
                });
            } catch (err) {
                console.error("KaTeX Error:", err);
            }
        }
    } catch (err) {
        console.error("AI Error: ", err);
        const tEl = document.getElementById(typingId);
        if(tEl) tEl.remove();
        historyEl.innerHTML += `
            <div style="display: flex; gap: 12px; align-items: flex-end;">
                <div style="font-size: 1.8rem;">🦉</div>
                <div style="background: #FEE2E2; padding: 12px 16px; border-radius: 20px; border-bottom-left-radius: 4px; border: 2px solid #FECACA; color: #DC2626; font-weight: 700; font-size: 1rem; max-width: 80%;">
                    Xin lỗi nha, Cú Mèo đang nghẽn mạng xíu 💤
                </div>
            </div>
        `;
        owlChatHistory.pop();
    }

    isAiThinking = false;
    historyEl.scrollTop = historyEl.scrollHeight;
}

function escapeAiHtml(str) {
    return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
