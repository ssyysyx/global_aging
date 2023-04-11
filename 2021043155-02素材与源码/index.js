// global variables
let currentDepth;
let targetElement;
let manualBlur;
let elementQuantity;

// Initialize
setTimeout(function () {
    setPerspective();
    setInteractiveElements();
    generateRandomIndex();
}, 0);

// Applies heights and margins to all elements in dof-container in increasing increments
function setPerspective() {
    let element = document.getElementById("dof-container"); // target container
    let nodes = element.getElementsByClassName('card-common').length; // target elements in container
    let value = document.getElementById(`quantity-level`);
    let finalWidth;
    let finalMargin;
    let initialWidth
    let marginModifier = 1.4;
    let widthModifier;
    let count = 0;

    // set quantity controller
    elementQuantity = nodes;
    value.innerHTML = nodes;

    if (nodes < 7) {
        initialWidth = 100;
        widthModifier = 23;
    }
    if (nodes > 6 && nodes < 13) {
        initialWidth = 80;
        widthModifier = 16;
    }
    if (nodes > 12 && nodes < 18) {
        initialWidth = 60;
        widthModifier = 10;
    }
    if (nodes > 17 && nodes < 21) {
        initialWidth = 30;
        widthModifier = 10;
    }

    for (let i = 0; i < nodes; i++) {
        count++;
        finalWidth = widthModifier * count + initialWidth;
        finalMargin = finalWidth / marginModifier;
        let z = element.getElementsByClassName('card-common')[i];
        z.style.width = `${finalWidth}px`;
        z.style.margin = `0 -${finalMargin}px 0 0`*1.5;
    }
}

function setInteractiveElements() {
    let element = document.getElementById("dof-container"); // target container
    let nodes = element.getElementsByClassName('card-common'); // target elements in container

    // Adds 'reveal' class to all elements in dof-container except last element
    // as there is no need for the last element to dodge left to reveal itself
    for (let i = 0; i < (nodes.length - 1); i++) {
        let z = nodes[i];
        classAttribute = z.getAttribute("class");
        console.log(`class = ${classAttribute}`)

        // Check if element already has the class attribute value of "reveal"
        if (classAttribute.includes("reveal")) { } else {
            z.className += " reveal";
        }
    }

    // Adds and sets onmouseover attribute to all elements in dof-container
    for (let i = 0; i < nodes.length; i++) {
        let z = nodes[i];
        let attribute = document.createAttribute("onmouseover");
        attribute.value = "getChildNodeIndex(this);";
        z.setAttributeNode(attribute);
    }
}

// Picks a random number from 0 to the number of nodes in the container.
// This value is used to set an initial random 'focus' point on page load
function generateRandomIndex() {
    let element = document.getElementById("dof-container"); // target container
    let nodes = element.getElementsByClassName('card-common').length; // target elements in container
    let randomIndex = Math.floor(Math.random() * (0 - nodes) + nodes);
    targetElement = randomIndex;
    generateDepthOfField(randomIndex);
}

// Takes the selected child node's index as parameter, then executes the appropriate blur method
function generateDepthOfField(childIndex, handshake) {
    let element = document.getElementById("dof-container");
    let nodes = element.getElementsByClassName('card-common').length; // target elements in container
    let blurLevel = document.getElementById(`blur-level`);
    let countOne = -1;
    let countTwo = -1;
    let above = [];
    let below = [];
    let blur;
    let blurState;
    let blurModifier;

    // Blur settings
    if (manualBlur == null) {
        if (nodes < 7) {
            blurModifier = 0.5;
            blurLevel.innerHTML = blurModifier;
        }
        if (nodes > 6 && nodes < 13) {
            blurModifier = 0.5;
            blurLevel.innerHTML = blurModifier;
        }
        if (nodes > 12) {
            blurModifier = .5;
            blurLevel.innerHTML = blurModifier;
        }
    }
    if (manualBlur > -1) {
        blurModifier = manualBlur;
    }

    // the following for loops blur elements above and below the
    // target element in increasing increments set in one of the above if statements
    for (let i = childIndex; i > -1; i--) {
        countOne++;
        blur = blurModifier * countOne;
        let z = element.getElementsByClassName(`card-common`)[i];
        z.style.filter = `blur(${blur}px)`;
        if (blur != 0) {
            below.push(blur);
        }
    }
    for (let i = childIndex; i < nodes; i++) {
        countTwo++;
        blur = blurModifier * countTwo;
        let z = element.getElementsByClassName(`card-common`)[i];
        z.style.filter = `blur(${blur}px)`;
        if (blur != 0) {
            above.push(blur);
        }
    }

    if ((above.length + below.length) == (nodes - 1)) {
        blurState = below.concat(0, above);
        currentDepth = blurState;
        if (handshake = 1) {
            setTimeout(function () {
                createDepthArray(targetElement);
            }, 150);
        }
    }
}

