function GameDates() {
	this.dates = [];
	this.main = [];
	this.sounds = [];
	this.images = [];
	this.setDates();
	this.keys = {gameKey:"2ManualReli244", result:"Evaluation1ManualReli27Temp44",
			resultTemp:"Eval2ManualReli27Temp", userSession:"manualReli2UserLogin244",
			allUsers:"manualReli2AllUsers244"};
	this.setDates();
	this.isIe = ((window.ActiveXObject !== undefined) || ((navigator.platform.indexOf("iPhone") != -1)
			|| (navigator.platform.indexOf("iPad") != -1)));
}

GameDates.prototype.setDates = function() {
	this.main = {
		mainPages : [ {
			page : "cuprins"
		}, {
			page : "rezulate",
			pageImage : "images/pagina/pg_alba.jpg"
		}, {
			page : "ajutor",
			pageImage : "images/pagina/pg_alba.jpg"

		} ],
		coperta:"images/pagina/coperta.jpg",
		coperta1:"images/pagina/coperta4.jpg",
		maxPage : 64,
		pages : [{

					page : 0,
					pageImage : "images/pagina/coperta2.jpg",
					pageImage2 : "images/pagina/pg01.jpg",
					corner : true,
					
				},{
					page : 0,
					pageImage : "images/pagina/pg02.jpg",
					pageImage2 : "images/pagina/pg03.jpg",
					corner : true,
					cuprins : [ { x:1700, y:1210, width:1180, height:95, pageNumber : 3},//Omul se roaga lui D-zeu pt. sine si pt altii
					            { x:1700, y:1330, width:1180, height:50, pageNumber : 4},//Rugaciunea si rugamintea
					            { x:1700, y:1400, width:1180, height:50, pageNumber : 6},//Omul vorbeste cu D-zeu prin rugaciune
					            { x:1700, y:1470, width:1180, height:50, pageNumber : 8},//Cand, unde si cui ma rog
					            { x:1700, y:1538, width:1180, height:50, pageNumber : 10},//Pentru cine ma rog
					            { x:1700, y:1615, width:1180, height:50, pageNumber : 12},//Binefacerile rugaciunii
					            { x:1700, y:1685, width:1180, height:50, pageNumber : 14},//Recapitulare.Evaluare
					          ],
					
				},{
					page : 1,
					pageImage : "images/pagina/pg04.jpg",
					pageImage2 : "images/pagina/pg05.jpg",
					corner : true,
					btnImages: [{x : 1840,y : 580, width : 110,height : 69,classCss:"btn_video"},
					            {x : 1840,y : 679, width : 110,height : 69,classCss:"btn_observa"}],
					cuprins : [ { x:205, y:148, width:1180, height:50, pageNumber : 16},//Mari sarbatori crstine
					            { x:205, y:215, width:1180, height:50, pageNumber : 17},//Sarbatorile de iarna
					            { x:205, y:282, width:1180, height:50, pageNumber : 18},//Despre colind
					            { x:205, y:349, width:1180, height:50, pageNumber : 20},//Nasterea Domnului in poezia crestian romaneasca
					            { x:205, y:416, width:1180, height:50, pageNumber : 22},//Sfantul Nicolae
					            { x:205, y:483, width:1180, height:50, pageNumber : 23},//Recapitulare Evaluare
					            { x:205, y:550, width:1180, height:50, pageNumber : 25},//Sarbatorile de Pasti
					            { x:205, y:617, width:1180, height:50, pageNumber : 26},//Salutul crestinilor la Sfintele Pasti
					            { x:205, y:685, width:1180, height:50, pageNumber : 28},//Invierea Domnului in poiezia Crestian Romaneasca
					            { x:205, y:755, width:1180, height:50, pageNumber : 30},//Recapitulare.Evaluare
					            { x:205, y:825, width:1180, height:50, pageNumber : 32},//Rugaciunile scolarului
					            ],
		            videos: [{
						name : "video",
						x:1875, y:475, width:825, height:175,
						gameInstance : {
							title : {
								logo:"video",
								text : "Copii la rugăciune",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20}
							},
							src : "video/vol2_pg05_11M_copii_la_rugaciune.mp4",
							properties : {width:1066, height:600}
					 }
		           }],            
		            games:[{
							name : "GamesStatic",
							x:1875, y:677, width:825, height:605,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Omul se roagă lui Dumnezeu pentru sine și pentru alții",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg05.jpg",width : 795,height : 530,top : -12,left : 0},
							},
								sarcina:"",
							}
				         }]            
					
				},{
					page : 2,
					pageImage : "images/pagina/pg06.jpg",
					pageImage2 : "images/pagina/pg07.jpg",
					corner : true,
					btnImages: [{x : 350,y : 477,width : 110,height : 69,classCss:"btn_video"},
					            {x : 207,y : 852,width : 110,height : 69,classCss:"btn_observa"},
					            {x : 1667,y : 402,width : 110,height : 69,classCss:"btn_observa"},
					            {x : 2267,y : 402,width : 110,height : 69,classCss:"btn_observa"},
					            {x : 802,y : 852,width : 110,height : 69,classCss:"btn_interactiv"},
					           ],
					videos: [{
								name : "video",
								x:390, y:475, width:980, height:300,
								gameInstance : {
									title : {
										logo:"video",
										text : "Creştini la rugăciune",
										position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									},
									src : "video/vol2_pg06_24_copii_preoti_fundal_audio_stihuri.mp4",
									properties : {width:1066, height:600}
							 }
				           }],
		           games:[{
							name : "GamesStatic",
							x:205, y:850, width:555, height:885,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Rugăciune",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg06.jpg",width : 353,height : 530,top : -12,left : 0},
							}
						  }
		           		},{
							name : "GamesStatic",
							x:1665, y:400, width:585, height:935,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Maica Domnului",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg07_2.jpg",width : 357,height : 530,top : -12,left : 0},
							}
						  }
		           		},
		           		{
							name : "GamesStatic",
							x:2265, y:400, width:570, height:630,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Doamne, Te rog, dăruiește sănătate părinților mei!",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg07_1.jpg",width : 748,height : 530,top : -12,left : 0},
							}
						  }
		           		},{
							name : "GamesComplex",
							x:800, y:850, width:570, height:885,
							gameInstance : {
								title : {
									logo:"interactiv",
									text : "Alege răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
										text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
												"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
												"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg06_ex1",
								sarcina:"sounds/sarcini/alegeRaspunsulCorect.mp3",
						   }
					  }]        
					
				},
				{
					page : 3,
					pageImage : "images/pagina/pg08.jpg",
					pageImage2 : "images/pagina/pg09.jpg",
					corner : true,
					btnImages : [{x : 1717,y : 982,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1717,y : 407,width : 110,height : 69,classCss:"btn_observa"}
					             ],
					videos:[{
							name : "video",
							x:1715, y:980, width:1110, height:605,
							gameInstance : {
								title : {
									logo:"video",
									text : "Sfânta Liturghie la Patriarhie",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
								src : "video/vol2_pg09_12M_slujba_cu_patriarhul.mp4",
								properties : {width:1066, height:600}
							}
				   }],
				   games:[{
						name : "GamesStatic",
						x:1710, y:390, width:1125, height:580,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Slavă Ție, Dumnezeul nostru, slavă Ție!",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg09.jpg",width : 796,height : 530,top : -12,left : 0},
						}
					  }
           		}]
					

				},
				{
					page : 4,
					pageImage : "images/pagina/pg10.jpg",
					pageImage2 : "images/pagina/pg11.jpg",
					corner : true,
					btnImages : [{x : 420, y :777,width : 110,height : 69,classCss:"btn_video"},
					             {x : 420, y :1200,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1670,y : 155,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1780, y :350,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1702,y : 1062,width : 110,height : 69,classCss:"btn_interactiv"},
					],
					videos:[{
							name : "video",
							x:418, y:775, width:745, height:425,
							gameInstance : {
								title : {
									logo:"video",
									text : "Rugăciunea Tatăl nostru",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
								src : "video/vol2_pg10_13M_rugaciune_copii_la_masa.mp4", 
								properties : {width:1066, height:600}
							}
					  },{
							name : "video",
							x:1670, y:154, width:1204, height:190,
							gameInstance : {
								title : {
									logo:"video",
									text : "În toate momentele vieții noastre să ne rugăm!",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
								src : "video/vol2_pg11_5M_copii_care_se_roaga.mp4",
								properties : {width:1066, height:600}
							}
					  }],
					games:[
					 {
						name : "GamesStatic",
						x:418, y:1200, width:745, height:500,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Iisus Hristos ne-a învățat </br>rugăciunea „Tatăl nostru” ",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg10.jpg",width : 403,height : 530,top : -12,left : 0},
							}
						}
					},
					{
						name : "GamesStatic",
						x:1780, y:350, width:985, height:700,
						gameInstance : {
							title : {
								logo:"observa",
								text : "În toate momentele vieții noastre să ne rugăm!",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg11.jpg",width : 797,height : 530,top : -12,left : 0},
							}
						}
					},
					{
						name : "GamesComplex",
						x:1700, y:1060, width:1185, height:680,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text : "Bifează  răspunsul sau răspunsurile corecte. " +
											"Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
											"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg11_ex2",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  }]
					
					
				},
				{
					page : 5,
					pageImage : "images/pagina/pg12.jpg",
					pageImage2 : "images/pagina/pg13.jpg",
					corner : true,
					btnImages : [{x : 2147,y : 607,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1705,y : 1052,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 507,y : 1492,width : 110,height : 69,classCss:"btn_interactiv"},
					            ],
		                          
					games:[{
							name : "GamesStatic",
							x:2145, y:605, width:335, height:455,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Preot",
									resize : 260,
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg13_1.jpg",width : 352,height : 530,top : -12,left : 0},
								},
							}
					},{
							name : "GamesStatic",
							x:1705, y:1050, width:365, height:455,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Rugăciune",
									resize : 260,
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg13_2.jpg",width : 402,height : 530,top : -12,left : 0},
								},
							}
					},{
						name : "GamesComplex",
						x:505, y:1490, width:775, height:260,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Alege varianta corectă.",
								resize : 260,
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
									text :  "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
											"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg12_ex3",
							sarcina:"sounds/sarcini/alegeVariantaCorecta.mp3",
					   }
				  }]
					
				},
				{
					page : 6,
					pageImage : "images/pagina/pg14.jpg",
					pageImage2 : "images/pagina/pg15.jpg",
					corner : true,
					btnImages : [{x : 350,y : 472,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1670,y : 507,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 757,y : 1272,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x :2292,y : 752,width : 110,height : 69,classCss:"btn_observa"},
//					             {x : 202,y : 887,width : 110,height : 69,classCss:"btn_interactiv"},
//					             {x : 1660,y : 982,width : 110,height : 69,classCss:"btn_interactiv"},
					             ],
		            videos:[{
						name : "video",
						x:395, y:470, width:1015, height:330,
						gameInstance : {
							title : {
								logo:"video",
								text : "Rugăciune",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol2_pg14_14.mp4",
							properties : {width:1066, height:600}
						}
				    }],
				    games:[
//				     {
//							name : "GamesStatic",
//							 x:755, y:1270, width:665, height:460,
//							gameInstance : {
//								title : {
//									logo:"observa",
//									text : "Mă rog la masă.",
//									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
//									fundal : {src : "images/games/statice/img_vol2_pg14.jpg",width : 796,height : 530,top : -12,left : 0},
//								},
//							}
//					},
					{
						name : "GamesStatic",
						x:1670, y:505, width:595, height:950,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Mă rog când merg la biserică.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg15_1.jpg",width : 359,height : 530,top : -12,left : 0},
							},
						}
					},{
						name : "GamesStatic",
						x:2290, y:750, width:585, height:780,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Mă rog în biserică.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg15_2.jpg",width : 463,height : 530,top : -12,left : 0},
							},
						}
					},{
						name : "GamesComplex",
						 x:755, y:1272, width:665, height:460,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text :  "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
									"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
									"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
						      },	
							},
							gameDates : "GamesInteractivPg14_ex4",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  }

					]
					
					

				},
				{
					page : 7,
					pageImage : "images/pagina/pg16.jpg",
					pageImage2 : "images/pagina/pg17.jpg",
					corner : true,
					btnImages : [ {x : 272,y : 147,width : 110,height : 69,classCss:"btn_observa"} ,
					             {x : 1759,y : 657,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 927,y : 1542,width : 110,height : 69,classCss:"btn_interactiv"},
					            ],
		           games:[{
							name : "GamesStatic",
							x:270, y:145, width:1050, height:840,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Mă rog la școală.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg16.jpg",width :706,height : 530,top : -12,left : 0},
								}
							}
						},
						{
							name : "GamesStatic",
							x:1756, y:655, width:280, height:280,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Maica Domnului",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg17.jpg",width :512,height : 530,top : -12,left : 0},
								}
							}
						},{
							name : "GamesComplex",
							 x:925, y:1540, width:450, height:195,
							gameInstance : {
								title : {
									logo:"interactiv",
									text : "Alege varianta corectă",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
										text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul VERIFICĂ din dreapta-jos. " +
											   "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg16_ex6",
								sarcina:"sounds/sarcini/alegeVariantaCorecta.mp3",
						   }
					  }]
				},
							
				{
					page : 8,
					pageImage : "images/pagina/pg18.jpg",
					pageImage2 : "images/pagina/pg19.jpg",
					corner : true,
					btnImages : [{x : 310,y : 927,width : 110,height : 69,classCss:"btn_video"},
					             {x : 2252,y : 407,width : 110,height : 69,classCss:"btn_observa"},
					             ],
			        videos:[{
						name : "video",
						x:370, y:925, width:175, height:125,
						gameInstance : {
							title : {
								logo:"video",
								text : "Slujba de pomenire pentru eroii patriei",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol2_pg18_16M_slujba_de_pomenire_eroi.mp4",
							properties : {width:1066, height:600}
						}
			        }],
			        games:[{
						name : "GamesStatic",
						 x:2250, y:405, width:625, height:625,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Domnul Hristos s-a rugat.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg19.jpg",width :666,height : 530,top : -12,left : 0},
							}
						}
					}]
				},
				{
					page : 9,
					pageImage : "images/pagina/pg20.jpg",
					pageImage2 : "images/pagina/pg21.jpg",
					corner : true,
					btnImages : [{x : 1747,y : 582,width : 393,height : 69,classCss:"btn_observa"},
					             ],
					games:[{
						name : "GamesStatic",
						x:1745, y:580, width:1050, height:702,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Copiii din lumea întreagă se iubesc și se ajută.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg21.jpg",width :737,height : 530,top : -12,left : 0},
							}
						}
					}]
					

				},
				{
					page : 10,
					pageImage : "images/pagina/pg22.jpg",
					pageImage2 : "images/pagina/pg23.jpg",
					corner : true,
					btnImages : [{x : 247,y : 912,width : 393,height : 69,classCss:"btn_video"},
					             {x : 1662,y : 352,width : 393,height : 69,classCss:"btn_video"},
					             {x : 1832,y : 1122,width : 393,height : 69,classCss:"btn_video"},
					             {x : 2287,y : 357,width : 393,height : 69,classCss:"btn_observa"},
					             {x : 2287,y : 708,width : 393,height : 69,classCss:"btn_interactiv"}],
		            videos:[{
		        		name : "video",
		        		x:245, y:910, width:1100, height:825,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Rugăciunea din timpul Sfintei Liturghii ne unește în credință.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol2_pg22_4M_sfanta_liturghie.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
		        		name : "video",
		        		x:1660, y:350, width:600, height:745,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Slujbă în biserică (secvenţe)",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol2_pg23_19M_secvente_de_la_maslu.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
		        		name : "video",
		        		x:1830, y:1120, width:885, height:600,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Rugăciunea şi munca ne aduc recolte bogate.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol2_pg23_18M_gradini_culturi_ferme.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	}],           
					games:[{
						name : "GamesStatic",
						x:2285, y:355, width:550, height:350,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Rugăciunea ne aduce sănătate și iertare de păcate.",
								resize : 260,
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg23.jpg",width : 707,height : 530,top : -12,left : 0},
							}
					   }
					 },{
							name : "GamesComplex",
							x:2285, y:706, width:550, height:350,
							gameInstance : {
								title : {
									logo:"interactiv",
									text : "Bifează răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
										text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul VERIFICĂ din dreapta-jos. " +
											   "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg23_ex7",
								sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
						   }
					  }]
				
					
				},
				{
					page : 11,
					pageImage : "images/pagina/pg24.jpg",
					pageImage2 : "images/pagina/pg25.jpg",
					corner : true,
					btnImages : [{x : 362,y : 152,width : 110,height : 69,classCss:"btn_video"},
					             {x : 225,y : 1602,width : 110,height : 69,classCss:"btn_video"},
					             {x : 362,y : 872,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1777,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					             
					             ],
		            videos:[{
							name : "video",
							x:360, y:150, width:885, height:700, 
							gameInstance : {
								title : {
									logo:"video",
									text : "Binecuvântarea familiei creştine",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
								src : "video/vol2_pg24_15.mp4",
								properties : {width:1066, height:600}
							}
				    },{
							name : "video",
							x:235, y:1600, width:1170, height:145, 
							gameInstance : {
								title : {
									logo:"video",
									text : "Înger, îngeraşul meu",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
								src : "video/vol2_pg24_ingeras.mp4",
								properties : {width:1066, height:600}
							}
				    }],            
					games:[{
						name : "GamesStatic",
						 x:360, y:870, width:885, height:710,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Rugăciunea ne îndeamnă să facem fapte bune.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg24.jpg",width : 800,height : 530,top : -12,left : 0},
							},
						}
					},{
						name : "GamesStatic",
						x:1775, y:150, width:995, height:745,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Lăsaţi copiii să vină la Mine!",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg25.jpg",width : 672,height : 530,top : -12,left : 0},
							},
						}
					}]
				
				},
				{
					page : 12,
					pageImage : "images/pagina/pg26.jpg",
					pageImage2 : "images/pagina/pg27.jpg",
					corner : true,
					btnImages : [{x : 417,y : 1192,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 320,y : 437,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x : 1640,y : 215,width : 110,height : 69,classCss:"btn_interactiv"}
					             
					            ],
		           games:[{
						name : "GamesStatic",
						x:415, y:1190, width:745, height:550,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Loc de rugăciune",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg26.jpg",width : 707,height : 530,top : -12,left : 0},
							}
					  }
					},{
						name : "GamesComplex",
						x:390, y:435, width:1000, height:445,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Ordonând corect cuvintele, vei obţine răspunsul </br>la întrebarea: Ce este rugăciunea?",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpNumeroteazaCuvintele.mp3",
									text : "Citește cuvintele si ordonează-le astfel încât să formeze propoziții corecte, apoi completează numărul lor de ordine în spațiile indicate. " +
										   "Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
								
							},
							gameDates : "GamesInteractivPg26_ex8",
							sarcina:"sounds/sarcini/pg26_vol2.mp3",
						}
					},{
						name : "GamesComplex",
						x:1650, y:140, width:1250, height:355,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Alege imaginea care reprezintă persoane sfinte cărora le adresezi rugăciuni.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeImagineaCorecta.mp3",
									text : "Privește cu atenție apoi alege imaginea corectă. Bifează căsuța de sub ea, apoi apasă  butonul  VERIFICĂ din dreapta-jos. " +
										   "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								}	
							},
							gameDates : "GamesInteractivPg27_ex9",
							sarcina:"sounds/sarcini/alegeImagineaCorecta.mp3",
					   }
				  }]
					
				},
				{
					page : 13,
					pageImage : "images/pagina/pg28.jpg",
					pageImage2 : "images/pagina/pg29.jpg",
					corner : true,
					btnImages : [{x :2377,y : 125,width : 110,height : 69,classCss:"btn_observa"},
					             {x :1702,y : 1017,width : 110,height : 69,classCss:"btn_puzzle"}
					            ],
		          games:[{
						name : "GamesStatic",
						x:2377, y:125, width:518, height:810,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Duminica mergem la biserică. ",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg29_1.jpg",width : 336,height : 530,top : -12,left : 0},
							}
					  }
				},{
					name : "GamesComplex",
					x:1700, y:1015, width:1135, height:725,
					gameInstance : {
						title : {
							logo:"puzzle",
							text : "Recompune imaginea",
							position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							help : {
								src : "sounds/help/helpPuzzle.mp3",
								text : "Trage imaginile  în ordinea corectă pentru a obține imaginea de puzzle. Imaginea de puzzle o găsești în stânga careului. " +
										"Când consideri că ai terminat, apasă butonul  VERIFICĂ, pentru a afla dacă ai  rezolvat corect sau nu. " +
										"Dacă ai greșit undeva, ți se va afișa răspunsul corect. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
							},
						},
						gameDates : "GamesInteractivPg29_ex5",
						sarcina:"sounds/sarcini/recompuneImaginea.mp3",
					  },
		          }
				]
					
					
				},
				{
					page : 14,
					pageImage : "images/pagina/pg30.jpg",
					pageImage2 : "images/pagina/pg31.jpg",
					corner : true,
					btnImages : [{x : 1717,y :277,width : 393,height : 69,classCss:"btn_video"},
					             {x : 1957,y : 680,width : 393,height : 69,classCss:"btn_observa"},
					             ],
					videos:[{
		        		name : "video",
		        		x:1715, y:275, width:1160, height:345,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Biserica Naşterii Domnului din Betleem",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
		        			src : "video/vol2_pg31_22M_biserica_nasterii_din_bethleem.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	}], 
					games:[{
						name : "GamesStatic",
						x:1955, y:678, width:675, height:510,
						gameInstance : {
							title : {
								logo:"observa",
								text : "La colindat",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg31.jpg",width : 707,height : 530,top : -12,left : 0},
							}
					  }
					}]
					
				},
				{
					page : 15,
					pageImage : "images/pagina/pg32.jpg",
					pageImage2 : "images/pagina/pg33.jpg",
					corner : true,
					btnImages : [{x : 2758,y : 487,width : 110,height : 69,classCss:"btn_video"},
					             {x : 2272,y : 877,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1737,y : 1352,width : 110,height : 69,classCss:"btn_video"},
					             {x : 2272,y : 1352,width : 110,height : 69,classCss:"btn_video"},
					             {x : 342,y : 1102,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 797,y : 1102,width : 110,height : 69,classCss:"btn_audio"},//audio
					             {x : 797,y : 392,width : 110,height : 69,classCss:"btn_interactiv"},
					],
					videos:[{
			        		name : "video",
			        		x:1675, y:485, width:1195, height:200,
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Pregătirea cozonacilor",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									},
			        			src : "video/vol2_pg33_29_femei_pregatind_mancarea.mp4",
			        			properties : {width:1066, height:600}
			        		}
		        	},{
		        		name : "video",
		        		x:2270, y:875, width:385, height:475,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Ne spovedim.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
		        			src : "video/vol2_pg33_31_adult_la_spovedit.mp4",
		        			properties : {width:1066, height:600}
		        		}
	        	 },{
		        		name : "video",
		        		x:1735, y:1350, width:385, height:385,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Împodobim bradul.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
		        			src : "video/vol2_pg33_30_copii_impodobind_bradul.mp4",
		        			properties : {width:1066, height:600}
		        		}
	        	 },{
		        		name : "video",
		        		x:2270, y:1350, width:385, height:385,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Ne împărtășim.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
		        			src : "video/vol2_pg33_32_copii_la_impartasit.mp4",
		        			properties : {width:1066, height:600}
		        		}
	        	 }],
					games:[{
						name : "audio",
						x : 795,y : 1100,width : 455,height : 630,
						srcAudio:"sounds/audio/pg32_6_plecarea_magilor.mp3",
							
					   },{
						name : "GamesStatic",
						x:340, y:1100, width:455, height:630,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Cei trei crai care aduc daruri Pruncului Iisus.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg32.jpg",width : 650,height : 530,top : -12,left :0},
							}
						}
					},{
						name : "GamesComplex",
						x:795, y:380, width:580, height:235,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul VERIFICĂ din dreapta-jos."+
										   "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg32_ex10",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  }]
					
				},
				{
					page : 16,
					pageImage : "images/pagina/pg34.jpg",
					pageImage2 : "images/pagina/pg35.jpg",
					corner : true,
					btnImages : [ {x : 345,y : 420,width : 110,height : 69,classCss:"btn_video"},
					              {x : 1752,y : 442,width : 110,height : 69,classCss:"btn_video"},
					             // {x : 407,y : 782,width : 110,height : 69,classCss:"btn_observa"},
					              {x : 897,y : 782,width : 110,height : 69,classCss:"btn_observa"},
					              {x : 2062,y : 442,width : 110,height : 69,classCss:"btn_observa"},
					              {x : 2740,y : 1120,width : 110,height : 69,classCss:"btn_audio"},
					              {x : 1717,y : 1247,width : 110,height : 69,classCss:"btn_interactiv"}],
					videos:[{
			        		name : "video",
			        		x:390, y:420, width:1015, height:340,
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Colindători în biserică.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									},
			        			src : "video/vol2_pg34_34_colindatori_in_biserica.mp4",
			        			properties : {width:1066, height:600}
			        		}
					},
					{
		        		name : "video",
		        		x:1750, y:440, width:310, height:765,
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Colindători la Patriarhie.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
		        			src : "video/vol2_pg35_33_colindatori_la_patriarhie.mp4",
		        			properties : {width:1066, height:600}
		        		}
				}],
					games : [{
						name : "audio",
						x:2460, y:440, width:390, height:755,
						srcAudio:"sounds/audio/pg35_7_iata_vin_colindatori.mp3",
							
					   },
					   {
						name : "GamesStatic",
						x:895, y:780, width:480, height:435,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Colindători",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg34_2.jpg",width : 707,height : 530,top : -12,left :0},
							}
						}
					},{
						name : "GamesStatic",
						x:2060, y:440, width:310, height:765,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Colindători la Patriarhie",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg35.jpg",width : 797,height : 530,top : -12,left :0},
							}
						}
					},{
						name : "GamesComplex",
						x:1715, y:1245, width:1155, height:485,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Alege varianta corectă.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
									text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul VERIFICĂ din dreapta-jos. "+
									       "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
									       "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg35_ex11",
							sarcina:"sounds/sarcini/alegeVariantaCorecta.mp3",
					   }
				  }]
		        },
				{
					page : 17,
					pageImage : "images/pagina/pg36.jpg",
					pageImage2 : "images/pagina/pg37.jpg",
					corner : true,
					btnImages : [{x : 357,y : 797,width : 110,height : 69,classCss:"btn_observa"}],
					games:[{
						name : "GamesStatic",
						x:355, y:795, width:855, height:505,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Colindători",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg36.jpg",width : 783,height : 530,top : -12,left :0},
							}
						}
					}]
					
					
				},
				{
					page : 18,
					pageImage : "images/pagina/pg38.jpg",
					pageImage2 : "images/pagina/pg39.jpg",
					corner : true,
					btnImages : [{x : 252,y : 891,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1917,y : 887,width : 110,height : 69,classCss:"btn_observa"}],
					videos:[],
					games:[{
						name : "GamesStatic",
						x:250, y:890, width:555, height:845,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Nașterea Pruncului Iisus",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg38.jpg",width : 372,height : 530,top : -12,left :0},
							}
						}
					},
					{
						name : "GamesStatic",
						x:1915, y:885, width:715, height:525,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Colindători",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg39.jpg",width : 795,height : 530,top : -12,left :0},
							}
						}
					}]
					
					
				},
				{
					page : 19,
					pageImage : "images/pagina/pg40.jpg",
					pageImage2 : "images/pagina/pg41.jpg",
					corner : true,
					btnImages : [{x : 317,y : 152,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1697,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2252,y : 152,width : 110,height : 69,classCss:"btn_audio"},
					             {x : 1335,y : 902,width : 110,height : 69,classCss:"btn_interactiv"},
					             ],
		             videos:[{
			        		name : "video",
			        		x:315, y:150, width:955, height:725,
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Grup de colindători",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol2_pg40_35_colindatori_Maramures.mp4",//
			        			properties : {width:1066, height:600}
			        		}
			        	},
			        ],
					games:[{
						name : "audio",
						x:2250, y:150, width:555, height:855,
						srcAudio:"sounds/audio/pg41_5_o_ce_veste_minunata.mp3",
							
					   },{
						name : "GamesStatic",
						x:1695, y:150, width:555, height:855,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Nașterea Domnului",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg41_1.jpg",width : 729,height : 530,top : -12,left :0},
							}
					   }
					},{
						name : "GamesComplex",
						x:185, y:900, width:1260, height:225,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Găseşte ordinea corectă a cuvintelor și alcătuiește o propoziție:",/*Numerotează cuvintele, pentru a obține enunțurile potrivite.*/
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpNumeroteazaCuvintele.mp3",
									text : "Citește cuvintele si ordonează-le astfel încât să formeze propoziții corecte, apoi completează numărul lor de ordine în spațiile indicate. " +
										   "Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL." +
										  " Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
								
							},
							gameDates : "GamesInteractivPg40_ex12",
							sarcina:"sounds/sarcini/pg40_vol2.mp3",
						}
					}]
					
					
				},
				{
					page : 20,
					pageImage : "images/pagina/pg42.jpg",
					pageImage2 : "images/pagina/pg43.jpg",
					corner : true,
					btnImages : [{x : 387,y : 912,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1712,y : 410,width : 110,height : 69,classCss:"btn_observa"},
					            ],
					games:[{
						name : "GamesStatic",
						x:385, y:910, width:885, height:810,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Sfântul Nicolae şi copiii.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg42.jpg",width :399,height : 530,top : -12,left :0},
							}
					   }
					},
					{
						name : "GamesStatic",
						x:1695, y:395, width:475, height:730,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Sfântul Nicolae",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg43.jpg",width :363,height : 530,top : -12,left :0},
							}
					   }
					}]
					
					
				},
				{
					page : 21,
					pageImage : "images/pagina/pg44.jpg",
					pageImage2 : "images/pagina/pg45.jpg",
					corner : true,
					btnImages : [{x : 647,y : 742,width : 110,height : 69,classCss:"btn_audio"},
					             {x : 1037,y : 742,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1630,y :240,width : 110,height : 69,classCss:"btn_interactiv"}
					],
					games:[{
							name : "audio",
							x:645, y:740, width:390, height:1000,
							srcAudio:"sounds/audio/pg44_10_astazi_s-a_nascut_hristos.mp3",
								
						},
					   {
							name : "GamesStatic",
							x:1035, y:740, width:390, height:1000,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Icoana Nașterii Domnului",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg44.jpg",width :391,height : 530,top : -12,left :0},
								}
						   }
						},
						{
							name : "GamesComplex",
							x:1615, y:150, width:1260, height:1455,
							gameInstance : {
								title : {
									logo:"interactiv",
									text : "Găsește imaginea potrivită pentru fiecare cuvânt.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpGasesteImaginea.mp3",
										text : "Trage cuvintele  care corespund imaginilor din dreapta peste zona marcată de pe fiecare în parte. " +
												"Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
												"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
												"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
										},
									
								},
								gameDates : "GamesInteractivPg45_ex13",
								sarcina:"sounds/sarcini/gasesteImagineaPotrivita.mp3",
							}
						}]
				},
				{
					page : 22,
					pageImage : "images/pagina/pg46.jpg",
					pageImage2 : "images/pagina/pg47.jpg",
					corner : true,
					btnImages : [{x : 362,y : 902,width : 110,height : 69,classCss:"btn_audio"},
					             {x : 802,y : 902,width : 110,height : 69,classCss:"btn_observa"},
					],
					videos:[],
					games:[{
						name : "audio",
						x:360, y:900, width:440, height:625,
						srcAudio:"sounds/audio/pg46_b4_steaua_sus_rasare.mp3",
							
					},
				   {
						name : "GamesStatic",
						x:800, y:900, width:440, height:625,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Copiii cântă „Steaua sus răsare!” ",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg46.jpg",width :809,height : 530,top : -12,left :0},
							}
					   }
					}]
				},
				{
					page : 23,
					pageImage : "images/pagina/pg48.jpg",
					pageImage2 : "images/pagina/pg49.jpg",
					corner : true,
					btnImages : [{x : 180,y : 632,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1680,y : 782,width : 110,height : 69,classCss:"btn_video"},
					             {x : 512,y : 1092,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 730,y : 377,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x : 2337,y : 1467,width : 110,height : 69,classCss:"btn_interactiv"}
					            ],
		            videos:[{
			        		name : "video",
			        		x:185, y:630, width:1270, height:440, 
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Biserica Învierii Domnului Hristos",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol2_pg48_23M_biserica_invierii_si_a_sf.mormant.mp4",
			        			properties : {width:1066, height:600}
			        		}
			        	},
			        	{
			        		name : "video",
			        		x:1683, y:722, width:1183, height:366, 
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Pregătiri tradiţionale de Sfintele Paşti.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol2_pg49_17.mp4",
			        			properties : {width:1066, height:600}
			        		}
			        	}],            
					games:[{
							name : "GamesStatic",
							x:510, y:1090, width:555, height:655,
							gameInstance : {
								title : {
									logo:"observa",
								    text : "Învierea Mântuitorului",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg48.jpg",width : 450,height : 530,top : -12,left :0},
								}
						   }
						},{
							name : "GamesComplex",
							x:790, y:375, width:590, height:245,
							gameInstance : {
								title : {
									logo:"interactiv",
									text : "Bifează răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
										text : "Bifează  răspunsul sau răspunsurile corecte. Când consideri că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
												"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
												"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg48_ex14",
								sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
						   }
					  },{
							name : "GamesComplex",
							x:2335, y:1465, width:505, height:240,
							gameInstance : {
								title : {
									logo:"interactiv",
									text : "Alege răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
										text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul VERIFICĂ din dreapta-jos."+
											   "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg49_ex15",
								sarcina:"sounds/sarcini/alegeRaspunsulCorect.mp3",
						   }
					  }]
					
					
				},
				{
					page : 24,
					pageImage : "images/pagina/pg50.jpg",
					pageImage2 : "images/pagina/pg51.jpg",
					corner : true,
					btnImages : [{x : 355,y : 497,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1672,y : 157,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1712,y : 409,width : 110,height : 69,classCss:"btn_observa"}],
		            videos:[{
			        		name : "video",
			        		x:395, y:495, width:995, height:340, 
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Slujba Învierii Domnului Hristos (fragment)",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol2_pg50_21M_slujba_de_inviere_cu_Hristos_a_inviat.mp4",
			        			properties : {width:1066, height:600}
			        		}
			       },
			       {
		        		name : "video",
		        		x:1670, y:155, width:1205, height:220, 
		        		gameInstance : {
		        			title : {
		        				logo:"video",
								text : "Slujba Învierii Domnului Hristos (fragment)",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol2_pg51_36_preot_slujba_invierii.mp4",
		        			properties : {width:1066, height:600}
		        		}
		       }],
			       games:[{
						name : "GamesStatic",
						x:1710, y:405, width:1130, height:760,
						gameInstance : {
							title : {
								logo:"observa",
							    text : "Credincioși în noaptea de Înviere",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg51.jpg",width: 795,height : 530,top : -12,left :0},
							}
					   }
					}]
					

				},
				{
					page : 25,
					pageImage : "images/pagina/pg52.jpg",
					pageImage2 : "images/pagina/pg53.jpg",
					corner : true,
					btnImages : [{x : 312,y : 887,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 847,y : 887,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 312,y : 1317,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 217,y :387,width : 110,height : 69,classCss:"btn_interactiv"}
					             ],
					games:[{
							name : "GamesStatic",
							x:310, y:885, width:450, height:415,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Ne spovedim.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg52_1.jpg",width : 365,height : 530,top :-12,left :0},
								}
			        	   }	
						
					   },{
							name : "GamesStatic",
							x:845, y:885, width:450, height:415,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Ne împărtășim.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg52_3.jpg",width :796,height : 530,top : -12,left :0},
								}
			        	   }	
							
					},
					{
						name : "GamesStatic",
						x:310, y:1315, width:450, height:415,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Pictăm.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg52_2.jpg",width :352,height : 530,top : -12,left :0},
							}
		        	   }	
						
				},{
					name : "GamesComplex",
					x:215, y:295, width:1160, height:165,
					gameInstance : {
						title : {
							logo:"interactiv",
							text : "Alege varianta corectă.",
							position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							help : {
								src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
								text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos."+
								       "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
								       "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
							},	
						},
						gameDates : "GamesInteractivPg52_ex16",
						sarcina:"sounds/sarcini/alegeVariantaCorecta.mp3",
				   }
			   }]
			  },
				{
					page : 26,
					pageImage : "images/pagina/pg54.jpg",
					pageImage2 : "images/pagina/pg55.jpg",
					corner : true,
					btnImages : [{x : 255,y : 877,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2282,y : 367,width : 110,height : 69,classCss:"btn_observa"},
					            ],
					games:[{
							name : "GamesStatic",
							x:255, y:875, width:590, height:855,
							gameInstance : {
								title : {
									logo:"observa",
									text : "Copiii ciocnesc ouă roșii </br>de Sfintele Paști.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol2_pg54.jpg",width :352,height : 530,top : -12,left :0},
								}
			        	   }	
							
				   },{
						name : "GamesStatic",
						x:2280, y:365, width:550, height:860,
						gameInstance : {
							title : {
								logo:"observa",
								text : "De Paști, natura se îmbracă </br>în straie de sărbătoare.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg55.jpg",width :366,height : 530,top : -12,left :0},
							}
		        	   }	
						
				  }],
				},
				{
					page : 28,
					pageImage : "images/pagina/pg56.jpg",
					pageImage2 : "images/pagina/pg57.jpg",
					corner : true,
					btnImages : [{x : 1797,y : 462,width : 110,height : 69,classCss:"btn_video"},
					             {x : 218,y : 390,width : 110,height : 69,classCss:"btn_interactiv"},
					            ],
		             videos:[{
			        		name : "video",
			        		x:1795, y:460, width:960, height:635,
			        		gameInstance : {
			        			title : {
			        				logo:"video",
									text : "Veniți de luați lumină!",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol2_pg57_24M_slujba_invierii_la_biserica_invierii_ierusalim.mp4",
			        			properties : {width:1066, height:600}
			        		}
			        	}],            
					games:[{
						name : "GamesComplex",
						x:218, y:300, width:1240, height:910,
						gameInstance : {
							title : {
								logo:"interactiv",
								text : "Identifică anotimpul în care sărbătorim Învierea Domnului.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeImagineaCorecta.mp3",
									text : "Privește cu atenție apoi alege imaginea corectă. Bifează căsuța de sub ea, apoi apasă butonul  VERIFICĂ din dreapta-jos. " +
										   "Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								}	
							},
							gameDates : "GamesInteractivPg56_ex17",
							sarcina:"sounds/sarcini/alegeImagineaCorecta.mp3",
					   }
				  }],
					
				},
				{
					page : 29,
					pageImage : "images/pagina/pg58.jpg",
					pageImage2 : "images/pagina/pg59.jpg",
					corner : true,
					btnImages : [{x : 399,y : 665,width : 110,height : 69,classCss:"btn_observa"},
					             ],
					games:[{
						name : "GamesStatic",
						x:397, y:663, width:780, height:1090,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Învierea Domnului Iisus Hristos",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg58.jpg",width : 386,height : 530,top : -12,left :0},
							}
					   }	
					 }]
					

				},
				{
					page : 30,
					pageImage : "images/pagina/pg60.jpg",
					pageImage2 : "images/pagina/pg61.jpg",
					corner : true,
					btnImages : [{x : 367,y : 1027,width : 110,height : 69,classCss:"btn_observa"},
					             ],
					games:[{
						name : "GamesStatic",
						x:365, y:1025, width:865, height:700,
						gameInstance : {
							title : {
								logo:"observa",
								text : "Ouă încondeiate din Bucovina",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol2_pg60.jpg",width : 707,height : 530,top : -12,left :0},
							}
						}
					}]
					
				}, {
					page : 31,
					pageImage : "images/pagina/pg62.jpg",
					pageImage2 : "images/pagina/pg63.jpg",
					corner : true,
					btnImages : [{x : 922,y : 1177,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2407,y : 322,width : 110,height : 69,classCss:"btn_observa"},
					             ],
					games:[{
							name : "GamesStatic",
							x:920, y:1175, width:454, height:564,
							gameInstance : {
								title : {
									 logo:"observa",
									 text : "Rugăciune la sfârșitul orelor de curs",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol2_pg62.jpg",width : 434,height : 530,top : -12,left :0},
								}
							}
					  },
					  {
							name : "GamesStatic",
							x:2405, y:320, width:400, height:560,
							gameInstance : {
								title : {
									 logo:"observa",
									 text : "Rugăciune pentru părinți",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol2_pg63.jpg",width :353,height : 530,top : -12,left :0},
								}
							}
					  }]
					
				}, {
					page : 32,
					pageImage : "images/pagina/pg64.jpg",
					pageImage2 : "images/pagina/pg_alba.jpg",
					corner : true,
					btnImages : [{x :807,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					            ],
								
					games:[{
							name : "GamesStatic",
							x:805, y:150, width:570, height:820,
							gameInstance : {
								title : {
									 logo:"observa",
									 text : "Înger",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol2_pg64.jpg",width : 372,height : 530,top : -12,left :0},
								}
					       }	
				   }]
			},
			{
				page : 33,
				pageImage : "images/pagina/coperta4.jpg",
				pageImage2 : "images/pagina/pagina_final.jpg",
				corner : false,
				
		}]
	};

	this.sounds = [

	           	{
	           		id : "click",
	           		src : "comune/click.mp3"
	           	}, {
	           		id : "checkRight",// corect
	           		src : "comune/checkRight.mp3"
	           	}, {
	           		id : "checkWrong",// gresit
	           		src : "comune/checkWrong.mp3"
	           	}, {
	           		id : "rightAnswer",// daca raspunde corect
	           		src : "comune/rightAnswer.mp3"
	           	}, {
	           		id : "rightAnswer1",// daca raspunde corect
	           	},{
	           		id : "rightAnswer2",// daca raspunde corect
	           		src : "comune/rightAnswer2.mp3"
	           	},{
	           		id : "rightAnswer3",// daca raspunde corect
	           		src : "comune/rightAnswer3.mp3"
	           	},{
	           		id : "wrongAnswer",
	           		src : "comune/wrongAnswer.mp3"
	           	}, {
	           		id : "wrongAnswer1",
	           		src : "comune/wrongAnswer1.mp3"
	           	}, {
	           		id : "wrongAnswer2",
	           		src : "comune/wrongAnswer2.mp3"
	           	}, {
	           		id : "wrongAnswer3",
	           		src : "comune/wrongAnswer3.mp3"
	           	}, {
	           		id : "wrongAnswer4",
	           		src : "comune/wrongAnswer4.mp3"
	           	},{
	           		id : "correctAnswer",// urmeaza raspunsul corect
	           		src : "comune/correctAnswer.mp3"
	           	}  , {
	           		id : "notFinish",// urmeaza raspunsul corect
	           		src : "comune/noInput.mp3"
	           	} 
	           	];

	this.images = [ {
		id : "empty",
		src : "imagesCommon/empty.png"
	}, {
		id : "ok",
		src : "imagesCommon/ok.png"
	}, {
		id : "wrong",
		src : "imagesCommon/wrong.png"
	}, {
		id : "tick",
		src : "imagesCommon/tick.png"
	} ];

	this.dates = {
			GamesInteractivPg06_ex1: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 06, noExcercise :1, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg06_ex1.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,//lui Dumnezeu
					response : '1'
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg11_ex2: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 11, noExcercise :2, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg11_ex2.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,//Convorbirea sufletului cu Dumnezeu
					response : '1'
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg12_ex3: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 12, noExcercise :3, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg12_ex3.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,//Semnul sfintei cruci
					response : '1'
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg14_ex4: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 14, noExcercise :4, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg14_ex4.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,//Multumeste lui Dumenzeu pentru hrana
					response : '1'
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
//			GamesInteractivPg15_ex5 : [{
//				nameGame : "GamesPuzzle",
//				result : {page : 15,noExcercise :5,totalItem : 16},
//				imagesSrc : "images/games/interactive/pg15_ex5_puzzle/",
//				fundal : {src : "images/games/interactive/pg15_ex5_puzzle/previewImg.jpg",width : 100,height : 200,top : 20,left : 0},
//				dropArea : {width : 245,height : 367,top :5,left : 400},
//				columns: 1,
//				objects : [ {
//					id : 0,
//					left:-30,top:375,width:60,height:90,src : "piesa16.jpg",response:15
//				}, {
//					id : 1,
//					left:35,top:375,width:60,height:90,src : "piesa7.jpg",response:6
//				}, {
//					id : 2,
//					left:100,top:375,width:60,height:90,src : "piesa14.jpg",response:13
//					 
//				},  {
//					id : 3,
//					left:165,top:375,width:60,height:90,src : "piesa13.jpg",response:12
//					 
//				},{
//					id : 4,
//					left:230,top:375,width:60,height:90,src : "piesa8.jpg",response:7
//					
//				}, {
//					id : 5,
//					left:295,top:375,width:60,height:90,src : "piesa5.jpg",response:4
//					 
//				},{
//					id : 6,
//					left:360,top:375,width:60,height:90,src : "piesa1.jpg",response:0
//				}, {
//					id : 7,
//					left:425,top:375,width:60,height:90,src : "piesa4.jpg",response:3
//					 
//				}, {
//					id : 8,
//					left:490,top:375,width:60,height:90,src : "piesa10.jpg",response:9
//					 
//				},  {
//					id : 9,
//					left:555,top:375,width:60,height:90,src : "piesa2.jpg",response:1
//					 
//				},{
//					id : 10,
//					left:620,top:375,width:60,height:90,src : "piesa11.jpg",response:10
//					
//				}, {
//					id : 11,
//					left:685	,top:375,width:60,height:90,src : "piesa3.jpg",response:2
//					 
//				},{
//					id : 12,
//					left:750,top:375,width:60,height:90,src : "piesa6.jpg",response:5
//				}, {
//					id : 13,
//					left:815,top:375,width:60,height:90,src : "piesa9.jpg",response:8
//					 
//				}, {
//					id : 14,
//					left:880,top:375,width:60,height:90,src : "piesa12.jpg",response:11
//					 
//				},  {
//					id : 15,
//					left:945,top:375,width:60,height:90,src : "piesa15.jpg",response:14
//					 
//				}],
//				area : [ {
//					id : 0,
//					left:403,top:7,width:60,height:90
//				}, {
//					id : 1,
//					left:463,top:7,width:60,height:90
//				}, {
//					id : 2,
//					left:523,top:7,width:60,height:90
//				}, {
//					id : 3,
//					left:583,top:7,width:60,height:90
//				}, {
//					id : 4,
//					left:403,top:97,width:60,height:90
//				}, {
//					id : 5,
//					left:463,top:97,width:60,height:90
//				},{
//					id : 6,
//					left:523,top:97,width:60,height:90
//				}, {
//					id : 7,
//					left:583,top:97,width:60,height:90
//				}, {
//					id : 8,
//					left:403,top:187,width:60,height:90
//				}, {
//					id : 9,
//					left:463,top:187,width:60,height:90
//				}, {
//					id : 10,
//					left:523,top:187,width:60,height:90
//				}, {
//					id : 11,
//					left:583,top:187,width:60,height:90
//				},{
//					id : 12,
//					left:403,top:277,width:60,height:90
//				}, {
//					id : 13,
//					left:463,top:277,width:60,height:90
//				}, {
//					id : 14,
//					left:523,top:277,width:60,height:90
//				}, {
//					id : 15,
//					left:583,top:277,width:60,height:90
//				}]
//			}],
			GamesInteractivPg16_ex6: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 16, noExcercise :6, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg16_ex6.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '0'
				}, {
					id : 1,
					left:76,top:184 ,
					response : '1'//Acasa, la biserica, la scoala
				}]
			}],
			GamesInteractivPg23_ex7: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 23, noExcercise :7, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg23_ex7.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '1'//DA
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg26_ex8 : [{
				nameGame : "GamesWriteNumbers",
				result : {page : 26,noExcercise :8,totalItem : 6},
				imagesSrc : "images/",
				columns: 1,
				fundal : {src : "images/games/interactive/pg26_ex8.jpg",width :883,height : 530,top : -10,left : 50},
				colorInput:"border-color: #C08651; box-shadow: 0 0 10px #A77649;border:2;font-size:25px;",
				overColor:"0 0 10px #A77649",
				outColor:"0 0 10px #A77649",
				objects : [ {
					id : 0,
					left:110,top:210, width:40, height : 40, maxlength:1,//Dumnezeu
					response : '6'
				}, {
					id : 1,
					left:350,top:210, width:40, height : 40, maxlength:1,//este
					response : '2'
				}, {
					id : 2,
					left:570,top:210,  width:40, height : 40, maxlength:1,//omului
					response : '4'
				}, {
					id : 3,
					left:810,top:210, width:40, height : 40, maxlength:1,//vorbirea
					response : '3'
				},{
					id : 4,
					left:250,top:410, width:40, height : 40, maxlength:1,//Rugaciunea
					response : '1'
				},{
					id : 5,
					left:570,top:410, width:40, height : 40, maxlength:1,//cu
					response : '5'
				}]
			}],
			
			
			GamesInteractivPg27_ex9 : [{
				nameGame : "GamesSingleTick",
				result : {page : 27,noExcercise :9,totalItem : 4},
				noLevelImages : 4,
				 imgTick : {src:"imagesCommon/tick.png",top:5,left:7,width :40, height : 40},//incercuiala
				imagesSrc : "images/",
				displayInput: "none",
				 fundal : {src : "images/games/interactive/pg27_ex9.jpg",width : 883,height : 530,top : -10,left : 50},
				//respose 1: selected ; 0:unselected
				 objects : [ {
				      id : 0,
				      left:204,top:282, width :30, height :30,
				      response : '1'
				     }, {
				      id : 1,
				      left:428,top:282, width :30, height :30,
				      response : '1'//Maica Domnului
				     }, {
				      id : 2,
				      left:662,top:282, width :30, height :30,
				      response : '1'
				     }, {
				      id : 3,
				      left:887,top:282, width :30, height :30,
				      response : '0'
					 }]
				,
				inputs : [ {
						id : 0,
						left:204,top:282, width :45, height :45,//
					}, {
						id : 1,
						left:428,top:282, width :45, height :45,//
					}, {
						id : 2,
						left:662,top:282, width :45, height :45,
					}, {
						id : 3,
						 left:887,top:282, width :45, height :45,
					} ]
			}],
			GamesInteractivPg29_ex5 : [{
				nameGame : "GamesPuzzle",
				result : {page : 29,noExcercise :5,totalItem : 16},
				imagesSrc : "images/games/interactive/pg29_ex5_puzzle/",
				fundal : {src : "images/games/interactive/pg29_ex5_puzzle/previewImg.jpg",width : 208,height : 133,top : 20,left : 0},
				dropArea : {width : 464,height : 304,top :18,left : 268},
				columns: 1,
				objects : [ {
					id : 0,
					left:10,top:420,width:115,height:75,src : "piesa16.jpg",response:15
				}, {
					id : 1,
					left:130,top:420,width:115,height:75,src : "piesa7.jpg",response:6
				}, {
					id : 2,
					left:250,top:420,width:115,height:75,src : "piesa14.jpg",response:13
					 
				},  {
					id : 3,
					left:370,top:420,width:115,height:75,src : "piesa13.jpg",response:12
					 
				},{
					id : 4,
					left:490,top:420,width:115,height:75,src : "piesa8.jpg",response:7
					
				}, {
					id : 5,
					left:610,top:420,width:115,height:75,src : "piesa5.jpg",response:4
					 
				},{
					id : 6,
					left:730,top:420,width:115,height:75,src : "piesa1.jpg",response:0
				}, {
					id : 7,
					left:850,top:420,width:115,height:75,src : "piesa4.jpg",response:3
					 
				}, {
					id : 8,
					left:10,top:330,width:115,height:75,src : "piesa10.jpg",response:9
					 
				},  {
					id : 9,
					left:130,top:330,width:115,height:75,src : "piesa2.jpg",response:1
					 
				},{
					id : 10,
					left:250,top:330,width:115,height:75,src : "piesa11.jpg",response:10
					
				}, {
					id : 11,
					left:370,top:330,width:115,height:75,src : "piesa3.jpg",response:2
					 
				},{
					id : 12,
					left:490,top:330,width:115,height:75,src : "piesa6.jpg",response:5
				}, {
					id : 13,
					left:610,top:330,width:115,height:75,src : "piesa9.jpg",response:8
					 
				}, {
					id : 14,
					left:730,top:330,width:115,height:75,src : "piesa12.jpg",response:11
					 
				},  {
					id : 15,
					left:850,top:330,width:115,height:75,src : "piesa15.jpg",response:14
					 
				}],
				area : [ {
					id : 0,
					left:270,top:20,width:115,height:75
				}, {
					id : 1,
					left:385,top:20,width:115,height:75
				}, {
					id : 2,
					left:500,top:20,width:115,height:75
				}, {
					id : 3,
					left:615,top:20,width:115,height:75
				}, {
					id : 4,
					left:270,top:95,width:115,height:75
				}, {
					id : 5,
					left:385,top:95,width:115,height:75
				},{
					id : 6,
					left:500,top:95,width:115,height:75
				}, {
					id : 7,
					left:615,top:95,width:115,height:75
				}, {
					id : 8,
					left:270,top:170,width:115,height:75
				}, {
					id : 9,
					left:385,top:170,width:115,height:75
				}, {
					id : 10,
					left:500,top:170,width:115,height:75
				}, {
					id : 11,
					left:615,top:170,width:115,height:75
				},{
					id : 12,
					left:270,top:245,width:115,height:75
				}, {
					id : 13,
					left:385,top:245,width:115,height:75
				}, {
					id : 14,
					left:500,top:245,width:115,height:75
				}, {
					id : 15,
					left:615,top:245,width:115,height:75
				}]
			}],

			GamesInteractivPg32_ex10: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page :32, noExcercise :10, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg32_ex10.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '1'//Betllem
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				},{
					id : 2,
					left:76,top:295 ,
					response : '1'//O stea
				}, {
					id : 3,
					left:76,top:325 ,
					response : '0'
				}]
			}],
			GamesInteractivPg35_ex11: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page :35, noExcercise :11, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg35_ex11.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '1'//Nasterea Domunului Iisus Hristos
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg40_ex12 : [{
				nameGame : "GamesWriteNumbers",
				result : {page : 40,noExcercise :12,totalItem : 4},
				imagesSrc : "images/",
				columns: 1,
				fundal : {src : "images/games/interactive/pg40_ex12.jpg",width :883,height : 530,top : -10,left : 50},
				colorInput:"border-color: #C08651; box-shadow: 0 0 10px #A77649;border:2;font-size:25px;",
				overColor:"0 0 10px #A77649",
				outColor:"0 0 10px #A77649",
				objects : [ {
					id : 0,
					left:110,top:260, width:40, height : 40, maxlength:1,//oamenilor
					response : '3'
				}, {
					id : 1,
					left:350,top:260, width:40, height : 40, maxlength:1,//vestesc
					response : '2'
				}, {
					id : 2,
					left:570,top:260,  width:40, height : 40, maxlength:1,//Nasterea Domnului
					response : '4'
				}, {
					id : 3,
					left:810,top:260, width:40, height : 40, maxlength:1,//Colindatorii
					response : '1'
				}]
			}],
			 GamesInteractivPg45_ex13 :[ {
					nameGame : "GamesPuzzle_v2",
					result : {page : 45,noExcercise :13,totalItem : 5,},
					imagesSrc : "images/games/interactive/pg45_ex13/",
					columns: 2,
					fundal : {src : "images/games/interactive/pg45_ex13/fundal2.png",width :424,height : 530,top : -20,left : 350},//width :126,height : 530,top : -20,left : 650
					areaShapes: {src : "imagesCommon/empty.png",width : 100,height : 420,top : 70,left : 0},
					size :25,
					table : {width : 1000,height : 150,top : 250,left : 0},
					area : [  
					          {id:0,left:750,top:-15,width:190,height:90},//colindatori
					          {id:1,left:750,top:95,width:190,height:90},//
					          {id:2,left:750,top:200,width:190,height:90},//
					          {id:3,left:750,top:310 ,width:190,height:90},//
					          {id:4,left:750,top:415,width:190,height:90},//
					          
					       ],   
					objects : [
			            {id:0,left:50,top:10,width:190,height:90,src:"pastori.jpg",response:2},
			            {id:1,left:50,top:110,width:190,height:90,src:"iarna.jpg",response:4},
			            {id:2,left:50,top:210,width:190,height:90,src:"colindatori.jpg",response:0},
			            {id:3,left:50,top:310,width:190,height:90,src:"dar.jpg",response:1},
			            {id:4,left:50,top:410,width:190,height:90,src:"poezie.jpg",response:3},
			           
			        ],
				}],
			GamesInteractivPg48_ex14: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page :48, noExcercise :14, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg48_ex14.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '1'//Invierea Domnului
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg49_ex15: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page :49, noExcercise :15, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg49_ex15.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '1'//Invierea Domnului
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg52_ex16: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page :52, noExcercise :16, totalItem : 1},  //inregistrarea rezultatelor
//				noLevelImages : 4,
				imagesSrc : "images/",
