/**
 * 
 */


function Util() {
}

Util.prototype.setCheckImage = function(gameName,object,index,width,height) {
	$("#gameStage").append("<img id='"+gameName+"checkImage"+index+"' class='chkImg' " +
			"style=\"position:absolute;visibility:hidden;z-index:399;width:23:px;height:23px;" +
			"top:"+(object.top+width)+"px;" +
			"left:"+(object.left+height)+"px;\"" +
			"src='"+imagesCommon.empty+"' />");
};


Util.prototype.setCheckImageScale = function(gameName,object,index,width,height) {
	$("#gameStage").append("<img id='"+gameName+"checkImage"+index+"' class='chkImg' " +
			"style=\"position:absolute;visibility:hidden;z-index:399;width:23:px;height:23px;" +
			"top:"+((object.top+width)*scale*3)+"px;" +
			"left:"+((object.left+height)*scale*3)+"px;\"" +
			"src='"+imagesCommon.empty+"' />");
};
Util.prototype.setImageStyle = function(id,object) {
	id.css("position","absolute");
	if(object.top!=null)
		id.css("top",object.top+"px");
	if(object.left!=null)
		id.css("left",object.left+"px");
	if(object.width!=null)
		id.css("width",object.width+"px");
	if(object.height!=null)
		id.css("height",object.height+"px");
	if(object.src != null)
		id.attr("src",(object.src=="empty")?imagesCommon.empty:object.src);
};

Util.prototype.setImgStyleScale = function(id,object) {
	id.css("position","absolute");
	if(object.top!=null)
		id.css("top",(object.top*scale*3)+"px");
	if(object.left!=null)
		id.css("left",(object.left*scale*3)+"px");
	if(object.width!=null)
		id.css("width",(object.width*scale*3)+"px");
	if(object.height!=null)
		id.css("height",(object.height*scale*3)+"px");
	if(object.src != null)
		id.attr("src",(object.src=="empty")?imagesCommon.empty:object.src);
};

