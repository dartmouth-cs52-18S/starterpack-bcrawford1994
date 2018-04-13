//console.log('starting up');
//const $ = require('jquery');

//$('main').html('Here we go!');
// change require to es6 import style
import $ from 'jquery';
let num = 0;
setInterval (function()=>{
  $('main').html('You have been on this page for ${num} seconds');
  num = num + 1}, 1000);
  //alert("You have been on this page for ${num} seconds");
  //num = num +1 },1000);
//$('main').html('You have been on this page for ${num} seconds' )
