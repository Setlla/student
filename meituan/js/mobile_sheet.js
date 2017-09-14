	//头部
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else{
		xmlhttp=new ActiveXObject();
	}
	
	xmlhttp.open("POST","http://192.168.0.127:3900/index","true");
	xmlhttp.send();
	
	
	var city=document.querySelector(".header_select");
	var btntype=document.querySelectorAll(".fooder li");
	var food=document.querySelectorAll(".tryst_ul li");
	var like=document.querySelectorAll(".like_food");
	var likechicken=document.querySelectorAll(".like_chicken");
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			console.log(xmlhttp.responseText);
			var s=JSON.parse(xmlhttp.responseText);
			//头部当前城市
			city.children[0].innerText=s.address;
			
			//十大按钮分类
			for (var i=0;i<btntype.length-5;i++) {
				btntype[i].querySelector('span').style.background=s.products[i].background;
				btntype[i].querySelector('a').innerText=s.products[i].Text;
			}
			
			//约吧一家人好朋友的数据
			for (var i1=0;i1<food.length;i1++) {
				food[i1].children[0].innerText=s.themes[i1].info;
				food[i1].children[1].innerText=s.themes[i1].infoDetail;
				food[i1].children[2].src=s.themes[i1].imageUrl;
			}
			
			//猜你喜欢数据
			for (var i2=0;i2<like.length;i2++) {
				like[i2].children[0].src=s.youLikes[i2].ImageUrl;
				like[i2].children[0].style.alignSelf="center";
				like[i2].children[0].style.width='80px';
				like[i2].children[0].style.height='80px';
			}
			
			for (var i3=0;i3<likechicken.length;i3++) {
				likechicken[i3].children[0].children[0].innerText=s.youLikes[i3].Name;
				likechicken[i3].children[1].children[0].innerText=s.youLikes[i3].Port;
				likechicken[i3].children[2].children[0].children[0].innerText=s.youLikes[i3].NowPrice;
				likechicken[i3].children[2].children[1].children[0].innerText=s.youLikes[i3].BeforePrice;
				likechicken[i3].children[2].children[2].children[0].innerText=s.youLikes[i3].HasSold;
			}
			
		
				
		}
	}
	

	
	