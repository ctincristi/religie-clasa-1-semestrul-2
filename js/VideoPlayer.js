var mainGame;
var dates;
var noLevelImages;
var manifest = [];
var audioPath = "";
var gameName;
var column;
var scaleImages;
var srcVideo;

function VideoPlayer(json) {
	$("#bodyGame").empty();
	dates = (json.dates === undefined) ? new GameDates() : json.dates;
	gameName = (json.gameDates === undefined) ? "video" : json.gameDates;
	sarcina = (json.sarcina === undefined)?"":json.sarcina;
	srcVideo = (json.src === undefined) ? "" : json.src;
	noLevelImages = (json.noLevelImages === undefined) ? 5 : json.noLevelImages;
	//player.pause();
	mainGame = new MainGame(json.title);
	$("#acasa,#ajutor, #repeta, #verifica").remove();
	$("#gameDialog").dialog("open");
	if(sarcina.length != 0)
		playSound(sarcina);
	this.putVideo(json);
	
	
};




VideoPlayer.prototype.putVideo = function(json) {
	var width = 0;
	var height = 0;
	if(json.properties != null){
		width = json.properties.width;
		height = json.properties.height;
	}
//	$("#gameDiv").css("background","transparent");
	
	$("#gameDiv").append("<div id='gameStage' style='position:absolute;left:"+((1024-width)/2)+"px;width:"+width+"px;'></div>");
	
	 $("#gameStage").append(
	 		"<br><br><br><video id='videoPlayer' width='720' height='540' style='z-index:1600;' " +//border-radius:48px;
	 					"controls src='"+srcVideo+"'></video>");
	
//	$("#videoPlayer").attr("style","width:"+width+"px;left:0px");
		$("#videoPlayer").attr("style","padding-top:0px");
		
	
	$("#stopVideo").css("display",""); 
	$("#closeBtn,#stopVideo").css("position","absolute");
	$("#closeBtn,#stopVideo").css("top",(scale*20)+"px");
	$("#closeBtn").css("right",(scale*5)+"px");
	$("#stopVideo").css("right", (75*scale)+"px");
	
	setStyleBtn($("#closeBtn"),80,80);
	setStyleBtn($("#stopVideo"),117,100);
	
	function setStyleBtn(id,width,height) {
		var resize = 1;
		if(scale*width>35)
			resize=35/(scale*width);
		id.css("width", scale*width*resize+"px");
		id.css("height", scale*height*resize+"px");
		id.css("background-size", scale*(width)*resize + "px " + scale*(height)*resize+"px");
		//id.css("padding-left","5px");
	};

	//$("#closeBtn,#stopVideo").appendTo($("#gameStage"));
	
	
	$("#stopVideo").css("display",""); 
	$("#volum").remove();
	
	var video = document.getElementById("videoPlayer");        
	$("#stopVideo").click(function() {
	   video.currentTime = 0;
	   video.pause();
    });
   
    $("#gameStage").css("-webkit-transform", "scale(" + scale*3 + ")");
	$("#gameStage").css("-webkit-transform-origin","0% 0%");
	$("#gameStage").css("transform", "scale(" + scale*3 + ")");
    $("#gameStage").css("transform-origin","0% 0%");
	$("#gameStage").css("-ms-transform", "scale(" + scale*3 + ")");
	$("#gameStage").css("-ms-transform-origin","0% 0%");
	 
};