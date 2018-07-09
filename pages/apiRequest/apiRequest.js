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
        console.log(res.data)
      }
    })
  }
})