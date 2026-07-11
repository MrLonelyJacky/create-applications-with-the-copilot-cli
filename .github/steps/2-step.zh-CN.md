## 第 2 步：使用 Copilot CLI 处理计算器 Issue

Issue 创建完成后，Duck 使用独立版 Copilot CLI 交互式地开始构建计算器应用。

### 📖 理论：与 Copilot CLI 协作开发

#### 使用 Copilot CLI 进行交互式开发

独立版 Copilot CLI（`copilot` 命令）提供了完整的交互式开发体验：

- 直接运行 `copilot` 启动会话
- 通过自然语言交流获取代码建议
- 根据需求快速生成样板代码
- 使用最新模型获取更强回答能力
- `/share [file|gist] [path]` 可导出会话为 markdown 或 gist

#### 自定义 Agents

Copilot CLI 支持在仓库中定义自定义 agent：

- 在 `.github/agents/` 目录创建 agent 配置
- 内置领域专用提示词、工具与工作流
- 使用 `/agent <name>` 调用
- 适用于文档、基础设施、安全或业务领域流程

#### 委托任务

较大任务可委托给 Copilot coding agent：

- 使用 `/delegate TASK-DESCRIPTION`
- Copilot 会自动创建新分支和 Draft PR
- coding agent 在后台自主执行
- 完成后返回供你审查

> [!NOTE]
> 参考：
>
> - [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
> - [Custom agents in Copilot CLI](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
> - [About custom agents](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)

> [!IMPORTANT]
> 如果你重启过 codespace，可能需要运行 `copilot --allow-all --enable-all-github-mcp-tools`，并在 Copilot CLI 内使用 `/login` 重新认证。

### ⌨️ 活动：为计算器应用创建新分支

1. 先结束上一会话（`/exit`），再启动新会话：

```bash
copilot --allow-all --enable-all-github-mcp-tools
```

> [!NOTE]
> `--allow-all` 等价于同时开启 `--allow-all-tools`、`--allow-all-paths`、`--allow-all-urls`。
> 这会让 CLI 无需逐项确认即可访问任意路径、工具和 URL，请谨慎使用。

2. 创建并推送名为 `create-calc-app` 的分支：

```text
Create and push a new branch called 'create-calc-app'
```

<details>
<summary>遇到问题？🤷</summary><br/>

你可以在 Copilot CLI 中使用 `!` 直接执行 shell 命令：

```text
!git checkout -b create-calc-app && git push -u origin create-calc-app
```

查看当前分支：

```text
!git branch --show-current
```

</details>

### ⌨️ 活动：基于图片生成计算器代码

1. 让 Copilot CLI 根据图片和刚创建的 issue 生成代码：

```text
@images/js-calculator.png help me create a Node.js CLI calculator app 
based only on the four basic math operations in this image and outlined
in the latest issue in this owner/repository.
Create the code and put it in the 'src' directory.
Make sure the calculator is commented with the operations it supports.
```

可选：使用 headless 模式：

```bash
copilot -p "@images/js-calculator.png help me create a Node.js CLI calculator app 
based only on the four basic math operations in this image and outlined
in the latest issue in this owner/repository.
Create the code and put it in the 'src' directory.
Make sure the calculator is commented with the operations it supports."
```

> [!NOTE]
> 虽然示例图片是网页 JavaScript 计算器，但这里重点是演示如何在 Copilot CLI 中通过文件（含图片）提供上下文。

2. 运行并测试计算器函数：

```text
Run and test the calculator functions with some example operations 
shown in the image @images/calc-basic-operations.png.
```

3. 让 Copilot CLI 为计算器函数生成完整测试：

```text
Create comprehensive unit tests for all the calculator functions:
- Expand tests based on the following example:
  - @images/calc-basic-operations.png
- Add these tests to a src/tests/calculator.test.js file
- Use a popular Node.js testing framework if one isn't installed
- addition, subtraction, multiplication, and division
- test edge cases like division by zero
- Make sure all tests run and pass
```

> [!NOTE]
> 按 `ctrl+o` 可展开查看测试输出。

4. 确认代码无误后，提交更改：

```text
Add all calculator and test files to git.
Commit with message "Implement basic calculator operations and tests: 
addition, subtraction, multiplication, division"
Push the changes
```

5. 等待 Mona 检查你的结果并给出下一步提示。

> [!TIP]
> 你可以直接粘贴或拖拽图片到 Copilot CLI，为提问提供可视化上下文。

> [!NOTE]
> 推送后将触发工作流验证你的成果并准备下一步。

<details>
<summary>遇到问题？🤷</summary><br/>

- 确认你在仓库目录中执行命令
- `copilot` 命令需要 Node.js 22+
- 认证失败时，重新运行 `copilot` 并按提示登录
- 也可根据 Copilot 建议手动编辑 `calculator.js`
- 别忘了使用 `module.exports` 导出函数

</details>

