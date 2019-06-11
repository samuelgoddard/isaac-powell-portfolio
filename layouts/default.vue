<template>
  <div class="overflow-hidden min-h-screen flex flex-col">
  <div class="mask mask-light"></div>
  <div class="swipe-reveal"></div>
    <div class="w-full flex-1 flex flex-col p-8 md:py-7 md:px-12 lg:py-10 lg:px-14 xl:py-11 xl:px-18">
      <div class="flex-1 flex flex-col">
        <nuxt>ENABLE JS</nuxt>
      </div>
    </div>
  </div>
</template>

<script>
import { Power4, TweenMax } from "gsap";
import Logo from '~/components/Logo.vue';

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ui");

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapState(["dark"]),
    darkMode() {
      return this.dark;
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.dark ? 'dark transition-color' : 'light transition-color'
      }
    }
  },
}
</script>

<style>
  #scrollArea {
    height: 100vh;
  }
</style>
