
function GamesChooseRadioBox(config){
	this.config = config;
}

GamesChooseRadioBox.prototype.resetLevel = function() {
	$("*[data-A-type='tick']").css("display","none");
};

GamesChooseRadioBox.prototype.checkIfFinish = function() {
	var notFinish = false;
	for (var j = 0; j < this.config.objects.length; j+=2) {
		if(($("#Atick"+j).css("display")=="none" )&&($("#Atick"+(j+1)).css("display")=="none" ) )
			 notFinish = true;
	}
	return notFinish;
};

GamesChooseRadioBox.prototype.getCorrectAnswer = function(){
	$("*[data-A-type='tick']").css("display","none");
	for (var j = 0; j < this.config.objects.length; j++) {
		if(this.config.objects[j].response==1)
			$("#Atick"+j).toggle();
	}
};

//GamesChooseRadioBox.prototype.checkSingleResultIndex = function(index){
//	return ((this.config.objects[index].response==1) && ($("#Atick"+index).css("display")!="none" ));
//};
GamesChooseRadioBox.prototype.checkSingleResultIndex = function(index){
var index = index*2;
return (((this.config.objects[index].response==1) && ($("#Atick"+index).css("display")!="none" )) ||
  ((this.config.objects[index].response==0) && ($("#Atick"+index).css("display")=="none" )));
};

GamesChooseRadioBox.prototype.getCheckLength = function(){
	return this.config.objects.length/2;
};

GamesChooseRadioBox.prototype.getResult = function(){
	return this.config.result;
};

GamesChooseRadioBox.prototype.initialize = function(){
	if(this.config.fundal!=null){
		$("#gameStage").append("<img id='fundal'>");
		util.setImageStyle($("#fundal"), this.config.fundal);
	}
		
	for (var i = 0; i < this.config.objects.length; i++) {
		$("#gameStage").append(
				"<div id='AidInput"+i+"' data-A-index='"+i+"' "+
					" onclick='"+((!isRepeatActive)?"return false":"")+ "'" +
					" style='z-index:2000;border-style:solid;cursor:pointer;position:absolute;" +
					"width:25px;height:25px;outline: none;  border-color: #C08651;  box-shadow: 0 0 10px  #A77649;" +
					"top:"+this.config.objects[i].top+"px;" +
					"left:"+this.config.objects[i].left+"px;" +
					"background:transparent;'></div>" +
				"<img id='Atick"+i+"' data-A-type='tick' style='position:absolute;display:none;" +
					"top:"+(this.config.objects[i].top+2)+"px;" +
					"left:"+(this.config.objects[i].left+2)+"px;" +
					"' src='"+imagesCommon.tick+"' alt='' " +
					"width='20' height='20'/>");
		if(i%2==1){
			util.setCheckImage(this.config.nameGame, this.config.objects[i], Math.round((i-1)/2) ,-20,25);
		}
	}
	
	$("*[data-A-index]").mouseover(function() {
		if(!isActive)
			return false;
		($(this)).css("box-shadow","0 0 10px #C08651");
	});
	
	$("*[data-A-index]").mouseout(function() {
		if(!isActive)
			return false;
		($(this)).css("box-shadow","0 0 10px #C08651");
	});
	
	$("*[data-A-index]").click(function() {
		if(!isActive)
			return false;
		var no = ($(this)).attr("data-A-index")*1;
		$("#Atick"+no).toggle();
		no = ((no%2==0)?(no+1):(no-1));
		$("#Atick"+no).css("display","none");
	});
	
};