// Get index of targeted element within the dof-container
function getChildNodeIndex(target) {
    let container = target.parentNode;
    let childList = container.childNodes;
    // console.log(child_list);
    let count = -1;

    // Step through all the child childNodes of the parent
    for (let i = 0; i < childList.length; i++) {
        let node = childList.item(i);
        if (node) {
            // Check to see if the node is a LI
            if (node.nodeName == `IMG`) {
                // Increment the count of LI childNodes
                count++;
                if (target == node) {
                    // If so, pass count to generateDepthOfField()
                    targetElement = count;
                    createDepthArray(count);
                }
            }
        }
    }
}

// creates an array containing the blur values for each element in the container
function createDepthArray(childIndex) {
    let element = document.getElementById("dof-container");
    let nodes = element.getElementsByClassName('card-common').length; // target elements in container
    let countOne = -1;
    let countTwo = -1;
    let above = [];
    let below = [];
    let blur;
    let blurState;
    let blurModifier;

    // Blur settings
    if (nodes < 7) {
        blurModifier = 3;
    }
    if (nodes > 6 && nodes < 13) {
        blurModifier = 2;
    }
    if (nodes > 12) {
        blurModifier = 1;
    }

    for (let i = childIndex; i > -1; i--) {
        countOne++;
        blur = blurModifier * countOne;
        if (blur != 0) {
            below.push(blur);
        }
    }
    for (let i = childIndex; i < nodes; i++) {
        countTwo++;
        blur = blurModifier * countTwo;
        if (blur != 0) {
            above.push(blur);
        }
    }
    if ((above.length + below.length) == (nodes - 1)) {
        let reverseBelow = below.reverse();
        blurState = below.concat(0, above);
        arrayTransform(blurState);
    }
}

function arrayTransform(targetState) {
    let handshake = 1;
    let element = document.getElementById("dof-container"); // target container
    let nodes = element.getElementsByClassName('card-common').length; // target elements in container
    // let targetState = x;

    // Find index of 0 [focus point] in each array
    let current = currentDepth.indexOf(0);
    let target = targetState.indexOf(0);

    // increase index of 0 by 1
    if (current < target) {
        current = current + 1;
        generateDepthOfField(current, handshake);
    }
    // decrease index of 0 by 1
    if (current > target) {
        current = current - 1;
        generateDepthOfField(current, handshake);
    }
}

// Depth of Field Controls
function increaseDepth() {
    let value = document.getElementById(`blur-level`);
    x = Number(value.innerHTML);
    // increment depth of field intensity by .5
    value.innerHTML = x + .5;
    manualBlur = value.innerHTML
    generateDepthOfField(targetElement);
}

function decreaseDepth() {
    let value = document.getElementById(`blur-level`);
    x = Number(value.innerHTML);
    // decrement depth of field intensity by .5
    if (x > 0) {
        value.innerHTML = x - .5;
        manualBlur = value.innerHTML
        generateDepthOfField(targetElement);
    }
}

// Card quantity controls
function increaseQuantity() {
    let element = document.getElementById('dof-container');
    let nodes = element.getElementsByClassName('card-common').length; // target elements in container
    let value = document.getElementById(`quantity-level`);
    let newElement = document.createElement("img");
    let srcAttribute = document.createAttribute("src");
    let classAttribute = document.createAttribute("class");

    // Add new elements. Hard cap of 20 elements total
    if (nodes <= 19) {
        srcAttribute.value = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/joker.png";
        classAttribute.value = "card-common";
        newElement.setAttributeNode(srcAttribute);
        newElement.setAttributeNode(classAttribute)
        element.appendChild(newElement);

        targetElement = nodes;

        // Reinitialize all
        setPerspective();
        setInteractiveElements();
        generateDepthOfField(targetElement);
        console.log(`current target = ${targetElement}`);
    }
}

function decreaseQuantity() {
    let value = document.getElementById(`quantity-level`);
    let element = document.getElementById("dof-container");
    let nodes = element.getElementsByClassName('card-common');

    // If the number of elements is greater than 0
    if (nodes.length > 0) {
        element.removeChild(nodes[0]);
        value.innerHTML--;

        targetElement = nodes.length - 1;
        console.log(`nodes.length = ${nodes.length}`);

        // Reinitialize remaining elements
        setPerspective();
        generateDepthOfField(targetElement);
    }
}

