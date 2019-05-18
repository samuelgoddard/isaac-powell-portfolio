<template>
  <section class="flex-1 flex items-center justify-center">
    <div class="w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
      <h1 class="
        leading-snug tracking-tight
        text-21 md:text-31 lg:text-32 xl:text-42 2xl:text-52
        font-serif
        text-center"
      >
        Projects
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'fade',
  created () {
    this.$store.commit('ui/TOGGLE_DARK')
  },
}
</script>