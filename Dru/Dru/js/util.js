	function valiphone(){					//手机正则表达
		var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
		if(!hasphone){
			alert("此手机有误")
			
		}
		return hasphone;
	}
	function valiemail(){				//邮箱正则表达
		var hasemail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value);
		if(!hasemail){
			alert("此邮箱有误")
		}
		return hasemail;
	}
	