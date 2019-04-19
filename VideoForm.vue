<template>
  <form action="/videos" method='POST' class="new-video" v-on:submit.prevent="onSubmit">
    <input type="hidden" name="_token"/>
    <br/>
    <div class="form-group">
      <input type="text" name="video" class="form-control" placeholder="New Video Link" />
    </div>
  </form>
</template>

<script>
  
export default {
  props: {
    $: {
      type: Object,
      required: true,
    },
    location: {
      type: Object,
      required: true
    }
  },
  mounted: function() {

    // let csrf = $('meta[name=csrf-token]').attr('content')
    // $('form.new-video').find('input[name=_token]').val(csrf)
  },
  methods: {
    onSubmit: function(e) {
      
    }
  }
}
</script>

<style>
</style>
