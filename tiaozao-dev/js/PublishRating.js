
//var id=getParams('id');
var token=localStorage.getItem("token"),	
 id=getParams('id')
 
Vue.component('start',{
	props:['productIndex'],
	template:'<span>'
	        +'<img v-for="(item,index) in items"  @click="change(index,productIndex)" :src="item"/>'
	        +'</span>',
	   
	methods: {
		change:function(index,productIndex){		
			for(var i=0;i<=4;i++){
				if(i>index){
					Vue.set(this.items,i,'img/icon/fb_15.png');
				}else{
					Vue.set(this.items,i,'img/icon/fbb_03.png');
				}
			}
			
			Vue.set(Release.miss, productIndex, Release.assess[index]);
		}
	},
	data:function(){
		return{
			items:[
				'img/icon/fb_15.png',
				'img/icon/fb_15.png',
				'img/icon/fb_15.png',
				'img/icon/fb_15.png',
				'img/icon/fb_15.png'
			]
		}
	}
})




var order=JSON.parse(localStorage.getItem('order'));
var Release=new Vue({
	el:'.whole',
	data: {
		assess:["差","一般","好","较好","非常好"],
		content: '',
		products:order.products,
		miss: []
	},
	created: function() {
		for(var i=0;i<order.products.length;i++) {
			this.miss.push('');
		}
	},
	methods:{
		Release:function(){
			var that=this;
			axios.post(_url+"/addComment", {
				token : localStorage.getItem("token"),
				orderId: id,
				content: this.content,
				describeScore: '3',
				loglisticsScore: '4',
				serviceScore: '3'
			})
			.then(function (response) {   //// 回调函数  promise
				console.log(response.data);
				location.href="comment.html"
			})	
			.catch(function (error) {    //错误  error
			    console.log(error);
			})
		},
		arrow:function(){
			history.back();
		},	
	},
})
