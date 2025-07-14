// This file contains basic JavaScript functions for DOM manipulation.

function addElement(tag, parentId, content) {
    const parent = document.getElementById(parentId);
    if (parent) {
        const newElement = document.createElement(tag);
        newElement.textContent = content;
        parent.appendChild(newElement);
    }
}

function removeElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function modifyElementContent(elementId, newContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newContent;
    }
}

export { addElement, removeElement, modifyElementContent };