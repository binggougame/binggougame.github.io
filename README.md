# Bakaratini Website

一个现代化、可配置的个人/团队网站，具有丰富的内容展示功能。

## 🌟 新功能特性

### 📱 响应式设计
- 完全响应式布局，适配所有设备
- 现代化的动画效果和交互体验
- 优化的移动端导航

### 🎨 丰富的内容部分
- **首页 (Home)**: 个人/团队介绍
- **关于 (About)**: 详细的背景信息
- **服务 (Services)**: 提供的服务展示
- **项目 (Projects)**: 作品集展示
- **技能 (Skills)**: 技术技能可视化
- **联系 (Contact)**: 联系方式和表单

### ⚙️ 可配置内容系统
- 通过 `html_configs.json` 文件轻松配置所有内容
- 支持动态加载和更新
- 无需修改代码即可更改网站内容

### 🎯 管理界面
- 访问 `admin.html` 进行可视化配置
- 实时预览更改
- 一键导出配置文件

## 📁 文件结构

```
├── index.html              # 主页面
├── admin.html              # 管理界面
├── html_configs.json          # 配置文件
├── css/
│   └── index.css          # 主样式文件
├── js/
│   ├── script.js          # 主要交互脚本
│   └── config-loader.js   # 配置加载器
├── images/                # 图片资源
└── README.md              # 说明文档
```

## 🚀 使用方法

### 1. 基本使用
直接打开 `index.html` 即可查看网站。

### 2. 配置内容
有两种方式配置网站内容：

#### 方法一：使用管理界面（推荐）
1. 打开 `admin.html`
2. 修改各项设置
3. 点击"保存配置"下载新的配置文件
4. 用下载的文件替换 `html_configs.json`

#### 方法二：直接编辑配置文件
编辑 `html_configs.json` 文件，包含以下配置项：

```json
{
  "siteInfo": {
    "title": "网站标题",
    "subtitle": "副标题",
    "description": "描述",
    "email": "邮箱",
    "phone": "电话",
    "location": "位置"
  },
  "services": [
    {
      "icon": "boxicon类名",
      "title": "服务标题",
      "description": "服务描述"
    }
  ],
  "projects": [
    {
      "title": "项目标题",
      "description": "项目描述",
      "image": "图片路径",
      "technologies": ["技术1", "技术2"],
      "links": {
        "demo": "演示链接",
        "github": "GitHub链接"
      }
    }
  ],
  "skills": {
    "frontend": [
      {"name": "技能名", "level": "百分比"}
    ],
    "backend": [
      {"name": "技能名", "level": "百分比"}
    ],
    "tools": [
      {"name": "工具名", "icon": "图标类名"}
    ]
  },
  "theme": {
    "primaryColor": "主色调",
    "backgroundColor": "背景色",
    "textColor": "文字颜色",
    "secondaryTextColor": "次要文字颜色"
  }
}
```

## 🎨 自定义主题

### 颜色配置
在配置文件的 `theme` 部分修改颜色：
- `primaryColor`: 主要强调色（按钮、链接等）
- `backgroundColor`: 页面背景色
- `textColor`: 主要文字颜色
- `secondaryTextColor`: 次要文字颜色

### 图标使用
网站使用 [Boxicons](https://boxicons.com/) 图标库，可以：
1. 访问 Boxicons 官网
2. 选择喜欢的图标
3. 复制图标的类名（如 `bx-code-alt`）
4. 在配置文件中使用

## 📸 添加图片

1. 将图片文件放入 `images/` 文件夹
2. 在配置文件中使用相对路径引用：`images/your-image.jpg`

## 🔧 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代样式和动画
- **JavaScript**: 交互功能和动态加载
- **Boxicons**: 图标库
- **ScrollReveal**: 滚动动画
- **Google Fonts**: 字体

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: hsiung.wen@foxmail.com
- 网站: [bakaratini.top](https://bakaratini.top)

---

**享受你的新网站！** 🎉