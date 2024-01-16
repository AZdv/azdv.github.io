js_local_vars = {
	"protocol":"",
	"dropdown_goto":"Go to...",
	"page_smoothHeight":"false",
	"flex_smoothHeight":"false",
	"avada_rev_styles":"0",
	"custom_icon_image_retina":"",
	"disable_mobile_animate_css":"1",
	"header_sticky":"1",
	"ipad_potrait":"0",
	"is_responsive":"1",
	"layout_mode":"wide",
	"logo_alignment":"Left",
	"submenu_slideout":"1",
	"sidenav_behavior":"Hover",
	"site_width":"940px",
	"slideshow_autoplay":"1",
	"slideshow_speed":"7000",
	"status_vimeo":"0",
	"status_yt":"0",
	"mobile_menu_design":"classic"
};

/**
 * User agent
 * http://cssuseragent.org/
 */
var cssua=function(n,l,p){var q=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,r=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,s=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,t=/\bsilk-accelerated=true\b/,u=/\bfluidapp\b/,v=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,w=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
x=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,k={parse:function(b,d){var a={};d&&(a.standalone=d);b=(""+b).toLowerCase();if(!b)return a;for(var c,e,g=b.split(/[()]/),f=0,k=g.length;f<k;f++)if(f%2){var m=g[f].split(";");c=0;for(e=m.length;c<e;c++)if(q.exec(m[c])){var h=RegExp.$1.split(" ").join("_"),l=RegExp.$2;if(!a[h]||parseFloat(a[h])<parseFloat(l))a[h]=l}}else if(m=g[f].match(r))for(c=0,e=m.length;c<e;c++)h=m[c].split(/[\/\s]+/),h.length&&"mozilla"!==h[0]&&(a[h[0].split(" ").join("_")]=h.slice(1).join("-"));
w.exec(b)?(a.mobile=RegExp.$1,s.exec(b)&&(delete a[a.mobile],a.blackberry=a.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?a.mobile="blackberry":"0.0.1"===a.version&&(a.blackberry="7.1.0.0"))):v.exec(b)?a.desktop=RegExp.$1:x.exec(b)&&(a.game=RegExp.$1,c=a.game.split(" ").join("_"),a.version&&!a[c]&&(a[c]=a.version));a.intel_mac_os_x?(a.mac_os_x=a.intel_mac_os_x.split("_").join("."),delete a.intel_mac_os_x):a.cpu_iphone_os?(a.ios=a.cpu_iphone_os.split("_").join("."),delete a.cpu_iphone_os):a.cpu_os?
(a.ios=a.cpu_os.split("_").join("."),delete a.cpu_os):"iphone"!==a.mobile||a.ios||(a.ios="1");a.opera&&a.version?(a.opera=a.version,delete a.blackberry):t.exec(b)?a.silk_accelerated=!0:u.exec(b)&&(a.fluidapp=a.version);if(a.applewebkit)a.webkit=a.applewebkit,delete a.applewebkit,a.opr&&(a.opera=a.opr,delete a.opr,delete a.chrome),a.safari&&(a.chrome||a.crios||a.opera||a.silk||a.fluidapp||a.phantomjs||a.mobile&&!a.ios?delete a.safari:a.safari=a.version&&!a.rim_tablet_os?a.version:{419:"2.0.4",417:"2.0.3",
416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(a.safari,10)]||a.safari);else if(a.msie||a.trident)if(a.opera||(a.ie=a.msie||a.rv),delete a.msie,a.windows_phone_os)a.windows_phone=a.windows_phone_os,delete a.windows_phone_os;else{if("wpdesktop"===a.mobile||"xblwp7"===a.mobile||"zunewp7"===a.mobile)a.mobile="windows desktop",a.windows_phone=9>+a.ie?"7.0":10>+a.ie?"7.5":"8.0",delete a.windows_nt}else if(a.gecko||a.firefox)a.gecko=a.rv;a.rv&&delete a.rv;a.version&&delete a.version;return a},
format:function(b){var d="",a;for(a in b)if(a&&b.hasOwnProperty(a)){var c=a,e=b[a],c=c.split(".").join("-"),g=" ua-"+c;if("string"===typeof e){for(var e=e.split(" ").join("_").split(".").join("-"),f=e.indexOf("-");0<f;)g+=" ua-"+c+"-"+e.substring(0,f),f=e.indexOf("-",f+1);g+=" ua-"+c+"-"+e}d+=g}return d},encode:function(b){var d="",a;for(a in b)a&&b.hasOwnProperty(a)&&(d&&(d+="\x26"),d+=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b[a]));return d}};k.userAgent=k.ua=k.parse(l,p);l=k.format(k.ua)+
" js";n.className=n.className?n.className.replace(/\bno-js\b/g,"")+l:l.substr(1);return k}(document.documentElement,navigator.userAgent,navigator.standalone);


(function( jQuery ) {

	"use strict";

	// init sticky header
	jQuery.fn.init_sticky_header = function() {

		var sticky_mobile_menu_padding;

		var sticky_header_height = 65;
		var sticky_top = jQuery('.sticky-header').css('top');
		var sticky_start = sticky_top.replace('px','') - 55;
		var logo = '.sticky-header .logo img.normal_logo';
		var not_logo = '.sticky-header .logo img.retina_logo';
		var orig_logo_height, orig_logo_width, logo_max_width, width_ratio, calc_width, calc_height,
			logo_height, logo_line_height, logo_width, logo_margin_top	= 0;

		var anchor_scrolling = 0;
		jQuery('.sticky-header').css('top', sticky_start+'px');
		jQuery('.init-sticky-header').waypoint(function(direction) {
			if(direction === "down") {

				// one page anchor page load scrolling
				var anchor = window.location.hash.toString();

				if( anchor.length > 1 && jQuery(anchor).length && ! anchor_scrolling ) {
					jQuery('html, body').animate({
						scrollTop: jQuery(anchor).offset().top - 65 + 1
					}, 350, 'easeInOutExpo');
					anchor_scrolling = 1;
				}

				jQuery('.sticky-header').show();
				jQuery('.sticky-header').animate({
					height: sticky_header_height + 3 + 'px',
					top: sticky_top
					}, 500 );
				jQuery('.sticky-shadow').animate({
					height: sticky_header_height  + 'px',
					top: sticky_top
				}, 500 );


				if( jQuery('#header .retina_logo').is(':visible')) {
					logo = '.sticky-header .logo img.retina_logo';
					not_logo ='.sticky-header .logo img.normal_logo';
				} else {
					logo = '.sticky-header .logo img.normal_logo';
					not_logo = '.sticky-header .logo img.retina_logo';
				}

				orig_logo_height = jQuery(logo).height();
				orig_logo_width = jQuery(logo).width();
				logo_max_width = jQuery(logo).data("max-width");

				calc_width = orig_logo_width;
				calc_height = orig_logo_height;
				if (logo_max_width > 0) {
					width_ratio = logo_max_width / orig_logo_width;
					calc_width = logo_max_width;
					calc_height = orig_logo_height * width_ratio;
				}

				if (calc_height > 55) {
					logo_height = "55px";
					logo_line_height = "55px";
					logo_width =  55 / orig_logo_height * orig_logo_width;
					logo_margin_top = "5px";
				} else {
					logo_height = calc_height+"px";
					logo_line_height = calc_height+"px";
					logo_width = calc_width;
					logo_margin_top = (65 - calc_height) / 2;
				}

				sticky_mobile_menu_padding = logo_width+25;

				jQuery('body #header-sticky.sticky-header .sticky-shadow .mobile-nav-holder').css('padding-left', sticky_mobile_menu_padding+"px");
				logo_width = logo_width+"px";

				//IE8 quirks
				if (jQuery('.no-svg').length >= 1) {
					jQuery(logo).animate({
						height: logo_height,
						'line-height': logo_line_height,
						'max-width': logo_width,
						'margin-top': logo_margin_top
					}, 500 );
					jQuery(not_logo).css('height', logo_height).css('line-height', logo_line_height).css('max-width', logo_width).css('margin-top', logo_margin_top);
					jQuery(logo).css('display', '');
				} else {
					jQuery(logo).animate({
						height: logo_height,
						'line-height': logo_line_height,
						width: logo_width,
						'margin-top': logo_margin_top
					}, 500 );
					jQuery(not_logo).css('height', logo_height).css('line-height', logo_line_height).css('width', logo_width).css('margin-top', logo_margin_top);
					jQuery(logo).css('display', '');
				}

				jQuery('.sticky-header #sticky-nav ul.menu > li > a').animate({
					height: sticky_header_height + 'px',
					'line-height': sticky_header_height + 'px'
				}, 500 );


				jQuery('.sticky-header').addClass('sticky');
				jQuery('#small-nav').css('visibility', 'hidden');
		 } else if(direction === "up") {
				jQuery('.sticky-header').css( 'height', '' );
				jQuery('.sticky-shadow').css( 'height', '' );

				jQuery('#header-sticky .retina_logo').css( 'height', orig_logo_height );
				jQuery('#header .retina_logo, #header-sticky .retina_logo').css( 'width', orig_logo_width );
				jQuery('#header-sticky .retina_logo').css( 'margin-top', '' );
				jQuery('#header .normal_logo, #header-sticky .normal_logo').css( 'height', '' );
				jQuery('#header .normal_logo, #header-sticky .normal_logo').css( 'width', '' );
				jQuery('#header-sticky .retina_logo').css( 'margin-top', '' );

				jQuery(logo+','+not_logo).css( 'line-height', '' );
				jQuery(logo+','+not_logo).css( 'padding-top', '' );
				jQuery(logo+','+not_logo).css( 'max-width', '' );
				jQuery(logo+','+not_logo).css( 'margin-top', '' );

				jQuery('.sticky-header #sticky-nav ul.menu > li > a').css( 'height', '' );
				jQuery('.sticky-header #sticky-nav ul.menu > li > a').css( 'line-height', '' );

				jQuery('.sticky-header').removeClass( 'sticky' );
				jQuery('.sticky-header').hide();
				jQuery('#small-nav').css('visibility', 'visible');

				jQuery('.sticky-header .mobile-nav-holder #mobile-nav').css( 'display', 'none' );
			 }
		});
	};
	// Waypoint
	jQuery.fn.init_waypoint = function() {
		if( jQuery().waypoint ) {


			// Progressbar
			jQuery( '.fusion-progressbar' ).not('.fusion-modal .fusion-progressbar').waypoint( function() {
				jQuery(this).fusion_draw_progress();
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});

			// CSS Animations
			jQuery('.fusion-animated').waypoint(function() {
				jQuery(this).css('visibility', 'visible');

				// this code is executed for each appeared element
				var animation_type = jQuery(this).data('animationtype');
				var animation_duration = jQuery(this).data('animationduration');

				jQuery(this).addClass('animated-	'+animation_type);

				if(animation_duration) {
					jQuery(this).css('-moz-animation-duration', animation_duration+'s');
					jQuery(this).css('-webkit-animation-duration', animation_duration+'s');
					jQuery(this).css('-ms-animation-duration', animation_duration+'s');
					jQuery(this).css('-o-animation-duration', animation_duration+'s');
					jQuery(this).css('animation-duration', animation_duration+'s');
				}
			},{ triggerOnce: true, offset: 'bottom-in-view' });
		}
	};

	// animate progress bar
	jQuery.fn.fusion_draw_progress = function() {
		var progressbar = jQuery( this );
		if ( jQuery( 'html' ).hasClass( 'lt-ie9' ) ) {
			progressbar.css( 'visibility', 'visible' );
			progressbar.each( function() {
				var percentage = progressbar.find( '.progress' ).attr("aria-valuenow");
				progressbar.find( '.progress' ).css( 'width', '0%' );
				progressbar.find( '.progress' ).animate( {
					width: percentage+'%'
				}, 'slow' );
			} );
		} else {
			progressbar.find( '.progress' ).css( "width", function() {
				return jQuery( this ).attr( "aria-valuenow" ) + "%";
			});
		}
	};
})( jQuery );

