

function getSubsequent(node, direction) {
  do {
    node = node[`${direction}Sibling`];
  } while (node !== null && node.nodeType == Node.TEXT_NODE);
  return node;
}

/**
  * Get the dimensions of a given dom node.
  * 
  * @param {DomNode} node 
  * @param {string} dimension 
  * @param {boolean} margins 
  * @param {string} margin1 
  * @param {string} margin2 
  */
function getDimension(node, dimension, margins, margin1, margin2) {
  let style = window.getComputedStyle(node);
  if (style['display'] == 'none' || style['display'] == '') {
    let parent = node.parentNode;
    let sibling = node.nextSibling;
    let position = node.style.position;
    document.body.appendChild(node);
    node.style.display = 'block';
    node.style.position = 'absolute';
    let measured = getDimension(node, dimension, margins, margin1, margin2);
    node.style.display = 'none';
    node.style.position = position;
    if (parent) {
      parent.insertBefore(node, sibling);
    }
    return measured;
  }
  return parseInt(style[dimension])
    + parseInt(style[`padding-${margin1}`]) + parseInt(style[`padding-${margin2}`])
    + (margins ? parseInt(style[`margin-${margin1}`]) + parseInt(style[`margin-${margin2}`]) : 0);
}

export const DomUtilities = {
  nextSibling: function (node) {
    return getSubsequent(node, 'next')
  },

  previousSibling: function (node) {
    return getSubsequent(node, 'previous')
  },

  toggleClass: function (node, className) {
    if (node.classList.contains(className)) {
      node.classList.remove(className)
    } else {
      node.classList.add(className)
    }
  },

  toggleStyleProperty: function (node, styleName, value1, value2) {
    if (node.style[styleName] === value1) {
      node.style[styleName] = value2
    } else {
      node.style[styleName] = value1
    }
  },

  outerHeight: function (node, margins) {
    return getDimension(node, 'height', margins, 'top', 'bottom')
  },

  outerWidth: function (node, margins) {
    return getDimension(node, 'width', margins, 'left', 'right')
  },

  siblings: function (node) {
    let siblings = [];
    for (let sibling = node.parentNode.firstChild; sibling; sibling = sibling.nextSibling) {
      if (sibling === node || sibling.nodeType === Node.TEXT_NODE) {
        continue;
      }
      siblings.push(sibling);
    }
    return siblings;
  }
}
