
import $ from 'jquery'
import Vue from 'vue'
import Grape from 'grape.vue'

$(function() {
  $('body').append($('<div id="app"></div>'))

  var vue = new Vue({
    el: '#app',
    render: h => h(Grape)
  })
})
