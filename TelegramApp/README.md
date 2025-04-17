# Telegram App 高保真原型设计

这是一个Telegram应用的高保真原型设计，使用HTML+CSS+Tailwind技术栈实现，用于演示应用界面和交互流程。

## 项目结构

```
TelegramApp/
├── css/                  # CSS样式文件
│   └── style.css         # 全局共享样式
├── images/               # 图片资源文件夹
├── index.html            # 主入口文件，用于展示所有界面
├── welcome.html          # 欢迎/登录页面
├── chats.html            # 聊天列表页面
├── chat_detail.html      # 单聊界面
├── group_chat.html       # 群聊界面
├── contacts.html         # 联系人页面
├── profile.html          # 个人资料页面
├── settings.html         # 设置页面
├── discover.html         # 发现页面
└── channel.html          # 频道页面
```

## 页面说明

1. **欢迎/登录页面 (welcome.html)**
   - 应用首次启动时的欢迎界面
   - 包含登录和注册入口

2. **聊天列表页面 (chats.html)**
   - 显示所有对话，包括个人聊天和群组
   - 支持置顶聊天、未读消息提示

3. **单聊界面 (chat_detail.html)**
   - 一对一聊天的详细界面
   - 支持文本消息、时间显示

4. **群聊界面 (group_chat.html)**
   - 多人聊天的详细界面
   - 显示发送者信息

5. **联系人页面 (contacts.html)**
   - 显示所有联系人列表
   - 支持按字母索引

6. **个人资料页面 (profile.html)**
   - 用户个人资料和设置

7. **设置页面 (settings.html)**
   - 应用的各种设置选项

8. **发现页面 (discover.html)**
   - 发现新频道、群组和机器人

9. **频道页面 (channel.html)**
   - 频道内容展示

## 使用说明

1. 直接在浏览器中打开 `index.html` 文件查看所有界面概览
2. 点击各个界面可以查看详细设计
3. 本原型为静态设计，不包含实际功能

## 技术栈

- HTML5
- CSS3
- Tailwind CSS
- Font Awesome 图标

## 设计特点

- 遵循iOS设计规范，适配iPhone 15 Pro尺寸
- 使用CSS变量统一管理颜色和样式
- 响应式设计，适应不同设备尺寸
- 高保真界面元素，包括状态栏、导航栏和标签栏

## 设计资源

- 使用Font Awesome提供图标支持
- 使用随机用户头像API提供用户头像
- 使用Unsplash API提供图片资源

---

*本原型仅用于UI/UX设计展示和开发参考，不具备实际功能。* 