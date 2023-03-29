jQuery(function() {
    
     jQuery('#ian_yates_slider1').slider({
        value:1,
        min: .25,
        max: 6,
        step: .25,
        slide: function( event, ui ) {
            jQuery('#ian_yates_font_size').html(ui.value + ' em');
            jQuery('.ian_yates_box').css('font-size', (ui.value + 'em'));
        }
    });
    jQuery('#ian_yates_font_size').val(jQuery('#ian_yates_slider1').slider('value') + ' em');
    
    
    jQuery('#ian_yates_slider2').slider({
        value:1.5,
        min: .6,
        max: 3,
        step: .1,
        slide: function( event, ui ) {
            jQuery('#ian_yates_line_height').html(ui.value + ' em');
            jQuery('.ian_yates_box').css('line-height', (ui.value + 'em'));
        }
    });
    jQuery('#ian_yates_line_height').val(jQuery('#ian_yates_slider2').slider('value') + ' em');
    
    
    jQuery('#ian_yates_slider3').slider({
        value:0,
        min: -.5,
        max: .5,
        step: .01,
        slide: function( event, ui ) {
            jQuery('#ian_yates_letter_spacing').html(ui.value + ' em');
            jQuery('.ian_yates_box2').css('letter-spacing', (ui.value + 'em'));
        }
    });
    jQuery('#ian_yates_letter_spacing').val(jQuery('#ian_yates_slider3').slider('value') + ' em');
    
    
    jQuery('#ian_yates_slider4').slider({
        value:0,
        min: 0,
        max: 2,
        step: .01,
        slide: function( event, ui ) {
            jQuery('#ian_yates_word_spacing').html(ui.value + ' em');
            jQuery('.ian_yates_box2').css('word-spacing', (ui.value + 'em'));
        }
    });
    jQuery('#ian_yates_word_spacing').val(jQuery('#ian_yates_slider4').slider('value') + ' em');


});