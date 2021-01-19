const $title = createNode("h2", "События", null);
const $globalCoordinates = createNode("div", getCoordinatesString(), null);

const $blockCoordinates = createNode("div", getCoordinatesString(), null);

const $block = createNode("div", "", {
    backgroundColor: "green",
    width: "400px",
    height: "400px"
});

document.body.append($title, $globalCoordinates, $block, $blockCoordinates);

document.addEventListener("mousemove", function ({clientX, clientY}) {
    $globalCoordinates.innerHTML = getCoordinatesString(clientX, clientY);
});

$block.addEventListener("mousemove", function ({clientX, clientY}) {
    const x = clientX - this.offsetLeft;
    const y = clientX - this.offsetTop;
    $blockCoordinates.innerHTML = getCoordinatesString(x, y);
});

function getCoordinatesString(x = 0, y = 0) {
    return " x: " + x + ", y: " + y;
}

function createNode(nodeType, innerText, styles) {
    const newNode = document.createElement(nodeType);
    newNode.innerHTML = innerText;
    if (styles && typeof styles === "object") {
        for (const key in styles) {
            newNode.style[key] = styles[key];
        }
    }
    return newNode;
}