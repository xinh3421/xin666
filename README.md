# xin666

项目初始化仓库，当前处于需求定义阶段，尚无业务代码或可启动应用。

## 当前定位

截至 2026-10-29，初始化前的仓库只有一条初始提交和标题 README，没有项目描述、技术栈或产品需求。因此暂按占位仓库维护；具体产品方向由维护者在 [项目说明](docs/PROJECT.md) 中确定。

本次初始化提供文档、目录约定与开发入口，不预设编程语言、框架或部署平台。

## 快速开始与运行状态

需要 Git；阅读文档不需要安装语言运行环境。

```sh
git clone https://github.com/xinh3421/xin666.git
cd xin666
```

依次阅读：

1. [项目说明](docs/PROJECT.md)：明确用户、问题与首个功能。
2. [开发与验证指南](docs/DEVELOPMENT.md)：了解目录职责和后续运行说明要求。
3. [开发路线](docs/ROADMAP.md)：按验收条件完成第一个可运行版本。

**当前没有安装依赖、启动、构建或测试命令。** `src/` 与 `tests/` 只有目录说明。首个功能 PR 必须补齐准确的环境版本、安装、启动和测试命令后，才能标记为可运行。

## 目录结构

```text
.
├── README.md
├── CONTRIBUTING.md
├── .editorconfig
├── .gitignore
├── .github/
│   ├── ISSUE_TEMPLATE/task.md
│   └── pull_request_template.md
├── docs/
│   ├── PROJECT.md
│   ├── DEVELOPMENT.md
│   └── ROADMAP.md
├── src/
│   └── README.md
└── tests/
    └── README.md
```

## 下一步开发入口

从 [项目说明](docs/PROJECT.md) 的待填写项开始，再使用 [开发任务模板](https://github.com/xinh3421/xin666/issues/new?template=task.md) 创建首个功能任务。任务至少描述输入、预期输出和一个可重复的验收示例，然后选择技术栈并实现最小闭环。

参与方式见 [贡献指南](CONTRIBUTING.md)。尚未选择开源许可证，许可证选择列入路线图。
