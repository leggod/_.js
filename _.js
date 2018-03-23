(function (window, undefined) {
    var _ = (function(){
        var instance;
        var _ = function(){
            if (instance){
                return instance;
            }
            this.init();
            return instance = this;
        };
        _.prototype.init = function(){
            /**
            * @method getCookie
            * @param {string}
            * @return {string}
            */
            this.getCookie = function (c_name) {
                if (document.cookie.length > 0) {
                    c_start = document.cookie.indexOf(c_name + "=")
                    if (c_start != -1) {
                        c_start = c_start + c_name.length + 1
                        c_end = document.cookie.indexOf(";", c_start)
                        if (c_end == -1) c_end = document.cookie.length
                        return unescape(document.cookie.substring(c_start, c_end))
                    }
                }
                return ""
            };
            /**
            * @method setCookie
            * @param {string, string, num}
            */
            this.setCookie = function (key, value, expiredays) {
                var exdate = new Date()
                exdate.setDate(exdate.getDate() + expiredays)
                document.cookie = key + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
            };
            /**
            * @method parseUrl
            * @param {string}
            */
            this.parseUrl = function (variable) {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == variable) { return pair[1]; }
                }
                return (false);
            };
            /**
            * @params item  传入的要判断的值
            * @params type  要比对的值、首字母大写、String、Number、Null、Undefined,Boolean等
            * @return {Boolean}
            */
            this.isType = function (value, type) {
                return Object.prototype.toString.call(value) == '[object ' + type + ']'
            };
            /**
            * 解析时间戳
            * @params param  传入时间戳
            * @params type  string/number
            * @return {str}
            * 
            */
            this.parseUnix = function (param) {
                if (param) {
                    var timestamp = parseInt(param) * 1000;
                    var time = new Date(timestamp);
                    var data = {
                        y: time.getFullYear(),
                        m: time.getMonth() + 1,
                        d: time.getDate(),
                        h: time.getHours(),
                        mm: time.getMinutes(),
                        s: time.getSeconds()
                    }
                    // for (i in data) {
                    //     if
                    // }
                    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
                } else {
                    alert('无参数，请查询 parseUnix 方法')
                }
            };
            /**
            * 深拷贝
            * @params item  传入的要判断的值
            * @params type  array or obj等
            * @return {obj}
            * 
            */
            this.cloneObj = function (obj) {
                var str, newobj = obj.constructor === Array ? [] : {};
                if (typeof obj !== 'object') {
                    return;
                } else if (window.JSON) {
                    str = JSON.stringify(obj), //系列化对象
                        newobj = JSON.parse(str); //还原
                } else {
                    for (var i in obj) {
                        newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
                    }
                }
                return newobj;
            }
        };
        return new _();
    })();
    window._ = _
})(window)



