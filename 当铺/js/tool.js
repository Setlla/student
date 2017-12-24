var token = localStorage.getItem("token");

var http="http://39.108.219.59:8080/";

function match(regexp, value, des) { //通用匹配函数
	if(!regexp.test(value)) { //!表示取反，！0=1
		alert(des);
		return false;
	} 
	return true;
}

