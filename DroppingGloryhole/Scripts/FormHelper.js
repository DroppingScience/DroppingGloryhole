let subscribeEvents = function () {
    $("input").on('change', function () {
        if ($(this).attr("data-ignore-save") != "true") {
            let key = $(this).attr("id");
            let value = $(this).val();
            localStorage.setItem(key, value);
        }
    });
    $(".incrementBtn").on("click", function () {
        $(this).parent().find("input").val(function (i, oldVal) { return ++oldVal > 3 ? 3 : oldVal; });
        $(this).parent().find("input").trigger("change");
    });
    $(".decrementBtn").on("click", function () {
        $(this).parent().find("input").val(function (i, oldVal) { return --oldVal < 0 ? 0 : oldVal; });
        $(this).parent().find("input").trigger("change");
    });
};
let loadFormDataFromStorage = function () {
    $("input").each(function () {
        if ($(this).attr("data-ignore-save") != "true") {
            $(this).val(localStorage.getItem($(this).attr("id")));
        }
    });
};
let setPlayerNames = function () {
    let p1name = document.getElementById("player1Name").value;
    if (p1name == "") {
        $("#player1Tab").hide();
    } else {
        $("#player1Tab").show();
        document.getElementById("player1Tab").innerHTML = p1name;
    }
    let p2name = document.getElementById("player2Name").value;
    if (p2name == "") {
        $("#player2Tab").hide();
    } else {
        $("#player2Tab").show();
        document.getElementById("player2Tab").innerHTML = p2name;
    }
    let p3name = document.getElementById("player3Name").value;
    if (p3name == "") {
        $("#player3Tab").hide();
    } else {
        $("#player3Tab").show();
        document.getElementById("player3Tab").innerHTML = p3name;
    }
    let p4name = document.getElementById("player4Name").value;
    if (p4name == "") {
        $("#player4Tab").hide();
    } else {
        $("#player4Tab").show();
        document.getElementById("player4Tab").innerHTML = p4name;
    }
};
let clearGloryStorage = function () {
    $("input").each(function () {
        if ($(this).attr("type") != "text") {
            localStorage.removeItem($(this).attr("id"));
        }
    });
};
$(document).ready(subscribeEvents);
$(document).ready(loadFormDataFromStorage);
$(document).ready(setPlayerNames);