jQuery(function(e){var t=e("#ian-yates-slider1"),n=e("#ian-yates-slider2"),r=e("#ian-yates-slider3"),i=e("#ian-yates-slider4"),s=e("#ian-yates-result1"),o=e("#ian-yates-result2"),u=e("#ian-yates-result3"),a=e("#ian-yates-result4"),f=e(".ian-yates-content1"),l=e(".ian-yates-content2");t.slider({value:1,range:"min",min:.25,max:3,step:.25,slide:function(e,t){s.html(t.value+"em");f.css("font-size",t.value+"em")}});s.val(t.slider("value")+"em");n.slider({value:1.5,range:"min",min:.6,max:3,step:.1,slide:function(e,t){o.html(t.value+"em");f.css("line-height",t.value+"em")}});o.val(n.slider("value")+"em");r.slider({value:0,range:"min",min:-0.5,max:.5,step:.01,slide:function(e,t){u.html(t.value+"em");l.css("letter-spacing",t.value+"em")}});u.val(r.slider("value")+"em");i.slider({value:0,range:"min",min:0,max:2,step:.01,slide:function(e,t){a.html(t.value+"em");l.css("word-spacing",t.value+"em")}});a.val(i.slider("value")+"em")});