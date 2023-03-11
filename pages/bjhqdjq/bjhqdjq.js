$('.content').children().eq(0).show().siblings().hide()

$(".container ul li").click(
    function () {
        $(this).addClass("active").siblings().removeClass('active');

        const i=$(this).index()
        $('.content').children().eq(i).show().siblings().hide()
    },
);
