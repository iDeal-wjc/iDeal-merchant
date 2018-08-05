var app = getApp();

Page({
  data: {},

  tapRow: function(e) {
    wx.navigateTo({
      url: '/pages/myProfile/myProfile'
    })
  }
})