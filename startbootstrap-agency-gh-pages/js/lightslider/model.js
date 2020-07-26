$(document).ready(function () {
    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        vThumbWidth: 80,
        verticalHeight: 500,
        thumbItem: 8,
        thumbMargin: 4,
        slideMargin: 0,
        responsive: [{
                breakpoint: 768,
                settings: {
                    verticalHeight: 400,
                    vThumbWidth: 70,
                    thumbItem: 8,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    verticalHeight: 200,
                    vThumbWidth: 60,
                    thumbItem: 4,
                }
            }
        ]
    });
});
