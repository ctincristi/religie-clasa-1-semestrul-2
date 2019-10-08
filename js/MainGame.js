var s;
var index;
var datesMain;
function MainGame( title ){
	this.title = title;
	if($.find("#acasa").length == 0)
		this.setMainButtons();
	//this.disabledGameButtons();
}
var helpSound = "";
MainGame.prototype.setMainButtons = function(){
	$("#gameDiv").css("width", (ow * scale) + "px");
	$("#gameDiv").css("left", (w - ow * scale) / 2 + "px");
	timeOut = 1500;
	$("#bb-bookblock").hide();
	$("#gameDiv").append("<audio controls id='player' style='display:none;visibility:hidden;z-index:-1'>" +
	"<source src='' type='audio/mpeg' ></audio>");
	player = new MediaElement('player', {});
	
	$("#gameDiv").append("<div id='bodyGame' style='position:relative;width:100%;top:"
			+(((navigator.platform.indexOf("iPhone") != -1)|| (navigator.platform.indexOf("iPad") != -1))?(210*scale):(230*scale))
			+"px;left:"+(0*scale)+"px;align:center'></div>");
			$("#gameDiv").append("<div id='footerGame' style='z-index:5000;position:absolute;bottom:"+(5*scale)+"px;left:"+(100*scale)+"px; '></div>");
		
		
			$("#gameDiv").append("<button id='closeBtn'  class='close' style='top:"+(scale*20)+"px;right:"+(scale*5)+"px;'></button>");
		
		$("#footerGame").empty();
		$("#footerGame").append("<div id='acasa'  class='acasa'  ></div>&nbsp;");
		$("#footerGame").append("<div id='ajutor' class='ajutor'></div>&nbsp;");
		$("#footerGame").append("<div id='repeta' class='repeta' ></div>&nbsp;");
		$("#footerGame").append("<div id='verifica' class='verifica'></div>");
			
		$("#title").remove();
		if((this.title != null) && (this.title.text != "gameDialog") && (this.title.text != undefined)){
			   $("#gameDiv").append("<div id='title' class='title' style='top:"+(scale*(20))+"px; " +
			        ((this.title.position.leftLast!=null)?("left:"+(scale*this.title.position.leftLast )+"px;"):"") +
			        "' ></div>");
			   
			   $.each(this.title, function(key, value){
				   if(value===true)
					   $("#title").append("<img src='images/ico/"+key+".png' " +
					   		" style='width:"+(scale*100)+"px; height:"+(scale*100)+"px;' />");
				   if(key=="text")
					   $("#title").append("<span>"+ value +"</span>");
//				   if(key=="text1")
//		 $("#title").append("<span style='position:absolute;align:center;top:"+(scale*(value.y))+"px;" +
//		 		"left:"+(scale*(value.x))+"px;width:500px;" +
//		 		"font-family:Georgia; font-style:italic; font-size:20px;color:rgb(182,66,4);'>"+ value.text +"</span>");
//				
			   });
			   
			   if((this.title.logo!=null) && (this.title.logo!=undefined)){ 
				   $("#gameDiv").append("<img src='images/logo/"+this.title.logo+".gif' " +
					  	" style='position:absolute;z-index:1000;" +
					  	" width:"+(scale*this.title.position.widthLogo)+"px; " +
					  	" height:"+(scale*this.title.position.heightLogo)+"px;" +
					    " top:"+(scale*this.title.position.topLogo)+"px; " +
					    " left:"+(scale*this.title.position.leftLogo )+"px;' />");
			   }   
			 
		}
		   
	$("#acasa, #closeBtn").click(function() {
		
		index = 200;
		$("#player").remove();
		$("#bodyGame").empty();
		$("#gameDiv").empty();
		$("#helpDialog").empty();
		$("#gameDialog").dialog('close');
		$("#helpDialog").dialog('close');
		$("#bb-bookblock").show();
		$("#windowGameBackgroundStatic").css("visibility","hidden");
		$("#windowGameBackground").css("visibility","");
		$("#gameDiv").css("background","transparent");
	});
	
	$("#helpDialog").dialog({
		autoOpen : false,
		modal:true,
		resizable : false,
		draggable : false,
	    close: function() {player.pause();},
		modal : true,
		width : 585,
		height : 450,//320
	});
	$(".ui-dialog-titlebar").hide();
	
	$('html').click(function() {
		if ($("#helpDialog").dialog( "isOpen" )===true) {
			$("#helpDialog").dialog( "close" );
		}
	});
	$('#helpDialog').click(function(event){
		    event.stopPropagation();
	});
	

	
	
	$('.ui-icon').css('display','none');
	$("#helpDialog").append("<div id='gameDivHelp' style='z-index:2000;border-style:solid;border:2px;background:rgb(230,152,83);top:0px;width:585px;height:50px'></div>");
    $("#gameDivHelp").append("<button id='closeBtnHelp'  class='close' style='top:"+(scale*10)+"px;right:"+(scale*5)+"px;'></button>");
	
    $("#closeBtnHelp").click(function() {
        player.pause();
       });
    
	$("#ajutor").click(function(event) {
		if(isActive!=null)
			   if(isActive===false)
			    return false;
		event.stopPropagation();
		$("#helpDialog").dialog('open');
		if( $('#player1').length )    
			   player1.pause();
		playSound(helpSound);
		$(".ui-dialog").css("z-index","200000");
	});
	
	$("#helpDialog").append("<div align='justify' style=''><article id='headerHelp'  style='z-index:9999;height:200px;line-height: 1.7;' ></div>");
	$("#helpDialog").append("<img align='center' src='images/logo/avatar.gif' width=150px;height=150px />");
	
	if((this.title != null) && (this.title.help != "gameDialog") && (this.title.help != undefined)){
		var text = this.title.help.text;
		var images = [{name:" ÎNCHIDE",src:"images/butoane_fereastra_joc/close1.png",width:30,height:30},
		              {name:" REPETĂ JOCUL",src:"images/butoane_fereastra_joc/repeta1.png",width:44,height:30},
		              {name:" VERIFICĂ",src:"images/butoane_fereastra_joc/verifica1.png",width:44,height:30}
	
		];	
		
		for(var i=0;i<images.length;i++){
			text = text.replace(images[i].name , "</span><img src='"+images[i].src+"'" +
					" style='width:"+images[i].width+"px;height:"+images[i].height+"px;'><span>");
		}
		
		$("#headerHelp").append(text);
		helpSound = this.title.help.src;
		
		
	}
	



$("#closeBtnHelp").click(function() {
	$("#helpDialog").dialog('close');
});
	
	
};


MainGame.prototype.disabledGameButtons = function(){
	$("#acasa,#ajutor,#verifica,#repeta").attr("disabled", "disabled");
};
MainGame.prototype.enabledGameButtons = function(){
	$("#acasa,#ajutor,#verifica, #repeta").prop("disabled", "");
};
MainGame.prototype.partialEnabledGameButtons = function(){
	$("#acasa,#ajutor,#repeta").prop('disabled', "disabled");
};
MainGame.prototype.partialDisabledGameButtons = function(){
	$("#ajutor,#verifica,#repeta").off('click');
};