import Toast from '../../dist/toast/toast';
// pages/fundDetail/fundDetial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unitNet: "1.0000",
    estimatedNet: "1.0023",
    accumulatedNet: "1.0000",
    date: "2020-01-23",
    dateTime: "2020-01-23 15:00",
    fundName: "银河创新成长混合",
    fundCode: "519674",
    type: "混合型",
    risk: "中高风险",
    minPurchaseAmount: "1000元起购",
    star: "5星评级",
    isGainToday: true,
    isGainLastDay: true,
    gainToday: "+2.30%",
    gainLastDay: "+0.03%",
    managerName: "郑巍山",
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
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onClickLeft() {
    wx.redirectTo({
      url: '/pages/fundList/fundList'
    })
  },
  more() {
    wx.redirectTo({
      url: '/pages/achievement/achievement'
    })
  },
  addOptional() {
    Toast.fail('该基金暂不支持加入自选！');
  }
})