jQuery(window).load(function() {
	// Static layout
	if( js_local_vars.is_responsive == '0' ) {
		var column_classes = ['col-sm-0', 'col-sm-1', 'col-sm-2', 'col-sm-3', 'col-sm-4', 'col-sm-5', 'col-sm-6', 'col-sm-7', 'col-sm-8', 'col-sm-9', 'col-sm-10', 'col-sm-11', 'col-sm-12'];
		jQuery( '.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12' ).each( function() {
			for( var i = 0; i < column_classes.length; i++ ) {
				if( jQuery( this ).attr('class').indexOf( column_classes[i] ) !== -1 ) {
					jQuery( this ).addClass( 'col-xs-' + i );
				}
			}
		});
	}

	// Initialize Waypoint
	jQuery.waypoints( 'viewportHeight' );
	jQuery(window).init_waypoint();

	if(cssua.ua.mobile || cssua.ua.tablet_pc) {
		jQuery('.fusion-popover, .fusion-tooltip').each(function() {
			jQuery(this).attr('data-trigger', 'click');
			jQuery(this).data('trigger', 'click');
		});
	}

	// Initialize Bootstrap Popovers
	jQuery( '[data-toggle~="popover"]' ).popover({
		container: 'body'
	});

	// Initialize Bootstrap Tabs
	// Initialize vertical tabs content container height
	if( jQuery( '.vertical-tabs' ).length ) {
		jQuery( '.vertical-tabs .tab-content .tab-pane' ).each( function() {
			jQuery ( this ).css( 'min-height', jQuery( '.vertical-tabs .nav-tabs' ).outerHeight() );

			if( jQuery ( this ).find( '.video-shortcode' ).length ) {
				var video_width = parseInt( jQuery ( this ).find( '.fusion-video' ).css( 'max-width' ).replace( 'px', '' ) );
				jQuery ( this ).css({
					'float': 'none',
					'max-width': video_width + 60
				});
			}
		});
	}

	jQuery( window ).on( 'resize', function() {
		if( jQuery( '.vertical-tabs' ).length ) {
			jQuery( '.vertical-tabs .tab-content .tab-pane' ).css( 'min-height', jQuery( '.vertical-tabs .nav-tabs' ).outerHeight() );
		}
	});

	// Initialize Bootstrap Tooltip
	jQuery( '[data-toggle~="tooltip"]' ).tooltip({
		container: 'body'
	});
});
jQuery(document).ready(function($) {
	if(js_local_vars.disable_mobile_animate_css == '1' && cssua.ua.mobile) {
		jQuery('body').addClass('dont-animate');
	} else {
		jQuery('body').addClass('do-animate');
	}

	jQuery('.fusion-accordian .panel-title a').click(function(e) {
		e.preventDefault();
	});
	
	// sliding bar
	var slidingbar_state = 0;

	if(jQuery('#slidingbar-area.open_onload').length ) {
		jQuery("div#slidingbar").slideDown(240,'easeOutQuad');
		jQuery('.sb-toggle').addClass('open');
		slidingbar_state = 1;

		if(jQuery('#slidingbar .shortcode-map').length >= 1) {
			jQuery('#slidingbar').find('.shortcode-map').each(function() {
				jQuery("#"+this.id).goMap();
				marker = jQuery.goMap.markers[0];
				if(marker) {
					info = jQuery.goMap.getInfo(marker);
					jQuery.goMap.setInfo(marker, info);
				}
				var center = jQuery.goMap.getMap().getCenter();
				google.maps.event.trigger(jQuery.goMap.getMap(), 'resize');
				jQuery.goMap.getMap().setCenter(center);
			});
		}

		jQuery('#slidingbar-area').removeClass('open_onload');
	}

	jQuery( '.sb-toggle' ).click(function(){
		//Expand
		if(slidingbar_state == 0) {
			jQuery( 'div#slidingbar' ).slideDown( 240, 'easeOutQuad' );
			jQuery( '.sb-toggle' ).addClass( 'open' );
			slidingbar_state = 1;

			if(jQuery( '#slidingbar .shortcode-map' ).length ) {
				jQuery( '#slidingbar' ).find( '.shortcode-map' ).each(function() {
					jQuery("#"+this.id).goMap();
					marker = jQuery.goMap.markers[0];
					if(marker) {
						info = jQuery.goMap.getInfo(marker);
						jQuery.goMap.setInfo(marker, info);
					}
					var center = jQuery.goMap.getMap().getCenter();
					google.maps.event.trigger(jQuery.goMap.getMap(), 'resize');
					jQuery.goMap.getMap().setCenter(center);
				});
			}

		//Collapse
		} else if( slidingbar_state == 1 ) {
			jQuery( 'div#slidingbar' ).slideUp(240,'easeOutQuad');
			jQuery( '.sb-toggle' ).removeClass( 'open' );
			slidingbar_state = 0;
		}
	});

	// Foter without social icons
	if( ! jQuery( '.fusion-social-links-footer' ).find( '.fusion-social-networks' ).children().length ) {
		jQuery( '.fusion-social-links-footer' ).hide();
		jQuery( '#footer .copyright' ).css( 'padding-bottom', '0' );
	}

	// sticky header resizing control
	jQuery(window).on('resize', function() {
		// check for woo demo bar which can take on 2 lines and thus sticky position must be calculated
		if(jQuery(".sticky-header").length ) {
			if(jQuery(window).width() < 765) {
				jQuery('body.admin-bar #header-sticky.sticky-header').css('top', '46px');
			} else {
				jQuery('body.admin-bar #header-sticky.sticky-header').css('top', '32px');
			}
		}
	});

	//top nav
	jQuery('.header-wrapper .mobile-topnav-holder').append('<div class="mobile-selector"><span>'+js_local_vars.dropdown_goto+'</span></div>');
	jQuery('.header-wrapper .mobile-topnav-holder .mobile-selector').append('<div class="selector-down"></div>');
	jQuery('.header-wrapper .mobile-topnav-holder').append(jQuery('.header-wrapper .top-menu ul#snav').clone());
	jQuery('.header-wrapper .mobile-topnav-holder ul#snav').attr("class","mobile-topnav");
	jQuery('.header-wrapper .mobile-topnav-holder ul#snav').attr("id","mobile-nav");

	jQuery('.header-wrapper .mobile-topnav-holder ul#mobile-nav').children('li').each(function () {
		var classes = 'mobile-nav-item';

		if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery( this ).attr( 'class', classes );

	    if( jQuery( this ).attr('id' ) ) {
	    	jQuery( this ).attr( 'id', jQuery( this ).attr( 'id' ).replace( 'menu-item', 'mobile-topmenu-item' ) );
		}
	    jQuery( this ).attr( 'style', '' );
	});
	jQuery('.header-wrapper .mobile-topnav-holder .mobile-selector').click(function(){
		jQuery('.header-wrapper .mobile-topnav-holder #mobile-nav').slideToggle(240,'easeOutQuad');
	});

	//main nav
	if(js_local_vars.mobile_menu_design == 'classic') {
		jQuery('.header-wrapper .mobile-nav-holder').append('<div class="mobile-selector"><span>'+js_local_vars.dropdown_goto+'</span></div>');
		jQuery('.header-wrapper .mobile-nav-holder .mobile-selector').append('<div class="selector-down"></div>');
	}
	jQuery('.header-wrapper .mobile-nav-holder').append(jQuery('.header-wrapper .nav-holder .fusion-navbar-nav').clone());
	jQuery('.header-wrapper .mobile-nav-holder .fusion-navbar-nav').attr("id","mobile-nav");
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav').removeClass('fusion-navbar-nav');
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav').children('.cart').remove();

	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav li').children('#main-nav-search-link').each(function () {
		jQuery(this).parents('li').remove();
	});
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav').children('li').each(function () {
		var classes = 'mobile-nav-item';

		if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery( this ).attr( 'class', classes );
		if( jQuery( this ).attr('id' ) ) {
			jQuery( this ).attr( 'id', jQuery( this ).attr( 'id' ).replace( 'menu-item', 'mobile-menu-item' ) );
		}
	});
	jQuery('.header-wrapper .mobile-nav-holder .mobile-selector').click(function(){
		if( jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').hasClass( 'mobile-menu-expanded' ) ) {
			jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').removeClass( 'mobile-menu-expanded' );
		} else {
			jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').addClass( 'mobile-menu-expanded' );
	}
		jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').slideToggle(240,'easeOutQuad');
	});

	//sticky header nav
	jQuery('.sticky-header .fusion-navbar-nav').children('li').each(function () {
		 jQuery( this ).removeAttr( 'id' );
	});
	jQuery('.sticky-header .mobile-nav-holder').append('<div class="mobile-selector"><span>'+js_local_vars.dropdown_goto+'</span></div>');
	jQuery('.sticky-header .mobile-nav-holder .mobile-selector').append('<div class="selector-down"></div>');
	jQuery('.sticky-header .mobile-nav-holder').append(jQuery('.sticky-header .nav-holder ul.navigation').clone());
	jQuery('.sticky-header .mobile-nav-holder ul.navigation').attr("class","navigation mobile-sticky-nav");
	jQuery('.sticky-header .mobile-nav-holder ul.navigation').removeClass('fusion-navbar-nav');
	jQuery('.sticky-header .mobile-nav-holder ul.navigation').attr("id","mobile-nav");
	jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav').children('li').each(function () {
		var classes = 'mobile-nav-item';

		if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery( this ).attr( 'class', classes );

		jQuery( this ).removeAttr( 'id' );
		jQuery( this ).children( 'a' ).css( 'style', '' );
	});
	jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav li').children('#sticky-nav-search-link').each(function () {
		jQuery(this).parents('li').remove();
	});
	jQuery('.sticky-header .mobile-nav-holder .mobile-selector').click(function(){
		jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav').slideToggle(240,'easeOutQuad');
	});
	jQuery('body #header-sticky.sticky-header .sticky-shadow .mobile-nav-holder').css('padding-left', jQuery('.sticky-header .sticky-shadow .logo').width() + 25 + "px");


	// Make megamenu items mobile ready
	jQuery('.header-wrapper .mobile-nav-holder .navigation > .mobile-nav-item, .sticky-header .mobile-nav-holder .navigation > .mobile-nav-item').each(function() {
		jQuery(this).find('.fusion-megamenu-widgets-container').remove();

		jQuery(this).find('.fusion-megamenu-holder > ul').each( function() {
			jQuery(this).attr('class', 'sub-menu');
			jQuery(this).attr('style', '');
			jQuery(this).find('> li').each( function() {

				// add menu needed menu classes to li elements
				var classes = 'mobile-nav-item';

				if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
					classes += ' mobile-current-nav-item';
				}
				jQuery( this ).attr( 'class', classes );

				// Append column titles and title links correctly
				if( ! jQuery(this).find('.fusion-megamenu-title a, > a').length ) {
					jQuery(this).find('.fusion-megamenu-title').each( function() {
						if( ! jQuery( this ).children( 'a' ).length ) {
							jQuery( this ).append( '<a href="#">' + jQuery( this ).text() + '</a>' );
						}
					});

					if( ! jQuery(this).find('.fusion-megamenu-title').length ) {

						var parent_li = jQuery(this);

						jQuery( this ).find( '.sub-menu').each( function() {
							parent_li.after( jQuery( this ) );

						});
						jQuery( this ).remove();
					}
				}
				jQuery( this ).prepend( jQuery( this ).find( '.fusion-megamenu-title a, > a' ) );

				jQuery( this ).find( '.fusion-megamenu-title' ).remove();
			});
			jQuery( this ).closest( '.mobile-nav-item' ).append( jQuery( this ) );
		});

		jQuery( this ).find( '.fusion-megamenu-wrapper, .caret, .fusion-megamenu-bullet' ).remove();
	});

	// Make mobile menu sub-menu toggles
	if( js_local_vars.submenu_slideout == 1 ) {
		jQuery('.header-wrapper .mobile-topnav-holder .mobile-topnav li, .header-wrapper .mobile-nav-holder .navigation li, .sticky-header .mobile-nav-holder .navigation li').each(function() {
			var classes = 'mobile-nav-item';

			if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
				classes += ' mobile-current-nav-item';
			}
			jQuery( this ).attr( 'class', classes );

			if( jQuery( this ).find( ' > ul' ).length ) {
				jQuery( this ).prepend('<span href="#" aria-haspopup="true" class="open-submenu"></span>' );

				jQuery( this ).find( ' > ul' ).hide();
			}
		});

		jQuery('.header-wrapper .mobile-topnav-holder .open-submenu, .header-wrapper .mobile-nav-holder .open-submenu, .sticky-header .mobile-nav-holder .open-submenu').click( function(e) {

			e.stopPropagation();
			jQuery( this ).parent().children( '.sub-menu' ).slideToggle(240,'easeOutQuad');

		});
	}

	jQuery( '.mobile-menu-icons .fusionicon-bars' ).click(function() {
		jQuery('.header-wrapper #mobile-nav').slideToggle(240,'easeOutQuad');
	});

	jQuery( '.mobile-menu-icons .fusionicon-search' ).click(function() {
		jQuery('.header-wrapper .mobile-header-search').slideToggle(240,'easeOutQuad');
	});

	// adjust mobile menu when it falls to 2 rows
	var mobile_menu_sep_added = false;

	function adjust_mobile_menu_settings() {
		var menu_width = 0;

		if( Modernizr.mq( 'only screen and (max-width: 800px)' ) ) {
			jQuery( '.top-menu #snav' ).children( 'li' ).each( function() {
				menu_width += jQuery( this ).outerWidth( true ) + 2;
			});

			if( menu_width > jQuery( window ).width() && jQuery( window ).width() > 318 ) {
				if( ! mobile_menu_sep_added ) {
					jQuery( '.top-menu #snav' ).append( '<div class="mobile-menu-sep"></div>' );
					jQuery( '.top-menu #snav' ).css( 'position', 'relative' );
					jQuery( '.mobile-menu-sep' ).css( {
						'position': 'absolute',
						'top': jQuery( '.top-menu #snav li' ).height() - 1 + 'px',
						'width': '100%',
						'border-bottom-width': '1px',
						'border-bottom-style': 'solid'
					});
					mobile_menu_sep_added = true;
				}
			} else {
				jQuery( '.top-menu #snav' ).css( 'position', '' );
				jQuery( '.top-menu #snav' ).find( '.mobile-menu-sep' ).remove();
				mobile_menu_sep_added = false;
			}
		} else {
			jQuery( '.top-menu #snav' ).css( 'position', '' );
			jQuery( '.top-menu #snav' ).find( '.mobile-menu-sep' ).remove();
			mobile_menu_sep_added = false;
		}
	}

	adjust_mobile_menu_settings();

	jQuery( window ).on( 'resize', function() {
		adjust_mobile_menu_settings();
	});

	// One page scrolling effect
	var sticky_height = 0;

	if( jQuery( '.sticky-header' ).length ) {
		if( jQuery( '.tfs_parallax' ).length ) {
			sticky_height = 62;
		} else {
			sticky_height = 65;
		}
	}

	jQuery('.fusion-navbar-nav a:not([href=#], .fusion-megamenu-widgets-container a, .search-link), .top-menu .menu a:not([href=#]), .mobile-nav-item a:not([href=#], .search-link), a.fusion-button:not([href=#]), a.fusion-one-page-text-link:not([href=#])').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
			if (target.length && this.hash.slice(1) != '' ) {
				 jQuery('html, body').animate({
					 scrollTop: target.offset().top - sticky_height
				}, 850, 'easeInOutExpo');
				return false;
			}
		}
	});

	var scrollspy_target = '.nav-holder .fusion-navbar-nav li > a';
	var sticky_scroll = sticky_height;

	if( jQuery( '.tfs_parallax' ).length ) {
		if( jQuery( '.header-v1' ).length ) {
			sticky_scroll = 65 + jQuery( '.header-v1' ).height() + 20;
		} else {
			sticky_scroll = 65;
		}
	}

	jQuery('body').scrollspy({
		target: scrollspy_target,
		offset: parseInt( sticky_scroll )
	});

	if ('ontouchstart' in document.documentElement || navigator.msMaxTouchPoints) {
		jQuery('.nav-holder li.menu-item-has-children > a, .order-dropdown > li .current-li').on("click", function (e) {
			var link = jQuery(this);
			if (link.hasClass('hover')) {
				link.removeClass("hover");
				return true;
			} else {
				link.addClass("hover");
				jQuery('.nav-holder li.menu-item-has-children > a, .order-dropdown > li .current-li').not(this).removeClass("hover");
				e.preventDefault();
				return false;
			}
		});


		jQuery('.sub-menu li, .mobile-nav-item li').not('li.menu-item-has-children').on("click", function (e) {
			var link = jQuery(this).find('a').attr('href');
			window.location = link;

	  		return true;
		});
	}

	// Touch support for win phone devices
	jQuery('#nav li a, .top-menu li a, #sticky-nav li a, .mobile-nav-item a').each(function() {
		jQuery(this).attr('aria-haspopup', 'true');
	});

	// Ubermenu responsive fix
	if(jQuery('.megaResponsive').length >= 1) {
		jQuery('.mobile-nav-holder.main-menu').addClass('set-invisible');
	}

	jQuery( '#wrapper .share-box' ).each( function() {
		if( ! jQuery( 'meta[property="og:title"]' ).length ) {
			jQuery( 'head title' ).after( '<meta property="og:title" content="' + jQuery( this ).data( 'title' )  + '"/>' );
			jQuery( 'head title' ).after( '<meta property="og:description" content="' + jQuery( this ).data( 'description' )  + '"/>' );
			jQuery( 'head title' ).after( '<meta property="og:type" content="article"/>' );
			jQuery( 'head title' ).after( '<meta property="og:url" content="' + jQuery( this ).data( 'link' )  + '"/>' );
			jQuery( 'head title' ).after( '<meta property="og:image" content="' + jQuery( this ).data( 'image' )  + '"/>' );
		}
	});

	sharebox_h4_width = jQuery('#wrapper .share-box h4').outerWidth();
	sharebox_ul = jQuery('.share-box ul').outerWidth();
	// social share box alignment on resize
	if( sharebox_h4_width + sharebox_ul > jQuery('.post-content').width() && ! jQuery('.single-avada_portfolio').length ) {
		jQuery('#wrapper .share-box').css('height', 'auto');
		jQuery('#wrapper .share-box h4').css('float', 'none').css('line-height', '20px').css('padding-bottom', '25px').css('padding-top', '25px');
		jQuery('.share-box ul').css('float', 'none').css('margin-top', '0').css('overflow', 'hidden').css('padding', '0 25px 25px');
	} else {
		jQuery('#wrapper .share-box').css( 'height', '' );
	}

	// Chrome soical icons drop to second row bug quirks
	header_social_social_networks = 0;
	jQuery('.header-social .social-networks li').each(function() {
		header_social_social_networks += jQuery(this).outerWidth(true);
	});
	if(header_social_social_networks > jQuery('.header-social .social-networks').css('max-width')) {
		header_social_social_networks = jQuery('.header-social .social-networks').css('max-width');
	}

	jQuery(window).on('resize', function() {
		jQuery('.title').each(function(index) {
			if(special_titles_width[index] > jQuery(this).parent().width()) {
				jQuery(this).addClass('border-below-title');
			} else {
				jQuery(this).removeClass('border-below-title');
			}
		});

		// social share box alignment on resize
		if( sharebox_h4_width + sharebox_ul > jQuery('#content').width() ) {
			jQuery('#wrapper .share-box').css('height', 'auto');
			jQuery('#wrapper .share-box h4').css('float', 'none').css('line-height', '20px').css('padding-bottom', '25px').css('padding-top', '25px');
			jQuery('.share-box ul').css('float', 'none').css('margin-top', '0').css('overflow', 'hidden').css('padding', '0 25px 25px');
		} else {
			jQuery('#wrapper .share-box').css( 'height', '' );
			//jQuery('#wrapper .share-box, #wrapper .share-box h4, .share-box ul').attr("style", "");
		}

		// Chrome soical icons drop to second row bug quirks
		if(jQuery(window).width() >= 784) {
			jQuery('.header-social .social-networks').css('width', header_social_social_networks);
		} else {
			jQuery('.header-social .social-networks').css('width', '');
		}
	});

	/* search icon show/hide */
	jQuery(document).click(function() {
		jQuery('.main-nav-search-form').hide();
	});
	jQuery('.main-nav-search-form').click(function(e) {
		e.stopPropagation();
	});
	jQuery('.main-nav-search .search-link').click(function(e) {
		e.stopPropagation();
		if(jQuery(this).parent().find('.main-nav-search-form').css('display') == 'block') {
			jQuery(this).parent().find('.main-nav-search-form').hide();
		} else {
			jQuery(this).parent().find('.main-nav-search-form').show();
		}
	});

	var special_titles_width = [];
	jQuery('.title').each(function(index) {
		special_titles_width[index] = jQuery(this).width();
		if(jQuery(this).find('h1,h2,h3,h4,h5,h6').width() > jQuery(this).parent().width()) {
			jQuery(this).addClass('border-below-title');
		}
	});

	// Tabs Widget
	jQuery( '.tabs-widget .tabset li a' ).click( function( e ) {
		e.preventDefault();
	});

	// When page loads
	jQuery( '.tabs-widget' ).each(function() {
		jQuery( this ).find( '.tabset li:first' ).addClass( 'active' ).show(); //Activate first tab
		jQuery( this ).find( '.tab_content:first' ).show(); //Show first tab content
	});

	//On Click Event
	jQuery( '.tabs-widget .tabset li' ).click(function(e) {
		var tab_to_activate = jQuery( this ).find( 'a' ).attr( 'href' );

		jQuery( this ).parent().find( ' > li' ).removeClass( 'active' ); //Remove all 'active' classes
		jQuery( this ).addClass( 'active' ); // Add 'active' class to selected tab

		jQuery( this ).parents( '.tabs-widget' ).find( '.tab_content' ).hide(); //Hide all tab content
		jQuery( this ).parents( '.tabs-widget' ).find( tab_to_activate ).fadeIn(); //Fade in the new active tab content
	});

	function isScrolledIntoView(elem)
	{
		var docViewTop = jQuery(window).scrollTop();
		var docViewBottom = docViewTop + jQuery(window).height();

		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	jQuery('.fusion-alert .close').click(function(e) {
		e.preventDefault();

		jQuery(this).parent().slideUp();
	});

	jQuery('input, textarea').placeholder();

	function checkForImage(url) {
		return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
	}

	if(Modernizr.mq('only screen and (max-width: 800px)')) {
		jQuery('.tabs-vertical').addClass('tabs-horizontal').removeClass('tabs-vertical');
	}

	jQuery(window).on('resize', function() {
		if(Modernizr.mq('only screen and (max-width: 800px)')) {
			jQuery('.tabs-vertical').addClass('tabs-original-vertical');
			jQuery('.tabs-vertical').addClass('tabs-horizontal').removeClass('tabs-vertical');
		} else {
			jQuery('.tabs-original-vertical').removeClass('tabs-horizontal').addClass('tabs-vertical');
		}
	});

	// wrap cf7 select and add arrow
	jQuery('.wpcf7-select:not([multiple])').wrap('<div class="wpcf7-select-parent"></div>');
	jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo('.wpcf7-select-parent');

	// wrap category and archive widget dropdowns
	jQuery('.widget_categories select, .widget_archive select ').css( 'width', '100%' );
	jQuery('.widget_categories select, .widget_archive select ').wrap('<div class="avada-select-parent"></div>').after('<div class="select-arrow">&#xe61f;</div>');

    // Text area climit expandability
    jQuery( '.textarea-comment' ).each( function() {
		jQuery( this ).css( 'max-width', jQuery( '#content').width() );
    });

});

