import apiFun from "../../utils/api";

// pages/talentPool/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    option1: [],
    option2: [
      { text: "年龄不限", value: 0 },
      { text: "16-20岁", value: 1 },
      { text: "21-25岁", value: 2 },
      { text: "26-30岁", value: 3 },
      { text: "31-35岁", value: 4 },
      { text: "36-40岁", value: 5 },
      { text: "41-45岁", value: 6 },
      { text: "46-50岁", value: 7 },
      { text: "50岁以上", value: 8 },
    ],
    option3: [
      { text: "性别不限", value: 0 },
      { text: "男", value: 1 },
      { text: "女", value: 2 },
    ],
    option4: [
      { text: "工作经验不限", value: 0 },
      { text: "无经验", value: 1 },
      { text: "1年以下", value: 2 },
      { text: "1-3年", value: 3 },
      { text: "3-5年", value: 4 },
      { text: "5-7年", value: 5 },
      { text: "8-10年", value: 6 },
      { text: "10年以上", value: 7 },
    ],
    value1: 65,
    value2: 0,
    value3: 0,
    value4: 0,
    show: false,
    searchValue:{
      basic: {
        name: null,
        sex: null,
        minAge: null,
        maxAge: null,
        major: null,
        expectedJob: null,
        graduationInstitution: null,
      },
      contact: {
        email: null,
        phone: null,
      },
      workYear: {
        lowerLimit: null,
        upperLimit: null,
      },
      workExperience: {
        company: null,
        jobName: null,
        description: null,
      },
      other: {
        skillsCertificate: null,
        projectExperiences: null,
        awardsHonors: null,
      },
      fullText: null,
      processStage: null,
      // total: 200,
      pageNum: 1,
      pageSize: 7,
    },

    state: {
      education: {
        0: "博士",
        1: "硕士",
        2: "本科",
        3: "大专",
        4: "高中及以下",
      },
      age: {
        1: 16,
        2: 21,
        3: 26,
        4: 31,
        5: 36,
        6: 41,
        7: 46,
      },
      work: {
        3: 1,
        4: 3,
        5: 5,
        6: 8,
      },
    },
    location: "杭州",
    ageText1: "",
    ageText2: "",
    payText1: "",
    payText2: "",
    priceRange: ["全部", "0-50", "50-100", "100-200"], // 价格范围选项
    selectedPrice: "全部", // 已选择的价格范围
    brands: ["全部", "品牌A", "品牌B", "品牌C"], // 品牌选项
    selectedBrand: "全部", // 已选择的品牌,
    workTime: [
      { time: "不限", isSelect: true },
      { time: "无", isSelect: true },
      { time: "1~3年", isSelect: false },
      { time: "3~10年", isSelect: false },
      { time: "10~20年", isSelect: false },
      { time: "20年以上", isSelect: false },
    ],
    tags: [
      { name: "形象好", select: false },
      { name: "能出差", select: false },
      { name: "幽默风趣", select: false },
      { name: "技术精悍", select: false },
      { name: "高学历", select: false },
      { name: "经验丰富", select: false },
      { name: "接受加班", select: false },
      { name: "海归", select: false },
      { name: "会开车", select: false },
      { name: "外语好", select: false },
      { name: "性格开朗", select: false },
      { name: "人脉广", select: false },
    ],
    selectedButtonIndexes: [1, 0],
    result: ["a", "b"],
    lights: ["熟练掌握英语", "多年工作经验", "技术过硬", "高学历", "大厂经历"],
    list: [
      {
        name: "张明鹏",
        phone: "17742602519",
        email: "2390864551@qq.com",
        englishname: "ChenJingDe",
        country: "中国",
        area: "湖南省长沙市",
        gender: "男",
        age: 24,
        degree: "本科",
        experience: 2,
        work: "前端软件开发工程师",
        goal: "全职",
      },
      {
        name: "王佳婷",
        phone: "19806520243",
        email: "248568722@qq.com",
        englishname: "AngelBaby",
        country: "中国",
        area: "上海市",
        gender: "女",
        age: 22,
        degree: "硕士",
        experience: 2,
        work: "后端开发人员",
        goal: "实习",
      },
      {
        name: "李伟强",
        phone: "19806520243",
        email: "248568722@qq.com",
        englishname: "ChenWeiTing",
        country: "中国",
        area: "上海市",
        gender: "男",
        age: 22,
        phone: "15905895217",
        email: "2394412110@qq.com",
        degree: "硕士",
        experience: 2,
        work: "运营经理",
        goal: "兼职",
      },
      {
        name: "杨晓静",
        phone: "19806520243",
        email: "248568722@qq.com",
        englishname: "ChenXiang",
        country: "中国",
        area: "上海市",
        gender: "男",
        age: 22,
        phone: "15905895217",
        email: "2394412110@qq.com",
        degree: "硕士",
        experience: 2,
        work: "产品设计",
        goal: "兼职",
      },
      {
        name: "王俊杰",
        phone: "19806520243",
        email: "248568722@qq.com",
        englishname: "LiShan",
        country: "中国",
        area: "上海市",
        gender: "男",
        age: 22,
        phone: "15905895217",
        email: "2394412110@qq.com",
        degree: "硕士",
        experience: 2,
        work: "平面设计师",
        goal: "兼职",
      },
    ],
  },

  updateSearchValue(e){
    this.setData({
      'searchValue.fullText':e.detail.value
    })
  },

  search() {
    const searchText = this.data.searchValue;
    searchText.processStage = this.data.value1;
    if (this.data.value2 >= 1 && this.data.value2 <= 7) {
      searchText.basic.minAge = this.data.state.age[this.data.value2];
      searchText.basic.maxAge = this.data.state.age[this.data.value2] + 4;
    } else if (this.data.value2 === 8) {
      searchText.basic.minAge = 50;
    }
    if (this.data.value4 >= 3 && this.data.value4 <= 6) {
      searchText.workYear.lowerLimit = this.data.state.work[this.data.value4];
      searchText.workYear.upperLimit = this.data.state.work[this.data.value4] + 2;
    } else if (this.data.value2 === 1) {
      searchText.workYear.upperLimit = 0
    }else if (this.data.value2 === 2) {
      searchText.workYear.upperLimit = 1
    }else if (this.data.value2 === 7) {
      searchText.workYear.lowerLimit = 10 
    }
    searchText.basic.sex=(this.data.value3===2)
    this.setData({
      searchValue:searchText
    });
    apiFun.search.conditionSearch(searchText).then(res=>{
      console.log(searchText)
      console.log(res)
      this.setData({
        list:res.data.list
      })
      let list = this.data.list
    console.log(list)
    list.forEach((item)=>{
      console.log(item.content)
      item.content = JSON.parse(item.content)
      console.log(item.content)
    })
    this.setData({
      list:list
    })
    }) 
    
  },

  close() {
    this.setData({
      show: false,
    });
  },
  open() {
    this.setData({
      show: true,
    });
  },
  // select(event) {
  //         const index = event.currentTarget.dataset.index;
  //         const selectedButtonIndexes = this.data.selectedButtonIndexes;

  //         // 判断当前点击的按钮是否已选中，如果已选中则取消选中，否则选中按钮
  //         if (selectedButtonIndexes.includes(index)) {
  //           const indexToRemove = selectedButtonIndexes.indexOf(index);
  //           selectedButtonIndexes.splice(indexToRemove, 1);
  //         } else {
  //           selectedButtonIndexes.push(index);
  //         }
  //         console.log(this.data.selectedButtonIndexes)
  //         this.setData({ selectedButtonIndexes });
  // },
  
  updateValue1(e){
    const value = e.currentTarget.dataset.value;
    this.setData({
      value1:e.detail
    })
  },
  updateValue2(e){
    this.setData({
      value2:e.detail
    })
  },
  updateValue3(e){
    this.setData({
      value3:e.detail
    })
  },
  updateValue4(e){
    this.setData({
      value4:e.detail
    })
  },
  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getStatus();
    apiFun.search.conditionSearch(this.data.searchValue).then(res=>{
      console.log(this.data.searchValue)
      console.log(res)
      this.setData({
        list:res.data.list
      })
      let list = this.data.list
    console.log(list)
    list.forEach((item)=>{
      console.log(item.content)
      item.content = JSON.parse(item.content)
      console.log(item.content)
    })
    this.setData({
      list:list
    })
    }) 
  },

  getStatus: function () {
    apiFun.process.flowPathNotOrder().then((res) => {
      console.log(res.data);
      const option1 = [];
      res.data.forEach((item) => {
        option1.push({ value: item.id, text: item.name });
      });
      console.log(option1);
      if (res.data.length !== 0)
        this.setData({
          option1: option1,
          value1: res.data[0].id,
        });
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
