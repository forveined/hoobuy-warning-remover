// ==UserScript==
// @name         remove hoobuy warning
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  removes the branded product warning on hoobuy
// @author       forveined
// @match        https://hoobuy.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    function checkforElement(selector, callback) {
        var interval = setInterval(function() {
            var element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                callback(element);
            }
        }, 100);
    }
    checkforElement('.el-overlay', function(overlay) {
        overlay.remove();
    });
})();
