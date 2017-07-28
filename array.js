	//鼠标悬浮事件
//	function yy(a){
//		a.innerHTML="y2";
//	}
	//鼠标悬浮事件改变它的宽高背景
	document.querySelector('.one').addEventListener('mousemove',function(a){
		a.target.style.width="100px";
		a.target.style.height="100px";
		a.target.innerHTML="悬浮事件2";
		a.target.style.background="red";
	})
	document.querySelector('.one').addEventListener('mouseout',function(a){
		a.target.style.width="50px";
		a.target.style.height="50px";
		a.target.innerHTML="悬浮事件";
		a.target.style.background="white";
	})
	//鼠标点击事件,多个li随机点一个li使他变色，再点击变回原来的颜色；
	//	var number=0;
	var s = document.querySelectorAll("li");
	
	for(var i=0;i<s.length;i++) {
		console.log(s[i].innerText);
		s[i].addEventListener("click",function(a){
			if(a.target.style.background=="red"){
				a.target.style.background="white";
			}else{
				a.target.style.background="red";
			}
		})
	}
	
//	document.querySelectorAll("li").addEventListener("click",function(a){
//		console.log(li.length);
//		for(var i=0;i<li.length;i++){
//			if(a.target.style.background=="red" && li[i]){
//				a.target.style.background="white";
//			}else{
//				a.target.style.background="red";
//			}
//		}
//
//		if(number%2==0){
//		 	a.target.style.background="red";
//		}
//		if(number%2==1){
//			a.target.style.background="white";
//		}
//		number++;
//		})
		//数组练习
		var a=[-5,-4,5,6,4,2,0,7];
		console.log(a);
		//数组的长度
		console.log(a.length);
		//indexOf
		console.log(a.indexOf(0));
		//slice截取数组部分元素
		var a1=a.slice(0,3);
		console.log(a1);
		//push末尾添加元素，pop末尾删除元素
		a1.push(3,1);
		console.log(a1);
		a1.pop();
		console.log(a1);
		//unshift开头添加元素，shift开头删除元素
		a1.unshift(-8,-7);
		console.log(a1);
		a1.shift();
		console.log(a1);
		//sort对数组排序
		console.log(a1.sort());
		//数组反转
		console.log(a1.reverse());
		//连接并且给以一个最新的数组
		var a2=a1.concat([9,10]);
		console.log(a2);
