const app = getApp()

Page({
  data: {
    imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
    dealCards: [
      {
        index: 0,
        imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
        content: "海鲜大餐折扣活动，满 100 减 120 ，跳楼大减价",
        viewAndUseCount: "1000 人次查看   100 人次使用"
      },
      {
        index: 1,
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532130459&di=bfd8d9b7fbe2fbd2676b982132f5ee4b&imgtype=jpg&er=1&src=http%3A%2F%2Fimgup01.sj88.com%2F2018-06%2F25%2F14%2F15299064674671_2.jpg",
        content: "大龙虾当小龙虾卖啦！~ 10 块钱一个",
        viewAndUseCount: "1000 人次查看   100 人次使用"
      },
      {
        index: 2,
        imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
        content: "海鲜大餐折扣活动，满 100 减 120 ，跳楼大减价",
        viewAndUseCount: "1000 人次查看   100 人次使用"
      },
    ]
  },

  tapCard: function(e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
  }
})