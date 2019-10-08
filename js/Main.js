var Page;
var tdX = 0;
var manifest = [];
var queue;
var localDates;
var audioPath = "sounds/";
var gd = new GameDates();
var indexPage = 0;
var pagesVisited = [ 1 ];
var gamesVisited = [];
var isVisited = false;
var speedPage = 1000;
// stage dimensions
var ow = 3134; // 3050 your stage width
var oh = 1974; // 1986your stage height
var w;
var h;
var scale;
var scaleP;
var player;
var videoPlayer;
var soundsCommon = {};
var imagesCommon = {};
var pageWithoutNumber = 2;
var timeOut = 1500;
$(function() {///localStorage.clear();sessionStorage.clear();
		
	if ((navigator.platform.indexOf("iPhone") != -1)
			|| (navigator.platform.indexOf("iPad") != -1)) {
		w = $(window).width();// screen.width;
		h = $(window).height();// screen.height;
	} else {
		w = screen.width;
		h = screen.height;
	}

	scale = Math.min(w / ow, h / oh) - (Math.min(w / ow, h / oh) / 6);
	scaleP = Math.min(w / ow, h / oh);
	initImages();
	initSounds();

	$("#showImage").dialog({
		closeOnEscape: false,
		autoOpen : false,
		show : {
			effect : "clip",
			duration : 500
		},
		hide : {
			effect : "clip",
			duration : 500
		},
		modal : true,
		resizable : false,
		draggable : false,
		width : 485,
		height : 320,
	});
	$(".ui-dialog-titlebar").hide();

	function initSounds() {
		manifest = gd.sounds;

		for (var i = 0; i < gd.sounds.length; i++) {
			soundsCommon[gd.sounds[i].id] = "sounds/" + gd.sounds[i].src;
		}
		init();
	}
	function initImages() {
		for (var i = 0; i < gd.images.length; i++) {
			imagesCommon[gd.images[i].id] = gd.images[i].src;
		}
	}
	
	function init() {
		$("#bb-bookblock")
				.append(
						"<div class='bb-item' style=\"position:absolute;\" id='bb-item1'>"
								+ "<table id='tab0' style=\"position:absolute;\">"
								+ "<tr>"
								+ "<td>"
								+ "<img id='pageImage1' src='' style='position:relative;left:36px;' alt='image02'/>"
								+ "</td>"
								+ "<td id='tdUmbra0' >"
								+ "</td>"
								+ "<td>"
								+ "<img  id='pageImage2' style='position:relative;right:44px;' src='' "
								+ " alt='image02'/>" + "</td>" + "</tr>"
								+ "</table>" + "</div>");

		$("#tab0").append("<img id='imgg' src='images/butoane_main/rama.png'"
								+ " style='position:absolute;left:0px;z-index:-1;top:6px;width:3109px' alt='image02'/>");
		$("#tdUmbra0").append("<img id='umbra"
								+ "' src='images/butoane_main/umbra.png'"
								+ " style='position:relative;left:-4px;top:6px;z-index:2;' alt='image02'/>");

		$("#slider").slider({
			value : 2,
			min : 1,
			max : 8,
			step : 1,
			slide : function(event, ui) {
			}
		});
		$("#viewPage").val("");
		initPage(gd, 0);
		resize(2);
		$("#bb-bookblock").attr("align", "right");

		

		var maxPage = (gd.main.pages.length * 2) - pageWithoutNumber;
		$("#spanMaxPage").html("/" + (gd.main.maxPage));

		$("#next,#next1").click(function() {
			if (indexPage < Math.round((maxPage + pageWithoutNumber) / 2)) {
				indexPage++;
				putPageNumber(indexPage);
			}
			initPag(indexPage);
			if(indexPage==34){
				$("#avatar").remove();
		}
		});
		
		$("#prev,#prev1").click(function() {
			if (indexPage > 0) {
				indexPage--;
				putPageNumber(indexPage);
			}
			initPag(indexPage);
		});
		$("#first").click(function() {
			indexPage = 0;
			putPageNumber(indexPage);
			initPag(indexPage);
		});
		$("#last").click(function() {
			//indexPage = ((gd.main.maxPage==64)?33:34);
			indexPage = Math.round((maxPage + pageWithoutNumber) / 2);
			putPageNumber(indexPage);
			initPag(indexPage);
			$("#avatar").remove();
			
		});
		
		
		$("#viewPage").keypress(function(event) {
			   if (event.which == 13) {
			    if ($("#viewPage").val() * 1 <= gd.main.maxPage) {
			     indexPage = Math.round(($("#viewPage").val() * 1 + 1) / 2);
			     initPag(indexPage);
			    }
			   }
			  });
			

		$("#btnMinus").click(function() {
			reseizeStage(-1);
		});
		$("#btnPlus").click(function() {
			reseizeStage(+1);
		});

		function reseizeStage(index) {
			if (!(($('#slider').slider("value")) == 8 && index == 1)
					&& !(($('#slider').slider("value")) == 1 && index == -1)) {
				$('#slider').slider('value',
						$('#slider').slider("value") + index);
				$('#mySlider').html(getSlider($('#slider').slider("value")));
				resize($('#slider').slider("value"));
			}
		}

		function getSlider(index) {
			var text = "";
			for (var i = 0; i < index; i++)
				text += "-";
			return text;
		}

		$("#gameDialog").dialog({
			closeOnEscape: false,
			autoOpen : false,
			position : [ 'midle', 0 ],
			modal : true,
			resizable : false,
			draggable : false,
			width : w - 5,
			height : h - 101
		});

		$(".ui-dialog-background ").removeClass("ui-dialog-background ");
		$(".ui-dialog").css("padding", "0px");
		$(".ui-dialog").css("border", "0px");
		$(".ui-dialog-titlebar").remove();

		$("div.ui-dialog-titlebar").remove();

		$("#windowGameBackground").css("width", (ow * scale) + "px");
		$("#windowGameBackground").css("height", (oh * scale) + "px");
		$("#windowGameBackground").css("left", (w - ow * scale) / 2 + "px");
		$("#windowGameBackground").css("top", (50*scale)+ "px");
		
		$("#windowGameBackgroundStatic").css("width", (ow * scale) + "px");
		$("#windowGameBackgroundStatic").css("height", (oh * scale) + "px");
		$("#windowGameBackgroundStatic").css("left", (w - ow * scale) / 2 + "px");
		$("#windowGameBackgroundStatic").css("top", (50*scale)+ "px");
		
		$("#gameDiv").css("width", (ow * scale) + "px");
		$("#gameDiv").css("height", (oh * scale) + "px");
		$("#gameDiv").css("left", (w - ow * scale) / 2 + "px");
		$("#gameDiv").css("top", (50*scale)+ "px");
		
		
		$("#background_buttons").css("left", (w - 1012) / 2 + "px");
		$("#header").css("left", (w - 1012) / 2 + "px");

		$(".ui-dialog").css("z-index", "100000");

	}
	$("#rezultate").click(function() {
		$("#pageImage1").attr("src", "images/pagina/pg_alba.jpg");
		$("#pageImage2").attr("src", "images/pagina/pg_alba.jpg");
		$("#bodyDiv").empty();
		$("#blanket").remove();
		new Util().getResult();
		$("#closeBtnResult").click(function() {
			initPag(indexPage);
			//console.log("indexPage1="+indexPage);
			if(indexPage==34){//remove avatar
				//console.log("indexPage="+indexPage);
				$("#avatar").remove();
			}
		});
	});
	$("#cuprins").click(function() {
		indexPage=2;
		putPageNumber(2);
		initPag(2);
	});
	function resize(mySlider) {
		mySlider += -3;
		scaleP = Math.min(w / ow, h / oh) + (mySlider / 36);
		tdX = ((w - (ow * scaleP)) / 2);
		$("#bb-bookblock").css("-webkit-transform", "scale(" + scaleP + ")");
		$("#bb-bookblock").css("transform", "scale(" + scaleP + ")");
		if(mySlider<1)
		$("#bb-bookblock").css("left", tdX + "px");
		$("#headerDiv").css("left", "222px");

		var indent = 0;
		if ((w - ow) > 0)
			indent = ((w - ow) / 2) * 1;
		$("#headerDiv").css("left", indent + "px");
	}

	function initPage(gd, page) {
		$("#bodyDiv").empty();
		$("#bodyDiv").css("display", "none");
		if( page == 0 || page == 34 ){
			$("#tab0").hide();
			$("#blanket").remove();
			if($("#blanket").length==0){
				$("#bb-item1").append("<div id='blanket' style='cursor:pointer;width:2200px;align:center'>" +
					"<img  width=1567 height=1975 src='"+((page == 0)?gd.main.coperta:gd.main.coperta1)+"'></div>");
				if(page==0){
					$("#blanket").click(function(event) {
						indexPage=1;
						putPageNumber(1);
						initPag(1);
					});
				}
			}
			$("#viewPage").val("");
		}else{
			$("#blanket").remove();
			$("#tab0").show();
		var indexPage1 = page - 1;
		var currentPage = gd.main.pages[indexPage1];
		$("#pageImage1").attr("src", currentPage.pageImage);
		$("#pageImage2").attr("src", currentPage.pageImage2);
		if (currentPage.games !== undefined) {
			for (var i = 0; i < currentPage.games.length; i++) {
				$("#bodyDiv").append("<img id='gamePage"+ i+ "'" +
						"class="+((currentPage.games[i].classCss==null)?"btn_games":currentPage.games[i].classCss) +
						" style='z-index:4000; position: absolute; "
							+ setStyle(currentPage.games[i])
							+ "'/>" );
				var game = {indexPage:indexPage1, id:i, type:"games"};
				$("#gamePage" + i).attr("value", JSON.stringify(game));
				
				$("#gamePage" + i).click(function(event) {
					if (currentPage.inputs !== undefined && currentPage.inputs !== null){
						if(util.checkRights(JSON.parse($(this).attr("value")).id)===false){
							event.stopPropagation();
							startGame(JSON.parse($(this).attr("value")));
						}
					}else{
						event.stopPropagation();
						startGame(JSON.parse($(this).attr("value")));
					}
				});
			}
		}
		if (currentPage.btnImages !== undefined) {
			for (var i = 0; i < currentPage.btnImages.length; i++) {
				$("#bodyDiv").append("<div class="+currentPage.btnImages[i].classCss +
						" style='z-index:4;position: absolute; "
							+ setStyle(currentPage.btnImages[i])+ "'/>" );
			}
		}
		
///	begin	
	/*	$("#bodyDiv").append("<div id='ccc' style='position:absolute;z-index:1000;top:-100px;left:-100px;width:100px;height:100px;border-style:solid'>")	;
		var click = {
		    x: 0,
		    y: 0
		};	
		$("#ccc").resizable({  
			resize: function( event, ui ) {
				$(this).css("width",ui.size.width+"px");
				$(this).css("height",ui.size.height+"px");
		}});
		//x : 940,y : 160,width : 400,height : 100,
		$("#ccc").dblclick(function(e) {
			console.log("x:"+Math.round(($(this)).offset().left/scaleP-$("#tab0").offset().left/scaleP)+",",
					"y:"+Math.round(($(this)).offset().top/scaleP-$("#tab0").offset().top/scaleP)+",",
					"width:"+($(this)).width()+",",
					"height:"+($(this)).height()+","
					//,"classCss:"+"\"btn_img1\"" 
					);
		 });
		
			$("#ccc").draggable({start: function(event) {
		        click.x = event.clientX;
		        click.y = event.clientY;
		    },

		    drag: function(event, ui) {

		        // This is the parameter for scale()
		        var zoom = scaleP;

		        var original = ui.originalPosition;

		        // jQuery will simply use the same object we alter here
		        ui.position = {
		            left: (event.clientX - click.x + original.left) / zoom,
		            top:  (event.clientY - click.y + original.top ) / zoom
		        };

		 }});*/
//end		
		
		if (currentPage.cuprins !== undefined) {
			for (var i = 0; i < currentPage.cuprins.length; i++) {
			$("#bodyDiv")
			.append(
			"<img id='cuprins"+i+"'class='btn_games' style='z-index: 3999; position: absolute; "
			+ setStyle(currentPage.cuprins[i])
			+ " ' value='"
			+ JSON.stringify(currentPage.cuprins[i].pageNumber)
			+ "'/>");
			$("#cuprins"+i).click(function(event) {
				indexPage = JSON.parse($(this).attr("value"));
				putPageNumber(indexPage);
				initPag(indexPage);
			});
			}
		}
			
		if (currentPage.videos !== undefined) {
			 for (var i = 0; i < currentPage.videos.length; i++) {
				 $("#bodyDiv").append(
				 "<button id='video"+i+"' class='btn_games' style='z-index: 4000; position: absolute; "
				 + setStyle(currentPage.videos[i])
				 + "' ></button>");
				 var video = {indexPage:indexPage1, id:i, type:"videos"};
				 $("#video" + i).attr("value",JSON.stringify(video));
				 $("#video"+i).click(function(event) {
					 event.stopPropagation();
					 startGame(JSON.parse($(this).attr("value")));
				 });
			 }
		}
		
		if (currentPage.inputs !== undefined && currentPage.inputs != null) {
			 for (var i = 0; i < currentPage.inputs.length-1; i++) {
				 $("#bodyDiv").append(
				 "<div id='divEvl"+i+"' style='width:100px;height:100px;z-index: 3999;" +
				 		"backgroud:red;font-size:62px; position: absolute; "
				 + setStyle(currentPage.inputs[i])
				 + "' ></div>");
			 }
			 util.getPageResultEval(currentPage);
			 $("#bodyDiv").append(
					 "<button id='btndivEvl' class='reset'"+ 
					 "style='z-index: 3999;" +
					 		" position: absolute; "
					 + setStyle(currentPage.inputs[5])
					 + "' ></div>");
			 $("#btndivEvl").click(function(){
				 util.newEvl();
			 });
		}
		

		 $("#bodyDiv").append("<img src='images/logo/avatar.gif' id='avatar' style='position:absolute;z-index;19999;top:1500px;left:1400px;'" +
		 		 " width=330px;height=330px/>");		 
		if (currentPage.corner !== undefined && currentPage.corner === true) {
			$("#tab0").append(
					"<div id='corner_left_up' corner='' class='corner_left_up' "
							+ " value='prev'></div>");
			$("#tab0").append(
					"<div id='corner_left_down' corner=''class='corner_left_down'"
							+ " value='prev'> </div>");
			$("#tab0").append(
					"<div id='corner_right_up' corner='' class='corner_right_up'"
							+ " value='next'> </div>");
			$("#tab0").append(
					"<div id='corner_right_down' corner='' class='corner_right_down'"
							+ " value='next'> </div>");
			$("*[corner]").click(function(event) {
				$('#' + $(this).attr("value")).click();
			});
		}
		}
		$("#bodyDiv").delay(speedPage).fadeIn();
	}

	function setStyle(dates) {
		var styles = "";
		if (dates.width !== undefined) {
			styles = "width:" + dates.width + "px;";
		}
		if (dates.height !== undefined) {
			styles += "height:" + dates.height + "px;";
		}
		if (dates.y !== undefined) {
			styles += "top:" + dates.y + "px;";
		}
		if (dates.x !== undefined) {
			styles += "left:" + dates.x + "px;";
		}
		if (dates.image !== undefined) {
			styles += "background:url('" + dates.image
					+ "');background-repeat: no-repeat;";
		}
		return styles;
	}
	util.validateInputNumber($("#viewPage"));
	
	
	function putPageNumber(indexPage) {
		if (indexPage * 2 - pageWithoutNumber == -2)
			$("#viewPage").val("");
		else if (indexPage * 2 - pageWithoutNumber == 0)
			$("#viewPage").val("1");
		else
			$("#viewPage").val(indexPage * 2 - pageWithoutNumber);
	}
	function initPag(page) {
		$("#bodyDiv").empty();
		$("*[corner]").remove();
		initPage(gd, page);
	}
	
loginUser();
	
function loginUser(){
		
		var localStorage = new MyLocalStorage();
		var sessionStorage = new MySessionStorage();
		if(sessionStorage.getItem(gd.keys.userSession) == null){
			if(localStorage.getItem(gd.keys.allUsers)!=null){
				$("#divForm").append("<b>Selectează un nume existent:</b>&nbsp;<select id='combo' class='inputName'></select>"+
				"&nbsp;<input type=button id='loginSelect' class='btn_login' value='Intră'/><br><br><br><br>");
				$.each(JSON.parse(localStorage.getItem(gd.keys.allUsers)), function(key, value){
					$("#combo").append("<option>"+key+"</option>");
				});
			}

			$("#divForm").append("<b>Introdu numele tău</b>&nbsp;&nbsp;&nbsp; <br><b>Nume:</b> <input type='text' class='inputName' id='idInputName'>" +
			"&nbsp;<input type=button id='saveName' class='btn_login' value='Intră'/><br><br>");
		}else{
			$("#divForm").prepend("<br><b>Bine ai venit, "+sessionStorage.getItem(gd.keys.userSession) + 
			"!</b>&nbsp;&nbsp;<input type=button id='login' class='btn_login' value='Intră'/><br><br><br>");

			$("#divForm").append("<b>Selectează un nume existent:</b>&nbsp;<select id='combo' class='inputName'></select>&nbsp;&nbsp;<input type=button id='loginSelect' class='btn_login' value='Intră'/>");
			
			$("#divForm").append("<br><br><b>Introdu numele tău:</b>&nbsp;&nbsp;&nbsp; <br><b>Nume:</b> <input type='text' class='inputName' id='idInputName'>" +
			"&nbsp;&nbsp;<input type=button id='saveName' class='btn_login' value='Intră'/><br><br>");
			
			$.each(JSON.parse(localStorage.getItem(gd.keys.allUsers)), function(key, value){
				$("#combo").append("<option>"+key+"</option>");
			});
		}

		$("#login").click(function(){
			$( "#divForm" ).dialog("close");
			$( "#userName" ).text("Bine ai venit, " + sessionStorage.getItem(gd.keys.userSession));
		});

		$("#loginSelect").click(function(){
			sessionStorage.setItem(gd.keys.userSession, $('#combo :selected').text() );
			$( "#userName" ).text("Bine ai venit, " + $('#combo :selected').text());
			$( "#divForm" ).dialog("close");
			initPag(indexPage);
		});
		

		

		$("#saveName").click(function(){
			var user = $("#idInputName").val();
			if(user == ""){
				alert("Trebuie să introduci numele tău!");
			}else{
				allUsers = localStorage.getItem(gd.keys.allUsers);
				myUsers = {};
				if(allUsers != null)
					myUsers = JSON.parse(allUsers);
				if(myUsers[user]!=null){
					alert("Acest nume există deja!");
				}else{	
					myUsers[user] = new Date();
					localStorage.setItem(gd.keys.allUsers, JSON.stringify(myUsers));
				}
				sessionStorage.setItem(gd.keys.userSession, user);
				$( "#divForm" ).dialog("close");
				$( "#userName" ).text("Bine ai venit, " + user);
			}
			initPag(indexPage);
		});

		$( "#divForm" ).dialog({
			closeOnEscape: false,
			height: 340,
			width:650,
			buttons: null,
			modal: true

		});
		$("div.ui-dialog-titlebar").remove();
		
	}
	$("#userName").click(function(){
		$( "#divForm" ).empty();
		$( "#divForm" ).dialog("open");
		loginUser();
	});
//	function startGame(params) {
//		var val = gd.main.pages[params.indexPage][params.type][params.id];
//		switch (val.name) {
//			case "video":
//				new VideoPlayer(val.gameInstance);
//			break;
//			default :
//				new window[val.name](val.gameInstance);
//		}
//	}
	function startGame(params) {
		var val = gd.main.pages[params.indexPage][params.type][params.id];
		switch (val.name) {
		case "audio":
			    if($("#gameDiv").length==1 ){
				     $("#gameDiv").append("<audio controls id='player' style='display:none'>" +
				      "<source src='' type='audio/mpeg' ></audio>");
				      player = new MediaElement('player', {});
			    }
		       playSound(val.srcAudio);
		       break;	
			case "video":
				new VideoPlayer(val.gameInstance);
			break;
			default :
				sarcina = val.gameInstance.sarcina;
				new window[val.name](val.gameInstance);
		}
	}

});
function playSound(soundName) {
	player.pause();
	player.setSrc(soundName);
	player.play();
}
function removeAllSound(soundName) {
	$( "#player").remove();
	 $("#gameDiv").append("<audio controls id='player' style='display:none'>" +
		"<source src='' type='audio/mpeg' ></audio>");
	 player = new MediaElement('player', {});
}
