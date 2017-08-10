	//菜单栏显示与隐藏
	var menu=document.querySelector(".title1");
	var num=0;
	document.querySelector(".head_menu").addEventListener("click",function(){
		if (num%2==0) {
			menu.style.display='block';
		} 
		if (num%2==1) {
			menu.style.display='none';
		}
		num++;
	})