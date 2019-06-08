<template>
  <header class="relative z-10 overflow-hidden">
    <div class="">
      <div class="flex items-center">
        
        <div class="md:flex-1">
          <div class="flex items-center">
            <div>
              <div class="md:hidden">
                <div class="relative z-10 overflow-hidden">
                  <div class="top-mask relative opacity-0">
                    <logo />
                  </div>
                </div>
              </div>
              <div class="hidden md:inline-block">
                <div class="relative z-10 overflow-hidden">
                  <div class="top-mask relative opacity-0">
                    <Logo />
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:inline-block mx-auto" @mouseover="startBaffle" @mouseleave="unBaffle">
              <div class="relative z-10 overflow-hidden">
                <div class="top-mask relative opacity-0">
                  <span class="ml-auto leading-snug tracking-tight font-serif time">Nottingham, England</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="hidden md:block ml-auto mr-auto">
          <div class="relative z-10 overflow-hidden">
            <span class="seperator-reveal-staggered block relative">
              <seperator width="w-8" />
            </span>
          </div>
        </div>
        <div class="flex-1 ml-auto text-right">
          <div class="relative z-10 overflow-hidden">
            <div class="top-mask relative opacity-0">
              <nuxt-link 
                v-for="(page, index) in pages"
                class="
                  fancy-link
                  inline-block
                  mx-4 lg:mx-8 
                  text-16 lg:text-18 xl:text-20"
                :key="page.name"
                :to="page.uri">
                  {{ page.name }}
              </nuxt-link>
              <a class="
                  inline-block
                  fancy-link
                  mx-4 lg:mx-8 mr-0
                  text-16 lg:text-18 xl:text-20"
                href="mailto:isaac@40000ft.co.uk">
                  Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Power4, TweenMax } from "gsap";

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
      animationRun: false,
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
  },
}
</script>