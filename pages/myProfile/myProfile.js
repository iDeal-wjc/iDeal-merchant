var app = getApp();

Page({
  data: {},

  getShopInfo: function(e) {
    wx.navigateTo({
      url: '/pages/registration/registration'
    })
  },
  resetPassword: function(e) {
    wx.navigateTo({
      url: '/pages/password/password'
    })
  }
})