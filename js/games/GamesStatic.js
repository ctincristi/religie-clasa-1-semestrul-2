var mainGame;
var dates;
var config;
var noLevelImages; 
var gameName;
var result;
var isActive;
var isRepeatActive;
var currentLevel;
var column;
var scaleImages;
var util = new Util();
var index;
var columns = 5;
var game;
var title;
function GamesStatic(json) {
	$("#bodyGame").empty();
	isActive = true;
	isRepeatActive = true;
	dates = (json.dates === undefined)?new GameDates():json.dates;
	gameName = (json.gameDates === undefined)?"GamesStatic":json.gameDates;
	sarcina = (json.sarcina === undefined)?"":json.sarcina;
	noLevelImages = (json.noLevelImages === undefined)?10:json.noLevelImages;
	columns = (json.columns === undefined)?5:json.columns;
	result = (json.result === undefined)?{}:json.result;
	title = (json.title === undefined)?{}:json.title;
	mainGame = new MainGame(json.title);
	
	config = dates.dates[gameName];
	game = new GamesStaticMain();
	game.initializeLevel();
	$("#gameDialog").dialog("open");
	if(sarcina.length != 0)
		playSound(sarcina);
	$("#stage").off();
	
	$("#verifica,#ajutor,#repeta").remove();
};

function GamesStaticMain(){
	
}

GamesStaticMain.prototype.initializeLevel = function(){
	
	$("#bodyGame").append("<div id='gameStage' style='position:static;" +
				"width:"+($("#gameDiv").width()-210*scale)+"px;height:"+
				$("#gameDiv").height()+"px'></div>");

	if(title.fundal!=null){
			$("#gameStage").append("<img id='fundal' src='" + title.fundal.src+"' " +
					"style='position:absolute;" +
						"top:"+title.fundal.top+"px;" +
						"left:"+title.fundal.left+"px;" +
						"width:"+title.fundal.width+"px;" +
						"height:"+title.fundal.height+"px;'>");
	}
	$("#gameStage").css("-webkit-transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("-webkit-transform-origin","0% 0%");
	$("#gameStage").css("transform", "scale(" + (scale*3) + ")");
    $("#gameStage").css("transform-origin","0% 0%");
	$("#gameStage").css("-ms-transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("-ms-transform-origin","0% 0%");
	
	$("#windowGameBackground").css("visibility","hidden");
	$("#windowGameBackgroundStatic").css("width", title.fundal.width*(scale*3) );
	$("#windowGameBackgroundStatic").css("left", ((w - ow * scale) / 2) - 30*scale+((ow * scale - (title.fundal.width*(scale*3)))/2) );
	$("#windowGameBackgroundStatic").css("visibility","");
	
	$("#gameDiv").css("width", title.fundal.width*(scale*3) );
	$("#gameDiv").css("left", ((w - ow * scale) / 2) - 30*scale+((ow * scale - (title.fundal.width*(scale*3)))/2) );
	//$("#fundal").css("left", 0 );
	
	    
};

