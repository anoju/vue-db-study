<template>
  <div>
    <div
      class="logo_wrap"
      @click="isBg = !isBg"
    >
      <div
        v-if="isBg"
        class="logo"
      />
      <img
        v-else
        alt="Vue logo"
        src="@/assets/images/logo.png"
      >
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      isBg: false,
    }
  },
  computed: {
    bgBox() {
      const val = !this.isBg
      console.log(val)
      return val
    },
    // imgSrc() {
    //   return require('@/assets/images/logo.png')
    // },
  },
  watch: {
    isBg() {
      console.log(this.isBg)
    },
  },
  beforeMount() {
    console.log('home beforeMount', this.isBg, this.$el)
  },
  mounted() {
    console.log('home mounted', this.isBg, this.$el)
  },
  beforeDestroy() {
    console.log('home beforeDestroy', this.isBg, this.$el)
  },
  methods: {
    say(message) {
      alert(message)
    },
  },
}
</script>
