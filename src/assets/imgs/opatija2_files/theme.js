 "use strict";
var header = jQuery('.main_header'),
    header_h = header.height(),
    headerWrapper = jQuery('.header_wrapper'),
    menu = header.find('ul.menu'),
	main_li = menu.children('li'),
    html = jQuery('html'),
    body = jQuery('body'),
    footer = jQuery('.main_footer'),
    window_h = jQuery(window).height(),
    window_w = jQuery(window).width(),
    main_wrapper = jQuery('.main_wrapper'),
	main_wrapper_min = window_h-header_h-footer.height()-parseInt(jQuery('.site_wrapper').css('padding-top'))-parseInt(jQuery('.site_wrapper').css('padding-bottom')),
	right_sidebar = jQuery('.right-sidebar-block'),
	left_sidebar = jQuery('.left-sidebar-block'),
    site_wrapper = jQuery('.site_wrapper'),
    preloader_block = jQuery('.preloader'),
    fullscreen_block = jQuery('.fullscreen_block'),
    is_masonry = jQuery('.is_masonry'),
    grid_portfolio_item = jQuery('.grid-portfolio-item'),
    pp_block = jQuery('.pp_block'),
    fs_min = 0,
	map_h = 0;

jQuery(document).ready(function ($) {
	if (jQuery('.psevdo_header').size() > 0) {
		jQuery('.psevdo_header').height(header_h);
	}
	if (jQuery('.main_wrapper').size() > 0) {
		setTimeout("jQuery('.main_wrapper').animate({'opacity' : '1'}, 500)", 500);
	} else if (jQuery('.fullscreen_block').size() > 0) {
		setTimeout("jQuery('.fullscreen_block').animate({'opacity' : '1'}, 500)", 500);
	}
	if (jQuery('.ribbon_wrapper').size() > 0) {
		setTimeout("jQuery('.ribbon_wrapper').animate({'opacity' : '1'}, 1000)", 500);
	}
	if (jQuery('.pf_output_container').size() > 0) {
		setTimeout("jQuery('.pf_output_container').animate({'opacity' : '1'}, 1000)", 500);
	}
	if (jQuery('.strip-template').size() > 0) {
		setTimeout("jQuery('.strip-template').animate({'opacity' : '1'}, 1000)", 500);
	}

	if (jQuery('.fs_gallery_wrapper').size() > 0) {
		setTimeout("jQuery('.fs_gallery_wrapper').animate({'opacity' : '1'}, 1000)", 500);
	}
	if (jQuery('.strip-landing').size() > 0) {
		setTimeout("jQuery('.strip-landing').animate({'opacity' : '1'}, 1000)", 500);
		setTimeout("jQuery('.landing_logo2').animate({'opacity' : '1'}, 1000)", 500);
	}

    if (body.hasClass('admin-bar') && window_w > 760) {

	}
	if (window_w < 760 && jQuery('.module_content').size() > 0) {
		jQuery('.module_content').each(function(){
			if (jQuery.trim(jQuery(this).html()) == '') {
				jQuery(this).parent('.module_cont').addClass('empty_module');
			}
		});
	}
	if (window_w < 760 && jQuery('.module_blog_page').size() > 0) {
		iframe16x9(jQuery('.pf_output_container'));
	}

    content_update();
    //Flickr Widget
    if (jQuery('.flickr_widget_wrapper').size() > 0) {
        jQuery('.flickr_badge_image a').each(function () {
            jQuery(this).append('<div class="flickr_fadder"></div>');
        });
    }

    //Main and Mobile Menu
    header.find('.header_wrapper').append('<a href="javascript:void(0)" class="menu_toggler"><span></span></a>');
    if (jQuery('.header_filter').size() > 0) {
        jQuery('.header_filter').before('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
    } else {
        header.append('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
    }
    jQuery('.mobile_menu').html(header.find('.menu').html());
    var lang  = header.find('.Language-header').clone();
    jQuery('.mobile_menu_wrapper').append(lang);
    jQuery('.mobile_menu_wrapper').find('.Language-header').addClass('Language-mobile');

    jQuery('.mobile_menu_wrapper').hide();
    jQuery('.menu_toggler').click(function () {
        jQuery('.mobile_menu_wrapper').slideToggle(300);
        jQuery('.main_header').toggleClass('opened');
        jQuery(this).toggleClass('is-open');
    });
    if (pp_block.size() > 0) {
		html.addClass('pp_page');
		jQuery('.custom_bg').remove();
		jQuery('.fixed_bg').remove();
        pp_center();
    }
    $('img').bind('contextmenu', function(e) {
        return false;
    }); 
});

jQuery(window).resize(function () {
    window_h = jQuery(window).height();
    window_w = jQuery(window).width();
	header_h = header.height();
    content_update();
});

jQuery(window).load(function () {
    content_update();
});

function content_update() {
	if (jQuery('.contacts_map').size() > 0) {
		map_h = jQuery('.contacts_map').height() + parseInt(jQuery('.contacts_map').css('margin-bottom'));
	}
	main_wrapper_min = window_h-header_h-footer.height()-parseInt(jQuery('.site_wrapper').css('padding-top'))-parseInt(jQuery('.site_wrapper').css('padding-bottom'));

	if (jQuery('.contacts_map').size() > 0) {
		jQuery('.content_wrapper').css('min-height', main_wrapper_min - map_h);
	}

	fs_min = window_h-header_h-footer.height();
	main_wrapper.css('min-height', main_wrapper_min+'px');
	if (jQuery('.fullscreen_block').size() > 0) {
		jQuery('.fullscreen_block').css('min-height', fs_min+'px');
	}

    if (window_w > 760) {
        if (body.hasClass('admin-bar')) {

        }
    }
	var half1 = (105 - parseInt(main_li.children('a').css('line-height')))/2 - 1,
		half2 = half1+2;
	//main_li.children('a').css({'padding-top' : half1+'px', 'padding-bottom' : half2+'px',});
	if (jQuery('.contacts_map').size() > 0) {
		if (right_sidebar.size() > 0) {
			if (right_sidebar.height() < main_wrapper.height()-map_h) {
				right_sidebar.height(main_wrapper.height()-map_h);
			}
		}
		if (left_sidebar.size() > 0) {
			if (left_sidebar.height() < main_wrapper.height()-map_h) {
				left_sidebar.height(main_wrapper.height()-map_h);
			}
		}
	} else {
		if (right_sidebar.size() > 0) {
			if (right_sidebar.height() < main_wrapper.height()) {
				right_sidebar.height(main_wrapper.height());
			}
		}
		if (left_sidebar.size() > 0) {
			if (left_sidebar.height() < main_wrapper.height()) {
				left_sidebar.height(main_wrapper.height());
			}
		}

	}
}

function gt3_get_blog_posts(post_type, posts_count, posts_already_showed, template_name, content_insert_class, categories, set_pad) {
    jQuery.post(gt3_ajaxurl, {
        action: "gt3_get_blog_posts",
        post_type: post_type,
        posts_count: posts_count,
        posts_already_showed: posts_already_showed,
        template_name: template_name,
        content_insert_class: content_insert_class,
        categories: categories,
        set_pad: set_pad
    })
        .done(function (data) {
            jQuery(content_insert_class).append(data);
            if (jQuery('.this_is_blog').size() > 0) {
                jQuery('.pf_output_container').each(function () {
                    if (jQuery(this).html() == '') {
                        jQuery(this).parents('.fw_preview_wrapper').addClass('no_pf');
                    } else {
                        jQuery(this).parents('.fw_preview_wrapper').addClass('has_pf');
                    }
                });
            }
            if (jQuery('.fw-portPreview-content').size() > 0) {
                port_setup();
            }
            if (is_masonry.size() > 0) {
                is_masonry.masonry('reloadItems');
                is_masonry.masonry();
            }
            if (jQuery('.fs_grid_portfolio').size() > 0) {
                setupGrid();
                grid_portfolio_item.unbind();
                grid_portfolio_item.bind({
                    mouseover: function () {
                        jQuery(this).removeClass('unhovered');
                        jQuery(this).find('.grid-item-trigger').css('height', jQuery(this).find('img').height() + jQuery(this).find('.fs-port-cont').height());
                    },
                    mouseout: function () {
                        jQuery(this).addClass('unhovered');
                        jQuery(this).find('.grid-item-trigger').css('height', jQuery(this).find('img').height());
                    }
                });
            }
			iframe16x9(jQuery('.fs_blog_module'));
			if (jQuery('.newLoaded').find('.pf_output_container').size() > 0) {
				setTimeout("jQuery('.pf_output_container').animate({'opacity' : '1'}, 1000)", 500);
			}
            jQuery('.newLoaded').each(function () {
                jQuery(this).find('.gallery_likes_add').click(function () {
                    var gallery_likes_this = jQuery(this);
                    if (!jQuery.cookie(gallery_likes_this.attr('data-modify') + gallery_likes_this.attr('data-attachid'))) {
                        jQuery.post(gt3_ajaxurl, {
                            action: 'add_like_attachment',
                            attach_id: jQuery(this).attr('data-attachid')
                        }, function (response) {
                            jQuery.cookie(gallery_likes_this.attr('data-modify') + gallery_likes_this.attr('data-attachid'), 'true', {
                                expires: 7,
                                path: '/'
                            });
                            gallery_likes_this.addClass('already_liked');
                            gallery_likes_this.find('i').removeClass('icon-heart-o').addClass('icon-heart');
                            gallery_likes_this.find('span').text(response);
                        });
                    }
                });
                jQuery(this).removeClass('newLoaded');
            });
            setTimeout("animateList()", 300);
            jQuery(window).on('scroll', scrolling);
			jQuery('.fs_port_item').hover(function(){
				html.addClass('fadeMe');
				jQuery(this).addClass('unfadeMe');
			},function(){
				html.removeClass('fadeMe');
				jQuery(this).removeClass('unfadeMe');
			});
        });
}

function gt3_get_portfolio(post_type, posts_count, posts_already_showed, template_name, content_insert_class, categories, set_pad, post_type_field) {
    jQuery.post(gt3_ajaxurl, {
        action: "get_portfolio_works",
        post_type: post_type,
        posts_count: posts_count,
        posts_already_showed: posts_already_showed,
        template_name: template_name,
        content_insert_class: content_insert_class,
        categories: categories,
        set_pad: set_pad,
		post_type_field: post_type_field
    })
        .done(function (data) {
            jQuery(content_insert_class).append(data);
            if (jQuery('.this_is_blog').size() > 0) {
                jQuery('.pf_output_container').each(function () {
                    if (jQuery(this).html() == '') {
                        jQuery(this).parents('.fw_preview_wrapper').addClass('no_pf');
                    } else {
                        jQuery(this).parents('.fw_preview_wrapper').addClass('has_pf');
                    }
                });
            }
            if (jQuery('.fw-portPreview-content').size() > 0) {
                port_setup();
            }
            if (is_masonry.size() > 0) {
                is_masonry.masonry('reloadItems');
                is_masonry.masonry();
            }
            if (jQuery('.fs_grid_portfolio').size() > 0) {
                setupGrid();
                grid_portfolio_item.unbind();
                grid_portfolio_item.bind({
                    mouseover: function () {
                        jQuery(this).removeClass('unhovered');
                        jQuery(this).find('.grid-item-trigger').css('height', jQuery(this).find('img').height() + jQuery(this).find('.fs-port-cont').height());
                    },
                    mouseout: function () {
                        jQuery(this).addClass('unhovered');
                        jQuery(this).find('.grid-item-trigger').css('height', jQuery(this).find('img').height());
                    }
                });
            }
            jQuery('.newLoaded').each(function () {
                jQuery(this).find('.gallery_likes_add').click(function () {
                    var gallery_likes_this = jQuery(this);
                    if (!jQuery.cookie(gallery_likes_this.attr('data-modify') + gallery_likes_this.attr('data-attachid'))) {
                        jQuery.post(gt3_ajaxurl, {
                            action: 'add_like_attachment',
                            attach_id: jQuery(this).attr('data-attachid')
                        }, function (response) {
                            jQuery.cookie(gallery_likes_this.attr('data-modify') + gallery_likes_this.attr('data-attachid'), 'true', {
                                expires: 7,
                                path: '/'
                            });
                            gallery_likes_this.addClass('already_liked');
                            gallery_likes_this.find('i').removeClass('icon-heart-o').addClass('icon-heart');
                            gallery_likes_this.find('span').text(response);
                        });
                    }
                });
                jQuery(this).removeClass('newLoaded');
            });
			iframe16x9(jQuery('.fs_blog_module'));

            setTimeout("animateList()", 300);
            jQuery(window).on('scroll', scrolling);
			jQuery('.fs_port_item').hover(function(){
				html.addClass('fadeMe');
				jQuery(this).addClass('unfadeMe');
			},function(){
				html.removeClass('fadeMe');
				jQuery(this).removeClass('unfadeMe');
			});
        });
}

function gt3_get_isotope_posts(post_type, posts_count, posts_already_showed, template_name, content_insert_class, categories, set_pad, post_type_field) {
    jQuery.post(gt3_ajaxurl, {
        action: "get_portfolio_works",
        post_type: post_type,
        posts_count: posts_count,
        posts_already_showed: posts_already_showed,
        template_name: template_name,
        content_insert_class: content_insert_class,
        categories: categories,
        set_pad: set_pad,
		post_type_field: post_type_field
    })
        .done(function (data) {
            if (data.length < 1) {
                jQuery(".load_more_works").hide("fast");
            }
            if (jQuery('.fw-portPreview-content').size() > 0) {
                port_setup();
            }

            var $newItems = jQuery(data);
            jQuery(content_insert_class).isotope('insert', $newItems, function () {
                jQuery(content_insert_class).ready(function () {
                    jQuery(content_insert_class).isotope('reLayout');
                });
                if (jQuery('.fs-port-cont').size() > 0) {
                    setTimeout("setupGrid()", 500);
                    setTimeout("setupGrid()", 1000);
                    setTimeout('jQuery(".fs_grid_portfolio").isotope("reLayout");', 1500);
                }
            });
            jQuery('.newLoaded').each(function () {
                jQuery(this).find('.gallery_likes_add').click(function () {
                    var gallery_likes_this = jQuery(this);
                    if (!jQuery.cookie(gallery_likes_this.attr('data-modify') + gallery_likes_this.attr('data-attachid'))) {
                        jQuery.post(gt3_ajaxurl, {
                            action: 'add_like_attachment',
                            attach_id: jQuery(this).attr('data-attachid')
                        }, function (response) {
                            jQuery.cookie(gallery_likes_this.attr('data-modify') + gallery_likes_this.attr('data-attachid'), 'true', {
                                expires: 7,
                                path: '/'
                            });
                            gallery_likes_this.addClass('already_liked');
                            gallery_likes_this.find('i').removeClass('icon-heart-o').addClass('icon-heart');
                            gallery_likes_this.find('span').text(response);
                        });
                    }
                });
                jQuery(this).removeClass('newLoaded');
            });
			jQuery('.fs_port_item').hover(function(){
				html.addClass('fadeMe');
				jQuery(this).addClass('unfadeMe');
			},function(){
				html.removeClass('fadeMe');
				jQuery(this).removeClass('unfadeMe');
			});
        });
}

function animateList() {
    jQuery('.loading:first').removeClass('loading').animate({'z-index': '15'}, 200, function () {
        animateList();
        if (is_masonry.size() > 0) {
            is_masonry.masonry();
        }
    });
};

function workCheck() {
    if (jQuery('.fs_blog_module').height() < parseInt(fullscreen_block.css('min-height'))) {
        get_works();
    } else {
        fullscreen_block.addClass('cheked');
    }
}

function scrolling() {
    var chk_height = jQuery('body').height() - jQuery(this).height() - header.height() - footer.height() - 20;
    if (jQuery(this).scrollTop() >= chk_height) {
        jQuery(this).unbind("scroll");
        get_works();
    }
}

function iframe16x9(container) {
	container.find('iframe').each(function(){
		jQuery(this).height((jQuery(this).width()/16)*9);
	});
}

var setTop = 0;
function pp_center() {
    var pp_block = jQuery('.pp_block');
    setTop = (window_h - pp_block.height()) / 2;
    pp_block.css('top', setTop + 'px');
    pp_block.removeClass('fixed');
}
