	var	xhrz=new XMLHttpRequest();
	var gg;
	var aa=document.querySelector(".one_one");
	var ee=document.querySelector(".three_three");
	var cc=document.querySelector(".two_two");
	var tt=document.querySelector(".fixed_circle");
	var hh=document.querySelector(".fixed");
	var xmlhttp;
				if (window.XMLHttpRequest){
					// code for IE7+, Firefox, Chrome, Opera, Safari
	 			 	xmlhttp=new XMLHttpRequest();
	  			}
				else{
					// code for IE6, IE5
	  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 			 }
	xhrz.open(
		"POST",
		"http://192.168.0.127:8000/people",
	)
	xhrz.send();
	xhrz.onreadystatechange=function(){
		if(xhrz.readyState==4&&xhrz.status==200){
			gg=JSON.parse(xhrz.responseText);				
				aa.innerHTML=gg.result[0].title;
				cc.innerHTML=gg.result[0].name;
				ee.innerText=gg.result[0].describe;
				tt.style.background="url('"+gg.result[0].header+"')";
				hh.style.background="url('"+gg.result[0].bgimg+"')";
		}
	}