!<template>
  <section class="page">
    <header class="header">
      <button
        v-if="!gnbOpen"
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
    <aside
      :class="{active: gnbOpen}"
      class="gnb_wrap">
      <nav>
        <ul>
          <li><router-link to="/hello/HelloWorld">helloWorld</router-link></li>
          <li><router-link to="/page/index">index</router-link></li>
          <li><router-link to="/page/form">form</router-link></li>
        </ul>
      </nav>
    </aside>
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
