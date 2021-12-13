// Contact form alerts
function validateContact(){
    var valid = true;

    if(document.querySelector("#name").value==""){
      $("#fullName-alert").show();
      $("#fullName-alert").delay(4000).hide("slow");
      valid = false;
    }

    if(document.querySelector("#email").value==""){
      $("#email-alert").show();
      $("#email-alert").delay(4000).hide("slow");
      valid = false;
    }

    if(document.querySelector("#freeText").value==""){
      $("#message-alert").show();
      $("#message-alert").delay(4000).hide("slow");
      valid = false;
    }

    return valid;
  }

  $(document).ready(function(){
    $("#flex").hide();
    $("#fullName-alert").hide();
    $("#email-alert").hide();
    $("#message-alert").hide();
  });



//Payment Info form alerts

function validateInfo(){
  var valid = true;

  if(document.querySelector("#membership-forename").value==""){
    $("#forename-alert").show();
    $("#forename-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#membership-surname").value==""){
    $("#surname-alert").show();
    $("#surname-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#membership-dob").value==""){
    $("#dob-alert").show();
    $("#dob-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#membership-email").value==""){
    $("#email-alert").show();
    $("#email-alert").delay(4000).hide("slow");
    valid = false;
  }

  var emailAddress = document.querySelector("#membership-email").value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)){
    valid = true;
  }else{
    $("#email-alert").show();
    $("#email-alert").delay(4000).hide("slow");
    valid = false;
  }


  if(document.querySelector("#address-line1").value==""){
    $("#line1-alert").show();
    $("#line1-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#town-city").value==""){
    $("#town-alert").show();
    $("#town-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#county").value=="0"){
    $("#county-alert").show();
    $("#county-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#membership-choice").value=="0"){
    $("#membership-alert").show();
    $("#membership-alert").delay(4000).hide("slow");
    valid = false;
  }

  if(document.querySelector("#plan-choice").value=="0"){
    $("#plan-alert").show();
    $("#plan-alert").delay(4000).hide("slow");
    valid = false
  }

  if(document.querySelector("#payment-method").value=="0"){
    $("#payment-method-alert").show();
    $("#payment-method-alert").delay(4000).hide("slow");
  }

  if(document.querySelector("#payment-method").value=="1"){

    if(document.querySelector("#full-name").value==""){
      $("#card-name-alert").show();
      $("#card-name-alert").delay(4000).hide("slow");
      valid = false;
    }

    if(document.querySelector("#card-number").value==""){
      $("#card-number-alert").show();
      $("#card-number-alert").delay(4000).hide("slow");
      valid = false;
    }

    var cardNumber = document.querySelector("#card-number").value;

    if(cardNumber.length !=16){
      $("#card-number-alert").show();
      $("#card-number-alert").delay(4000).hide("slow");
      valid = false;
    }

    if(document.querySelector("#card-expiry").value==""){
      $("#card-expiry-alert").show();
      $("#card-expiry-alert").delay(4000).hide("slow");
      valid = false;
    }

    if(document.querySelector("#card-cvv").value==""){
      $("#card-cvv-alert").show();
      $("#card-cvv-alert").delay(4000).hide("slow");
      valid = false;
    }

    var cardCVV = document.querySelector("#card-cvv").value;

    if(cardCVV.length !=3){
      $("#card-cvv-alert").show();
      $("#card-cvv-alert").delay(4000).hide("slow");
      valid = false;
    }
  }

  if (valid){
      $("#join-button").hide();
      $("#message-success").show();
  }

  return valid;

}

var total = 0;
function calculateCost(){
  let membership = document.querySelector("#membership-choice").value;
  let plan = document.querySelector("#plan-choice").value;
  let discount = document.querySelector("#discount-code").value;

  total = membership * plan

  if (discount == "BIKE"){
    total = (total/100)*90;
  }



  document.querySelector("#total-cost").innerHTML = "&euro;" + Number.parseFloat(total).toFixed(2);

}

  $(document).ready(function(){
    $("#flex").hide();
    $("#forename-alert").hide();
    $("#surname-alert").hide();
    $("#dob-alert").hide();
    $("#line1-alert").hide();
    $("#town-alert").hide();
    $("#county-alert").hide();
    $("#membership-alert").hide();
    $("#plan-alert").hide();
    $("#payment-method-alert").hide();
    $("#card-name-alert").hide();
    $("#card-number-alert").hide();
    $("#card-expiry-alert").hide();
    $("#card-cvv-alert").hide();
    $("#card-payment").hide();
    $("#paypal-payment").hide();
    $("#message-success").hide();
  });

function paymentSelected(element){

  if(element.options[element.selectedIndex].value == "0"){
    $("#paypal-payment").hide();
    $("#card-payment").hide();
  }

  if(element.options[element.selectedIndex].value == "1"){
    $("#paypal-payment").hide();
    $("#card-payment").show();
  }

  if(element.options[element.selectedIndex].value == "2"){
    $("#card-payment").hide();
    $("#paypal-payment").show();
  }
}
