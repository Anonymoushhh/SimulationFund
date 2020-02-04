// pages/fundCompany/fundCompany.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyName:"天弘基金管理有限公司",
    listData: [
      {
        "name": "公司简称",
        "value": "天弘基金"
      },
      {
      "name": "总经理",
      "value": "郭树强"
      },
      {
        "name": "管理规模",
        "value": "12720.06亿元"
      },
      {
        "name": "基金数量",
        "value": "102只"
      },
      {
        "name": "成立日期",
        "value": "2004-11-07"
      },
      {
        "name": "评级",
        "value": "5星评级"
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
      url: '/pages/fundDetail/fundDetail'
    })
  }
})