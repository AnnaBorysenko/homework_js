const $searchForm = $('#search-form');
const $input = $('[name="video-name"]');

$searchForm.on('submit', (event) => {
    event.preventDefault();
    const text = $input.val();
    getVideo(text);
});

const getVideo = (data) => {
    $.getJSON(' https://itunes.apple.com/search?limit=10&entity=musicVideo&term=' + data)
        .done((response) => createContent(response))
        .fail((error) => console.log("error", error));
};

const createContent = (data) => {
    console.log(data)
    data.results.forEach((video, i) => {
        $('<div>')
            .addClass(i ===0 ? 'carousel-item active' : 'carousel-item')
            .append(
                $('<video>')
                    .addClass('d-block w-100')
                    .append(
                        $('<source>')
                            .attr('src', video.previewUrl)
                    )
                    .attr('controls','')
            )
            .appendTo($('.carousel-inner'))
    })
};

const pauseVideo = () => {
        $('.carousel-item video').each(function() {
            console.dir($(this)[0].pause)
            $(this)[0].pause()
        })
}

$(document).on('click', '.carousel-control-prev', pauseVideo);
$(document).on('click', '.carousel-control-next', pauseVideo);


const myCarousel = document.querySelector('#carouselExampleControls')
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: false,
})



