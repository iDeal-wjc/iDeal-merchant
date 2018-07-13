const app = getApp()

Page({
  data: {
    imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
    dealCards: [
      {
        index: 0,
        imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
        content: "海鲜大餐折扣活动，满 100 减 120 ，跳楼大减价"
      },
      {
        index: 1,
        imageUrl: "https://googlechrome.github.io/samples/picture-element/images/butterfly.webp",
        content: "大龙虾当小龙虾卖啦！~ 10 块钱一个"
      },
      {
        index: 2,
        imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
        content: "海鲜大餐折扣活动，满 100 减 120 ，跳楼大减价"
      },
    ]
  },

  scanCode: function() {
    wx.navigateTo({
      url: '/pages/scanCode/scanCode',
    })
  }
})