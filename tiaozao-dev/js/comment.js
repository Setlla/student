	//评价父组件
	Vue.component('father',{
		props:["items","user"],
		template:'<div>'
        		+'<ul class="all" v-for="item in items">'
        		+'<li class="user_information">'
        		+'<img class="circle" :src="user.headImage" />'
				+'<span class="user">{{user.name}}</span>'
        		+'</li>'
        		+'<li class="color">'
        		+'<p>{{new Date(item.createdAt).toLocaleDateString()}}</p>'
				+'<p>{{item.content?item.content:"此用户没有评价，默认好评。"}}</p>'
        		+'</li>'
				+'<child :products="item.order.products"></child>'
        		+'<li class="number">'
        		+'<button class="write_btn1" @click="evaluate">写追评</button>'
        		+'</li>'
        		+'</ul>'
       			+'</div>',
       			methods:{
       				evaluate:function(){
						location.href="PublishRating.html"
					},
       			}
	})
	
	//评价子组件
	Vue.component('child',{
		props:["products"],
		template: '<div>'
				+'<li class="information" @click="formation(product.id)" v-for="product in products">'
        		+'<img :src="product.Image" />'
        		+'<p v-html="product.Name"></p>'
				+'<p>￥{{product.CurPrice}}.00</p>'
        		+'</li>'
        		+'</div>',
        		methods:{
        			formation:function(id){
						location.href="DetailsPage.html?id="+id;
					}
        		}
	})
	
	
	var comment=new Vue({
		el:'#body',
		data:{
			items:[],
			user:JSON.parse(localStorage.getItem("user"))
		},
		methods:{
			assess:function(){
				location.href="PublishRating.html"
			},
			back:function(){
				history.back();
			},
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