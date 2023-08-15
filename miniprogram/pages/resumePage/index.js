// pages/resumePage/index.js
import * as echarts from "../../ec-canvas/echarts";
import apiFun from "../../utils/api";
import Dialog from '@vant/weapp/dialog/dialog';


Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    resumeId: 44,
    resume: {},
    labelProcessing: {
      backgroundIndustry: {
        administration: 15,
        advertisement: 8,
        build: 8,
        educationTranslate: 8,
        engineer: 8,
        finance: 8,
        internet: 8,
        legalAdvice: 8,
        logisticsProcure: 8,
        marketOperations: 18,
        medium: 8,
        product: 8,
        treatPharmacy: 8,
      },
      comprehensiveAbility: {
        educationalBackground: 4,
        honorsReceived: 4,
        languageAbility: 5,
        leadership: 4,
        serviceYears: 4,
        skill: 5,
      },
      educationTags: ["华中师范大学", "硕士", "市场营销"],
      jobTags: ["副总监", "市场及运营总监", "市场营销", "市场副总监"],
      skillTags: [
        "office",
        "管理信息系统",
        "消费者行为",
        "品牌传播",
        "数据分析",
        "品牌策略",
        "市场调查",
        "logo",
        "品牌策划",
        "前端销售",
        "媒体报道",
        "商务谈判",
        "宏观经济",
        "营销策略",
        "领导能力",
        "财务管理",
        "市场营销",
        "推广策划",
        "销售渠道",
        "人际关系",
        "市场开拓",
        "团队建设",
        "商业模式",
        "公众号",
        "策划",
        "沟通",
        "激励",
        "推广",
        "会计",
        "公关",
        "宣传",
        "运营",
        "营销",
        "规划",
        "目标",
        "监督",
        "管理",
        "培训",
        "团队",
        "协调",
      ],
    },
    userMsg: {
      id: "",
      name: "黎芸贵",
      dateOfBirth: "1984.04.06",
      graduationInstitution: "华中师范大学",
      sex: "女",
      age: "40",
      phone: "13800138000",
      mailBox: "service@500d.me",
      education: "硕士",
      major: "市场营销",
      expectedJob: "市场总监-专注品牌方",
      projectExperiences:
        "宇翰集团品牌升级发布会\nl 集团全新品牌logo及VI上线，在多渠道进行了传播；\nl 企业VIP客户群体逾60人，结合了线上发布、线下体验；\nl 后续媒体报道持续升温，子品牌结合明星代言人制造话题营销，为期3周；\n欧成商业模式发布会\nl 整场活动以会议+洽谈双重模式进行，首日以介绍欧成内部平台资源优势，政府背景优势等为主，一对多推介会\n进行推广普及；\nl 现场签署地方合作意向书，如：新疆、江西、浙江等优秀企业商户；\nl 以中国的波尔多为宣传点，主推旗下新疆大型项目，制造营销、品牌热点。\n锦伟投资控股集团6A自媒体生态圈建设\nl 本项目重构了公司现有微信企业号的功能与架构。\nl 提高公众号的关注粉丝量的同时，对于有客户进行统一宣传，统一管理。",
      workYears: 14,
      workExperiences: [
        {
          startTime: "2015.12",
          endTime: "至今",
          jobName: "副总监",
          companyName: "锦伟控股集团",
          description:
            "l 负责协助集团旗下事业部开展各项工作，制定品牌传播方案；\nl 结合集团与事业部发展，制定营销策略、广告策略、品牌策略和公关策略，并组织推进执行；\nl 制定和执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析与撰写报告；\nl 研究行业发展动态，定期进行市场调查,为产品更新提供建议。",
        },
        {
          startTime: "2013.12",
          endTime: "2015.12",
          jobName: "市场及运营总监",
          companyName: "欧成有限公司",
          description:
            "l 根据公司发展情况进行战略调整，配合前端销售部门搭建销售渠道；\nl 研究行业发展动态，定期进行市场调查,为产品更新提供建议；\nl 负责公司部门(营运、品牌策划)制度规范，负责组织及监管市场部关于对外合作、推广策划以相关工作的落实。",
        },
        {
          startTime: "2009.12",
          endTime: "2013.12",
          jobName: "市场副总监",
          companyName: "宇翰俱乐部",
          description:
            "l 负责事业部产品对外推广和宣传，制定各种整合营销的活动；\nl 执行媒体投放计划，跟踪和监督媒体投放效果，进行数据分析撰写报告；\nl 向市场总监提供营销支持，并协助相关的公关事宜。",
        },
      ],
      skillsCertificate:
        "普通话一级甲等\n通过全国计算机二级考试，熟练运用office相关软件。\n熟练使用绘声绘色软件，剪辑过各种类型的电影及班级视频。\n大学英语四/六级（CET-4/6），良好听说读写能力，快速浏览英语专业书籍。",
      awardsHonors:
        "2006年 新长城华中师范大学自强社“优秀社员”\n2005年 三下乡”社会实践活动“优秀学生”\n2005年 华中师范大学学生田径运动会10人立定跳远团体赛第三名\n2005年 学生军事技能训练“优秀学员”\n2005年 华中师范大学盼盼杯烘焙食品创意大赛优秀奖\n2004年 西部高校大学生主题征文一等奖\n2003年 华中师范大学“点燃川大梦 畅享我青春”微博文征集大赛二等奖",
      labelProcessing: {
        backgroundIndustry: {
          product: 8,
          engineer: 8,
          advertisement: 8,
          internet: 8,
          build: 8,
          educationTranslate: 8,
          finance: 8,
          medium: 8,
          logisticsProcure: 8,
          treatPharmacy: 8,
          marketOperations: 18,
          administration: 15,
          legalAdvice: 8,
        },
        comprehensiveAbility: {
          honorsReceived: 5,
          educationalBackground: 4,
          languageAbility: 5,
          leadership: 4,
          serviceYears: 0,
          skill: 5,
        },
        skillTags: [
          "ofce",
          "管理信息系统",
          "消费者行为",
          "品牌传播",
          "数据分析",
          "品牌策略",
          "市场调查",
          "logo",
          "品牌策划",
          "前端销售",
          "媒体报道",
          "商务谈判",
          "宏观经济",
          "营销策略",
          "领导能力",
          "财务管理",
          "市场营销",
          "推广策划",
          "销售渠道",
          "人际关系",
          "市场开拓",
          "团队建设",
          "商业模式",
          "公众号",
          "策划",
          "沟通",
          "激励",
          "推广",
          "会计",
          "公关",
          "宣传",
          "运营",
          "营销",
          "规划",
          "目标",
          "监督",
          "管理",
          "培训",
          "团队",
          "协调",
        ],
        educationTags: ["华中师范大学", "硕士", "市场营销"],
        jobTags: ["副总监", "市场及运营总监", "市场营销", "市场副总监"],
      },
    },
    list:{},
    showSchool:false,
    state1: {
      lights: ["熟练掌握英语", "技术达标"],
      warns: ["本科学历异常"],
      isVisit: "first",
    },
    state: {
      lights: [
        "院校背景不错，本科学历，毕业于211院校",
        "优秀互联网企业从业经历",
        "拥有良好的团队建设能力与协调能力,具有优秀的团队管理能力,积累了一定团队管理经验与能力",
        "熟练掌握英语，能进行基本的沟通",
      ],
      predict: [
        "结合工作经验、学历、行业、地域等因素，该求职者的市场薪资约为15000 —— 20000元/月。",
        "小析智能助手从简历中发现了明显的跳槽理由，此求职者短期离职可能性较高",
      ],
      warns: ["第一段工作时间晚于毕业时间十个月"],
      tags: {
        basic: [
          { tag: "26到30岁", type: "age" },
          { tag: "广东广州", type: "current_location" },
          { tag: "广东广州", type: "expect_location" },
          { tag: "高级", type: "level" },
          { tag: "5-10年经验", type: "experience" },
        ],
        education: [
          { tag: "本科学历", type: "degree" },
          { tag: "市场营销", type: "major" },
        ],
        others: [
          { tag: "英语", type: "language", level: "基本掌握" },
          { tag: "普通话一级甲等", type: "certificate" },
        ],
        professional: [
          { tag: "互联网/软件", type: "industry" },
          { tag: "销售/客服/市场-市场-市场营销", type: "standard_title" },
        ],
        skills: [
          { tag: "需求分析", type: "professional_skill", subclass: "产品" },
          { tag: "建设项目", type: "professional_skill", subclass: "其它" },
          { tag: "功能设计", type: "professional_skill", subclass: "产品" },
          { tag: "策划", type: "professional_skill", subclass: "运营" },
          {
            tag: "数据分析能力",
            type: "professional_skill",
            subclass: "数据分析",
          },
          { tag: "OFFICE", type: "professional_skill", subclass: "其它" },
          { tag: "服务质量", type: "professional_skill", subclass: "其它" },
          { tag: "销售技巧", type: "professional_skill", subclass: "销售" },
          { tag: "电商平台", type: "professional_skill", subclass: "电子商务" },
          { tag: "宏观经济", type: "professional_skill", subclass: "其它" },
        ],
      },
    },
    option: {
      option1: {
        radar: {
          indicator: [
            { name: "语言能力", color: "#6873E3" },
            { name: "所获荣誉", color: "#6873E3" },
            { name: "教育背景", color: "#6873E3" },
            { name: "工作能力", color: "#6873E3" },
            { name: "领导力", color: "#6873E3" },
            { name: "社会能力", color: "#6873E3" },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [10, 30, 200, 300, 500, 180],
                name: "Allocated Budget",
              },
            ],
            lineStyle: {
              color: "#6873E3",
            },
            textStyle: "14rpx",
          },
        ],
      },

      option2: {
        radar: {
          indicator: [
            { name: "互联网", max: 1000, color: "#6873E3" },
            { name: "金融", max: 1000, color: "#6873E3" },
            { name: "产品", max: 1000, color: "#6873E3" },
            { name: "互联网", max: 1000, color: "#6873E3" },
            { name: "生产/采购/物流", max: 1000, color: "#6873E3" },
            { name: "人事/行政/高级管理", max: 1000, color: "#6873E3" },
            { name: "运营/客服/销售/市场", max: 1000, color: "#6873E3" },
            { name: "工程师", max: 1000, color: "#6873E3" },
            { name: "其他", max: 1000, color: "#6873E3" },
            { name: "教育/翻译/服务业", max: 1000, color: "#6873E3" },
            { name: "生物/医疗/制药/护理", max: 1000, color: "#6873E3" },
            { name: "咨询/法律/公务员", max: 1000, color: "#6873E3" },
            { name: "建筑/房地产", max: 1000, color: "#6873E3" },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [
                  300,
                  300,
                  300,
                  800,
                  300,
                  900,
                  200,
                  300,
                  300,
                  300,
                  300,
                  300,
                  300,
                ],
              },
            ],
            lineStyle: {
              color: "#6873E3",
            },
          },
        ],
        label: {
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontSize: 18, // 指定字体大小
          },
        },
      },
    },
    ec: {
      lazyLoad: true, // 延迟加载组件
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event) {

  },

  onLoad(options) {
    this.setData({
      resumeId: options.id,
    });
    console.log(this.data.resumeId);
    this.getResume();
    this.initChart();
    
  },

  updateShow:function (params) {
    console.log(121212)
    this.setData({
      showSchool:!this.data.showSchool
    })
  },

  getResume: function (params) {
     apiFun.resume.analysis(this.data.resumeId).then((res) => {
       console.log(res)
       this.setData({
         resume: res.data,
         labelProcessing: JSON.parse(res.data.labelProcessing),
         userMsg: JSON.parse(res.data.content),
       });

       const userMsg = this.data.userMsg
       userMsg.resumeHighlights = JSON.parse(this.data.userMsg.resumeHighlights),
       userMsg.riskWarning=JSON.parse(this.data.userMsg.riskWarning),
       userMsg.intelligentPrediction =JSON.parse(this.data.userMsg.intelligentPrediction),
       this.setData({
        userMsg : userMsg
       
       })
       
       console.log(this.data.resume);
       let labelProcessing = this.data.labelProcessing;

       for (let key in labelProcessing.backgroundIndustry) {
         if (labelProcessing.backgroundIndustry[key] < 8) {
           labelProcessing.backgroundIndustry[key] = 8;
         }
         if (labelProcessing.backgroundIndustry[key] > 20) {
          labelProcessing.backgroundIndustry[key] = 20;
        }
       }
       this.setData({
         labelProcessing: labelProcessing,
       });
     });
     apiFun.resume.graph(this.data.resumeId).then((res) => {
       console.log(res.data);
       this.setData({
         list:res.data.schoolVoList
       })
     });
  },

  initChart: function (params) {
    setTimeout(() => {
      this.selectComponent("#chart-dom-donut").init(
        (canvas, width, height, dpr) => {
          // 初始化 ECharts 实例
          const chart = echarts.init(canvas, "macarons", {
            width: width,
            height: height,
            devicePixelRatio: dpr,
          });
          // 配置选项和数据
          chart.setOption(this.data.option.option1);
          // 返回 ECharts 实例，用于其他操作
          return chart;
        }
      );
      this.selectComponent("#chart-dom").init((canvas, width, height, dpr) => {
        // 初始化 ECharts 实例
        const chart = echarts.init(canvas, "macarons", {
          width: width,
          height: height,
          devicePixelRatio: dpr,
        });
        // 配置选项和数据
        chart.setOption(this.data.option.option2);
        // 返回 ECharts 实例，用于其他操作
        return chart;
      });
    }, 0);
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
