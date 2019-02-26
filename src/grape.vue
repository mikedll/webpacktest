<template>

  <div class="grape-container">
    Hello. This should be a grape.
    
    {{ message }}

    <button v-on:click="onEnhance">Enhance</button>
  </div>
</template>

<script>

export default {

  methods: {
    onEnhance: function(e) {
      this.message += "!"
    }
  },
  data: function() {
    return {
      message: "Hello from Grape!"
    }
  }
}

</script>

<style>
  div { padding: 1em; }  
</style>
