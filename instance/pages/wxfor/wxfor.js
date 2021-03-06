// pages/wxfor/wxfor.js
Page({

  /**
   * 页面的初始数据
   */
  myclick(e){
    console.log("点击了",e);
    var arr = this.data.list;
    arr.push({
      "district_name": "出租(III)",
      "name_zh": "展想广场",
      "name_en": "Welland Building",
      "area": "Area (5)",
      "age": 10
    })
    this.setData({
      list: arr
    })
  },
  data: {
    list: [{
      "district_name": "出租(III)",
      "name_zh": "偉利大廈",
      "name_en": "Welland Building",
      "area": "Area (5)",
      "category": "Essential bldg",
      "age": 36,
      "type": "Residential",
      "developer": "Sun Hung Kai",
      "HVAC": "central A/C",
      "address": "皇后大道中368號",
      "gfa": 10266,
      "eui": 73.3,
      "energy": [98251, 104282, 113705, 113474, 107762, 95586, 92043, 53949, 54447, 43364, 47514, 69157, 93938,
        104440, 104248, 105258, 96328, 98728, 79047, 56353, 52505, 43380, 47462, 54772, 64439, 75271, 81362, 80407,
        82407, 78622, 55611, 45354, 45160, 38440, 43583, 55042, 71329
      ],
      "predict": [89829, 94381, 94202, 91273, 88151, 69495, 50453, 49156, 40907, 45531, 57305, 72801],
      "eui_history": [85.5, 83.3, 80.9, 79.5, 77.5, 75.3, 74.2, 73.5, 73, 72.6, 72.6, 73.3],
      "location": "114.154272,22.283165"
    }, {
      "district_name": "旺角(I)",
      "name_zh": "威達商廈",
      "name_en": "Witty Commercial Building",
      "area": "Area (2)",
      "category": "Essential bldg",
      "age": 34,
      "type": "Commercial",
      "developer": "Sun Hung Kai",
      "HVAC": "central A/C",
      "address": "旺角通菜街1A-1L號",
      "gfa": 14017,
      "eui": 134.2,
      "energy": [206694, 267387, 247746, 253938, 208937, 169208, 327090, 99819, 86635, 79557, 91354, 150081, 178785,
        239362, 237686, 231374, 211085, 185896, 157599, 114026, 100092, 86071, 101641, 155116, 181838, 247228,
        234408, 251962, 245041, 183660, 124088, 85866, 78393, 58398, 93512, 118621, 159672
      ],
      "predict": [247966, 237724, 245429, 227705, 181997, 169092, 97578, 87000, 71149, 95862, 136029, 170246],
      "eui_history": [143.4, 143.1, 144.6, 147, 146.9, 144.5, 142.5, 140.9, 138.9, 138.4, 135.8, 134.2],
      "location": "114.175300,22.318495"
    }, {
      "district_name": "出租(III)",
      "name_zh": "香港商業中心",
      "name_en": "Hong Kong Plaza",
      "area": "Area (5)",
      "category": "Essential bldg",
      "age": 34,
      "type": "Commercial",
      "developer": "Sun Hung Kai",
      "HVAC": "central A/C",
      "address": "香港干諾道西188號",
      "gfa": 47090.5,
      "eui": 85.1,
      "energy": [374270, 473110, 465050, 448710, 403040, 361030, 312230, 249810, 216430, 188580, 225410, 307010,
        385250, 446370, 455660, 429590, 395100, 364410, 300040, 249930, 229340, 207520, 258710, 284740, 348400,
        394490, 448280, 468760, 434940, 379000, 300870, 228150, 217350, 185330, 253240, 287210, 409440
      ],
      "predict": [424887, 453535, 452362, 416343, 371142, 302487, 239020, 221193, 193268, 250425, 289687, 385062],
      "eui_history": [83.2, 83, 83.9, 84.7, 85, 85, 84.6, 84.3, 83.9, 83.7, 83.8, 85.1],
      "location": "114.140722,22.284302"
    }, {
      "district_name": "出租(III) - 旺角支部",
      "name_zh": "金禧商場",
      "name_en": "Grandeur Shopping Arcade",
      "area": "Area (5)",
      "category": "Essential bldg",
      "age": 33,
      "type": "Mall",
      "developer": "Sun Hung Kai",
      "HVAC": "central A/C",
      "address": "新界大圍道55-65號",
      "gfa": 2047.8,
      "eui": 475.8,
      "energy": [102259, 107585, 121241, 123832, 115923, 99507, 88693, 54216, 47983, 36396, 51053, 86344, 89551,
        112705, 104467, 100835, 101092, 90136, 74662, 62507, 57043, 51153, 65299, 85636, 95567, 118618, 121369,
        131491, 126076, 100026, 74686, 44006, 40808, 33509, 51772, 52388, 79507
      ],
      "predict": [114808, 115714, 119996, 116056, 96643, 77013, 51875, 47416, 39872, 56161, 69130, 86534],
      "eui_history": [491.8, 500, 515, 527.2, 532, 532, 523, 515.1, 506.4, 499.8, 483.6, 475.8],
      "location": "114.182693,22.371458"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    console.log(wx.getSystemInfoSync());
    // laoding
    wx.showLoading({
      title: "数据加载中。。。。"
    });
    setTimeout(res=>{
      wx.hideLoading();
    },2000);
    // 1.5秒后消失
    wx.showToast({
      title: 'success',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
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

  }
})
