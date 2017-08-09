	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else{
		xmlhttp=new ActiveXObject();
	}
	
	xmlhttp.open("POST","http://192.168.0.127:8000/menu","true");
	xmlhttp.send();
	
	//class为title1的数据
	var tit=document.querySelectorAll(".title1 a");
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			console.log("后台数据"+xmlhttp.responseText);
			var s=JSON.parse(xmlhttp.responseText);
//			console.log(s.isSuccess);
			for(var i=0;i<tit.length;i++){
				tit[i].innerText=s.result[i].menuName;
//				console.log(tit[i].innerText);
			}
		}
	}
		
	var xmlhttp1;
	if (window.XMLHttpRequest) {
		xmlhttp1=new XMLHttpRequest();
	} else{
		xmlhttp1=new ActiveXObject();
	}
	xmlhttp1.open("POST","http://192.168.0.127:8000/shop","true");
	xmlhttp1.send();
	
	//class为head_font的数据	
	var head_p1=document.querySelector(".head_font p:nth-of-type(1)");
	var head_p2=document.querySelector(".head_font p:nth-of-type(2)");
	//class为projects_title的数据
	var head_p3=document.querySelector(".projects_title p:nth-of-type(1)");
	var head_p4=document.querySelector(".projects_title p:nth-of-type(3)");
	xmlhttp1.onreadystatechange=function(){
		if(xmlhttp1.readyState==4 && xmlhttp1.status==200){
			console.log(xmlhttp1.responseText);
			var s=JSON.parse(xmlhttp1.responseText);
			console.log(s+"head_font的数据");
			head_p1.innerText=s.result[0].name;
			head_p2.innerText=s.result[0].describe;
			head_p3.innerText=s.result[0].projectsTitle;
			head_p4.innerText=s.result[0].projectsDescribe;
			
			var img=s.result[0].img;
			console.log(img);
			document.querySelector(".head").backgroundImage="url(img)";
		}
	}
	
	
	
	
	var xmlhttp2;
	if (window.XMLHttpRequest) {
		xmlhttp2=new XMLHttpRequest();
	} else{
		xmlhttp2=new ActiveXObject();
	}
	
	xmlhttp2.open("POST","http://192.168.0.127:8000/project","true");
	xmlhttp2.send();
	//class为projects_transition的数据
	var pro_transion=document.querySelectorAll(".projects_transition");
	var pro_ul_img=document.querySelectorAll(".projects_ul li img");
	console.log(pro_ul_img.length);
	xmlhttp2.onreadystatechange=function(){
		if(xmlhttp2.readyState==4 && xmlhttp2.status==200){
			console.log(xmlhttp2.responseText);
			var s=JSON.parse(xmlhttp2.responseText);
			for(var i=0;i<pro_transion.length;i++){
				pro_transion[i].querySelector('p:nth-of-type(1)').innerText=s.result[i].title;
				pro_transion[i].querySelector('p:nth-of-type(2)').innerText=s.result[i].subtitle;
				pro_ul_img[i].src=s.result[i].bgimg;
			}
			
			
		}
	}
	
	
	
	var xmlhttp3;
	if (window.XMLHttpRequest) {
		xmlhttp3=new XMLHttpRequest();
	} else{
		xmlhttp3=new ActiveXObject();
	}
	
	xmlhttp3.open("POST","http://192.168.0.127:8000/people","true");
	xmlhttp3.send();
	
	//class 为fixed_blue的数据
//	var fixblue=document.querySelector(".fixed_blue");
	var fixblue_p1=document.querySelector(".fixed_blue p:nth-of-type(1)");
	var fixblue_p3=document.querySelector(".fixed_blue p:nth-of-type(3)");
	var fixblue_p4=document.querySelector(".fixed_blue p:nth-of-type(4)");
	xmlhttp3.onreadystatechange=function(){
		if(xmlhttp3.readyState==4 && xmlhttp3.status==200){
			var s=JSON.parse(xmlhttp3.responseText);
			console.log(xmlhttp3.responseText);
			fixblue_p1.innerHTML=s.result[0].title;
			fixblue_p3.innerHTML=s.result[0].name;
			fixblue_p4.innerHTML=s.result[0].describe;
			
			//插入头像数据
			var img=s.result[0].header;
			var img1=s.result[0].bgimg;
			document.querySelector(".fixed").backgroundImage="url(img1)";
			document.querySelector(".fixed_circle").backgroundImage="url(img)";
		}
	}
