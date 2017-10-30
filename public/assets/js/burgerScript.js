$(function() {
  $("#alive").on("click", ".devour", function() {
    event.preventDefault();
    var route = "/api/burgers/";
    route += $(this).data("id");
    route += "?_method=PUT"
    $.post(route, function(response) {
      if(response) {
        console.log(response);
        location.reload();
      }
    })
  });

  $("#newburger").on("click", function() {
    event.preventDefault();
    var newBurger = {
      name: $("#name").val()
    }
    console.log({newBurger});
    $.post("/api/burgers", newBurger, function(request, response) {
      console.log(request);
      if(response) {
        console.log(response);
        location.reload();
      }
    })
  });
});