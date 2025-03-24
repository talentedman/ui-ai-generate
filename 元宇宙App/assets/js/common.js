// 更新状态栏时间
function updateStatusBarTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 格式化时间为两位数
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = `${hours}:${minutes}`;
    document.querySelector('.status-bar-time').textContent = timeString;
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 更新时间并设置定时器每分钟更新一次
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000);
    
    // 设置当前激活的导航项
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(item => {
        const itemPage = item.getAttribute('data-page');
        if (itemPage === currentPage) {
            item.classList.add('active');
        }
    });
});

// 页面跳转函数
function navigateTo(page) {
    window.location.href = page + '.html';
} 