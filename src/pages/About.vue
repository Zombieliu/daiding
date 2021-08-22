<template>
  <div>
    {{count}}
  </div>
  <p>I'm just a dumb about page with no content.</p>
  <p>
    <router-link to='/'>Back to homepage</router-link>
  </p>
</template>

<script lang="ts">
import { useStore } from '../store'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    return {
      count
    }
  }
}
</script>
