<template>

  <div class="grape-container">
    Hello. This should be a grape.
    {{ message }}    
  </div>
</template>

<script>

  export default {
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
