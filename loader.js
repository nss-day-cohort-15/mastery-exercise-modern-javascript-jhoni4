'use strict'


$(document).ready(function() {
  var myOptions1 = {
      val1 :  '--',
      val2 : 'Ziggo',
      val3 : 'Chinkilla',
      val4 : 'Deadblow',
      val5 : 'Voltronic',
      val6 : 'BioHazard',
      val7 : 'frenZy'
    };
  var mySelect1 = $('#dropDown1');
  var mySelect2 = $('#dropDown2');
  $.each(myOptions1, function(val, text) {
      mySelect1.append(
          $('<option></option>').val(val).html(text)
      );
      mySelect2.append(
          $('<option></option>').val(val).html(text)
      );
  });
  var myOptions2 = {
      val1 :  '--',
      val2 : 'Spark',
      val3 : 'Uxi',
      val4 : 'Plier',
      val5 : 'Scrappy'
  };
  var mySelect3 = $('#dropDown3');
  var mySelect4 = $('#dropDown4');
  $.each(myOptions2, function(val, text) {
      mySelect3.append(
          $('<option></option>').val(val).html(text)
      );
      mySelect4.append(
          $('<option></option>').val(val).html(text)
      );
    });
});
