// 创建echarts实例
var myCharts = echarts.init(document.getElementById("bar3"));
// 设置配置选项
var xDataArrBar3 = ['2006年','2009年','2010年','2011年','2012年','2013年','2015年','2020年','2025年',
'2030年','2040年','2050年'];
var yDataArrBar3 = [1.3,1.67,1.78,1.89,1.93,2.02,2.21,2.47,3,3.68,4.25,4.68];
var yDataArrNewLine = [1,2,3,4,5,6,7,8,9,10,11,12];
var option = {
    title:{
        text:'中国老龄化现状与趋势',
        left:'center'
    },
    // 显示标签值
    label:{
        show:'true'
    },
    legend:{
        data:['老年人口：亿','占人口总数']
    },
    xAxis:{
        type:'category',
        name:'年份',
        axisLabel:{
            rotate:0
        },
        data:xDataArrBar3
    },
    yAxis:[
        {
            type:'value',
        },{
            type:'value',
        }
    ],
    series:[   
        {
            name:'老龄化人数',
            type:'bar',
            yAxisIndex:0,
            data:yDataArrBar3  
        },{
            name:'老龄化占比',
            type:'line',
            yAxisIndex:1,
            data:yDataArrNewLine
        }
    ]
};
// 配置项赋给echarts选项
myCharts.setOption(option);