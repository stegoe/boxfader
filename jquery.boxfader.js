;(function($, undefined){
'use strict';

// Plugin names
var pn = 'boxfader',
	namespace = pn;

function boxFade(frame,o,nxt,total) {
	if(nxt==total){nxt=0;} // Restart Loop?
	var ni = $(frame).find(o.element).eq(nxt); // Next Image?
	
	// Get next image in position
	ni.css({'opacity':'0','z-index':'200','display':'block'});
	
	// Fade (with delay)
	$(ni).delay(o.duration).fadeTo(o.speed, 1, function(){
		// Arrange all images
		$(frame).find(o.element).each(function(i,e){
			if(i!=nxt){$(e).css({'z-index':'100','display':'none'});}
		});
		ni.css({'z-index':'100'});
		
		// Start next
		boxFade(frame,o,nxt+1,total);
	});

} // boxFade()


// jQuery Plugin Extension
$.fn[pn] = function( o, returnInstance ){
	
	// Options & Defaults
	o = $.extend({},$.fn[pn].d,o);
	
	// All Elements
	this.each(function(i,e){
		// If no element to fade is set, get first one
		if(o.element==''){o.element=$(e).children().first().prop('tagName');}
		var mh=0; // Get the heighest img
		// Sort (and hide) all images, put first on top (and visible, of course)
		$(e).find(o.element).each(function(j,img){
			if(j==0){$(img).css({'z-index':'200','display':'block','position':'absolute'});}
			else    {$(img).css({'z-index':'100','display':'none','position':'absolute'});}
			if(mh<img.height){mh=img.height;}
		});
		$(e).css({'height':mh}); // Set parent-container to max img height
		boxFade(e,o,1,$(e).find(o.element).length); // Start Fade
	});

	return this;
};

// Default Options
$.fn[pn].d = {speed:1000,duration:3500,element:''}

}(jQuery));

