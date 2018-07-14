const app = getApp()

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
    dealCards: [{
        index: 0,
        imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
        content: "海鲜大餐折扣活动，满 100 减 120 ，跳楼大减价",
        viewAndUseCount: "1000 人次查看　　100 人次使用"
      },
      {
        index: 1,
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532130459&di=bfd8d9b7fbe2fbd2676b982132f5ee4b&imgtype=jpg&er=1&src=http%3A%2F%2Fimgup01.sj88.com%2F2018-06%2F25%2F14%2F15299064674671_2.jpg",
        content: "大龙虾当小龙虾卖啦！~ 10 块钱一个",
        viewAndUseCount: "1000 人次查看　　100 人次使用"
      },
      {
        index: 2,
        imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
        content: "海鲜大餐折扣活动，满 100 减 120 ，跳楼大减价",
        viewAndUseCount: "1000 人次查看　　100 人次使用"
      },
    ]
  },

  onLoad: function() {
    var that = this;

    /**
     * 获取系统信息
     */
    wx.getSystemInfo({

      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },

  /**
   * 滑动切换tab
   */
  bindChange: function(e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  /**
   * 点击tab切换
   */
  swichNav: function(e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  tapCard: function(e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
  }
})