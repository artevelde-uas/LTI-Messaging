/**
 * @file Provides an object to send LTI Iframe communication messages to an LTI tool consumer
 * @module ToolProvider
 * @author Renaat De Muynck <renaat.demuynck@arteveldehs.be>
 * @license MIT
 */


function postMessage(subject, params) {
    if (params === undefined) {
        params = {};
    }
    params.subject = `lti.${subject}`;
    window.parent.postMessage(JSON.stringify(params), '*');
}


/**
 * Tell the tool consumer to resize the iframe.
 * 
 * @static
 * @param {number} height The height to set the iframe to
 */
function frameResize(height) {
    if (height === undefined) {
        height = Math.round(document.documentElement.getBoundingClientRect().height);
    } else {
        height = parseInt(height, 10);
    }

    postMessage('frameResize', {
        height
    });
}

/**
 * Tell the tool consumer to show the module navigation.
 * 
 * @static
 */
function showModuleNavigation() {
    postMessage('showModuleNavigation', {
        show: true
    });
}

/**
 * Tell the tool consumer to hide the module navigation.
 * 
 * @static
 */
function hideModuleNavigation() {
    postMessage('showModuleNavigation', {
        show: false
    });
}

/**
 * Tell the tool consumer to scroll to top.
 * 
 * @static
 */
function scrollToTop() {
    postMessage('scrollToTop');
}

/**
 * Tell the tool consumer to navigate home
 * 
 * @static
 */
function navigateHome() {
    postMessage('navigation', {
        location: 'home'
    });
}

/**
 * Tell the tool consumer to navigate to the next item
 * 
 * @static
 */
function navigateNext() {
    postMessage('navigation', {
        location: 'next'
    });
}

/**
 * Tell the tool consumer to navigate to the previous item
 * 
 * @static
 */
function navigatePrevious() {
    postMessage('navigation', {
        location: 'previous'
    });
}

/**
 * Tell the tool consumer to show a message before navigating away
 * 
 * @static
 * @param {string} message The message to send
 */
function setUnloadMessage(message) {
    postMessage('setUnloadMessage', {
        message
    });
}

/**
 * Tell the tool consumer to remove the unload message
 * 
 * @static
 * @param {string} message The message to send
 */
function removeUnloadMessage(message) {
    postMessage('removeUnloadMessage', {
        message
    });
}

/**
 * Tell the tool consumer to send a message to the screen reader
 * 
 * @static
 * @param {string} body The message body to send
 */
function screenReaderAlert(body) {
    postMessage('screenReaderAlert', {
        body
    });
}

/**
 * Tell the tool consumer to reload the iframe
 * 
 * @static
 */
function pageRefresh() {
    postMessage('pageRefresh');
}


export default {
    frameResize,
    showModuleNavigation,
    hideModuleNavigation,
    scrollToTop,
    navigateHome,
    navigateNext,
    navigatePrevious,
    setUnloadMessage,
    removeUnloadMessage,
    screenReaderAlert,
    pageRefresh
};
