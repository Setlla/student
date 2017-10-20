var sb = new Vue({
	el:".canp",
	data:{
		items:[]
	},
	created:function(){
		var that = this;
		axios.post(preUrl+'/getCollectionLog',{token:localStorage.getItem("token")})
		  .then(function (response) {
		    console.log(response);
		    that.items=response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	},
	methods:{
		addshop:function(){
			var that = this;
			axios.post(preUrl+'/addShopCar',{token:localStorage.getItem("token")})
		  .then(function (response) {
		    console.log(response);
		    that.items=response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  location.href="gouwuche.html?id="+id;
		}
	}
})

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

var id=getQueryString('id');
