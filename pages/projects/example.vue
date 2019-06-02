<template>
<div>
  <div class="block fixed top-0 right-0 mt-40 lg:mt-56 mr-6 md:mr-14 lg:mr-18 z-10 sectionTitle" ref="sectionTitle">
    <span class="text-22">Introduction</span>
  </div>
  <div v-waypoint="{ active: true, callback: onWayPointIntro, options: intersectionOptions }">
    <span class="block"></span>
  </div>
    <section class="pb-24 pt-24 lg:pt-32 xl:pt-40 md:flex md:items-center">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full">
          <div class="w-4/5 xl:w-4/5">
            <div class="pb-18 md:pb-24 xl:pb-56">
              <seperator width="w-8" class="inline-block align-middle mr-2" />
              <span class="font-serif text-11 uppercase inline-block align-middle">iii</span>
            </div>
        
            <h1 class="
              leading-none tracking-tight
              text-60 md:text-127 lg:text-138 xl:text-142
              font-serif mb-12 md:mb-20"
            >
              Paul<br/>Smith
            </h1>

            <p class="mb-12 md:mb-20 lg:mb-24 text-15 md:text-20 lg:text-22 xl:text-26">Paul Smith is one of Britain’s most iconic fashion brands, with stores located in cities all over the world. To help make their online e-commerce experience as slick as the physical, I’ve been working with their internal team to tackle key user experience challenges and establish and evolve their existing visual language. </p>

            <div class="flex flex-wrap mb-12 md:mb-20 lg:mb-24">
              <div class="w-1/2 md:w-1/3">
                <h2 class="leading-none tracking-tight
                text-16 md:text-19 lg:text-22 xl:text-28
                font-serif font-medium mb-2 md:mb-4">
                  Services
                </h2>

                <ul class="text-12 md:text-15 lg:text-19 xl:text-24"> 
                  <li>Visual Design</li>
                  <li>Consultancy</li>
                </ul>
              </div>
              <div class="w-1/2 md:w-1/3 mb-8">
                <h2 class="leading-none tracking-tight
                text-16 md:text-19 lg:text-22 xl:text-28
                font-serif font-medium mb-2 md:mb-4">
                  Years
                </h2>

                <p class="text-12 md:text-15 lg:text-19 xl:text-24">2017 — 2019</p>
              </div>
              <div class="w-1/2 md:w-1/3">
                <h2 class="leading-none tracking-tight
                text-16 md:text-19 lg:text-22 xl:text-28
                font-serif font-medium mb-2 md:mb-4">
                  Link
                </h2>

                <a href="www.paulsmith.co.uk" rel="noopener" target="_blank" class="underline text-12 md:text-15 lg:text-19 xl:text-24">www.paulsmith.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  

  <div v-waypoint="{ active: true, callback: onWaypoint1, options: intersectionOptions }" class="bleed--all pb-8 md:pb-12">
    <div class="bg-grey-light" ref="imageContainer1">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image1">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-perspective@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-perspective.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>
  
  <div v-waypoint="{ active: true, callback: onWaypoint2, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer2">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image2">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-home@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-home@2x.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div v-waypoint="{ active: true, callback: onWayPointCampaigns, options: intersectionOptions }">
    <span class="block"></span>
  </div>
  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">Campaigns and Stories are central to the Paul Smith website – not only as routes to new product lines, but also as a means for people to explore wider context for the variety of collaborations that the company are involved in. As each story is different, I created a range of flexible, modular layouts that could be put together in various ways to serve the content.</p>
        </div>
      </div>
    </div>
  </section>

  <div v-waypoint="{ active: true, callback: onWaypoint3, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer3">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image3">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-stories@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-stories.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>
  
  <div v-waypoint="{ active: true, callback: onWayPointChallenges, options: intersectionOptions }">
    <span class="block"></span>
  </div>
  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">One of the broader challenges that we tackled revolved around product filters, and how we could enhance the usability of this function to make searching through large categories a breeze. Our initial research found that the filter implementation was difficult to use, only allowed for one-by-one category selection and generally went against intuition.</p>

          <p class="text-15 md:text-20 lg:text-22 xl:text-26">To improve this, we introduced the ability to select multiple options across several categories without needing to refresh the page, along with a new visual approach, meaning people could filter everything they needed in one swift action.</p>
        </div>
      </div>
    </div>
  </section>

  <div v-waypoint="{ active: true, callback: onWaypoint4, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer4">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image4">
          <picture class="w-full mb-8 md:mb-12 block">
            <source srcset="/images/paul-smith/ps-filters-a@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-filters-a.jpg" class="w-full"/>
          </picture>

          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-filters-b@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-filters-b.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div v-waypoint="{ active: true, callback: onWayPointUnifying, options: intersectionOptions }">
    <span class="block"></span>
  </div>
  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">As part of unifying and introducing new visual elements, the team also asked me to create an icon pack for use across the website and email campaigns.</p>
        </div>
      </div>
    </div>
  </section>

  <div v-waypoint="{ active: true, callback: onWaypoint5, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer5">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image5">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-icons@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-icons.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div v-waypoint="{ active: true, callback: onWayPointEvolution, options: intersectionOptions }">
    <span class="block"></span>
  </div>
  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">There’s more exciting improvements and developments in the pipeline, many of which I can’t show right now, but here’s some additional interface elements which I’ve created with the team as part of the ongoing evolution of the visual language. </p>
        </div>
      </div>
    </div>
  </section>

  <div v-waypoint="{ active: true, callback: onWaypoint6, options: intersectionOptions }" class="bleed--all pb-8 md:pb-12">
    <div class="bg-grey-light" ref="imageContainer6">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image6">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-modules@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-modules.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div v-waypoint="{ active: true, callback: onWaypoint7, options: intersectionOptions }" class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light" ref="imageContainer7">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12" ref="image7">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-newsletter@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-newsletter@2x.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-full text-right">
          <span class="text-19 lg:text-30 xl:text-40 tracking-widest uppercase block text-grey">Next</span>
          <nuxt-link 
            class="
              inline-block 
              leading-none tracking-tight
              font-serif
              no-underline
              text-32 md:text-43 lg:text-52 xl:text-60 h-trim"
            to="/projects/example">
              Mat Hayward
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { Power4, TweenMax } from "gsap";
import baffle from "baffle";

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
      threshold: [0, 1]
    }
  }),
  methods: {
    onWayPointIntro ({ going, direction, index, title }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startBaffle('Introduction');
      }
    },
    onWayPointCampaigns ({ going, direction, index, title }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startBaffle('Campaigns');
      }
    },
    onWayPointChallenges ({ going, direction, index, title }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startBaffle('Challenges');
      }
    },
    onWayPointUnifying ({ going, direction, index, title }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startBaffle('Unifying');
      }
    },
    onWayPointEvolution ({ going, direction, index, title }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startBaffle('Evolution');
      }
    },
    onWaypoint1 ({ going, direction, index, title }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer1, 1.75, { autoAlpha: 1, ease: Power4.easeOut });
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
    },
    onWaypoint5 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer5, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer5, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    },
    onWaypoint6 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer6, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer6, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    },
    onWaypoint7 ({ going, direction, index }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenMax.to(this.$refs.imageContainer7, 1.75, { autoAlpha: 1, ease: Power4.easeOut })
      }
      
      if (going === this.$waypointMap.GOING_OUT) {
        TweenMax.to(this.$refs.imageContainer7, 1.75, { autoAlpha: 0, ease: Power4.easeOut })
      }
    },
    startBaffle (title) {
      const b = baffle('.sectionTitle').start();

      b.start()
      .set({ speed: 150 })
      .text(text => title)
      .reveal(300);
    },
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT')
  },
  mounted () {
    this.startBaffle('Introduction');
    TweenMax.set(this.$refs.imageContainer1, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer2, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer3, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer4, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer5, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer6, { autoAlpha: 0 })
    TweenMax.set(this.$refs.imageContainer7, { autoAlpha: 0 })
  }
}
</script>