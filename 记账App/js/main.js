/**
 * 记账App原型 - 主要JavaScript逻辑
 */

// 渲染iOS状态栏
function renderStatusBar() {
    const statusBarElements = document.querySelectorAll('.ios-status-bar-container');
    if (statusBarElements.length === 0) return;
    
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    statusBarElements.forEach(container => {
        container.innerHTML = `
            <div class="ios-status-bar">
                <div class="text-left font-semibold">${currentTime}</div>
                <div class="flex items-center">
                    <i class="fas fa-signal mr-1"></i>
                    <i class="fas fa-wifi mr-1"></i>
                    <i class="fas fa-battery-full"></i>
                </div>
            </div>
        `;
    });
}

// 渲染底部导航栏
function renderTabBar(activeTab = 'home') {
    const tabBarElements = document.querySelectorAll('.bottom-tab-bar-container');
    if (tabBarElements.length === 0) return;
    
    const tabs = [
        { id: 'home', icon: 'fa-house', label: '首页' },
        { id: 'stats', icon: 'fa-chart-pie', label: '统计' },
        { id: 'add', icon: 'fa-plus-circle', label: '记账' },
        { id: 'bills', icon: 'fa-list-ul', label: '账单' },
        { id: 'profile', icon: 'fa-user', label: '我的' }
    ];
    
    tabBarElements.forEach(container => {
        let tabBarHTML = '<div class="bottom-tab-bar">';
        
        tabs.forEach(tab => {
            const isActive = tab.id === activeTab;
            tabBarHTML += `
                <div class="tab-item ${isActive ? 'active' : ''}">
                    <i class="fas ${tab.icon} tab-icon"></i>
                    <div class="tab-label">${tab.label}</div>
                </div>
            `;
        });
        
        tabBarHTML += '</div>';
        container.innerHTML = tabBarHTML;
    });
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    renderStatusBar();
    
    // 根据当前页面路径确定活跃标签
    const currentPath = window.location.pathname;
    let activeTab = 'home'; // 默认激活首页标签
    
    if (currentPath.includes('stats.html')) {
        activeTab = 'stats';
    } else if (currentPath.includes('add.html')) {
        activeTab = 'add';
    } else if (currentPath.includes('bills.html')) {
        activeTab = 'bills';
    } else if (currentPath.includes('profile.html')) {
        activeTab = 'profile';
    }
    
    renderTabBar(activeTab);
    
    // 更新时间显示
    setInterval(renderStatusBar, 60000); // 每分钟更新一次
}); 