// set heights of select arrows correctly
jQuery(window).load(function() {
	calc_select_arrow_dimensions();
});

function calc_select_arrow_dimensions() {
	jQuery( '.avada-select-parent .select-arrow, .gravity-select-parent .select-arrow, .wpcf7-select-parent .select-arrow' ).each( function() {
		if( jQuery( this ).prev().innerHeight() > 0 ) {
			jQuery( this ).css( {
				height: jQuery( this ).prev().innerHeight(),
				width: jQuery( this ).prev().innerHeight(),
				'line-height': jQuery( this ).prev().innerHeight() + 'px'
			});
		}
	});
}

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * scrollspy.js
 * modified by ThemeFusion 2014
 */

+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
	var href;
	var process  = $.proxy(this.process, this);

	this.$element	   = $(element).is('body') ? $(window) : $(element);
	this.$body		  = $('body');
	this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process);
	this.options		= $.extend({}, ScrollSpy.DEFAULTS, options);
	this.selector	   = (this.options.target
	  || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
	  || '');
	this.offsets		= $([]);
	this.targets		= $([]);
	this.activeTarget   = null;

	this.refresh();
	this.process();
  }

  ScrollSpy.DEFAULTS = {
	offset: 10
  };

  ScrollSpy.prototype.refresh = function () {
	var offsetMethod = this.$element[0] == window ? 'offset' : 'position';

	this.offsets = $([]);
	this.targets = $([]);

	var self	 = this;
	var $targets = this.$body
	  .find(this.selector)
	  .map(function () {
		var $el   = $(this);
		var href  = $el.data('target') || $el.attr('href');
		var $href = /^#./.test(href) && $(href);

		return ($href
		  && $href.length
		  && $href.is(':visible')
		  && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null;
	  })
	  .sort(function (a, b) { return a[0] - b[0]; })
	  .each(function () {
		self.offsets.push(this[0]);
		self.targets.push(this[1]);
	  });
  };

  ScrollSpy.prototype.process = function () {
	var scrollTop	= this.$scrollElement.scrollTop() + this.options.offset;
	var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
	var maxScroll	= scrollHeight - this.$scrollElement.height();
	var offsets	  = this.offsets;
	var targets	  = this.targets;
	var activeTarget = this.activeTarget;
	var i;

	if (scrollTop >= maxScroll) {
	  return activeTarget != (i = targets.last()[0]) && this.activate(i);
	}

	for (i = offsets.length; i--;) {
	  activeTarget != targets[i]
		&& scrollTop >= offsets[i]
		&& (!offsets[i + 1] || scrollTop <= offsets[i + 1])
		&& this.activate( targets[i] );
	}
  };

  ScrollSpy.prototype.activate = function (target) {
	this.activeTarget = target;

	$(this.selector)
	  .parents('.current-menu-item')
	  .removeClass('current-menu-item');

	var selector = this.selector +
		'[data-target="' + target + '"],' +
		this.selector + '[href="' + target + '"]';

	var active = $(selector)
	  .parents('li')
	  .addClass('current-menu-item');

	if (active.parent('.sub-menu').length) {
	  active = active
		.closest('li.fusion-dropdown-menu')
		.addClass('current-menu-item');
	}

	active.trigger('activate.bs.scrollspy');
  };


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy;

  $.fn.scrollspy = function (option) {
	return this.each(function () {
	  var $this   = $(this);
	  var data	= $this.data('bs.scrollspy');
	  var options = typeof option == 'object' && option;

	  if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)));
	  if (typeof option == 'string') data[option]();
	});
  };

  $.fn.scrollspy.Constructor = ScrollSpy;


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
	$.fn.scrollspy = old;
	return this;
  };


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this);
	  $spy.scrollspy($spy.data());
	});
  });

}(jQuery);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));


