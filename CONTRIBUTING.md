# 贡献指南

先阅读 docs/PROJECT.md 与 docs/ROADMAP.md，再使用开发任务模板提出一个可验收目标。

1. 从最新开发分支创建功能分支，一次 PR 聚焦一个目标。
2. 修改 index.html，补充与行为相关的测试及使用说明。
3. 运行 `node --test tests/core.test.cjs`，按 docs/DEVELOPMENT.md 做浏览器验收。
4. 提交 PR 并记录实际验证结果，关联 Issue。

应用保持离线、无第三方依赖；新增依赖或网络功能须说明用途与数据流。不要提交凭据或个人数据。
