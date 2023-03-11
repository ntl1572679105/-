// var map = new AMap.Map('container', {
//     zoom:11,//级别
//     center: [116.397428, 39.90923],//中心点坐标
//     // viewMode:'3D'//使用3D视图
// });
// map.setMapStyle('amap://styles/whitesmoke');


var imageLayer = new AMap.ImageLayer({
    url: '../../assert/maps/1.jpg',
    bounds: new AMap.Bounds(
        [116.671798,39.845325],
        [116.689811,39.862663]
    ),
    zooms: [10, 18]
});

var map = new AMap.Map('container', {
    center: [116.681212,39.852698],
    // 116.681212,39.852698
    zoom: 17,
    // plugins:'AMap.ToolBar',
    layers: [
        AMap.createDefaultLayer(),
        imageLayer,
    ]
});
// 同时引入工具条插件，比例尺插件和鹰眼插件
AMap.plugin([
    'AMap.ToolBar',
], function(){
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar());
});

// 创建一个 Marker 实例：
var marker = new AMap.Marker({
    position: new AMap.LngLat(116.680718,39.851993),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '北京'
});

// 将创建的点标记添加到已有的地图实例：
map.add(marker);
