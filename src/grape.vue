<template>

  <div class="grape-container">
    Hello. This should be a grape.
    {{ message }}
    
  </div>
</template>

<script>

  export default {
    props: [],
    data: {
      message: "Hello from Grape!"
    }
  }

</script>

<style scoped>
  div { padding: 1em; }  
</style>
