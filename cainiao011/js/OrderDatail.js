<<<<<<< HEAD
 
=======



//全局组件
Vue.component('pro',{
	props:["products"],
	template:
			'<div>'
			+'<i><img :src="products.Image"/></i>'
			+'<div class="contentText">'
			+'<p>{{products.Des}}</p>'
			+'<div class="contentNem">'
			+'<span>￥{{products.CurPrice}}</span>'	
			+'<span>￥{{products.OldPrice}}</span>'	
			+'<em>x{{products.id}}</em>'	
			+'</div>'
			+'</div>'
			+'</div>'
})


var content=new Vue({
	el:"#body",
	data:{
		product:[],
		content:{},
		user:{},
		hide:true,
	},
	created:function(){
		this.$http.post("http://192.168.0.142:3900/getOrderDetail",{
			token:localStorage.getItem("token"),orderId:"154"}).then(function(response){
			this.product=response.body.result.products;
			this.content=response.body.result;
			this.user=JSON.parse(localStorage.getItem("user"));
			},function(response){
				
			})
	},
	methods:{
		delet:function(){
			this.hide=false
		},
		phone:function(){
			window.location.href = 'tel:18821882252'
		},
		copy:function(){
			
			alert("复制成功！");   
			}
	}
	
	
})


























>>>>>>> 27f66c0786cc28d3eac4c544b6022859b47a4819
