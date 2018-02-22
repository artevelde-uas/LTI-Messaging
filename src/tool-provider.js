/**
 * @file Provides an object to send LTI Iframe communication messages to an LTI tool consumer
 * @author Renaat De Muynck <renaat.demuynck@gmail.com>
 * @license MIT
 */

function postMessage(subject, params) {
    params.subject = 'lti.' + subject;
    window.parent.postMessage(JSON.stringify(params), '*');
}

export default {
    
    /**
     * Tell the tool consumer to resize the iframe.
     */
    frameResize: function () {
        postMessage('frameResize', {
            height: document.documentElement.scrollHeight
        });
    },
    
    /**
     * Tell the tool consumer to show the module navigation.
     */
    showModuleNavigation: function () {
        postMessage('showModuleNavigation', {
            show: true
        });
    },
    
    /**
     * Tell the tool consumer to hide the module navigation.
     */
    hideModuleNavigation: function () {
        postMessage('showModuleNavigation', {
            show: false
        });
    },
    
    /**
     * Tell the tool consumer to scroll to top.
     */
    scrollToTop: function () {
        postMessage('scrollToTop');
    },
    
    /**
     * Tell the tool consumer to navigate home
     */
    navigateHome: function () {
        postMessage('navigation', {
            location: 'home'
        });
    },
    
    /**
     * Tell the tool consumer to navigate to the next item
     */
    navigateNext: function () {
        postMessage('navigation', {
            location: 'next'
        });
    },
    
    /**
     * Tell the tool consumer to navigate to the previous item
     */
    navigatePrevious: function () {
        postMessage('navigation', {
            location: 'previous'
        });
    }
    
};
