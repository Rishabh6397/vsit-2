

// $(window).on("scroll", function () {
//     if ($(window).scrollTop() > 400) {
//         $(".header").addClass("active");

//     } else {

//         //remove the background property so it comes transparent again (defined in your css)

//         $(".header").removeClass("active");
//     }
// });





$(document).ready(function () {

    $(window).scroll(function () {
        var positiontop = $(document).scrollTop(); console.log(positiontop);

        if ((positiontop >20) && (positiontop < 300)) {

            $('#p1').addClass('animate__animated animate__fadeInUp');

            $('.card').addClass('animate__animated animate__fadeInUp');

            // $('#card-three').addClass(' animate animated animate__bounceInRight');

        }

        if ((positiontop >100) && (positiontop <500)) {

            $('#p2').addClass('animate__animated animate__fadeInUp');

        }
    });
})
