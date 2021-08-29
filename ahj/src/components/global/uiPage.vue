!<template>
  <section class="page">
    <header class="header">
      <h1>{{ title }}</h1>
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
  }
}
</script>
