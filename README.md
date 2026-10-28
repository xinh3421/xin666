# xin666 · 把今天理清

可以离线使用的中文个人待办清单。无需账号、安装依赖或构建，任务保存在当前浏览器，支持新增、编辑、完成、删除、状态筛选、搜索和 JSON 备份导入导出。

## 立即使用

双击根目录的 `index.html`，用 Edge、Chrome、Firefox 或 Safari 打开。输入任务后按回车或点击“添加任务”；勾选复选框标记完成。“导出备份”下载 JSON 文件，“导入备份”在确认后替换当前清单。

仓库当前实现位于 PR #1 的 `docs/initialize-repository` 分支。合并前克隆该版本：

```sh
git clone --branch docs/initialize-repository https://github.com/xinh3421/xin666.git
cd xin666
```

然后双击 `index.html`。首次打开没有示例任务，直接添加自己的事项。

数据不上传，也不跨设备同步。浏览器隐私模式、清理网站数据、更换浏览器或文件路径可能影响本地保存；请定期导出 JSON 备份。保存失败会显示提示，并保留修改前的清单；遇到已损坏的存储时暂停写入，需导入有效备份恢复。

## 本地服务（可选）

日常双击使用不需要 Node.js。开发者可安装 Node.js 22 或更新版本，再运行：

```sh
node scripts/serve.cjs
```

浏览器访问 http://127.0.0.1:4173，终端按 Ctrl+C 停止。固定使用同一地址与端口可保持相同存储位置。直接打开文件与本地服务是不同存储位置，切换前先导出备份。

## 开发与测试

```sh
node --test tests/core.test.cjs
```

使用 Node 内置测试工具，无需安装 npm 包。页面样式、逻辑和数据模型均在 `index.html`，离线下载单个文件也能使用。`scripts/` 提供只监听本机的预览服务，`tests/` 验证持久化、筛选、输入校验和备份。详细验证步骤见 [开发指南](docs/DEVELOPMENT.md)。

项目目标见 [PROJECT.md](docs/PROJECT.md)，下一步见 [ROADMAP.md](docs/ROADMAP.md)。尚未选择开源许可证。
