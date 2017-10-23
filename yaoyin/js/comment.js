	var user=JSON.parse(localStorage.getItem("user"));
	
	//评价父组件
	Vue.component('father',{
		props:["items","users","names"],
		template:'<div>'
        		+'<ul class="all" v-for="item in items">'
        		+'<li class="user_information">'
        		+'<img class="circle" :src="names" />'
				+'<span class="user">{{users}}</span>'
        		+'</li>'
        		+'<li class="color">'
        		+'<p>{{item.createdAt}}</p>'
				+'<p>{{item.logisticsScore}}</p>'
        		+'</li>'
				+'<child :products="item.order.products"></child>'
        		+'<li class="number">'
        		+'<button class="write_btn1">写追评</button>'
        		+'</li>'
        		+'</ul>'
       			+'</div>'
	})
	
	//评价子组件
	Vue.component('child',{
		props:["products"],
		template: '<div>'
				+'<li class="information" v-for="product in products">'
        		+'<img :src="product.Image" />'
        		+'<p>{{product.Name}}</p>'
				+'<p>￥{{product.CurPrice}}.00</p>'
        		+'</li>'
        		+'</div>'
	})
	
	
	var comment=new Vue({
		el:'#body',
		data:{
			items:[],
			users:user.name,
			names:user.headImage
		},
		methods:{
			getData:function(){
					var that=this;				
					axios.post(_url+"/getComment",{
						token:localStorage.getItem("token")
					})
					.then(function(response){
						console.log(response.data);
						that.items=response.data;
					})
					.catch(function(error){
						console.log(error);
					})
			}
		},
		created:function(){
			this.getData();
		}
	})