// pages/fundManager/fundManager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        "name": "累计任职时间",
        "value": "268天"
      },
      {
        "name": "现任基金资产总规模",
        "value": "19.86亿元"
      },
      {
        "name": "任职期间最佳基金回报",
        "value": "97.50%"
      },
      {
        "name": "现任最佳基金回报",
        "value": "97.50%"
      },
      {
        "name": "任职起始日期",
        "value": "2019-05-11"
      }
    ],
    desc: "郑巍山先生:硕士研究生学历。曾任职于国元证券股份有限公司、景顺长城基金管理有限公司、兴业基金管理有限公司,从事投资、研究相关工作。2018年10月起加入银河基金,2018年11月起担任银河创新成长混合型证券投资基金、银河睿达灵活配置混合型证券投资基金的基金经理助理。"
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