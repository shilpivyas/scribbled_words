/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(function () {
    jQuery(document).delegate('#subscription-block .subscription-head','click',function() {
        if(jQuery(this).parent().find('.subscription-body').hasClass('open-block')) {
//            jQuery(this).parent().find('.balloon-img').slideUp('slow');
            jQuery(this).parent().find('.subscription-body').removeClass('open-block').addClass('close-block');
            jQuery(this).parent().find('.balloon-img').css('bottom','214px');
            jQuery(this).parent().find('.balloon-img').removeClass('slide-down-img').addClass('slide-up-img');
            jQuery(this).find('.chevron .fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            jQuery(this).parent().find('.subscription-body').slideDown('slow');
        } else {
            jQuery(this).parent().find('.subscription-body').removeClass('close-block').addClass('open-block');
            jQuery(this).parent().find('.balloon-img').css('bottom','27px');
//            jQuery(this).parent().find('.balloon-img').slideDown('slow');
            jQuery(this).parent().find('.balloon-img').removeClass('slide-up-img').addClass('slide-down-img');
            jQuery(this).find('.chevron .fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            jQuery(this).parent().find('.subscription-body').slideUp('slow');
        }
    });
    
    jQuery('#subscription-block #subscribed').click(function() {
        jQuery(this).parents('#subscription-block').hide();
    });
    
    jQuery( window ).scroll(function() {
        if(jQuery(window).scrollTop() > 320) {
            jQuery('#site-navigation').addClass('affix');
        } else {
            jQuery('#site-navigation').removeClass('affix');
        }
    });
});