// 发送AJAX请求
// 1.创建HTTP请求对象
var xhr = new XMLHttpRequest()
// 2.打开服务器的连接，设置要请求的接口
xhr.open('GET', 'http://localhost:3000/v1/yanchu/yanchu', true)
// 3.发送请求
xhr.send()
// 4.绑定事件，监听服务器端响应
xhr.onload = function () {
    // 获取服务器端响应的文本
    var res = xhr.responseText
    // console.log(res)
    // 把JSON转为JS
    var data = JSON.parse(res)
    // 获取数组部分
    // var arr = obj.data
    console.log(data)
    
    $('.cont').html(data.data.map(value=>{
        const {pic,title,topic}=value

        return `
        <li>
            <div class="img"> 
                <img src="${pic}" alt="">
            </div>
            <span>${title}</span>
            <p>${topic}</p>
        </li>
        `
    }))
    
    

}