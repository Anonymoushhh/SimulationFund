// pages/fundList/fundList.js
var util = require('../../utils/util.js')
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    fundTypes: [{
        text: '股票型',
        value: 0
      },
      {
        text: '债券型',
        value: 1
      },
      {
        text: '货币型',
        value: 2
      },
      {
        text: '混合型',
        value: 3
      },
      {
        text: '保本型',
        value: 4
      },
      {
        text: 'ETF',
        value: 5
      },
      {
        text: 'QDII',
        value: 6
      },
      {
        text: '分级基金',
        value: 7
      },
      {
        text: 'FOF',
        value: 8
      },
      {
        text: '指数型',
        value: 9
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
      },
      {
        text: '今年来',
        value: 8
      },
      {
        text: '成立以来',
        value: 9
      }
    ],
    curType: 0,
    curGain: 0,
    curPage: 1,
    pageSize: 10,
    sortType: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getRank()
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

  onDetail: function(e) {
    console.log(e.currentTarget.dataset);
    var fundCode = e.currentTarget.dataset.fundcode;
    var fundName = e.currentTarget.dataset.fundname;
    wx.redirectTo({
      url: '../fundDetail/fundDetail?fundCode=' + fundCode+'&fundName='+fundName
    })
  },
  getRank() {
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundList/rank",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        sortType: this.data.sortType,
        fundType: this.data.curType,
        gainType: this.data.curGain,
        curPage: this.data.curPage,
        pageSize: this.data.pageSize
      },
      success: (res) => {
        this.setData({
          listData: res.data.data
        });

      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  onSwitchType: function(value) {
    this.setData({
      curType: value.detail
    });
    this.getRank()
  },
  onSwitchGain: function(value) {
    this.setData({
      curGain: value.detail
    });
    this.getRank()
  },
})