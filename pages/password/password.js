var app = getApp();
Page({
  data: {
    hideModal: true,
    oldPassword: '',
    newPassword: '',
    newPasswordAgain: '',
    buttonBgColor: '#bcbcbc'
  },

  onLoad: function() {
    this.setData({
      hideModal: false
    });
  },

  modalInput: function(e) {
    this.setData({
      oldPassword: e.detail.value
    })
  },

  cancel: function() {
    this.setData({
      hideModal: true
    });
  },

  confirm: function() {
    this.setData({
      hideModal: true
    })
  },

  enterNewPW: function(e) {
    this.setData({
      newPassword: e.detail.value
    })
  },

  enterNewPWAgain: function(e) {
    this.setData({
      newPasswordAgain: e.detail.value
    })
    var bgColor = this.data.newPassword == '' || this.data.newPasswordAgain == '' ? '#bcbcbc' : '#FD4D4F'
    this.setData({
      buttonBgColor: bgColor
    })
  },

  save: function() {
    if (this.data.buttonBgColor == '#bcbcbc') {
      return;
    }
    console.log("clicked")
  }
})