var myApp = angular.module("myApp", ['ui.sortable']);

myApp.factory('items', function() {
  var items = {};
  var lookup = function(itemName){
    for (var i = 0; i < items.length; i++) {
      lookup[items[i].name] = items[i];
    }
    console.log(lookup[itemName]);
    return lookup[itemName];
  };

  items.set = function() {
    items = [
      {name: "Chicken",
       checked: false },
      {name: "Bread",
       checked: false },
      {name: "Kimchi",
       checked: false },
      {name: "Rice",
       checked: true },
      {name: "Noodles",
       checked: true },
      {name: "Pasta",
       checked: true }
    ];
    return items;
  };

  items.addItem = function(newItem) {
    items.push({name: newItem, checked: false});
    return items;
  };

  items.clearList = function() {
    items.length = 0;
   return items;
  };

  items.toggleCheck = function(itemName) {
    var itemCheck = lookup(itemName);
    if (itemCheck.checked) {
      itemCheck.checked = false;
    } else {
      itemCheck.checked = true;
    }
    return items;
  };

  items.destroy = function(id) {
    // var itemCheck = lookup(itemName);
    alert(id);
    items.splice(id, 1);
    return items;
  };
  return items;
});


myApp.controller('listController', ['$scope', 'items', function($scope, items) {
  $scope.items = items.set();
  $scope.addItem = function(newItem) {
    items.addItem(newItem);
  };

  $scope.clear = function () {
    items.clearList();
  };

  $scope.enterEvent = function(event, newItem) {
    if (event.which === 13) {
    items.addItem(newItem);
    }
  };

  $scope.check = function(name) {
    items.toggleCheck(name);
  };

  $scope.destroy = function(id) {
    items.destroy(id);
  };

  // $scope.remove =
}]);

$(document).ready(function() {

	// $("#add-button").click(function() {
	// 	$(".unchecked").append('<li><input type="checkbox" class="list-checkbox"> <p class="unstrike">' + $(this).prev().val() + '</p> <input type="button" class="button edit" value="Edit"> <input type="button" class="button remove" value="Remove"></li>');
	// 	$('#add-button').prev().val('');
	// });

	// $("#clear-button").click(function() {
	// 	$("ul").children().remove();
	// });

	// $(document).keydown(function(e){
	// 	if((e.which == 13) && $("#add-button").prev().is(":focus")) {
	// 		$(".unchecked").append('<li><input type="checkbox" class="list-checkbox"> <p class="unstrike">' + $("#add-button").prev().val() + '</p> <input type="button" class="button edit" value="Edit"> <input type="button" class="button remove" value="Remove"></li>');
	// 		$('#add-button').prev().val('');
	// 	}
	// });

	// $("ul").on("click", ".list-checkbox", function() {
	// 	if ($(this).parent().parent().attr("class") == "unchecked ui-sortable") {
	// 			console.log($(".list-checkbox").parent().parent().attr("class"));
	// 		$(".checked").append($(this).parent());
	// 			$(this).next().removeClass("unstrike");
	// 			$(this).next().addClass("strike");
	// 		} else {
	// 			console.log("hello");
	// 			$(".unchecked").append($(this).parent());
	// 			$(this).next().removeClass("strike");
	// 			$(this).next().addClass("unstrike");
	// 		}
	// 	});

	// $("ul").on("click", ".remove", function() {
	// 	$(this).parent().remove();
	// });

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

//		enterKeydown(".editinput", true);
	});

