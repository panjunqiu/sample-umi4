# umi4sample

记录使用umi搭建的一个学习示例[官网链接](https://umijs.org/docs/tutorials/getting-started)  
我测试的时候umi是4.0.29，项目使用pnpm  
更多具体插件等的使用见umi的github仓库中的[example](https://github.com/umijs/umi/tree/master/examples)，有数据流状态管理(dva、rtk、recoil)、请求库、样式处理等

## 注意事项

- layout 中 index 会是每个子页面的 wrapper
- react-router 升级到了6版本，和之前的5不兼容
- 缓存可能会失效，需要删除src/.umi 重启，某些情况下需要删除node_modules/.cache

## 待学习

- 乾坤微应用
