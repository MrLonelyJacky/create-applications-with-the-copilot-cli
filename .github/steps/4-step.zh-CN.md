## 第 4 步：创建、评审并合并 Pull Request

Duck 准备完成最终交付：创建 PR、关联两个 issue、请求 Copilot 评审，并在命令行完成合并。

### 📖 理论：使用 Copilot CLI 进行 PR 与代码评审

#### 理解 Pull Request（PR）

PR 是协作开发中的标准流程：

- 便于在合并前进行代码评审
- 保留清晰的变更与决策记录
- 可与 issue 关联，增强项目追踪
- 可触发 CI/CD 自动验证

#### 将 PR 与 Issue 关联

关联后可以带来：

- PR 合并时自动关闭 issue
- 建立需求与代码实现的可追溯关系
- 更清晰地跟踪开发进度
- 改善团队沟通效率

#### 借助 AI 进行代码评审

GitHub Copilot 可作为评审者：

- 提出代码质量改进建议
- 发现潜在缺陷与边界问题
- 推荐最佳实践与设计模式
- 提供建设性反馈

Copilot CLI 支持你在终端内：

- 直接创建 PR
- 请求 Copilot 或团队成员评审
- 不离开 CLI 完成合并
- 自动化整个流程以加快迭代

#### 参考资料

- [Creating Pull Requests with GitHub CLI](https://cli.github.com/manual/gh_pr_create)
- [Linking Issues and PRs](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [GitHub Copilot as a Code Reviewer](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

> [!IMPORTANT]
> 如果你重启过 codespace，可能需要运行 `copilot --allow-all`，并通过 `!gh auth login` 或 `/login` 重新认证。

### ⌨️ 活动：完成 PR 全流程

1. 启动交互式 Copilot CLI（若尚未进入会话）：

```bash
copilot --allow-all --enable-all-github-mcp-tools
```

2. 从当前分支创建 PR，并添加 `@copilot` 作为评审者：

```text
Create a pull request from the current branch with a title "Add calculator enhancements" 
and description that includes the main changes: basic calculator operations and expanded 
functionality with modulo, power, and square root. Make sure to add @copilot as a reviewer 
and request a review on the PR.
List the PR link when it is completely created
```

3. 将 PR 关联到之前创建的两个 issue：

```text
Link the pull request I just created to both the "Create a calculator" and 
"Add more operations" issues so they close automatically when merged.
```

4. 在 Copilot 评审完成后合并 PR：

```text
Merge the pull request and close the attached issues
```

> [!NOTE]
> 如果 PR 描述中使用 `Closes #<issue-number>`，在合并时 GitHub 会自动关闭对应 issue。
> 使用 squash merge 有助于保持主分支历史整洁。

5. 验证两个 issue 都已关闭：

```text
List the closed issues in the repository to confirm both the "Create a calculator" 
and "Add more operations" issues are now closed.
```

6. 等待 Mona 检查你的结果并给出下一课。

> [!TIP]
> 在 Copilot CLI 中使用 `/share gist` 可保存这次练习会话，便于归档和复盘。

<details>
<summary>遇到问题？🤷</summary><br/>

- 创建 PR 前先确认代码已提交并推送
- 使用 `gh auth status`（或在 CLI 中 `!gh auth status`）检查认证
- 若 PR 创建失败，确认当前分支不是 `main/master`
- 若自动关闭未生效，在 PR 描述中手动加入 `Closes #<issue-number>`
- 可用 `!gh pr view` 或 `!gh pr list` 查看 PR 状态
- 若 issue 未自动关闭，可在 GitHub 网页手动关联
- 合并前确认 Copilot 评审已完成
- 可用 `!gh pr merge --squash` 进行 squash 合并

</details>

