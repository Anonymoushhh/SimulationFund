// pages/fundList/fundList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        "fundCode": "000000",
        "name": "**公司**指数非常牛逼的基金",
        "netValue": "1.0000",
        "gain": "1.0000"
      },
      {
        "fundCode": "******",
        "name": "**公司**指数基金",
        "netValue": "1.0000",
        "gain": "1.0000"
      },
      {
        "fundCode": "******",
        "name": "**公司**指数基金",
        "netValue": "1.0000",
        "gain": "1.0000"
      },
      {
        "fundCode": "******",
        "name": "**公司**指数基金",
        "netValue": "1.0000",
        "gain": "1.0000"
      }
    ],
    fundTypes: [{
        text: '混合型',
        value: 0
      },
      {
        text: '指数型',
        value: 1
      },
      {
        text: '债券型',
        value: 2
      }
    ],
    gain: [{
        text: '涨幅(日)',
        value: 0
      },
      {
        text: '涨幅(周)',
        value: 1
      },
      {
        text: '涨幅(月)',
        value: 2
      },
      {
        text: '涨幅(3个月)',
        value: 3
      },
      {
        text: '涨幅(6个月)',
        value: 4
      },
      {
        text: '涨幅(年)',
        value: 5
      },
      {
        text: '涨幅(2年)',
        value: 6
      },
      {
        text: '涨幅(3年)',
        value: 7
      }
    ],
    curType: 0,
    curGain: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  detail: function(e) {
    console.log(1);
  },

  onSwitchType: function(value) {
    console.log(value.detail);
    this.setData({
      curType: value.detail
    });
  },
  onSwitchGain: function (value) {
    console.log(value.detail);
    this.setData({
      curGain: value.detail
    });
  }
})