### 天气h5页面埋点 pps广告接入
- PPS广告及商品广告 应用安装广告
- 点击埋点(广告点击率、分享按钮)\曝光停留埋点\
- 自定义指令统一完成事件上报（普通 DOM 元素进行底层操作、数据的变化映射为 DOM 行为）
- [实例1](https://zhuanlan.zhihu.com/p/163258551)
- [hamonyOS 广告](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/publisher-service-js-native-0000001223053343)
- 二级tab页 旅行 穿衣 运动 护肤 钓鱼 风力风向 空气质量 实时天气 多日天气 
- [MutationObserver](https://github.com/megawac/MutationObserver.js)
- [IntersectionObserver]()
- 地图打点上报 

```
Vue.directive('stat', {
  bind: function () {
    // 准备工作
  },
  update: function (newValue, oldValue) {
    // 值更新时的工作
    // 也会以初始值为参数调用一次, 此时可以根据传值类型来进行相应埋点行为的请求处理
  },
  unbind: function () {
    // 清理工作
  }
})
```
### 
