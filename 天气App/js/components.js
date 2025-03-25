/**
 * 生成iOS样式状态栏
 * @returns {string} 状态栏HTML
 */
function generateStatusBar() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  
  return `
    <div class="status-bar">
      <div class="status-bar-time">${hours}:${minutes}</div>
      <div class="status-bar-icons">
        <i class="fas fa-signal"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-battery-three-quarters"></i>
      </div>
    </div>
  `;
}

/**
 * 生成底部导航栏
 * @param {string} active - 当前激活的页面ID
 * @returns {string} 底部导航栏HTML
 */
function generateTabBar(active) {
  return `
    <div class="tab-bar">
      <a href="home.html" class="tab-item ${active === 'home' ? 'active' : ''}">
        <div class="tab-icon"><i class="fas fa-home"></i></div>
        <div class="tab-label">首页</div>
      </a>
      <a href="cities.html" class="tab-item ${active === 'cities' ? 'active' : ''}">
        <div class="tab-icon"><i class="fas fa-list"></i></div>
        <div class="tab-label">城市</div>
      </a>
      <a href="search.html" class="tab-item ${active === 'search' ? 'active' : ''}">
        <div class="tab-icon"><i class="fas fa-search"></i></div>
        <div class="tab-label">搜索</div>
      </a>
      <a href="settings.html" class="tab-item ${active === 'settings' ? 'active' : ''}">
        <div class="tab-icon"><i class="fas fa-cog"></i></div>
        <div class="tab-label">设置</div>
      </a>
    </div>
  `;
}

/**
 * 页面加载时初始化组件
 */
document.addEventListener('DOMContentLoaded', function() {
  // 插入状态栏
  const statusBarContainer = document.querySelector('#status-bar-container');
  if (statusBarContainer) {
    statusBarContainer.innerHTML = generateStatusBar();
  }
  
  // 插入标签栏
  const tabBarContainer = document.querySelector('#tab-bar-container');
  if (tabBarContainer) {
    const currentPage = document.body.dataset.page;
    tabBarContainer.innerHTML = generateTabBar(currentPage);
  }
  
  // 更新状态栏时间
  setInterval(function() {
    const statusBarTimeEl = document.querySelector('.status-bar-time');
    if (statusBarTimeEl) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      statusBarTimeEl.textContent = `${hours}:${minutes}`;
    }
  }, 60000);
}); 