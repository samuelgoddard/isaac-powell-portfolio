<template class="max-h-screen">
  <div class="overflow-hidden flex flex-col outer-container min-h-screen" id="outer-container">
    <div class="mask mask-light"></div>
    <div class="swipe-reveal"></div>
    <div class="w-full flex-1 flex flex-col p-8 md:py-7 md:px-12 lg:py-10 lg:pb-12 lg:px-14 xl:py-12 xl:px-18">
      <div class="flex-1 flex flex-col">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
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
        class: this.dark ? 'dark no-js' : 'light no-js'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$mq === 'sm') {
        document.getElementById("outer-container").style.minHeight = window.innerHeight + 'px';  
      } else {
        document.getElementById("outer-container").style.minHeight = window.innerHeight + 'auto';  
      }
    })
    document.body.className = document.body.className.replace("no-js","");
  }
}
</script>