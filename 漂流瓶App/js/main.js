// 漂流瓶App主JavaScript文件

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化底部导航栏
    initTabBar();
    
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000);
    
    // 初始化海洋动画
    initOceanAnimation();
});

// 底部导航栏功能
function initTabBar() {
    const tabItems = document.querySelectorAll('.tab-item');
    const appFrame = document.querySelector('.app-frame');
    
    if (!tabItems.length || !appFrame) return;
    
    // 默认加载首页
    if (appFrame.getAttribute('src') === '') {
        appFrame.src = 'pages/home.html';
    }
    
    // 为每个导航项添加点击事件
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.target;
            
            // 更新激活状态
            tabItems.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 更新iframe内容
            appFrame.src = `pages/${target}.html`;
        });
    });
}

// 更新状态栏时间
function updateStatusBarTime() {
    const timeElements = document.querySelectorAll('.status-bar-time');
    if (!timeElements.length) return;
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    timeElements.forEach(el => {
        el.textContent = timeString;
    });
}

// 初始化海洋动画
function initOceanAnimation() {
    const oceanElements = document.querySelectorAll('.ocean-bg');
    if (!oceanElements.length) return;
    
    oceanElements.forEach(ocean => {
        // 检查是否已经有波浪元素
        if (ocean.querySelector('.wave')) return;
        
        // 创建波浪元素
        for (let i = 0; i < 3; i++) {
            const wave = document.createElement('div');
            wave.classList.add('wave');
            ocean.appendChild(wave);
        }
    });
}

// 显示和隐藏模态框
function toggleModal(modalId, show = true) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
}

// 显示和隐藏底部操作表
function toggleActionSheet(sheetId, show = true) {
    const sheet = document.getElementById(sheetId);
    if (!sheet) return;
    
    if (show) {
        sheet.classList.add('active');
    } else {
        sheet.classList.remove('active');
    }
}

// 扔出漂流瓶动画
function throwBottleAnimation(callback) {
    const bottle = document.querySelector('.bottle-to-throw');
    if (!bottle) return;
    
    // 添加抛出动画类
    bottle.classList.add('bottle-throw-animation');
    
    // 动画结束后执行回调
    setTimeout(() => {
        if (typeof callback === 'function') {
            callback();
        }
    }, 1500); // 动画持续时间
}

// 捞起漂流瓶动画
function pickBottleAnimation(callback) {
    const bottle = document.querySelector('.bottle-to-pick');
    if (!bottle) return;
    
    // 添加捞起动画类
    bottle.classList.add('bottle-pick-animation');
    
    // 动画结束后执行回调
    setTimeout(() => {
        if (typeof callback === 'function') {
            callback();
        }
    }, 1500); // 动画持续时间
}

// 创建漂流瓶卡片元素
function createBottleElement(bottleData) {
    const { id, type, title, content, time, sender } = bottleData;
    
    // 根据类型选择标签样式
    const typeClasses = {
        'secret': 'secret',
        'wish': 'wish',
        'question': 'question',
        'story': 'story'
    };
    
    const typeClass = typeClasses[type] || 'story';
    const typeLabel = {
        'secret': '秘密',
        'wish': '心愿',
        'question': '提问',
        'story': '故事'
    }[type] || '故事';
    
    // 随机选择瓶子样式
    const filterClass = `bottle-filter-${Math.floor(Math.random() * 3) + 1}`;
    
    // 创建漂流瓶元素
    const bottleEl = document.createElement('div');
    bottleEl.className = `bottle ${filterClass} slide-up`;
    bottleEl.dataset.id = id;
    
    // 设置内容
    bottleEl.innerHTML = `
        <div class="flex items-center justify-between mb-2">
            <span class="bottle-tag ${typeClass}">${typeLabel}</span>
            <span class="text-xs text-gray-500">${time}</span>
        </div>
        <h3 class="font-medium text-gray-900 mb-1">${title}</h3>
        <p class="text-sm text-gray-700 mb-3">${content.length > 60 ? content.substring(0, 60) + '...' : content}</p>
        <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">来自: ${sender || '匿名'}</span>
            <button class="text-primary text-sm">查看</button>
        </div>
    `;
    
    // 添加点击事件
    bottleEl.addEventListener('click', () => {
        navigateToBottleDetail(id);
    });
    
    return bottleEl;
}

