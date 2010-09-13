Gradientor
==========

Gradientor is MooTools plugin which will color selected elements in gradient.
All you have to do is to choose elements and set first and last color in gradient.
Also, you can set CSS property on which gradient color should be applied.

![Screenshot](http://workshop.rs/projects/gradientor/gradientor.png)

How to use
----------

	window.addEvent('domready', function() {
		var gr = new Gradientor({
				selector: $$('b'),
				color_start: 'FE3627', 
				color_end: '590512',
				prop: 'color'
		});	
	})

	
Note that colors are in HEX format, without #.

Gradientor options
------------------

You should always set selector on color gradient should be applied.

	selector: $$('b') // will apply gradients to b tags
	
Other options are optional (listis shown default values):

		color_start: 'ffffff', // first color in gradient
		color_end: '000000', // last color in gradient
		prop: 'background-color' // CSS property on which we want to apply gradient
	
Screenshots
-----------

![Screenshot 1](http://workshop.rs/projects/gradientor/gradientor.png)	
		
More info
---------
<a href="http://workshop.rs">workshop.rs</a>