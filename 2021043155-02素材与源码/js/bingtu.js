// var myChart = echarts.init(document.getElementById('bingtu'));
// var pieData = [
//     {
//         name:'60-70岁',
//         value:1.387
//     },
//     {
//         name:'70-80岁',
//         value:0.55
//     },
//     {
//         name:'80-90岁',
//         value:0.17
//     },
//     {
//         name:'90岁以上',
//         value:0.053
//     }
// ];
// var option = {
//     grid: {
//         left: '3%',
//         bottom: '5%',
//         containLabel: true
//     },
//     tooltip: {
//         trigger: 'item'
//     },
//     title: {
//         text: '中国60岁以上人口年龄结构',
//         left: 'center' ,
//         textStyle: {
//             fontSize: 17
//         }
//     },
//     legend: {
//         top: '10%',
//         left: 'center'
//     },
//     series:{
//         radius: '60%',
//         center:['35%','60%'],
//         color: ['#007575','#B16DB2','#007BC8','#D37091'],
//         type:'pie',
//         data:pieData
//     }
// };

// myChart.setOption(option);

    var valueData = [
        { value: 1.387, name: '60-70岁' },
        { value: 0.55, name: '70-80岁' },
        { value: 0.17, name: '80-90岁' },
        { value: 0.053, name: '90岁以上' },
    ];
    var nameData = ['60-70岁', '70-80岁', '80-90岁', '90岁以上',];
    var colorData = ['#007575','#B16DB2','#007BC8','#D37091', '#5AF6DE', '#89F6DC'];

    let Option2 = {
        title: {
            text: '中国60岁以上人口年龄结构',
            left: 'center' ,
            textStyle: {
                fontSize: 17
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            bottom: '5%',
            containLabel: true
        },
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% <br/> {c}"
        },
        legend: {
            // orient: 'vertical',
            top: '10%',
            icon: 'circle',
            bottom: 20,
            left:'center',
            data: nameData,
            textStyle: {
                color: '#000000'
            }
            //data: ['诊所', '汽车服务相关', '洗衣店', '中介机构', '汽车维修', '火车站', '人流指数', '日式简餐/快餐', 'ATM', '超市']
        },
        series: [{
            type: 'pie',
            radius: ['5%', '60%'],
            center:['30%','60%'],
            left: 70,
            right: 70,
            color: colorData,
            data: valueData,
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        color: '#000000',
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{c|{b}}\n{a|{d}}' + '%',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        d: {

                            fontSize: 12,
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            // color: '#000000',
                            fontSize: 12,
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            }
        }]
    }
    let Option3 = {
        title:{
            text: '80-90岁男女比例',
            textStyle: {
                fontSize: 12
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}%"
        },
        legend: {
            top: '10%',
            orient: 'horizontal',
            left: 'left',
            textStyle: {
                fontSize: 10
            },
        },
        series: [
            {
                name: '70-80岁男女比例',
                type: 'pie',
                radius: '70%',
                bottom: '0%',
                data: [
                    {value: 79, name: '女'},
                    {value: 21, name: '男'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                }
            }
        ],
        label: {
            show: false,
        }
    };
    let Option4 = {
        title:{
            text: '90以上男女比例',
            textStyle: {
                fontSize: 12
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}%"
        },
        legend: {
            top: '10%',
            orient: 'horizontal',
            left: 'left',
            textStyle: {
                fontSize: 10
            },
        },
        series: [
            {
                name: '70-80岁男女比例',
                type: 'pie',
                radius: '70%',
                bottom: '0%',
                data: [
                    {value: 81, name: '女'},
                    {value: 19, name: '男'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                }
            }
        ],
        label: {
            show: false,
        }
    };
    let Option0 = {
        title:{
            text: '60-70岁男女比例',
            textStyle: {
                fontSize: 12
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}%"
        },
        legend: {
            top: '10%',
            orient: 'horizontal',
            left: 'left',
            textStyle: {
                fontSize: 10
            },
        },
        series: [
            {
                name: '70-80岁男女比例',
                type: 'pie',
                radius: '70%',
                bottom: '0%',
                data: [
                    {value: 60, name: '女'},
                    {value: 40, name: '男'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                }
            }
        ],
        label: {
            show: false,
        }
    };
    let Option1 = {
        title:{
            text: '70-80岁男女比例',
            textStyle: {
                fontSize: 12
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}%"
        },
        legend: {
            top: '10%',
            orient: 'horizontal',
            left: 'left',
            textStyle: {
                fontSize: 10
            },
        },
        series: [
            {
                name: '70-80岁男女比例',
                type: 'pie',
                radius: '70%',
                bottom: '0%',
                data: [
                    {value: 65, name: '女'},
                    {value: 35, name: '男'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                }
            }
        ],
        label: {
            show: false,
        }
    };
    var dom1 = document.getElementById("bingtu");
    var dom2 = document.getElementById("smallsmall");
    var myChart1 = echarts.init(dom1);
    var myChart2 = echarts.init(dom2);
    let number = null //声明一个变量稍后接扇区的dataIndex 
    myChart1.on('click', function (param) { //添加点击事件
        // console.log(param);
        myChart1.dispatchAction({ type: 'highlight', dataIndex: param.dataIndex }); //激活点击区域高亮
        if (param.dataIndex !== number) { // 当鼠标点击的时候 消除上一个扇区的高亮
            myChart1.dispatchAction({ type: 'downplay', dataIndex: number });
        }
        number = param.dataIndex //接住当前扇区的dataIndex
        console.log(number)
        if (number==1){
            myChart2.setOption(Option1)
        }
        if (number==2){
            myChart2.setOption(Option3)
        }
        if (number==3){
            myChart2.setOption(Option4)
        }
        if (number==0){
            myChart2.setOption(Option0)
        }
    });
    myChart1.setOption(Option2)
    myChart1.dispatchAction({ type: 'highlight', dataIndex: 0 }); // 生成是默认第一条数据高亮