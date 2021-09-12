<template>
  <div>
    <div @click="isBg = !isBg">
      <div v-if="isBg" class="logo"></div>
      <img v-else alt="Vue logo" src="@/assets/images/logo.png">
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'helloHome',
  components: {
    HelloWorld
  },
  data() {
    return {
      isBg: false
    }
  }
}
</script>
