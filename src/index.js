function timedTask(key,time, method){ // 设置 key-cookie 名字； time - cookie多少秒后失效，不传默认第二天凌晨；method 执行的函数
	if(!key){
		key = 'taskToDo'
	}
	var ck = getCookie(key)
	if(!ck){ //无cookie，执行方法
		method()
		
		//距离第二天凌晨还有多少秒
		var time = time || 24*60*60 - (new Date().getHours()*60*60+new Date().getMinutes()*60+new Date().getSeconds())
		setCookie(key,1,time)
	}
}

function setCookie(name,value,time){ //设置cookie	
	var exp = new Date();
	if (!time) {
		time = 7 * 24 * 60 * 60;//默认7天
	}
	exp.setTime(exp.getTime()+time*1000)
	document.cookie = name + '=' + encodeURI(value)+'; expires='+exp.toUTCString()
}


function getCookie(name){ //查询cookie
	var _cookie = document.cookie
	if(_cookie.length>0){
		var _start = _cookie.indexOf(name + "=");//获取字符串的起点
		var _end;
		if(_start!=-1){ //存在
			_start = _start+name.length+1 //重设起点 为等号的位置
			_end = _cookie.indexOf(';', _start) //得出结尾位置 name = value;
			if(_end==-1){ //如果等于-1，说明是最后，因为cookie串最后没有分号;
				_end = _cookie.length;
			}
			return decodeURI(_cookie.substring(_start, _end))
		}
	}
	return ''
}

module.exports = {
	timedTask
}; 