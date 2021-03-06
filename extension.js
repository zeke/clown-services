appAPI.ready(function($) {

  function walk(node) {
  	var child, next
  	switch (node.nodeType) {
  		case 1: // Element
  		case 9: // Document
  		case 11: // Document fragment
  			child = node.firstChild
  			while (child) {
  				next = child.nextSibling
  				walk(child)
  				child = next
  			}
  			break
  		case 3: // Text node
  			node.nodeValue = node.nodeValue
  				.replace(/\bCloud\b/g, "Clown")
  				.replace(/\bcloud\b/g, "clown")
  			break
  	}
  }

  walk(document.body)

})
