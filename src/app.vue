<template>
<div>
<div class="message">Value is: {{ count1 }} </div>
<a href="#" @click.prevent="increment">Increment</a>
</div>
</template>

<script>
import store from './store';

export default {
  store,
  computed: {
    count1() {
      return store.state.count1
    }
  },
  methods: {
    increment () {
      store.commit("increment")
    }
  }
}
</script>

<style>
</style>
