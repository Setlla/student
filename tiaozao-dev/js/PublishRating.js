
//var id=getParams('id');
var token=localStorage.getItem("token");	



Vue.component('start',{
	props:['items','index'],
	template:'<div>'
	        +'<img v-for="(item,index) in items"  @click="change(index)" :src="item.xin"/>'
	        +'</div>',
	methods: {
		change:function(index){		
			
			this.items[index].xin = 'img/icon/fbb_03.png';
		}
	}
})

var id=getParams('id');
var token=localStorage.getItem("token");	
var order=JSON.parse(localStorage.getItem('order'));
var Release=new Vue({
	el:'.whole',
	data: {
		content: '',
		items:[{xin:'img/icon/fb_15.png'},
			   {xin:'img/icon/fb_15.png'},
			   {xin:'img/icon/fb_15.png'},
			   {xin:'img/icon/fb_15.png'},
			   {xin:'img/icon/fb_15.png'}
		]
		products:order.products
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

	}
})
