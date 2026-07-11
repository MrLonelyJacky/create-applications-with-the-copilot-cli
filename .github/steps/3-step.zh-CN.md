## 第 3 步：扩展计算器功能

Duck 希望扩展计算器，先创建一个新 issue，再使用 Copilot CLI 实现增强功能。

### 📖 理论：使用 Copilot CLI 进行迭代开发

#### 保持开发节奏

独立版 Copilot CLI 能帮助你持续高效迭代：

- 使用最新模型快速生成新功能代码
- 推荐最佳实践和常见模式
- 协助调试并测试新增功能
- 在终端内完成工作，减少上下文切换
- 更高效地处理长时间运行的命令
- 通过 headless `-p` 模式增强自动化能力

#### 委托大型任务

复杂任务可以用 `/delegate` 委托给 Copilot coding agent，例如：

```bash
copilot
```

```text
/delegate Add modulo, exponentiation, and square root functions to calculator.js with proper error handling
```

Copilot coding agent 会：

1. 自动创建新分支
2. 打开 Draft PR
3. 自主完成任务
4. 在终端持续输出进度
5. 完成后请求你审查

> [!NOTE]
> 使用 `/delegate` 会消耗 Copilot 订阅中的高级请求额度。普通模型使用则不一定消耗高级请求。

#### 测试与优化流程

新增功能后，Copilot CLI 还可帮助你：

- 生成新运算的测试用例
- 补充边界场景建议
- 生成文档
- 重构代码提升可维护性
- 通过 `/share` 保存并分享会话

> [!IMPORTANT]
> 如果你重启过 codespace，可能需要运行 `copilot --allow-all --enable-all-github-mcp-tools`，并在会话内使用 `/login` 重新认证。

> [!NOTE]
> `--allow-all` 等价于同时开启 `--allow-all-tools`、`--allow-all-paths`、`--allow-all-urls`。
> 这将授予 CLI 较高自动化权限，请谨慎使用。

### ⌨️ 活动：为计算器增加更多运算

1. 启动交互式 Copilot CLI（若尚未进入会话）：

```bash
copilot --allow-all --enable-all-github-mcp-tools
```

2. 创建一个用于扩展计算器的 issue：

```text
Create a GitHub issue for a Node.js CLI calculator app using the feature_request.md template 
as the markdown format.
I want to request a feature to add more operations including 
- modulo
- exponentiation (power)
- square root
Create the issue directly for the current owner and repository in this session on github.com using the `gh` CLI commands.
List the issue link when complete
```

3. 实现新增运算函数：

```text
Add these functions to my existing calculator.js based on latest issue created:
1. modulo(a, b) - returns the remainder of a divided by b
2. power(base, exponent) - returns base raised to the exponent
3. squareRoot(n) - returns the square root of n with error handling for negative numbers
```

可选 headless 模式：

```text
copilot -p "Add these functions to my existing calculator.js based on latest issue created:
1. modulo(a, b) - returns the remainder of a divided by b
2. power(base, exponent) - returns base raised to the exponent
3. squareRoot(n) - returns the square root of n with error handling for negative numbers"
```

4. 为新函数添加测试：

```text
Add tests for the new calculator operations: 
- Expand tests based on the following example:
  - @images/calc-extended-operations.png
- Add new tests for the new operations to the existing src/tests/calculator.test.js file
- Use a popular Node.js testing framework if one isn't installed
- Make sure to include edge case tests like square root of negative numbers
- Make sure all tests run and pass
```

5. 提交更改：

```text
Add all calculator and test files to git.
Commit with message "Implemented additional calculator operations and tests: 
modulo, power, square root" 
Push the changes
```

6. 等待 Mona 检查你的结果并提供下一课内容。

> [!TIP]
> 在 Copilot CLI 中使用 `/share gist` 可把本次 GitHub Skills 练习会话保存为 gist，便于后续复盘。

<details>
<summary>遇到问题？🤷</summary><br/>

- 确认 issue 标题包含 "Calculator" 或 "Operations"
- `calculator.js` 需要正确导出函数供外部引用
- 可在 Node.js REPL 中手工验证：`node` 后输入调用代码
- 对负数开方建议抛错或返回 `NaN`
- 别忘记提交并推送修改
- 用 `copilot --help` 查看全部命令选项

</details>