(function( window, $, undefined ) {

	/*
	* smartresize: debounced resize event for jQuery
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery.smartresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/

	var $event = $.event, resizeTimeout;

	$event.special.smartresize 	= {
		setup: function() {
			$(this).bind( "resize", $event.special.smartresize.handler );
		},
		teardown: function() {
			$(this).unbind( "resize", $event.special.smartresize.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args 	= arguments;

			// set correct event type
			event.type = "smartresize";

			if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
			resizeTimeout = setTimeout(function() {
				jQuery.event.handle.apply( context, args );
			}, execAsap === "execAsap"? 0 : 100 );
		}
	};

	$.fn.smartresize 			= function( fn ) {
		return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
	};

	$.Slideshow 				= function( options, element ) {

		this.$el			= $( element );

		/***** images ****/

		// list of image items
		this.$list			= this.$el.find('ul.ei-slider-large');
		// image items
		this.$imgItems		= this.$list.children('li');
		// total number of items
		this.itemsCount		= this.$imgItems.length;
		// images
		this.$images		= this.$imgItems.find('img:first');

		/***** thumbs ****/

		// thumbs wrapper
		this.$sliderthumbs	= this.$el.find('ul.ei-slider-thumbs').hide();
		// slider elements
		this.$sliderElems	= this.$sliderthumbs.children('li');
		// sliding div
		this.$sliderElem	= this.$sliderthumbs.children('li.ei-slider-element');
		// thumbs
		this.$thumbs		= this.$sliderElems.not('.ei-slider-element');

		// initialize slideshow
		this._init( options );

	};

	$.Slideshow.defaults 		= {
		// animation types:
		// "sides" : new slides will slide in from left / right
		// "center": new slides will appear in the center
		animation			: 'sides', // sides || center
		// if true the slider will automatically slide, and it will only stop if the user clicks on a thumb
		autoplay			: false,
		// interval for the slideshow
		slideshow_interval	: 3000,
		// speed for the sliding animation
		speed			: 800,
		// easing for the sliding animation
		easing			: '',
		// percentage of speed for the titles animation. Speed will be speed * titlesFactor
		titlesFactor		: 0.60,
		// titles animation speed
		titlespeed			: 800,
		// titles animation easing
		titleeasing			: '',
		// maximum width for the thumbs in pixels
		thumbMaxWidth		: 150
	};

	$.Slideshow.prototype 		= {
		_init 				: function( options ) {

			this.options 		= $.extend( true, {}, $.Slideshow.defaults, options );

			// set the opacity of the title elements and the image items
			this.$imgItems.css( 'opacity', 0 );
			this.$imgItems.find('div.ei-title > *').css( 'opacity', 0 );

			// index of current visible slider
			this.current		= 0;

			var _self			= this;

			// preload images
			// add loading status
			this.$loading		= $('<div class="ei-slider-loading">Loading</div>').prependTo( _self.$el );

			$.when( this._preloadImages() ).done( function() {

				// hide loading status
				_self.$loading.hide();

				// calculate size and position for each image
				_self._setImagesSize();

				// configure thumbs container
				_self._initThumbs();

				// show first
				_self.$imgItems.eq( _self.current ).css({
					'opacity' 	: 1,
					'z-index'	: 10
				}).show().find('div.ei-title > *').css( 'opacity', 1 );

				// if autoplay is true
				if( _self.options.autoplay ) {

					_self._startSlideshow();

				}

				// initialize the events
				_self._initEvents();

			});

		},
		_preloadImages		: function() {

			// preloads all the large images

			var _self	= this,
				loaded	= 0;

			return $.Deferred(

				function(dfd) {

					_self.$images.each( function( i ) {

						$('<img/>').load( function() {

							if( ++loaded === _self.itemsCount ) {

								dfd.resolve();

							}

						}).attr( 'src', $(this).attr('src') );

					});

				}

			).promise();

		},
		_setImagesSize		: function() {

			// save ei-slider's width
			this.elWidth	= this.$el.width();

			var _self	= this;

			this.$images.each( function( i ) {

				var $img	= $(this);
					imgDim	= _self._getImageDim( $img.attr('src') );

				$img.css({
					width		: imgDim.width,
					height		: imgDim.height,
					marginLeft	: imgDim.left,
					marginTop	: imgDim.top
				});

			});

		},
		_getImageDim		: function( src ) {

			var $img	= new Image();

			$img.src	= src;

			var c_w		= this.elWidth,
				c_h		= this.$el.height(),
				r_w		= c_h / c_w,

				i_w		= $img.width,
				i_h		= $img.height,
				r_i		= i_h / i_w,
				new_w, new_h, new_left, new_top;

			if( r_w > r_i ) {

				new_h	= c_h;
				new_w	= c_h / r_i;

			}
			else {

				new_h	= c_w * r_i;
				new_w	= c_w;

			}

			return {
				width	: new_w,
				height	: new_h,
				left	: ( c_w - new_w ) / 2,
				top		: ( c_h - new_h ) / 2
			};

		},
		_initThumbs			: function() {

			// set the max-width of the slider elements to the one set in the plugin's options
			// also, the width of each slider element will be 100% / total number of elements
			this.$sliderElems.css({
				'max-width' : this.options.thumbMaxWidth + 'px',
				'width'		: 100 / this.itemsCount + '%'
			});

			// set the max-width of the slider and show it
			this.$sliderthumbs.css( 'max-width', this.options.thumbMaxWidth * this.itemsCount + 'px' ).show();

		},
		_startSlideshow		: function() {

			var _self	= this;

			this.slideshow	= setTimeout( function() {

				var pos;

				( _self.current === _self.itemsCount - 1 ) ? pos = 0 : pos = _self.current + 1;

				_self._slideTo( pos );

				if( _self.options.autoplay ) {

					_self._startSlideshow();

				}

			}, this.options.slideshow_interval);

		},
		// shows the clicked thumb's slide
		_slideTo			: function( pos ) {

			// return if clicking the same element or if currently animating
			if( pos === this.current || this.isAnimating )
				return false;

			this.isAnimating	= true;

			var $currentSlide	= this.$imgItems.eq( this.current ),
				$nextSlide		= this.$imgItems.eq( pos ),
				_self			= this,

				preCSS			= {zIndex	: 10},
				animCSS			= {opacity	: 1};

			// new slide will slide in from left or right side
			if( this.options.animation === 'sides' ) {

				preCSS.left		= ( pos > this.current ) ? -1 * this.elWidth : this.elWidth;
				animCSS.left	= 0;

			}

			// titles animation
			$nextSlide.find('div.ei-title > h2')
					  .css( 'margin-right', 50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
					  .end()
					  .find('div.ei-title > h3')
					  .css( 'margin-right', -50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing );

			$.when(

				// fade out current titles
				$currentSlide.css( 'z-index' , 1 ).find('div.ei-title > *').stop().fadeOut( this.options.speed / 2, function() {
					// reset style
					$(this).show().css( 'opacity', 0 );
				}),

				// animate next slide in
				$nextSlide.css( preCSS ).stop().animate( animCSS, this.options.speed, this.options.easing ),

				// "sliding div" moves to new position
				this.$sliderElem.stop().animate({
					left	: this.$thumbs.eq( pos ).position().left
				}, this.options.speed )

			).done( function() {

				// reset values
				$currentSlide.css( 'opacity' , 0 ).find('div.ei-title > *').css( 'opacity', 0 );
					_self.current	= pos;
					_self.isAnimating		= false;

				});

		},
		_initEvents			: function() {

			var _self	= this;

			// window resize
			$(window).on( 'smartresize.eislideshow', function( event ) {

				// resize the images
				_self._setImagesSize();

				// reset position of thumbs sliding div
				_self.$sliderElem.css( 'left', _self.$thumbs.eq( _self.current ).position().left );

			});

			// click the thumbs
			this.$thumbs.on( 'click.eislideshow', function( event ) {

				if( _self.options.autoplay ) {

					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;

				}

				var $thumb	= $(this),
					idx		= $thumb.index() - 1; // exclude sliding div

				_self._slideTo( idx );

				return false;

			});

		}
	};

	var logError 				= function( message ) {

		if ( this.console ) {

			console.error( message );

		}

	};

	$.fn.eislideshow			= function( options ) {

		if ( typeof options === 'string' ) {

			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {

				var instance = $.data( this, 'eislideshow' );

				if ( !instance ) {
					logError( "cannot call methods on eislideshow prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}

				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for eislideshow instance" );
					return;
				}

				instance[ options ].apply( instance, args );

			});

		}
		else {

			this.each(function() {

				var instance = $.data( this, 'eislideshow' );
				if ( !instance ) {
					$.data( this, 'eislideshow', new $.Slideshow( options, this ) );
				}

			});

		}

		return this;

	};

})( window, jQuery );

