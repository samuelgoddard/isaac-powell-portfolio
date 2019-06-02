<template>
  <header class="relative z-10 flex items-center">
    <div class="md:flex-1">
      <div class="md:hidden">
        <logo />
      </div>
      <div class="hidden md:block fixed top-0 left-0 mt-6 lg:mt-8 ml-12 z-10">
        <Logo />
      </div>
      <div class="hidden md:inline-block w-48 ml-24 lg:ml-26 align-end" @mouseover="startBaffle" @mouseleave="unBaffle">
          <span class="ml-auto leading-snug tracking-tight font-serif time">Nottingham, England</span>
      </div>
    </div>
    <div class="hidden md:block ml-auto mr-auto">
      <seperator width="w-8" />
    </div>
    <div class="flex-1 ml-auto text-right">
      <nuxt-link 
        v-for="(page, index) in pages"
        class="
          inline-block
          mx-2 md:mx-4 
          text-15 md:text-14 lg:text-base xl:text-20 2xl:text-26"
        :key="page.name"
        :to="page.uri">
          {{ page.name }}
      </nuxt-link>
      <a class="
          inline-block
          mx-2 md:mx-4 mr-0
          text-15 md:text-14 lg:text-base xl:text-20 2xl:text-26"
        href="mailto:isaac@40000ft.co.uk">
          Contact
      </a>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Seperator from '~/components/Seperator.vue';

import baffle from "baffle";
import moment from 'moment';


export default {
  components: {
    Logo,
    Seperator,
  },
  data () {
    return {
      currentTime: null,
      pages: [{
        name: 'Bio',
        uri: '/'
      },{
        name: 'Projects',
        uri: '/projects'
      }]
    }
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format('LTS');
    },
    startBaffle () {
      const b = baffle('.time').start();

      b.start()
      .set({ speed: 150 })
      .text(text => this.currentTime)
      .reveal(500);
    },
    unBaffle () {
      const b = baffle('.time').start();

      b.start()
      .set({ speed: 150 })
      .text(text => 'Nottingham, England')
      .reveal(500);
    },
  },
  created() {
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
}
</script>