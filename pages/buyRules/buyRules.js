// pages/buyRules/buyRules.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tradeStatus: [{
        "name": "申购状态",
        "value": "开放申购"
      },
      {
        "name": "赎回状态",
        "value": "开放赎回"
      },
      {
        "name": "定投状态",
        "value": "暂不支持"
      }
    ],
    tradeLimit: [{
        "name": "申购起点",
        "value": "100元"
      },
      {
        "name": "首次购买",
        "value": "100元"
      },
      {
        "name": "追加购买",
        "value": "100元"
      },
      {
        "name": "单日申购限额	",
        "value": "无限额"
      },
      {
        "name": "持仓上限",
        "value": "无限额"
      },
      {
        "name": "最小赎回份额",
        "value": "10份"
      },
      {
        "name": "部分赎回最低保留份额",
        "value": "10份"
      }
    ],
    purchaseSteps: [{
        text: '买入',
        desc: 'T日'
      },
      {
        text: '份额确认',
        desc: 'T+1'
      },
      {
        text: '收益查看',
        desc: 'T+2'
      }
    ],
    // 为了不显示active的步骤，所以设置了一个越界值
    curPurchaseStep: 3,
    redeemSteps: [{
        text: '卖出',
        desc: 'T日'
      },
      {
        text: '份额确认',
        desc: 'T+1'
      },
      {
        text: '到账',
        desc: 'T+2'
      }
    ],
    curRedeemStep: 3,
    managerRate: "1.00%",
    trusteeRate: "1.00%",
    serviceRate: "0.00%",
    purchaseRate: [{
      "applicableAmount": "小于100万元",
      "applicableTime": "",
      "rate": "0.08%"
    }, {
      "applicableAmount": "大于等于100万元，小于200万元",
      "applicableTime": "",
      "rate": "0.06%"
    }, {
      "applicableAmount": "大于等于200万元，小于500万元",
      "applicableTime": "",
      "rate": "0.04%"
    }, {
      "applicableAmount": "大于等于500万元",
      "applicableTime": "",
      "rate": "1000元"
    }],
    redeemRate: [{
      "applicableAmount": "null",
      "applicableTime": "	小于7天",
      "rate": "1.50%"
    }, {
      "applicableAmount": "null",
      "applicableTime": "大于等于7天，小于30天",
      "rate": "0.10%"
    }, {
      "applicableAmount": "null",
      "applicableTime": "大于等于30天，小于1年",
      "rate": "0.05%"
    }, {
      "applicableAmount": "null",
      "applicableTime": "大于等于1年，小于2年",
      "rate": "0.02%"
    }, {
      "applicableAmount": "null",
      "applicableTime": "大于等于2年",
      "rate": "0.00%"
    }]
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