Util.prototype.resizeGameStage = function() {
	$("#gameStage").css("-webkit-transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("-webkit-transform-origin","0% 0%");
	$("#gameStage").css("transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("transform-origin","0% 0%");
	$("#gameStage").css("-ms-transform", "scale(" + (scale*3) + ")");
	$("#gameStage").css("-ms-transform-origin","0% 0%");
};


Util.prototype.storageResults = function(wrongAnswerCount, result) {
	var localStorage = new MyLocalStorage();
	var date = new Date();
	var json = {};
	json.time = date.getTime();
	json.name = new MySessionStorage().getItem(gd.keys.userSession);
	json.time = new Date().getTime();
	json.pageNumber = result.page;
	json.gameNumber = result.noExcercise;
	json.totalItem = result.totalItem;
	json.correctItem = result.totalItem - wrongAnswerCount;


	var key = gd.keys.gameKey;
	var keyEval = "";
	if(result.type !== undefined){
		key =  gd.keys.result;
		keyEval = gd.keys.resultTemp;
		json.totalItem*=5;
	}
	if( keyEval.length>0 ){
		if(localStorage.getItem(getEvalKey(keyEval))==undefined){
			json.id = 0;
		}else{
			json.id = JSON.parse(localStorage.getItem(getEvalKey(keyEval))).id;
		}
		json.correctItem *= 5;
	}
		
	localStorage.setItem(key+date.getTime().toString(), JSON.stringify(json));
	
	
	
	
	if( keyEval.length>0 ){
		var jsonEvl = {};
		jsonEvl["1"] = "";
		jsonEvl["2"] = "";
		jsonEvl["3"] = "";
		jsonEvl["4"] = "";
		jsonEvl[json.gameNumber] = json.correctItem;
		
		if(localStorage.getItem(getEvalKey(keyEval))==undefined){
			jsonEvl.id = 0;
			localStorage.setItem(getEvalKey(keyEval), JSON.stringify(jsonEvl));
		}
		var json1 = {};
		json1 = localStorage.getItem(getEvalKey(keyEval));
		logJson = JSON.parse(json1);
		logJson[json.gameNumber] = json.correctItem;
		if( keyEval.length>0 ){
			localStorage.setItem(getEvalKey(keyEval), JSON.stringify(logJson));
		}else{
			localStorage.setItem((keyEval), JSON.stringify(logJson));	
		}
		var amount = 0;
		for (var i = 0; i < 4; i++) {
			if(logJson[i+1] != undefined){
				 if(logJson[i+1]!==""){
					 $("#divEvl" + i).html(logJson[i+1]);
					 amount += logJson[i+1];
				 }
			}
		}
		$("#divEvl4").html(amount);
	}
};
Util.prototype.getPageResultEval = function(currentPage){
	
	var keyEval= getEvalKey(gd.keys.resultTemp);
	console.log(keyEval);
	if(!(gd.isIe && $.cookie(keyEval)!=null) || !(!gd.isIe &&((keyEval) in localStorage))){
	}else{
		var json = {};
		console.log(keyEval);
		json = localStorage.getItem(keyEval);
		logJson = JSON.parse(json);
		var amount = 0;
		for (var i = 0; i < currentPage.inputs.length-2; i++) {
			if(logJson[i+1] != undefined){
				 if(logJson[i+1]!==""){
					 $("#divEvl" + i).html(logJson[i+1]);
					 amount += logJson[i+1];
				 };
			};
		}
		$("#divEvl4").html(amount);
	}
	return true;
};
function getEvalKey(key){
	return key + "-&;'+" + new MySessionStorage().getItem(gd.keys.userSession);
}
Util.prototype.checkRights = function(no){
	if($("#divEvl" + no).html().length==0){
		return false;	
	}
	alert("Acest exercițiu l-ai facut. Alege altul!");
	return true;
};
Util.prototype.newEvl = function(){
	var localStorage = new MyLocalStorage();
	var json = {};
	json = localStorage.getItem(getEvalKey(gd.keys.resultTemp));
	logJson = JSON.parse(json);
	for(var i=1;i<=4;i++){
		if(logJson[i]===""){
			alert("Nu ai terminat toate exercițiile!");
			return false;
		};
	}
	var jsonEvl = {};
	jsonEvl["1"] = "";
	jsonEvl["2"] = "";
	jsonEvl["3"] = "";
	jsonEvl["4"] = "";
	jsonEvl.id = logJson.id+1;
	
	localStorage.setItem(getEvalKey(gd.keys.resultTemp), JSON.stringify(jsonEvl));
	for (var i = 0; i <= 4; i++) {
		$("#divEvl" + i).html("");
	}
	return true;
};



Util.prototype.getResult = function() {
	var localStorage = new MyLocalStorage();
	$("#bodyDiv").append(
			"<br><br><br><div id='tabs'><ul>"
					+ "	<li><a href='#tabs-1'>Rezultate exerciții</a></li>"
					+ "	<li><a href='#tabs-2'>Rezultate evaluare</a></li>"
					+ "	</ul></div>");
	$("#tabs").tabs();
	$('#tabs .ui-tabs-nav a[href="#tabs-1"], #tabs-1').addClass('status1');
	$('#tabs .ui-tabs-nav a[href="#tabs-2"], #tabs-2').addClass('status2');
	$("#tabs").append("<div id='tabs-2' style='width:1420px;height:700px;background;red'></div>");
	$("#tabs").append("<div id='tabs-1' style='width:1420px;height:700px;'></div>");
	$("#tabs").append("<button id='closeBtnResult'  class='close' " +
			"style='position:absolute;top:5px;right:5px;z-index:2000;width:35px;height:35px;' ></button>");
	
	$("#tabs-2").append("<table id='tableResultEvaluation'>"
			+ "<thead id='resultTheadEvaluation'></thead></table>");
	$("#resultTheadEvaluation").append(
		$("<tr style='width:100%;background-color:rgb(230,152,83)'>")
				.append("<th>Nume</th>").append("<th>Data</th>").append(
						"<th>Pagina</th>").append("<th>Exercițiu</th>").append(
						"<th>Total<br>punctaj</th>").append("<th>Punctaj<br> obținut</th>").append(
						"<th>Pagina</th>"));
	
	$("#tabs-1").append("<table id='tableResult'>"
							+ "<thead id='resultThead'></thead><tfoot id='resultTfoot'></tfoot></table>");
	$("#resultThead").append(
			$("<tr style='background-color:rgb(230,152,83)'>").append(
					"<th>Nume</th>").append("<th>Data</th>").append(
					"<th>Pagina</th>").append("<th>Exercițiu</th>").append(
					"<th>Total<br> răspunsuri</th>").append("<th>Răspunsuri<br> corecte</th>"));
	$("#resultTfoot").append(
			$("<tr style='background-color:rgb(230,152,83)'>").append(
					"<th>Nume</th>").append("<th>Data</th>").append(
					"<th>Pagina</th>").append("<th>Exercițiu</th>").append(
					"<th>Total<br> răspunsuri</th>").append("<th>Răspunsuri<br> corecte</th>"));
	var noEval = 0;
	var index = 0;
	if (gd.isIe === false) {
		while(localStorage.key(index)!=null){
			var key = localStorage.key(index++);
			setTable(null, key);
			noEval++;
		}
	} else {
		$.each($.cookie(), function(key, value) {
			setTable(value, key);
		});
	}
	$('#tableResultEvaluation').DataTable({
		"columnDefs" : [ {
			"visible" : false,
			"targets" : 6
		} ],
		"scrollY" : (noEval > 20) ? "540px" : "",
		"scrollCollapse" : true,
		"paging" : false,
		"order" : [ [ 1, 'desc' ] ],
		"oLanguage" : {
			"sSearch" : "Caută _INPUT_ ",
		},
		"iDisplayLength" : 19,
		"drawCallback" : function(settings) {
			var last = null;
			var amount = 0;
			var amountT = 0;
			var lastId = "idLast";
			var lastIdT = "idLastT";
			var api = this.api();
			var rows = api.rows({page : 'current'}).nodes();
			api.column(6, {page : 'current'}).data().each(function(group, i) {
				if (last !== group) {
					$('#' + lastId).html(amount);
					$('#' + lastIdT).html(amountT);
					lastId = "idLast" + i;
					lastIdT = "idLastT" + i;
					$(rows).eq(i).before('<tr style="background:rgba(217, 110, 49, 0.4);" >'+//#2EBBE0
							'<td  style="align:center;text-align:center;" colspan="4">Rezulate evaluare '+
									(group*1+1)+'</td>'+
							'<td  style="align:center;text-align:center;" id='+ lastIdT + ' ></td>'+
							'<td  style="align:center;text-align:center;" id='+ lastId + ' ></td>'+
							'</tr>');
					last = group;
					amount = 0;
					amountT = 0;
					no = 0;
				}
				amount += rows[i].getElementsByTagName('td')[5].innerText * 1;
				amountT += rows[i].getElementsByTagName('td')[4].innerText * 1;
			});
			$('#' + lastId).html(amount);
			$('#' + lastIdT).html(amountT);
			}
	});

	$('#tableResult tfoot th').each(
			function() {
				var title = $('#tableResult thead th').eq($(this).index())
						.text();
				$(this).html(
						'<input type="text" style="width:200px" placeholder="Caută ' + title
								+ '" />');
			});

	var table = $('#tableResult').DataTable({
		"iDisplayLength" : 19,
		"pagingType" : "full_numbers",
		
		"oLanguage" : {
			"sSearch" : "Caută _INPUT_ ",
			"oPaginate" : {
				"sFirst" : "Primul",
				"sLast" : "Ultimul",
				"sPrevious" : "Precedentul",
				"sNext" : "Următorul"
			},
		},
		"order" : [ [ 1, "desc" ] ]
	});
	$("#tableResult tfoot input").on(
			'keyup change',
			function() {
				table.column($(this).parent().index() + ':visible').search(
						this.value).draw();
			});

	
	$("#tabs").css("left", "100px");
	
	$("#tabs").css("transform","scale(" + (3134 - 350) / 1400 + ")");
	$("#tabs").css("-webkit-transform","scale(" + (3134 - 350) / 1400+ ")");
	$("#tabs").css("-ms-transform","scale(" + (3134 - 350) / 1400+ ")");
	$("#tabs").css("transform-origin", "-4% -20%");
	$("#tabs").css("-webkit-transform-origin", "-4% -20%");
	$("#tabs").css("-ms-transform-origin", "-4% -20%");
	

	$('.dataTables_info').hide();
	$('.dataTables_length').hide();
	$("#tabs-2").css("display", "none");

};


function setTable(value, key) {
	json = {};
	if (key.lastIndexOf(gd.keys.gameKey, 0) === 0) {
		json = (gd.isIe === true) ? value : localStorage.getItem(key);
		logJson = JSON.parse(json);
		if (logJson.name == new MySessionStorage().getItem(gd.keys.userSession)) {
			if (logJson.pageNumber != undefined)
				$("#tableResult").append(
					$("<tr>").append($("<td align=center>" + logJson.name + "</td>"))
							 .append($("<td align=center>" + formatDate1(new Date(logJson.time))+ "</td>"))
							 .append($("<td align=center>" + logJson.pageNumber+ "</td>"))
							 .append($("<td align=center>" + logJson.gameNumber+ "</td>"))
							 .append($("<td align=center>" + logJson.totalItem+ "</td>"))
							 .append($("<td align=center>" + logJson.correctItem+ "</td>")));
		}
	}else{
		if (key.lastIndexOf(gd.keys.result, 0) === 0) {
			json = (gd.isIe === true) ? value : localStorage.getItem(key);
			logJson = JSON.parse(json);
			if (logJson.name == new MySessionStorage().getItem(gd.keys.userSession)) {
				if (logJson.pageNumber != undefined) {
					$("#tableResultEvaluation").append(
						$("<tr>").append($("<td align=center>" + logJson.name + "</td>"))
								.append($("<td align=center>" + formatDate1(new Date(logJson.time))+ "</td>"))
								.append($("<td align=center>" + logJson.pageNumber+ "</td>"))
								.append($("<td align=center>" + logJson.gameNumber + "</td>"))
								.append($("<td align=center>" + logJson.totalItem+ "</td>"))
								.append($("<td align=center>" + logJson.correctItem+ "</td>"))
								.append($("<td align=center>" + logJson.id+ "</td>")));
				}
			}
		}
	}
};







function formatDate1(date) { 
	var yyyy = date.getFullYear().toString();                                    
    var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based         
    var dd  = date.getDate().toString();             
    var getH =date.getHours().toString();
    var getM = date.getMinutes().toString();
    var getS = date.getSeconds().toString();
    return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0])
    +" "+(getH[1]?getH:"0"+getH[0]) +":"+(getM[1]?getM:"0"+getM[0])+":" + (getS[1]?getS:"0"+getS[0]);
};   

