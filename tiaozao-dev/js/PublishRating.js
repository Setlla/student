
var id=getParams('id');
var token=localStorage.getItem("token");	

var Release=new Vue({
	el:'.whole',
	data: {
		content: ''
	},
//	created:function(){

//	}
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
			})	
			.catch(function (error) {    //错误  error
			    console.log(error);
			})
		},
		arrow:function(){
			history.back();
		},	
	}
})
