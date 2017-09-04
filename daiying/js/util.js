function viliemail(em){
	var isemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(em);
	if(!isemail){
		alert("您输入的邮箱有误");
		return false;
	}else{
		return true;
	}
		
}
function viliphone(ph){
	var isphone = /^1[34578]\d{9}$/.test(ph);
	if(!isphone){
		alert("您输入的号码无效");
		return false;
	}else{
		return true;
	}
	
}


function checkPwd(str) {
	if(str.length < 6) {
		alert("请输入密码");
		return false;
	}else {
		return true;
	}
}
