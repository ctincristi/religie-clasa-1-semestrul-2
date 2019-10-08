
function GamesWriteNumbers(config){
	this.config = config;
}

GamesWriteNumbers.prototype.resetLevel = function() {
	$("#gameStage>input").val("");
	$("#gameStage>input").prop('readonly', false);
};

GamesWriteNumbers.prototype.checkIfFinish = function() {
	var notFinish = false;
	$("#gameStage>input").each(function() {
	    if ($(this).val() == "") {
		   notFinish = true;
	    }
	});
	return notFinish;
};

GamesWriteNumbers.prototype.getCorrectAnswer = function(){
	for (var j = 0; j < this.config.objects.length; j++) {
		$("#CidInput" + j).val(this.config.objects[j].response);
	}
};

GamesWriteNumbers.prototype.checkSingleResultIndex = function(index){
	//return (this.config.objects[index].response == $("#CidInput"+index).val());
	if(this.config.xx!=undefined){
		if(this.config.objects[index].response.indexOf($("#CidInput"+index).val())!=-1){
			return true;
		}else{
			return false;
		}
	}else{
		return (this.config.objects[index].response == $("#CidInput"+index).val());
	}
};

GamesWriteNumbers.prototype.getCheckLength = function(){
	return this.config.objects.length;
};

GamesWriteNumbers.prototype.getResult = function(){
	return this.config.result;
};

GamesWriteNumbers.prototype.initialize = function(){
   var config=this.config;
	if(this.config.fundal!=null){
		$("#gameStage").append("<img id='fundal'>");
		util.setImageStyle($("#fundal"), this.config.fundal);
	}
	for (var i = 0; i < this.config.objects.length; i++) {
		$("#gameStage").append(
				"<input type='text' id='CidInput"+i+"' data-C-type='number' maxlength="+this.config.objects[i].maxlength+" style='position:absolute;padding: 0;" +
						"text-align:center; outline: none; " +
						((this.config.colorInput==undefined)?
								("font-size:23px;border-color: #ffeeaa;  " +
						"box-shadow: 0 0 10px #ffeeaa;border-radius:50%50%50%50%;border:1;"):
						(this.config.colorInput)) +
						"z-index:99;" +
						"top:"+this.config.objects[i].top+"px;" +
						"left:"+this.config.objects[i].left+"px;" +
						"width:"+this.config.objects[i].width+"px;" +
						"height:"+this.config.objects[i].height+"px;"+
		"'/>");
		util.setCheckImage(this.config.nameGame,this.config.objects[i],i,0,30);
	}
	$("*[data-C-type]").mouseover(function() {
		  if(!isActive)
		   return false;
		  if(config.displayInput==undefined){
             if(config.overColor===undefined)			
			    ($(this)).css("box-shadow","0 0 10px orange");
		    }else{alert();
		    	($(this)).css("box-shadow",+config.overColor);
		    } 
		 });
		 
		 $("*[data-C-type]").mouseout(function() {
		  if(!isActive)
		   return false;
		  if(config.displayInput==undefined){
			  if(config.outColor===undefined)			  
				  ($(this)).css("box-shadow","0 0 10px #ffeeaa");
		      }else{
		    	  alert()
		    	  ($(this)).css("box-shadow", config.outColor);
		      }
		  
		 });
	util.validateInputNumber($("*[data-C-type='number']"));
	$("#gameStage").click(function(e) {
		console.log("left:"+Math.round((e.pageX-$("#gameStage").offset().left)/scale/3)+",top:"+
		Math.round((e.pageY-$("#gameStage").offset().top)/scale/3)+"");}); 
};

