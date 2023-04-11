// 1.创建echarts实例
var myChart = echarts.init(document.getElementById("pie1"));
// 2.设置配置选项
var pieData = [
    {
        name:'60-70岁',
        value:1.387
    },
    {
        name:'70-80岁',
        value:0.55
    },
    {
        name:'80-90岁',
        value:0.17
    }
];
var option = {
    title:{
        text:'中国60岁以上人口年龄结构',
        left:'center'
    },
    series:{
        type:'pie',
        data:pieData
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
};

// 3.设置配置选项
myChart.setOption(option);