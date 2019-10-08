function GamesPuzzle(config){
	this.config = config;
}

GamesPuzzle.prototype.resetLevel = function() {
	$("*[data-t='puzzle']").remove();
	this.initialize();
};

GamesPuzzle.prototype.checkIfFinish = function() {
	var no = 0;
	$("*[data-type='area']").each(function(){
		console.log($(this).attr("id"));
		if( ($(this)).children().length==0)
			 no++;
	});
//	console.log(no!=0);
	return (no!=0);
};

GamesPuzzle.prototype.getCorrectAnswer = function(){
	$.each(this.config.objects, function(key, value){
		$("#imgDrag"+key).css("position","static").appendTo($("#areaDrop"+$("#imgDrag"+key).attr("data-response")));
	});
};

GamesPuzzle.prototype.checkSingleResultIndex = function(index){
	return ( $("#areaDrop"+index+">img").attr("data-response") == index );
};

GamesPuzzle.prototype.getCheckLength = function(){
	return this.config.objects.length;
};

GamesPuzzle.prototype.getResult = function(){
	return this.config.result;
};

GamesPuzzle.prototype.initialize = function(){
	config = this.config;
	if(this.config.fundal!=null){
		$("#gameStage").append("<img id='fundal' style='z-index:-1; border:dotted 3px; border-color:sienna;' data-t='puzzle'>");
		util.setImageStyle($("#fundal"), this.config.fundal);
	}
	if(this.config.dropArea!=null){
		$("#gameStage").append("<img id='dropArea' style='border-style:solid; border-color:#A77649;' data-t='puzzle'>");
		util.setImageStyle($("#dropArea"), this.config.dropArea);
	}
	var zIndex = 100;
	for (var i = 0; i < this.config.objects.length; i++) {
		$("#gameStage").append(
				"<img id='imgDrag"+i+"' data-pos=0 data-index='"+i+"' data-t='puzzle'" +
						"data-response='"+this.config.objects[i].response+"'" +
				" src='"+this.config.imagesSrc+this.config.objects[i].src+"'" +
				" style='z-index:200;position:absolute;outline: 2px solid transparent;cursor:pointer;" +
				"top:"+this.config.objects[i].top+"px;" +
				"left:"+this.config.objects[i].left+"px;" +
				"width:"+this.config.objects[i].width+"px;" +
				"height:"+this.config.objects[i].height+"px;'/>");
		$("#gameStage").append(
				"<div id='areaDrop"+i+"' data-index='"+i+"' data-type='area' data-t='puzzle' " +
				" style='z-index:5;position:absolute;"+//border-style:solid;" +
				((this.config.configStyle!=undefined)?this.config.configStyle:"")+
				"top:"+this.config.area[i].top+"px;" +
				"left:"+this.config.area[i].left+"px;" +
				"width:"+this.config.area[i].width+"px;" +
				"height:"+this.config.area[i].height+"px;'/>");
		droped("imgDrag"+i, "areaDrop"+i);
		//$( "#imgDrag"+i ).rotate(util.getRandomNumber(4)*90);
		
		$( "#imgDrag"+i ).dblclick(function (e) {
			zIndex++;
			($(this)).css('position','absolute').appendTo($("#gameStage"));
			($(this)).css("left",config.objects[($(this)).attr("data-index")].left+"px");
			($(this)).css("top", config.objects[($(this)).attr("data-index")].top+"px");
			$( "#areaDrop"+($(this)).attr("data-index")).css("z-index",zIndex);
			$("*[data-index]").mouseover(function() {
				($(this)).css("z-index",++zIndex);
			});
		});
		util.setCheckImage(this.config.nameGame,this.config.area[i],i,40,25);
	}
	
	
	util.resizeGameStage();
	var click = {
		    x: 0,
		    y: 0
	};
	function droped(idDraggable, idDroppable){
			$( "#"+idDraggable ).draggable({ 
				start: function(event) {
			        click.x = event.clientX;
			        click.y = event.clientY;
			    },

			    drag: function(event, ui) {

			        // This is the parameter for scale()
			        var zoom = scale*3;

			        var original = ui.originalPosition;
			        ui.position = {
			            left: (event.clientX - click.x + original.left) / zoom,
			            top:  (event.clientY - click.y + original.top ) / zoom
			        };

			    },
				revert: function( event ) {
					$(this).data("uiDraggable").originalPosition = {
						top : config.objects[$(this).attr("data-index")].top  ,
						left : config.objects[$(this).attr("data-index")].left 
					};
					if(!event){
						//playSound(soundsCommon.checkWrong);
					}
					return !event;
				}
			});
		
		
		$( "#"+idDroppable ).droppable({
			start: function(event, ui){
				$(this).css("z-index",zIndex).css('position','absolute');
			},
			accept: function(draggable) {
			        return $(this).find("*").length == 0;
			},
			drop: function( event, ui ) {
				tolerance: "intersect",
				//playSound(soundsCommon.click);
				$(this).append(ui.draggable.css('position','static'));
				$(this).css("z-index",zIndex);
				ui.draggable.css("z-index",zIndex);
				event.preventDefault();
			}
		});
	}
	

};

