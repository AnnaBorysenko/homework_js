let newEl = document.createElement('h2');
newEl.appendChild(document.createTextNode('События'));
document.body.appendChild(newEl);

let blocCord1 = document.createElement('span');
document.body.appendChild(blocCord1);
blocCord1.innerHTML = '<div id="elem1">0 : 0</div>';

let div = document.createElement('div');
div.style.backgroundColor = 'green';
div.style.width = '400px';
div.style.height = '400px';
document.body.appendChild(div);

let blocCord2 = document.createElement('span');
document.body.appendChild(blocCord2);
blocCord2.innerHTML = '<div id="elem2">0 : 0</div>';

let elem1 = document.getElementById('elem1');

document.addEventListener('mousemove', function(event) {
    elem1.innerHTML = ' x : ' + event.clientX + ' y : ' + event.clientY;
});

let elem2 = document.getElementById('elem2');

div.addEventListener('mousemove', function(event) {
    elem2.innerHTML = ' x : ' + event.clientX + ' y : ' + event.clientY;
});
