// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('bar_0'));

// 指定图表的配置项和数据
var yearlist = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
var countryList = ['日本', '德国', '意大利', '希腊', '葡萄牙', '拉脱维亚', '瑞典', '保加利亚'];
var option = {
    timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 1500,
        data: yearlist,
        label: {
            fontSize: 7
        },
        bottom: 0,
        left: 3,
        right: 9,
    },
    baseOption: {
        dataset: {
            source: [
                ['year', '日本', '德国', '意大利', '希腊', '葡萄牙', '拉脱维亚', '瑞典', '保加利亚'],
                ['2010', 23.4, 20.7, 20.8, 19.5, 19.1, 18.6, 18.6, 18.5],
                ['2011', 23.8, 20.8, 21, 19.7, 19.4, 18.8, 18.8, 18.7],
                ['2012', 24.5, 20.9, 21.2, 20, 19.8, 19, 19, 19.1],
                ['2013', 25.3, 21.1, 21.6, 20.5, 20.3, 19.3, 19.4, 19.7],
                ['2014', 25.8, 21.2, 21.8, 20.7, 20.7, 19.5, 19.6, 19.9],
                ['2015', 25.3, 21.1, 21.6, 20.5, 20.3, 19.3, 19.4, 19.7],
                ['2016', 27.3, 21.4, 22.6, 21.5, 21.7, 19.9, 20, 20.9],
                ['2017', 27.7, 21.5, 22.8, 21.7, 22.1, 20, 20.1, 21.1],
                ['2018', 27.8, 21.6, 22.9, 21.8, 22.2, 20, 20.1, 21.2],
            ]
        },

        title: {
            text: '2010年世界各国65岁以上人口比率热榜',
            left: 'center',
            textStyle: {
                fontSize: 17
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        legend: {
        },
        grid: {
            left: '3%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: countryList,
                // axisPointer: {
                // type: 'shadow',
                // boundaryGap:false
                // },

                axisLabel: {
                    // formatter: function (value) {
                    //     return '{' + value + '| }\n{value|' + value + '}';
                    // },

                    fontSize: 9
                    // rich: {
                    //     value: {
                    //         // lineHeight: 30,
                    //         fontSize: 18,
                    //         align: 'center'
                    //     },
                    //     USA: {
                    //         // height: 10,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.usa
                    //         }
                    //     },
                    //     China: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.chn
                    //         }
                    //     },
                    //     Japan: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.jpn
                    //         }
                    //     },
                    //     Germany: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.deu
                    //         }
                    //     },
                    //     UK: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.gbr
                    //         }
                    //     },
                    //     France: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.fra
                    //         }
                    //     },
                    //     Italy: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.ita
                    //         }
                    //     },
                    //     India: {
                    //         // height: 40,
                    //         align: 'center',
                    //         backgroundColor: {
                    //             image: flagIcons.ind
                    //         }
                    //     },
                    // }

                }

            },
        ],
        yAxis: [
            {
                name: '百分比(%)',
                type: 'value',
                nameTextStyle: {
                    fontSize: 14
                },
                axisLabel: {
                    fontSize: 14
                },
                scale: true,
                min:18,
            },
        ],
        series: [
            {
                //name: 'GDP',
                type: 'bar',

                seriesLayoutBy: 'row',
                encode: {
                    x: 'year',
                    y: '1998'
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: [7, 7, 7, 7],
                        // barBorderColor: '#FFFF00',
                        color: function (params) {
                            var colorList = [

                                ['#4FF778', '#0BA82C'],

                                ['#E5DD45', '#E8B11C'],

                                ['#E8821C', '#E55445'],

                                ['#4FF778', '#0BA82C'],

                                ['#E5DD45', '#E8B11C'],

                                // ['#5052EE', '#AB6EE5'],

                                // ['#23E5E5', '#2E72BF']

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
            },
        ]
    },
    options: []
};

for (var n = 0; n < yearlist.length; n++) {
    option.options.push({
        title: {
            show: true,
            text: yearlist[n] + '年世界各国65岁以上人口比率热榜',
            left: 'center',
            textStyle: {
                fontSize: 18
            }
        },
        series: [
            {
                type: 'bar',
                seriesLayoutBy: 'row',
                encode: {
                    x: 'year',
                    y: yearlist[n]
                }
            },
        ]
    });
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);