/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2012 M. Alsup
 * Version: 1.7 (20-FEB-2013)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
(function(e){"use strict";function r(t,i,s,o){function h(e){if(e.timeout)u.cycleTimeout=setTimeout(function(){r(t,e,0,!e.rev)},e.timeout)}if(i.busy)return;var u=t[0].parentNode,a=t[i.currSlide],f=t[i.nextSlide];if(u.cycleTimeout===0&&!s)return;if(s||!u.cyclePause){if(i.before.length)e.each(i.before,function(e,t){t.apply(f,[a,f,i,o])});var l=function(){if(n)this.style.removeAttribute("filter");e.each(i.after,function(e,t){t.apply(f,[a,f,i,o])});h(i)};if(i.nextSlide!=i.currSlide){i.busy=1;e.fn.cycle.custom(a,f,i,l)}var c=i.nextSlide+1==t.length;i.nextSlide=c?0:i.nextSlide+1;i.currSlide=c?t.length-1:i.nextSlide-1}else{h(i)}}function i(e,t,n){var i=e[0].parentNode,s=i.cycleTimeout;if(s){clearTimeout(s);i.cycleTimeout=0}t.nextSlide=t.currSlide+n;if(t.nextSlide<0){t.nextSlide=e.length-1}else if(t.nextSlide>=e.length){t.nextSlide=0}r(e,t,1,n>=0);return false}var t="Lite-1.7";var n=/MSIE/.test(navigator.userAgent);e.fn.cycle=function(t){return this.each(function(){t=t||{};if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=0;this.cyclePause=0;var s=e(this);var o=t.slideExpr?e(t.slideExpr,this):s.children();var u=o.get();if(u.length<2){return}var a=e.extend({},e.fn.cycle.defaults,t||{},e.metadata?s.metadata():e.meta?s.data():{});var f=e.isFunction(s.data)?s.data(a.metaAttr):null;if(f)a=e.extend(a,f);a.before=a.before?[a.before]:[];a.after=a.after?[a.after]:[];a.after.unshift(function(){a.busy=0});var l=this.className;a.width=parseInt((l.match(/w:(\d+)/)||[])[1],10)||a.width;a.height=parseInt((l.match(/h:(\d+)/)||[])[1],10)||a.height;a.timeout=parseInt((l.match(/t:(\d+)/)||[])[1],10)||a.timeout;if(s.css("position")=="static")s.css("position","relative");if(a.width)s.width(a.width);if(a.height&&a.height!="auto")s.height(a.height);var c=0;o.css({position:"absolute",top:0}).each(function(t){e(this).css("z-index",u.length-t)});e(u[c]).css("opacity",1).show();if(n)u[c].style.removeAttribute("filter");if(a.fit&&a.width)o.width(a.width);if(a.fit&&a.height&&a.height!="auto")o.height(a.height);if(a.pause)s.hover(function(){this.cyclePause=1},function(){this.cyclePause=0});var h=e.fn.cycle.transitions[a.fx];if(h)h(s,o,a);o.each(function(){var t=e(this);this.cycleH=a.fit&&a.height?a.height:t.height();this.cycleW=a.fit&&a.width?a.width:t.width()});if(a.cssFirst)e(o[c]).css(a.cssFirst);if(a.timeout){if(a.speed.constructor==String)a.speed={slow:600,fast:200}[a.speed]||400;if(!a.sync)a.speed=a.speed/2;while(a.timeout-a.speed<250)a.timeout+=a.speed}a.speedIn=a.speed;a.speedOut=a.speed;a.slideCount=u.length;a.currSlide=c;a.nextSlide=1;var p=o[c];if(a.before.length)a.before[0].apply(p,[p,p,a,true]);if(a.after.length>1)a.after[1].apply(p,[p,p,a,true]);if(a.click&&!a.next)a.next=a.click;if(a.next)e(a.next).unbind("click.cycle").bind("click.cycle",function(){return i(u,a,a.rev?-1:1)});if(a.prev)e(a.prev).unbind("click.cycle").bind("click.cycle",function(){return i(u,a,a.rev?1:-1)});if(a.timeout)this.cycleTimeout=setTimeout(function(){r(u,a,0,!a.rev)},a.timeout+(a.delay||0))})};e.fn.cycle.custom=function(t,n,r,i){var s=e(t),o=e(n);o.css(r.cssBefore);var u=function(){o.animate(r.animIn,r.speedIn,r.easeIn,i)};s.animate(r.animOut,r.speedOut,r.easeOut,function(){s.css(r.cssAfter);if(!r.sync)u()});if(r.sync)u()};e.fn.cycle.transitions={fade:function(e,t,n){t.not(":eq(0)").hide();n.cssBefore={opacity:0,display:"block"};n.cssAfter={display:"none"};n.animOut={opacity:0};n.animIn={opacity:1}},fadeout:function(t,n,r){r.before.push(function(t,n,r,i){e(t).css("zIndex",r.slideCount+(i===true?1:0));e(n).css("zIndex",r.slideCount+(i===true?0:1))});n.not(":eq(0)").hide();r.cssBefore={opacity:1,display:"block",zIndex:1};r.cssAfter={display:"none",zIndex:0};r.animOut={opacity:0};r.animIn={opacity:1}}};e.fn.cycle.ver=function(){return t};e.fn.cycle.defaults={animIn:{},animOut:{},fx:"fade",after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:"auto",metaAttr:"cycle",next:null,pause:false,prev:null,speed:1e3,slideExpr:null,sync:true,timeout:4e3}})(jQuery);

