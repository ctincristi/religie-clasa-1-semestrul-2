
function GamesSingleTick(config){
	this.config = config;
}

GamesSingleTick.prototype.resetLevel = function() {
	$("*[data-A-type='tick']").css("display","none");
};

GamesSingleTick.prototype.checkIfFinish = function() {
	var no = 0;
	$("*[data-A-type='tick']").each(function(key,value){
		if(($(this)).css("display")!="none"){
				no++;
		}
	});
	return (no==0);
};

GamesSingleTick.prototype.getCorrectAnswer = function(){
	$("*[data-A-type='tick']").css("display","none");
	for (var j = 0; j < this.config.objects.length; j++) {
		if(this.config.objects[j].response==1)
			$("#Atick"+j).toggle();
	}
};

GamesSingleTick.prototype.checkSingleResultIndex = function(index){
	console.log($("#Atick"+index).css("display"));
	return ((this.config.objects[index].response==1) && ($("#Atick"+index).css("display")!="none" ) ||
			   (this.config.objects[index].response==0) && ($("#Atick"+index).css("display")=="none" ));
};

GamesSingleTick.prototype.getCheckLength = function(){
	return this.config.objects.length;
};

GamesSingleTick.prototype.getResult = function(){
	return this.config.result;
};

GamesSingleTick.prototype.initialize = function(){
	var config = this.config;
	if(this.config.fundal!=null){
		$("#gameStage").append("<img id='fundal'>");
		util.setImageStyle($("#fundal"), this.config.fundal);
	}
		
	for (var i = 0; i < this.config.objects.length; i++) {
		$("#gameStage").append(
				"<div id='AidInput"+i+"' data-A-index='"+i+"' "+
					" onclick='"+((!isRepeatActive)?"return false":"")+ "'" +
					" style='z-index:2000;position:absolute;cursor:pointer;" +
					((this.config.displayInput===undefined)?"border-style:solid;outline: none;  border-color:  #A77649; " +
							" box-shadow: 0 0 10px  #A77649;" : "")+
					"top:"+this.config.inputs[i].top+"px;" +
					"left:"+this.config.inputs[i].left+"px;" +
					"width:"+this.config.inputs[i].width+"px;" +
					"height:"+this.config.inputs[i].height+"px;" +
					"background:transparent;'></div>" +//border:1px solid;border-color:red
					"" +
					"<img id='Atick"+i+"' data-A-type='tick' style='position:absolute;display:none;" +//display:none;
				     "top:"+(this.config.objects[i].top+this.config.imgTick.top)+"px;" +
				     "left:"+(this.config.objects[i].left+this.config.imgTick.left)+"px;" +
				     "' src='"+((this.config.imgTick===undefined)?imagesCommon.tick:this.config.imgTick.src)+"' alt='' " +
				     "width='"+this.config.objects[i].width+"px' height='"+this.config.objects[i].height+"px'/>");
			util.setCheckImage(this.config.nameGame, this.config.objects[i], i ,25,0);
	}
	
	
	
	$("*[data-A-index]").click(function() {
		if(!isActive)
			return false;
		$("#Atick"+$(this).attr("data-A-index")).toggle();
	});
		$("#gameStage").click(function(e) {
	console.log("left:"+Math.round((e.pageX-$("#gameStage").offset().left)/scale/3)+",top:"+
	Math.round((e.pageY-$("#gameStage").offset().top)/scale/3)+"");});    
};

