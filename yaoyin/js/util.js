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
