const app = getApp()

Page({
  data: {},

  onShow: function() {
    wx.request({
      url: 'https://ljq0dfnlzl.execute-api.us-west-1.amazonaws.com/prod/test-aws',
      data: {
        name: 'jiechao',
        id: 'genius1wjc',
        correct: 'true'
      },
      success: function(res) {
        wx.showToast({
          title: '成功！' + res.data,
          duration: 2000
        })
      }
    })
  }
})