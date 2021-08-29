!<template>
  <section class="page">
    <header class="header">
      <button
        type="button"
        class="btn_back"
        aria-label="뒤로가기"/>
      <h1>{{ title }}</h1>
      <button
        :class="{on:gnbOpen}"
        type="button"
        class="btn_gnb"
        aria-label="메뉴열기"
        @click="gnbOpen = !gnbOpen"
      >
        <i/>
      </button>
    </header>
    <main class="container">
      <slot />
    </main>
    <footer class="footer">
      &copy; db-study
    </footer>
  </section>
</template>

<script>
export default {
  name: 'UiPage',
  props: {
    title: { type: String, default: '페이지 타이틀' }
  },
  data() {
    return {
      gnbOpen: false
    }
  }
}
</script>
