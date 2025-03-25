/**
 * 天气App页面生成器
 * 用于生成各个页面的HTML
 */

// 引入页面模板
document.write('<script src="../js/template.js"></script>');

/**
 * 生成首页HTML
 * @returns {string} 首页HTML
 */
function generateHomePage() {
  const content = `
    <div class="flex flex-col items-center mt-4 mb-8">
      <h2 class="text-2xl font-bold text-white">北京市</h2>
      <p class="text-white opacity-80">星期三, 3月25日</p>
    </div>
    
    <div class="flex flex-col items-center mb-10">
      <i class="fas fa-sun weather-icon sunny text-5xl text-yellow-400 mb-2"></i>
      <h1 class="text-6xl font-light text-white mb-2">26°</h1>
      <p class="text-white text-lg">晴朗</p>
      <p class="text-white opacity-70">体感温度 28°</p>
    </div>
    
    <div class="weather-card p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-medium">今日</h3>
        <span class="text-sm opacity-70">3月25日</span>
      </div>
      
      <div class="flex justify-between mb-4">
        <div class="flex-1 text-center">
          <p class="text-sm opacity-70">最高</p>
          <p class="text-xl font-medium">28°</p>
        </div>
        <div class="flex-1 text-center">
          <p class="text-sm opacity-70">最低</p>
          <p class="text-xl font-medium">16°</p>
        </div>
        <div class="flex-1 text-center">
          <p class="text-sm opacity-70">湿度</p>
          <p class="text-xl font-medium">45%</p>
        </div>
        <div class="flex-1 text-center">
          <p class="text-sm opacity-70">风速</p>
          <p class="text-xl font-medium">3km/h</p>
        </div>
      </div>
      
      <div class="border-t border-gray-200 pt-4">
        <p class="text-sm mb-2">今日白天晴朗无云，傍晚可能转多云。</p>
        <a href="details.html" class="text-blue-500 text-sm">查看详情 <i class="fas fa-chevron-right text-xs ml-1"></i></a>
      </div>
    </div>
    
    <div class="weather-card p-4">
      <h3 class="font-medium mb-4">未来七天</h3>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="w-16">今天</span>
          <i class="fas fa-sun weather-icon sunny"></i>
          <div class="flex-1 px-4">
            <div class="h-1.5 bg-gray-200 rounded-full">
              <div class="h-1.5 bg-blue-500 rounded-full" style="width: 80%"></div>
            </div>
          </div>
          <div class="flex gap-2 w-20 text-right">
            <span class="font-medium">28°</span>
            <span class="opacity-60">16°</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="w-16">周四</span>
          <i class="fas fa-cloud weather-icon cloudy"></i>
          <div class="flex-1 px-4">
            <div class="h-1.5 bg-gray-200 rounded-full">
              <div class="h-1.5 bg-blue-500 rounded-full" style="width: 75%"></div>
            </div>
          </div>
          <div class="flex gap-2 w-20 text-right">
            <span class="font-medium">26°</span>
            <span class="opacity-60">15°</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="w-16">周五</span>
          <i class="fas fa-cloud-rain weather-icon rainy"></i>
          <div class="flex-1 px-4">
            <div class="h-1.5 bg-gray-200 rounded-full">
              <div class="h-1.5 bg-blue-500 rounded-full" style="width: 65%"></div>
            </div>
          </div>
          <div class="flex gap-2 w-20 text-right">
            <span class="font-medium">22°</span>
            <span class="opacity-60">14°</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="w-16">周六</span>
          <i class="fas fa-cloud-sun weather-icon"></i>
          <div class="flex-1 px-4">
            <div class="h-1.5 bg-gray-200 rounded-full">
              <div class="h-1.5 bg-blue-500 rounded-full" style="width: 70%"></div>
            </div>
          </div>
          <div class="flex gap-2 w-20 text-right">
            <span class="font-medium">24°</span>
            <span class="opacity-60">15°</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="w-16">周日</span>
          <i class="fas fa-sun weather-icon sunny"></i>
          <div class="flex-1 px-4">
            <div class="h-1.5 bg-gray-200 rounded-full">
              <div class="h-1.5 bg-blue-500 rounded-full" style="width: 85%"></div>
            </div>
          </div>
          <div class="flex gap-2 w-20 text-right">
            <span class="font-medium">27°</span>
            <span class="opacity-60">16°</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return generatePageTemplate({
    title: '天气',
    pageId: 'home',
    headerStyle: 'transparent',
    content: content,
    showBackButton: false,
    rightButton: '<button class="text-white opacity-80"><i class="fas fa-ellipsis-v"></i></button>',
    background: '../img/sunny-bg.jpg'
  });
}

/**
 * 生成天气详情页HTML
 * @returns {string} 详情页HTML
 */
function generateDetailsPage() {
  const content = `
    <div class="flex flex-col items-center mt-2 mb-6">
      <h2 class="text-2xl font-bold text-white">北京市</h2>
      <p class="text-white opacity-80">星期三, 3月25日</p>
    </div>
    
    <div class="flex flex-col items-center mb-6">
      <i class="fas fa-sun weather-icon sunny text-5xl text-yellow-400 mb-2"></i>
      <h1 class="text-6xl font-light text-white mb-2">26°</h1>
      <p class="text-white text-lg">晴朗</p>
      <p class="text-white opacity-70">最高 28° | 最低 16°</p>
    </div>
    
    <div class="weather-card p-4 mb-4">
      <h3 class="font-medium mb-4">每小时预报</h3>
      
      <div class="flex space-x-4 overflow-x-auto pb-2">
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">现在</span>
          <i class="fas fa-sun my-2 text-yellow-400"></i>
          <span class="font-medium">26°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">12时</span>
          <i class="fas fa-sun my-2 text-yellow-400"></i>
          <span class="font-medium">27°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">13时</span>
          <i class="fas fa-sun my-2 text-yellow-400"></i>
          <span class="font-medium">28°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">14时</span>
          <i class="fas fa-sun my-2 text-yellow-400"></i>
          <span class="font-medium">28°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">15时</span>
          <i class="fas fa-cloud-sun my-2 text-gray-600"></i>
          <span class="font-medium">27°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">16时</span>
          <i class="fas fa-cloud-sun my-2 text-gray-600"></i>
          <span class="font-medium">26°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">17时</span>
          <i class="fas fa-cloud my-2 text-gray-500"></i>
          <span class="font-medium">25°</span>
        </div>
        
        <div class="flex flex-col items-center min-w-[60px]">
          <span class="text-sm">18时</span>
          <i class="fas fa-cloud my-2 text-gray-500"></i>
          <span class="font-medium">23°</span>
        </div>
      </div>
    </div>
    
    <div class="weather-card p-4 mb-4">
      <h3 class="font-medium mb-4">气象详情</h3>
      
      <div class="grid grid-cols-2 gap-4">
        <div class="p-3 bg-gray-50 rounded-xl">
          <p class="text-sm opacity-70 mb-1">体感温度</p>
          <p class="text-xl font-medium">28°</p>
        </div>
        
        <div class="p-3 bg-gray-50 rounded-xl">
          <p class="text-sm opacity-70 mb-1">湿度</p>
          <p class="text-xl font-medium">45%</p>
        </div>
        
        <div class="p-3 bg-gray-50 rounded-xl">
          <p class="text-sm opacity-70 mb-1">风速</p>
          <p class="text-xl font-medium">3 km/h</p>
        </div>
        
        <div class="p-3 bg-gray-50 rounded-xl">
          <p class="text-sm opacity-70 mb-1">气压</p>
          <p class="text-xl font-medium">1013 hPa</p>
        </div>
        
        <div class="p-3 bg-gray-50 rounded-xl">
          <p class="text-sm opacity-70 mb-1">能见度</p>
          <p class="text-xl font-medium">10 km</p>
        </div>
        
        <div class="p-3 bg-gray-50 rounded-xl">
          <p class="text-sm opacity-70 mb-1">紫外线指数</p>
          <p class="text-xl font-medium">6 (强)</p>
        </div>
      </div>
    </div>
    
    <div class="weather-card p-4">
      <h3 class="font-medium mb-4">日出日落</h3>
      
      <div class="relative pt-2 pb-6">
        <div class="absolute w-full h-[120px] flex items-center justify-center">
          <div class="w-[80%] h-[120px] border-t-[2px] border-dashed border-yellow-400 rounded-[150px_150px_0_0]"></div>
        </div>
        
        <div class="flex justify-between relative z-10 mt-2">
          <div class="text-center">
            <i class="fas fa-sunrise text-yellow-500 text-xl mb-1"></i>
            <p class="font-medium">06:28</p>
            <p class="text-xs opacity-70">日出</p>
          </div>
          
          <div class="text-center pt-12">
            <i class="fas fa-sun text-yellow-500 text-xl"></i>
            <p class="text-xs opacity-70">12:42</p>
          </div>
          
          <div class="text-center">
            <i class="fas fa-sunset text-orange-500 text-xl mb-1"></i>
            <p class="font-medium">18:56</p>
            <p class="text-xs opacity-70">日落</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return generatePageTemplate({
    title: '天气详情',
    pageId: 'details',
    headerStyle: 'transparent',
    content: content,
    showBackButton: true,
    backLink: 'home.html',
    rightButton: '<button class="text-white opacity-80"><i class="fas fa-share-alt"></i></button>',
    background: '../img/sunny-bg.jpg'
  });
}

