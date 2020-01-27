(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._Pins_mx_managers_SystemManager = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{_Pins_mx_managers_SystemManager:0,Pins:1});

  var self= this;
  this.frame_0 = function(){
  	

			
			this.numPoint = 0;
			
			this.factorMin = 1.0;			
			this.factorMax = 10.0;	
			this.resizeStep = 1.0;
			
			this.colorMap.on("click", onMouseClick);
			//function for updating region coordinates in the model
			function onMouseClick(event){						
				console.log ("x"+ self.numPoint +":"+ event.localX + ", y"+self.numPoint+":" + event.localY+", ");				 
				numPoint = (numPoint<3)? numPoint+1 :0; 			
			}						
			
			var classMap = new Controller(this);
      this.gotoAndStop(1);  	
  }	
  
  this.frame_1 = function(){
  	this.stop();
  	this.dragMapLabel.visible = false;
  	this.zoomControl.visible = false; 
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
	// dragMapLabel
	this.dragMapLabel = new lib.dragMapBox("synched",0);
	this.dragMapLabel.setTransform(98,451.1,1,1,0,0,0,105.5,10.6);
	this.dragMapLabel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dragMapLabel).wait(1).to({startPosition:0,_off:false},0).wait(1));

	// see job
	this.request = new lib.flcontrolsButton();
	this.request.setTransform(10, 5,0.7,1);
	this.request._off = true
	new cjs.ButtonHelper(this.request, 0, 1, 2, false, new lib.flcontrolsButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.request).wait(1).to({_off:false},0).wait(1));

	// zoomControl
	this.zoomControl = new lib.ZoomControlPanel("synched",0);
	this.zoomControl.setTransform(37.8-9.8,153-105,1,1);
	this.zoomControl._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zoomControl).wait(1).to({startPosition:0,_off:false},0).wait(1));

  this.parallel = new cjs.Container();
	// map
	this.map = new lib.BPIgray();
	this.map.setTransform(35,0,1,01);

   
	this.timeline.addTween(cjs.Tween.get(this.parallel).wait(1).to({_off:false},0).wait(1));

	// colorMap
	this.colorMap = new lib.BPIcolor();
	this.colorMap.setTransform(35,0,1,1);
	this.colorMap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.colorMap).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.image25 = function() {
	this.initialize(img.image25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,16);


(lib.componentsPin_imgCls = function() {
	this.initialize(img.componentsPin_imgCls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.ZoomControlBox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#545657").ss(0.1,0,1).p("AhjvGIAAeMQAAAjAcAYQAcAZAnAAIAIAAQAoAAAcgZQAcgYAAgjIAA+MQAAgjgcgYQgcgYgoAAIgIAAQgnAAgcAYQgcAYAAAjg");
	this.shape.setTransform(10,105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545657").s().p("AgDQZQgoAAgcgYQgbgYgBgjIAA+MQABgjAbgYQAcgYAoAAIAHAAQAoAAAbAYQAcAYAAAjIAAeMQAAAjgcAYQgbAYgoAAg");
	this.shape_1.setTransform(10,105);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,210);


(lib.sliderButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,0,1).p("AhKgBICVhUIgDCrg");
	this.shape.setTransform(9.5,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKgBICVhUIgECrg");
	this.shape_1.setTransform(9.5,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,0,1).p("ABLhVIgDCrIiShXg");
	this.shape_2.setTransform(9.5,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,2.2,15.1,17.3);


(lib.progress_line = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,0,1).p("AAPrjIgdAAQgFAAAAAMIAAWuQAAANAFAAIAdAAQAFAAAAgNIAA2uQAAgMgFAAg");
	this.shape.setTransform(2,74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgNLjQgGAAAAgMIAA2uQAAgMAGAAIAcAAQAEAAAAAMIAAWuQAAAMgEAAg");
	this.shape_1.setTransform(2,74);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4,148);


(lib.View__embed_mxml_icons_BPI_Map_Color_swf_702124648 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mask = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgBGAgrMgkEgQ/ICiiyQAKgLAHgEQAIgEAOgDIAbgDQAggEAlgjIA5g8IBRhSIBChyIAYgXQAOgOALgIIAMgLQAEgGABgKIABgSQAAgKAFgGQAEgHAMgBIATgBQAMgCAGgCQANgFAPgOIAZgYQAVgRAEgFQADgFAFgNQAFgLAFgFQADgDAIgEIAMgFIAZgVQAYgVANgSQAHgJAIgUQAJgWAEgIQAHgLAMgNIAVgWIAegjQASgVAOgMIAPgNQAHgHAFgJQAOgUAHgSIAIgOIAJgOIAHgOQAFgHAHgEQARgHAGgGQAPgQAKgFIBCgjIA2gXQAhgOATgOQAkgaAagIQAhgLA/gYIAmgNIAhgMQALgFALgPIAQgaQAOgTACgFQACgDACgKQACgJACgDIAPgNIBGg2IABgBIACgCIACAAIABAAIAOgBIA3gfIAugLIAfglIA3ghIAlgJIABAAIADgBIABAAIABAAIACgBIABAAIAigHIA1gfIBCgSIAwgYIADgBIB4gzIABgBIAWgTIADgCIAKgEIADgCIBNgoIAGgEIBQgWIAOgGIBzhFIAQgcIC6hMIAIgOIAvgmIAEgEIABAAIABgCIAGgEICwiMIABgBIADgFIAMgPIADgEIAHgFIBGhQIBlg2IAEgDIAFgCIAEgBIAbgdIABAAIAAgBIADgCIAAgBIAAAAIADgCIAAgBIAPgQIAVgGIAXgaIAQgkIAfglIAUhXIBahhIAGgEIAEgDIAIgKIADgGIAFgRIACgEIAIgLIARgRIAggaIACgBIgfgfIgBgBIgfggIBTiBIAJgkIACgTIAAgBIAAgFIABgEIAGgIIAAAAIABgCIABgBIABgDIAAgBIAAgBIACgGIAEgHIALgMIAPgNIAagTIAagQIAHgFIAMgIIAGgDIACAAIACAAIADAAIAKAAIACgBIAAgBIAFgIIAIgFIANgCIALgFIAhgVIAJgKIADgFIABgDIgDgKIABgGIABgCIABgEIgEgRIAAgDIABgDIACgDIAJgJIACgBIAXgRIAQgCIACgBIAGgEIAOgEIABAAIAGgBIAGgCIAcgLIAfgNIAQgLIAGgFIA1g2IAQgRQAKgLAIgFQAUgOARAVQAJALANAaQADAFAHAFIANAJQAHAGANANQAMAKAaARIAQANQAJAIAHAEQANAHAbAMIARAKQAKAFAIACQALADAKAJIARARIAJAJIABAAIASAKIACABIAAAAIABABIAaAOIABABIABABIACABIAGADIADABIAdAOQAEABABAGIACALIAGAJIAHAJIAOASQAIAKAJADIAPACQAKAAAEADQAFADADAGIAFAMQAHAWASAHQAnASARADIATAFQAMACAHADQAHADAKAJIAiAWIAhAVQAUAMALAUQAIANADAUIAFAiIAFAWQAHAXgDAEQgEAGgRgBQgRAAgEAFIgEAKIgEALIgIALQgBAEAAACIADAGQADAFADAYIAGAgIAFANQACAIgCAFQgDAOgUAUQgIAIgOAFIgZAGIhPAVIgjAHQgWAEgMAJQgHAFAAALQAAAFADANIACANQABAIACAEIAIAKIAFAKQADAEAEADIAJAFQAFADACAEQAEAOgIAOIgNAWQgIAMgEAKQgEAKADANQABAIAGAPQALAggNAzQgFAVAIAPIABACIAAACIABABIACAEIADAPIAAAMIgFAPIgIASIgBACIAAACIgEAHIgDAJIAAABIgEAQIgEALIgLAKIgDADIgYAIIgIAFIgKAJIgBAAIAAABIgBABIgBABIgBAAIgBABIgBACIgCABIAAAAIgEAEIgJAJIgFAJIgBAGIAAAAIgGALIAAADIgBABIgFATIgBAEIAAACIgBABIgCAKIAAACIgBABIAAABIAAABIAAABIgBABIgFAaIgIARIgFAFIgcAIIgkABIgCAAIgCAAIgXADIgLAAIgFAAIgigHIgMgBIgUAAIgEgBIgFAAIgCABIgCAAIgeAHIgLAJIgEAIIgCAEIgDAHIAAAEIAAAAIgBACIgCAKIgBABIgCAIIAAAEIABADIAAAgIAFAiIgFAVIgLARIgHAJIgXASIgCACIgBABIgCACIgFAEIgMANIgOAYIgEALIgBACIgBAEIAAACIABALIAFAPIADAIIAGAGIADAGIAIAHIARANIAgATIAWAVIABAAIASATIAHAPIABAIIAAAFIgCAGIgFANIAAABIgCAEIABAHQgDAKALAOQAMAPABAGQABAIgFAHIgKALIAAAAIgHAKIgBABIgNAWIgBAEIAAACIAAABIAAACIgBAHIABAJIAAAEIgBADIAAABIABACIAAAHIgJAoIgEB3IAAAAIAJAQIABABIAAAAIAGAJIABABIAAAAIAAAAIAAABIABABIAAAAIABADIAKAMIAgAcIAUADIAEAAIANAEIAEAAIAHgCIAEgDIAFgCIAEgCIAOgEIAJgBIANAAIAKABIADABIAAABIACABIABAAIAFADIADACIAEAFIAEAKIABADIAAAEIAAACIAAACIABAEIAAALIgCAIIgCAFIgBAFIgFARIgBACIgDAHIgCALIgCADIAAADIgBACIgDADIgBABIgBABIgCACIgHAHIgCADIgEACIgDABIgDADIgOARIgGAOIgBADIgMAnIAAACIgCAFIgBADIgBADIAAADIAAAAIgBACIAAAEIABAGIABACIAAABIAAACIAAAAIgBACIgBADIgCADIgBADIgCADIgCAIIAAADIgBABIAAABIABAGIAAAFIACAGIABABIAGAEIARAJIANALIABAAIAGACIAHACIAFADIASAcIABAGIABACIACAGIACADIAcBMIAEAIIACADIAAABIACAHIAAATIgDAKIgCADIgBABIgHADIgKABIgdAOIgBABIgEADIgFAFIgCADIgCAIIACAKIAGAKIAGAHIAJAJIAHAFIAHAIIAGAIIACABIADAFIgCACIgBABIgBABIgBABIAAAAIAAAAIgCACIgCACIAAAAIg1AzIAAAAIAAABIgBAAIgPASIgCABIgKAKIAAABIgCACIgCACIgLALIAAAAIgBABIgLALIgDACIgJAKIgxAxIgCACIgPAPIgBABIgDADIgBACIgDACIhJBDIgBABIgBABIgSARIgCACIgBABIgDADIAAAAIAAAAIgBACIgEAEIgCABIgMAQIAAAAIgBACIgDACIgbAcIgBABIgYAeIgCABIgBACIAAAAIgBACIgBABIgBABIgOATIgBAAIgZAjIgBAAIgZAhIgcAlIAAABIgqA4IgCACIgeAoIgBABIg6BVIgBABIhPBtIAAAAIgeArIAAABIgEAGIgCACIguBGIAAAAIgcApIgBABIAAABIAAABIAAAAIgBAAIAAABIgBAAIAAAAIgMASIgBACIgBABIgGAJIAAABIgPAVIgBACIgeArIgCAEIAAAAIgCAEIgBACIgDAFIAAAAIgBACIgBABIgBABIgBAAIgFAFIgBAAIAAABIgUAaIAAABIAAAAIgCADIgCACIgBAAIAAAAIgRAYIAAABIgKAPIAAABIAAAAIgBAAIAAACIgBAAIgNASIAAABIg+BWIgBABIgGAKIgpBSIAAAAIgdA6IgBABIhDCHIAAABIglBJIgCAEIAAAAIgTAnIAAABIgKAUIgBABIgBADIgCADIgBADIAAAAIgJASIgBABIgLAVIgCAFIgHANIAAABIgFAJIAAABIgCADIAAABIgRAiIAAABIgJAQIgBACIhMCcg");
	mask.setTransform(238,244.5);

	// Layer 3
	this.text = new cjs.Text("FTN HILL/\nW BETH", "8px Arial", "#231F20");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.setTransform(295.8,283.1);

	this.text_1 = new cjs.Text("CTR\nALLENT", "8px Arial", "#231F20");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 8;
	this.text_1.setTransform(288.5,317.7);

	this.text_2 = new cjs.Text("N\nBETH", "8px Arial", "#231F20");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 8;
	this.text_2.setTransform(329.8,266.9);

	this.text_3 = new cjs.Text("S BETH/\nHELLR TN", "8px Arial", "#231F20");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 8;
	this.text_3.setTransform(332.3,313.5);

	this.text_4 = new cjs.Text("W ALLENT/\nS WHITEHALL", "8px Arial", "#231F20");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 8;
	this.text_4.setTransform(212.7,321.1);

	this.text_5 = new cjs.Text("S ALLENT/\nSALIS/EMMAUS", "8px Arial", "#231F20");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 8;
	this.text_5.setTransform(260.7,348.9);

	this.text_6 = new cjs.Text("PLAINFIELD", "8px Arial", "#231F20");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 8;
	this.text_6.setTransform(348.2,127.4);

	this.text_7 = new cjs.Text("BUSHKILL", "8px Arial", "#231F20");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 8;
	this.text_7.setTransform(314.3,155.2);

	this.text_8 = new cjs.Text("WASHINGTON", "8px Arial", "#231F20");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 8;
	this.text_8.setTransform(382.6,88.4);

	this.text_9 = new cjs.Text("WASHINGTON", "8px Arial", "#231F20");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 8;
	this.text_9.setTransform(130.4,241.5);

	this.text_10 = new cjs.Text("WEISENBERG", "8px Arial", "#231F20");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 8;
	this.text_10.setTransform(116.7,365.2);

	this.text_11 = new cjs.Text("LOWHILL", "8px Arial", "#231F20");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 8;
	this.text_11.setTransform(138.1,323.6);

	this.text_12 = new cjs.Text("HEIDELBERG", "8px Arial", "#231F20");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 8;
	this.text_12.setTransform(104.8,281.3);

	this.text_13 = new cjs.Text("UPPER\nMT. BETHEL", "8px Arial", "#231F20");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 8;
	this.text_13.setTransform(409.4,37.2);

	this.text_14 = new cjs.Text("LOWER\nMT. BETHEL", "8px Arial", "#231F20");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 8;
	this.text_14.setTransform(412.6,119.7);

	this.text_15 = new cjs.Text("PALMER", "8px Arial", "#231F20");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 8;
	this.text_15.setTransform(372.2,200.8);

	this.text_16 = new cjs.Text("FORKS", "8px Arial", "#231F20");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 8;
	this.text_16.setTransform(390.1,184.6);

	this.text_17 = new cjs.Text("EASTON", "8px Arial", "#231F20");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 8;
	this.text_17.setTransform(405.9,232.6);

	this.text_18 = new cjs.Text("HANOVER", "8px Arial", "#231F20");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 8;
	this.text_18.setTransform(297.2,245.8);

	this.text_19 = new cjs.Text("EAST\nALLEN", "8px Arial", "#231F20");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 8;
	this.text_19.setTransform(274.9,226.5);

	this.text_20 = new cjs.Text("BETHL-\nEHEM", "8px Arial", "#231F20");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 8;
	this.text_20.setTransform(359.9,249.2);

	this.text_21 = new cjs.Text("UPPER/LOWER\nNAZARETH", "8px Arial", "#231F20");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 8;
	this.text_21.setTransform(324.3,211.3);

	this.text_22 = new cjs.Text("MOORE", "8px Arial", "#231F20");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 8;
	this.text_22.setTransform(255.2,186.2);

	this.text_23 = new cjs.Text("ALLEN", "8px Arial", "#231F20");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 8;
	this.text_23.setTransform(235.8,248.3);

	this.text_24 = new cjs.Text("LEHIGH", "8px Arial", "#231F20");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 8;
	this.text_24.setTransform(187.8,209.9);

	this.text_25 = new cjs.Text("UPPER\nSAUCON", "8px Arial", "#231F20");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 8;
	this.text_25.setTransform(322.2,373.5);

	this.text_26 = new cjs.Text("WILLIAMS", "8px Arial", "#231F20");
	this.text_26.textAlign = "center";
	this.text_26.lineHeight = 8;
	this.text_26.setTransform(407.4,277.4);

	this.text_27 = new cjs.Text("LOWER\nSAUCON", "8px Arial", "#231F20");
	this.text_27.textAlign = "center";
	this.text_27.lineHeight = 8;
	this.text_27.setTransform(388.8,295.5);

	this.text_28 = new cjs.Text("LOWER\nMILFORD", "8px Arial", "#231F20");
	this.text_28.textAlign = "center";
	this.text_28.lineHeight = 8;
	this.text_28.setTransform(288.8,446.8);

	this.text_29 = new cjs.Text("UPPER\nMACUNGIE", "8px Arial", "#231F20");
	this.text_29.textAlign = "center";
	this.text_29.lineHeight = 8;
	this.text_29.setTransform(170,384.9);

	this.text_30 = new cjs.Text("UPPER\nMILFORD", "8px Arial", "#231F20");
	this.text_30.textAlign = "center";
	this.text_30.lineHeight = 8;
	this.text_30.setTransform(258.8,422.7);

	this.text_31 = new cjs.Text("LOWER\nMACUNGIE", "8px Arial", "#231F20");
	this.text_31.textAlign = "center";
	this.text_31.lineHeight = 8;
	this.text_31.setTransform(216.6,405.8);

	this.text_32 = new cjs.Text("WHITE-\nHALL", "8px Arial", "#231F20");
	this.text_32.textAlign = "center";
	this.text_32.lineHeight = 8;
	this.text_32.setTransform(237.9,294.3);

	this.text_33 = new cjs.Text("NORTH\nWHITEHALL", "8px Arial", "#231F20");
	this.text_33.textAlign = "center";
	this.text_33.lineHeight = 8;
	this.text_33.setTransform(187.9,270.8);

	this.text_34 = new cjs.Text("LYNN", "8px Arial", "#231F20");
	this.text_34.textAlign = "center";
	this.text_34.lineHeight = 8;
	this.text_34.setTransform(56.1,329.7);

	this.text_35 = new cjs.Text("22", "8px Arial", "#231F20");
	this.text_35.textAlign = "center";
	this.text_35.lineHeight = 8;
	this.text_35.setTransform(375.3,227.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.5,0,0,4).p("AgIg5QgPAFgYgLIgXAVIAHAKQAHAMgBAHIgKATQgJAXAHAIIAIAIQANAHAVABIALADQAMAEAEAHQAIgLAUgDQAVgBANgHQAGgEACgEQAHgIgJgXIgKgTQgBgHAGgMQAEgGADgEIgWgVQgZALgOgFIgJgIQgBAFgHADg");
	this.shape.setTransform(377.6,234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA4IgLgDQgVgBgNgHIgIgIQgHgIAJgXIAKgTQABgIgHgLIgHgLIAXgUQAYALAPgGQAHgDABgEIAJAHQAOAGAZgLIAWAUIgHALQgGALABAIIAKATQAJAXgHAIQgCAEgGAEQgNAHgVABQgUADgIAKQgEgGgMgEg");
	this.shape_1.setTransform(377.6,234);

	this.text_36 = new cjs.Text("33", "8px Arial", "#231F20");
	this.text_36.textAlign = "center";
	this.text_36.lineHeight = 8;
	this.text_36.setTransform(333.5,141.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABOAAQAAAZgXASQgXASggAAQgfAAgXgSQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYg");
	this.shape_2.setTransform(335.8,147.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2ArQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYQAAAZgXASQgXASggAAQgfAAgXgSg");
	this.shape_3.setTransform(335.8,147.9);

	this.text_37 = new cjs.Text("476", "8px Arial", "#231F20");
	this.text_37.textAlign = "center";
	this.text_37.lineHeight = 8;
	this.text_37.setTransform(293.8,433.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.5,0,0,4).p("AhWgnQgCAFAAAJQAAAKADAIQADAHAGAIQAIALAIAHQAEAEANAHQANAHALADQAKAEAJAAQAKAAAKgEQAMgEAMgGQAIgEAJgHQAKgKAGgIQAGgIADgHQADgKAAgIQAAgMgHgNIijAAQgDAFgCAGg");
	this.shape_4.setTransform(296.1,440.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAvQgLgDgNgHQgNgHgEgEQgIgHgIgLQgGgIgDgIQgDgHAAgKQAAgIACgGIAFgLICjAAQAHANAAAMQAAAJgDAIQgDAIgGAIQgGAIgKAKIgRALQgMAGgMAEQgKAEgKAAQgJAAgKgEg");
	this.shape_5.setTransform(296.1,440.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AAUg6QADAAAHAAQAPAAAPgHQAEACAGAIQAEAEAFAJQAEAIACAHQADAIAAAHQAAAIgDAFQgCAKgDAEQgCAFgGAIQgDAEgIAIQgEAEgJAGQgIAFgJAEIgRAGQgJACgFAAQgGAAgMgEQgMgEgLgGQgMgHgHgGQgIgHgGgKQgGgIgDgJQgEgHAAgLQAAgJAEgLQAFgMAFgHQAGgJAHgFQAIAEAIABQAGACAJAAQAPAAAOgHg");
	this.shape_6.setTransform(296.1,439);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgSA/QgMgEgLgHQgMgGgGgHQgJgGgGgKQgGgIgDgKQgEgHABgLQAAgJADgKQAFgMAFgHQAHgJAHgGQAHAEAIACQAGACAJAAQAPAAAOgIIAUAHIAKABQAPAAAPgIIAKAKIAJANIAGAPQADAJgBAGQAAAJgCAEIgFAPIgIAMIgLAMQgEAEgJAGQgIAGgJADIgRAGQgJADgFAAQgGAAgMgEg");
	this.shape_7.setTransform(296.1,439.1);

	this.text_38 = new cjs.Text("78", "8px Arial", "#231F20");
	this.text_38.textAlign = "center";
	this.text_38.lineHeight = 8;
	this.text_38.setTransform(362,311.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABBgZQAAgNgEgMIh5AAIgDALQgCAGAAAIQAAAKACAHQADAIAEAIIAMASQADAEAKAHQAJAHAIADQAJAEAFAAQAGAAAJgEQAJgEAIgGQAIgGAFgFQAHgJAFgJQAFgJABgHQACgHAAgKg");
	this.shape_8.setTransform(364.1,318.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAvQgHgDgKgHQgJgHgEgEIgMgSQgEgIgDgIQgCgHAAgKQABgIABgGIAEgLIB4AAQAEAMABANQAAAKgCAHQgCAHgFAJQgEAJgIAJQgEAFgJAGQgIAGgJAEQgJAEgGAAQgFAAgJgEg");
	this.shape_9.setTransform(364.1,318.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(0.3,0,0,4).p("ABBgLIgCAMIgDAPIgPAZQgFAFgFAEQgEAEgIAFIgNAGQgGADgEAAQgEAAgJgEQgHgDgKgHQgIgGgGgHQgGgIgFgJQgFgMgBgGQgDgJAAgIQAAgKADgKQACgJAFgKQAFgJAFgGQAFAEAHACQAHACAEAAQAKAAALgIIAPAHIAHABQAKAAANgIQADAEAEAGQAFAKABAEQADAGACAIQACAIAAAIg");
	this.shape_10.setTransform(364.1,316.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgNA/IgRgKQgIgGgFgHQgGgIgGgJIgGgSQgDgJAAgIQAAgKAEgKQACgJAEgKQAFgJAGgGQAFAEAGACIALACQAKAAALgIIAOAHIAIABQAKAAANgIIAHAKQAFAKABAEQADAGACAIQABAIABAIIgBAMIgFAPIgOAZQgFAFgFAEQgEAEgIAFIgMAGQgHADgEAAQgEAAgJgEg");
	this.shape_11.setTransform(364.1,316.7);

	this.text_39 = new cjs.Text("78", "8px Arial", "#231F20");
	this.text_39.textAlign = "center";
	this.text_39.lineHeight = 8;
	this.text_39.setTransform(127,387.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABBgZQAAgPgFgKIh4AAIgEALQAAAEAAAKQAAAJACAIQABAHAFAJQAFAJAHAJQAFAFAIAGQAIAGAJAEQAIAEAGAAQAHAAAIgEQAHgDALgHQAFgEAHgHIAMgSQAEgIADgIQABgIAAgJg");
	this.shape_12.setTransform(129.1,395.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAvQgJgDgIgHQgJgGgEgFQgIgJgEgJQgFgJgCgHQgCgIAAgJIABgOIAEgLIB4AAQAGAKAAAPQAAAJgCAIQgDAJgEAHIgMASIgNALIgRAKQgIAEgHAAQgGAAgIgEg");
	this.shape_13.setTransform(129.1,395.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AAWg6QALAAAMgHQADADAEAHIAHANIAEAPQACAHAAAIQAAAHgCAGQgCAKgCAEQgCAGgEAHIgIAMIgKAKQgDADgJAGQgFADgIADQgGACgEAAQgEAAgJgEQgIgDgJgHQgIgGgGgHQgGgIgEgJQgEgGgDgMQgDgGAAgLQAAgMADgIQADgLAEgIQAFgKAFgEQAHAEAFABQAFACAGAAQALAAAKgHQAFADACABIAIADg");
	this.shape_14.setTransform(129.1,393.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgNA/QgIgEgJgHQgIgFgGgIQgGgHgFgJQgDgGgEgMQgCgGAAgMQABgLACgIQADgLAEgIQAGgKAEgFQAGAEAGACQAFACAGAAQALAAAKgIIAHAEIAHADIAIABQALAAALgIIAIAKIAHANIAEAPIACAPIgCANIgEAPQgCAGgEAGIgIAMIgKAKIgNAJQgEAEgIACQgGADgEAAQgEAAgJgEg");
	this.shape_15.setTransform(129.1,393.4);

	this.text_40 = new cjs.Text("476", "8px Arial", "#231F20");
	this.text_40.textAlign = "center";
	this.text_40.lineHeight = 8;
	this.text_40.setTransform(140.4,257.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABZgZQAAgNgHgMIijAAQgDAFgCAGQgCAFAAAJQAAAHADAKQADAIAGAIQAJALAHAGQAFAFAMAHQANAHALADQANAEAGAAQAHAAANgEQAMgEAMgGQAKgGAHgGQAKgJAGgIQAGgIADgIQADgJAAgIg");
	this.shape_16.setTransform(142.7,264.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAvQgLgDgNgHQgMgGgFgGQgHgFgJgMQgGgIgDgIQgDgJAAgIQAAgIACgGIAFgLICjAAQAHAMAAANQAAAJgDAIQgDAIgGAIQgGAJgKAIQgHAHgKAFQgMAGgMAEQgNAEgHAAQgGAAgNgEg");
	this.shape_17.setTransform(142.7,264.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(0.3,0,0,4).p("ABVgbQADAIAAAHQAAAIgCAFQgCAGgEAIQgCAFgGAIIgLAMQgEAEgJAGIgRAJQgHADgKADQgJACgFAAQgGAAgMgEQgMgEgLgGQgMgHgGgGQgJgIgGgJQgGgIgDgKQgDgIAAgJQAAgJAEgLQADgKAHgJQAGgJAHgFQAIAEAHABQAHACAIAAQAPAAAOgHIAKAEIAKACQAEABAGAAQAPAAAQgHQADACAHAIQABABAIAMQADAIACAHg");
	this.shape_18.setTransform(142.7,262.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgSA/QgMgEgLgHQgMgGgHgHQgIgIgGgIQgGgIgDgKQgDgJgBgJQAAgJAFgLQADgJAHgKQAGgJAGgFQAJAEAHACQAGACAJAAQAPAAAOgIIAJAEIALADIAKABQAPAAAQgIIAKAKIAJANIAFAPQACAJABAGQAAAJgCAEQgCAHgEAHQgCAFgGAIIgLAMQgEAEgKAGIgQAJQgIAEgJACQgJADgFAAQgGAAgMgEg");
	this.shape_19.setTransform(142.7,262.8);

	this.text_41 = new cjs.Text("22", "8px Arial", "#231F20");
	this.text_41.textAlign = "center";
	this.text_41.lineHeight = 8;
	this.text_41.setTransform(209.4,343.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#231F20").ss(0.5,0,0,4).p("AhGgqIAHALQAHALgBAIIgKATQgJAXAHAIIAIAHQANAIAVABIALADQAMAEAEAGQAFgGAMgEQAGgCAFgBQAVgBANgIIAIgHQAHgIgJgXIgKgTQgBgIAGgLIAHgLIgWgUQgZALgOgGIgJgIQgBAFgHADQgPAGgYgLg");
	this.shape_20.setTransform(211.6,350.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQA4IgLgDQgVgBgNgHIgIgIQgHgIAJgXIAKgTQABgHgHgMIgHgKIAXgVQAYALAPgFQAHgDABgFIAJAIQAOAFAZgLIAWAVIgHAKQgGAMABAHIAKATQAJAXgHAIIgIAIQgNAHgVABIgLADQgMAEgFAGQgEgGgMgEg");
	this.shape_21.setTransform(211.6,350.1);

	this.text_42 = new cjs.Text("33", "8px Arial", "#231F20");
	this.text_42.textAlign = "center";
	this.text_42.lineHeight = 8;
	this.text_42.setTransform(380.7,262.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABOAAQAAAZgXASQgXASggAAQgfAAgXgSQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYg");
	this.shape_22.setTransform(383,268.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2ArQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYQAAAZgXASQgXASggAAQgfAAgXgSg");
	this.shape_23.setTransform(383,268.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#231F20").ss(0.6,1,1).p("AgQAEIghgqIgDAHIAbA3IgKAPQgJAPAEADQAFAEAWgbIA8AMQACAAAFgFIgzgVIgDgDIAjg0QAOAEACAAQABAAABgDIgQgJIgNgOIgCAEIAIAOIgqAtg");
	this.shape_24.setTransform(263.1,292.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgpA5QgDgDAJgPIAKgPIgbg3IADgHIAhAqIADACIAqgtIgIgOIACgEIAOAOIAQAJQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgOgEIgjA0IACADIA0AVQgFAFgCAAIg8gMQgTAYgHAAIgCgBg");
	this.shape_25.setTransform(263.1,292.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(3,0,1).p("AFMNjIjlnQIhKi9QgMgagGgOQgJgaAFgQQACgFAPghQAKgXABgSQABgPgCgWQgDgXgBgNIgFhEQgCgagKgRQgIgPgSgUIg0gyIjBlAIhIlN");
	this.shape_26.setTransform(354.1,192.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(3,0,1).p("AzdJIIMAAUIIphvIFwjhQAbgRASgRQAVgTAOgYIFXovIF0jt");
	this.shape_27.setTransform(300.5,316.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(3,0,1).p("AvqxdIFmGoIFrIrIBoFSQAFAQAKAhQAJAbANASQAPAXAIAKQAJAKATAOQACACANAOQAJAJAIAFIIoFZIH/GG");
	this.shape_28.setTransform(213.9,341.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(3,0,1).p("A32N8IDGgjQAtgIBmgLQBagNAygZQAUgKAcgWQAfgYAPgKIIYl3IDViNIBbhJIHCpJQAMgPAOgHQAkgSA4gQQAggIBAgRIFUhgQBRgWBbg2IBDgoQAogXA5gXQADgBBigmQB5guA8gYIAIgE");
	this.shape_29.setTransform(261.7,308.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#231F20").ss(3.8,0,1).p("AFMNjIjlnQIhKi9QgMgagFgPQgJgZAFgQQABgFAPgiQALgXABgRQABgPgDgXQgDgXgBgMIgFhEQgCgbgJgRQgIgOgTgUIg0gyIjAlBIhIlN");
	this.shape_30.setTransform(354,192.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#231F20").ss(3.8,0,1).p("AzeJIIMAAUIIphvIFwjhQAbgRASgRQAVgTAOgYIFXovIF0jt");
	this.shape_31.setTransform(300.6,316.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#231F20").ss(3.8,0,1).p("AvqxdIFmGnIFrIsIBoFRQAFARAKAgQAJAbANATQAPAWAIAKQAJAKATAPQACACANANQAJAKAIAEIIoFaIH/GF");
	this.shape_32.setTransform(213.9,341.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#231F20").ss(3.8,0,1).p("A34N8IDHgjQAtgIBlgLQBbgNAygZQATgKAdgWQAfgYAPgKIIYl3IDUiNIBbhJIHCpJQANgPANgHQAkgSA5gQQAggIBAgRIFUhgQBQgWBbg2IBDgoQAogXA5gXQADgBBigmQB5guA9gYIAIgE");
	this.shape_33.setTransform(261.9,308.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A6A8AB").ss(2,0,1).p("AnzCPIlOknIF9ksILGKeIEkDpIACACIEalbIigk7IgBgD");
	this.shape_34.setTransform(299.2,317);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A6A8AB").ss(2,0,1).p("AkpB8IJTj3");
	this.shape_35.setTransform(336.5,308.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A6A8AB").ss(2,0,1).p("AsokHIGeDTIMRGEIGeqk");
	this.shape_36.setTransform(244.4,372.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A6A8AB").ss(2,0,1).p("Almg3IHKi7IAAAFID+Hl");
	this.shape_37.setTransform(331,270.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACGlcIjDBRIiXBFIgGADIDZIfIDgiF");
	this.shape_38.setTransform(402.2,237.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A6A8AB").ss(2,0,1).p("AkGjFIFDD8IDKCP");
	this.shape_39.setTransform(283.2,342.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A6A8AB").ss(2,0,1).p("ADJEiImRpD");
	this.shape_40.setTransform(307.6,283.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A6A8AB").ss(2,0,1).p("AFTlwIqlLh");
	this.shape_41.setTransform(246.5,334.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A6A8AB").ss(2,0,1).p("AgzgoIBnBS");
	this.shape_42.setTransform(359.5,366.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A6A8AB").ss(2,0,1).p("AkDDfIIHm+");
	this.shape_43.setTransform(189.6,324.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A6A8AB").ss(2,0,1).p("AEjKYIpF0v");
	this.shape_44.setTransform(375.8,251.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A6A8AB").ss(2,0,1).p("AmUCpIMplR");
	this.shape_45.setTransform(280.6,212.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A6A8AB").ss(2,0,1).p("AlqDOIFtj8IFqie");
	this.shape_46.setTransform(172,261.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhyBFIDliI");
	this.shape_47.setTransform(370.7,275.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ah2jWIDRF0IAcA5");
	this.shape_48.setTransform(160.5,235.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A6A8AB").ss(2,0,1).p("ABhD+IjCn7");
	this.shape_49.setTransform(302.1,233.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhUjCICpGF");
	this.shape_50.setTransform(256.2,246.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#A6A8AB").ss(2,0,1).p("AilBYIBug9IDehy");
	this.shape_51.setTransform(270.5,262.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhfAxIC+hh");
	this.shape_52.setTransform(296.9,249);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiZkuICBENIgCgCIC0FS");
	this.shape_53.setTransform(296.2,169.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ag+D2IiTmPIGrhW");
	this.shape_54.setTransform(386.6,193.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhBAsICDhX");
	this.shape_55.setTransform(395.3,276.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiHA3IEPht");
	this.shape_56.setTransform(354.8,241);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiZkBICXDuQCWDzAEAm");
	this.shape_57.setTransform(224.8,203.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#A6A8AB").ss(2,0,1).p("ADYFeImuq7");
	this.shape_58.setTransform(334.2,146.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiclrIE5LX");
	this.shape_59.setTransform(362.1,106.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ai4kbIFxI3");
	this.shape_60.setTransform(153.4,310.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ai2jCIFuGG");
	this.shape_61.setTransform(116.5,262.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACqiiIlTFF");
	this.shape_62.setTransform(126.3,312.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACMkQIkXIh");
	this.shape_63.setTransform(95.2,355.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiLEvIEXpd");
	this.shape_64.setTransform(278.5,441.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#A6A8AB").ss(2,1,1).p("AiIEjQAag6ByjyQB1j2APgj");
	this.shape_65.setTransform(245.1,424.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiMEvIEZpd");
	this.shape_66.setTransform(198.4,401.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhiDkIDFnH");
	this.shape_67.setTransform(145.6,386.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#A6A8AB").ss(2,0,1).p("AH/CdIqUjPIlqhp");
	this.shape_68.setTransform(403,80);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACgkcIk5B1IEEHI");
	this.shape_69.setTransform(224,257.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#A6A8AB").ss(2,0,1).p("AjcBYIFYiHIAqgVIA3gT");
	this.shape_70.setTransform(343.3,186.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhuGwIhykoIHDo1");
	this.shape_71.setTransform(400.4,129.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#A6A8AB").ss(2,0,1).p("AmtmmIGNH+IHRFN");
	this.shape_72.setTransform(112.6,319.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A6A8AB").ss(2,0,1).p("AgnBTIBPil");
	this.shape_73.setTransform(159.6,354.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#A6A8AB").ss(2,0,1).p("AjkhiIHJDF");
	this.shape_74.setTransform(305.2,416.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E7E8").s().p("AkXiZIE5h1IBLgfIABACICqGGIhsA8Ii+CXg");
	this.shape_75.setTransform(236.6,256.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E6E7E8").s().p("AgrBpIhNhsIgBgCIC8hjIA3CNIilBEg");
	this.shape_76.setTransform(299.5,254.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E6E7E8").s().p("AkjhkIgBgCIG8i7IABAEICMFoImcDWIgCABg");
	this.shape_77.setTransform(276.9,236.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E6E7E8").s().p("Al/iMIAsgXIAEgDIAFgDIAEgBIAbgdIAAAAIABAAIACgDIAAAAIABAAIACgDIAAgBIAQgQIAVgFIAXgaIAQgkIAfglIAThYIBahhIAGgDIAFgEIAHgKIADgFIAGgRIACgFIACgCIAAgCIABADIE5LWIByEpIACAEIjwAxIg3ASIgqAVg");
	this.shape_78.setTransform(351,125.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E6E7E8").s().p("Al/lOIAAgDIABgBIAEgGIABAAIAQgRIAggaIACgBIgCgDIABAAIFoBpIFgBwIgBACInCI0g");
	this.shape_79.setTransform(384.8,103.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E6E7E8").s().p("Al2CQIEZohIHRFNIADACIjNHUg");
	this.shape_80.setTransform(118.7,368.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E6E7E8").s().p("AohCRICjivQAJgLAHgEQAIgFAPgCIAagEQAggEAlgjIA5g8IBRhRIBChyIAYgYQAOgOAJgIIANgLQADgGACgKIAAgRQAAgLAFgGQAEgGANgBIASgCQAMgCAGgCQAOgFAOgNIAZgYIASgPIGMH+IkZIhg");
	this.shape_81.setTransform(54.7,330.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E6E7E8").s().p("AlwhRIAIgIQADgEAFgOQAEgLAFgFQADgDAJgEIAMgFIAZgVQAYgUANgTQAGgIAIgVQAJgWAFgIQAGgLAMgNIAVgWIAegjQATgVANgMIAPgNQAHgGAGgKQAKgRAFgLIFvGIIBXCDIgCABIlVFHg");
	this.shape_82.setTransform(106.6,285.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E6E7E8").s().p("ACZFJInRlLIFTlHIACgBIEcGxIhVBKIABABIhKCZg");
	this.shape_83.setTransform(140.7,328.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6E7E8").s().p("AAYGBIlKixIABgCQAag7B0jxQB1j2APgkIACgIIDoBzIAAABIBoAtIkbJgg");
	this.shape_84.setTransform(262,433);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6E7E8").s().p("Ak9DaIEcpgIFfCaIgCAFIgBAAIgdA7IgBAAIhDCHIAAABIglBHIgBAFIgBAAIgTAmIAAABIgKAUIgBABIgBADIgCADIAAADIgBAAIgIASIgBACIgMAVIgCAEIgGANIgBABIgFAJIAAABIgCADIAAABIgRAiIAAABIgIAQIgBACIhNCcg");
	this.shape_85.setTransform(296.3,449.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E6E7E8").s().p("Al+DFIDHnHIBQimIHmD4IkZJZg");
	this.shape_86.setTransform(174.1,389.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E6E7E8").s().p("ABfGbInTjdIEZpZIADACIHNDkIgCAJQgQAjh1D0Qh0D0gZA6IgCADg");
	this.shape_87.setTransform(221.6,412.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E6E7E8").s().p("AlDABIF8kqIELD9IgCACIk5FTIAAABg");
	this.shape_88.setTransform(248.2,301.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E6E7E8").s().p("AnwhIIAEgFIFvj+IFpieIEFHJIi+CTImzF3g");
	this.shape_89.setTransform(184.9,290.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E6E7E8").s().p("AkKGuIhxkpIHCo0IABgCIE0BhIgBAKQgBAGgDAFIgNAWQgIAMgEAKQgEALADANQABAHAGAPQALAhgNAyQgFAVAIAPIABADIAAABIABABIACAEIADAPIAAAMIgFAPIgIASIgBACIAAACIgHAQIAAABIgEAQIgEAJIgLALIgDADIgYAHIgIAFIgKAJIgBAAIAAABIgBABIgBABIgBABIgBABIgBABIgCABIAAAAIgEAEIgJAKIgFAJIgBAFIAAAAIgGALIAAADIgBABIgFATIgBAEIAAACIgBACIgCAKIAAABIgBABIAAABIAAABIAAACIgBABIgFAZIgIARIgFAFIgcAIIgkABIgCAAIgCAAIgXADIgLAAIgFAAIgigGIgMgCIgUAAIgEgBIgFAAIgCABIgCAAIgeAHIgJAJIgEAIIgCAFIgDAGIAAAEIAAABIgBABIgCAKIgBABIgCAIIAAAFIABACIAAAgIAFAiIgFAVIgIANIgDAEIgHAJIgXASIgCADIgBABIgCABIgFAEIi9Amg");
	this.shape_90.setTransform(416,129.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6E7E8").s().p("AmJCeImdjRIIKnAIFMEoIAAAAIE5lWIACgCIG8GjImeKkg");
	this.shape_91.setTransform(244.3,351.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E6E7E8").s().p("ABDFXIrFqdIBug9IDgh0IABACIBMBuIAAAAIHLi6IgBAFID/HmICiE+IkbFag");
	this.shape_92.setTransform(318.3,304.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E6E7E8").s().p("AkHjCIAFgEICYhEIDDhRIADAAIgFAKIgBADIAAACIgBABIAAADIgBAGIABAJIAAAEIAAADIAAABIAAADIAAAGIgIApIgFB2IABAAIAJAQIABABIAAABIAGAJIAAAAIAAAAIABAAIAAABIAAABIAAAAIACADIAKAMIAfAcIAUADIAFAAIANAFIACgBIABAAIAHgCIAFgDIAEgCIAEgBIAPgFIAJgBIAMAAIAKABIADABIABABIACABIABAAIAEADIADACIAEAFIAFALIAAACIAAAFIABABIAAACIAAAFIAAALIgBAHIgCAFIgBAFIgGAQIgBABIgCAHIgDALIgBADIgBADIgBADIgCACIgBABIgCABIgBADIgHAGIgDADIgDACIgDABIgEADIgNATIgGAPIgCACIgLAnIgBADIgCAEIAAADIgBADIgBADIAAAAIgBADIAAADIACAHIABABIAAABIgBACIAAAAIAAADIgCADIgCACIgBAEIgBACIgDAIIAAADIAAABIgBABIACAGIAAAFIACAGIABABIjhCFg");
	this.shape_93.setTransform(406.7,237.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E6E7E8").s().p("AjiEOIlqhqIgBAAIgdgcIgBgBIgfggIBTh/IAJgkIACgTIAAgBIAAgFIABgEIAGgIIAAAAIABgCIABgBIABgDIAAgBIAAgBIACgGIAEgHIALgMIAPgNIAagTIAagQIAHgFIAMgIIAGgDIACAAIACAAIADAAIAKAAIACgBIAAgBIAFgIIAIgFIANgCIALgFIAhgVIAJgKIADgFIABgDIgDgKIABgGIABgCIABgEIgEgRIAAgDIABgDIACgDIAJgJIACgBIAXgRIAQgCIACgBIAGgEIAOgEIABAAIAGgBIAGgCIAcgLIAfgNIAQgLIAGgFIA1g2IAQgRQAKgLAIgFQAUgOARAVQAJALANAaQADAFAHAFIANAJQAFAGANANQAMAKAaARIAQANQAJAIAHAEQANAHAbAMIARAKQAKAFAIACQALADAKAJIARARIAJAJIABAAIASAKIACABIAAAAIABABIAaAOIABABIABABIACABIAGADIADABIAdAOQAEABABAGIACALIAGAJIAHAJIAOASQAIAKAJADIAPACQAKAAAEADQAFADADAGIAFAMQAHAWASAHQAnASARADIATAFQAMACAHADQAHADAKAJIAiAWIAhAVQAUAKALAUQAIANADAUIAFAiIAFAWQAHAXgDAEQgEAGgRgBQgRAAgEAFIgEAKIgEALIgIALQgBAEAAACIADAGQADAFADAYIAGAgIAFANQACAIgCAFQgDAOgUAUQgIAIgOAFIgZAGIhPAVIgjAHQgWAEgMAJQgHAFAAALQAAAFADANIACANQABAIACAEIAIAKIAFAKQADAEAEADIAJAFQAFADACAEIABAHg");
	this.shape_94.setTransform(410.8,47.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E6E7E8").s().p("AhADWIhnhTIEYlZIA3BuIgRAWIAAABIgpA4IgCACIgeAmIgCABIg5BUIgBABIhNBtIAAABIgDAEg");
	this.shape_95.setTransform(371.3,349.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E6E7E8").s().p("AmcDsIAAgBIANAHIGcqlIGOE/IACABIgDADIgYAkIgBAAIgEAHIgBABIgvBFIAAAAIgcApIAAABIAAABIgBABIAAAAIAAAAIgBABIAAAAIAAAAIgMARIgBACIgBABIgGAKIgBABIgPAVIgBABIgdAsIgCADIgBABIgCAEIAAACIgDAEIAAABIgCACIAAABIgBABIgBAAIgFAEIgBABIgBABIgTAaIAAABIgBAAIgCADIgCABIAAAAIAAABIgRAYIgBABIgJAPIAAABIgBAAIAAAAIgBACIAAAAIgNASIAAABIg+BWIgBABIgHAKIgmBMg");
	this.shape_96.setTransform(323.6,382.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E6E7E8").s().p("AhAG2Ii2lUIACADIiCkLICliEIABgBIADgFIANgOIADgFIAHgEIBFhQIA6gfIGuK7Im3Cyg");
	this.shape_97.setTransform(318.3,155.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E7E8").s().p("AlnCqIiXjsIBkgqIACgBIAWgTIADgCIAJgEIADgCIBNgoIAHgEIBSgWIAOgGIByhFIAQgcIC4hMIAIgOIAvgmIAFgEIAAAAIACgCIAFgEIAMgJICBENIgCgCIC2FSIAAABIrKErQgEgmiYj1g");
	this.shape_98.setTransform(260.5,184.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E6E7E8").s().p("AgCFTIlwmHIAAAAIAFgLIAIgOIAJgOIAHgOQAFgHAHgEQARgHAGgGQAPgQAKgFIBCgjIA2gXQAhgOATgOQAkgaAagIQAhgLA9gYIAmgNIAhgMQAIgDAIgJIDSFxIAbA5IAAABIlvD9IgEAFg");
	this.shape_99.setTransform(135.2,248.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E6E7E8").s().p("Aj1FUIjTlxQAFgHAHgKIAKgRQAOgTACgFQACgDACgKQACgJACgDIAQgNIBFg3IABgBIADgBIABAAIACAAIANgBIA4gfIAtgMIAfgkIA4giIAlgIIABAAIADgBIABAAIAAgBIACAAIABAAIAigIIAzgeIBCgSIAxgZIADgBIATgIICXDtQCYD0AEAmIk7B1IloCdg");
	this.shape_100.setTransform(194.3,217.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E6E7E8").s().p("AkKicIGshWIgNANIgOAYIgEALIAAACIgCAEIAAACIABALIAFAPIAEAIIAGAGIADAGIAHAHIASANIAgATIAWAVIAAAAIATATIAHAPIABAIIgBAFIgBAGIgGANIAAABIgBAEIAAAHQgCAIAKAOQAMAPABAGQABAKgIAKIgGAGIgBAAIgHAKIgBABIgHAMIgDABIjFBQIiWBFIgFADg");
	this.shape_101.setTransform(392.2,193.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E6E7E8").s().p("AjshMIABAAICEhYIABACIDgiFIAGAFIARAIIANALIABAAIAGACIAHACIAFAEIASAcIABAFIABACIACAGIACADIAcBMIAEAIIACADIAAABIACAHIAAATIgDAKIgCADIgBABIgHADIgKABIgdAPIgBAAIgEADIgFAFIgCADIgCAIIACAKIAGAKIAGAHIAJAJIAHAGIAHAHIAGAGIACABIADAFIgCACIgBACIgBAAIgBABIAAABIAAAAIgCACIgCABIAAAAIg1A0IAAAAIAAAAIgBAAIgPASIgCABIgKAKIAAABIgCACIgCACIgLALIAAAAIgBABIgLALIgDACIgJALIgxAwIgCACIgPAPIgBABIgDADIgBACIgGAFIgBABIgCABIgBACIgCABIgCACIgBABIgBABIgBABIgBABIgBABIAAAAIAAABIgBAAIAAAAIgCAAIgDABIAAAAIAAAAIAAACIABABIAAABIgDAEIgBAAIgUASIAAAAIgBABIAAAAIgBAAIgCAAIgHABIAAABIABABIAAACIgBABIAAABIgBACIAAABIgBABIAAAAIAAAAIgBABIAAAAIgCACIgBABIgDADIgGAFIgBABIgBABIgPAOg");
	this.shape_102.setTransform(412.3,288.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6E7E8").s().p("AkSm2IBbgkIAqgVIA3gTICqHTIC/HaIiEBYIgBAAg");
	this.shape_103.setTransform(374.3,229.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E6E7E8").s().p("AjQhzIABgFIEQhwIABAAICPFDIgHAFIjiCJg");
	this.shape_104.setTransform(362,258.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6E7E8").s().p("AjijSIDiiJIAHgFIDcH1IgDADIgBACIgCABIgDADIAAAAIAAAAIgBACIgEAEIgBABIgNAQIAAAAIgBACIgDACIgbAcIAAABIgZAeIgBABIgBACIAAAAIgCACIgBABIgBABIgOATIAAAAIgaAjIAAAAIglAwg");
	this.shape_105.setTransform(382.2,303.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E6E7E8").s().p("Al7iKIgCgDIEjh5ID9hmIDbHyIgBABIo2Dmg");
	this.shape_106.setTransform(330.4,221.9);

	this.text.mask = this.text_1.mask = this.text_2.mask = this.text_3.mask = this.text_4.mask = this.text_5.mask = this.text_6.mask = this.text_7.mask = this.text_8.mask = this.text_9.mask = this.text_10.mask = this.text_11.mask = this.text_12.mask = this.text_13.mask = this.text_14.mask = this.text_15.mask = this.text_16.mask = this.text_17.mask = this.text_18.mask = this.text_19.mask = this.text_20.mask = this.text_21.mask = this.text_22.mask = this.text_23.mask = this.text_24.mask = this.text_25.mask = this.text_26.mask = this.text_27.mask = this.text_28.mask = this.text_29.mask = this.text_30.mask = this.text_31.mask = this.text_32.mask = this.text_33.mask = this.text_34.mask = this.text_35.mask = this.shape.mask = this.shape_1.mask = this.text_36.mask = this.shape_2.mask = this.shape_3.mask = this.text_37.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.text_38.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.text_39.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.text_40.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.text_41.mask = this.shape_20.mask = this.shape_21.mask = this.text_42.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = mask;

	this.addChild(this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.text_42,this.shape_21,this.shape_20,this.text_41,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.text_40,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.text_39,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.text_38,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.text_37,this.shape_3,this.shape_2,this.text_36,this.shape_1,this.shape,this.text_35,this.text_34,this.text_33,this.text_32,this.text_31,this.text_30,this.text_29,this.text_28,this.text_27,this.text_26,this.text_25,this.text_24,this.text_23,this.text_22,this.text_21,this.text_20,this.text_19,this.text_18,this.text_17,this.text_16,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,476,488.9);


(lib.mask_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgBGAgrMgkEgQ/ICiiyQAKgLAHgEQAHgEAPgCIAbgEQAggEAlgjIA5g8IBRhRIBChyQAmgmALgIQAJgHADgEQAEgGABgKIABgSQAAgKAFgGQAEgGAMgCIATgBQAKgBAIgDQANgFAPgOIAZgXIAOgLQAHgHAEgFQADgFAFgNQAFgLAFgFQADgDAIgEQAKgDACgCIAZgVQAZgVAMgRQAHgJAIgUQAJgXAEgIQAGgLANgNIAVgWIAegjQASgVAOgMQATgQAIgNQAPgYAGgNIAIgPIAJgOIAHgOQAFgHAHgEQARgHAGgFQAPgQAKgGIBCgiIA2gYQAhgNATgPQAkgaAagIQAhgKA/gYIAmgOIAhgMQALgFALgPIAQgaIAJgLQAFgHACgFQACgEACgKQACgIACgEQACgDAFgEIAIgGIBGg2IABgBIACgCIADAAIAOgBIA3geIAugMIAfglIA3ghIAlgIIABgBIADAAIABgBIABAAIACAAIABAAIAigIIA1gfIBCgSIAugXIACgBIB7gzIABgBIAWgUIBdgvIAGgEIBQgXIAOgGIBzhFIAQgbIALgFICvhIIAIgOIAygoIAAgBIABgBIABAAIAFgEIACgCICwiMIABgBIACgEIABgBIAPgTIAHgEIBGhQIBlg3IAEgDIAJgDIAcgdIAAgBIABAAIAAAAIABgCIABAAIAAAAIABgBIAAAAIAAAAIABgBIAAAAIAAAAIAAgBIAMgNIAEgEIAVgGIAXgZIAQglIAfglIAUhWIBahiIAGgDIAEgEIAIgJIAIgXIACgEIAEgGIAVgXIAigbIgfgfIgBAAIgCgCIAAgBIgBAAIgcgeIBTiBIAJgjIACgUIAAAAIAAgBIAAgFIABgDIAGgJIAAAAIABgBIABgCIABgEIAAgBIACgFIABgDIABgCIAAAAIACgDIALgMIABAAIADgDIARgOIAAAAIAGgEIAGgGIA1giIADgBIADgBIACAAIACgBIADABIAFAAIAFgBIACgBIAAgBIAFgIIABAAIACgCIAFgDIANgCIALgFIAOgJIACgBIARgLIAJgJIADgGIABgDIgCgEIgBgGIABgFIABgDIABgEIgEgRIAAgDIABgDIACgDIALgKIAXgQIAQgDIACgBIAGgEIADgBIALgCIABgBIAGgBIAEgBIAIgEIABAAIABAAIAUgIIAfgNIAQgLIAGgFIA1g1IAQgSQAKgLAIgFQAUgOARAVQAJALANAaQADAFAHAFIANAJQAHAGANANQAMAKAaARIAQANQAJAJAHADQANAHAbAMIARAKQALAGAHACQALACAKAJIARARIAJAJIABABIASAKIACAAIAAABIABAAIAaAPIABABIABAAIACABIANAHIABAAIAFACIATAJQAEABABAHIACAKIAGAKIAHAJIAOARQAIAKAJADQAEABALABQAKABAEACQAFADADAGIAFAMQAHAWASAIQAlAQATAFIATAEQAMADAHADQAHACAKAJQAXANAsAfQAUAMALATQAIANADAUIAFAjIAFAWQAGAWgCAEQgEAFgRAAQgRAAgEAGIgEAKIgEALIgIALQgBAEAAABIADAGQAEAIACAVIAGAgIAFANQACAIgCAGQgEAOgTATQgIAIgOAFIgZAGIhPAVIgjAHQgWAEgMAJQgHAFAAALQAAAFADANIACANQABAIACAEIAIAKIAFAKQADAFAEACIAJAFQAFAEACAEQAFANgJAPIgNAVQgIAMgEAKQgEALADANQABAHAGAQQALAfgNA0QgFAVAIAPIABADIABABIACAFIADAOIAAAMIgFAPIgIATIgBABIAAACIgEAIIgDAIIAAABIgEAQIgEALIgBABIgKAKIgDADIgYAHIgIAFIgLAKIAAAAIgBABIgBABIgDADIgCABIAAABIgEADIgBAAIAAABIgIAJIgFAIIgBAGIAAABIgGAKIAAADIgBABIgFAUIgBAEIAAABIgBACIgCAKIAAABIgBABIAAABIAAABIAAABIgBABIgFAaIgIASIgFAEIgcAIIgCAAIgkABIgCABIgXADIgQgBIgigHIgEAAIgEAAIgHAAIgBgBIgbAAIgCAAIgLACIgTAFIgLAJIgEAIIgCAFIgDAHIAAADIgBAEIgCAJIgBAAIgCAIIAAAEIABADIAAAgIAFAiIgFAVIgLARIgHAJIgXATIgCACIgDACIgFAEIgMAOIgOAXIgGARIAAACIABALIAFAPIADAIIACACIAEAEIADAGIAIAHIARAOIAgASIAoAnIABACIAHAOIABAIIAAAFIgFAOIgCAFIAAABIgCAEIABAHQgDALALANQAMAPABAHQABAIgFAGIgKAMIAAAAIgGAHIgBADIgBABIgEAFIgJARIgBADIAAACIAAABIAAADIgBAHIABAIIAAAEIgBAEIABADIAAAGIgJApIgEB2IAAAAIAKARIAAAAIAAABIAEAEIACAFIABAAIAAAAIAAABIAAAAIACAEIAKAMIAgAdIARACIADAAIAEABIAKADIACAAIABAAIAEAAIACgBIAFgBIAEgDIAFgBIAEgDIADAAIALgEIAJgBIAIAAIABAAIAHAAIAHACIADABIAAAAIADABIAIAFIAEAFIAEAKIABADIAAAFIAAABIAAACIABAEIAAAMIgBACIAAABIAAACIAAAAIgDAHIgBAFIgFARIgBACIgDAHIgCALIgCADIAAADIgBACIgDADIgBABIgBABIgCADIgCACIgHAHIgHADIgDADIgKAKIgEAHIgKAZIgBAGIgBABIgHAaIgCAFIgBADIgBADIAAADIAAABIgBACIAAADIABAGIABACIAAABIAAACIAAABIgBACIgBADIgCADIgBACIgCADIgCAIIAAADIgBACIAAAAIABAGIAAAFIACAGIABACIAGAEIARAIIAIAGIAGAFIAGADIAHABIAFADIASAdIABAFIABACIACAGIACADIACADIADALIAXA+IAEAIIACAEIACAIIAAASIgDAKIgCADIgBABIAAAAIgHADIgKACIgYAKIgFAEIAAAAIgBAAIgEADIgFAFIgCAEIgCAHIACALIAGAJIAGAIIAJAIIAHAFIANAQIACABIADAFIgCACIAAABIg9A6IgPASIgEAEIAAAAIgBABIAAAAIgFAFIgBABIAAAAIgBAAIAAABIgCACIgCACIgXAWIAAABIgDACIg3A3IAAABIgBABIgCACIgGAGIgCACIgNANIgBACIhMBFIgBACIgBAAIgJAIIgDAEIgIAHIgBABIgDADIAAAAIAAAAIgCADIgBABIgCACIgDACIgLAPIgbAcIgCACIgDADIgYAeIgCACIgBABIgBACIgBACIgBAAIgOATIgBABIgZAiIgBABIgZAgIgBABIgbAkIAAABIgnA1IgDAEIgCACIgeAnIAAABIgBAAIAAABIiKDCIgeArIAAABIhQB4IgBABIAAABIgBABIAAAAIAAAAIgBAAIgMASIgBACIgBABIgGAJIAAABIgPAVIgBABIAAABIgeAsIgCADIAAABIgCAEIgBABIgCAEIgBABIAAAAIgBACIgBABIAAAAIgBABIgBABIgFAEIgBABIgUAbIAAAAIAAAAIgCADIgBAAIAAABIgBAAIAAABIgBAAIAAABIgRAYIAAAAIgKAPIAAABIgBABIgBACIhLBpIgBABIgGAJIgpBSIAAABIgdA4IAAACIgBAAIhDCHIAAABIgcA5IgBABIgIAQIgCADIAAABIgTAnIAAAAIgJATIgBABIgCAEIgCADIgBADIgYAtIgGANIAAACIgFAIIAAABIgCADIAAAAIAAABIgRAiIAAABIgkBGIgBABIgxBng");
	mask_1.setTransform(238,244.4);

	// Layer 3
	this.text_43 = new cjs.Text("WEISENBERG", "8px Arial", "#231F20");
	this.text_43.textAlign = "center";
	this.text_43.lineHeight = 8;
	this.text_43.setTransform(116.7,365.1);

	this.text_44 = new cjs.Text("LOWHILL", "8px Arial", "#231F20");
	this.text_44.textAlign = "center";
	this.text_44.lineHeight = 8;
	this.text_44.setTransform(138,323.5);

	this.text_45 = new cjs.Text("FTN HILL/\nW BETH", "8px Arial", "#231F20");
	this.text_45.textAlign = "center";
	this.text_45.lineHeight = 8;
	this.text_45.setTransform(295.8,283.1);

	this.text_46 = new cjs.Text("CTR\nALLENT", "8px Arial", "#231F20");
	this.text_46.textAlign = "center";
	this.text_46.lineHeight = 8;
	this.text_46.setTransform(288.5,317.7);

	this.text_47 = new cjs.Text("N\nBETH", "8px Arial", "#231F20");
	this.text_47.textAlign = "center";
	this.text_47.lineHeight = 8;
	this.text_47.setTransform(329.8,266.9);

	this.text_48 = new cjs.Text("S BETH/\nHELLR TN", "8px Arial", "#231F20");
	this.text_48.textAlign = "center";
	this.text_48.lineHeight = 8;
	this.text_48.setTransform(332.3,313.5);

	this.text_49 = new cjs.Text("W ALLENT/\nS WHITEHALL", "8px Arial", "#231F20");
	this.text_49.textAlign = "center";
	this.text_49.lineHeight = 8;
	this.text_49.setTransform(212.7,321.1);

	this.text_50 = new cjs.Text("S ALLENT/\nSALIS/EMMAUS", "8px Arial", "#231F20");
	this.text_50.textAlign = "center";
	this.text_50.lineHeight = 8;
	this.text_50.setTransform(260.7,348.9);

	this.text_51 = new cjs.Text("PLAINFIELD", "8px Arial", "#231F20");
	this.text_51.textAlign = "center";
	this.text_51.lineHeight = 8;
	this.text_51.setTransform(348.2,127.4);

	this.text_52 = new cjs.Text("BUSHKILL", "8px Arial", "#231F20");
	this.text_52.textAlign = "center";
	this.text_52.lineHeight = 8;
	this.text_52.setTransform(314.3,155.2);

	this.text_53 = new cjs.Text("WASHINGTON", "8px Arial", "#231F20");
	this.text_53.textAlign = "center";
	this.text_53.lineHeight = 8;
	this.text_53.setTransform(382.6,88.3);

	this.text_54 = new cjs.Text("WASHINGTON", "8px Arial", "#231F20");
	this.text_54.textAlign = "center";
	this.text_54.lineHeight = 8;
	this.text_54.setTransform(130.4,241.5);

	this.text_55 = new cjs.Text("HEIDELBERG", "8px Arial", "#231F20");
	this.text_55.textAlign = "center";
	this.text_55.lineHeight = 8;
	this.text_55.setTransform(104.8,281.2);

	this.text_56 = new cjs.Text("UPPER\nMT. BETHEL", "8px Arial", "#231F20");
	this.text_56.textAlign = "center";
	this.text_56.lineHeight = 8;
	this.text_56.setTransform(409.4,37.2);

	this.text_57 = new cjs.Text("LOWER\nMT. BETHEL", "8px Arial", "#231F20");
	this.text_57.textAlign = "center";
	this.text_57.lineHeight = 8;
	this.text_57.setTransform(412.6,119.7);

	this.text_58 = new cjs.Text("PALMER", "8px Arial", "#231F20");
	this.text_58.textAlign = "center";
	this.text_58.lineHeight = 8;
	this.text_58.setTransform(372.2,200.7);

	this.text_59 = new cjs.Text("FORKS", "8px Arial", "#231F20");
	this.text_59.textAlign = "center";
	this.text_59.lineHeight = 8;
	this.text_59.setTransform(390.1,184.6);

	this.text_60 = new cjs.Text("EASTON", "8px Arial", "#231F20");
	this.text_60.textAlign = "center";
	this.text_60.lineHeight = 8;
	this.text_60.setTransform(405.9,232.5);

	this.text_61 = new cjs.Text("HANOVER", "8px Arial", "#231F20");
	this.text_61.textAlign = "center";
	this.text_61.lineHeight = 8;
	this.text_61.setTransform(297.2,245.8);

	this.text_62 = new cjs.Text("EAST\nALLEN", "8px Arial", "#231F20");
	this.text_62.textAlign = "center";
	this.text_62.lineHeight = 8;
	this.text_62.setTransform(274.9,226.5);

	this.text_63 = new cjs.Text("BETHL-\nEHEM", "8px Arial", "#231F20");
	this.text_63.textAlign = "center";
	this.text_63.lineHeight = 8;
	this.text_63.setTransform(359.9,249.2);

	this.text_64 = new cjs.Text("UPPER/LOWER\nNAZARETH", "8px Arial", "#231F20");
	this.text_64.textAlign = "center";
	this.text_64.lineHeight = 8;
	this.text_64.setTransform(324.3,211.3);

	this.text_65 = new cjs.Text("MOORE", "8px Arial", "#231F20");
	this.text_65.textAlign = "center";
	this.text_65.lineHeight = 8;
	this.text_65.setTransform(255.2,186.2);

	this.text_66 = new cjs.Text("ALLEN", "8px Arial", "#231F20");
	this.text_66.textAlign = "center";
	this.text_66.lineHeight = 8;
	this.text_66.setTransform(235.8,248.3);

	this.text_67 = new cjs.Text("LEHIGH", "8px Arial", "#231F20");
	this.text_67.textAlign = "center";
	this.text_67.lineHeight = 8;
	this.text_67.setTransform(187.8,209.9);

	this.text_68 = new cjs.Text("UPPER\nSAUCON", "8px Arial", "#231F20");
	this.text_68.textAlign = "center";
	this.text_68.lineHeight = 8;
	this.text_68.setTransform(322.2,373.5);

	this.text_69 = new cjs.Text("WILLIAMS", "8px Arial", "#231F20");
	this.text_69.textAlign = "center";
	this.text_69.lineHeight = 8;
	this.text_69.setTransform(407.4,277.3);

	this.text_70 = new cjs.Text("LOWER\nSAUCON", "8px Arial", "#231F20");
	this.text_70.textAlign = "center";
	this.text_70.lineHeight = 8;
	this.text_70.setTransform(388.8,295.5);

	this.text_71 = new cjs.Text("LOWER\nMILFORD", "8px Arial", "#231F20");
	this.text_71.textAlign = "center";
	this.text_71.lineHeight = 8;
	this.text_71.setTransform(288.8,446.8);

	this.text_72 = new cjs.Text("UPPER\nMACUNGIE", "8px Arial", "#231F20");
	this.text_72.textAlign = "center";
	this.text_72.lineHeight = 8;
	this.text_72.setTransform(170,384.9);

	this.text_73 = new cjs.Text("UPPER\nMILFORD", "8px Arial", "#231F20");
	this.text_73.textAlign = "center";
	this.text_73.lineHeight = 8;
	this.text_73.setTransform(258.8,422.6);

	this.text_74 = new cjs.Text("LOWER\nMACUNGIE", "8px Arial", "#231F20");
	this.text_74.textAlign = "center";
	this.text_74.lineHeight = 8;
	this.text_74.setTransform(216.6,405.7);

	this.text_75 = new cjs.Text("WHITE-\nHALL", "8px Arial", "#231F20");
	this.text_75.textAlign = "center";
	this.text_75.lineHeight = 8;
	this.text_75.setTransform(237.9,294.3);

	this.text_76 = new cjs.Text("NORTH\nWHITEHALL", "8px Arial", "#231F20");
	this.text_76.textAlign = "center";
	this.text_76.lineHeight = 8;
	this.text_76.setTransform(187.9,270.8);

	this.text_77 = new cjs.Text("LYNN", "8px Arial", "#231F20");
	this.text_77.textAlign = "center";
	this.text_77.lineHeight = 8;
	this.text_77.setTransform(56.1,329.7);

	this.text_78 = new cjs.Text("22", "8px Arial", "#231F20");
	this.text_78.textAlign = "center";
	this.text_78.lineHeight = 8;
	this.text_78.setTransform(375.3,227.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#231F20").ss(0.5,0,0,4).p("AgIg6QgPAGgYgLIgXAUIAHALQAHAMgBAHIgKATQgJAXAHAIIAIAHQANAIAVABIALADQAMAEAEAGQAIgKAUgDQAVgBANgIQAGgEACgDQAHgIgJgXIgKgTQgBgHAGgMQAEgGADgFIgWgUQgZALgOgGIgJgHQgBAFgHACg");
	this.shape_107.setTransform(377.6,234);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgQA4IgLgDQgVgBgNgIIgIgHQgHgIAJgXIAKgTQABgHgHgMIgHgLIAXgUQAYALAPgGQAHgCABgFIAJAHQAOAGAZgLIAWAUIgHALQgGAMABAHIAKATQAJAXgHAIQgCADgGAEQgNAIgVABQgUADgIAKQgEgGgMgEg");
	this.shape_108.setTransform(377.6,234);

	this.text_79 = new cjs.Text("33", "8px Arial", "#231F20");
	this.text_79.textAlign = "center";
	this.text_79.lineHeight = 8;
	this.text_79.setTransform(333.5,141.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABOAAQAAAZgXASQgXASggAAQgfAAgXgSQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYg");
	this.shape_109.setTransform(335.8,147.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag2ArQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYQAAAZgXASQgXASggAAQgfAAgXgSg");
	this.shape_110.setTransform(335.8,147.9);

	this.text_80 = new cjs.Text("476", "8px Arial", "#231F20");
	this.text_80.textAlign = "center";
	this.text_80.lineHeight = 8;
	this.text_80.setTransform(293.8,433.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#231F20").ss(0.5,0,0,4).p("AhVgnQgCAGAAAIQAAAKACAHQADAIAGAIQAIALAJAHQAFAFAMAGQAIAFAPAFQANAEAGAAQAIAAANgEQAQgGAHgEQAMgGAFgFQALgKAFgIQAHgIACgIQADgHAAgKQAAgNgGgMIikAAQgDAGgBAFg");
	this.shape_111.setTransform(296.1,440.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgUAvIgWgKQgMgGgFgFQgJgHgIgLQgHgIgCgIQgCgHAAgKQAAgIACgGIAEgLICkAAQAFAMAAANQAAAKgCAHQgDAIgGAIQgFAIgLAKQgGAFgLAGQgIAEgPAGQgNAEgIAAQgGAAgOgEg");
	this.shape_112.setTransform(296.1,440.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AA8hBIAKAKQAEAEAFAJQAEAHACAIQADAJAAAGQAAAJgDAEQgCAJgDAFQgCAGgGAHQgDAEgIAIIgNAKQgKAGgHADQgNAFgEABQgIACgGAAQgIAAgKgDQgRgHgGgEQgOgIgFgFQgHgHgHgJQgGgIgDgKQgEgHAAgLQAAgJAEgLQAFgLAFgIQAFgHAIgHQAHADAJADQAGACAJAAQAPAAAOgIIAKAEIAKADIAKABQAPAAAPgIg");
	this.shape_113.setTransform(296.1,439);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#231F20").s().p("AgSA/QgQgGgHgEQgOgIgEgFQgIgHgHgKQgGgIgDgKQgEgHABgKQAAgJADgLQAFgMAFgHQAGgHAIgIIAPAGQAGACAJAAQAPAAAOgIIAKAFIAKACIAKABQAPAAAPgIIAKALIAJANIAGAOQADAJgBAHQAAAIgCAFQgCAJgDAFQgDAFgFAIIgLAMIgNAKQgKAFgHADIgRAHQgHACgHAAQgHAAgLgEg");
	this.shape_114.setTransform(296.1,439);

	this.text_81 = new cjs.Text("78", "8px Arial", "#231F20");
	this.text_81.textAlign = "center";
	this.text_81.lineHeight = 8;
	this.text_81.setTransform(362,311);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABBgZQAAgOgEgLIh5AAIgDALQgCAGAAAIQAAAJACAIQADAIAEAHIAMASQAEAGAJAGQAJAHAIADQAJAEAFAAQAFAAAKgEQAJgEAIgGQAIgFAFgHQAHgIAFgJQAFgJABgHQACgIAAgJg");
	this.shape_115.setTransform(364.1,318.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgOAvQgHgDgKgHQgIgGgFgGIgMgSQgEgGgDgJQgCgIAAgJQABgIABgGIAEgLIB4AAQAEAMABANQAAAJgCAIQgCAIgFAIQgFAJgHAIQgFAHgIAFQgIAGgJAEQgKAEgFAAQgFAAgJgEg");
	this.shape_116.setTransform(364.1,318.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#231F20").ss(0.3,0,0,4).p("ABBgMIgCANIgDAOIgHANQgCAEgGAIQgDAEgHAGIgMAJIgNAGQgGADgEAAQgEAAgJgEQgIgEgJgHQgIgFgGgIQgGgHgFgJQgFgLgBgHQgDgIAAgKQAAgJADgLQACgJAFgKQAFgJAFgFQAEADAIADQAEACAHAAQALAAAKgIIAHAEIAIADQACABAFAAQALAAAMgIQADAEAEAGQAEAIACAFQADAHACAIQACAIAAAHg");
	this.shape_117.setTransform(364.1,316.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#231F20").s().p("AgNA/QgIgEgJgHQgIgFgFgIQgGgHgGgJQgFgLgBgHQgDgIAAgKQAAgJAEgLQACgJAEgKQAFgJAGgFIALAGQAFACAGAAQALAAAKgIIAHAEIAHADIAIABQALAAAMgIIAHAKIAGANQADAHACAIIACAPIgBANIgFAOIgGANIgIAMIgKAKIgMAJIgMAGQgHADgEAAQgEAAgJgEg");
	this.shape_118.setTransform(364.1,316.7);

	this.text_82 = new cjs.Text("78", "8px Arial", "#231F20");
	this.text_82.textAlign = "center";
	this.text_82.lineHeight = 8;
	this.text_82.setTransform(127,387.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABBgZQAAgOgFgLIh4AAIgEALQAAAEAAAKQAAAKACAHQABAHAFAJQAFAJAHAJQAFAGAIAFQAFAEAMAGQAKAEAEAAQAFAAAKgEQAKgFAIgFQAHgGAFgFIAMgSQAFgIACgIQABgHAAgKg");
	this.shape_119.setTransform(129.1,395.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgOAvIgRgKQgIgFgFgGQgIgJgEgJQgGgJgBgHQgCgHAAgKIABgOIAEgLIB4AAQAGALAAAOQAAAKgCAHQgDAIgEAIIgMASQgEAFgJAGQgHAFgKAFQgJAEgGAAQgEAAgKgEg");
	this.shape_120.setTransform(129.1,395.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AAWg5QALAAAMgIIAHALIAHANIAEAOIACAQQAAAHgCAGQgCAJgCAFQgCAHgEAGIgIAMIgKAKIgMAIQgIAFgFACQgFACgFAAQgFAAgIgEQgIgEgJgGQgJgHgFgGIgKgRQgEgGgDgMQgDgGAAgLQAAgLADgJQADgLAEgIQAFgJAFgGIAMAGQAFACAGAAQALAAAKgIIAHAFIAIACg");
	this.shape_121.setTransform(129.1,393.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#231F20").s().p("AgNA/QgIgEgJgGQgJgHgFgGIgLgRQgDgGgEgMQgCgGAAgLQABgLACgJQADgLAEgIQAFgJAFgGIAMAGQAFACAGAAQALAAAKgIIAHAFIAHACIAIABQALAAALgIIAIALIAHANIAEAOIACAQIgCANIgEAOQgDAHgDAGIgIAMIgKAKIgNAIQgGAFgGACQgFACgFAAQgFAAgIgEg");
	this.shape_122.setTransform(129.1,393.4);

	this.text_83 = new cjs.Text("476", "8px Arial", "#231F20");
	this.text_83.textAlign = "center";
	this.text_83.lineHeight = 8;
	this.text_83.setTransform(140.4,257.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABZgZQAAgMgHgNIijAAQgDAGgCAFQgCAGAAAIQAAAIADAJQACAIAHAIQAIALAIAHQAHAGAKAFQAKAFAOAFQANAEAGAAQAHAAANgEQANgFALgFQALgGAGgFQAKgKAGgIQAGgIADgIQADgIAAgJg");
	this.shape_123.setTransform(142.7,264.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgTAvQgOgFgKgFQgKgFgHgGQgIgHgIgLQgHgIgCgIQgDgJAAgIQAAgIACgGIAFgLICjAAQAHANAAAMQAAAJgDAIQgDAIgGAIQgGAIgKAKQgGAFgLAGIgYAKQgNAEgHAAQgGAAgNgEg");
	this.shape_124.setTransform(142.7,264.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#231F20").ss(0.3,0,0,4).p("AAUg6IAKABQAPAAAQgIQAFAEAFAGQABACAIALIAFAPQADAJAAAGQAAAJgCAEQgCAHgEAHQgCAGgGAHIgLAMQgHAGgGAEQgIAFgJAEIgRAGQgHACgHAAQgIAAgKgEQgLgEgMgGQgMgHgGgGQgIgHgHgJQgGgIgDgKQgDgKAAgIQAAgJAEgLQADgIAHgLQAFgHAIgHQAHADAIADQAHACAIAAQAPAAAOgIg");
	this.shape_125.setTransform(142.7,262.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#231F20").s().p("AgSA/QgMgEgLgGQgMgHgHgGQgHgHgHgKQgGgIgDgKQgDgJgBgIQAAgJAFgLQACgJAIgKQAFgHAHgIIAQAGQAGACAJAAQAPAAAOgIIAUAHIAKABQAPAAAQgIQAFAFAFAGIAJANIAFAOQACAJABAHQAAAIgCAEQgCAHgEAIQgDAFgFAIIgLAMQgHAGgHADQgHAGgJADIgRAHQgHACgHAAQgIAAgKgEg");
	this.shape_126.setTransform(142.7,262.7);

	this.text_84 = new cjs.Text("22", "8px Arial", "#231F20");
	this.text_84.textAlign = "center";
	this.text_84.lineHeight = 8;
	this.text_84.setTransform(209.4,343.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#231F20").ss(0.5,0,0,4).p("AhGgrIAHALQAHAMgBAHIgKATQgJAXAHAIIAIAHQANAIAVABIALADQAMAEAEAGQAFgGAMgEQAGgCAFgBQAVgBANgIIAIgHQAHgIgJgXIgKgTQgBgHAGgMIAHgLIgWgUQgZALgOgGIgJgHQgBAFgHACQgPAGgYgLg");
	this.shape_127.setTransform(211.6,350.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgQA4IgLgDQgVgBgNgIIgIgHQgHgIAJgXIAKgTQABgHgHgMIgHgLIAXgUQAYALAPgGQAHgCABgFIAJAHQAOAGAZgLIAWAUIgHALQgGAMABAHIAKATQAJAXgHAIIgIAHQgNAIgVABIgLADQgMAEgFAGQgEgGgMgEg");
	this.shape_128.setTransform(211.6,350.1);

	this.text_85 = new cjs.Text("33", "8px Arial", "#231F20");
	this.text_85.textAlign = "center";
	this.text_85.lineHeight = 8;
	this.text_85.setTransform(380.7,262.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#231F20").ss(0.5,0,0,4).p("ABOAAQAAAZgXASQgXASggAAQgfAAgXgSQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYg");
	this.shape_129.setTransform(383,268.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("Ag2ArQgXgSAAgZQAAgYAXgSQAXgSAfAAQAgAAAXASQAXASAAAYQAAAZgXASQgXASggAAQgfAAgXgSg");
	this.shape_130.setTransform(383,268.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#231F20").ss(0.6,1,1).p("AgQAEIghgqIgCADQgCADABABIAbA4IgKAOQgJAPAEADQAFAEAWgbIA8AMQACAAAFgEIgzgVIgDgEIAjg0QAOAFACgBQABAAABgCIgQgKIgNgNIgCADIAIAOIgqAug");
	this.shape_131.setTransform(263,292.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#231F20").s().p("AgoA5QgEgDAJgPIAKgOIgbg4QgBAAAAAAQAAgBABAAQAAgBAAgBQABAAAAgBIACgDIAhAqIAEADIAqguIgIgOIACgDIANANIAQAKIgCACQgCABgOgFIgjA0IADAEIAzAVQgFAEgCAAIg8gMQgTAXgHAAIgBAAg");
	this.shape_132.setTransform(263,292.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(3,0,1).p("AFMNjIjlnQIhKi9QgMgagGgOQgJgaAFgQQACgFAPghQAKgYABgRQABgPgCgXQgDgXgBgMIgFhEQgCgagKgRQgHgPgTgUIg0gyIjBlAIhIlN");
	this.shape_133.setTransform(354.1,192.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(3,0,1).p("AzdJJIMAATIIphvIFwjhQA2ghAagsIFXovIF0jt");
	this.shape_134.setTransform(300.5,316.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(3,0,1).p("AvqxdIFmGnIFrIsIBoFRQAOAwABABQAJAcANASQASAaAFAHQAJAKATAOQAEADALANQAJAJAIAFIIoFZIH/GG");
	this.shape_135.setTransform(213.9,341.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(3,0,1).p("A32N8IDHgjQAtgIBlgLQBbgNAygZQATgKAdgVQAqggAEgDIIYl3IDUiNIBbhIIGuovQAHgJANgSQANgPANgHQAkgSA5gQQAggIBAgRIFUhfQBQgXBbg2IBDgnQAogYA5gXQAigNBDgaIC+hJ");
	this.shape_136.setTransform(261.7,308);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#231F20").ss(3.8,0,1).p("AFMNjIjlnQIhKi+QgMgZgFgPQgJgaAFgQQABgFAPghQALgXABgSQABgPgDgWQgDgXgBgNIgFhDQgCgbgJgRQgIgOgTgVIg0gxIjAlBIhIlN");
	this.shape_137.setTransform(354,192.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#231F20").ss(3.8,0,1).p("AzeJIIMAAUIIphvIFwjhQA2giAagrIFXovIF0ju");
	this.shape_138.setTransform(300.6,316.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#231F20").ss(3.8,0,1).p("AvqxdIFmGnIFrIsIBoFRQAOAwABABQAJAbANATQASAZAFAHQAJAKATAPQAEADALAMQAJAJAIAFIIoFaIH/GF");
	this.shape_139.setTransform(213.9,341.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#231F20").ss(3.8,0,1).p("A32N8IDGgjQAtgIBmgLQBagNAygZQAUgKAcgVQArggADgDIIYl3IDViNIBbhIIGtovQAHgJAOgSQAMgPAOgHQAkgSA4gQQAggIBAgRIFUhfQBRgXBbg2IBDgnQAogYA5gXQAhgNBEgaIC9hJ");
	this.shape_140.setTransform(261.7,308);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#A6A8AB").ss(2,0,1).p("AnzCPIlOknIF9ksILGKeIEkDpIACACIEalbIihk+");
	this.shape_141.setTransform(299.2,317);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#A6A8AB").ss(2,0,1).p("AkpB9IJTj5");
	this.shape_142.setTransform(336.5,308.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#A6A8AB").ss(2,0,1).p("AsokHIGeDTIMRGEIGeqk");
	this.shape_143.setTransform(244.4,372.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#A6A8AB").ss(2,0,1).p("Almg3IHKi6IAAAEID+Hl");
	this.shape_144.setTransform(331,270.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACGlcIjDBRIiXBFIgGADIDZIfIDgiF");
	this.shape_145.setTransform(402.2,237.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#A6A8AB").ss(2,0,1).p("AkGjFIFDD8IDKCO");
	this.shape_146.setTransform(283.2,342.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A6A8AB").ss(2,0,1).p("ADJEiImRpD");
	this.shape_147.setTransform(307.6,283.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#A6A8AB").ss(2,0,1).p("AFTlwIqlLh");
	this.shape_148.setTransform(246.5,334.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A6A8AB").ss(2,0,1).p("AgzgpIBnBT");
	this.shape_149.setTransform(359.5,366.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#A6A8AB").ss(2,0,1).p("AkDDgIIHm+");
	this.shape_150.setTransform(189.6,324.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#A6A8AB").ss(2,0,1).p("AEjKYIpF0v");
	this.shape_151.setTransform(375.8,251.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#A6A8AB").ss(2,0,1).p("AmUCpIMplR");
	this.shape_152.setTransform(280.6,212.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#A6A8AB").ss(2,0,1).p("AlqDOIFtj8IFqie");
	this.shape_153.setTransform(172,261.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhyBFIDliJ");
	this.shape_154.setTransform(370.7,275.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ah2jWIDRF0IAcA6");
	this.shape_155.setTransform(160.5,235.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#A6A8AB").ss(2,0,1).p("ABhD+IjCn7");
	this.shape_156.setTransform(302.1,233.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhUjCICpGF");
	this.shape_157.setTransform(256.2,246.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#A6A8AB").ss(2,0,1).p("AilBYIBug9IDehy");
	this.shape_158.setTransform(270.5,262.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhfAxIC+hh");
	this.shape_159.setTransform(296.9,249);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiZkuICBENIgCgDIC0FT");
	this.shape_160.setTransform(296.2,169.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ag+D3IiTmQIGrhW");
	this.shape_161.setTransform(386.6,193.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhBAsICDhW");
	this.shape_162.setTransform(395.3,276.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiHA3IEPht");
	this.shape_163.setTransform(354.8,241);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiZkAICXDtQCWDzAEAm");
	this.shape_164.setTransform(224.8,203.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#A6A8AB").ss(2,0,1).p("ADYFeImuq7");
	this.shape_165.setTransform(334.2,146.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiclrIE5LX");
	this.shape_166.setTransform(362.1,106.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ai4kbIFxI3");
	this.shape_167.setTransform(153.4,310.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#A6A8AB").ss(2,0,1).p("Ai3jCIFuGF");
	this.shape_168.setTransform(116.5,262.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACqiiIlTFF");
	this.shape_169.setTransform(126.3,312.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACMkQIkXIi");
	this.shape_170.setTransform(95.2,355.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiLEvIEXpc");
	this.shape_171.setTransform(278.5,441.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#A6A8AB").ss(2,1,1).p("AiIEjQAag6ByjyQB1j2APgj");
	this.shape_172.setTransform(245.1,424.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#A6A8AB").ss(2,0,1).p("AiMEvIEZpd");
	this.shape_173.setTransform(198.4,401.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhiDkIDFnH");
	this.shape_174.setTransform(145.6,386.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#A6A8AB").ss(2,0,1).p("AH/CcIqUjOIlqhp");
	this.shape_175.setTransform(403,80);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#A6A8AB").ss(2,0,1).p("ACgkcIk5B2IEEHH");
	this.shape_176.setTransform(224,257.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#A6A8AB").ss(2,0,1).p("AjcBZIFYiIIAqgVIA3gT");
	this.shape_177.setTransform(343.3,186.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#A6A8AB").ss(2,0,1).p("AhuGxIhykpIHDo1");
	this.shape_178.setTransform(400.4,129.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#A6A8AB").ss(2,0,1).p("AmtmmIGNH9IHRFO");
	this.shape_179.setTransform(112.6,319.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#A6A8AB").ss(2,0,1).p("AgnBTIBPil");
	this.shape_180.setTransform(159.6,354.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#A6A8AB").ss(2,0,1).p("AjkhiIHJDF");
	this.shape_181.setTransform(305.2,416);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#87CC9C").s().p("AkXiYIE5h2IBLgfIABADICqGFIAAAAIhsA9Ii+CWg");
	this.shape_182.setTransform(236.6,256.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FDFBB0").s().p("AgrBpIhNhsIgBgDIC8hiIA3CNIilBEg");
	this.shape_183.setTransform(299.5,254.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F6C79C").s().p("Ah5EhIiqmFIgBgDIG8i6IABADICMFpImcDWIgCABg");
	this.shape_184.setTransform(276.9,236.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#87CC9C").s().p("Al/iMIAAgBIAsgXIAEgDIAJgDIAcgdIAAgBIABAAIAAAAIABgCIAAAAIABAAIAAgBIAAgBIABAAIAAAAIAAgBIABAAIAAAAIAMgNIAEgEIAVgGIAXgZIAQglIAfglIAThXIBahiIAGgCIAFgFIAHgJIAGgNIADgJIACgFIACgDIABgBIAAACIE6LXIBxEpIACAEIjwAwIg2ATIgrAVg");
	this.shape_185.setTransform(351,125.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FDFBB0").s().p("Al/lPIAAgCIABgCIAEgFIABAAIAQgSIAigbIgCgCIABAAIFoBpIFgBvIgBACInCI1g");
	this.shape_186.setTransform(384.8,103.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#99B4DD").s().p("Al2CRIEZohIHRFNIADABIjNHTg");
	this.shape_187.setTransform(118.7,368.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F6C79C").s().p("AohCRICjivQAJgLAHgEQAIgEAPgDIAagEQAggEAlgjIA5g8IBRhRIBChyQAmglAJgJQAKgHADgEQADgFACgLIAAgRQAAgKAFgHQAEgGANgBIASgBQAKgCAIgDQAOgFAOgNIAZgYIASgPIGMH+IkZIhg");
	this.shape_188.setTransform(54.7,330.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#87CC9C").s().p("AlwhRIAIgIQADgFAFgNQAEgLAFgFQADgDAJgEQAJgDADgCIAZgVQAZgVAMgRQAGgJAIgUQAJgXAFgIQAGgLAMgNIAVgWIAegjQATgVANgMQAUgQAIgNIAPgcIFvGIIBXCDIgCABIlVFHg");
	this.shape_189.setTransform(106.6,285.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FDFBB0").s().p("ACZFKInRlMIFTlHIACgBIEcGyIhVBJIABAAIhKCag");
	this.shape_190.setTransform(140.7,328.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FDFBB0").s().p("AkyDQIABgCQAag7B0jxQB1j2APgkIACgIIDoBzIAAABIBoAuIgBACIkaJdg");
	this.shape_191.setTransform(262,433);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#99B4DD").s().p("Ak9DaIEapdIACgDIFfCaIgCAFIgBABIgcA4IgBACIgBAAIhDCHIAAABIgcA3IgBABIgIAQIgBADIgBABIgTAnIAAAAIgJATIgBABIgCAEIgCADIAAADIgZAtIgFANIgBACIgFAIIAAABIgBADIgBAAIAAABIgRAiIAAABIgkBGIAAABIgyBng");
	this.shape_192.setTransform(296.3,449.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E6E6E6").s().p("Al+DEIDHnFIBQioIHmD6IkZJZg");
	this.shape_193.setTransform(174.1,389.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F6C79C").s().p("ABbGZInPjbIEZpZIADABIHNDlIgCAJQgQAjh1D0Qh0DzgZA7IgCADg");
	this.shape_194.setTransform(221.6,412.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E6E6E6").s().p("AlDABIF8kpIELD8IgCACIk5FTg");
	this.shape_195.setTransform(248.2,301.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F6C79C").s().p("AnwhIIAEgFIFvj+IFpieIEFHJIi+CTImzF3g");
	this.shape_196.setTransform(184.9,290.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F6C79C").s().p("AkKGuIhxkoIHCo1IABgCIE0BhIgBAJQgBAIgDAFIgNAVQgIAMgEAKQgEALADANQABAHAGAQQALAfgNA0QgFAVAIAPIABADIABABIACAFIADAOIAAAMIgFAPIgIATIgBABIAAACIgHAQIAAABIgEAQIgEAJIgBABIgKAKIgDADIgYAHIgIAFIgLAKIAAAAIgBABIgBABIgDADIgCABIAAABIgEADIgBAAIAAABIgIAJIgFAIIgBAGIAAABIgGAKIAAADIgBABIgFAUIgBAEIAAABIgBACIgCAKIAAABIgBABIAAABIAAABIAAABIgBABIgFAaIgIASIgFAEIgcAIIgCAAIgkABIgCABIgXADIgQgBIgigHIgEAAIgEAAIgHAAIgBgBIgbAAIgCAAIgLACIgTAFIgJAJIgEAIIgCAFIgDAHIAAADIgBAEIgCAJIgBAAIgCAIIAAAEIABADIAAAgIAFAiIgFAVIgLARIgHAJIgXATIgCACIgDACIgFAEIi+Amg");
	this.shape_197.setTransform(416,129.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#87CC9C").s().p("AmJCeImdjSIIKm/IFMEoIE5lVIACgDIG8GjImeKjg");
	this.shape_198.setTransform(244.3,351.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#99B4DD").s().p("ABGFZIgDgCIrFqdIBug9IDgh0IABACIBMBuIAAAAIHLi6IgBAEID/HnICiE+IkbFag");
	this.shape_199.setTransform(318.3,304.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FDFBB0").s().p("AkHjCIAFgDICYhGIDDhQIADAAIgFAKIgBADIAAACIgBABIAAADIgBAHIABAIIAAAEIAAAEIAAADIAAAGIgIApIgFB2IABAAIAJARIABAAIAAABIADAEIADAFIAAAAIAAAAIABABIAAAAIACAEIAKAMIAfAdIASACIADAAIAEABIAKADIABAAIACAAIADAAIACgBIAFgBIAFgDIAEgBIAEgDIADAAIAMgEIAJgBIAHAAIACAAIAGAAIAHACIADABIABAAIADABIAHAFIAEAFIAFAKIAAADIAAAFIABABIAAACIAAAEIAAAMIAAACIAAABIgBACIAAAAIgCAHIgBAFIgGAPIgBACIgCAHIgDALIgBADIgBADIgBACIgCADIgBABIgCABIgBADIgDACIgHAHIgGADIgEADIgJAMIgEAHIgKAZIgCAGIAAABIgIAaIgCAFIAAADIgBADIgBADIAAABIgBACIAAADIACAGIABACIAAABIgBACIAAABIAAACIgCADIgCADIgBACIgBADIgDAIIAAADIAAACIgBAAIACAGIAAAFIACAGIABACIjhCEg");
	this.shape_200.setTransform(406.7,237.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#99B4DD").s().p("AjiEOIlqhpIgBAAIgdgdIgBAAIgCgCIAAgBIgBAAIgcgeIBTh/IAJgjIACgUIAAAAIAAgBIAAgFIABgDIAGgJIAAAAIABgBIABgCIABgEIAAgBIACgFIABgDIABgCIAAAAIACgDIALgMIABAAIADgDIARgOIAAAAIAGgEIAGgGIA1giIADgBIADgBIACAAIACgBIADABIAFAAIAFgBIACgBIAAgBIAFgIIABAAIACgCIAFgDIANgCIALgFIAOgJIACgBIARgLIAJgJIADgGIABgDIgCgEIgBgGIABgFIABgDIABgEIgEgRIAAgDIABgDIACgDIALgKIAXgQIAQgDIACgBIAGgEIADgBIALgCIABgBIAGgBIAEgBIAIgEIABAAIABAAIAUgIIAfgNIAQgLIAGgFIA1g1IAQgSQAKgLAIgFQAUgOARAVQAJALANAaQADAFAHAFIANAJQAFAGANANQAMAKAaARIAQANQAJAJAHADQANAHAbAMIARAKQALAGAHACQALACAKAJIARARIAJAJIABABIASAKIACAAIAAABIABAAIAaAPIABABIABAAIACABIANAHIABAAIAFACIATAJQAEABABAHIACAKIAGAKIAHAJIAOARQAIAKAJADQAEABALABQAKABAEACQAFADADAGIAFAMQAHAWASAIQAlAQATAFIATAEQAMADAHADQAHACAKAJQAXANAsAfQAUAKALATQAIANADAUIAFAjIAFAWQAGAWgCAEQgEAFgRAAQgRAAgEAGIgEAKIgEALIgIALQgBAEAAABIADAGQAEAIACAVIAGAgIAFANQACAIgCAGQgEAOgTATQgIAIgOAFIgZAGIhPAVIgjAHQgWAEgMAJQgHAFAAALQAAAFADANIACANQABAIACAEIAIAKIAFAKQADAFAEACIAJAFQAFAEACAEIABAGg");
	this.shape_201.setTransform(410.8,47.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E6E6E6").s().p("AhADWIhnhTIEYlZIA3BuIgRAWIAAAAIgnA1IgCAEIgCACIgeAlIgBABIAAAAIgBABIiHDDIgDAEg");
	this.shape_202.setTransform(371.3,349.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F6C79C").s().p("AmcDsIAAgCIANAHIGcqkIADADIGLE8IACABIgDACIgYAkIgBABIhQB2IAAABIAAABIgBABIgBAAIAAABIAAAAIgMARIgBACIgBABIgGAJIgBABIgPAVIAAACIgBAAIgdAsIgCADIgBABIgCAEIAAACIgCADIgBABIAAAAIgCADIAAAAIAAABIgBABIgBAAIgFAEIgCACIgTAaIgBAAIAAABIgCADIAAAAIgBAAIgBABIAAAAIAAABIgRAYIgBABIgJAPIAAAAIgBABIgBACIhLBpIgBABIgHAKIgmBMg");
	this.shape_203.setTransform(323.6,382.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F6C79C").s().p("AhAG3Ii2lVIACADIiCkMICliDIABgBIACgEIABAAIAQgTIAHgFIBFhQIA6gfIAAAAIGuK8Im3Cxg");
	this.shape_204.setTransform(318.3,155.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#99B4DD").s().p("AlnCqIiXjrIBkgqIACgBIAWgUIBcgvIAHgEIBSgXIAOgGIByhFIAQgbIAMgFICshIIAIgOIAygoIAAgBIACgBIAAAAIAGgEIABgCIAMgJICBEOIgCgDIC2FSIAAABIrKErQgEgmiYj1g");
	this.shape_205.setTransform(260.5,184);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E6E6E6").s().p("AgCFSIlwmFIAAAAIAFgMIAIgOIAJgOIAHgOQAFgHAHgFQARgGAGgGQAPgPAKgGIBCgiIA2gYQAhgNATgPQAkgaAagIQAhgLA9gYIAmgNIAhgMQAJgEAHgJIDSFzIAbA5IAAAAIlvD9IgEAGg");
	this.shape_206.setTransform(135.2,248.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FDFBB0").s().p("Aj1FUIjTlyIAMgQIAKgSIAJgLQAFgHACgFQACgEACgJQACgJACgDQACgEAGgDIAIgHIBFg2IABgBIADgBIADAAIANgCIA4geIAtgMIAfglIA4ghIAlgIIABgBIADAAIABgBIAAAAIACAAIABAAIAigIIAzgeIBCgSIAvgYIACgBIAWgJICXDtQCYD0AEAlIk7B2IloCdg");
	this.shape_207.setTransform(194.3,217.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E6E6E6").s().p("AkKicIGshXIgNAPIgOAXIgGARIAAACIABALIAFAPIAEAHIABADIAFAEIADAGIAHAHIASANIAgATIAnAmIACADIAHANIABAIIgBAGIgEANIgDAGIAAABIgBAEIAAAHQgCAIAKAOQAMAPABAGQABALgIAIIgGAIIgBAAIgFAHIgCACIgBABIgEAGIgDAHIgDAAIjFBQIiWBFIgFAEg");
	this.shape_208.setTransform(392.2,193.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F6C79C").s().p("AjshMIABgBICEhXIABACIDgiFIAGAFIARAIIAIAFIAGAGIAGACIAHACIAFADIASAdIABAFIABACIACAGIACADIACADIAPAtIALAcIAEAIIACADIACAIIAAASIgDALIgCADIgBABIAAAAIgHADIgKABIgYALIgFAEIAAAAIgBAAIgEACIgFAGIgCADIgCAIIACAKIAGAKIAGAHIAJAJIAHAFIANAOIACABIADAFIgCABIAAABIhQBQIAAAAIgGAHIgBAAIAAAAIgBABIAAAAIgCADIgCACIgXAWIAAABIgDACIg3A3IAAABIgBABIgCACIgGAGIgCACIgNANIgBACIgHAGIgCABIgCACIAAAAIAAABIgBAAIgCACIgEAEIgBAAIAAABIAAAAIgBABIAAAAIgCAAIgDABIAAAAIAAABIABACIAAAAIAAABIgCABIgCADIgBAAIAAABIgTARIAAAAIgBABIgCAAIgBAAIgEAAIgDABIAAABIABABIAAABIgBABIAAACIgBACIAAABIgBAAIAAABIAAAAIgBABIgDADIgJAIIgBABIgBABIgPAOg");
	this.shape_209.setTransform(412.3,288.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#99B4DD").s().p("AkSm2IBbgkIAqgVIA3gTICqHTIC/HbIiEBXIgBAAg");
	this.shape_210.setTransform(374.3,229.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#87CC9C").s().p("AjQh0IABgEIEQhvIABgBICPFDIgHAFIjiCJg");
	this.shape_211.setTransform(362,258.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E6E6E6").s().p("AjijSIDiiJIAHgFIDcH2IgEAEIgCABIgDADIAAAAIAAAAIgCADIgBABIgCACIgCACIgMAPIgbAcIgCACIgCADIgZAeIgBACIgBABIgCACIgBACIgBAAIgOATIAAABIgaAiIAAABIgaAgIAAABIgLAOg");
	this.shape_212.setTransform(382.2,303.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E6E6E6").s().p("Al7iKIgCgDIIgjfIDbHyIgBABIo2Dmg");
	this.shape_213.setTransform(330.4,221.9);

	this.text_43.mask = this.text_44.mask = this.text_45.mask = this.text_46.mask = this.text_47.mask = this.text_48.mask = this.text_49.mask = this.text_50.mask = this.text_51.mask = this.text_52.mask = this.text_53.mask = this.text_54.mask = this.text_55.mask = this.text_56.mask = this.text_57.mask = this.text_58.mask = this.text_59.mask = this.text_60.mask = this.text_61.mask = this.text_62.mask = this.text_63.mask = this.text_64.mask = this.text_65.mask = this.text_66.mask = this.text_67.mask = this.text_68.mask = this.text_69.mask = this.text_70.mask = this.text_71.mask = this.text_72.mask = this.text_73.mask = this.text_74.mask = this.text_75.mask = this.text_76.mask = this.text_77.mask = this.text_78.mask = this.shape_107.mask = this.shape_108.mask = this.text_79.mask = this.shape_109.mask = this.shape_110.mask = this.text_80.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.text_81.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.text_82.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.text_83.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.text_84.mask = this.shape_127.mask = this.shape_128.mask = this.text_85.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = mask_1;

	this.addChild(this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.text_85,this.shape_128,this.shape_127,this.text_84,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.text_83,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.text_82,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.text_81,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.text_80,this.shape_110,this.shape_109,this.text_79,this.shape_108,this.shape_107,this.text_78,this.text_77,this.text_76,this.text_75,this.text_74,this.text_73,this.text_72,this.text_71,this.text_70,this.text_69,this.text_68,this.text_67,this.text_66,this.text_65,this.text_64,this.text_63,this.text_62,this.text_61,this.text_60,this.text_59,this.text_58,this.text_57,this.text_56,this.text_55,this.text_54,this.text_53,this.text_52,this.text_51,this.text_50,this.text_49,this.text_48,this.text_47,this.text_46,this.text_45,this.text_44,this.text_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,488.9);


(lib.shape30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBLIAAgUIgLAAIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAgKIgJAAIAAgSIATAAIAAAKIAKAAIAAAIIAKAAIAAgcIgKAAIAAgUIgKAAIAAgVIAUAAIAAAVIALAAIAAAUIAJAAIAAgzIASAAIAAAzIAKAAIAAgpIAVAAIAAAzIAJAAIAAgUIAKAAIAAgKIAKAAIAAAoIgKAAIAAAcIgKAAIAAAUIgJAAIAAAeg");
	this.shape.setTransform(8,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBQIAAgeIAJAAIAAAegAgcBQIAAgUIgLAAIAAgKIgKAAIAAgKIgKAAIAAgUIAKAAIAAAUIAKAAIAAAKIALAAIAAAKIAKAAIAAAUgAAxAyIAAgUIALAAIAAgeIAKAAIAAAeIgKAAIAAAUgAAxAygAhEAUIAAgKIAJAAIAAAKgAgnAKIAAgKIgKAAIAAgIIgTAAIAAgKIATAAIAAAKIAKAAIAAgKIALAAIAAAcgAhPAKIAAgSIALAAIAAASgABGAAIAAgmIAKAAIAAAmgAAogIIAAgzIgVAAIAAApIgJAAIAAgzIAeAAIAAAKIAJAAIAAAVIALAAIAAAKIgLAAIAAAUgAgSgSIAAgUIgKAAIAAgVIgVAAIAAgKIAVAAIAAAKIAKAAIAAgKIAKAAIAAAzgAgxgSIAAgUIAKAAIAAAUgAgxgSgAA8gmIAAgKIAKAAIAAAKgAA8gmgAg7gmIAAgVIAKAAIAAAVgAgIhFIAAgKIASAAIAAAKgAgIhFg");
	this.shape_1.setTransform(8,8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAxIAAgTIgKAAIAAgKIgKAAIAAgKIgLAAIAAgSIAVAAIAAgVIgKAAIAAgUIAUAAIAAAKIAKAAIAAgKIASAAIAAAKIAKAAIAAgKIATAAIAAAUIALAAIAAgKIAKAAIAAAnIgKAAIAAAUIgLAAIAAAdg");
	this.shape.setTransform(6.5,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F0F0F").s().p("AgEAOIAAgbIAIAAIAAAJIABAAIAAAIIgBAAIAAAKg");
	this.shape_1.setTransform(10.5,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA2IAAgTIAKAAIAAATgAgsAjIAAgKIgKAAIAAgKIgKAAIAAgSIAKAAIAAASIAKAAIAAAKIAKAAIAAAKgAAsAZIAAgUIAKAAIAAAUgAA2AFIAAgnIgKAAIAAAKIgKAAIAAgUIgTAAIAAgKIATAAIAAAKIAUAAIAAAKIAKAAIAAAngAA2AFgAg2gDIAAgLIAKAAIAAgKIAKAAIAAAVgAg2gDgAg2gYIAAgUIAKAAIAAAUgAAFgiIAAgKIgSAAIAAgKIASAAIAAAKIAKAAIAAAKgAgYgiIAAgKIgUAAIAAgKIAUAAIAAAKIALAAIAAAKgAAPgsgAgsgsg");
	this.shape_2.setTransform(6.5,5.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13,11);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image25).s().p("AhFBQIAAifICLAAIAACfg");
	this.shape.setTransform(7,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,16);


(lib.shape23 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAqQgRgRAAgZQAAgYARgRQARgSAYAAQAYAAASASQARARAAAYQAAAZgRARQgSASgYAAQgYAAgRgSg");
	this.shape.setTransform(0.5,0);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#6F7777","#2B3C3C"],[0,1],0,-7.9,0,8).s().p("Ag3A4QgXgYAAggQAAggAXgXQAXgYAgAAQAhAAAXAYQAXAXAAAgQAAAggXAYQgXAYghAAQggAAgXgYg");
	this.shape_1.setTransform(0.5,0);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.502)").s().p("Ag+A/QgagaAAglQAAgkAagaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");
	this.shape_2.setTransform(0.5,0);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0.784,1],0,-1.9,0,0,-1.9,9.8).s().p("AhCAuQgbgcgBglQABgfAQgXQgLAUAAAYQAAAjAaAaQAaAbAkAAQAlAAAagbQAbgaAAgjQAAgYgLgTQAPAXAAAeQABAlgcAcQgcAcgnAAQgmAAgcgcg");
	this.shape_3.setTransform(0.5,3.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-8.9,19,19.5);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(2,1,0,3).p("AAAAAIgdAAAAAAAIAeAA");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(2,0,0,3).p("AAAAeIAAgeAAAgdIAAAd");
	this.shape_1.setTransform(7,7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,4,6,6);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(2,1,0,3).p("AAeAAIg7AA");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.502)","rgba(204,204,204,0.502)"],[0,1],-59.9,-55,0,-59.9,-55,145.1).s().p("AmFGGQigifABjnQAAjhCgikIgBAAQCgigDlABQDhgBCgCgQCkClAADgQABDmilCfIAAABQigCfjhAAQjlAAigifg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(72,76,76,0.498)").s().p("AnLHNQi9i9AAkQQAAkIC8jDIABAAQC8i9EPAAQEKAAC9C9QDDDCgBEJQAAERjCC8IAAAAQi9C9kKgBQkPABi8i9gAokAAQgBDnCgCfQCgCfDlAAQDhAACgifIAAgBQClifgBjmQAAjgikilQigigjhABQjlgBigCgIABAAQigCkAADhg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(2,1,0,3).p("AAeAAIg7AA");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#484C4C").s().p("AnLHNQi9i9AAkQQAAkIC8jDIABAAQC8i9EPAAQEKAAC9C9QDDDCgBEJQAAERjCC8IAAAAQi9C9kKgBQkPABi8i9gAokAAQgBDnCgCfQCgCfDlAAQDhAACgifIAAgBQClifgBjmQAAjgikilQigigjhABQjlgBigCgIABAAQigCkAADhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.702)","rgba(204,204,204,0.702)"],[0,1],-59.9,-55,0,-59.9,-55,145.1).s().p("AmFGGQigifABjnQAAjhCgikIgBAAQCgigDlABQDhgBCgCgQCkClAADgQABDmilCfIAAABQigCfjhAAQjlAAigifg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(2,1,0,3).p("AAeAAIg7AA");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(2,1,0,3).p("AAeAAIg7AA");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],83.6,55.2,83.6,-55).s().p("AmFGGQigifABjnQAAjhCgikIAAgBQCfifDlABQDhgBCgCgQCkClAADgQABDmilCfIAAABQigCfjhAAQjlAAigifg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0075BF").s().p("AnLHNQi9i9AAkQQAAkIC8jDIABAAQC8i9EPAAQEKAAC9C9QDDDCgBEJQAAERjCC8IAAAAQi9C9kKgBQkPABi8i9gAokAAQgBDnCgCfQCgCfDlAAQDhAACgifIAAgBQClifgBjmQAAjgikilQigigjhABQjlgBifCfIgBABIABAAQigCkAADhg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.702)","rgba(204,204,204,0.702)"],[0,1],-20.8,-15.9,0,-20.8,-15.9,145.1).s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-38.9,-39);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.shape3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(2,1,0,3).p("AAAAAIAeAAAAAAAIgdAA");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.749)").ss(2,0,0,3).p("AAAgdIAAAdAAAAeIAAge");
	this.shape_1.setTransform(7,7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,4,6,6);


(lib.shape1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0075BF").s().p("AnLHNQi9i9AAkQQAAkIC8jDIABAAQC8i9EPAAQEKAAC9C9QDDDCgBEJQABERjDC8IAAAAIAAAAQi9C8kKAAQkPABi8i9gAmEmFIgBAAIAAAAQigClABDgQgBDnCgCfQCgCfDlAAQDhAACgifIAAgBQClifgBjmQAAjgikilQigigjhABQjlAAifCfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.702)","rgba(204,204,204,0.702)"],[0,1],-59.9,-55,0,-59.9,-55,145.1).s().p("AmFGGQigifABjnQgBjgCgilIAAAAIABAAQCfifDlAAQDhgBCgCgQCkClAADgQABDmilCfIAAABQigCfjhAAQjlAAigifg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.dragMapBox = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Drag map to reposition", "12px Verdana", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 207;
	this.text.setTransform(103.5,0);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,0,1).p("ALaA3IAAhtQAAgygyAAI1PAAQgyAAAAAyIAABtQAAAyAyAAIVPAAQAyAAAAgyg");
	this.shape.setTransform(106,10.6);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211,21.1);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AlxBtQgoAAABgnIAAiLQgBgoAoAAILiAAQApAAAAAoIAACLQAAAngpAAgAmOhFIAACLQgBAdAdAAILlAAQAdAAAAgdIAAiLQAAgdgdgBIrlAAQgdABABAdg");
	this.shape.setTransform(41,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("AjGA2IgBhOQAAgeAeAAIFxAAIAABsg");
	this.shape.setTransform(21,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).s().p("AjHA2IAAhsIFwAAQAeAAAAAeIABBOg");
	this.shape_1.setTransform(61,6.5);

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape_2.setTransform(21,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBjIAAjGIFxAAQAcABAAAdIAACLQAAAdgcAAg");
	this.shape_3.setTransform(61,11);

	// border
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAgBgnIAAiLQABgoAoAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdAAIFyAAIAAAKg");
	this.shape_4.setTransform(20.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjLBtIAAgKIFxAAQAcAAABgdIAAiLQgBgdgcgBIlxAAIAAgKIFwAAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_5.setTransform(61.5,11);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape.setTransform(52,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape_1.setTransform(21,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape.setTransform(21,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(52,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape.setTransform(21,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(52,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).s().p("AiqBjQgdAAAAgdIAAiLQAAgdAdgBIFyAAIAADGg");
	this.shape.setTransform(21,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhsBjIAAjGIC8AAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(52,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhxBtIAAgKIC9AAQAdAAAAgdIAAiLQAAgdgdgBIi9AAIAAgKIC8AAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_3.setTransform(52.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("AjHA2IAAhOQAAgeAeAAIFxAAIAABsg");
	this.shape.setTransform(21,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjGA2IAAhsIFwAAQAdAAABAeIAABOg");
	this.shape_1.setTransform(61,6.5);

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AlyBjQgdAAABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_2.setTransform(41,11);

	// border
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAgBgnIAAiLQABgoAoAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdAAIFyAAIAAAKg");
	this.shape_3.setTransform(20.5,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjLBtIAAgKIFxAAQAcAAABgdIAAiLQgBgdgcgBIlxAAIAAgKIFwAAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_4.setTransform(61.5,11);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape.setTransform(41,11);

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AlxBtQgoAAABgnIAAiLQgBgoAoAAILiAAQApAAAAAoIAACLQAAAngpAAgAmOhFIAACLQgBAdAdAAILlAAQAdAAAAgdIAAiLQAAgdgdgBIrlAAQgdABABAdg");
	this.shape_1.setTransform(41,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("AjHA2IAAhOQAAgeAeAAIFxAAIAABsg");
	this.shape.setTransform(21,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjGA2IAAhsIFwAAQAdAAABAeIAABOg");
	this.shape_1.setTransform(61,6.5);

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).s().p("AiqBjQgdAAABgdIAAiLQgBgdAdgBIFyAAIAADGg");
	this.shape_2.setTransform(21,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBjIAAjGIFxAAQAdABABAdIAACLQgBAdgdAAg");
	this.shape_3.setTransform(61.1,11);

	// border
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAgBgnIAAiLQABgoAoAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdAAIFyAAIAAAKg");
	this.shape_4.setTransform(20.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjLBtIAAgKIFxAAQAcAAABgdIAAiLQgBgdgcgBIlxAAIAAgKIFwAAQAoAAgBAoIAACLQABAngoAAg");
	this.shape_5.setTransform(61.5,11);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],39.5,1.6,39.5,-4.8).s().p("AmOA2IgBhOQAAgeAeAAILiAAQAeAAAAAeIABBOg");
	this.shape.setTransform(41,6.5);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AlyBjQgdAAABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACLQAAAdgdAAg");
	this.shape_1.setTransform(41,11);

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).s().p("AijBtQgoAAAAgnIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcAAIFxAAIAAAKg");
	this.shape_2.setTransform(20.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMBtIAAgKIFyAAQAdAAAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAngoAAg");
	this.shape_3.setTransform(61.5,11);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGQBuIsfAAIAAjbIMfAAg");
	this.shape.setTransform(40,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPBtIAAjaIMfAAIAADag");
	this.shape_1.setTransform(40,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.assetsWorkMap_iconHandOpen = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape30("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.assetsWorkMap_iconHandClosed = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape28("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13,11);


(lib._SWFLoaderStyle__embed_css_Assets_swf___brokenImage_528457471 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,16);


(lib._CursorManagerStyle__embed_css_Assets_swf_mx_skins_cursor_BusyCursor_619767351 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.shape23("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-8.9,19,19.5);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape16("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape12("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.sprite6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape5("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.sprite2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-64.9,130,130);


(lib.BPIgray = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#929497").ss(2,0,1).p("ACTtxIhrBBIgWAKIhQAWIgGAEIhNAoIgDACIgKAEIgDACIgWATIgBABIh4AzIgDABIgwAYIhCASIg1AfIgiAHIgBAAIgCABIgBAAIgBAAIgDABIgBAAIglAJIg3AhIgfAlIguALIg3AfIgPABIgCAAIgCACIgBABIhGA2QgOAMgBABQgCADgCAJQgCAKgCADQgCAFgOATQgFAIgLASQgLAPgLAFQgWAHgLAFIgmANQg/AYghALQgaAIgkAaQgTAOghAOQgxAVgFACIhCAjQgKAFgPAQQgGAGgRAHQgHAEgFAHQgBACgGAMQgCAFgHAJQgFAJgDAFQgHASgOAUQgFAJgHAHQgDADgMAKQgOAMgSAVQgKAMgUAXQgHAHgOAPQgMANgHALQgEAIgJAWQgIAUgHAJQgNASgYAVQgIAGgRAPQgCABgKAEQgIAEgDADQgFAFgFALQgFANgDAFQgEAFgVARQgIAIgRAQQgPAOgNAFQgGACgMACQgMAAgHABQgMABgEAHQgFAGAAAKQgBAGAAAMQgBAKgEAGQgDADgJAIQgLAIgOAOQgIAIgQAPIhCByIhRBSQgRARgoArQglAjggAEIgbADQgOADgIAEQgHAEgKALIiiCyMAkEAQ/IKSFhIBMicIABgCIAJgQIAAgBIARgiIAAgBIACgDIAAgBIAFgJIAAgBIAHgNIACgFIALgVIABgBIAJgSIAAAAIABgDIACgDIABgDIABgBIAKgUIAAgBIATgnIAAAAIACgEIAlhJIAAgBIBDiHIABgBIAdg6IAAAAIAphSIAGgKIABgBIA+hWIAAgBIANgSIABAAIAAgCIABAAIAAAAIAAgBIAKgPIAAgBIARgYIAAAAIABAAIACgCIACgDIAAAAIAAgBIAUgaIAAgBIABAAIAFgFIABAAIABgBIABgBIABgCIAAAAIADgFIABgCIACgEIAAAAIACgEIAegrIABgCIAPgVIAAgBIAGgJIABgBIABgCIAMgSIAAAAIABAAIAAgBIABAAIAAAAIAAgBIAAgBIABgBIAcgpIAAAAIAuhGIACgCIAEgGIAAgBIAegrIAAAAIBPhtIABgBIA6hVIABgBIAegoIACgCIAqg4IAAgBIAbgkIABgBIAZghIABAAIAZgjIABAAIAOgTIABgBIABgBIABgCIAAAAIABgCIACgBIAYgeIABgBIAbgcIADgCIABgCIAAAAIAMgQIACgBIAEgEIABgCIAAAAIAAAAIADgDIABgBIACgCIASgRIABgBIABgBIBJhDIADgCIABgCIADgDIABgBIAPgPIACgCIA6g7IADgCIALgLIABgBIAAAAIALgLIACgCIACgCIAAgBIAKgKIACgBIAPgSIABAAIAAgBIAAAAIA1gzIAAAAIACgCIACgCIAAAAIAAAAIABgBIABgBIABgBIACgCIgFgGIgGgIIgHgIIgHgFIgJgJIgGgHIgGgKIgCgKIACgIIACgDIAFgFIAEgDIABgBIAWgLIAHgDIAKgBIAHgDIABgBIACgDIADgKIAAgTIgCgHIAAgBIgCgDIgEgIIgchMIgCgDIgCgGIgBgCIgBgGIgSgcIgFgDIgHgCIgGgCIgBAAIgNgLIgJgEIgOgJIgBgBIgCgGIAAgFIgBgGIAAgBIABgBIAAgDIACgIIACgDIABgDIACgDIABgDIABgCIAAAAIAAgCIAAgBIgBgCIgBgGIAAgEIABgCIAAAAIAAgDIABgDIABgDIACgFIAAgCIAGgRIABgHIAMggIAOgRIADgDIADgBIAEgCIACgDIAHgHIACgCIABgBIABgBIADgDIABgCIAAgDIACgDIABgFIAEgNIABgCIADgMIACgFIABgFIACgFIACgIIgBgRIAAgCIAAgEIgBgDIgEgKIgEgFIgIgFIgBAAIgCgBIAAgBIgDgBIgKgBIgNAAIgJABIgOAEIgEACIgFACIgEADIgHACIgEAAIgNgEIgEAAIgUgDIgggcIgKgMIgBgDIAAAAIgBgBIAAgBIAAAAIAAAAIgBgBIgGgJIAAAAIgBgBIgJgQIAAAAIAEh3IAJgoIAAgHIgBgCIAAgBIABgDIgBgNIABgHIAAgCIAAgBIAAgCIABgEIACgDIALgTIABgBIAHgKIAAAAQAJgJABgCQAFgHgBgIQgBgGgMgPQgLgOADgKIgBgHIACgEIAAgBIAFgNIACgGIAAgFIgBgIIgHgPIgSgTIgBAAIgWgVIgggTIgRgNIgIgHIgDgGIgGgGIgDgIIgFgPIgBgLIAAgCIABgEIABgCIAEgLIAOgYIAMgNIAFgEIACgCIABgBIACgCIAXgSIAHgJIADgFIAIgMIAFgVIgFgiIAAggIgBgDIAAgEIACgIIABgBIADgMIAAAAIAAgEIADgHIAGgMIALgJIAegHIACAAIACgBIAFAAIAEABIAgABIAiAHIAFAAIALAAIAXgDIACAAIACAAIAkgBIAcgIIAFgFIAIgRIAFgaIABgBIAAgBIAAgBIAAgBIABgBIAAgCIACgKIABgBIAAgCIABgEIAFgTIABgBIAAgDIAGgLIAAAAIABgGIAFgJIANgNIAAAAIACgBIABgCIABgBIABAAIABgBIABgBIAAgBIABAAIAKgJIAIgFIAYgIIAOgNIAEgLIAEgQIAAgBIAHgQIAAgCIABgCIAIgSIAFgPIAAgMIgDgPIgCgEIgBgBIAAgCIgBgCQgIgPAFgVQANgzgLggQgGgPgBgIQgDgNAEgKQAEgKAIgMQAEgIAJgOQAIgOgEgOQgCgEgFgDQgGgDgDgCQgEgDgDgEQgDgGgCgEIgIgKQgCgEgBgIQgBgLgBgCQgDgNAAgFQAAgLAHgFQAMgJAWgEQAMgDAXgEQAbgGA0gPQATgEAGgCQAOgFAIgIQAUgUADgOQACgFgCgIQgDgJgCgEIgGggQgDgYgDgFQgCgFgBgBQAAgCABgEQAGgHACgEQABgCADgJQACgHACgDQAEgFARAAQARABAEgGQADgEgHgXIgFgWQgDgXgCgLQgDgUgIgNQgLgUgUgMQgLgGgWgPQgXgPgLgHQgKgJgHgDQgHgDgMgCQgNgDgGgCQgRgDgngSQgSgHgHgWQgDgIgCgEQgDgGgFgDQgEgDgKAAQgMgBgDgBQgJgDgIgKQgJgMgFgGQgFgGgCgDQgEgFgCgEQgBgCgBgJQgBgGgEgBIgdgOIgDgBIgGgDIgCgBIgBgBIgBgBIgagOIgBgBIAAAAIgCgBIgSgKIgBAAIgJgJQgLgMgGgFQgKgJgLgDQgIgCgKgFQgQgKgBAAQgbgMgNgHQgHgEgJgIQgMgKgEgDQgagRgMgKQgNgNgHgGQgJgGgEgDQgHgFgDgFQgNgagJgLQgRgVgUAOQgIAFgKALQgKAMgGAFIg1A2IgGAFIgQALIg7AYIgGACIgGABIgBAAIgOAEIgGAEIgCABIgQACIgZASIgJAJIgCADIgBADIAAADIAEARIgBAEIgBACIgBAGIADAKIgBADIgDAFIgJAKIghAVIgLAFIgNACIgIAFIgFAIIAAABIgCABIgKAAIgDAAIgCAAIgCAAIgGADIgMAIIgHAFIgaAQIgpAgIgLAMIgEAHIgCAGIAAABIAAABIgBADIgBABIgBACIAAAAIgGAIIgBAEIAAAFIAAABIgCATIgJAkIhTCBIAfAgIABABIAfAfIgCABIggAaIgRARIgIALIgCAEIAAACIgFAPIgDAGIgIAKIgEADIgGAEIhaBhIgUBXIgfAlIgQAkIgXAaIgVAGIgPAQIAAABIgDACIAAAAIAAABIgDACIAAABIgBAAIgbAdIgEABIgFACIgEADIhlA2IhGBQIgHAFIgDAEIgPAUIgBABIi2CQIgBACIgBAAIgEAEIgvAmIgIAOIi6BMg");
	this.shape.setTransform(238,244.4);

	this.instance = new lib.mask();
	this.instance.setTransform(238,244.5,1,1,0,0,0,238,244.5);

	this.addChild(this.instance,this.shape);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,488.9);


(lib.BPIcolor = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#929497").ss(2,0,1).p("Ai4rHIh4AyIgDABIgCABIguAXIhCASIg1AfIgiAIIgBAAIgCAAIgBAAIgBABIgDAAIgBABIglAIIg3AhIgfAlIguAMIgtAZIgKAFIgOABIgDAAIgCACIgBABIhGA2QgBABgHAFQgFAEgCADQgCAEgCAIQgCAKgCAEQgCAFgFAHQgDAEgGAHQgFAIgLASQgLAPgLAFQgWAHgLAFQgHADgfALQg/AYghAKQgaAIgkAaQgTAPghANQgzAWgDACQgSAIgwAaQgKAGgPAQQgGAFgRAHQgHAEgFAHQAAABgHANQgCAFgHAJQgFAJgDAGQgGANgPAYQgIANgTAQQgOAMgSAVQgKAMgUAXQgHAIgOAOQgNANgGALQgEAIgJAXQgIAUgHAJQgMARgZAVQgIAGgRAPQgCACgKADQgIAEgDADQgFAFgFALQgFANgDAFQgEAFgHAHQgFAEgJAHQgIAHgRAQQgPAOgNAFQgIADgKABQgMABgHAAQgMACgEAGQgFAGAAAKQgBAGAAAMQgBAKgEAGQgDAEgJAHQgLAIgmAmIhCByIhRBRQgRARgoArQglAjggAEIgbAEQgPACgHAEQgHAEgKALIiiCyMAkEAQ/IKSFhIAxhnIABgBIAkhGIAAgBIARgiIAAgBIAAAAIACgDIAAgBIAFgIIAAgCIAGgNIAOgZIALgXIACgDIACgEIABgBIAJgTIAAAAIATgnIAAgBIACgDIAIgQIABgBIAcg5IAAgBIBDiHIABAAIAAgCIAdg4IAAgBIAphSIAGgJIABgBIBLhpIABgCIABgBIAAgBIAKgPIAAAAIARgYIAAgBIABAAIAAgBIABAAIAAgBIABAAIACgDIAAAAIAAAAIAUgbIABgBIAFgEIABgBIABgBIAAAAIABgBIABgCIAAAAIABgBIACgEIABgBIACgEIAAgBIACgDIAegsIAAgBIABgBIAPgVIAAgBIAGgJIABgBIABgCIAMgSIABAAIAAAAIAAAAIABgBIAAgBIABgBIBQh4IAAgBIAegrICKjCIAAgBIABAAIAAgBIAegnIACgCIADgEIAng1IAAgBIAbgkIABgBIAZggIABgBIAZgiIABgBIAOgTIABAAIABgCIABgCIABgBIACgCIAYgeIADgDIACgCIAbgcIALgPIADgCIACgCIABgBIACgDIAAAAIAAAAIADgDIABgBIAFgEIAGgHIAJgIIABAAIABgCIBMhFIABgCIANgNIACgCIAGgGIACgCIABgBIAAgBIA3g3IADgCIAAgBIAXgWIACgCIACgCIAAgBIABAAIAAAAIABgBIAFgFIAAAAIABgBIAAAAIATgWIA9g6IAAgBIACgCIgFgGIgNgQIgHgFIgJgIIgGgIIgGgJIgCgLIACgHIACgEIAFgFIAEgDIABAAIAAAAIAFgEIAYgKIAKgCIAHgDIAAAAIABgBIACgDIADgKIAAgSIgCgIIgCgEIgEgIIgYhDIgEgJIgCgDIgCgGIgBgCIgBgFIgNgWIgFgHIgFgDIgHgBIgGgDIgGgFIgfgSIgBgCIgCgGIAAgFIgBgGIAAAAIABgCIAAgDIACgIIACgDIABgCIACgDIABgDIABgCIAAgBIAAgCIAAgBIgBgCIgBgGIAAgDIABgCIAAgBIAAgDIABgDIABgDIACgFIAMgoIAHgSIAEgHIAKgKIADgDIAHgDIAHgHIACgCIACgDIABgBIABgBIADgDIABgCIAAgDIACgDIACgLIADgHIABgCIACgJIADgIIABgFIADgHIAAAAIAAgCIAAgBIABgCIAAgMIgBgEIAAgCIAAgBIAAgFIgBgDIgEgKIgEgFIgIgFIgDgBIAAAAIgDgBIgHgCIgHAAIgBAAIgDAAIgOABIgLAEIgDAAIgEADIgFABIgEADIgFABIgCABIgEAAIgBAAIgCAAIgKgDIgEgBIgDAAIgRgCIgggdIgKgMIgCgEIAAAAIAAgBIAAAAIgBAAIgCgFIgEgEIAAgBIAAAAIgKgRIAAAAIAEh2IAJgpIAAgGIgBgDIABgEIgBgMIABgHIAAgDIAAgBIAAgCIABgDIACgEIAHgNIAEgFIABgBIABgDIAGgHIAAAAQAJgKABgCQAFgGgBgIQgBgHgMgPQgLgNADgLIgBgHIACgEIAAgBIACgFIAFgOIAAgFIgBgIIgHgOIgBgCIgognIgggSIgRgOIgIgHIgDgGIgEgEIgCgCIgDgIIgFgPIgBgLIAAgCIAGgRIAOgXIAMgOIAFgEIADgCIACgCIAXgTIAHgJIALgRIAFgVIgFgiIAAggIgBgDIAAgEIACgIIABAAIADgNIAAgDIADgHIACgFIAEgIIALgJIATgFIALgCIACAAIAbAAIABABIAHAAIAEAAIAEAAIAiAHIAQABIAXgDIACgBIAkgBIACAAIAcgIIAFgEIAIgSIAFgaIABgBIAAgBIAAgBIAAgBIABgBIAAgBIACgKIABgCIAAgBIABgEIAFgUIABgBIAAgDIAGgKIAAgBIABgGIAFgIIAIgJIAAgBIABAAIAEgDIAAgBIACgBIADgDIABgBIABgBIAAAAIALgKIAIgFIAYgHIADgDIAKgKIABgBIAEgLIAEgQIAAgBIAHgQIAAgCIABgBIAIgTIAFgPIAAgMIgDgOIgCgFIgBgBIgBgDQgIgPAFgVQANg0gLgfQgGgQgBgHQgDgNAEgLQAEgKAIgMQAEgHAJgOQAJgPgFgNQgCgEgFgEQgGgDgDgCQgEgCgDgFQgDgGgCgEQgGgGgCgEQgCgEgBgIQgBgKgBgDQgDgNAAgFQAAgLAHgFQAMgJAWgEQAMgDAXgEQAbgGA0gPQATgEAGgCQAOgFAIgIQATgTAEgOQACgGgCgIQgDgJgCgEIgGggQgCgVgEgIQgCgEgBgCQAAgBABgEQAGgHACgEQABgDADgIQACgHACgDQAEgGARAAQARAAAEgFQACgEgGgWIgFgWQgDgYgCgLQgDgUgIgNQgLgTgUgMQgsgfgXgNQgKgJgHgCQgHgDgMgDQgNgDgGgBQgTgFglgQQgSgIgHgWQgDgIgCgEQgDgGgFgDQgEgCgKgBQgLgBgEgBQgJgDgIgKQgJgMgFgFQgFgGgCgDQgEgGgCgEQgBgCgBgIQgBgHgEgBIgTgJIgFgCIgBAAIgNgHIgCgBIgBAAIgBgBIgVgMIgFgDIgBAAIAAgBIgCAAIgSgKIgBgBIgJgJQgLgMgGgFQgKgJgLgCQgHgCgLgGQgPgJgCgBQgbgMgNgHQgHgDgJgJQgMgKgEgDQgagRgMgKQgNgNgHgGQgJgGgEgDQgHgFgDgFQgNgagJgLQgRgVgUAOQgIAFgKALQgKAMgGAGIg1A1IgGAFIgQALIgeAMIgBABIgUAIIgBAAIgBAAIgIAEIgEABIgGABIgBABIgLACIgDABIgGAEIgCABIgQADIgXAQIgLAKIgCADIgBADIAAADIAEARIgBAEIgBADIgBAFIABAGIACAEIgBADIgDAGIgJAJIgRALIgCABIgOAJIgLAFIgNACIgFADIgCACIgBAAIgFAIIAAABIgCABIgFABIgFAAIgDgBIgCABIgCAAIgDABIgDABIg1AiIgGAGIgGAEIAAAAIgRAOIgDADIgBAAIgLAMIgCADIAAAAIgBACIgBADIgCAFIAAABIgBAEIgBACIgBABIAAAAIgGAJIgBADIAAAFIAAABIAAAAIgCAUIgJAjIhTCBIAcAeIABAAIAAABIACACIABAAIAfAfIgiAbIgVAXIgGAKIgDAKIgFANIgIAJIgEAEIgGADIhaBiIgUBWIgfAlIgQAlIgXAZIgVAGIgQARIAAABIAAAAIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIgBACIAAAAIgBAAIAAABIgcAdIgJADIgEADIhlA3IhGBQIgHAEIgPATIgBABIgCAEIgBABIiwCMIgCACIgFAEIgBAAIgBABIAAABIgyAoIgIAOIivBIIgLAFIgQAbIhzBFIgOAGIhQAXIhjAzIgWAUg");
	this.shape.setTransform(238,244.4);

	this.instance = new lib.mask_1();
	this.instance.setTransform(238,244.4,1,1,0,0,0,238,244.4);

	this.addChild(this.instance,this.shape);
	this.cache(0,0,476,488.9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,476,488.9);


(lib.flcontrolsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  
	// label
	this.instance = new cjs.Text("see job", "16px Arial", "#666666" ); 
	this.instance.setTransform(25,12);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

  // button background
	this.instance_1 = new lib.Button_upSkin();
	this.instance_1.setTransform(10,10);


	this.instance_2 = new lib.Button_overSkin();
	this.instance_2.setTransform(10,10);


	this.instance_3 = new lib.Button_downSkin();
	this.instance_3.setTransform(10,10);


	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1));


}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Disabled_559724534 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape21("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite17();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Up_1324487083 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape3("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite13();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Disabled_1027224728 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape18("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite17();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Up_873957297 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape14("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite13();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Over_1757565760 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape10("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite2();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Down_1758022406 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape8("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite6();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Down_2012289948 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape3("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite6();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Over_2009850830 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape3("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite2();
	this.instance_1.setTransform(7,7,0.1,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.ZoomOutButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Up_873957297();
	this.instance.setTransform(6.8,6.8,1,1,0,0,0,6.8,6.8);

	this.instance_1 = new lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Over_1757565760();
	this.instance_1.setTransform(6.8,6.8,1,1,0,0,0,6.8,6.8);

	this.instance_2 = new lib.Pins__embed_css_icons_pinsIcons_swf_MinusButton_Down_1758022406();
	this.instance_2.setTransform(6.8,6.8,1,1,0,0,0,6.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.ZoomInButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Up_1324487083();
	this.instance.setTransform(6.8,6.8,1,1,0,0,0,6.8,6.8);

	this.instance_1 = new lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Over_2009850830();
	this.instance_1.setTransform(6.8,6.8,1,1,0,0,0,6.8,6.8);

	this.instance_2 = new lib.Pins__embed_css_icons_pinsIcons_swf_PlusButton_Down_2012289948();
	this.instance_2.setTransform(6.8,6.8,1,1,0,0,0,6.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,13,13);


(lib.ZoomControlPanel = function() {
	this.initialize();

	// slider
	this.zoomSlider = new lib.sliderButton();
	this.zoomSlider.setTransform(0,162);  //max: 162  min:18  max - min = 144, 
	new cjs.ButtonHelper(this.zoomSlider, 0, 1, 2, false, new lib.sliderButton(), 3);

	// zoom out btn
	this.ZoomOut = new lib.ZoomOutButton();
	this.ZoomOut.setTransform(3,188);
	new cjs.ButtonHelper(this.ZoomOut, 0, 1, 2, false, new lib.ZoomOutButton(), 3);

	// zoom in btn
	this.ZoomIn = new lib.ZoomInButton();
	this.ZoomIn.setTransform(3,3);
	new cjs.ButtonHelper(this.ZoomIn, 0, 1, 2, false, new lib.ZoomInButton(), 3);

	// progress line
	this.instance_3 = new lib.progress_line("synched",0);
	this.instance_3.setTransform(10,102,1,1,0,0,0,2,74);

	// zoom panel
	this.instance_4 = new lib.ZoomControlBox("synched",0);
	this.instance_4.setTransform(10,105,1,1,0,0,0,10,105);
  this.instance_4.alpha = 0.5

	this.addChild(this.instance_4,this.instance_3,this.ZoomIn,this.ZoomOut,this.zoomSlider);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,210);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;