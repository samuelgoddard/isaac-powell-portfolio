<template>
  <div class="
    h-full min-h-screen
    flex flex-col
    p-8 md:p-12 lg:p-20 xl:p-24 2xl:p-32"
  >
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteFooter
  }
}
</script>