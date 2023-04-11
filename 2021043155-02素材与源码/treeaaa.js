drawChart()
{ // 此处将方法封装了函数(需调用)

    var pieId = document.getElementById("tree");

    if (!pieId) {
        return false;
    }

    let myChart = this.$echarts.init(pieId);

    let option = {};

    // 使用刚指定的配置项和数据显示图表。

    myChart.setOption(

        (option = {
            tooltip: {
                trigger: "item",

                triggerOn: "mousemove",

            },

            series: [

                {
                    type: "tree",

                    data: [

                        {
                            "children": [{
                                "curFidid": "category",

                                "symbol": "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600062199599&di=7dc2ea5cdde585ce200c7656ba171960&imgtype=0&src=http%3A%2F%2Fwww.36588.com.cn%3A8080%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2Fa32a40bd-b597-4712-9127-17e6d5a5d04b.png",

                                "children": [{
                                    "symbol": "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600062776060&di=7bfad0f466e90434097064b9dd7afc5c&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507185227_3LRw4.jpeg",

                                    "children": [{
                                        "children": [{
                                            "children": [{
                                                "children": [{
                                                    "children": [],

                                                    "name": "低压车间表计82"

                                                }],

                                                "name": "低压车间表计82"

                                            }],

                                            "name": "低压车间表计82"

                                        },

                                        {
                                            "children": [],

                                            "name": "低压车间表计82"

                                        }

                                        ],

                                        "name": "低压车间表计82"

                                    },

                                    {
                                        "children": [],

                                        "name": "低压车间表计82"

                                    },

                                    {
                                        "children": [],

                                        "name": "低压车间表计82"

                                    }

                                    ],

                                    "name": "EdgeServer１(设备)"

                                },

                                {
                                    "children": [{
                                        "children": [],

                                        "name": "低压车间表计82"

                                    },

                                    {
                                        "children": [],

                                        "name": "低压车间表计82"

                                    },

                                    {
                                        "children": [],

                                        "name": "低压车间表计82"

                                    }

                                    ],

                                    "name": "EdgeServer2(设备)"

                                },

                                {
                                    "children": [{
                                        "children": [{
                                            "children": [{
                                                "children": [{
                                                    "children": [],

                                                    "name": "低压车间表计82"

                                                },

                                                {
                                                    "children": [{
                                                        "children": [],

                                                        "name": "低压车间表计82"

                                                    },

                                                    {
                                                        "children": [],

                                                        "name": "低压车间表计82"

                                                    },

                                                    {
                                                        "children": [],

                                                        "name": "低压车间表计82"

                                                    }

                                                    ],

                                                    "name": "低压车间表计82"

                                                }

                                                ],

                                                "name": "低压车间表计82"

                                            }],

                                            "name": "低压车间表计82"

                                        },

                                        {
                                            "children": [],

                                            "name": "低压车间表计82"

                                        }

                                        ],

                                        "name": "低压车间表计82"

                                    },

                                    {
                                        "children": [],

                                        "name": "低压车间表计82"

                                    }

                                    ],

                                    "name": "EdgeServer3(设备)"

                                }

                                ],

                                "name": "EDGESERVER1(设备类型)"

                            }

                            ],

                            "name": "平台"

                        }
                    ], // 此处为重点：外引的json数据

                    nodePadding: 20,

                    top: "1%",

                    left: "10%",

                    bottom: "1%",

                    right: "10%",

                    symbol: 'image', // 此处亦为重点---> 节点换成图片即为此

                    symbolSize: [80, 20],

                    roam: true,

                    itemStyle: {
                        // 设置边框的颜色和宽度

                        borderColor: "#ccc",

                        borderWidth: 1

                    },

                    label: {
                        position: "left",

                        verticalAlign: "middle",

                        align: "right",

                        fontSize: 9

                    },

                    leaves: {
                        label: {
                            position: "right",

                            verticalAlign: "middle",

                            align: "left"

                        }

                    },

                    expandAndCollapse: true,

                    animationDuration: 550,

                    animationDurationUpdate: 750

                }

            ]

        })

    );

}

