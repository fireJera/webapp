import Vue from 'vue'

function ajax(options) {
    options = options || {}
    options.methods = options.methods.toUpperCase() || 'GET'
    options.url = options.url || ''

    // 默认异步
    options.async = options.async || true
    options.data = options.data || {}
    options.success = options.success || function(){}
    options.faile = options.faile || function(){}

    console.log(options)

    let xhr = null

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    let params = []
    for (let param in options.data) {
        params.push(param + '=' + options.data[param])
    }
    let requestData = params.join('&')
    let requestType = options.methods.toUpperCase()

    if (requestType == 'GET') {
        xhr.open(requestType, options.url, options.async)
        xhr.send()
    }
    else if (requestType == 'POST') {
        xhr.open(requestType, options.url, options.async)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(requestData)
    }

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            options.success(JSON.parse(xhr.responseText))
        }
        else if (xhr.status != 200) {
            options.faile('request error')
        }
    }
}

// export default  {
//     install(Vue, options) {
//         Vue.prototype.ajax = ajax
//     }
// }

export default ajax