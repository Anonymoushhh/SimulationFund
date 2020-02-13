// pages/buyRules/buyRules.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultData:"无",
    fundCode: undefined,
    active: 0,
    tradeStatus: [],
    tradeLimit: [],
    // 为了不显示active的步骤，所以设置了一个越界值
    curPurchaseStep: 3,
    redeemSteps: [],
    curRedeemStep: 3,
    managerRate: "---",
    trusteeRate: "---",
    serviceRate: "---",
    purchaseRate: [],
    redeemRate: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      fundCode: options.fundCode
    })
    this.queryBuyRules()
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
  queryBuyRules(){
    wx.request({
      url: app.globalData.baseProductUrlDev + "buyRules/buyRules",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        fundCode: this.data.fundCode
      },
      success: (res) => {
        console.log(res)
        var data = res.data.data;
        this.setData({
          tradeStatus:data.tradeStatusVO.listData,
          tradeLimit: data.tradeLimitVO.listData,
          purchaseSteps: data.purchaseStepsVO.listData,
          redeemSteps: data.redeemStepsVO.listData,
          managerRate: data.ratesVO.managerRate,
          trusteeRate: data.ratesVO.trusteeRate,
          serviceRate: data.ratesVO.serviceRate,
          purchaseRate: data.ratesVO.purchaseRate,
          redeemRate: data.ratesVO.redeemRate
        });
      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  onClickLeft() {
    wx.redirectTo({
      url: '/pages/fundDetail/fundDetail?fundCode=' + this.data.fundCode
    })
  }
})