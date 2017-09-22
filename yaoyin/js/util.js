	var phone=/^1[34578]\d{9}$/;
	var mail=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a -zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	//电话号码格式判断
	var phones=function(str){
		var p=phone.test(str);
		if (!p) {
			alert("请输入正确的11位手机号！");
			return false;
		}
		else{
			return true;
		}
	}
	//邮箱格式判断
	var mails=function(str){
		var m=mail.test(str);
		if (!m) {
			alert("请输入正确的邮箱号！");
			return false;
		}
		else{
			return true;
		}
	}
	
		var users=function(){
			var user=JSON.parse(localStorage.getItem("user"));
			//解决控制台这个错误--"Uncaught TypeError: Cannot read property '0' of undefined"
//			if(!user){
//				user={};
//			}
			$('.name').text(user.name);
			$('.telephone').text(user.phone);
			$('.address').text(user.address);
		}
		
		//URL解析函数
		var getParams =	function (name) {
			//URL地址&后面的解析
		 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
		}