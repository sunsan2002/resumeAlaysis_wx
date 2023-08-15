// pages/dataWatch/index.js
import * as echarts from '../../ec-canvas/echarts';


Page({

    /**
     * 页面的初始数据
     */
    data: {
      ec: {
        lazyLoad: true // 延迟加载组件
      },
      chartData: {
        // 配置项和数据
        tooltip: {},
        grid: {
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: false // 隐藏坐标轴轴线
          },
          axisTick: {
            show: false // 隐藏坐标轴刻度线
          },
          splitLine: {
            show: false // 隐藏坐标轴分割线
          }
        },
        yAxis: {
          type: 'category',
          data: [ '需求数' ,'预约面试数', '初筛数','投递数'],
          axisLabel: {
            interval: 0, // 坐标轴标签全部显示
            margin: 20, // 标签与图形的距离
            textStyle: {
              color: '#333' // 标签文字颜色
            }
          },
          axisLine: {
            show: false // 隐藏坐标轴轴线
          },
          axisTick: {
            show: false // 隐藏坐标轴刻度线
          }
        },
        series: [{
          name: '数据',
          type: 'bar',
          barWidth: 15,
          barGap: '100%', // 柱间距离设置为负数，实现堆叠效果
          center:['47%','40%'],
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = ['#39ECC5', '#21E1D8', '#BA8AF9', '#FC82A2',];
                return colorList[params.dataIndex % colorList.length];
              },
              barBorderRadius: [10, 10, 10, 10] // 圆角半径
            }
          },
          label: {
            show: true, // 显示柱状图标签
            position: 'right', // 标签位置
            color: '#333', // 标签颜色
            fontSize: 10, // 标签字号
            formatter: '{c}'
          },
          data: [30, 116, 214, 412]
        }]
      },
      chartData2: {
        // 配置项和数据
        title: {
          text: '学历分布',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '学历分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '高中及以下' },
              { value: 310, name: '专科' },
              { value: 274, name: '博士' },
              { value: 235, name: '硕士' },
              { value: 400, name: '本科' }
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: '#FC82A2'
            },
            labelLine: {
              lineStyle: {
                color: '#3EBCFE'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
    },
    chartData3:{
      title:{
        text: '年龄分布',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        color:'#6873E3',
        data: ['25以下', '25-30', '30-35', '35-40', '40-45', '45以上']
      },
      yAxis: {
        type: 'value',
        color:'#6873E3'
      },
      series: [
        {
          data: [60,129 , 190, 174, 140, 130],
          type: 'line',
          areaStyle: {},
          smooth:true,
          color:'#6873E3',
          
        }
      ]
    },
    chartData4:{
      title:{
        text: '性别比例',
        left: 'center',
        top: 10,
        textStyle: {
          color: '#ccc'
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          center:['49%','60%'],
          label: {
            show: false,
            show: true,
            formatter(param) {
              // correct the percentage
              return param.name + ' (' + param.percent * 2 + '%)';
            }
          },
          startAngle: 180, // 起始角度，可以调整半圆的位置
          data: [
            { value: 55, name: '男性' ,itemStyle:{color:'#959DEB'}},
            { value: 45, name: '女性' ,itemStyle:{color:'#FC82A2'}},
            { value: 100, name: '', itemStyle: { color: 'transparent' },label:{
              show:false
            } }, // 添加一个空白项，使半圆形成
          ],
        },
      ],
    },
    chartData5:{
      title: {
        text: '工作经验',
        left: 'center',
        top: 0,
        textStyle: {
          color: '#ccc'
        }
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          center:['50%','50%'],
          data: [
            { value: 1048, name: '无工作经验' ,itemStyle:{color:'#FDA6AD'}},
            { value: 735, name: '1~3年' ,itemStyle:{color:'#3DBCFE'}},
            { value: 580, name: '3~10年' ,itemStyle:{color:'#3EF0CA'}},
            { value: 484, name: '10~20年' ,itemStyle:{color:'#FDBE31'}},
            { value: 300, name: '20年以上',itemStyle:{color:'#959DEB'} }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    },
    onLoad: function () {
      // 初始化图表
      this.initChart();
    },
    onReady: function () {
      // 使用 setData 函数渲染图表
      this.setData({
        isLoaded: true
      });
    },
    initChart: function () {
      // 使用 setTimeout 函数延迟渲染图表
      setTimeout(() => {
        this.selectComponent('#chart-dom-line').init((canvas, width, height, dpr) => {
          // 初始化 ECharts 实例
          const chart = echarts.init(canvas, 'macarons', {
            width: width,
            height: height,
            devicePixelRatio: dpr
          });
          console.log(111)
          // 配置选项和数据
          chart.setOption(this.data.chartData);
          console.log(chart)
          // 返回 ECharts 实例，用于其他操作
          return chart;
        });
        this.selectComponent('#chart-dom-pie').init((canvas, width, height, dpr) => {
          // 初始化 ECharts 实例
          const chart = echarts.init(canvas, 'macarons', {
            width: width,
            height: height,
            devicePixelRatio: dpr
          });
          // 配置选项和数据
          chart.setOption(this.data.chartData2);
          // 返回 ECharts 实例，用于其他操作
          return chart;
        });
        this.selectComponent('#chart-dom-line2').init((canvas, width, height, dpr) => {
          // 初始化 ECharts 实例
          const chart = echarts.init(canvas, 'macarons', {
            width: width,
            height: height,
            devicePixelRatio: dpr
          });
          // 配置选项和数据
          chart.setOption(this.data.chartData3);
          // 返回 ECharts 实例，用于其他操作
          return chart;
        });
        this.selectComponent('#chart-dom-half-donut').init((canvas, width, height, dpr) => {
          const chart = echarts.init(canvas, null, {
            width: width,
            height: height,
            devicePixelRatio: dpr,
          });
          canvas.setChart(chart);
          chart.setOption(this.data.chartData4)
          return chart;
        });
        this.selectComponent('#chart-dom-donut').init((canvas, width, height, dpr) => {
          const chart = echarts.init(canvas, null, {
            width: width,
            height: height,
            devicePixelRatio: dpr,
          });
          canvas.setChart(chart);
          chart.setOption(this.data.chartData5)
          return chart;
        })

      }, 0);
    },
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})