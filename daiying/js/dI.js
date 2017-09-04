//			var able=new XMLHttpRequest();
			var able;
			var a;
			var dd = document.querySelectorAll(".head2 a");
			if(window.XMLHttpRequest){
				able=new XMLHttpRequest();
			}
			else{
				able=new ActiveXObject("Microsoft.XMLHTTP");
			}
			able.open('post','http://192.168.0.127:8000/menu','ture');
			able.send();
			able.onreadystatechange=function(){
			   if (able.readyState==4 && able.status==200){
			    
			a = JSON.parse(able.responseText);
			for(var i = 0;i<dd.length;i++){
				dd[i].innerHTML = a.result[i].menuName;
				}
			   }
			}
			
			var car = document.querySelector(".car")
			var zz=	document.querySelector(".head2");
			    car.addEventListener("click",function(){
					if(zz.style.display=="block"){
					zz.style.display = 'none';
				}
				else{
					zz.style.display= 'block';
				}
			})
			
				