Util.prototype.playAudio = function (parentElement, top, left, scaleAudioPlayer ,src){	
	parentElement.append("<div id='temp'></div>");
	$("#temp").append("<audio controls id='player1'" +
			" style='display:none;position:absolute;z-index:100;widt:100px;'>" +
			" <source src='' type='audio/mpeg'></audio>");
	$("#temp").append(
			"<div id='audioPlayerDiv' style='position:absolute;left:"+left+"px:top:"+top+"px'></div>");
	
	var dimBtn = 35;
	$("#audioPlayerDiv").append(
			"<img src='images/ramaSong.png' style='position:absolute;" +
					"height:120px;width:300px;top:"+top+"px;left:"+left+"px;'/>"+
			
			"<div id='stop' class='btn_stopPlayer'  style='position:absolute;background-size:cover;" +
					"height:"+dimBtn+"px;width:"+dimBtn+"px;top:"+(top+60)+"px;left:"+(left+40)+"px;'/>"+
			"<div id='play' class='btn_playPlayer'  style='position:absolute;background-size:cover;" +
					"height:"+dimBtn+"px;width:"+dimBtn+"px;top:"+(top+60)+"px;left:"+(left+120)+"px;'/>"+
			"<div id='pause' class='btn_pausePlayer' style='position:absolute;background-size:cover;" +
					"height:"+dimBtn+"px;width:"+dimBtn+"px;top:"+(top+60)+"px;left:"+(left+200)+"px;'/>"
			);
	
	$('#player1').mediaelementplayer({
		audioWidth: (1300*scale),
		features: ['progress','current','duration','tracks']
	});

	$(".mejs-controls").attr("style","position:absolute;z-index:1000;top:0px;");
	$(".mejs-controls").css("width",230+"px");
	$(".mejs-controls").css("top",(top+60)+"px");
	$(".mejs-audio").css("left",(left-scale*690)+"px");
	
	$("#temp").css("-webkit-transform", "scale(" + (scaleAudioPlayer) + ")");
	$("#temp").css("-webkit-transform-origin","0% 0%");
	$("#temp").css("transform", "scale(" + (scaleAudioPlayer) + ")");
    $("#temp").css("transform-origin","0% 0%");
    $("#temp").css("-ms-transform", "scale(" + (scaleAudioPlayer) + ")");
    $("#temp").css("-ms-transform-origin","0% 0%");
    
	
	player1.setSrc(src);
	//console.log(src);
	
	$("#play").click(function() {
		if(!isActive)
			return false;
		 player1.play();
		 $("#play").attr("disabled",true);
		 $("#pause").attr("disabled",false);
		 $("#stop").attr("disabled",false);
	 });
	 
	 $("#pause").click(function() {
		 player1.pause();
		 $("#play").attr("disabled",false);
		 $("#pause").attr("disabled",true);
		 $("#stop").attr("disabled",false);
	});
	 	 
	 $("#stop").click(function() {
		 player1.setCurrentTime(0);
		 player1.pause();
		 $("#play").attr("disabled",false);
		 $("#stop").attr("disabled",true);
		 $("#pause").attr("disabled",true);
	});
	 
};
















