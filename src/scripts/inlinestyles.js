(function () {
    function getCss(el) {
        var sheets = document.styleSheets, ret = [];
        el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector
            || el.msMatchesSelector || el.oMatchesSelector;
        for (var i in sheets) {
            var rules = sheets[i].rules || sheets[i].cssRules;
            for (var r in rules) {
                if (el.matches(rules[r].selectorText)) {
                    ret.push(rules[r].cssText);
                }
            }
        }
        return ret;
    }
    function getCssComplete(el) {
        try {
            var css = getComputedStyle(el), ret = {};
        }
        catch (err) {
            console.error(el.nodeType);
        }
        for (var i = 0; i < css.length; i++) {
            var key = css[i];
            var value = css.getPropertyValue(key);
            ret[key] = value;
        }
        return ret;
    }
    function getStyleObjComplete(elem) {
        var innerCssMatcher = /\{[\n\s]*([^\}]*)[\n\s]*\}/m
        return getCssComplete(elem);
    }


    function getStyleObj(elem) {

        // process    
        var innerCssMatcher = /\{[\n\s]*([^\}]*)[\n\s]*\}/m
        var cssTexts = getCss(elem);
        var css = {};
        for (var j = 0; j < cssTexts.length; j++) {
            var raw = cssTexts[j];
            var innerCss = raw.match(innerCssMatcher)[1];
            var styleArr = innerCss.split(';');
            for (var jj = 0; jj < styleArr.length; jj++) {
                if (styleArr[jj].trim() === '')
                    continue;

                var kvp = styleArr[jj].split(':');
                var styleKey = kvp[0].trim();
                var styleValue = kvp[1].trim();
                css[styleKey] = styleValue;
            }
        }
        return css;
    }

    function stylesToInlineComplete(elem) {
        return stylesToInline(elem, true);
    }

    function stylesToInlineShallow(elem) {
        return stylesToInline(elem, false);
    }

    function stylesToInline(elem, complete) {
        if (isValidNode(elem))
            throw Error('sorry ' + nodeTypes[elem.nodeType] + ' is not a valid node type a type.');

        //process
        var styleObj = complete ? getStyleObjComplete(elem) : getStyleObj(elem);
        var styleArr = []
        for (const key in styleObj) {
            if (styleObj.hasOwnProperty(key)) {
                var value = styleObj[key];
                styleArr.push(key + ': ' + value);
            }
        }
        var css = styleArr.length > 0 ? styleArr.join('; ') + ';' : '';
        var prevInlineStyle = elem.getAttribute('style');

        if (prevInlineStyle !== null && prevInlineStyle[prevInlineStyle.length - 1] !== ';')
            prevInlineStyle += ';';
        else if (prevInlineStyle === null)
            prevInlineStyle = '';

        var result = css + ' ' + prevInlineStyle;
        elem.setAttribute('style', result.trim());

        var childNodes = elem.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var child = childNodes[i];
            if (isValidNode(child))
                complete ? stylesToInlineComplete(child) : stylesToInline(child);
        }
    }

    function isValidNode(node) {
        return node.nodeType !== Node.TEXT_NODE
            && node.nodeType !== Node.COMMENT_NODE
            && node.nodeType !== Node.DOCUMENT_TYPE_NODE
            && node.nodeType !== Node.DOCUMENT_NODE
    }

    const nodeTypes = {
        1: 'Node.ELEMENT_NODE',
        3: 'Node.TEXT_NODE',
        7: 'Node.PROCESSING_INSTRUCTION_NODE',
        8: 'Node.COMMENT_NODE',
        9: 'Node.DOCUMENT_NODE',
        10: 'Node.DOCUMENT_TYPE_NODE',
        11: 'Node.DOCUMENT_FRAGMENT_NODE',
    }

    // export
    window.getStyle = getStyleObj;
    window.stylesToInline = stylesToInlineShallow;
    window.getStyleComplete = getStyleObjComplete;
    window.stylesToInlineComplete = stylesToInlineComplete;
})();