/**
 * 生成城市管理页HTML
 * @returns {string} 城市管理页HTML
 */
function generateCitiesPage() {
  const content = `
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">我的城市</h2>
      <button class="btn-secondary rounded-full h-8 px-3 text-sm">编辑</button>
    </div>
    
    <div class="weather-card mb-4">
      <div class="p-4 border-b border-gray-100">
        <div class="flex justify-between">
          <div>
            <h3 class="font-medium">北京市</h3>
            <p class="text-sm opacity-70">当前位置</p>
          </div>
          <div class="text-right">
            <p class="text-2xl font-light">26°</p>
            <p class="text-sm">晴朗</p>
          </div>
        </div>
      </div>
      
      <div class="p-4 border-b border-gray-100">
        <div class="flex justify-between">
          <div>
            <h3 class="font-medium">上海市</h3>
            <p class="text-sm opacity-70">距离1213公里</p>
          </div>
          <div class="text-right">
            <p class="text-2xl font-light">24°</p>
            <p class="text-sm">多云</p>
          </div>
        </div>
      </div>
      
      <div class="p-4 border-b border-gray-100">
        <div class="flex justify-between">
          <div>
            <h3 class="font-medium">广州市</h3>
            <p class="text-sm opacity-70">距离1898公里</p>
          </div>
          <div class="text-right">
            <p class="text-2xl font-light">28°</p>
            <p class="text-sm">阵雨</p>
          </div>
        </div>
      </div>
      
      <div class="p-4">
        <div class="flex justify-between">
          <div>
            <h3 class="font-medium">深圳市</h3>
            <p class="text-sm opacity-70">距离1953公里</p>
          </div>
          <div class="text-right">
            <p class="text-2xl font-light">29°</p>
            <p class="text-sm">多云</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex justify-center">
      <a href="search.html" class="btn-secondary flex items-center gap-2 px-6">
        <i class="fas fa-plus"></i>
        <span>添加城市</span>
      </a>
    </div>
  `;
  
  return generatePageTemplate({
    title: '城市管理',
    pageId: 'cities',
    content: content,
    showBackButton: false
  });
}

