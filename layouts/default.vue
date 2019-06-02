<template>
  <div id="scrollArea">
    <!-- <smooth-scrollbar> -->
    <div id="example-content">
      <div class="overflow-hidden min-h-screen flex flex-col">
        <div class="w-full flex-1 flex flex-col p-8 md:py-7 md:px-12 lg:py-10 lg:px-14 xl:py-11 xl:px-18">
          <div class="flex-1 flex flex-col">
            <div class="flex flex-col flex-1">
              <site-header />
              <nuxt />
              <site-footer />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </smooth-scrollbar> -->
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

import Logo from '~/components/Logo.vue';

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ui");

export default {
  components: {
    SiteHeader,
    SiteFooter,
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