Util.prototype.getRandomNumber = function(max) {
	return Math.floor( (Math.random() * max) + 1);
};

Util.prototype.suffleWordLetters = function(word){
	return word.split('').sort(function(){return 0.5-Math.random();}).join('');
};	

Util.prototype.getRandomNumber = function(max){
	return Math.floor((Math.random()*max)+1);
};

Util.prototype.getRandomNumberInterval = function(min,max){
	return Math.floor((Math.random()*max)+min+1);
};

/*Util.prototype.getRandomNumberInterval = function(min,max){
	return Math.floor((Math.random()*(max-min))+min+1);
	};*/ //pt. aleator


Util.prototype.getRandomColor = function(){
	return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' 
			+ (Math.floor(Math.random() * 256)) + ')';
};

Util.prototype.getRandomFont = function(){
	var fonts = new Array("","Georgia, serif", "Palatino Linotype, Book Antiqua, Palatino, serif", 
			"Times New Roman, Times, serif","Impact, Charcoal, sans-serif");
			Util.prototype.getRandomNumber(fonts.length-1);
	return fonts[Util.prototype.getRandomNumber(fonts.length-1)];
};


Util.prototype.getRandomFontStyle = function(){
	var fontStyles = new Array("","normal");
	return fontStyles[Util.prototype.getRandomNumber(fontStyles.length-1)];
};