/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);

/*jshint undef: true */
/*global jQuery: true */


/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(e){"use strict";function t(){var e=document.createElement("bootstrap");var t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t){if(e.style[n]!==undefined){return{end:t[n]}}}return false}e.fn.emulateTransitionEnd=function(t){var n=false,r=this;e(this).one(e.support.transition.end,function(){n=true});var i=function(){if(!n)e(r).trigger(e.support.transition.end)};setTimeout(i,t);return this};e(function(){e.support.transition=t()})}(jQuery)

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function(e){"use strict";var t=function(n,r){this.$element=e(n);this.options=e.extend({},t.DEFAULTS,r);this.transitioning=null;if(this.options.parent)this.$parent=e(this.options.parent);if(this.options.toggle)this.toggle()};t.DEFAULTS={toggle:true};t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"};t.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var t=e.Event("show.bs.collapse");this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.$parent&&this.$parent.find("> .fusion-panel > .in");if(n&&n.length){var r=n.data("bs.collapse");if(r&&r.transitioning)return;n.collapse("hide");r||n.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0);this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var o=e.camelCase(["scroll",i].join("-"));this.$element.one(e.support.transition.end,e.proxy(s,this)).emulateTransitionEnd(350)[i](this.$element[0][o])};t.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var t=e.Event("hide.bs.collapse");this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var r=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!e.support.transition)return r.call(this);this.$element[n](0).one(e.support.transition.end,e.proxy(r,this)).emulateTransitionEnd(350)};t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this);var i=r.data("bs.collapse");var s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n);if(!i&&s.toggle&&n=="show")n=!n;if(!i)r.data("bs.collapse",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.collapse.Constructor=t;e.fn.collapse.noConflict=function(){e.fn.collapse=n;return this};e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r;var i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"");var s=e(i);var o=s.data("bs.collapse");var u=o?"toggle":n.data();var a=n.attr("data-parent");var f=a&&e(a);if(!o||!o.transitioning){if(f)f.find('[data-toggle=collapse][data-parent="'+a+'"]').not(n).addClass("collapsed");n[s.hasClass("in")?"addClass":"removeClass"]("collapsed")}s.collapse(u)});jQuery("click.bs.collapse.data-api, [data-toggle=collapse]").each(function(){var e=jQuery(this).attr("data-parent");if(jQuery(this).parents(".panel-group").length==0){var t=Math.floor(Math.random()*10+1);var n=jQuery(this).parents(".fusion-panel");jQuery(this).attr("data-parent","accordian-"+t);jQuery(n).wrap('<div class="accordian fusion-accordian fusion-single-accordian"><div class="panel-group" id="accordion-'+t+'"></div></div>')}})}(jQuery)

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(e){"use strict";var t=function(t,n){this.options=n;this.$element=e(t);this.$backdrop="";this.isShown=null;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};t.DEFAULTS={backdrop:true,keyboard:true,show:true};t.prototype.toggle=function(e){return this[!this.isShown?"show":"hide"](e)};t.prototype.show=function(t){var n=this;var r=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(r);if(this.isShown||r.isDefaultPrevented())return;this.isShown=true;this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this));this.backdrop(function(){var r=e.support.transition&&n.$element.hasClass("fade");if(!n.$element.parent().length){n.$element.appendTo(document.body)}n.$element.show().scrollTop(0);if(r){n.$element[0].offsetWidth}n.$element.addClass("in").attr("aria-hidden",false);n.enforceFocus();var i=e.Event("shown.bs.modal",{relatedTarget:t});r?n.$element.find(".modal-dialog").one(e.support.transition.end,function(){n.$element.focus().trigger(i)}).emulateTransitionEnd(300):n.$element.focus().trigger(i)})};t.prototype.hide=function(t){if(t)t.preventDefault();t=e.Event("hide.bs.modal");this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=false;this.escape();e(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");e.support.transition&&this.$element.hasClass("fade")?this.$element.one(e.support.transition.end,e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()};t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.focus()}},this))};t.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}};t.prototype.hideModal=function(){var e=this;this.$element.hide();this.backdrop(function(){e.removeBackdrop();e.$element.trigger("hidden.bs.modal")})};t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};t.prototype.backdrop=function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=e.support.transition&&n;this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body);this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){if(e.target!==e.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(r)this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");if(!t)return;r?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()}else if(t){t()}};var n=e.fn.modal;e.fn.modal=function(n,r){return this.each(function(){var i=e(this);var s=i.data("bs.modal");var o=e.extend({},t.DEFAULTS,i.data(),typeof n=="object"&&n);if(!s)i.data("bs.modal",s=new t(this,o));if(typeof n=="string")s[n](r);else if(o.show)s.show(r)})};e.fn.modal.Constructor=t;e.fn.modal.noConflict=function(){e.fn.modal=n;return this};e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this);var r=n.attr("href");var i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,""));var s=i.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());if(n.is("a"))t.preventDefault();i.modal(s,this).one("hide",function(){n.is(":visible")&&n.focus()})});e(document).on("show.bs.modal",".modal",function(){e(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){e(document.body).removeClass("modal-open")})}(jQuery)
/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype.show=function(){var t=this.element;var n=t.closest("ul:not(.dropdown-menu)");var r=t.data("target");if(!r){r=t.attr("href");r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}if(t.parent("li").hasClass("active"))return;var i=n.find(".active:last a")[0];var s=e.Event("show.bs.tab",{relatedTarget:i});t.trigger(s);if(s.isDefaultPrevented())return;var o=e(r);this.activate(t.parent("li"),n);this.activate(o,o.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:i})})};t.prototype.activate=function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");t.addClass("active");if(s){t[0].offsetWidth;t.addClass("in")}else{t.removeClass("fade")}if(t.parent(".dropdown-menu")){t.closest("li.dropdown").addClass("active")}r&&r()}var i=n.find("> .active");var s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o).emulateTransitionEnd(150):o();i.removeClass("in")};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this);var i=r.data("bs.tab");if(!i)r.data("bs.tab",i=new t(this));if(typeof n=="string")i[n]()})};e.fn.tab.Constructor=t;e.fn.tab.noConflict=function(){e.fn.tab=n;return this};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault();e(this).tab("show")})}(jQuery)

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function(e){"use strict";var t=function(e,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",e,t)};t.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};t.prototype.init=function(t,n,r){this.enabled=true;this.type=t;this.$element=e(n);this.options=this.getOptions(r);var i=this.options.trigger.split(" ");for(var s=i.length;s--;){var o=i[s];if(o=="click"){this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this))}else if(o!="manual"){var u=o=="hover"?"mouseenter":"focusin";var a=o=="hover"?"mouseleave":"focusout";this.$element.on(u+"."+this.type,this.options.selector,e.proxy(this.enter,this));this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.getOptions=function(t){t=e.extend({},this.getDefaults(),this.$element.data(),t);if(t.delay&&typeof t.delay=="number"){t.delay={show:t.delay,hide:t.delay}}return t};t.prototype.getDelegateOptions=function(){var t={};var n=this.getDefaults();this._options&&e.each(this._options,function(e,r){if(n[e]!=r)t[e]=r});return t};t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout);n.hoverState="in";if(!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){if(n.hoverState=="in")n.show()},n.options.delay.show)};t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout);n.hoverState="out";if(!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){if(n.hoverState=="out")n.hide()},n.options.delay.hide)};t.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this;var r=this.tip();this.setContent();if(this.options.animation)r.addClass("fade");var i=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement;var s=/\s?auto?\s?/i;var o=s.test(i);if(o)i=i.replace(s,"")||"top";r.detach().css({top:0,left:0,display:"block"}).addClass(i);this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var u=this.getPosition();var a=r[0].offsetWidth;var f=r[0].offsetHeight;if(o){var l=this.$element.parent();var c=i;var h=document.documentElement.scrollTop||document.body.scrollTop;var p=this.options.container=="body"?window.innerWidth:l.outerWidth();var d=this.options.container=="body"?window.innerHeight:l.outerHeight();var v=this.options.container=="body"?0:l.offset().left;i=i=="bottom"&&u.top+u.height+f-h>d?"top":i=="top"&&u.top-h-f<0?"bottom":i=="right"&&u.right+a>p?"left":i=="left"&&u.left-a<v?"right":i;r.removeClass(c).addClass(i)}var m=this.getCalculatedOffset(i,u,a,f);this.applyPlacement(m,i);this.hoverState=null;var g=function(){n.$element.trigger("shown.bs."+n.type)};e.support.transition&&this.$tip.hasClass("fade")?r.one(e.support.transition.end,g).emulateTransitionEnd(150):g()}};t.prototype.applyPlacement=function(t,n){var r;var i=this.tip();var s=i[0].offsetWidth;var o=i[0].offsetHeight;var u=parseInt(i.css("margin-top"),10);var a=parseInt(i.css("margin-left"),10);if(isNaN(u))u=0;if(isNaN(a))a=0;t.top=t.top+u;t.left=t.left+a;e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0);i.addClass("in");var f=i[0].offsetWidth;var l=i[0].offsetHeight;if(n=="top"&&l!=o){r=true;t.top=t.top+o-l}if(/bottom|top/.test(n)){var c=0;if(t.left<0){c=t.left*-2;t.left=0;i.offset(t);f=i[0].offsetWidth;l=i[0].offsetHeight}this.replaceArrow(c-s+f,f,"left")}else{this.replaceArrow(l-o,l,"top")}if(r)i.offset(t)};t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")};t.prototype.setContent=function(){var e=this.tip();var t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t);e.removeClass("fade in top bottom left right")};t.prototype.hide=function(){function i(){if(t.hoverState!="in")n.detach();t.$element.trigger("hidden.bs."+t.type)}var t=this;var n=this.tip();var r=e.Event("hide.bs."+this.type);this.$element.trigger(r);if(r.isDefaultPrevented())return;n.removeClass("in");e.support.transition&&this.$tip.hasClass("fade")?n.one(e.support.transition.end,i).emulateTransitionEnd(150):i();this.hoverState=null;return this};t.prototype.fixTitle=function(){var e=this.$element;if(e.attr("title")||typeof e.attr("data-original-title")!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")}};t.prototype.hasContent=function(){return this.getTitle()};t.prototype.getPosition=function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())};t.prototype.getCalculatedOffset=function(e,t,n,r){return e=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-n/2}:e=="top"?{top:t.top-r,left:t.left+t.width/2-n/2}:e=="left"?{top:t.top+t.height/2-r/2,left:t.left-n}:{top:t.top+t.height/2-r/2,left:t.left+t.width}};t.prototype.getTitle=function(){var e;var t=this.$element;var n=this.options;e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title);return e};t.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};t.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};t.prototype.enable=function(){this.enabled=true};t.prototype.disable=function(){this.enabled=false};t.prototype.toggleEnabled=function(){this.enabled=!this.enabled};t.prototype.toggle=function(t){var n=t?e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;n.tip().hasClass("in")?n.leave(n):n.enter(n)};t.prototype.destroy=function(){clearTimeout(this.timeout);this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this);var i=r.data("bs.tooltip");var s=typeof n=="object"&&n;if(!i&&n=="destroy")return;if(!i)r.data("bs.tooltip",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.tooltip.Constructor=t;e.fn.tooltip.noConflict=function(){e.fn.tooltip=n;return this}}(jQuery)

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");t.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype);t.prototype.constructor=t;t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.setContent=function(){var e=this.tip();var t=this.getTitle();var n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t);e.find(".popover-content")[this.options.html?typeof n=="string"?"html":"append":"text"](n);e.removeClass("fade top bottom left right in");if(!e.find(".popover-title").html())e.find(".popover-title").hide()};t.prototype.hasContent=function(){return this.getTitle()||this.getContent()};t.prototype.getContent=function(){var e=this.$element;var t=this.options;return e.attr("data-content")||(typeof t.content=="function"?t.content.call(e[0]):t.content)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};t.prototype.tip=function(){if(!this.$tip)this.$tip=e(this.options.template);return this.$tip};var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this);var i=r.data("bs.popover");var s=typeof n=="object"&&n;if(!i&&n=="destroy")return;if(!i)r.data("bs.popover",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.popover.Constructor=t;e.fn.popover.noConflict=function(){e.fn.popover=n;return this}}(jQuery)

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})


