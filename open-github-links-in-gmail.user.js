// ==UserScript==
// @name         Open GitHub Links in Gmail
// @namespace    https://wiki.gslin.org/wiki/Open_GitHub_Links_in_Gmail
// @version      0.20190513.0
// @description  Open all GitHub links in Gmail using "i".
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @match        https://mail.google.com/*
// @grant        GM_openInTab
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', ev => {
        if ('i' === ev.key) {
            for (let el of document.querySelectorAll('div[role="listitem"] a[href^="https://github.com/"]')) {
                GM_openInTab(el.getAttribute('href'), true);
            }
        }
    });
})();