//				checkLength: 4,
				fundal : {src : "images/games/interactive/pg52_ex16.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:154 ,
					response : '1'//Post
				}, {
					id : 1,
					left:76,top:184 ,
					response : '0'
				}]
			}],
			GamesInteractivPg56_ex17 : [{
				nameGame : "GamesSingleTick",
				result : {page : 56, noExcercise :17, totalItem : 4},
				noLevelImages : 4,
				imgTick : {src:"imagesCommon/tick.png",top:5,left:5,width :30, height : 30},//incercuiala
			    imagesSrc : "images/",
				//displayInput: "none",
				 fundal : {src : "images/games/interactive/pg56_ex17.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: selected ; 0:unselected
				 objects : [ {
				      id : 0,
				      left:105,top:395, width :30, height :30,
				      response : '1'//ghiocei
				     }, {
				      id : 1,
				      left:350,top:395, width :30, height :30,
				      response : '0'
				     }, {
				      id : 2,
				      left:575,top:395, width :30, height :30,
				      response : '0'
				     }, {
				      id : 3,
				      left:820,top:395, width :30, height :30,
				      response : '0'
					 }]
				,
				inputs : [ {
						id : 0,
						left:105,top:395, width :40, height :40,
					}, {
						id : 1,
						 left:350,top:395,  width :40, height :40,
					}, {
						id : 2,
						left:575,top:395,  width :40, height :40,
					}, {
						id : 3,
						left:820,top:395, width :40, height :40,
					} ]
			}],
		
	};
};

GameDates.prototype.getDates = function() {
	return this.dates;
};