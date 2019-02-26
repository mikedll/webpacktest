
import $ from 'jquery'
import Vue from 'vue'
import Grape from 'grape.vue'
import _ from 'styles.css'

$(function() {
  $('body').append($('<div id="app"></div>'))

  var vue = new Vue({
    el: '#app',
    render: h => h(Grape)
  })
})
