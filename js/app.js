var myApp = angular.module("myApp", ['ui.sortable']);

myApp.factory('uncheckedItems', [ function(
  

)]);

myApp.controller('listController', function() {


});

// function enterKeydown(elementClass, deleteInput) {
// 	$(document).keydown(function(e){

// 		if((e.which == 13) && $(elementClass).is(":focus")) {
// 			$(elementClass).parent().parent().append('<li><input type="checkbox" class="list-checkbox grabcheckbox"> <p class="unstrike grabtext">' + $(elementClass).val() + '</p> <input type="button" class="button edit" value="Edit"> <input type="button" class="button remove" value="Remove"></li>');
// 			if ($(".addbutton").parent().parent().attr("class") == "checked ui-sortable") {
// 				$(".grabtext").removeClass("unstrike").addClass("strike");
// 				$(".grabcheckbox").attr('checked', 'checked');
// 			}
// 			$(".grabtext").removeClass("grabtext");
// 			$(".grabcheckbox").removeClass("grabcheckbox");
// 			if (deleteInput = true){
// 				$(elementClass).parent().remove();
// 			}
// 		}
// 	});
// }

$(document).ready(function() {

	$("#add-button").click(function() {
		$(".unchecked").append('<li><input type="checkbox" class="list-checkbox"> <p class="unstrike">' + $(this).prev().val() + '</p> <input type="button" class="button edit" value="Edit"> <input type="button" class="button remove" value="Remove"></li>');
		$('#add-button').prev().val('');
	});

	$("#clear-button").click(function() {
		$("ul").children().remove();
	});

	$(document).keydown(function(e){
		if((e.which == 13) && $("#add-button").prev().is(":focus")) {
			$(".unchecked").append('<li><input type="checkbox" class="list-checkbox"> <p class="unstrike">' + $("#add-button").prev().val() + '</p> <input type="button" class="button edit" value="Edit"> <input type="button" class="button remove" value="Remove"></li>');
			$('#add-button').prev().val('');
		}
	});

	$("ul").on("click", ".list-checkbox", function() {
		if ($(this).parent().parent().attr("class") == "unchecked ui-sortable") {
				console.log($(".list-checkbox").parent().parent().attr("class"));
			$(".checked").append($(this).parent());
				$(this).next().removeClass("unstrike");
				$(this).next().addClass("strike");
			} else {
				console.log("hello");
				$(".unchecked").append($(this).parent());
				$(this).next().removeClass("strike");
				$(this).next().addClass("unstrike");
			}
		});

	$("ul").on("click", ".remove", function() {
		$(this).parent().remove();
	});

	$("ul").on("click", ".edit", function() {
		var item = $(this).prev().text();
		$(this).parent().parent().append('<li><input type="text" class="editinput" value="' + item + '"><input type="button" class="button addbutton pull-right" value="Add"></li>');
		$(".editinput").focus();
		$(this).parent().remove();

	});

	$("ul").on("click", ".addbutton", function() {
		$(this).parent().parent().append('<li><input type="checkbox" class="list-checkbox grabcheckbox"> <p class="unstrike grabtext">' + $(this).prev().val() + '</p> <input type="button" class="button edit" value="Edit"> <input type="button" class="button remove" value="Remove"></li>');

		if ($(".addbutton").parent().parent().attr("class") == "unchecked ui-sortable") {
			console.log("HI")
			$(".grabtext").removeClass("grabtext");
			$(".grabcheckbox").removeClass("grabcheckbox");
			$(this).parent().remove();
		} else {
			console.log("hello")
			$(".grabtext").removeClass("unstrike").addClass("strike");
			$(".grabcheckbox").attr('checked', 'checked');
			$(".grabtext").removeClass("grabtext");
			$(".grabcheckbox").removeClass("grabcheckbox");
			$(this).parent().remove();
		}

		});

		enterKeydown(".editinput", true);
	});

