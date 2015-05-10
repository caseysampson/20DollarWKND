/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


/***************  SWIPING JAVASCRPI HERE ****************************/

//TWENTY DOLLAR WEEKEND

var wknd = function() {
  var dieLandingOneComp = '';
  var dieLandingTwoComp = '';
  var dieLandingThreeComp = '';
  var dieLandingOne = '';
  var dieLandingTwo = '';
  var dieLandingThree = '';
  var partyBroDouble = '';
  var compDouble = '';
  var partyBroSingle = '';
  var compSingle = '';
  var currentPot = '';
  var _this = this;

//CEE-LO

  //Computer
  var rollDiceComp = function() {
    hideComputerDice();
    hidePlayerDice();
    rollDieOneComp();
    rollDieTwoComp();
    rollDieThreeComp();
  }

  var checkResultComp = function() {
    if ((dieLandingOneComp == dieLandingTwoComp) && (dieLandingOneComp == dieLandingThreeComp) && (dieLandingTwoComp == dieLandingThreeComp)){
      handleTriples();
    } else if (((dieLandingOneComp == 1) && (dieLandingTwoComp == 2) && (dieLandingThreeComp == 3)) || ((dieLandingOneComp == 1) && (dieLandingTwoComp == 3) && (dieLandingThreeComp == 2)) || ((dieLandingOneComp == 2) && (dieLandingTwoComp == 3) && (dieLandingThreeComp == 1)) || ((dieLandingOneComp == 2) && (dieLandingTwoComp == 1) && (dieLandingThreeComp == 3)) || ((dieLandingOneComp == 3) && (dieLandingTwoComp == 1) && (dieLandingThreeComp == 2)) || ((dieLandingOneComp == 3) && (dieLandingTwoComp == 2) && (dieLandingThreeComp == 1))) {
      handleCompOneTwoThree();
    } else if (((dieLandingOneComp == 4) && (dieLandingTwoComp == 5) && (dieLandingThreeComp == 6)) || ((dieLandingOneComp == 4) && (dieLandingTwoComp == 6) && (dieLandingThreeComp == 5)) || ((dieLandingOneComp == 5) && (dieLandingTwoComp == 6) && (dieLandingThreeComp == 4)) || ((dieLandingOneComp == 5) && (dieLandingTwoComp == 4) && (dieLandingThreeComp == 6)) || ((dieLandingOneComp == 6) && (dieLandingTwoComp == 4) && (dieLandingThreeComp == 5)) || ((dieLandingOneComp == 6) && (dieLandingTwoComp == 5) && (dieLandingThreeComp == 4))) {
      handleCompFourFiveSix();
    } else if ((dieLandingOneComp == dieLandingTwoComp) || (dieLandingOneComp == dieLandingThreeComp) || (dieLandingTwoComp == dieLandingThreeComp)) {
      handleCompDoubles();
    } else {
      rollDiceComp();
    }
  }

  var rollDieOneComp = function() {
    var dieOneComp = [1,2,3,4,5,6];
    dieLandingOneComp = dieOneComp[Math.floor(Math.random() * dieOneComp.length)];
    if (dieLandingOneComp == 1) {
      $('#die_one_a_comp').show();
    } else if (dieLandingOneComp == 2) {
      $('#die_two_a_comp').show();
    } else if (dieLandingOneComp == 3) {
      $('#die_three_a_comp').show();
    } else if (dieLandingOneComp == 4) {
      $('#die_four_a_comp').show();
    } else if (dieLandingOneComp == 5) {
      $('#die_five_a_comp').show();
    } else if (dieLandingOneComp == 6) {
      $('#die_six_a_comp').show();
    }
  }

  var rollDieTwoComp = function() {
    var dieTwoComp = ["1","2","3","4","5","6"];
    dieLandingTwoComp = dieTwoComp[Math.floor(Math.random() * dieTwoComp.length)];
    if (dieLandingTwoComp == 1) {
      $('#die_one_b_comp').show();
    } else if (dieLandingTwoComp == 2) {
      $('#die_two_b_comp').show();
    } else if (dieLandingTwoComp == 3) {
      $('#die_three_b_comp').show();
    } else if (dieLandingTwoComp == 4) {
      $('#die_four_b_comp').show();
    } else if (dieLandingTwoComp == 5) {
      $('#die_five_b_comp').show();
    } else if (dieLandingTwoComp == 6) {
      $('#die_six_b_comp').show();
    }
  }

  var rollDieThreeComp = function() {
    var dieThreeComp = ["1","2","3","4","5","6"];
    dieLandingThreeComp = dieThreeComp[Math.floor(Math.random() * dieThreeComp.length)];
    if (dieLandingThreeComp == 1) {
      $('#die_one_c_comp').show();
    } else if (dieLandingThreeComp == 2) {
      $('#die_two_c_comp').show();
    } else if (dieLandingThreeComp == 3) {
      $('#die_three_c_comp').show();
    } else if (dieLandingThreeComp == 4) {
      $('#die_four_c_comp').show();
    } else if (dieLandingThreeComp == 5) {
      $('#die_five_c_comp').show();
    } else if (dieLandingThreeComp == 6) {
      $('#die_six_c_comp').show();
    }
    checkResultComp();
  }

  //Player
  var rollDice = function() {
    hidePlayerDice();
    rollDieOne();
    rollDieTwo();
    rollDieThree();
    $('#roll_again').hide();
  }

  var checkResultPlayer = function() {
    if ((dieLandingOne == dieLandingTwo) && (dieLandingOne == dieLandingThree) && (dieLandingTwo == dieLandingThree)) {
      handleTriples();
    } else if (((dieLandingOne == 1) && (dieLandingTwo == 2) && (dieLandingThree == 3)) || ((dieLandingOne == 1) && (dieLandingTwo == 3) && (dieLandingThree == 2)) || ((dieLandingOne == 2) && (dieLandingTwo == 3) && (dieLandingThree == 1)) || ((dieLandingOne == 2) && (dieLandingTwo == 1) && (dieLandingThree == 3)) || ((dieLandingOne == 3) && (dieLandingTwo == 1) && (dieLandingThree == 2)) || ((dieLandingOne == 3) && (dieLandingTwo == 2) && (dieLandingThree == 1))) {
      handlePartyBroOneTwoThree();
    } else if (((dieLandingOne == 4) && (dieLandingTwo == 5) && (dieLandingThree == 6)) || ((dieLandingOne == 4) && (dieLandingTwo == 6) && (dieLandingThree == 5)) || ((dieLandingOne == 5) && (dieLandingTwo == 6) && (dieLandingThree == 4)) || ((dieLandingOne == 5) && (dieLandingTwo == 4) && (dieLandingThree == 6)) || ((dieLandingOne == 6) && (dieLandingTwo == 4) && (dieLandingThree == 5)) || ((dieLandingOne == 6) && (dieLandingTwo == 5) && (dieLandingThree == 4))) {
      handlePartyBroFourFiveSix();
    } else if ((dieLandingOne == dieLandingTwo) || (dieLandingOne == dieLandingThree) || (dieLandingTwo == dieLandingThree)) {
      handlePartyBroDoubles();
    } else {
      rollDice();
    }
  }

  var rollDieOne = function() {
    var dieOne = [1,2,3,4,5,6];
    dieLandingOne = dieOne[Math.floor(Math.random() * dieOne.length)];
    if (dieLandingOne == 1) {
      $('#die_one_a').show();
    } else if (dieLandingOne == 2) {
      $('#die_two_a').show();
    } else if (dieLandingOne == 3) {
      $('#die_three_a').show();
    } else if (dieLandingOne == 4) {
      $('#die_four_a').show();
    } else if (dieLandingOne == 5) {
      $('#die_five_a').show();
    } else if (dieLandingOne == 6) {
      $('#die_six_a').show();
    }
  }

  var rollDieTwo = function() {
    var dieTwo = ["1","2","3","4","5","6"];
    dieLandingTwo = dieTwo[Math.floor(Math.random() * dieTwo.length)];
    if (dieLandingTwo == 1) {
      $('#die_one_b').show();
    } else if (dieLandingTwo == 2) {
      $('#die_two_b').show();
    } else if (dieLandingTwo == 3) {
      $('#die_three_b').show();
    } else if (dieLandingTwo == 4) {
      $('#die_four_b').show();
    } else if (dieLandingTwo == 5) {
      $('#die_five_b').show();
    } else if (dieLandingTwo == 6) {
      $('#die_six_b').show();
    }
  }

  var rollDieThree = function() {
    var dieThree = ["1","2","3","4","5","6"];
    dieLandingThree = dieThree[Math.floor(Math.random() * dieThree.length)];
    if (dieLandingThree == 1) {
      $('#die_one_c').show();
    } else if (dieLandingThree == 2) {
      $('#die_two_c').show();
    } else if (dieLandingThree == 3) {
      $('#die_three_c').show();
    } else if (dieLandingThree == 4) {
      $('#die_four_c').show();
    } else if (dieLandingThree == 5) {
      $('#die_five_c').show();
    } else if (dieLandingThree == 6) {
      $('#die_six_c').show();
    }
    checkResultPlayer();
  }

  //Outcome
  var compareRoll = function() {
    if ( (partyBroSingle > compSingle) || ((partyBroSingle == compSingle) && (partyBroDouble > partyBroSingle)) ) {
      partyBro.dollar = partyBro.dollar + currentPot;
      hideDiceTimeout();
    } else if ((partyBroSingle == compSingle) && (partyBroDouble == compDouble)) {
      hideDiceTimeoutRoll();
    } else {
      hideDiceTimeout();
    }
    showWallet();
  }

  var handleCompDoubles = function() {
    if (dieLandingOneComp == dieLandingTwoComp) {
      compDouble = dieLandingOneComp;
      compSingle = dieLandingThreeComp;
    } else if (dieLandingOneComp == dieLandingThreeComp){
      compDouble = dieLandingOneComp;
      compSingle = dieLandingTwoComp;
    } else if (dieLandingTwo == dieLandingThree){
      compDouble = dieLandingTwoComp;
      compSingle = dieLandingOneComp;
    }
    setTimeout(function(){
      $('#show_wallet').show();
      $('#show_banner').hide();
      bannerCompDiceRoll();
      showFist();
    }, 1000);
  }

  var handlePartyBroDoubles = function() {
    if (dieLandingOne == dieLandingTwo) {
      partyBroDouble = dieLandingOne;
      partyBroSingle = dieLandingThree;
    } else if (dieLandingOne == dieLandingThree){
      partyBroDouble = dieLandingOne;
      partyBroSingle = dieLandingTwo;
    } else if (dieLandingTwo == dieLandingThree){
      partyBroDouble = dieLandingTwo;
      partyBroSingle = dieLandingOne;
    }
    showWallet();
    compareRoll();
  }

  var handleTriples = function() {
    doublePot();
    hideDiceTimeoutRoll();
    $.mobile.changePage("#page4", { transition: "flip"} );
    $('#double_pot').show();
    $('#double_pot').text("Double Pot");
    showWallet();
  }

  var doublePot = function() {
    if (partyBro.dollar >= currentBet) {
      partyBro.dollar = partyBro.dollar - currentBet;
      currentPot = currentPot * 2;
    } else {
      $('#leave_table').show();
      $('#leave_table').text("Not enough cash");
    }
  }

  var handleCompFourFiveSix = function() {
    hideDiceTimeout();
    showWallet();
    $('#img_hand').hide();
  }

  var handlePartyBroFourFiveSix = function() {
    partyBro.dollar = partyBro.dollar + currentPot;
    hideDiceTimeout();
    showWallet();
  }

  var handleCompOneTwoThree = function() {
    partyBro.dollars = partyBro.dollars + currentPot;
    hideDiceTimeout();
    showWallet();
    $('#img_hand').hide();
  }

  var handlePartyBroOneTwoThree = function() {
    hideDiceTimeout();
    showWallet();
  }

  var showWallet = function() {
    $('#show_wallet').text("$" + partyBro.dollar);
    $('#show_wallet_banner').text("$" + partyBro.dollar);
  }

  var checkWallet = function() {
    if (partyBro.dollar < 20) {
      $('#twenty_dollar').attr("disabled", true);
    }
    if (partyBro.dollar < 10) {
      $('#ten_dollar').attr("disabled", true);
    }
    if (partyBro.dollar < 5) {
      $('#five_dollar').attr("disabled", true);
    }
    if (partyBro.dollar < 2) {
      $('#two_dollar').attr("disabled", true);
    }
    if (partyBro.dollar < 1) {
      $('#one_dollar').attr("disabled", true);
    }
    if (partyBro.dollar >= 20) {
      $('#twenty_dollar').attr("disabled", false);
    }
    if (partyBro.dollar >= 10) {
      $('#ten_dollar').attr("disabled", false);
    }
    if (partyBro.dollar >= 5) {
      $('#five_dollar').attr("disabled", false);
    }
    if (partyBro.dollar >= 2) {
      $('#two_dollar').attr("disabled", false);
    }
    if (partyBro.dollar >= 1) {
      $('#one_dollar').attr("disabled", false);
    }
  }

  //Timeout
  var hideDiceTimeoutRoll = function() {
    hideFist();
    setTimeout(function(){
      $('#double_pot').hide();
      hidePlayerDice();
      hideComputerDice();
      rollDiceComp();
    }, 3000);
  }

  var hideDiceTimeout = function() {
    hideFist();
    setTimeout(function(){
      $('#double_pot').hide();
      hidePlayerDice();
      hideComputerDice();
      enableBet();
      checkWallet();
    }, 3000);
  }

  var showFist = function(){
    setTimeout(function(){
      $('#img_hand').hide();
      $('#roll_dice').show();
      $('#roll_dice').addClass('animated slideInLeft');
    }, 1000);
    setTimeout(function(){
      $('#roll_dice').removeClass('animated slideInLeft');
    }, 2000);
  }

  var hideFist = function(){
    $('#roll_dice').hide();
    $('#img_hand').show();
    setTimeout(function(){
      $('#img_hand').addClass('animated slideOutLeft');
    }, 500);
    setTimeout(function(){
      $('#img_hand').hide();
    }, 1500);
    $('#img_hand').removeClass('animated slideOutLeft');
  }

  var blottoHideFist = function(){
    setTimeout(function(){
      $('#blotto_roll_dice').hide();
      $('#blotto_img_hand').show();
      $('#blotto_img_hand').addClass('animated slideOutRight');
      rollDiceComp();
    }, 500);
    setTimeout(function(){
      $('#blotto_img_hand').hide();
    }, 1500);
    $('#blotto_img_hand').removeClass('animated slideOutRight');
  }


  //BET
  var showCompDiceRoll = function() {
    $('#show_wallet').hide();
    $('#show_banner').show();
    $('#banner').removeClass('banner-top')
    $('#show_die_one_comp').addClass('comp_die_one');
    $('#show_die_two_comp').addClass('comp_die_two');
    $('#show_die_three_comp').addClass('comp_die_three');
  }

  var bannerCompDiceRoll = function() {
    $('#banner').addClass('banner-top')
    $('#show_die_one_comp').removeClass('comp_die_one');
    $('#show_die_two_comp').removeClass('comp_die_two');
    $('#show_die_three_comp').removeClass('comp_die_three');
  }

  var blottoFist = function() {
      $('#blotto_img_hand').hide();
      $('#blotto_roll_dice').show();
      $('#blotto_roll_dice').addClass('animated slideInRight');
    setTimeout(function(){
      showCompDiceRoll();
      blottoHideFist();
    }, 500);
    setTimeout(function(){
      $('#blotto_roll_dice').removeClass('animated slideInRight');
    }, 2000);
  }

  var oneDollarBet = function() {
    disableBet();
    if (partyBro.dollar >= 1) {
      partyBro.dollar = partyBro.dollar - 1;
      currentBet = 1;
      currentPot = 2;
      blottoFist();
    } else {
      $.mobile.changePage("#page4", { transition: "flip"} );
      $('#check_wallet').show();
    }
    showWallet();
  }

  var fiveDollarBet = function() {
    disableBet();
    if (partyBro.dollar >= 5) {
      partyBro.dollar = partyBro.dollar - 5;
      currentBet = 5;
      currentPot = 10;
      blottoFist();
    } else {
      $.mobile.changePage("#page4", { transition: "flip"} );
      $('#check_wallet').show();
    }
    showWallet();
  }

  var tenDollarBet = function() {
    disableBet();
    if (partyBro.dollar >= 10) {
      partyBro.dollar = partyBro.dollar - 10;
      currentBet = 10;
      currentPot = 20;
      blottoFist();
    } else {
      $.mobile.changePage("#page4", { transition: "flip"} );
      $('#check_wallet').show();
    }
    showWallet();
  }

   var twentyDollarBet = function() {
    disableBet();
    if (partyBro.dollar >= 20) {
      partyBro.dollar = partyBro.dollar - 20;
      currentBet = 20;
      currentPot = 40;
      blottoFist();
    } else {
      $.mobile.changePage("#page4", { transition: "flip"} );
      $('#check_wallet').show();
    }
    showWallet();
  }

  var disableBet = function() {
    $('#one_dollar').attr("disabled", true); 
    $('#two_dollar').attr("disabled", true);
    $('#five_dollar').attr("disabled", true);
    $('#ten_dollar').attr("disabled", true);
    $('#twenty_dollar').attr("disabled", true);
  } 

  var enableBet = function() {
    $('#one_dollar').attr("disabled", false); 
    $('#two_dollar').attr("disabled", false);
    $('#five_dollar').attr("disabled", false);
    $('#ten_dollar').attr("disabled", false);
    $('#twenty_dollar').attr("disabled", false);
  }

  //Hide Dice
  var hideComputerDice = function(){
    $('#die_one_a_comp').hide();
    $('#die_two_a_comp').hide();
    $('#die_three_a_comp').hide();
    $('#die_four_a_comp').hide();
    $('#die_five_a_comp').hide();
    $('#die_six_a_comp').hide();
    $('#die_one_b_comp').hide();
    $('#die_two_b_comp').hide();
    $('#die_three_b_comp').hide();
    $('#die_four_b_comp').hide();
    $('#die_five_b_comp').hide();
    $('#die_six_b_comp').hide();
    $('#die_one_c_comp').hide();
    $('#die_two_c_comp').hide();
    $('#die_three_c_comp').hide();
    $('#die_four_c_comp').hide();
    $('#die_five_c_comp').hide();
    $('#die_six_c_comp').hide();
  }

  var hidePlayerDice = function(){
    $('#die_one_a').hide();
    $('#die_two_a').hide();
    $('#die_three_a').hide();
    $('#die_four_a').hide();
    $('#die_five_a').hide();
    $('#die_six_a').hide();
    $('#die_one_b').hide();
    $('#die_two_b').hide();
    $('#die_three_b').hide();
    $('#die_four_b').hide();
    $('#die_five_b').hide();
    $('#die_six_b').hide();
    $('#die_one_c').hide();
    $('#die_two_c').hide();
    $('#die_three_c').hide();
    $('#die_four_c').hide();
    $('#die_five_c').hide();
    $('#die_six_c').hide();
  }

  //CONSUME
  var drinkBeer = function() {
    if (friday.beer == 6) {
      friday.beer = friday.beer - 1;
      $('#beer6').hide();
    } else if (friday.beer == 5) {
      friday.beer = friday.beer - 1;
      $('#beer3').hide();
    } else if (friday.beer == 4) {
      friday.beer = friday.beer - 1;
      $('#beer5').hide();
    } else if (friday.beer == 3) {
      friday.beer = friday.beer - 1;
      $('#beer2').hide();
    } else if (friday.beer == 2) {
      friday.beer = friday.beer - 1;
      $('#beer4').hide();
    } else if (friday.beer == 1) {
      friday.beer = friday.beer - 1;
      $('#beer1').hide();
    }
    payBeer();
  }

  var payBeer = function() {
    if (friday.beer >= 0) {
      partyBro.dollar = partyBro.dollar - 3;
      showWallet();
    }
  }

  var eatPizza = function() {
    if (friday.slice == 8) {
      $('#slice1').hide();
    } else if (friday.slice == 7) {
      $('#slice2').hide();
    } else if (friday.slice == 6) {
      $('#slice3').hide();
    } else if (friday.slice == 5) {
      $('#slice4').hide();
    } else if (friday.slice == 4) {
      $('#slice5').hide();
    } else if (friday.slice == 3) {
      $('#slice6').hide();
    } else if (friday.slice == 2) {
      $('#slice7').hide();
    } else if (friday.slice == 1) {
      $('#slice8').hide();
    }
    if (friday.slice > 0 ) {
      friday.slice = friday.slice - 1;
    }
    payPizza();
  }

  var payPizza = function() {
    if (friday.slice >= 0) {
      partyBro.dollar = partyBro.dollar - 2;
      showWallet();
    }
  }
  
  //FRIDAY


  //START 
  var resetWKNK = function() {
    partyBro = {'name': '', 'dollar': 20, 'slice': 0, 'beer': 0, 'point': 0};
    $('#game_over').hide();
    friday = {'beer': 6, 'slice': 8};
  }
  
  this.startWKND = function() {
    $.mobile.changePage("#page3");
    resetWKNK();
    hidePlayerDice();
    hideComputerDice();
    showWallet();
    $('#img_hand').hide();
    $('#roll_dice').hide();
    $('#blotto_img_hand').hide();
    $('#blotto_roll_dice').hide();
    $('#show_banner').hide();
    $('#leave_table').hide();
    $('#roll_again').hide();
    $('#check_wallet').hide();
    $('#check_wallet').text("You better check your wallet");
  }

  this._bindEvents = function() {
    $('body').on('click', '#roll_dice', rollDice);
    $('body').on('click', '#one_dollar', oneDollarBet);
    $('body').on('click', '#five_dollar', fiveDollarBet);
    $('body').on('click', '#ten_dollar', tenDollarBet);
    $('body').on('click', '#twenty_dollar', twentyDollarBet);
    $('body').on('click', '#beer', drinkBeer);
    $('body').on('click', '#pizza', eatPizza);
  }

}

var myWKND = null;

$(function(){
  myWKND = new wknd();
  myWKND._bindEvents();
  myWKND.startWKND();
});