/*
 * Dynamic javascript File Port
 */

function insertParam(url, parameterName, parameterValue, atStart){
	replaceDuplicates = true;

	if(url.indexOf('#') > 0){
		var cl = url.indexOf('#');
		urlhash = url.substring(url.indexOf('#'),url.length);
	} else {
		urlhash = '';
		cl = url.length;
	}
	sourceUrl = url.substring(0,cl);

	var urlParts = sourceUrl.split("?");
	var newQueryString = "";

	if (urlParts.length > 1)
	{
		var parameters = urlParts[1].split("&");
		for (var i=0; (i < parameters.length); i++)
		{
			var parameterParts = parameters[i].split("=");
			if (!(replaceDuplicates && parameterParts[0] == parameterName))
			{
				if (newQueryString == "") {
					newQueryString = "?" + parameterParts[0] + "=" + (parameterParts[1]?parameterParts[1]:'');
				}
				else {
					newQueryString += "&";
					newQueryString += parameterParts[0] + "=" + (parameterParts[1]?parameterParts[1]:'');
				}
			}
		}
	}
	if (newQueryString == "")
		newQueryString = "?";

	if(atStart){
		newQueryString = '?'+ parameterName + "=" + parameterValue + (newQueryString.length>1?'&'+newQueryString.substring(1):'');
	} else {
		if (newQueryString !== "" && newQueryString != '?')
			newQueryString += "&";
		newQueryString += parameterName + "=" + (parameterValue?parameterValue:'');
	}
	return urlParts[0] + newQueryString + urlhash;
}

