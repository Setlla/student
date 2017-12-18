var token = localStorage.getItem("token");

var http="http://39.108.219.59:8080/";

function match(regexp, value, des) { //通用匹配函数
	if(!regexp.test(value)) { //!表示取反，！0=1
		alert(des);
		return false;
	} 
	return true;
}

//加入购物车
function shop(){
	$.ajax({
		type:"post",
		url:http+"addShopCar",
		contentType: "application/json",
		data:JSON.stringify({token:token,id: getQuerystring('id')}),
		success:function(and){
			if(and.isSuccess){
				location.href="gouwuche.html"
			}
		}
	});
}