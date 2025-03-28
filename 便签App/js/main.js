// 管理底部导航栏和页面切换
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-item');
    const appFrame = document.querySelector('.app-frame');

    // 默认加载首页
    appFrame.src = 'pages/home.html';

    // 点击底部导航切换页面
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.target;
            
            // 更新激活状态
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 更新iframe内容
            appFrame.src = `pages/${target}.html`;
        });
    });
});

// 在父窗口中设置标题
function setPageTitle(title) {
    window.parent.document.title = title;
}

// 打开模态框
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

// 关闭模态框
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// 在编辑页面中使用的保存便签函数
function saveNote() {
    // 在实际应用中，这里会保存到本地存储或发送到服务器
    // 这里只做演示用
    const noteTitle = document.getElementById('note-title').value;
    const noteContent = document.getElementById('note-content').value;
    
    console.log('保存便签:', { title: noteTitle, content: noteContent });
    
    // 保存后返回首页
    window.parent.document.querySelector('.app-frame').src = 'pages/home.html';
}

// 模拟删除便签
function deleteNote(noteId) {
    console.log('删除便签:', noteId);
    const noteElement = document.getElementById(`note-${noteId}`);
    if (noteElement) {
        noteElement.classList.add('animate-fade-out');
        setTimeout(() => {
            noteElement.remove();
        }, 300);
    }
}

// 更新时间显示
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const timeElements = document.querySelectorAll('.current-time');
    timeElements.forEach(el => {
        el.textContent = `${hours}:${minutes}`;
    });
}

// 每分钟更新一次时间
setInterval(updateTime, 60000);

// 页面加载时立即更新时间
document.addEventListener('DOMContentLoaded', updateTime); 