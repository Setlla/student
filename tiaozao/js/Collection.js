var one=new Vue({
	el:'.content',
	data:{
		items:[],
		obj:{}
	},
	created:function(){
		var that=this;
		axios.post('http://39.108.219.59:8080/getCollectionLog',{token:localStorage.getItem("token")})
		.then(function (response) {   //// 回调函数  promise
		    console.log(response.data);
		    that.items = response.data.result;
		  })
		  .catch(function (error) {    //错误  error
		    console.log(error);
		  });
	}
})





















