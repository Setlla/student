new Vue({
	el:'.search',
	data:{
		items:[]
	},
	created:function(){
		var that = this;
		axios.post(preUrl+"/addCollectionLog",{token:localStorage.getItem("token")})
		  .then(function (response) {
		    console.log(response);
		    that.items=response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });	
	},
	
})