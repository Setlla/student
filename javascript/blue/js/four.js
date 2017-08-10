				var four=new XMLHttpRequest();
				var xMlHttp;
				var d;
				var mm=document.querySelector(".one");
				var aa=document.querySelector(".two");
				var bb=document.querySelector(".three");
				var cc=document.querySelector(".cover2 img");
				var bgimg=document.querySelector(".cover2");
				if(window.XMLHttpRequest){
					xMlHttp=new XMLHttpRequest();
				}
				else{
					xMlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				four.open('post','http://192.168.0.127:8000/people');
				four.send();
				four.onreadystatechange=function(){
					if(four.readyState==4 && four.status==200){
						c=JSON.parse(four.responseText);
						mm.innerHTML= c.result[0].title;
						aa.innerHTML= c.result[0].name;
						bb.innerHTML= c.result[0].describe;
						cc.src= c.result[0].header;
						bgimg.style.background = "url('"+c.result[0].bgimg+"')";
					}
				}