Util.prototype.suffleArray = function(array){
	var max = array.length;
	for(var i=0;i<max;i++){
		var random = new Util().getRandomNumber(max-i)-1;
		b = array[random];
		array[random] = array[max-i-1];
		array[max-i-1] = b;
	}	
	return array;
};

Util.prototype.suffleFirstNumber = function(max){
	var array = new Array();
	for(var i=0;i<max;i++){
		array[i] = i; 
	}
	for(var i=0;i<max;i++){
		var random = new Util().getRandomNumber(max-i)-1;
		b = array[random];
		array[random] = array[max-i-1];
		array[max-i-1] = b;
	}	
	
	return array;
};

Util.prototype.getSoundWrong = function(nrWrong,maxChoose){
	switch (nrWrong) {
		case 1: return 1;
		case 2: return 2;
		case 3: return (maxChoose>4)?2:3;
		default: return 3;
	}
};
Util.prototype.validateInputNumber = function(element){
	
	element.keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
        	
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	
            e.preventDefault();
        }
    });
};

Util.prototype.validNumber = function(element){
	
	element.keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46,8,9,27,13]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
        	
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	
            e.preventDefault();
        }
    });
};

Util.prototype.restrictKeyGCompare = function(element){
	element.keydown(function (e) {
		//alert(e.keyCode);
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13,  187,188,190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if(!(e.shiftKey && ((e.keyCode == 190) || (e.keyCode == 188)))) {
            e.preventDefault();
        }
        
    });
};




