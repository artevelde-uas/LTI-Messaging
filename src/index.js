/**
 * @file Provides an object to send LTI Iframe communication messages to an LTI tool consumer
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
 */
function frameResize(height) {
    if (height === undefined) {
        height = Math.round(document.documentElement.getBoundingClientRect().height);
    } else {
        height = parseInt(height, 10);
    }

    postMessage('frameResize', {
        height: height
    });
}

/**
 * Tell the tool consumer to show the module navigation.
 */
function showModuleNavigation() {
    postMessage('showModuleNavigation', {
        show: true
    });
}

/**
 * Tell the tool consumer to hide the module navigation.
 */
function hideModuleNavigation() {
    postMessage('showModuleNavigation', {
        show: false
    });
}

/**
 * Tell the tool consumer to scroll to top.
 */
function scrollToTop() {
    postMessage('scrollToTop');
}

/**
 * Tell the tool consumer to navigate home
 */
function navigateHome() {
    postMessage('navigation', {
        location: 'home'
    });
}

/**
 * Tell the tool consumer to navigate to the next item
 */
function navigateNext() {
    postMessage('navigation', {
        location: 'next'
    });
}

/**
 * Tell the tool consumer to navigate to the previous item
 */
function navigatePrevious() {
    postMessage('navigation', {
        location: 'previous'
    });
}

/**
 * Tell the tool consumer to show a message before navigating away
 */
function setUnloadMessage(message) {
    postMessage('setUnloadMessage', {
        message: message
    });
}

/**
 * Tell the tool consumer to remove the unload message
 */
function removeUnloadMessage(message) {
    postMessage('removeUnloadMessage', {
        message: message
    });
}

/**
 * Tell the tool consumer to send a message to the screen reader
 */
function screenReaderAlert(body) {
    postMessage('screenReaderAlert', {
        body: body
    });
}

/**
 * Tell the tool consumer to reload the iframe
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
