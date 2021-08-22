<template>
  <h1>{{ msg }}</h1>
  <h2>{{ count }}</h2>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

<style>
</style>
