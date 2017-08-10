	var	xhr=new XMLHttpRequest();
	var ss;
//	var rr=document.querySelector(".title1");
	var yy=document.querySelector(".head_menu");
	var a=document.querySelectorAll(".title1 a");
	var xmlhttp;
			if (window.XMLHttpRequest){
				// code for IE7+, Firefox, Chrome, Opera, Safari
   			 	xmlhttp=new XMLHttpRequest();
			}
			else{
				// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   			 }
	xhr.open("POST","http://192.168.0.127:8000/menu",true);	

	xhr.send();
	xhr.onreadystatechange=function(){
	
		if(xhr.readyState==4&&xhr.status==200){
			ss=JSON.parse(xhr.responseText);
			for(var i=0;i<a.length;i++){
				a[i].innerHTML=ss.result[i].menuName;				
			}
		}
	}
	var ii=yy.addEventListener("click",function(e){
			console.log(e.target.rr);	
//			document.querySelector('.title1').setAttribute('style','display: block;');
			document.querySelector(".title1").style.display="block";
		}) 
		
		
	
	


