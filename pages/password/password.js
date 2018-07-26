var app = getApp();
Page({
  data: {
    hideModal: true,
    oldPassword: '',
    newPassword: '',
    newPasswordAgain: ''
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
  },

  save: function() {

  }
})