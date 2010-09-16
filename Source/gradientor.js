/*
---
description: Gradientor - Add gradient to elements

license: MIT-style

authors:
- Ivan Lazarevic

requires:
- core

provides: 
- gradientor
...
*/

var Gradientor = new Class({
	
	Implements: [Options],
	
	options:{
		color_start: 'ffffff',
		color_end: '000000',
		prop: 'background-color'
	},
	
	initialize: function(options){
		
		this.setOptions(options);
		var opts = this.options;
		
		var r = g = b = 0;
		
		
		r = sr = parseInt(opts.color_start.substring(0,2),16);
		g = sg = parseInt(opts.color_start.substring(2,4),16);
		b = sb = parseInt(opts.color_start.substring(4,6),16);

		er = parseInt(opts.color_end.substring(0,2),16);
		eg = parseInt(opts.color_end.substring(2,4),16);
		eb = parseInt(opts.color_end.substring(4,6),16);		

		$$(opts.selector).setStyle(opts.prop , 'rgb('+sr+','+sg+','+sb+')');			
		
		steps = opts.selector.length;
		
	
		$each( opts.selector, function(item, i, obj){ 
			
			r -= parseInt((sr - er) / steps);
			g -= parseInt((sg - eg) / steps);
			b -= parseInt((sb - eb) / steps);

			if(i > 0 || steps == 1){
				$(item).setStyle(opts.prop , 'rgb('+r+','+g+','+b+')');	
			}	
			
		});
		
	}
	
});