/**
 * 生成搜索页HTML
 * @returns {string} 搜索页HTML
 */
function generateSearchPage() {
  const content = `
    <div class="relative mb-6">
      <input type="text" class="w-full bg-gray-100 h-12 px-4 pl-10 rounded-lg" placeholder="搜索城市...">
      <i class="fas fa-search absolute left-3 top-4 text-gray-400"></i>
    </div>
    
    <div class="mb-6">
      <h3 class="text-lg font-medium mb-3">最近搜索</h3>
      
      <div class="weather-card">
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">深圳市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-plus-circle text-blue-500"></i>
          </div>
        </div>
        
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">杭州市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-plus-circle text-blue-500"></i>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <h3 class="text-lg font-medium mb-3">热门城市</h3>
      
      <div class="weather-card">
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">北京市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-check-circle text-green-500"></i>
          </div>
        </div>
        
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">上海市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-check-circle text-green-500"></i>
          </div>
        </div>
        
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">广州市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-check-circle text-green-500"></i>
          </div>
        </div>
        
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">成都市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-plus-circle text-blue-500"></i>
          </div>
        </div>
        
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">武汉市</div>
            <div class="list-item-subtitle">中国</div>
          </div>
          <div class="list-item-action">
            <i class="fas fa-plus-circle text-blue-500"></i>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return generatePageTemplate({
    title: '搜索城市',
    pageId: 'search',
    content: content,
    showBackButton: true,
    backLink: 'cities.html'
  });
}

/**
 * 生成设置页HTML
 * @returns {string} 设置页HTML
 */
function generateSettingsPage() {
  const content = `
    <div class="weather-card mb-4">
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-thermometer-half"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">温度单位</div>
          <div class="list-item-subtitle">摄氏度 (°C)</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-wind"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">风速单位</div>
          <div class="list-item-subtitle">公里每小时 (km/h)</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-tint"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">降水量单位</div>
          <div class="list-item-subtitle">毫米 (mm)</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-clock"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">时间格式</div>
          <div class="list-item-subtitle">24小时制</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
    
    <div class="weather-card mb-4">
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-bell"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">通知</div>
          <div class="list-item-subtitle">天气预警、日报</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">位置服务</div>
          <div class="list-item-subtitle">已开启</div>
        </div>
        <div class="list-item-action">
          <label class="relative inline-block w-12 h-6">
            <input type="checkbox" class="hidden" checked>
            <div class="bg-blue-500 absolute inset-0 rounded-full transition"></div>
            <div class="absolute h-5 w-5 bg-white rounded-full top-0.5 left-0.5 transition transform translate-x-6"></div>
          </label>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-moon"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">深色模式</div>
          <div class="list-item-subtitle">跟随系统</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
    
    <div class="weather-card">
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">关于</div>
          <div class="list-item-subtitle">版本 1.0.0</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">评分与反馈</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      
      <div class="list-item">
        <div class="list-item-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <div class="list-item-content">
          <div class="list-item-title">隐私政策</div>
        </div>
        <div class="list-item-action">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  `;
  
  return generatePageTemplate({
    title: '设置',
    pageId: 'settings',
    content: content,
    showBackButton: false
  });
} 