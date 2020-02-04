// pages/achievement/achievement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      "time": "近1周",
      "gain": "+1.00%",
      "avg": "+1.00%",
      "rank": "3.21%"
    },
    {
      "time": "近1月",
      "gain": "+1.00%",
      "avg": "+1.00%",
      "rank": "3.21%"
    },
    {
      "time": "近3月",
      "gain": "+1.00%",
      "avg": "+1.00%",
      "rank": "3.21%"
    },
    {
      "time": "近6月",
      "gain": "+1.00%",
      "avg": "+1.00%",
      "rank": "3.21%"
    },
      {
        "time": "近1年",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "近2年",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "近3年",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "今年以来",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "成立以来",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onClickLeft() {
    wx.redirectTo({
      url: '/pages/fundDetail/fundDetail'
    })
  }
})