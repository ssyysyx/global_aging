// 创建echarts实例
var myCharts = echarts.init(document.getElementById("line1"));
// 设置配置选项
var xDataArrLine1 = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
var yDataArrLine1 = [7.90,8.10,8.30,8.50,8.90,9.10,9.40,9.70,10.10,10.50,10.80,11.40];
var option = {
    title:{
        text:'2006-2007年全国65岁以上人口比重变化趋势',
        left:'center'
    },
    label:{
        show:'true'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:{
        type:'category',
        name:'年份',
        axisLabel:{
            rotate:0
        },
        data:xDataArrLine1
    },
    yAxis:{
        type:'value',
        name:'百分比（%）'
    },
    series:{
        name:'老年人口比重',
        type:'line',
        data:yDataArrLine1  
    }
};
// 配置项赋给echarts选项
myCharts.setOption(option);