// 跳转到漂流瓶详情页
function navigateToBottleDetail(bottleId) {
    const appFrame = window.parent ? window.parent.document.querySelector('.app-frame') : document.querySelector('.app-frame');
    if (!appFrame) return;
    
    appFrame.src = `pages/bottle-detail.html?id=${bottleId}`;
}

// 获取URL参数
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 模拟数据库 - 获取漂流瓶
function getBottleById(id) {
    // 这里应该通过API从服务器获取数据
    // 为了演示，我们使用模拟数据
    const bottles = [
        {
            id: '1',
            type: 'secret',
            title: '我从未告诉任何人的秘密',
            content: '有时候我会假装听不懂别人的玩笑，只是因为我觉得那些笑话并不好笑，但我不想让他们尴尬。',
            time: '2小时前',
            sender: '海之子'
        },
        {
            id: '2',
            type: 'wish',
            title: '2024年的心愿',
            content: '希望能去一次北欧，看极光，感受世界最北端的宁静。存够旅费是今年的小目标！',
            time: '昨天',
            sender: '旅行者'
        },
        {
            id: '3',
            type: 'question',
            title: '你认为什么是真正的快乐？',
            content: '最近一直在思考什么是真正的快乐。是物质满足，还是精神富足？是成就感，还是平静的生活？很想知道大家怎么想。',
            time: '3天前',
            sender: '哲学猫'
        },
        {
            id: '4',
            type: 'story',
            title: '那个雨天的小事',
            content: '那天大雨，我忘带伞。公交站旁一位老爷爷主动把伞借给了我，只说："下次帮助别人就好。"我至今记得他的笑容。',
            time: '上周',
            sender: '雨中漫步'
        }
    ];
    
    return bottles.find(bottle => bottle.id === id);
}

// 设置页面标题（在iframe中使用）
function setPageTitle(title) {
    document.title = title;
    
    // 如果在iframe中，更新父窗口标题
    if (window.parent && window.parent !== window) {
        window.parent.document.title = title;
    }
}

// 消息发送动画
function animateMessageSend(messageElement) {
    if (!messageElement) return;
    
    messageElement.classList.add('fade-in');
    
    // 滚动到最新消息
    const chatContainer = messageElement.parentElement;
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

// 模拟数据 - 获取消息列表
function getConversations() {
    return [
        {
            id: 'conv1',
            name: '海之心',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            lastMessage: '谢谢你的回复，很高兴认识你！',
            time: '14:30',
            unread: 2
        },
        {
            id: 'conv2',
            name: '星辰',
            avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            lastMessage: '我也喜欢那本书，特别是第三章的情节...',
            time: '昨天',
            unread: 0
        },
        {
            id: 'conv3',
            name: '旅行者',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            lastMessage: '你去过那个地方吗？风景真的很美',
            time: '周二',
            unread: 0
        }
    ];
}

// 页面跳转 - 公共方法
function navigateTo(page, params = {}) {
    let url = `pages/${page}.html`;
    
    // 添加URL参数
    if (Object.keys(params).length > 0) {
        const searchParams = new URLSearchParams();
        for (const key in params) {
            searchParams.append(key, params[key]);
        }
        url += `?${searchParams.toString()}`;
    }
    
    // 在iframe内部还是在主窗口中
    const appFrame = window.parent ? window.parent.document.querySelector('.app-frame') : document.querySelector('.app-frame');
    
    if (appFrame) {
        appFrame.src = url;
    } else {
        window.location.href = url;
    }
} 