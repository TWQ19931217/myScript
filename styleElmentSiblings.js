//获取下一个元素：
function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    } else if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

//设置某个元素兄弟级的样式：
function styleElementSibings(tag,theclass) {
    if (!document.getElementsByTagName) {
        return false;
    }
    var elems = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < elems.length; i++) {
        elem = getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}
