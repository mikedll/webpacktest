
import $ from 'jquery'
import Vue from 'vue';
import primaryExport from 'bottle.js';
import Grape from 'grape.vue';

primaryExport();

var vue = new Vue({
  el: 'body'
})
window.grape = Grape
// console.log(Grape)
            
$(function() {
  window.comp1 = new Grape()
})
