var app = getApp()

Page({
  data: {
    hiddenmodalput: true,
    password: ''
  },

  buttonTapped: function() {
    this.setData({
      hiddenmodalput: false
    })
  },

  modalInput: function (e) {
    this.setData({
      hiddenmodalput: false,
      password: e.detail.value
    })
  },

  confirm: function() {
    this.setData({
      hiddenmodalput: true
    })
    if (this.data.password == 'zhouyun') {
      wx.request({
        url: "https://api.ideal101.com/v1/test-aws",
        data: {
          id: 2,
          correct: true,
          name: 'wjc'
        },
        header: {
          "Content-Type":"application/json"
        },
        success: function(res) {
          console.log(res.data)
        },
        fail: function(err) {
          console.log(err)
        }

      })
    }
  }

})