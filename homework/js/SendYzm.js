var t=60;
var down;
var button=$(".send");
var number=$(".process .number");
var into=$(".into");
 var com=function(){
 	
 	if(t == 0){
 		button.text("发送验证码");
 		t=60;
 		button.attr("");
   		clearInterval(down);
   		button.css("background","#fa6c62");
 	}else{
 		button.text("重新发送("+ t +")");		
 		button.attr("disabled",true);
   		button.css("background","#9B9B9B");
 		t--;
 	}
 }
 var down;
 
$(".send").click(function(){
	com();
	down=setInterval(com,1000);
})