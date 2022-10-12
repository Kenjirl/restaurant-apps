import $ from "jquery";

const navbar = () => {
    $("#navButton").click(() => {
        if ($("#nav").hasClass("hidden")) {
            navHidden();
            setTimeout(slideInOut, 100);
        } else {
            slideInOut();
            setTimeout(navHidden, 500);
        }
    });

    const slideInOut = () => {
        $("#nav").toggleClass("nav__open");
    };

    const navHidden = () => {
        $("#nav").toggleClass("hidden");
    };

    if ($(window).width() < 500) {
        $("#nav").addClass("hidden");
    } else {
        $("#nav").removeClass("hidden nav__open");
    }

    $(window).on("resize", () => {
        $("#nav").removeClass("nav__open");

        if ($(window).width() < 500) {
            $("#nav").addClass("hidden");
        } else {
            $("#nav").removeClass("hidden");
        }
    });
};

export default navbar;
