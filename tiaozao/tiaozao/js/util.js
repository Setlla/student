	function valiphone(phone){					//手机正则表达
		var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone);
		if(!hasphone){
			alert("此手机有误")			
		}
		return hasphone;
	}
	function valiemail(email){				//邮箱正则表达
		var hasemail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value);
		if(!hasemail){
			alert("此邮箱有误")
		}
		return hasemail;
	}
    function valipassword(password){
    	var ispassword=/^[0-9A-Za-z]+$/.test(password);
		if(!ispassword){
			alert("此密码有误");
		}
		return ispassword;
    }	
	