'use strict';

$(document).ready(function () {

    function gauche() {

        $(".bebe").css("left", "+=940");
    }

    function droite() {
        $(".bebe").css("left", "-=940")
    }

    function verif() {

        if ( $(".bebe").css("left") == "-6580px" ) {
            $(".bebe").css("left", "0px");
        }

        if ( $(".bebe").css("left") == "940px" ) {
            $(".bebe").css("left", "-4700px");
        }

        var test = $(".bebe").css("left");
        console.log(test);

    }

    $("#gauche").on("click", gauche);
    $("#gauche").on("click", verif);
    $("#droite").on("click", droite);
    $("#droite").on("click", verif);

});
