<template>
  <ui-page title="form">
    <div>
      <input
        id="checkbox"
        v-model="checked"
        type="checkbox">
      <label for="checkbox">{{ checked }}</label>
    </div>
    <br>
    <div>
      <input
        id="checkbox"
        v-model="checked2"
        false-value="0"
        true-value="1"
        type="checkbox">
      <label for="checkbox">{{ checked2 }}</label>
    </div>
    <br>
    <div>
      <input
        id="jack"
        v-model="checkedNames"
        type="checkbox"
        value="Jack">
      <label for="jack">Jack</label>
      <input
        id="john"
        v-model="checkedNames"
        type="checkbox"
        value="John">
      <label for="john">John</label>
      <input
        id="mike"
        v-model="checkedNames"
        type="checkbox"
        value="Mike">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <br>
    <div/>
  </ui-page>
</template>

<script>
import uiPage from '@/components/global/uiPage.vue'

export default {
  name: 'Index',
  components: {
    uiPage
  },
  data() {
    return {
      checked: false,
      checked2: '0',
      checkedNames: []
    }
  }
}
</script>

