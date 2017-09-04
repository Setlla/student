	function phonename(){
		var iphoneRegex=/^1[34578]\d{9}$/.test(mob.value);
		 if(!iphoneRegex){
		    	alert("请输入正确手机号.")
		    }else{
		    	return true;
		    }
	}
	
	function emailname(){		
	var emailRegex=
	/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(emal.value);
	   
	    if(!emailRegex){
	    	alert("请输入正确的邮箱")
	    }else{
	    	return true;
	    }
	}