import $ from "jquery";

const dropdown = () => {
    // untuk mengatur dropdown dapat difocus atau tidak
    // ketika di-hidden atau dimunculkan
    const dropItemElement = $("[id=dropItem]");

    $("#dropdownBtn").click(() => {
        if ($("#dropdownList").hasClass("hidden")) {
            $.each(dropItemElement, () => {
                dropItemElement.attr("tabindex", 0);
            });

            dropHidden();
            setTimeout(scaleInOut, 100);
        } else {
            $.each(dropItemElement, () => {
                dropItemElement.attr("tabindex", -1);
            });

            scaleInOut();
            setTimeout(dropHidden, 500);
        }
    });

    const scaleInOut = () => {
        $("#dropdownList").toggleClass("drop__open");
    };

    const dropHidden = () => {
        $("#dropdownList").toggleClass("hidden");
    };

    if ($(window).width() > 500) {
        $("#dropdownList").addClass("hidden");

        $.each(dropItemElement, () => {
            dropItemElement.attr("tabindex", -1);
        });
    } else {
        $("#dropdownList").removeClass("hidden drop__open");

        $.each(dropItemElement, () => {
            dropItemElement.attr("tabindex", 0);
        });
    }

    $(window).on("resize", () => {
        $("#dropdownList").removeClass("drop__open");

        if ($(window).width() > 500) {
            $("#dropdownList").addClass("hidden");

            $.each(dropItemElement, () => {
                dropItemElement.attr("tabindex", -1);
            });
        } else {
            $("#dropdownList").removeClass("hidden");

            $.each(dropItemElement, () => {
                dropItemElement.attr("tabindex", 0);
            });
        }
    });
};

export default dropdown;
