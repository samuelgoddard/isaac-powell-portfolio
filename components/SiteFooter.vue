<template>
  <footer class="relative z-10 w-full">
    <div class="flex flex-wrap items-end">
      <div class="w-full md:flex-1 mb-4 md:mb-0">
        <div class="pr-12">
          <div class="relative z-10 overflow-hidden">
            <div class="bottom-mask relative opacity-0">
              <span class="text-7 md:text-8 lg:text-9 xl:text-11 2xl:text-14 tracking-widest uppercase block mb-px">Things I do</span>
              <p class="text-15 md:text-14 lg:text-base xl:text-20 2xl:text-26">Interactive Design, Visual Identity, Design Consultancy</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:block ml-auto mr-auto">
        <div class="relative z-10 overflow-hidden">
          <span class="seperator-reveal-staggered block relative">
            <seperator width="w-5" />
          </span>
        </div>
      </div>

      <div class="w-full md:flex-1 md:ml-auto md:text-right">
        <div class="relative z-10 overflow-hidden">
          <div class="bottom-mask relative opacity-0">
            <a 
              v-for="(social, index) in socials"
              class="
                inline-block
                underline
                mx-4 
                text-15 md:text-14 lg:text-base xl:text-20 2xl:text-26"
              :class="[{'md:mr-0': index === socials.length - 1}, {'ml-0 md:ml-3' : index === socials.length - socials.length }]"
              :key="social.name"
              :href="social.uri"
              target="_blank"
              rel="noopener">
                {{ social.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Seperator from '~/components/Seperator.vue';
import { Power4, TweenMax } from "gsap";

export default {
  components: {
    Seperator,
  },
  data () {
    return {
      socials: [{
        name: 'Twitter',
        uri: 'https://twitter.com/BavidDyrne'
      },{
        name: 'Dribbble',
        uri: 'https://dribbble.com/IsaacPowell'
      }, {
        name: 'Instagram',
        uri: 'https://www.instagram.com/ijpowell/'
      }]
    }
  }
}
</script>