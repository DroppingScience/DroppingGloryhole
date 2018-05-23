let subscribeEvents = function () {
    $("input").on('change', function () {
        if ($(this).attr("data-ignore-save") != "true") {
            let key = $(this).attr('id');
            let value = $(this).val();
            localStorage.setItem(key, value);
        }
    });
    $(".incrementBtn").on('click', function () {
        $(this).parent().find("input").val(function (i, oldVal) { return ++oldVal > 3 ? 3 : oldVal; });
        $(this).parent().find("input").trigger("change");
    });
    $(".decrementBtn").on('click', function () {
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
$(document).ready(subscribeEvents);
$(document).ready(loadFormDataFromStorage);