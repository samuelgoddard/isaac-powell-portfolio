<template>
<div>
  <section class="pb-24 pt-18 md:pt-24 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
      <div class="w-full">
        <div class="w-4/5 xl:w-4/5">
          <div class="pb-18 md:pb-24 xl:pb-56">
            <seperator width="w-8" class="inline-block align-middle mr-2" />
            <span class="font-serif text-11 uppercase inline-block align-middle">iii</span>
          </div>
      
          <h1 class="
            leading-none tracking-tight
            text-60 md:text-127 lg:text-138 xl:text-142 2xl:text-226
            font-serif mb-12 md:mb-20"
          >
            Paul<br/>Smith
          </h1>

          <p class="mb-12 md:mb-20 lg:mb-24 text-15 md:text-20 lg:text-22 xl:text-26 2xl:text-36">The Hive mobile app is an app concept to help users to test and optimise their site through a suite of built-in tools, like surveys, heatmaps, funnels and A/B tests. It’s intent is to be visually engaging in a way most apps of this type aren’t.</p>

          <div class="flex flex-wrap mb-12 md:mb-20 lg:mb-24">
            <div class="w-1/2 md:w-1/3 mb-8">
              <h2 class="leading-none tracking-tight
              text-16 md:text-19 lg:text-22 xl:text-28 2xl:text-37
              font-serif font-medium mb-2 md:mb-4">
                Services
              </h2>

              <ul class="text-12 md:text-15 lg:text-19 xl:text-24 2xl:text-32"> 
                <li>Visual Design</li>
                <li>Consultancy</li>
              </ul>
            </div>
            <div class="w-1/2 md:w-1/3 mb-8">
              <h2 class="leading-none tracking-tight
              text-16 md:text-19 lg:text-22 xl:text-28 2xl:text-37
              font-serif font-medium mb-2 md:mb-4">
                Years
              </h2>

              <p class="text-12 md:text-15 lg:text-19 xl:text-24 2xl:text-32">2017 — Present</p>
            </div>
            <div class="w-1/2 md:w-1/3">
              <h2 class="leading-none tracking-tight
              text-16 md:text-19 lg:text-22 xl:text-28 2xl:text-37
              font-serif font-medium mb-2 md:mb-4">
                Link
              </h2>

              <a href="www.paulsmith.co.uk" rel="noopener" target="_blank" class="underline text-12 md:text-15 lg:text-19 xl:text-24 2xl:text-32">www.paulsmith.co.uk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-waypoint="{ active: true, callback: onWaypoint1, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer1">
      <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-12" ref="image1">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-perspective@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-perspective.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-24 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 2xl:text-36">Built entirely in Adobe XD, the interface builds upon brand and interface elements already present on the website, ensuring a cohesive design language across devices. Naturally, the app contains a number of native design patterns and animations, all of which follow device specific guidelines for usability.</p>
        </div>
      </div>
    </div>
  </section>
  
  <div v-waypoint="{ active: true, callback: onWaypoint2, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer2">
      <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-12" ref="image2">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-home@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-home@2x.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>
  
  <section class="pb-24 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 2xl:text-36">Whilst the site was an about-turn in terms of visual style, affording me plenty of creative freedom, I was still wary of over-complicating it. To combat this, I was mindful to align each page design to a specific user outcome (which were defined by our research workshops early in the process).</p>
        </div>
      </div>
    </div>
  </section>

  <div v-waypoint="{ active: true, callback: onWaypoint3, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer3">
      <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-12" ref="image3">
          <picture class="w-full">
            <source srcset="https://placedog.net/1200/600"
                    media="(min-width: 768px)">
            <img src="https://placedog.net/600/600" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div v-waypoint="{ active: true, callback: onWaypoint4, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer4">
      <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-12" ref="image4">
          <picture class="w-full">
            <source srcset="https://placedog.net/1200/600"
                    media="(min-width: 768px)">
            <img src="https://placedog.net/600/600" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class=" pb-24 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 mx-auto">
      <div class="w-full">
        <div class="w-full text-right">
          <span class="text-19 lg:text-30 xl:text-40 2xl:text-60 tracking-widest uppercase block text-grey">Next</span>
          <nuxt-link 
            class="
              inline-block 
              leading-none tracking-tight
              font-serif
              no-underline
              text-32 md:text-43 lg:text-52 xl:text-60 2xl:text-86 h-trim"
            to="/projects/example">
              Paul Smith
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { Power4, TweenMax } from "gsap";
import Seperator from '~/components/Seperator.vue';

export default {
  transition: 'fade',
  components: {
    Seperator,
  },
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.5, 0]
    }
  }),
  methods: {
    onWaypoint1 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer1, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer1, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    },
    onWaypoint2 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer2, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer2, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    },
    onWaypoint3 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer3, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer3, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    },
    onWaypoint4 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer4, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer4, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    }
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT')
  },
  mounted () {
    TweenMax.set(this.$refs.imageContainer1, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer2, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer3, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer4, { autoAlpha: 0 })
  }
}
</script>