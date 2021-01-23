const body = document.querySelector('body');

function showPlanets() {
    document.querySelector('button').onclick = function () {
        let wrapper = document.querySelector('.planets-container');
        if (wrapper.classList.contains('hidden')) {
            wrapper.classList.remove('hidden');
        } else {
            wrapper.classList.add('hidden')
        }
    };
}

const createContent = (data) => {
    const header = document.createElement('header');
    const main = document.createElement('main');
    const btn = document.createElement('button');
    btn.innerHTML = "Планеты"
    main.appendChild(btn);


    for (let item in data['main']) {
        let itemData = data['main'][item];
        const div = document.createElement('div');
        div.className = `header-${item}`;
        div.innerHTML = itemData;
        header.appendChild(div);
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add(`planets-container`, `hidden`);
    for (let planet in data['planets']) {
        let titleData = data['planets'][planet]['title'];
        let infoData = data['planets'][planet]['info'];
        let urlData = data['planets'][planet]['url'];

        const title = document.createElement('p');
        title.innerHTML = titleData;
        wrapper.appendChild(title);

        const list = document.createElement('ul')
        for (let i = 0; i < infoData.length; i++) {
            let el = infoData[i];
            let li = document.createElement('li');
            li.innerHTML = el;
            list.appendChild(li)
        }
        wrapper.appendChild(list);

        const img = document.createElement('img');
        img.src = urlData;
        wrapper.appendChild(img);

    }
    main.appendChild(wrapper);

    body.appendChild(header);
    body.appendChild(main);
    showPlanets();
}


fetch(
    'https://trevadim.github.io/vue/data/data.json'
).then((data) => data.json())
    .then((result) => createContent(result))
    .catch((error) => console.log("error", error))

