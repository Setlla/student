	var	xhrs=new XMLHttpRequest();
	var bb;
	var one=document.querySelector(".one");
	var two=document.querySelector(".two");
	var three=document.querySelector(".three");
	var four=document.querySelector(".four");	
	var span1=document.querySelector(".span1")
	var bjt=document.querySelector(".head");
	var xmlhttp;
				if (window.XMLHttpRequest){
					// code for IE7+, Firefox, Chrome, Opera, Safari
	 			 	xmlhttp=new XMLHttpRequest();
	  			}
				else{
					// code for IE6, IE5
	  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 			 }
	xhrs.open(
		"POST",
		"http://192.168.0.127:8000/shop"
	)
	xhrs.send();
	xhrs.onreadystatechange=function(){
		if(xhrs.readyState==4&&xhrs.status==200){
			bb=JSON.parse(xhrs.responseText);
					one.innerText=bb.result[0].name;
					two.innerText=bb.result[0].describe;
					three.innerText=bb.result[0].projectsTitle;
					four.innerText=bb.result[0].projectsDescribe;
					bjt.style.background="url('"+bb.result[0].img+"')";
		}
	}
	
	












