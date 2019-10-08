function MySessionStorage() {
}

MySessionStorage.prototype.getItem = function(key) {
	if(gd.isIe===true){
		return $.cookie(key);
	}else{
		return sessionStorage.getItem(key);
	}
};

MySessionStorage.prototype.setItem = function(key, value) {
	if(gd.isIe===true){
		$.cookie(key, value);
	}else{
		sessionStorage.setItem(key, value);
	}
};

