function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
//获取下一个元素
// function getNextElement(node) {
//     if (node.nodeType == 1) {
//         return node;
//     } else if (node.nextSibling) {
//         return getNextElement(node.nextSibling);
//     }
//     return null;
// }
