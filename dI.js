			var able=new XMLHttpRequest();
			var xmlhttp;
			var a;
			var dd = document.querySelectorAll(".head2 a");
			if(window.XMLHttpRequest){
				XMLHttp=new XMLHttpRequest();
			}
			else{
				XMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			able.open('post','http://192.168.0.127:8000/menu','ture');
			able.send();
			able.onreadystatechange=function(){
			  if (able.readyState==4 && able.status==200)
			    {
			a = JSON.parse(able.responseText);
			for(var i = 0;i<dd.length;i++){
				dd[i].innerHTML = a.result[i].menuName;
			}
			   }
			  }