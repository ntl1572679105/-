var mySwiperone = new Swiper('.swiper-one', {
    loop: true, // 循环模式选项
    parallax: true,

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     // delay: 2000,//1秒切换一次
    // },
})

var mySwipertwo = new Swiper('.swiper-two', {
    loop: true, // 循环模式选项
    parallax: true,

    slidesPerView: 6,
    grid: {
        fill: 'column',
        rows: 1,
    },
    autoplay: {
        // delay: 2000,//1秒切换一次
    },
})


var mySwiperThree = new Swiper('.swiper-three', {
    loop: true,
    loopAdditionalSlides: 3,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 3.5,
    grid: {
        fill: 'column',
        rows: 1,
    },

    //  如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})


var mySwiperFour = new Swiper('.swiper-four', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})

var mySwiperFive = new Swiper('.swiper-five', {
    loop: true,
    loopAdditionalSlides: 3,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 3.5,
    grid: {
        fill: 'column',
        rows: 1,
    },

    //  如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})

