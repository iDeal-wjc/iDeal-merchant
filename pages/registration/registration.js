var app = getApp();

Page({
  data: {
    enterpriseName: ''
  },

  enterpriseName: function(e) {
    this.setData({
      enterpriseName: e.detail.value
    })
  },
})