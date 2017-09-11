var iphone=function(phone) {
  	 var iphoneRegex=/^1[34578]\d{9}$/.test(phone);
  	 if(!iphoneRegex){
  	 	return false;
  	 }else{
  	 	return true;
  	 }
  }


var cheakpwd=function(str){
	if(str.length < 6){
		return false;
		alert("请重新输入")
	}else{
		return true;
	}
}