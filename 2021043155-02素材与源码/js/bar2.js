// 创建echarts实例
var myCharts = echarts.init(document.getElementById("bar2"));
// 设置配置选项
var yDataArrBar2 = ['日本','意大利','德国','法国','英国','加拿大',
'澳大利亚','美国','俄罗斯','中国','巴西','土耳其','墨西哥','印度','印度尼西亚',
'南非','巴基斯坦','沙特阿拉伯'];
var xDataArrBar2 = [27,23,21,20,19,17,16,15,14,11,9,8,7,6,5,5,4,3];
var option = {
    title:{
        text:'全国人口老龄化率排行',
        left:'center'
    },
    label:{
        show:'true'
    },
    yAxis:{
        type:'category',
        name:'国家',
        axisLabel:{
            rotate:0
        },
        data:yDataArrBar2.reverse()
    },
    xAxis:{
        type:'value',
        name:'老龄化占比（%）',
    },
    series:{
    name:'老龄化占比',
    type:'bar',
    data:xDataArrBar2.reverse()  
    }
};
// 配置项赋给echarts选项
myCharts.setOption(option);