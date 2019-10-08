function MyLocalStorage() {
	
}

MyLocalStorage.prototype.getItem = function(key) {
	if(gd.isIe===true){
		return $.cookie(key);
	}else{
		return localStorage.getItem(key);
	}
};

MyLocalStorage.prototype.setItem = function(key, value) {
	if(gd.isIe===true){
		$.cookie(key, value, { expires: 365 });
	}else{
		localStorage.setItem(key, value);
	}
};

MyLocalStorage.prototype.key = function(index) {
	return localStorage.key(index);
};