function ytVidId(url) {
	var p = /^(?:https?:)?(\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	return (url.match(p)) ? RegExp.$1 : false;
	//return (url.match(p)) ? true : false;
}

// Setting some global vars. Those are also needed for the correct header resizing on none parallax slider pages
var orig_logo_height = jQuery('.header-wrapper' ).find( '.logo' ).height();
var orig_logo_container_margin_top = String( jQuery('.header-wrapper' ).find( '.logo' ).data( 'margin-top' ) );
var orig_logo_container_margin_bottom = String( jQuery('.header-wrapper' ).find( '.logo' ).data( 'margin-bottom' ) );
var orig_menu_height = jQuery( '.header-wrapper .fusion-navbar-nav > li > a' ).outerHeight();
if( jQuery( '#wrapper' ).length >= 1 ) {
	var wrapper_position = jQuery( '#wrapper' ).position().left;
} else {
	var wrapper_position;
}
var is_parallax_tfs_slider = false;

if ( ! orig_logo_container_margin_top ) {
	orig_logo_container_margin_top = '0px';
}

if ( ! orig_logo_container_margin_bottom ) {
	orig_logo_container_margin_bottom = '0px';
}

function animate_scrolled_header_v1() {
	if( jQuery( '#wrapper' ).length >= 1 ) {
		wrapper_position = jQuery( '#wrapper' ).position().left;
	} else {
		wrapper_position;
	}

	if( ! Modernizr.mq('only screen and (max-width: 1000px)') ) {
		if( jQuery(window).scrollTop() > 0 ) {
			if( ! is_scrolled ) {
				jQuery( '.header-wrapper' ).css({
					'z-index': '5',
					'position': '',
					'margin-left': -wrapper_position + 'px',
					'height': orig_header_height
				});

				if( js_local_vars.layout_mode == 'boxed' ) {
					jQuery( '.header-v1' ).css({
						'width': jQuery( '#wrapper' ).width(),
						'left': '0',
						'right': '0',
						'margin': ' 0 auto'
					});
				} else {
					jQuery( '.header-v1' ).css({
						'width': '100%',
					});
				}

				jQuery( '.header-v1' ).css( {
					'z-index': '5',
					'position': 'fixed',
					'height': orig_header_height,
					'-webkit-box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
					'-moz-box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
					'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
					'-webkit-backface-visibility': 'hidden'
				});

				jQuery( '.header-wrapper' ).find( '.fusion-navbar-nav > li > a' ).css( 'height', orig_menu_height );

				jQuery( '.header-wrapper,	 .header-v1' ).stop(true, true).animate({
					height: scrolled_header_height
				}, { queue:false, duration:350, easing: 'easeOutCubic' });

				jQuery( '.header-wrapper' ).find( '.avada-row' ).stop(true, true).animate({
					'padding-top': '0',
					'padding-bottom': '0'
				}, { queue:false, duration:350, easing: 'easeOutCubic' });

				if( jQuery( '.header-wrapper' ).find( '.logo .logo_normal:visible' ) ) {
					var scrolled_logo_height = jQuery( '.header-v1' ).find( '.logo .normal_logo' ).height();
					if(  scrolled_logo_height < scrolled_header_height - 10 ) {
						var scrolled_logo_container_margin = ( scrolled_header_height - scrolled_logo_height ) / 2;
					} else {
						scrolled_logo_height = scrolled_header_height - 10;
						var scrolled_logo_container_margin = 5;
					}

					jQuery( '.header-wrapper' ).find( '.logo .logo_normal' ).stop(true, true).animate({
						'height': scrolled_logo_height
					}, { queue:false, duration:350, easing: 'easeOutCubic' });
				}

				jQuery( '.header-wrapper' ).find( '.logo' ).stop(true, true).animate({
					'margin-top': scrolled_logo_container_margin,
					'margin-bottom': scrolled_logo_container_margin
				}, { queue:false, duration:350, easing: 'easeOutCubic' });

				jQuery( '.header-wrapper' ).find( '.fusion-navbar-nav > li > a' ).stop(true, true).animate({
					height: scrolled_header_height - 3,
					'line-height': scrolled_header_height - 3
				}, { queue:false, duration:350, easing: 'easeOutCubic', complete: function() {
						if( ! jQuery( '.header-v1 .nav-holder style' ).length ) {
							jQuery( '.header-v1 .nav-holder' ).prepend( '<style>.header-v1 #nav.nav-holder .navigation > .cart > a { height:' + scrolled_header_height + ';line-height:' + scrolled_header_height + '; }</style>' );
						}
					}
				});
			}
		} else {
			if( is_scrolled ) {

				jQuery( '.header-v1' ).css( {
					'-webkit-box-shadow': '',
					'-moz-box-shadow': '',
					'box-shadow': '',
					'-webkit-backface-visibility': ''
				});

				jQuery( '.header-wrapper, .header-v1' ).stop(true, true).animate({
					'height': orig_header_height
				}, { queue:false, duration:350, easing: 'easeOutCubic', complete: function() {
						jQuery( '.header-wrapper' ).css( 'margin-left', '' );

						jQuery( this ).css({
							'position': 'relative',
							'width': ''
						});
					}
				});

				jQuery( '.header-wrapper' ).find( '.avada-row' ).stop(true, true).animate({
					'padding-top': '0',
					'padding-bottom': '0'
				}, { queue:false, duration:350, easing: 'easeOutCubic' });

				if( jQuery( '.header-wrapper' ).find( '.logo .logo_normal:visible' ) ) {
					jQuery( '.header-wrapper' ).find( '.logo .logo_normal' ).stop(true, true).animate({
						'height': orig_logo_height
					}, { queue:false, duration:350, easing: 'easeOutCubic' });
				}

				jQuery( '.header-wrapper' ).find( '.logo' ).stop(true, true).animate({
					'margin-top': orig_logo_container_margin_top,
					'margin-bottom': orig_logo_container_margin_bottom
				}, { queue:false, duration:350, easing: 'easeOutCubic' });

				jQuery( '.header-wrapper' ).find( '.fusion-navbar-nav > li > a' ).stop(true, true).animate({
					'height': orig_menu_height,
					'line-height': orig_menu_height
				}, { queue:false, duration:350, easing: 'easeOutCubic', complete: function() {
						if( jQuery( '.header-wrapper .nav-holder style' ).length ) {
							jQuery( '.header-wrapper .nav-holder style' ).remove();
						}
					}
				});
			}
		}
	}

	if( jQuery(window).scrollTop() > 0 ) {
		is_scrolled = true;
	} else {
		is_scrolled = false;
	}
}

jQuery(window).load(function() {
	var headerHeight = jQuery('.header-wrapper').height();

	if( jQuery( '.header-v1' ).length ) {
		if( orig_logo_height + parseInt(orig_logo_container_margin_top.replace( 'px', '' ) ) + parseInt( orig_logo_container_margin_bottom.replace( 'px', '' ) ) > orig_menu_height ) {
			headerHeight = orig_logo_height + parseInt(orig_logo_container_margin_top.replace( 'px', '' ) ) + parseInt( orig_logo_container_margin_bottom.replace( 'px', '' ) );
		} else {
			headerHeight = orig_menu_height;
		}
	}
	if(!Boolean(Number(js_local_vars.avada_rev_styles))) {
		jQuery('.rev_slider_wrapper').each(function() {
			var rev_slider_wrapper = jQuery(this);

			if(jQuery(this).length >=1 && jQuery(this).find('.tp-bannershadow').length == 0) {
				jQuery('<div class="shadow-left">').appendTo(this);
				jQuery('<div class="shadow-right">').appendTo(this);

				jQuery(this).addClass('avada-skin-rev');
			}

			if( ! jQuery(this).find( '.tp-leftarrow' ).hasClass( 'preview1' ) && ! jQuery(this).find( '.tp-leftarrow' ).hasClass( 'preview2' ) && ! jQuery(this).find( '.tp-leftarrow' ).hasClass( 'preview3' ) && ! jQuery(this).find( '.tp-leftarrow' ).hasClass( 'preview4' ) ) {
				jQuery(this).addClass('avada-skin-rev-nav');
			}


			if( rev_slider_wrapper.find( '.tp-leftarrow' ).height() > rev_slider_wrapper.height() / 4 ) {
				var rev_slider_id = rev_slider_wrapper.attr('id');
				var new_dimension = rev_slider_wrapper.height() / 4;
				if( rev_slider_wrapper.find( 'style' ).length ) {
					rev_slider_wrapper.find( 'style' ).replaceWith( '<style>#' + rev_slider_id + ' .tp-leftarrow, #' + rev_slider_id + ' .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}#' + rev_slider_id + ' .tp-leftarrow:before, #' + rev_slider_id + ' .tp-rightarrow:before{line-height:' + new_dimension  + 'px;font-size:' + new_dimension / 2 + 'px;}</style>' );
				} else {
					rev_slider_wrapper.prepend( '<style>#' + rev_slider_id + ' .tp-leftarrow, #' + rev_slider_id + ' .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}#' + rev_slider_id + ' .tp-leftarrow:before, #' + rev_slider_id + ' .tp-rightarrow:before{line-height:' + new_dimension  + 'px;font-size:' + new_dimension / 2 + 'px;}</style>' );
				}
			}

			jQuery(window).on('resize', function() {
				if( rev_slider_wrapper.find( '.tp-leftarrow' ).height() > rev_slider_wrapper.height() / 4 ) {

					var new_dimension = rev_slider_wrapper.height() / 4;
					if( rev_slider_wrapper.find( 'style' ).length ) {
						rev_slider_wrapper.find( 'style' ).replaceWith( '<style>.rev_slider_wrapper .tp-leftarrow, .rev_slider_wrapper .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}.rev_slider_wrapper .tp-leftarrow:before, .rev_slider_wrapper .tp-rightarrow:before{line-height:' + new_dimension  + 'px;font-size:' + new_dimension / 2 + 'px;}</style>' );
					} else {
						rev_slider_wrapper.prepend( '<style>.rev_slider_wrapper .tp-leftarrow, .rev_slider_wrapper .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}.rev_slider_wrapper .tp-leftarrow:before, .rev_slider_wrapper .tp-rightarrow:before{line-height:' + new_dimension  + 'px;font-size:' + new_dimension / 2 + 'px;}</style>' );
					}
				} else {
					rev_slider_wrapper.find( 'style' ).remove();
				}
			});

		});
	}
});

jQuery(window).load(function($) {
	var header_social_height;
	var other_content_alignment;

	if( ( jQuery( window ).width() >= 800 || ( js_local_vars.mobile_menu_design == 'modern' && Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)') ) ) && js_local_vars.ipad_potrait == '0' ) {
		header_social_height = jQuery( '.header-social' ).height();

		jQuery( '.header-social .menu > li' ).css( {
			'height': header_social_height,
			'line-height': header_social_height + 'px'
		});
	}

	if( jQuery( '.header-social .alignleft .top-menu' ).length ) {
		other_content_alignment  = '.alignright';
	}

	if( jQuery( '.header-social .alignright .top-menu' ).length ) {
		other_content_alignment  = '.alignleft';
	}

	jQuery(window).on('resize', function() {
		if( jQuery( '.header-social' ).find( other_content_alignment ).height() > 43 ) {
			header_social_height = jQuery( '.header-social' ).find( other_content_alignment ).height();
		} else {
			header_social_height = 43;
		}

		jQuery( '.header-social .menu > li' ).css( {
			'height': header_social_height,
			'line-height': header_social_height + 'px'
		});
	});

	if(jQuery('.top-menu .cart').width() > 150) {
		new_width = jQuery('.top-menu .cart').outerWidth();
		jQuery('.top-menu .cart-contents').css("width", new_width+'px');
		new_width -= 2;
		jQuery('.top-menu .cart-content a').css("width", new_width+'px');
	};

	// sticky header v1 - v5
	if( jQuery( '.sticky-header' ).length ) {
		jQuery('.sticky-header').init_sticky_header();
	}
});