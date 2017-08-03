var arrx = [];
var arro = [];
var winners = [[1,2,3], [1,4,7], [1,5,9],[4,5,6], [7,8,9], [2,5,8], [3,6,9], [3,5,7]];
var count = 0;
var blnk = '';
var x = 0;
var winner = 0;
var O = 'https://thecliparts.com/wp-content/uploads/2016/12/silver-red-o-clipart.png';
var play1 = 0;
var score1 = 0;
var score2 = 0;
var ai = 0;
//Single Player mode
function player1(){
  $(".players").hide();
  $(".XorO").show();
  $(".top").text('Choose X or O');
  ai = 1;
  $("#player1").off();
  $("#play2").off();
}
//2 Player mode
function play2(){
  ai = 0;
  $(".players").hide();
  $(".XorO").show();
  $(".top").text('Player 1, Choose X or O');
  $("#player1").off();
  $("#play2").off();
}
//AI function for single player
function allowAI(){
  console.log('AI running');
  var rand = Math.floor(Math.random() * 4) + 1;
  if(rand == 2){rand = 3;}
  else if(rand == 3){rand = 5;}
  else if (rand == 4){rand = 7;}
  if(arrx.includes(rand) || arro.includes(rand)){rand += 2;}
  if($(".count").text() == 'Draw!'){
    if (play1 == 1){$(".count").html('<h2>Draw! X Goes First!</h2>');}
    else if(play1 == 2){
      $(".count").html("<h2>Draw! O Goes First!</h2>");
      x = 2;
    }
    return;
  }
  if((winner != play1) && (count == 1 || count == 0)){
    $("#" + rand).click();
    return;
  }
  else{
    for(i =0; i<winners.length; i++){
        if (play1 == 1){
          if(arro.includes(winners[i][0]) && !arrx.includes(winners[i][1]) && !arrx.includes(winners[i][2])){
            if(arro.includes(winners[i][1])){
              $("#" + winners[i][2]).click();
              return;
            }
            else if(arro.includes(winners[i][2]) ){
              $("#" + winners[i][1]).click();
              return;
            }
            else{$("#" + winners[i][2]).click(); return;}
        }
          else if(arro.includes(winners[i][1])&& !arrx.includes(winners[i][0]) && !arrx.includes(winners[i][2])){
            if(arro.includes(winners[i][0])){
              $("#" + winners[i][2]).click();
              return;
            }
            else if(arro.includes(winners[i][2])){
              $("#" + winners[i][0]);
              return;
            }
            else{$("#" + winners[2]).click(); return;}
          }
          else if(arro.includes(winners[i][2]) && !arrx.includes(winners[i][1]) && !arrx.includes(winners[i][0])){
            if(arro.includes(winners[i][0])){
              $("#" + winners[i][1]).click();
              return;
            }
            else if(arro.includes(winners[i][1])){
              $("#" + winners[i][0]).click();
              return;
            }
            else{$("#" + winners[i][0]).click(); return;}
          }
          else{
            for (i = 1; i< 10; i++){
              if ($("#" + i).html() == blnk){
                $("#" + i).click();
                return;
              }
            }

          }
      }
        else if (play1 == 2){
          if(arrx.includes(winners[i][0]) && !arro.includes(winners[i][1]) && !arro.includes(winners[i][2])){
            if(arrx.includes(winners[i][1])){
              $("#" + winners[i][2]).click();
              return;
            }
            else if(arrx.includes(winners[i][2]) ){
              $("#" + winners[i][1]).click();
              return;
            }
            else{$("#" + winners[i][2]).click(); return;}
          }
          else if(arrx.includes(winners[i][1])&& !arro.includes(winners[i][0]) && !arro.includes(winners[i][2])){
            if(arrx.includes(winners[i][0])){
              $("#" + winners[i][2]).click();
              return;
            }
            else if(arrx.includes(winners[i][2])){
              $("#" + winners[i][0]);
              return;
            }
            else{$("#" + winners[2]).click(); return;}
          }
        else if(arrx.includes(winners[i][2]) && !arro.includes(winners[i][1]) && !arro.includes(winners[i][0])){
            if(arrx.includes(winners[i][0])){
              $("#" + winners[i][1]).click();
              return;
            }
            else if(arrx.includes(winners[i][1])){
              $("#" + winners[i][0]).click();
              return;
            }
            else{$("#" + winners[i][0]).click(); return;}
          }
          else{
            for (i = 1; i< 10; i++){
              if ($("#" + i).html() == blnk){
                $("#" + i).click();
                return;
              }
            }
          }
        }
    }

  }
}
//Choose X for Player 1 and pull up board
function ex(){
  $(".intro").hide();
  $(".u").show();
  x = 1;
  play1 = 1;
  $(".title").hide();
  $(".score").show();
  $("#X").off();
  $("#O").off();
}
//Choose O for Player 1 and pull up board
function oh(){
  play1 = 2;
  $(".intro").hide();
  $('.u').show();
  $(".title").hide();
  $(".score").show();
  $("#X").off();
  $("#O").off();
}
//Clear board, reset clickBindings, set New Game message and starting shape
function reset(){
  console.log('reset');
  count = 0; arro = []; arrx = [];
  $(".u").children().html(blnk);
  $(".u").children().off("click")
  $('.u').children().click(PutXorO);
  if (winner == 2){
    $(".count").html("<h2>New Game! O Goes First!</h2>")
    x = 0;
  }
  else if (winner == 1){
    $(".count").html("<h2>New Game! X Goes First!</h2>")
    x = 1;
  }
  else if (winner === 0){
    console.log('draw');
    if(play1 == 1){
      winner = 1;
      $(".count").html("<h2>New Game! X Goes First!</h2>")
      x = 1;
    }
    else if(play2 == 2){
      winner = 2;
      $(".count").html("<h2>New Game! O Goes First!</h2>")
      x = 0;
    }

  }
  if (winner != play1 && play1 == 1 && ai == 1){
    allowAI();
  }
  else if (winner != play1 && play1 == 2 && ai == 1){
    allowAI();
  }

}
//Place X or O in square, Clear new game message, and checkwin after minimum of 5 squares have been filled, determine draw
function PutXorO(){

  if ($(".count").html() == "<h2>New Game!</h2>"){$(".count").html('');}
  if ($(this).html() != blnk){}
  else{
  if(x % 2 === 0){
    arro.push(parseInt($(this).attr('id')));
    $(this).html('<img src="'+O+'">');
    console.log($(this).css('height'));
      count += 1;
      x += 1;}
  else{
    arrx.push(parseInt($(this).attr('id')));
    $(this).html('<img src="http://static.tumblr.com/84d2f4dd4634b16ccac1e14e11f72fae/p29yrlq/66Mmw81g2/tumblr_static_black_x.png">');
      count += 1;
      x += 1;
      }

  if (count > 4){
    if (checkWin()){
      return;
    }
  }
    if (count == 9 ){
      $(".count").html('<h2>Draw!<h2>');
      winner = 0;
      $('.u').children().click(reset);
      arro = [];
      arrx = [];
      return;
    }
  console.log("winner>> " + winner);
  console.log('count >> ' + count);
  console.log('play1 >> ' + play1);
  if(winner == 0 && ai == 1){
    if(count % 2 !== 0){
      console.log('A');
      allowAI();
      return;
    }
  }
  else if(winner == play1 && ai == 1){
    if(count %  2 !== 0){
      console.log('B');
      allowAI();
      return;
    }
  }
  else if ((winner != play1) && ai ==1){
    if(count % 2 != 1){
      console.log('C');
      allowAI();
      return;
    }
  }

}

}
//Compares X and O arrays to winners, if they match, add a point to player's score and call reset
function checkWin(){
  console.log('checkin');
  for(i =0;i<winners.length; i++){
    y = 0;
    z = 0;
    for (j = 0; j<3; j++){
      if(arro.includes(winners[i][j])){
        y += 1;
        if(y == 3){
          winner = 2;
          arro = [];
          arrx = [];
          if (play1 == 1){score2 += 1;}
          else{score1 += 1;}
          $("#Score1").text("Player 1: " + ' ' + score1);
          $("#Score2").text("Player 2: " + ' ' + score2);
          $(".count").html('<h2>O wins!<h2>');
          $('.u').children().click(reset);
          return true;
          }
      }
      else if (arrx.includes(winners[i][j])){
        z += 1;
        if (z == 3){
          winner = 1;
          arrx = [];
          arro = [];
          if(play1 == 1){score1 += 1;}
          else{score2 += 1;}
          $("#Score1").text("Player 1: " + score1);
          $("#Score2").text("Player 2: " + score2);
          $(".count").html('<h2>X wins!<h2>');
          $('.u').children().click(reset);
          return true;
        }
      }
    }
  }
  return false;
}

//ClickHandlerEvents, start off with intro and set blnk to blank .u.children()
$(document).ready(function(){
  $('.u').children().click(PutXorO);
  $("#play1").click(player1);
  $("#play2").click(play2);
  $("#X").click(ex);
  $("#O").click(oh);
  $(".u").hide();
  $(".score").hide();
  $(".XorO").hide();
  blnk = $(".mr").html();
});
