const app = getApp()

Page({
  data: {
    imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg"
  },

  scanCode: function() {
    wx.navigateTo({
      url: '/pages/scanCode/scanCode',
    })
  }
})