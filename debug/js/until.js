//$(document).on("click",".head span",function(){
//	history.back();
//})

var apphead = new Vue({
	el:'.head',
	methods:{
		span:function(){
			history.back();
		},
		img:function(){
			location.href="ShopCar.html";
		}
	}
})

function getParams(name) {
			 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	            if (r != null) return unescape(r[2]); return null; //返回参数值           
			 }
var id=getParams('id');	


var user = JSON.parse(localStorage.getItem("user"));
    $(".name").html(user.name);
    $(".number").html(user.phone);
    $(".address").html(user.address);