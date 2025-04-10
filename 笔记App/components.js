// 共享组件JS文件 - 用于所有页面复用的iOS风格UI组件

// 当DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加iOS状态栏
    addStatusBar();
    
    // 添加底部导航栏
    addTabBar();
    
    // 控制底部导航栏激活状态
    setActiveTab();
});

// 添加iOS风格状态栏
function addStatusBar() {
    const statusBar = document.createElement('div');
    statusBar.className = 'status-bar bg-black text-white flex justify-between items-center px-5 py-1 text-xs';
    statusBar.innerHTML = `
        <div class="time font-medium">9:41</div>
        <div class="notch w-1/4 h-5 bg-black rounded-b-xl"></div>
        <div class="icons flex space-x-1">
            <div class="signal"><i class="fas fa-signal"></i></div>
            <div class="wifi"><i class="fas fa-wifi"></i></div>
            <div class="battery"><i class="fas fa-battery-full"></i></div>
        </div>
    `;
    
    // 获取app-container，如果不存在则创建一个
    let appContainer = document.querySelector('.app-container');
    if (!appContainer) {
        const body = document.querySelector('body');
        appContainer = document.createElement('div');
        appContainer.className = 'app-container flex flex-col h-full';
        
        // 移动body的内容到app-container
        while (body.firstChild) {
            if (body.firstChild.className !== 'app-container') {
                appContainer.appendChild(body.firstChild);
            } else {
                break;
            }
        }
        
        body.prepend(appContainer);
    }
    
    // 添加状态栏到容器顶部
    appContainer.prepend(statusBar);
}

// 添加iOS风格底部导航栏
function addTabBar() {
    const tabBar = document.createElement('div');
    tabBar.className = 'tab-bar fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-1';
    tabBar.innerHTML = `
        <a href="home.html" class="tab-item flex flex-col items-center" data-page="home">
            <i class="fas fa-home text-lg"></i>
            <span class="text-xs mt-1">首页</span>
        </a>
        <a href="categories.html" class="tab-item flex flex-col items-center" data-page="categories">
            <i class="fas fa-folder text-lg"></i>
            <span class="text-xs mt-1">分类</span>
        </a>
        <a href="search.html" class="tab-item flex flex-col items-center" data-page="search">
            <i class="fas fa-search text-lg"></i>
            <span class="text-xs mt-1">搜索</span>
        </a>
        <a href="profile.html" class="tab-item flex flex-col items-center" data-page="profile">
            <i class="fas fa-user text-lg"></i>
            <span class="text-xs mt-1">我的</span>
        </a>
    `;
    
    // 获取app-container
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
        // 添加底部tabBar并留出空间
        appContainer.appendChild(tabBar);
        
        // 添加底部padding以防止内容被tabBar遮挡
        const content = document.querySelector('.content');
        if (content) {
            content.style.paddingBottom = '60px';
        }
    }
}

// 设置当前页面对应的底部导航栏项为激活状态
function setActiveTab() {
    // 从URL中获取当前页面名称
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // 找到对应的导航项并设置为激活状态
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        if (item.getAttribute('data-page') === currentPage) {
            item.classList.add('text-blue-500');
            item.classList.add('font-medium');
        } else {
            item.classList.add('text-gray-500');
        }
    });
}

// 创建iOS风格的导航栏
function createNavBar(title, hasBackButton = false, rightBtnIcon = null, rightBtnAction = null) {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar bg-white border-b border-gray-200 flex items-center justify-between py-3 px-4';
    
    let leftSection = '';
    if (hasBackButton) {
        leftSection = `<button class="back-btn text-blue-500"><i class="fas fa-chevron-left"></i> 返回</button>`;
    } else {
        leftSection = `<div class="w-10"></div>`;
    }
    
    let rightSection = '';
    if (rightBtnIcon) {
        rightSection = `<button class="right-btn text-blue-500"><i class="fas ${rightBtnIcon}"></i></button>`;
    } else {
        rightSection = `<div class="w-10"></div>`;
    }
    
    navBar.innerHTML = `
        ${leftSection}
        <h1 class="text-lg font-semibold">${title}</h1>
        ${rightSection}
    `;
    
    // 如果有返回按钮，添加事件监听
    const backBtn = navBar.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.history.back();
        });
    }
    
    // 如果有右侧按钮，添加事件监听
    const rightBtn = navBar.querySelector('.right-btn');
    if (rightBtn && rightBtnAction) {
        rightBtn.addEventListener('click', rightBtnAction);
    }
    
    return navBar;
}

// 创建浮动操作按钮
function createFAB(icon, action) {
    const fab = document.createElement('button');
    fab.className = 'fixed right-6 bottom-20 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center';
    fab.innerHTML = `<i class="fas ${icon} text-xl"></i>`;
    
    fab.addEventListener('click', action);
    
    return fab;
} 