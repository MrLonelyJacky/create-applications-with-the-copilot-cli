## 第 1 步：安装 Copilot CLI 并使用 Issue 模板

Duck 更喜欢在终端里工作，希望直接在命令行中使用 AI。
Duck 准备开发一个新的 Node.js CLI 计算器应用，并计划先安装独立版 Copilot CLI。

### 📖 理论：GitHub Copilot CLI（独立终端应用）

#### 什么是 GitHub Copilot CLI？

GitHub Copilot CLI 是一个**独立的终端应用**，通过 npm 安装后，可在命令行中直接使用 Copilot 的能力。

#### 关键能力

- 基于 OpenAI 和 Google 的最新模型提供智能命令建议
- 在终端中直接生成代码片段和脚本
- 协助 Git 操作与 GitHub 交互
- 支持通过粘贴或拖拽图片提供视觉上下文
- 使用 `--enable-all-github-mcp-tools` 可启用全部 GitHub MCP 工具（如创建 issue、管理仓库等）
- 根据 CLI 配置（例如未使用 `--allow-all`）可能会提示你启用某些功能，请选择 **yes**
- `/session`：查看当前会话详情
- `/context`：查看当前 token 上下文使用情况
- `/usage`：查看会话统计（高级请求数、会话时长、编辑代码行数、模型 token 明细）
- `/share [file|gist] [path]`：将会话导出为 Markdown 或 GitHub gist
- 支持创建**自定义 agents**
- 支持使用 `/delegate` 委托给 Copilot coding agent

#### 全局快捷键

```text
 @             提及文件并将其内容加入上下文
 Esc           取消当前操作
 !             在本地 shell 执行命令（绕过 Copilot）
 ctrl+c        取消操作 / 清空输入 / 退出
 ctrl+d        关闭
 ctrl+l        清屏
 shift+tab     在计划模式与常规交互模式之间切换
```

#### 安装要求

安装 Copilot CLI 需要：

- Node.js 22 或更高版本
- npm 10 或更高版本
- 有效的 GitHub Copilot 订阅（Free、Pro、Pro+、Business 或 Enterprise）

#### Issue 模板

Issue 模板有助于团队统一创建规范。此仓库已提供 `feature_request.md` 模板，你将用它来创建计算器应用需求。模板可确保：

- 关键信息在一开始就完整
- Issue 结构统一
- 团队更容易分流和响应

#### 参考资料

- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Copilot CLI 101](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

> [!IMPORTANT]
> 如果你重启过 codespace，可能需要先运行 `copilot --allow-all`，然后通过 `!gh auth login` 或在 Copilot CLI 中使用 `/login` 重新认证 GitHub。

### :keyboard: 活动 1：熟悉开发环境

1. 右键点击下方按钮，在新标签页打开 **Create Codespace** 页面。

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

   - GitHub 账号免费层的 Codespaces 配额通常足够本练习使用。
   - 默认 Codespace 配置即可。

> [!IMPORTANT]
> 本 Codespace 的 VS Code 环境已简化，重点是终端中的 Copilot CLI 体验。你将主要通过终端命令完成练习。

2. 确认 **Repository** 字段是你自己的仓库副本，而不是原始仓库，然后点击绿色 **Create Codespace**。
   - ✅ 你的副本：`/{{full_repo_name}}`
   - ❌ 原始仓库：`/arilivigni/create-applications-with-the-copilot-CLI`

3. 等待 Visual Studio Code 加载完成。

4. 练习主要使用完整终端窗口。

### ⌨️ 活动 2：安装独立版 Copilot CLI

1. 打开 Codespace（若尚未打开）。

2. 在终端安装独立版 GitHub Copilot CLI：

```bash
npm install -g @github/copilot
```

3. 验证安装：

```bash
copilot --version
```

> [!TIP]
> 安装后可在任意终端位置使用 `copilot` 启动交互会话。

### ⌨️ 活动 3：使用 Copilot CLI 创建 Issue

1. 启动交互式 Copilot CLI 会话：

```bash
copilot --enable-all-github-mcp-tools
```

> [!NOTE]
> 启动时可能会提示将当前目录加入信任列表以及启用终端按键绑定。两项都选择 **yes**。

2. 在 Copilot CLI 中完成 GitHub 授权（若尚未登录）：

```text
/login
```

> [!NOTE]
> 运行 `/login` 后会提供链接和验证码。打开链接并输入验证码即可完成登录。

3. 体验常用斜杠命令：

```text
/session
/context
/usage
```

> [!NOTE]
> - `/session`：显示当前会话信息
> - `/context`：展示 token 使用情况
> - `/usage`：展示会话统计（高级请求数、时长、编辑行数、模型 token 明细）

4. 让 Copilot CLI 帮你创建计算器功能请求 issue：

```text
Create a GitHub issue for a Node.js CLI calculator app using the following template
.github/ISSUE_TEMPLATE/feature_request.md template and make sure the issue is in a
markdown format that contains "calculator" in the title and follows the format of
the issue template.
I want to request a feature for basic arithmetic operations including
- addition
- subtraction
- multiplication
- division
The calculator should be implemented in calculator.js
Create the issue directly in the current owner in this session
and repository on github.com using the `gh` CLI commands.
List the issue link when complete
```

5. 等待 Mona 检查你的结果。稍后你会在评论中看到进度与下一课提示。

> [!NOTE]
> Copilot CLI 可能会提示确认创建 issue 以及使用 `gh issue`、`git config`。
> 对创建 issue 选择 **yes**，并对命令授权选择：
> **"Yes, and approve `gh issue` or `git config` for the rest of the running session"**。

<details>
<summary>遇到问题？🤷</summary><br/>

- 确认 Node.js 版本 22+：`node --version`
- 若 npm 安装失败，可尝试：`sudo npm install -g @github/copilot`
- 确认你的账号已开通 Copilot 访问权限
- 若认证失败，运行 `copilot` 后执行 `/login`
- 如有必要，也可通过 GitHub 网页手动创建 issue

</details>

