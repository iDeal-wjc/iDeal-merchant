var app = getApp();
Page({
  data: {
    hideModal: true,
    inputValue: ''
  },

  onLoad: function() {
    this.setData({
      hideModal: false
    });
  },

  modalInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
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
  }
})