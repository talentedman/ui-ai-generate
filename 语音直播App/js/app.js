/**
 * 声动直播App - 通用JavaScript功能
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次
    
    // 初始化底部导航栏激活状态
    initTabBar();
    
    // 初始化所有返回按钮
    initBackButtons();
    
    // 初始化所有点赞动画
    initLikeAnimations();
});

/**
 * 更新状态栏时间
 */
function updateStatusBarTime() {
    const timeElements = document.querySelectorAll('.status-bar-time');
    if (timeElements.length > 0) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        
        timeElements.forEach(el => {
            el.textContent = timeString;
        });
    }
}

/**
 * 初始化底部导航栏激活状态
 */
function initTabBar() {
    const tabBar = document.querySelector('.tab-bar');
    if (tabBar) {
        const currentPage = getCurrentPage();
        const tabItems = tabBar.querySelectorAll('.tab-item');
        
        tabItems.forEach(item => {
            const pageName = item.getAttribute('data-page');
            if (pageName && currentPage.includes(pageName)) {
                item.classList.add('active');
            }
            
            // 添加点击事件
            item.addEventListener('click', function() {
                const targetPage = this.getAttribute('data-page');
                if (targetPage) {
                    navigateTo(targetPage);
                }
            });
        });
    }
}

/**
 * 获取当前页面名称
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const pageName = path.substring(path.lastIndexOf('/') + 1);
    return pageName;
}

/**
 * 页面导航
 */
function navigateTo(page) {
    if (!page.endsWith('.html')) {
        page = page + '.html';
    }
    
    // 如果在iframe中，需要特殊处理
    if (window.parent !== window) {
        window.parent.location.href = page;
    } else {
        window.location.href = page;
    }
}

/**
 * 初始化返回按钮
 */
function initBackButtons() {
    document.querySelectorAll('.nav-back').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    });
}

/**
 * 显示消息提示
 */
function showToast(message, duration = 2000) {
    // 检查是否已存在toast
    let toast = document.querySelector('.toast-message');
    
    if (!toast) {
        // 创建新的toast元素
        toast = document.createElement('div');
        toast.className = 'toast-message';
        document.body.appendChild(toast);
    }
    
    // 设置消息内容并显示
    toast.textContent = message;
    toast.classList.add('show');
    
    // 设置定时器自动隐藏
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

/**
 * 初始化点赞动画
 */
function initLikeAnimations() {
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 添加点赞效果
            const heartsContainer = document.querySelector('.hearts-container');
            if (heartsContainer) {
                createHeart(heartsContainer);
            }
            
            // 更新点赞状态
            this.classList.toggle('liked');
            
            // 更新计数
            const countElement = this.querySelector('.like-count');
            if (countElement) {
                let count = parseInt(countElement.textContent);
                if (this.classList.contains('liked')) {
                    count++;
                } else {
                    count = Math.max(0, count - 1);
                }
                countElement.textContent = count;
            }
        });
    });
}

/**
 * 创建心形动画
 */
function createHeart(container) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    
    // 随机位置和动画效果
    const startX = 10 + Math.random() * 30;
    const animDuration = 1 + Math.random() * 1.5;
    
    heart.style.left = `${startX}px`;
    heart.style.animationDuration = `${animDuration}s`;
    
    container.appendChild(heart);
    
    // 动画结束后移除
    setTimeout(() => {
        heart.remove();
    }, animDuration * 1000);
}

/**
 * 加载更多内容
 */
function loadMoreContent(containerSelector, itemTemplate, page = 1) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    // 显示加载状态
    showToast('加载中...');
    
    // 模拟网络请求延迟
    setTimeout(() => {
        // 这里通常会有API请求
        // 为了演示，直接生成模拟数据
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.innerHTML = itemTemplate;
            container.appendChild(element.firstChild);
        }
        
        showToast('加载完成');
    }, 800);
    
    return page + 1;
}

/**
 * 模拟登录功能
 */
function simulateLogin(phone, password) {
    if (!phone || !password) {
        showToast('请输入手机号和密码');
        return false;
    }
    
    // 模拟登录成功
    showToast('登录成功');
    
    // 延迟跳转到首页
    setTimeout(() => {
        navigateTo('home.html');
    }, 1000);
    
    return true;
}

/**
 * 礼物发送功能
 */
function sendGift(giftId, count = 1) {
    // 获取礼物信息
    const giftInfo = {
        1: { name: '爱心', price: 1, icon: 'heart' },
        2: { name: '鲜花', price: 5, icon: 'flower' },
        3: { name: '火箭', price: 50, icon: 'rocket' },
        4: { name: '皇冠', price: 100, icon: 'crown' }
    }[giftId];
    
    if (!giftInfo) {
        showToast('礼物不存在');
        return false;
    }
    
    // 模拟发送礼物
    showToast(`成功送出 ${giftInfo.name} x${count}`);
    
    // 显示礼物动画
    showGiftAnimation(giftInfo, count);
    
    return true;
}

/**
 * 礼物动画
 */
function showGiftAnimation(giftInfo, count) {
    const animationArea = document.querySelector('.gift-animation-area');
    if (!animationArea) return;
    
    // 创建礼物动画元素
    const giftElement = document.createElement('div');
    giftElement.className = 'gift-animation';
    giftElement.innerHTML = `
        <div class="gift-sender">用户A 送出</div>
        <div class="gift-icon gift-${giftInfo.icon}"></div>
        <div class="gift-name">${giftInfo.name} x${count}</div>
    `;
    
    // 添加到动画区域
    animationArea.appendChild(giftElement);
    
    // 动画结束后移除
    setTimeout(() => {
        giftElement.classList.add('fade-out');
        setTimeout(() => {
            giftElement.remove();
        }, 500);
    }, 3000);
} 