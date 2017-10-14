	var vm=new Vue({
		el:".ware",
		data:{
			liList:[],			
		},
		created:function(){
			var that=this;
			axios.post(_url+'/getBrowseLog',{
				token:localStorage.getItem("token")
			})
			.then(function(response){
				console.log(response.data);
				that.liList=response.data.result;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		
	})