<template>
  <div class="logo">
    <img src="@/assets/images/logo.png">
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
    }
  }
}
</script>
