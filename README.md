## 目录介绍

Components

- biz: 业务组件（负责行为和操作）
- ui: ui 组件（只负责界面）

## 项目思想

这个项目主要用于介绍 6 种客户端状态管理方式（组件间通信）的使用差异

- 由于 6 种状态想共用一套 ui，所以选择在 ui 组件里面不写任何方法，把所有方法放在业务组件里面统一去管理（再把这些方法 props 到各个 Ui 组件中）。这样做的目的是为了方便看客对比 6 种状态管理方法的使用差异。使界面展示与行为的分离
