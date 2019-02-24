
import Vue from 'vue';
import primaryExport from 'bottle.js';
import Grape from 'grape.vue';

primaryExport();

new Vue({
  el: 'body',
  components: { Grape }
})

console.log(Grape.render());
