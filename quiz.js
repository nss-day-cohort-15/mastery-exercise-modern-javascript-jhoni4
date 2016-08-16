'use strict'

var player1 = {};
var player2 = {};

$(document).ready(function() {

     // var playerName1 = $("#player1-name").val();

    $("#dropDown1").on("change", function(e) {
      console.log("i am p1", this.value)
      player1 = $(this.value)
    })
    $("#dropDown2").on("change", function(e) {
      console.log("i am p2", this.value)
      player2 = $(this.value)
    })
 $(".next-screen").click(function(e) {

       var moveAlong = true;
       var nextCard = $(this).attr("next");

    switch (nextCard) {
      case "card--model":
          var playerName1 = $("#player1-name").val();
          var playerName2 = $("#player2-name").val();

          moveAlong = ($("player1-name").val() !== "" || $("player2-name").val() !== "" );

//prototype'''
          player1 = new Robot(playerName1);
          player2 = new Robot(playerName2);
          console.log('player1', player1);
          console.log('player2', player2);


          player1.generateHealth();
          player2.generateHealth();
          console.log('player1 with health', player1);
          console.log('player2 with health', player2);

        console.log("Clicked card--something else")

        break;

    case "card--weapon":

          console.log("Clicked card--weapon")
        $("#dropDown3").on("change", function(e) {
          console.log("i am p1 weapon", this.value)
          player1.weapon = $(this.value)
       })
       $("#dropDown4").on("change", function(e) {
         console.log("i am p2 weapon", this.value)
         player2.weapon = $(this.value)
       })

       // $("#dropDown3").on("change", function(e) {
       //    if ($(this.value) === "Spark") {
       //      player1.weapon = new weapon();
       //    } else if ($(this.value) === "Uxi") {
       //      player1.weapon = new Uxi();
       //    } else if ($(this.value) === "Plier") {
       //      player1.weapon = new Plier();
       //    }else  {
       //      player1.weapon = new Scrappy();
       //    }
       //      console.log('player1 with weapon', player1);
       //  });
       // $("#dropDown4").on("change", function(e) {
       //    if ($(this.value) === "Spark") {
       //      player2.weapon = new Spark();
       //    } else if ($(this.value) === "Uxi") {
       //      player2.weapon = new Uxi();
       //    } else if ($(this.value) === "Plier") {
       //      player2.weapon = new Plier();
       //    }else  {
       //      player2.weapon = new Scrappy();
       //    }
       //      console.log('player2 with weapon', player2);
       //  });
       break;

    case "card--battleground":

      $("#attack").on("click", function(e) {

          var p1win = function() {
            $("#player1Wins").show();
          }

          var p2win = function() {
            $("#player2Wins").show();
          }

          console.log("player2", player2)
          console.log("p2health", player2.health)

          if (player2.health <= 0 && player1.health > 0) {
            p1win();
          } else if (player1.health <= 0 && player2.health > 0) {
            p2win();
          } else {

            // Decrement player1's health after attack
            player1.health -= Math.round(player2.weapon.damage + player1.health);
            // Decrement player2's health after attack
            player2.health -= Math.round(player1.weapon.damage + player2.health);

          $("#player1Div").text("PLAYER1 HEALTH: " + player1.health);
          $("#player2Div").text("PLAYER2 HEALTH: " + player2.health);

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

