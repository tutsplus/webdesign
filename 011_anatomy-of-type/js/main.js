jQuery(document).ready(function($) {

    $('#ian-yates-slider1').slider({
        value:1,
        min: .25,
        max: 6,
        step: .25,
        slide: function( event, ui ) {
            $('#ian-yates-font_size').html(ui.value + ' em');
            $('.ian-yates-box').css('ian-yates-font-size', (ui.value + 'em'));
        }
    });
    $('#ian-yates-font_size').val($('#ian-yates-slider1').slider('value') + ' em');
    
    
    $('#ian-yates-slider2').slider({
        value:1.5,
        min: .6,
        max: 3,
        step: .1,
        slide: function( event, ui ) {
            $('#ian-yates-line_height').html(ui.value + ' em');
            $('.ian-yates-box').css('ian-yates-line-height', (ui.value + 'em'));
        }
    });
    $('#ian-yates-line_height').val($('#ian-yates-slider2').slider('value') + ' em');
    
    
    $('#ian-yates-slider3').slider({
        value:0,
        min: -.5,
        max: .5,
        step: .01,
        slide: function( event, ui ) {
            $('#ian-yates-letter_spacing').html(ui.value + ' em');
            $('.ian-yates-box').css('ian-yates-letter-spacing', (ui.value + 'em'));
        }
    });
    $('#ian-yates-letter_spacing').val($('#ian-yates-slider3').slider('value') + ' em');

   


    var aAligns = new Array('', 'left', 'right', 'center', 'justify');
    $('#ian-yates-slider4').slider({
        value:1,
        min: 1,
        max: 4,
        step: 1,
        slide: function(event, ui) {
            var sTextAlign = aAligns[ui.value];
            $('#ian-yates-text_align').val(sTextAlign);
            $('.ian-yates-box').css('ian-yates-text-align', sTextAlign);
        }
    });
    $('#ian-yates-text_align').val(aAligns[$('#ian-yates-slider4').slider('value')]);

});