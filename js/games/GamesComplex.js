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
var columns;
var game;
var background;
var gamesComplex = [];
var task;

function GamesComplex(json) {
	$("#bodyGame").empty();
	isActive = true;
	isRepeatActive = true;
	dates = (json.dates === undefined)?new GameDates():json.dates;
	gameName = (json.gameDates === undefined)?"GamesComplex":json.gameDates;
	background = (json.background === undefined)?"":json.background;
	task = (json.task === undefined)?"":json.task;
//	console.log(background);
	config = dates.dates[gameName];
	sarcina = (json.sarcina === undefined)?"":json.sarcina;
//	noLevelImages = config.objects.length;
//	columns = (dates.dates[gameName].columns ===
//	undefined)?5:dates.dates[gameName].columns;
//	result = (json.result === undefined)?{}:json.result;
	mainGame = new MainGame(json.title);
	gamesComplex = [];
	game = new GamesComplexMain();
	game.initialize();
	$("#gameDialog").dialog("open");
	if(sarcina.length != 0)
		playSound(sarcina);
	$("#stage").off();
	index = -1;
};

function GamesComplexMain(){

}
GamesComplexMain.prototype.checkResults = function() {
	player.pause();
	isRepeatActive = false;
	isActive = false;
	wrongAnswerCount = 0;
	index = -1;
	var indexGame = 0;
	var config = gamesComplex[indexGame].config;
	var checkLength = gamesComplex[indexGame].getCheckLength();
	var isWrong = false;
	
	index = -1;
	var check = function() {
		if (++index < checkLength) {
			if( !gamesComplex[indexGame].checkSingleResultIndex(index) ){
				wrongAnswerCount++;
				isWrong = true;
			}
			check();
		}else{
			if (index == checkLength) {
				util.storageResults(wrongAnswerCount, gamesComplex[indexGame].getResult());
				if(++indexGame<gamesComplex.length){
					index = -1;
					config = gamesComplex[indexGame].config;
					checkLength = gamesComplex[indexGame].getCheckLength();
					wrongAnswerCount = 0;
					check();
				}
			}
		}
	};
	check();
	index = -1;
	indexGame = 0;
	wrongAnswerCount = 0;
	config = gamesComplex[indexGame].config;
	checkLength = gamesComplex[indexGame].getCheckLength();
	 
	check = function() {
		if (++index < checkLength) {
			setTimeout(check, 1500);
			if( gamesComplex[indexGame].checkSingleResultIndex(index) ){
				playSound(soundsCommon.checkRight);
				
				$("#"+config.nameGame+"checkImage" +(index)).attr("src",imagesCommon.ok).css("visibility","");
			}else{
				playSound(soundsCommon.checkWrong);
				$("#"+config.nameGame+"checkImage" +(index)).attr("src",imagesCommon.wrong).css("visibility","");
				wrongAnswerCount++;
			}
		}
		if (index == checkLength) {
			
			if(++indexGame<gamesComplex.length){
				index = -1;
				config = gamesComplex[indexGame].config;
				checkLength = gamesComplex[indexGame].getCheckLength();
				wrongAnswerCount = 0;
				check();
			}else{
				if(isWrong){
					playSound(soundsCommon["wrongAnswer"+util.getSoundWrong(wrongAnswerCount,checkLength)]);
					player.addEventListener('ended', game.wrongAnswerComplete, false);
				}else{
					playSound(soundsCommon.rightAnswer);
					isRepeatActive = true;
				}
			}
		}
	};
	check();
};

GamesComplexMain.prototype.checkResult = function(event) {
	var isFinish = true;
	var count = 0;
	$.each(gamesComplex, function(key, game) {
		count++;
		if(game.checkIfFinish()==true){
			isFinish = false;
		}
	});	
	if(!isFinish){
		playSound(soundsCommon.notFinish);
	}else{
		game.checkResults();
	}
};

GamesComplexMain.prototype.wrongAnswerComplete = function(e) { 
	player.removeEventListener('ended', game.wrongAnswerComplete, false);
	playSound(soundsCommon.correctAnswer);
	player.addEventListener('ended', game.correctAnswerComplete, false);
};

GamesComplexMain.prototype.correctAnswerComplete = function(e){// afiseaza
	player.removeEventListener('ended', game.correctAnswerComplete, false);
//	$("#bodyGame").append("<div id='correctAnswer'class='correctAnswer'style=' position:absolute;"+
//			"align:center; bottom:"+(scale*(420))+"px; right:"+(scale*800)+"px; font-family:Arial;font-weight:bold; color:red;font-size:30px' ></div>");
	//$("#correctAnswer").html("RASPUNSUL CORECT ESTE");
	$.each(gamesComplex, function(key, game) {
		game.getCorrectAnswer();
	});

	$(".chkImg").attr("src",imagesCommon.empty);
	isRepeatActive = true;
};

GamesComplexMain.prototype.initialize = function(){
	$("#bodyGame").append("<div id='gameStage' style='position:static;" +
	"width:"+($("#gameDiv").width()-210*scale)+"px;height:"+$("#gameDiv").height()+"px'></div>");
	
	 if(task!=undefined && task!=null && task!="undefined"&& task!=""){
		$("#gameStage").append("<span style='position:absolute;top:"+task.y+"px;" +
			 		"left:"+task.x+"px;width:750px;" +
			 		"font-family:Arial; font-size:20px;color:black'>"+ task.text +"</span>");
	}
	
	if(background!=undefined){
		$("#gameStage").append("<img id='background' style='z-index:-1'>");
		util.setImageStyle($("#background"), background);
	}
	
	
	
	$.each(config, function(key, value) {
		gamesComplex[key] = new window[value.nameGame](value);
		gamesComplex[key].initialize();
	});
	util.resizeGameStage();
	$("#verifica").off();
	$("#repeta").off();
	
	$("#verifica").click(function(event) { 
		if(!isActive) 
			return false;
		game.checkResult(); 
	});
	
	$("#repeta").click(function(event) {
		if(!isRepeatActive)
			return false;
		isActive = true;
		index=-1;
		$(".chkImg").attr("src",imagesCommon.empty);
		for(var i=0;i<gamesComplex.length;i++){
			gamesComplex[i].resetLevel();
		}
		if(sarcina.length != 0)
			playSound(sarcina);
	});	
	$("#gameStage").click(function(e) {
		console.log("left:"+Math.round((e.pageX-$("#gameStage").offset().left)/scale/3)+",top:"+
		Math.round((e.pageY-$("#gameStage").offset().top)/scale/3)+"");}); 
};
