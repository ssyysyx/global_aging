 // 创建echarts实例
 var myCharts = echarts.init(document.getElementById("bar1"));
 // 设置配置选项
 var xDataArr = ['山东','四川','重庆','上海','辽宁','江苏','安徽',
'湖南','河北','浙江','湖北','黑龙江','全国平均','吉林','贵州','河南',
'陕西'];
 var yDataArr = [23.8,23.2,22.6,22.1,21.6,21.2,20.7,19.7,19.3,19.3,18.3,18.1,17.8,17.7,17.5,17.2,16.4];
 var option = {
     title:{
         text:'2019全国各省市老年人口抚养比情况',
         left:'center'
     },
     label:{
         show:'true'
     },
     xAxis:{
         type:'category',
         name:'省份',
         axisLabel:{
             rotate:-60
         },
         data:xDataArr
     },
     yAxis:{
         type:'value',
         name:'抚养比情况（%）'
     },
     series:{
       name:'老年人口抚养比',
       type:'bar',
       data:yDataArr  
     }
 };
 // 配置项赋给echarts选项
 myCharts.setOption(option);