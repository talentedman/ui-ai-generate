/**
 * 生成页面基础模板
 * @param {Object} options - 模板选项
 * @param {string} options.title - 页面标题
 * @param {string} options.pageId - 页面ID，用于导航栏高亮
 * @param {string} options.headerStyle - 页面头部样式：'default'、'transparent'等
 * @param {string} options.content - 页面内容HTML
 * @param {boolean} options.showBackButton - 是否显示返回按钮
 * @param {string} options.backLink - 返回链接地址
 * @param {string} options.rightButton - 右侧按钮HTML
 * @param {string} options.background - 背景样式或图片URL
 * @returns {string} 完整的页面HTML
 */
function generatePageTemplate(options) {
  const {
    title = '天气',
    pageId = '',
    headerStyle = 'default',
    content = '',
    showBackButton = false,
    backLink = 'javascript:history.back()',
    rightButton = '',
    background = ''
  } = options;
  
  let headerClass = '';
  if (headerStyle === 'transparent') {
    headerClass = 'bg-transparent text-white';
  } else {
    headerClass = 'bg-white';
  }

  let backgroundStyle = '';
  if (background) {
    if (background.startsWith('#') || background.startsWith('rgb')) {
      backgroundStyle = `background-color: ${background};`;
    } else {
      backgroundStyle = `background-image: url('${background}'); background-size: cover; background-position: center;`;
    }
  }
  
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${title}</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="../css/style.css">
  <style>
    body {
      ${backgroundStyle}
    }
  </style>
</head>
<body data-page="${pageId}">
  <div class="page-container">
    <!-- 状态栏 -->
    <div id="status-bar-container"></div>
    
    <!-- 页面头部 -->
    <div class="header ${headerClass} p-4 flex items-center justify-between">
      <div class="left-button">
        ${showBackButton ? `<a href="${backLink}" class="text-lg"><i class="fas fa-chevron-left"></i></a>` : ''}
      </div>
      <div class="header-title font-semibold text-lg">${title}</div>
      <div class="right-button">
        ${rightButton}
      </div>
    </div>
    
    <!-- 页面内容 -->
    <div class="page-content">
      ${content}
    </div>
    
    <!-- 底部导航栏 -->
    <div id="tab-bar-container"></div>
  </div>
  
  <script src="../js/components.js"></script>
  <script>
    // 页面特定的脚本可以在这里添加
  </script>
</body>
</html>
  `;
} 