// 创建echarts实例
var myCharts = echarts.init(document.getElementById("line1"));
// 设置配置选项
var xDataArrLine1 = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2020,2022,2025,2035,2050];
var yDataArrLine1 = [7.90,8.10,8.30,8.50,8.90,9.10,9.40,9.70,10.10,10.50,10.80,11.40,13,14,15,22.3,30];
var qingshaonian = [19.75,19.42,18.95,18.48,16.60,16.45,16.46,16.41,16.50,16.40,16.39,16.38,15.5,14.0,13,11];
var option = {
    animationDuration:3000,
    title: {
        text: '我国各年龄段人口比例及预测',
        left: 'center',
        textStyle: {
            fontSize: 17
        }
    },
    grid: {
        left: '3%',
        bottom: '5%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    color: ['#2db7f5', '#ff6600', '#808bc6'],      //关键加上这句话，legend的颜色和折线的自定义颜色就一致了
    legend: {
        icon: 'rectangle',
        data: ['14岁及以下', '65岁及以上', '劳动人口'],
        top: '10%',
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#000'
        }
    },
    /*grid:{y:15},*/
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    yAxis: [
        {
            name: '百分比(%)',
            type: 'value',
            nameTextStyle: {
                fontSize:14
            },
            axisLabel: {
                fontSize:14
            },
            splitLine: { show: false },//去除网格线
            //boundaryGap : [0, 0.1],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000' //这里用参数代替了
                }
            },
        }
    ],
    xAxis: [
        {
            type: 'category',
            splitLine: { show: false },//去除网格线
            data: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2020,2022,2025,2035,2050],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000' //这里用参数代替了
                }
            },
        }
    ],
    series: [
        
        {
            name: '劳动人口',
            type: 'line',
            symbol: 'none', //这句就是去掉点的
            smooth: true,
            barWidth: '37',
            data: [72.35, 72.48, 72.75, 73.02, 74.5, 74.45, 74.14, 73.89, 73.4, 73.1, 72.81, 72.22, 70.7, 70.5, 70, 64.7, 59],
            //symbol:'none',
            //smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: { type: 'default', color: '#d5f0fd' },
                    lineStyle: { color: '#2db7f5' }
                }
            },
        },
        {
            name: '65岁及以上',
            type: 'line',
            symbol: 'none', //这句就是去掉点的
            smooth: true,
            barWidth: '37',
            data: [7.90,8.10,8.30,8.50,8.90,9.10,9.40,9.70,10.10,10.50,10.80,11.40,13,14,15,22.3,30],
            itemStyle: {
                normal: {
                    areaStyle: { type: 'default', color: '#fff5e6' },
                    lineStyle: { color: '#ff6600' }
                }
            }
        },
        {
            name: '14岁及以下',
            type: 'line',
            symbol: 'none', //这句就是去掉点的
            smooth: true,
            barWidth: '37',
            data: [19.75,19.42,18.95,18.48,16.60,16.45,16.46,16.41,16.50,16.40,16.39,16.38,16.3,15.5,14.0,13,11],
            itemStyle: {
                normal: {
                    areaStyle: { type: 'default', color: '#dcdfee' },
                    lineStyle: { color: '#808bc6' }
                }
            }
        }
    ]
};


// var option = {
//     animation:true,
//     animationDuration:4000,
//     title:{
//         text:'2006-2050年全国65岁以上人口比重变化趋势及预测',
//         left:'center'
//     },
//     label:{
//         show:'true'
//     },
//     grid: {
//         left: '3%',
//         bottom: '6%',
//         containLabel: true
//     },
//     xAxis:{
//         type:'category',
//         name:'年份',
//         axisLabel:{
//             rotate:0
//         },
//         data:xDataArrLine1
//     },
//     yAxis:{
//         type:'value',
//         name:'百分比（%）',
//         scale: true,
//     },
//     itemStyle: {
//         normal: {
//         areaStyle: {type: 'default',color:'#d5f0fd'},
//         lineStyle:{color:'#2db7f5'}
//         }
//         },
//     series:{
//         name:'老年人口比重',
//         type:'line',
//         data:yDataArrLine1,
//         symbolSize:8,
        
//     }
// };
// 配置项赋给echarts选项
myCharts.setOption(option);