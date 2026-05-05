const n="Development-Tools/NeoVim/Yazi-Usage.md",a="posts",e="development-tools/neovim/yazi-usage",t=`
## 简介

**Yazi**（“鸭子”）是一款基于 Rust 编写的现代化终端文件管理器。它采用异步 I/O 架构，即使目录中包含数千个文件也能保持流畅操作。Yazi 的操作逻辑借鉴了 Vim，默认使用单键快捷键，并支持图像预览、模糊搜索、批量重命名和多标签页等实用功能。

## 安装与启动

不同平台安装命令如下：

\`\`\`bash
# macOS (Homebrew)
brew install yazi

# Arch Linux
sudo pacman -S yazi

# Cargo (编译安装)
cargo install yazi-fm
\`\`\`

启动方式非常简单：

\`\`\`bash
# 直接启动
yazi

# 启动并跳转到指定目录
yazi /path/to/project
\`\`\`

> **提示**：Yazi 支持 Kitty、iTerm2 等终端的图像协议，可在终端内直接预览图片、视频缩略图和 PDF。若终端不支持，会回退为 ASCII 艺术形式。

## 核心快捷键速查

快捷键是 Yazi 的核心操作方式，以下按使用场景分类整理：

### 导航

|        操作         |  快捷键   |
| :-----------------: | :-------: |
|      向上/向下      |    k/j    |
| 进入目录 / 打开文件 | l / Enter |
|    返回上级目录     |     h     |
|    跳到顶部/底部    |  gg / G   |
|  回到主目录（\`~\`）  |     ~     |
|    显示隐藏文件     |     .     |
|    排序方式切换     |     ,     |
|  切换到下一标签页   |    Tab    |

> 还支持 Vim 风格行跳转：如 \`5G\` 跳转到第 5 行。

### 文件操作

|        操作        |        快捷键         |
| :----------------: | :-------------------: |
|      复制文件      |           y           |
|      剪切文件      |           x           |
|        粘贴        |           p           |
|       重命名       |           r           |
| 删除（移入回收站） |           d           |
|      永久删除      |           D           |
|      新建文件      |           a           |
|     新建文件夹     | a（文件名末尾加 \`/\`） |
|  复制文件完整路径  |       c 然后 c        |

> 选中多文件后按 \`r\` 会调用外部编辑器进行**批量重命名**，非常高效。

### 选择

|      操作       |   快捷键   |
| :-------------: | :--------: |
| 选中/取消当前项 |   Space    |
|      全选       | \`Ctrl + a\` |
|      反选       | \`Ctrl + r\` |
|  视觉选择模式   |     v      |

### 搜索与跳转

|            操作             | 快捷键 |
| :-------------------------: | :----: |
|      当前目录过滤搜索       |   /    |
| 递归搜索文件名（需要 \`fd\`） |   s    |
|  搜索文件内容（需要 \`rg\`）  |   S    |
| 模糊搜索跳转（需要 \`fzf\`）  |   z    |
|     zoxide 历史目录跳转     |   Z    |

> 搜索后按 \`n\` / \`N\` 跳转下一个/上一个匹配项。

### 其他常用

|          操作          | 快捷键  |
| :--------------------: | :-----: |
|        打开帮助        | ~ 或 F1 |
| 打开 Shell（当前目录） |    !    |
|    执行 Shell 命令     |    ;    |
|  退出（保持当前目录）  |    q    |
| 退出并 \`cd\` 到浏览目录 |    Q    |

## Shell 集成：退出时自动切换目录

Yazi 默认退出后 Shell 仍停留在启动时的目录。通过配置 Shell 包装函数，可以实现“退出 Yazi 后自动切换到当时浏览的目录”。

在 \`~/.zshrc\`（或 \`~/.bashrc\`）中添加：

\`\`\`bash
function yy() {
  local tmp
  tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
  yazi "$@" --cwd-file="$tmp"
  if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    cd -- "$cwd"
  fi
  rm -f -- "$tmp"
}
\`\`\`

之后使用 \`yy\` 命令启动 Yazi，退出时终端会自动切换到 Yazi 最后浏览的目录。

## 进阶功能

### 图像与媒体预览

将光标停留在图片（\`.jpg\`、\`.png\`）、视频或 PDF 文件上，右侧预览面板会自动显示内容。支持 Kitty、iTerm2、Sixel 等图形协议。

### 多标签页与分栏

Yazi 支持**多标签页**（\`Tab\` 切换）和**分栏视图**，方便在不同目录之间对比和移动文件。

### Lua 插件系统

Yazi 通过 Lua 脚本扩展功能，可安装社区插件实现自定义功能。

### 自定义按键绑定

修改配置文件 \`keymap.toml\`（位于 \`~/.config/yazi/\`）即可自定义快捷键。例如，将 \`o\` 键绑定为创建文件：

\`\`\`toml
[manager]
o = { exec = "shell", args = ["touch"] }
\`\`\`

## 常用指令速记

|   意图    |    按键     |
| :-------: | :---------: |
| 进去/出去 |  \`l\` / \`h\`  |
| 上下移动  |  \`k\` / \`j\`  |
| 复制粘贴  |  \`y\` + \`p\`  |
|  找文件   |     \`/\`     |
| 快速跳转  |     \`z\`     |
|  看帮助   | \`~\` 或 \`F1\` |
|   退出    |     \`q\`     |

> Yazi 默认内置了完善的文件操作功能（创建、删除、重命名等），大多数场景无需自定义快捷键就能高效工作。
`,o={title:"Yazi 终端文件管理器使用指南",author:"NeoWangKing",date:new Date(17779536e5),lastMod:new Date(1777963487e3),tags:["开发工具","终端","文件管理器","Yazi"],category:["开发工具","终端"],summary:"本文详细介绍新一代终端文件管理器 Yazi 的使用方法，包括核心功能、完整的快捷键速查表、Shell 集成配置以及进阶技巧，帮助终端用户提升文件管理效率。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/Development-Tools/NeoVim/Yazi-Usage.md",rawData:void 0};export{i as _internal,t as body,a as collection,o as data,n as id,e as slug};
