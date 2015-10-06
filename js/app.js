$(document).ready(function() {
	$( ".unchecked" ).sortable();
	$( ".checked" ).sortable();

	$("#add-button").click(function() {
		$(".unchecked").append('<li><input type="checkbox" class="list-checkbox"> <p class="unstrike">' + $(this).prev().val() + '</p> <input type="button" class="button" value="Edit"> <input type="button" class="button" value="Remove"></li>');

	});

	$("")
	$("ul").on("click", ".list-checkbox", function() {
		if ($(this).parent().parent().attr("class") == "unchecked ui-sortable") {
				$(".checked").append($(this).parent());
				$(this).next().removeClass("unstrike");
				$(this).next().addClass("strike");
			} else {
				$(".unchecked").append($(this).parent());
				$(this).next().removeClass("strike");
				$(this).next().addClass("unstrike");
			}
		});





});