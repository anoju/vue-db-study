<template>
  <div class="logo_wrap">
    <div @click="isBG = !isBG">
      <div
        v-if="isBG"
        class="img"/>
      <img
        v-else
        src="@/assets/images/logo.png">
    </div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloLogo',
  props: {
    message: { type: String, default: null }
  },
  data() {
    return {
      isBG: false
    }
  },
  methods: {
  }
}
</script>
