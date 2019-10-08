
function GamesDiffCircle(config){
	this.config = config;
}

GamesDiffCircle.prototype.resetLevel = function() {
	$("*[data-A-type='tick']").css("display","none");
	$("*[data-val]").attr("data-val","0");
};

GamesDiffCircle.prototype.checkIfFinish = function() {
	var no = 0;
	$("*[data-A-index]").each(function(){
		if($("#Atick"+($(this)).attr("data-A-index")).css("display")!="none")
			no++;
	});
	if(no!=(this.config.objects.length/this.config.column))
		return true;
};

GamesDiffCircle.prototype.getCorrectAnswer = function(){
	$("*[data-A-type='tick']").css("display","none");
	for (var j = 0; j < this.config.objects.length; j++) {
		if(this.config.objects[j].response==1)
			$("#Atick"+j).toggle();
	}
};

GamesDiffCircle.prototype.checkSingleResultIndex = function(index){
	for (var j = 0; j < this.config.column; j++) {
		if( (this.config.objects[j+index*this.config.column].response==1) ){
			if($("#Atick"+(j+index*this.config.column)).css("display")=="none" )
				return false;
		}
	}
	return true;
};

GamesDiffCircle.prototype.getCheckLength = function(){
	return this.config.objects.length/this.config.column;
};

GamesDiffCircle.prototype.getResult = function(){
	return this.config.result;
};

GamesDiffCircle.prototype.initialize = function(){
	var config=this.config;
	if(this.config.fundal!=null){
		$("#gameStage").append("<img id='fundal'>");
		util.setImageStyle($("#fundal"), this.config.fundal);
	}

	for (var i = 0; i < this.config.objects.length; i++) {
		$("#gameStage").append("<div id='AidInput"+i+"' data-A-index='"+i+"' "+
				" onclick='"+((!isRepeatActive)?"return false":"")+ "' data-val=0 " +
				" style='z-index:2000;cursor:pointer;position:absolute;" +
				((this.config.displayInput===undefined)?"border-style:solid;outline: none;  border-color:  #A77649; " +
						" box-shadow: 0 0 10px  #A77649;" : "")+
				"width:"+(this.config.input.width+5)+"px;height:"+(this.config.input.height+5)+"px;" +
				"top:"+this.config.objects[i].top+"px;" +
				"left:"+this.config.objects[i].left+"px;" +
				"background:transparent;'></div>" +
				"<img id='Atick"+i+"'  data-A-indexImg='"+((i<5)?0:1)+"' data-A-type='tick' " +
						"style='position:absolute;display:none;" + 
					"top:"+(this.config.objects[i].top+this.config.imgTick.top)+"px;" +
					"left:"+(this.config.objects[i].left+this.config.imgTick.left)+"px;" +
					"' src='"+((this.config.imgTick===undefined)?imagesCommon.tick:this.config.imgTick.src)+"' alt='' " +
					"width='"+this.config.objects[i].width+"' height='"+this.config.objects[i].height+"'/>");
		if((i+1)%this.config.column==0){
			util.setCheckImage(this.config.nameGame, this.config.objects[i], (i+1)/this.config.column-1 ,10,this.config.objects[i].width+135);
		}
	}
	
	
	$("*[data-A-index]").click(function() {
		if(!isActive)
			return false;
		$("*[data-A-indexImg='"+((($(this)).attr("data-A-index")<5)?0:1)+"']").css("display","none");
		$("#Atick"+($(this)).attr("data-A-index")).css("display","");
		$("#AidInput"+($(this)).attr("data-A-index")).attr("data-val",
				($("#AidInput"+($(this)).attr("data-A-index")).attr("data-val")==0)?1:0);
	});
	
};

