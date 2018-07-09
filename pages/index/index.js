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
  },

  uploadImage: function() {
    wx.navigateTo({
      url: '/pages/uploadImage/uploadImage',
    })
  },

  showForm: function() {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  }
})