jQuery(function ($) {

	//vars
	var $slider1 = $('#ian-yates-slider1');
	var $slider2 = $('#ian-yates-slider2');
	var $slider3 = $('#ian-yates-slider3');
	var $slider4 = $('#ian-yates-slider4');

	var $result1 = $('#ian-yates-result1');
	var $result2 = $('#ian-yates-result2');
	var $result3 = $('#ian-yates-result3');
	var $result4 = $('#ian-yates-result4');
	
	var $content1 = $('.ian-yates-content1');
	var $content2 = $('.ian-yates-content2');
    
    //slider1 (font size)
     $slider1.slider({
        value:1,
        range: "min",
        min: .25,
        max: 3,
        step: .25,
        slide: function( event, ui ) {
            $result1.html(ui.value + 'em');
            $content1.css('font-size', (ui.value + 'em'));
        }
    });
    $result1.val($slider1.slider('value') + 'em');
    
    //slider2 (line height)
    $slider2.slider({
        value:1.5,
        range: "min",
        min: .6,
        max: 3,
        step: .1,
        slide: function( event, ui ) {
            $result2.html(ui.value + 'em');
            $content1.css('line-height', (ui.value + 'em'));
        }
    });
    $result2.val($slider2.slider('value') + 'em');
    
    //slider1 (letter spacing)
    $slider3.slider({
        value:0,
        range: "min",
        min: -.5,
        max: .5,
        step: .01,
        slide: function( event, ui ) {
            $result3.html(ui.value + 'em');
            $content2.css('letter-spacing', (ui.value + 'em'));
        }
    });
    $result3.val($slider3.slider('value') + 'em');
    
    //slider1 (word spacing)
    $slider4.slider({
        value:0,
        range: "min",
        min: 0,
        max: 2,
        step: .01,
        slide: function( event, ui ) {
            $result4.html(ui.value + 'em');
            $content2.css('word-spacing', (ui.value + 'em'));
        }
    });
    $result4.val($slider4.slider('value') + 'em');


});