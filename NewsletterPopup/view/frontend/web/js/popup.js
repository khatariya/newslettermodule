define(['jquery'], function($) {
    'use strict';
    
    function showPopup() {
        $('#apc-newsletter-popup').fadeIn();
    }
    function hidePopup() {
        $('#apc-newsletter-popup').fadeOut();
    }
    
    return function(config, element) {
        var popupClosed = localStorage.getItem('apc_newsletter_popup_closed');
        if (!popupClosed) {
            setTimeout(showPopup, 1000); // Show after 1s
        }
        $(document).on('click', '.apc-newsletter-popup-close', function() {
            hidePopup();
            localStorage.setItem('apc_newsletter_popup_closed', '1');
        });
        // Use the correct form ID for the newsletter form
        $('#newsletter-validate-detail-popup').on('submit', function() {
            localStorage.setItem('apc_newsletter_popup_closed', '1');
        });
    }
}); 