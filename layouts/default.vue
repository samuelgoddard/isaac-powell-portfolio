<template>
  <div>
    <!-- <mq-layout mq="md+">
    <parallax-container class="overflow-hidden h-screen">
      <parallax-element :parallaxStrength="5" :type="'depth'" class="overflow-hidden min-h-full flex flex-col">
        <div class="w-full min-h-full max-h-full flex-1 flex flex-col md:fixed top-0 left-0 right-0 bottom-0 overflow-hidden p-8 md:p-12 lg:p-20 xl:p-24 2xl:p-32">

            <div class="flex-1 flex flex-col global-container">
              <div class="flex flex-col flex-1 md:hide-scrollbars md:overflow-y-auto">
                <site-header />
                <nuxt />
                <site-footer />
              </div>
            </div>
        </div>
      </parallax-element>
    </parallax-container>
    </mq-layout> -->

    <!-- <mq-layout mq="sm"> -->
      <div class="overflow-hidden min-h-screen flex flex-col">
        <div class="w-full flex-1 flex flex-col p-8 md:p-12 lg:p-20 xl:p-24 2xl:p-32">
          <div class="flex-1 flex flex-col">
            <div class="flex flex-col flex-1">
              <site-header />
              <nuxt />
              <site-footer />
            </div>
          </div>
        </div>
      </div>
    <!-- </mq-layout> -->
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ui");

export default {
  components: {
    SiteHeader,
    SiteFooter,
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