<template>
<div>
  <site-header />
  <div class="block fixed top-0 right-0 mt-40 lg:mt-56 mr-6 md:mr-14 lg:mr-18 z-10 sectionTitle opacity-0" ref="sectionTitle">
    <span class="text-22">Introduction</span>
  </div>
  <div v-waypoint="{ active: true, callback: onWayPointIntro, options: intersectionOptions }">
    <span class="block"></span>
  </div>
    <section class="pb-24 pt-24 md:pt-32 xl:pt-40 md:flex md:items-center">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full">
          <div class="w-4/5 xl:w-4/5">
            <div class="pb-18 md:pb-28 xl:pb-52">
              <div class="overflow-hidden relative block">
                <div class="seperator-reveal relative block opacity-0">
                  <seperator width="w-8" class="inline-block align-middle mr-2" />
                  <span class="font-serif text-11 uppercase inline-block align-middle">iii</span>
                </div>
              </div>
            </div>

            <span class="overflow-hidden relative block mb-12 md:mb-16">
              <span class="project-title relative block opacity-0">
                <h1 class="
                  leading-none tracking-titleSmall md:tracking-title
                  text-60 md:text-127 lg:text-138 xl:text-142 pb-3 md:pb-6
                  font-serif"
                >
                  Hive<br/>Analytics.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="project-title relative block opacty-0">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">Paul Smith is one of Britain’s most iconic fashion brands, with stores located in cities all over the world. To help make their online e-commerce experience as slick as the physical, I’ve been working with their internal team to tackle key user experience challenges and establish and evolve their existing visual language. </p>
              </span>
            </span>

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

                <a href="www.paulsmith.co.uk" rel="noopener" target="_blank" class="fancy-link text-12 md:text-15 lg:text-19 xl:text-24">www.paulsmith.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  

  <div class="bleed--all pb-8 md:pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-perspective@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-perspective.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
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

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
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

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
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

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
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

  <div class="bleed--all pb-8 md:pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-modules@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-modules.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-newsletter@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-newsletter@2x.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-16 md:pb-20 lg:pb-28 md:flex md:items-center">
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
              fancy-link
              pb-3 md:pb-4
              text-32 md:text-43 lg:text-52 xl:text-60 h-trim"
            to="/projects/mat-hayward">
              Mat Hayward
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <site-footer />
</div>
</template>

<script>
import { StaggerTo, Power4, TweenMax } from "gsap";
import baffle from "baffle";

import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

import Seperator from '~/components/Seperator.vue';

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      TweenMax.staggerTo('.project-title', 1.5, { css: { top: 120, autoAlpha: 0, rotation: -2 }, ease: Power4.easeOut, onComplete: done }, -0.1);
      TweenMax.to(".sectionTitle", 1.5, { css: { autoAlpha: 0 }, ease: Power4.easeOut });

      TweenMax.to(document.querySelectorAll('.seperator-reveal'), 3, { css: { left: -75, autoAlpha: 0 }, ease: Power4.easeOut });

      TweenMax.staggerTo(document.querySelectorAll('.top-mask'), 1.5, { css: { top: -100, autoAlpha: 0, rotation: 0 }, delay: 0, ease: Power4.easeInOut }, -0.15);
      TweenMax.staggerTo(document.querySelectorAll('.bottom-mask'), 1.5, { css: { top: 100, autoAlpha: 0, rotation: 0 }, delay: 0, ease: Power4.easeInOut }, -0.15);

      TweenMax.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { css: { left: -100, autoAlpha: 1 }, delay: 0, ease: Power4.easeInOut }, 0.2);
    },
  },
  components: {
    SiteHeader,
    SiteFooter,
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

    TweenMax.set(document.querySelector('.mask'), { scaleY:0} );
    TweenMax.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );

    TweenMax.staggerTo('.project-title', 1.5, { css: { top: 0, autoAlpha: 1, rotation: 0 }, delay: 0.75, ease: Power4.easeOut }, 0.1);

    TweenMax.staggerTo(document.querySelectorAll('.top-mask'), 1.5, { css: { top: 0, autoAlpha: 1, rotation: 0 }, delay: 0.8, ease: Power4.easeInOut }, 0.075);
    TweenMax.staggerTo(document.querySelectorAll('.bottom-mask'), 1.5, { css: { top: 0, autoAlpha: 1, rotation: 0 }, delay: 0.8, ease: Power4.easeInOut }, 0.075);

    TweenMax.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1, { css: { left: 0, autoAlpha: 1 }, delay: 0.8, ease: Power4.easeInOut }, 0.2);

    TweenMax.to(".seperator-reveal", 1.5, { css: { left: 0, autoAlpha: 1 }, delay: 0.75, ease: Power4.easeOut });
    TweenMax.to(".sectionTitle", 1.5, { css: { autoAlpha: 1 }, delay: 0.75, ease: Power4.easeOut });
  }
}
</script>