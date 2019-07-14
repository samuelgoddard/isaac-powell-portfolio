<template>
  <header class="relative z-10">
    <div class="">
      <div class="flex items-center">
        
        <div class="md:flex-1">
          <div class="flex items-center">
            <div>
              <!-- <div class="md:hidden">
                <div class="relative z-10 overflow-hidden">
                  <div class="top-mask relative">
                    <logo />
                  </div>
                </div>
              </div> -->
              <!-- <div class="hidden md:inline-block"> -->
                <div class="">
                  <div class="h-12 w-12 fixed z-50 top-0 mt-6 md:mt-4 lg:mt-8">
                    <div class="top-mask relative">
                      <Logo />
                    </div>
                  </div>
                </div>
              </div>
            <!-- </div> -->
            <div class="hidden md:inline-block mx-auto">
              <div class="relative z-10 overflow-hidden">
                <div class="top-mask relative h-6 overflow-hidden" @mouseover="showTime" @mouseleave="hideTime">
                  <div class="time cursor-text">
                    <span class="ml-auto leading-snug tracking-tight font-serif block text-center time-1 text-15 md:text-14 lg:text-base xl:text-20">Nottingham, England</span>
                    <span class="ml-auto leading-snug tracking-tight font-serif block text-center time-2 text-15 md:text-14 lg:text-base xl:text-20 pt-3 lg:pt-2 xl:pt-0">{{ currentTime }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden md:block ml-auto mr-auto">
          <div class="relative z-10 overflow-hidden">
            <span class="seperator-reveal-staggered block relative">
              <seperator width="w-8 xl:w-20" />
            </span>
          </div>
        </div>
        <div class="flex-1 ml-auto text-right">
          <nuxt-link 
            v-for="(page, index) in pages"
            class="
              fancy-link
              inline-block
              mx-4 lg:mx-8 
              text-16 lg:text-18 xl:text-20"
            :key="page.name"
            :to="page.uri">
            <div class="relative z-10 overflow-hidden">
              <div class="top-mask relative">
              {{ page.name }}
              </div>
            </div>
          </nuxt-link>
          <div class="relative z-10 overflow-hidden inline-block
                  mx-1 md:mx-4 lg:mx-8 mr-0 lg:mr-0
                  text-16 lg:text-18 xl:text-20">
            <div class="top-mask relative">
              <a class="fancy-link"
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
    showTime () {
      TweenMax.to(document.querySelector('.time'), 0.5, { y: -30 });
      TweenMax.to(document.querySelector('.time-1'), 0.5, { autoAlpha: 0, rotation: -5 });
      TweenMax.to(document.querySelector('.time-2'), 0.5, { autoAlpha: 1, rotation: 0 });
    },
    hideTime () {
      TweenMax.to(document.querySelector('.time'), 0.5, { y: 0 });
      TweenMax.to(document.querySelector('.time-1'), 0.5, { autoAlpha: 1, rotation: 0 });
      TweenMax.to(document.querySelector('.time-2'), 0.5, { autoAlpha: 0, rotation: -5 });
    },
  },
  mounted() {
    TweenMax.set(document.querySelectorAll('.time-1'), { autoAlpha: 1, rotation: 0 });
    TweenMax.set(document.querySelectorAll('.time-2'), { autoAlpha: 0, rotation: -10 });
    TweenMax.set(document.querySelectorAll('.fancy-link.current'), { css: { backgroundSize: '0% 100%' }});
  },
  created() {
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
}
</script>