Util.prototype.restrictKeyBooleanLetter = function(element){
	
	element.keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
        	
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if( ( e.keyCode!=65 )&&( e.keyCode!=70 )) {
        	e.preventDefault();
        }
    });
};

Util.prototype.getRandomExp = function (count){
	var util = new Util();
	var numbers = [];var op;var a;var b;var d;
	for(var i=0;i<16;i++){
	op = util.getRandomNumber(2);
	a = util.getRandomNumberInterval(10,98);
	b = 0;
	if(op==1){//+
	b = util.getRandomNumberInterval(0,98-a);
	}else{//-
	b = -util.getRandomNumberInterval(0,a);
	}
	d = a + b;
	numbers.push({a:a,op:((op==1)?"+":"-"),b:Math.abs(b),response:d});
	}
	return numbers;
	};

	Util.prototype.getRandomExpComp = function (count){
	var util = new Util();
	var numbers = [];
	var a,b,response;
	var generateEqual = false;
	for(var i=0;i<count;i++){
	a = util.getRandomNumberInterval(10, 99);
	b = util.getRandomNumberInterval(10, 99);
	if(a>b){
	response = ">";
	}else{
	if(a<b){
	response = "<";
	}else{
	response = "=";
	generateEqual = true;
	}
	}
	numbers.push({a:a,b:b,response:response});
	}
	if(!generateEqual){
	var no = util.getRandomNumber(count-1);
	a = util.getRandomNumberInterval(10, 99);
	numbers[no] = {a:a,b:a,response:"="};
	}
	return numbers;
	};





Util.prototype.disabledGameButtons = function(){
	$("#acasa").prop('disabled', true);
	$("#ajutor").prop('disabled', true);
	$("#verifica").prop('disabled', true);
	$("#repeta").prop('disabled', true);
};
Util.prototype.enabledGameButtons = function(){
	$("#acasa").prop('disabled', false);
	$("#ajutor").prop('disabled', false);
	$("#verifica").prop('disabled', false);
	$("#repeta").prop('disabled', false);
};
Util.prototype.partialEnabledGameButtons = function(){
	$("#acasa").prop('disabled', false);
	$("#ajutor").prop('disabled', false);
	$("#repeta").prop('disabled', false);
};