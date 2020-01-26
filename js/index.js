$(document).ready(function() {
    console.log("ready");
    $(".state").click(function(){
	var state = $(this).text();
	console.log(state);
    });
});
