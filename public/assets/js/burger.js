// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
          name: $("#burgerEntry").val().trim()
      };
      console.log(newBurger);

      // POST request
      $.ajax("api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function() {
              console.log('Created a new tasty Burger')
              location.reload();
          }
      );
  });

  //click function for devour
  $(".change-Eaten").on("click", function(event){
      var id = $(this).data("id");
      var confirmEat = $(this).data("newEaten") === false;

      var confirmEatState = {
          devour: confirmEat
      };
      console.log(`id: ${id} eaten: ${confirmEatState.devour}`);

      $.ajax(`api/burgers/${id}`, {
          type: "PUT",
          data: confirmEatState
      }).then(
          function() {
              console.log(`changed eaten state to: ${confirmEat}`);
              location.reload();
          }
      );
  });


});