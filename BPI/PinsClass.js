    function Controller(param1) // param1:View class 
    {
        var service;  //:FillDataService class
        var workMap;  //:WorkMap class
        var self = this;

        this.view = param1;
        service = new FillDataService();
        service.addEventListener(FillDataEvent.DATA_COMPLETE, onDataComplete);
        this.view.request.addEventListener("click", onCreateRequestClick);
       
        function onDataComplete(event)  //event:FillDataEvent
        {
            if (self.view.colorMap.visible)
            {
                displayGrayMap();
                workMap = new WorkMap(self.view);
            }
            else
            {
                workMap.clear();
            }
            //Model.workData = event.data;
            //workMap.updatePins();
            return;
        }// end function

        function onCreateRequestClick(event)
        {
            self.view.dragMapLabel.visible = true;
  	        self.view.zoomControl.visible = true;         	
            service.sendRequest();
            onDataComplete();  //temperally replace service.sendRequest
            return;
        }// end function

        function displayGrayMap()
        {
            self.view.colorMap.visible = false;
            self.view.map.visible = true;
            self.view.zoomControl.visible = true;
            self.view.dragMapLabel.visible = true;
            return;
        }// end function

    };
    
   function FillDataEvent(type, bubbles, cancelable) //extends Event
	 {

		this.data = null;  //:XML;
		
		createjs.Event.call(this, type, bubbles, cancelable);
	  FillDataEvent.prototype = Object.create(createjs.Event.prototype);			

	 };
	
	 FillDataEvent.DATA_COMPLETE = "dataAreLoaded";
	 
	 createjs.EventDispatcher.initialize(
	 (FillDataService = function() {  //extends EventDispatcher
		 var userRequest; //:HTTPService;
		 var workData; //:XML;
		 var fillCompleteEvent; //:FillDataEvent;
		 var serverSetting;  //:XML;
		 var myXMLRequest;  //:URLRequest; 
		 var myXMLLoader;  //:URLLoader;
		 var self = this;
						
		 myXMLRequest = "pinsSettings.xml";	
		 myXMLLoader = new createjs.LoadQueue(false);  //URLLoader();		
		 myXMLLoader.addEventListener("complete", completeHandler);			
		 //myXMLLoader.addEventListener("error", onIOError);
     //myXMLLoader.loadFile(myXMLRequest);            
 	   completeHandler();
		 function completeHandler(event){		    

	    	serverSetting =  "http://healthcareerslehighvalley.com/get_pins.php";   //event.result.childNodes[0].firstElementChild.textContent;  //XML(myXMLLoader.data);    
		    userRequest = new createjs.LoadQueue(false);		
				/*
				userRequest.useProxy = false;
				userRequest.resultFormat = HTTPService.RESULT_FORMAT_E4X;
				userRequest.url = serverSetting.httpServiceurl;
				userRequest.method = "GET";*/
				//userRequest.addEventListener(ResultEvent.RESULT,onResult);
				//userRequest.addEventListener(FaultEvent.FAULT, onFault);

			  userRequest.on("fileload",onResult);
			  userRequest.loadFile(serverSetting);
			  
		  }	
			
		  function onResult(e) {			
		 	  fillCompleteEvent = new FillDataEvent(FillDataEvent.DATA_COMPLETE);
			  fillCompleteEvent.data = StringToXML(e.result); console.log(e.result);	
			  self.dispatchEvent(fillCompleteEvent); 			
 		 }
 				 
 				 
		function XMLToString(oXML)
		{
		  //code for IE
		  if(window.ActiveXObject){
		    var oString = oXML.xml;
		    return oString;
		  }
		  //code for Chrome, Safari, Firefox, Opera, etc.
		  else{
		    return (new XMLSerializer()).serializeToString(oXML);
		  }
		}
		
		function StringToXML(oString)
		{
		   //code for IE
		   if(window.ActiveXObject){
		      var oXML = new ActiveXObject("Microsoft.XMLDOM"); oXML.loadXML(oString); 
		      return oXML;
		   }
		   // code for Chrome, Safari, Firefox, Opera, etc.
		   else{
		      return (new DOMParser()).parseFromString(oString, "text/xml");		   
		   }
		} 				 
 		 
  	//	 function onFault(e:FaultEvent):void {
  	//		Alert.show("An attempt to get data fault: " + e.fault.toString());
  	//	}
  		
		this.sendRequest = function (){			
			var params = {};											
			params["string"]= String(new Date().getTime());				
			userRequest.loadFile(serverSetting);  //userRequest.send(params);	    		
  	} 
  		
  	//	private function onIOError(event:IOErrorEvent):void{
		//    Alert.show("Unable to load a file with settings'"+ event.text);				     	    
		//}	 	  		
	}).prototype);

  //import components.Pin;
	
	//import flash.events.MouseEvent;
	//import flash.events.TimerEvent;
	//import flash.geom.Point;
	//import flash.net.LocalConnection;
	//import flash.utils.Timer;
	
	//import mx.binding.utils.BindingUtils;
	//import mx.controls.Alert;
	//import mx.controls.Image;
	//import mx.effects.Move;
	//import mx.effects.Parallel;
	//import mx.effects.Resize;
	//import mx.events.EffectEvent;
	//import mx.events.SliderEvent;
	//import mx.managers.CursorManager;
	//import mx.managers.CursorManagerPriority;
	
	function WorkMap(pinsView)  //pinsView:View
	{	
		var view; //:View;
		var pin; //:Pin;
		var map; //:Image;
		
		//[Embed(source="icons/pinsIcons.swf", symbol="IconHandOpen")] 
		var iconHandOpen; //:Class;		
		//[Embed(source="icons/pinsIcons.swf", symbol="IconHandClosed")] 
		var iconHandClosed; //:Class;		
		//[Bindable]
		var resizeFactor = 1.0;				
		
		var parallel;
		var mapResize;  //:Resize;		
		var mapMove;   //:Move;
		
		var downPoint;  //:Point;
		var originalPoint;  //:Point;				
		var orgSliderPoint; //:Point;  
		
		var cursorHandClosedID = 0;		
		var centerPoint;  //:Point;
		var shiftKey;
			
			view = pinsView;
			map = pinsView.map;
			parallel = pinsView.parallel;	
			
			//mapResize = new Resize(map);			
			//parallel.addChild(mapResize);	 		
			//mapMove = new Move(map);
			//parallel.addChild(mapMove);			
			parallel.addChild(map);
			
			//BindingUtils.bindProperty(view.zoomSlider, "value", this, "resizeFactor");
			
			//orgSliderPoint = new createjs.Point(view.zoomControl.zoomSlider.x, view.zoomControl.zoomSlider.y);
			view.zoomControl.zoomSlider.addEventListener("pressmove", doSliderChange);
			view.zoomControl.zoomSlider.addEventListener("pressup", doZoomChange);
			view.zoomControl.ZoomOut.addEventListener("click", doZoomOut);	
			view.zoomControl.ZoomIn.addEventListener("click", doZoomIn);				
		  view.zoomControl.addEventListener("mouseover", function(){map.cursor = ""});
		  view.zoomControl.addEventListener("mouseout", function(){map.cursor = "url(Bitmap1.cur), auto"});
			map.addEventListener("dblclick", onMouseClick);	
			map.addEventListener("mousedown", onMouseDown);
			map.addEventListener("pressup", onMouseUp);
			map.cursor = "url(Bitmap1.cur), auto";
					
			centerPoint= new createjs.Point(canvas.width/2 - parallel.x,  canvas.height/2 - parallel.y);				
				
		
		  this.updatePins = function ()
		  {			
		  /*							
			for each (var district in Model.workData.district)
			{
				
				var code = XMLToString(district.attribute('name'));
				//p - array of points for current region
				var p = Model.regionsObject[code];
				if (!p){						
					Alert("Code " + code + " was not found in base! These pins were not added to the map.");
					continue;
				}	
				var density = 30;
				var attempts = 3;						
				var pointArray = new Array();											
				for each (var item in district.pin){					
					var y=0;
					while (density >=0){					
					//attempts to generate suitable y
					for (var ycount = 0; (ycount < attempts)&&(!y); ycount ++){ 
						var x=0;
						if (code == "LowerSaucon" && !((pointArray.length + 1) % 4)){
							var bound = calculateBoundaries(p.x4, p.y4, p.x5, p.y5, p.x6, p.y6, p.x7, p.y7, density);	
						}else {
							var bound = calculateBoundaries(p.x0, p.y0, p.x1, p.y1, p.x2, p.y2, p.x3, p.y3, density);							
						}
						y = bound.y;						
						//attempts to generate suitable x											
						for (var xcount = 0; (xcount < attempts) && (!x); xcount ++){ 							
							x = Math.round(Math.random() * (bound.xmax - bound.xmin)) + bound.xmin;	
							for (var temp =0; temp < pointArray.length; temp ++){
								//search points which are situated nearer than the parameter "density" allows    
								if ((pointArray[temp].y + density > y) && (pointArray[temp].y - density < y)&&
								(pointArray[temp].x + density > x) && (pointArray[temp].x - density < x)){										
									x = 0; //zeroize x to generate new value
									break;
								}
							}							
						}
					//set y = 0 to generate new y after N unsuccessful attempts to create suitable x	
					y = (xcount == attempts)?0:y;									
					}
				if (ycount == attempts){
					//decrease the density after N unsuccessful attempts to create new y coordinate
					density--;
				}else //new suitable coordinates are generated
					break; 				
				}
				//trace ("x",x,"y", y);
				pointArray.push({x:x, y:y});
				//use resizeFactor if the map was zoomed
				pin = new Pin(item.link.toString(), item.rollover.toString());				
				
				pin.x = x * resizeFactor;
				pin.y = y * resizeFactor - pin.height;				
				
				parallel.addChild(pin);		
					
				}//for each (var item:XML in city.pin){				
				
			}//for each (var city:XML in model.workData.city)
			*/			
		}
		
		function calculateBoundaries(x0, y0, x1, y1, 
											 x2, y2, x3, y3, density)
		{
			var bound= new Array();
			
			/** Every region is described by next coordinates
		 				 *			x1;y1
						 * 		  /	\
						 * 	x0;y0/   \
						 *       \    \x2;y2
						 *        \   /
						 *         \ /
						 *         x3;y3
						 **/		
											
			var ymax = y3 - density/2;	
			var ymin = y1 + density/2;
					
			//generate random number between ymax and ymin			
			var y = Math.round(Math.random() * (ymax - ymin) + ymin);						
			
			//xmin - left limit for x 
			if (y > y0){	//segment x0;y0 - x3;y3
				bound.xmin = x0 + (y - y0) * (x3 - x0)/(y3 - y0);
			}else{			//segment x0;y0 - x1;y1
				bound.xmin = x0 + (y - y0) * (x1 - x0)/(y1 - y0);
			}
			//xmax - right limit for x 
			if (y > y2){	//segment x3;y3 - x2;y2
				bound.xmax = x3 + (y - y3) * (x2 - x3)/(y2 - y3);
			}else{	//segment x1;y1 - x2;y2
				bound.xmax = x1 + (y - y1) * (x2 - x1)/(y2 - y1);
			}	
			//trace ("y",y,"bound.xmin",bound.xmin,"bound.xmax",bound.xmax);
			bound.y = y;	
			return bound;
		}	
					
		function onMouseOver(event){						
           event.currentTarget.cursor = "pointer";
		}								
 
		
		function onMouseOut(event){
        //canvas.style.cursor = "none";    
		}
		
		document.onkeydown = function(evt){
			       shiftKey = evt.keyCode;
		};			
		function onMouseClick(event){			
	
				if(shiftKey == 16)
				{
					doZoomOut(event);
											
				} else{
					doZoomIn(event);	
											
				}								
        
		}		

		function onMouseDown(event){
			
			downPoint = new createjs.Point(stage.mouseX, stage.mouseY);
			originalPoint= new createjs.Point(parallel.x, parallel.y);		
  		event.currentTarget.cursor = "url(Bitmap2.cur), auto"; 
			stage.addEventListener("stagemousemove", onMouseMove);
			
		}
					
		function onMouseMove(event){
			//trace (event.currentTarget);
			view.dragMapLabel.visible = false;			
						
			var newPoint = new createjs.Point(stage.mouseX, stage.mouseY);
      //convert stage coordinates to map coordinates
		  
			var newX =originalPoint.x+(newPoint.x-downPoint.x);
      var newY =originalPoint.y+(newPoint.y-downPoint.y);			
			
			parallel.x = newX;
			parallel.y = newY;		
     // centerPoint.x = canvas.width/2 - parallel.x;
     // centerPoint.y = canvas.height/2 - parallel.y;	
			
		}

				
		function onMouseUp(event){			
			
			event.currentTarget.cursor = "url(Bitmap1.cur), auto"; 

			stage.removeEventListener("stagemousemove", onMouseMove);
		}		
		
		function doZoom(factor){		   
		   	view.zoomControl.zoomSlider.mouseEnabled = false;
        view.zoomControl.ZoomOut.mouseEnabled = false;
			  view.zoomControl.ZoomIn.mouseEnabled = false;	
           	

         	//set parameters for resize map effect
	
       		
          createjs.Tween.get(parallel).to({x:canvas.width/2 - centerPoint.x * factor, y:canvas.height/2 - centerPoint.y * factor, scaleX:factor, scaleY:factor},500);
          view.zoomControl.zoomSlider.y = 162 - 16 * (factor - 1);           	

         	
      		view.zoomControl.zoomSlider.mouseEnabled = true;
			    view.zoomControl.ZoomOut.mouseEnabled = (resizeFactor > view.factorMin);
			    view.zoomControl.ZoomIn.mouseEnabled = (resizeFactor < view.factorMax);	    	
           
		}
			

		function doZoomOut(event){
			if (resizeFactor - view.resizeStep >= view.factorMin){				
				doZoom(resizeFactor-view.resizeStep);				
				resizeFactor = resizeFactor - view.resizeStep;
				resizeFactor = Number(resizeFactor.toFixed(1));
			}	
		}

		function doSliderChange(event){
			if(stage.mouseY - view.zoomControl.y >= 18 && stage.mouseY - view.zoomControl.y <= 162+8)
			{		

  			  event.currentTarget.y = stage.mouseY - view.zoomControl.y;
  			 
			} 									 	
		}		
		function doZoomChange(event){
			if(event.currentTarget.y > 162)
			{		
			 event.currentTarget.y = 162;
			}else if(event.currentTarget.y > 162-16 && event.currentTarget.y < 162)
			{		
			 event.currentTarget.y = 162-16;
			}else if(event.currentTarget.y >= 162 - 2*16 && event.currentTarget.y < 162-16) 
			{
			 event.currentTarget.y = 162-16*2;
		  }else if(event.currentTarget.y >= 162 - 16*3 && event.currentTarget.y < 162-2*16) 
			{
			 event.currentTarget.y = 162-16*3;
		  }else if(event.currentTarget.y >= 162 - 16*4 && event.currentTarget.y < 162-3*16) 
			{
			 event.currentTarget.y = 162-16*4;
		  }else if(event.currentTarget.y >= 162 - 16*5 && event.currentTarget.y < 162-4*16) 
			{
			 event.currentTarget.y = 162-16*5;
		  }else if(event.currentTarget.y >= 162 - 16*6 && event.currentTarget.y < 162-5*16) 
			{
			 event.currentTarget.y = 162-16*6;
		  }else if(event.currentTarget.y >= 162 - 16*7 && event.currentTarget.y < 162-6*16) 
			{
			 event.currentTarget.y = 162-16*7;
		  }else if(event.currentTarget.y >= 162 - 16*8 && event.currentTarget.y < 162-7*16) 
			{
			 event.currentTarget.y = 162-16*8;
		  }else if(event.currentTarget.y >= 162 - 16*9 && event.currentTarget.y < 162-8*16) 
			{
			 event.currentTarget.y = 162-16*9;
		  }								
			
			doZoom((162 - event.currentTarget.y)/16 + 1);							
			resizeFactor = (162 - event.currentTarget.y)/16+1;	
			resizeFactor = Number(resizeFactor.toFixed(1));
			 									 	
		}
				
		function doZoomIn(event){
			if (resizeFactor + view.resizeStep <= view.factorMax){				
				doZoom(resizeFactor+view.resizeStep);			
				resizeFactor = resizeFactor + view.resizeStep;
				resizeFactor = Number(resizeFactor.toFixed(1));			
			}
		}

		//remove children from the map
		
		this.clear = function (){		
			var i = parallel.numChildren;
			while (parallel.numChildren > 1){
				if (parallel.getChildAt(--i) instanceof Pin){
					pin = parallel.getChildAt(i);				
					pin.removeAllListeners();
				}					
				parallel.removeChildAt(i);									
			}
	  }
		
	};
	
	function Model()
	{
		
	};	
	Model.regionsObject = { 
			"Lynn":{x0:7, y0:344, 
x1:70, y1:285, 
x2:105, y2:329, 
x3:78, y3:377}, 
	        "Weisenberg":{x0:87, y0:381, 
x1:112, y1:334, 
x2:153, y2:364, 
x3:137, y3:406},
	        "UpperMacungie":{x0:141, y0:410, 
x1:167, y1:351, 
x2:208, y2:374, 
x3:185, y3:426},
	        "LowerMacungie":{x0:188, y0:430, 
x1:215, y1:376, 
x2:256, y2:397, 
x3:228, y3:451},
	        "UpperMilford": {x0:235, y0:452, 
x1:261, y1:401, 
x2:287, y2:416, 
x3:263, y3:466},
	        "LowerMilford":{x0:270, y0:470, 
x1:295, y1:416, 
x2:323, y2:427, 
x3:297, y3:485},
	        "Heilderberg":{x0:77, y0:279, 
x1:100, y1:249, 
x2:142, y2:296, 
x3:109, y3:325}, 
	        "Lowhill":{x0:116, y0:327, 
x1:144, y1:301, 
x2:168, y2:339, 
x3:155, y3:356},	        
	        "W Allent":{x0:169, y0:345, 
x1:216, y1:304, 
x2:247, y2:331, 
x3:213, y3:369},
	        "S Allent":{x0:218, y0:373, 
x1:258, y1:327, 
x2:308, y2:365, 
x3:286, y3:402},
	        "UpperSaucon":{x0:290, y0:406, 
x1:327, y1:345, 
x2:364, y2:371, 
x3:327, y3:420},
	        "Washington":{x0:103, y0:242, 
x1:147, y1:217, 
x2:168, y2:256, 
x3:137, y3:280},
	        "NorthWhitehall":{x0:140, y0:285, 
x1:207, y1:248, 
x2:231, y2:287, 
x3:172, y3:335},
	        "WhiteHall":{x0:222, y0:302, 
x1:255, y1:275, 
x2:278, y2:299, 
x3:251, y3:326},
	        "CtrAllent":{x0:260, y0:324, 
x1:282, y1:300, 
x2:322, y2:339, 
x3:311, y3:361},
	        "Lehigh":{x0:152, y0:215, 
x1:208, y1:182, 
x2:236, y2:227, 
x3:176, y3:252},
	        "Allen":{x0:213, y0:242, 
x1:247, y1:231, 
x2:263, y2:265, 
x3:236, y3:282},
	        "FtnHill":{x0:257, y0:273, 
x1:286, y1:257, 
x2:324, y2:312, 
x3:308, y3:318},
	        "S Beth":{x0:314, y0:323, 
x1:366, y1:299, 
x2:380, y2:329, 
x3:355, y3:358}, 
	        "N Beth":{x0:301, y0:268, 
x1:340, y1:250, 
x2:363, y2:293, 
x3:330, y3:308},
	        "Hanover":{x0:292, y0:254, 
x1:306, y1:248, 
x2:309, y2:258, 
x3:299, y3:264},
	        "East Allen":{x0:252, y0:229, 
x1:292, y1:213, 
x2:305, y2:242, 
x3:267, y3:261},
	        "Moore":{x0:214, y0:180, 
x1:280, y1:145, 
x2:307, y2:197, 
x3:242, y3:227},
	        "UpperNazareth":{x0:296, y0:210, 
x1:344, y1:191, 
x2:362, y2:233, 
x3:315, y3:249},
	        "Bethlehem":{x0:344, y0:248, 
x1:366, y1:239, 
x2:381, y2:268, 
x3:361, y3:279},
	        "LowerSaucon":{x0:365, y0:285, x1:382, y1:271, x2:403, y2:318,x3:391, y3:328, 
						x4:360, y4:364, x5:398, y5:309, x6:402, y6:316, x7:365, y7:368},  							
	        "Bushkill":{x0:287, y0:140, 
x1:312, y1:116, 
x2:349, y2:180, 
x3:315, y3:195},
	        "Palmer":{x0:350, y0:187, 
x1:365, y1:181, 
x2:400, y2:271, 
x3:389, y3:276},
	        "Plainhill":{x0:316, y0:114, 
x1:349, y1:79, 
x2:388, y2:169, 
x3:355, y3:176},
	        "Forks":{x0:372, y0:181, 
x1:406, y1:175, 
x2:415, y2:199, 
x3:383, y3:214},
	        "Easton":{x0:386, y0:219, 
x1:414, y1:209, 
x2:425, y2:254, 
x3:402, y3:264},
	        "Williams":{x0:392, y0:280, 
x1:425, y1:262, 
x2:432, y2:289, 
x3:407, y3:314},
	        "Washington1":{x0:352, y0:72, 
x1:354, y1:69, 
x2:417, y2:89, 
x3:381, y3:137},
	        "Lower MT. Bethel":{x0:384, y0:143, 
x1:425, y1:90, 
x2:453, y2:102, 
x3:404, y3:166},
	        "Upper MT. Bethel":{x0:350, y0:59, 
x1:404, y1:5, 
x2:473, y2:53, 
x3:450, y3:91}};	    
	    
   Model.workData = null;     
	   
	function Pin(linkStr, rolloverStr) 
	{

   	var imgCls;  //:Class;   
		var http = "http://";		
		var URL; //:URLRequest;
		var self = this;
		
	    lib.componentsPin_imgCls.call(this);
	    Pin.prototype = Object.create(lib.componentsPin_imgCls.prototype);	
	    
			//source = imgCls;
			this.Height = 18;
			this.width = 18; 	
		
			this.addEventListener("click", displayLink); 
			this.addEventListener("mouseover", onMouseOver);
			
			if (rolloverStr.length && rolloverStr != "undefined"){
				rolloverStr = rolloverStr.replace(/\\n/g, "\n");
				toolTip = rolloverStr;				
			}				
										
			if (linkStr.length && linkStr != "undefined"){
				if (linkStr.indexOf(http)){	
					linkStr = String (http + linkStr);	
				}	
				url = linkStr;  //   new URLRequest(linkStr);
			} 			
		
		
		function onMouseOver(event){			
			//cursorManager.removeAllCursors();			
		}
	
		function displayLink(event){	
			//trace("pinX", x, "pinY", y);
			if (url){							
				window.open(url,"_blank");
			}
		}
		this.removeListeners = function (){
			this.removeEventListener("click",displayLink);
			this.removeEventListener("mouseover", onMouseOver);	
		}		
		
	};
	
	