'use strict'

var player1 = {};
var player2 = {};
      var newPlayer1 = $("#player1-name").val();
      var newPlayer2 = $("#player2-name").val();
$(document).ready(function() {
    // console.log("new player1", newPlayer1)

     // case "card--model":

  $("#dropDown1").on("change", function(e) {
    // console.log("i am p1", $(this).find("option:selected").text())
    player1.name = $(this).find("option:selected").text();
    newPlayer1 = player1.name
    console.log("player1 name", player1.name)
  })
  $("#dropDown2").on("change", function(e) {
    player2.name = $(this).find("option:selected").text();
    newPlayer2 = player2.name
    console.log("player2 name", player2.name)
    console.log("player2 ", player2)
  })
 $(".next-screen").click(function(e) {
    moveAlong = ($("player1-name").val() !== "" || $("player2-name").val() !== "" );
//may be not using it
    var moveAlong = true;
    var nextCard = $(this).attr("next");

    switch (nextCard) {
      case "card--weapon":


//prototype'''
      player1 = new window[newPlayer1];
      player2 = new window[newPlayer2];
      // console.log('player1', player1);
      // console.log('player2', player2);

   $("#dropDown3").on("change", function(e) {
    // console.log("selected is ", $(this).find("option:selected").text())
      var selectedWeapon1 = $("#dropDown3 option:selected").text();
       // console.log(selectedWeapon1)
      if (selectedWeapon1 === "Spark") {
        player1.weapon = new Spark();
      } else if (selectedWeapon1 === "Uxi") {
        player1.weapon = new Uxi();
      } else if (selectedWeapon1 === "Plier") {
        player1.weapon = new Plier();
      }else  {
        player1.weapon = new Scrappy();
      }
        // console.log('player1.weapon is', player1.weapon);
        // console.log('player1 with weapon', player1);
    });

   $("#dropDown4").on("change", function(e) {
      var selectedWeapon2 = $("#dropDown4 option:selected").text();
     // console.log(selectedWeapon1)
      if (selectedWeapon2=== "Spark") {
        player2.weapon = new Spark();
      } else if (selectedWeapon2 === "Uxi") {
        player2.weapon = new Uxi();
      } else if (selectedWeapon2 === "Plier") {
        player2.weapon = new Plier();
      }else  {
        player2.weapon = new Scrappy();
      }
        // console.log('player2.weapon is', player2.weapon);
        // console.log('player2 with weapon', player2);
    });
     break;

    case "card--battleground":

    $("#attack").on("click", function(e) {
        player1.health -= player2.weapon.damage;
        player2.health -= player1.weapon.damage;
        if (player2.health <= 0) {
          $("#player1Wins").show();
          $("#player1Wins").toggleClass("hidden");
        } else if (player1.health <= 0) {
            $("#player2Wins").show();
            $("#player2Wins").toggleClass("hidden");
        } else {

          // Decrement player1's health after attack
          player1.health -= player2.weapon.damage;
          // Decrement player2's health after attack
          player2.health -= player1.weapon.damage;
            // console.log("player1", player1)
            // console.log("player2", player2)
            // console.log("player1 health", player1.health)
            // console.log("player2 health", player2.health)
           var output1 = `<img src = "${player1.image}">${player1.name} ${player1.health}`
         $("#player1Div").html(output1);
           var output2 = `<img src = "${player2.image}">${player2.name} ${player2.health}`
         $("#player2Div").html(output2);
        }
      });
     break;

       default:
       moveAlong = false;
    }

  if (moveAlong) {
    console.log("moveAlong", moveAlong)
        $(".card").hide();
        $("." + nextCard).toggleClass("hidden");
        $("." + nextCard).show();
      }
}) // Click Handlers End

}); //Document.ready End

