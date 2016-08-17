'use strict'

var player1 = {};
var player2 = {};
      var newPlayer1 = $("#player1-name").val();
      var newPlayer2 = $("#player2-name").val();
$(document).ready(function() {
      console.log("new player1", newPlayer1)

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
      // player2 = new Robot(playerName2);
      console.log('player1', player1);
      console.log('player2', player2);
    // function generateHealth (player) {
    //   this.health = Math.round(Math.random() * (this.maxHealth - this.minHealth) + this.minHealth)
    // }

          // player1.generateHealth();
          // player2.generateHealth();
          // console.log('player1 with health', player1);
          // console.log('player2 with health', player2);

        // console.log("Clicked card--something else")

        // break;


          // console.log("Clicked card--weapon")
       //  $("#dropDown3").on("change", function(e) {

       //    console.log("i am p1 weapon", .val(this))
       //    console.log("i am p1 weapon", this.value)
       //    player1.weapon = $(this.value)
       // })

   $("#dropDown3").on("change", function(e) {
    // console.log("selected is ", $(this).find("option:selected").text())
      if ($(this).find("option:selected").text() === "Spark") {
        player1.weapon = new Spark();
      } else if ($(this).find("option:selected").text() === "Uxi") {
        player1.weapon = new Uxi();
      } else if ($(this).find("option:selected").text() === "Plier") {
        player1.weapon = new Plier();
      }else  {
        player1.weapon = new Scrappy();
      }
        // console.log('player1.weapon is', player1.weapon);
        // console.log('player1 with weapon', player1);
    });

       // $("#dropDown4").on("change", function(e) {
       //   // console.log("i am p2 weapon", $(this).find("option:selected").text())
       //   player2.weapon = $(this).find("option:selected").text();
       //   console.log('player2.weapon is', player2.weapon);
       //   console.log('player2 with weapon', player2);
       // })
     $("#dropDown4").on("change", function(e) {
        if ($(this).find("option:selected").text() === "Spark") {
          player2.weapon = new Spark();
        } else if ($(this).find("option:selected").text() === "Uxi") {
          player2.weapon = new Uxi();
        } else if ($(this).find("option:selected").text() === "Plier") {
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

        if (player2.health <= 0 && player1.health > 0) {
          $("#player1Wins").show();
          $("#player1Wins").toggleClass("hidden");
        } else if (player1.health <= 0 && player2.health > 0) {
            $("#player2Wins").show();
          $("#player2Wins").toggleClass("hidden");
        } else {

          // Decrement player1's health after attack
          // player1.health -= Math.round(player2.weapon.damage + player1.health);
          player1.health -= player2.weapon.damage;
          // Decrement player2's health after attack
          // player2.health -= Math.round(player1.weapon.damage + player2.health);
          player2.health -= player1.weapon.damage;
            console.log("player1", player1)
            console.log("player2", player2)
            console.log("player1 health", player1.health)
            console.log("player2 health", player2.health)
        // $("#player1Div").text();
        // $("#player1Div").append(`${player1.image}`);
           var output1 = `<img src = "${player1.image}">${player1.name} ${player1.health}`
        // $("#player2Div").text("PLAYER2: " + player2.name);
         $("#player1Div").html(output1);
          $("#player2Div").html(`<img src = "${player2.image}">${player2.name} ${player2.health}`)
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

