
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('pubu'));
var option = {
    animationDuration:2000,
    title: {
        text: '65岁及以上人口占比从7%上升到14%所需时间',
        left: 'center' ,
        textStyle: {
            fontSize: 17
        }
    },
    grid: {
        left: '3%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            if(params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data: ['支出', '年'],
        top: '10%',
        right: '10%',
        color:' #606b96'
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false,
        },
        data: [ "法国","瑞典","美国","英国","德国","中国","新加坡","韩国","日本"],
        
    },
    xAxis: {
        min: 1840,
        type: 'value',
        scale:true,
        interval:20
    },
    itemStyle: {
        normal: {
            label: {
                show:true,
                position:'middle'
            }
        }
    },
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderRadius:[6,6,6,6],
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [1864, 1887, 1942, 1929, 1932, 2001, 1999, 2000, 1970]
        },
        {
            name: '年',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function(value){
                        return value.data+'年';
                    },
                }
            },

            itemStyle: {
                normal: {
                    barBorderColor: '#FFFFFF',
                    barBorderRadius: [7, 7, 7, 7],
                    color: function (params) {
                        var colorList = [

                            // ['#4FF778', '#0BA82C'],

                            // ['#E5DD45', '#E8B11C'],

                            // ['#E8821C', '#E55445'],

                            ['#5052EE', '#AB6EE5'],

                            ['#23E5E5', '#2E72BF'],

                            ['#5052EE', '#AB6EE5'],

                            ['#23E5E5', '#2E72BF'],

                            ['#5052EE', '#AB6EE5'],

                        ];

                        var index = params.dataIndex;

                        //给大于颜色数量的柱体添加循环颜色的判断

                        if (params.dataIndex >= colorList.length) {
                            index = params.dataIndex - colorList.length;

                        }

                        return new echarts.graphic.LinearGradient(0, 0, 1, 0,

                            [

                                {
                                    offset: 0,

                                    color: colorList[index][0]

                                },

                                {
                                    offset: 1,

                                    color: colorList[index][1]

                                }

                            ]);

                    }
                },
                emphasis:{
                    color: new echarts.graphic.LinearGradient(
                        0,1,1,1,
                        [
                            {offset: 0,color: '#FF8888'},
                            {offset: 0.7,color: '#FF0000'},
                            {offset: 1,color: '#FF8888'},

                        ]
                    )
                }
            },
            data: [115, 85, 72, 46, 40, 24, 20, 18, 24]
        },
        // {
        //     name: '支出',
        //     type: 'bar',
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'bottom'
        //         }
        //     },
        //     data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        // }
    ]
};

myChart.setOption(option);
