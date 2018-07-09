const app = getApp()

Page({
  data: {
  },

  scanCode: function() {
    wx.navigateTo({
      url: '/pages/scanCode/scanCode',
    })
  },

  makeApiCall: function() {
    wx.navigateTo({
      url: '/pages/apiRequest/apiRequest',
    })
  }
})