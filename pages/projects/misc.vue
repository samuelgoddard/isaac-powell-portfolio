<template>
<div>
  <site-header />
  <section class="pb-24 pt-24 md:pt-32 xl:pt-40 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5 xl:w-4/5">
          <div class="pb-18 md:pb-28 xl:pb-52">
            <div class="overflow-hidden relative block flex">
              <div class="seperator-reveal relative block">
                <seperator width="w-8" class="inline-block align-middle mr-2" />
              </div>
              <div class="overflow-hidden">
                <span class="font-serif text-11 uppercase inline-block align-middle meta">v</span>
              </div>
            </div>
          </div>

          <span class="overflow-hidden relative block mb-12 md:mb-16">
            <span class="content relative block">
              <h1 class="
                leading-none tracking-titleSmall md:tracking-title
                text-60 md:text-127 lg:text-138 xl:text-142 pb-3 md:pb-6
                font-serif"
              >
                Misc.
              </h1>
            </span>
          </span>

          <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
            <span class="content relative block">
              <p class="text-15 md:text-20 lg:text-22 xl:text-26">One fun thing about being a designer is having the opportunity to create lots of stuff, even if some of it ends up going unused, or even consigned to the virtual scrapheap never to be seen again. Here’s a collection of past client work, concepts and experiments I’ve done over the years.</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>

  <div class="flex flex-wrap pb-16 md:pb-24 lg:pb-32">
    <div class="w-full md:w-4/5 mx-auto">
      <div class="flex flex-wrap">
        <span class="overflow-hidden relative block w-1/2 relative z-10" v-for="project in projects" :key="project.id">
          <span class="content-image relative block bg-grey-black border-4 border-grey-dark">
            <div class="p-6 lg:p-12">
              <picture>
                <source :srcset="project.image + '@2x.jpg'"
                        media="(min-width: 768px)">
                <img :src="project.image + '.jpg'" class="w-full"/>
              </picture>
            </div>
          </span>
        </span>
      </div>
    </div>
  </div>

  <span class="overflow-hidden relative block mb-12 md:mb-16">
    <span class="content relative block">
      <section class="pb-16 md:pb-20 lg:pb-28 md:flex md:items-center relative z-10">
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
                to="/projects/paul-smith">
                  Paul Smith
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </span>
  </span>
  <site-footer />
</div>
</template>


<script>
import { StaggerTo, Power4, TweenMax, TweenLite } from "gsap";

import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';
import Seperator from '~/components/Seperator.vue';

let tl = TweenMax;

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, rotation: -5, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, rotation: 5, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut }, -0.25);
      tl.staggerTo(document.querySelectorAll('.content'), 4, { y: 405, autoAlpha: 0, delay: 0.5, rotation: -20, force3D: true, ease: Power4.easeInOut, onComplete: done }, -0.2);

      tl.staggerTo(document.querySelectorAll('.content-image'), 4, { y: 500, autoAlpha: 0, delay: 0.5, rotation: -20, force3D: true, ease: Power4.easeInOut, onComplete: done }, -0.2);

      tl.to(document.querySelector('.seperator-reveal'), 2.65, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });

      tl.to(document.querySelectorAll('.swipe-reveal'), 2.5, { scaleY: 0, transformOrigin:"center bottom", delay: 1.65, force3D: true, ease: Power4.easeInOut, onComplete: done });
    },
  },
  components: {
    SiteHeader,
    SiteFooter,
    Seperator,
  },
  data () {
    return {
      projects: [{
        name: 'Whisk',
        id: 'i',
        image: '/images/misc/archive-whisk'
      },{
        name: 'Plato',
        id: 'ii',
        image: '/images/misc/archive-plato'
      },{
        name: 'Sweet',
        id: 'iii',
        image: '/images/misc/archive-sweet'
      },{
        name: 'Allure',
        id: 'iv',
        image: '/images/misc/archive-allure'
      },{
        name: 'Lost Future',
        id: 'v',
        image: '/images/misc/archive-lost-future'
      },{
        name: 'Nick Cave',
        id: 'vi',
        image: '/images/misc/archive-nick-cave'
      },{
        name: 'Bat Country',
        id: 'vii',
        image: '/images/misc/archive-bat-country'
      },{
        name: 'Originals',
        id: 'viii',
        image: '/images/misc/archive-originals'
      }]
    }
  },
  created () {
    this.$store.commit('ui/TOGGLE_DARK');
  },
  mounted () {
    tl.set(document.querySelector('.mask'), { scaleY:0} );
    tl.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    tl.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );
    tl.set(document.querySelector('.seperator-reveal'), { scaleX:0 } );
    tl.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    tl.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });
    tl.set(document.querySelectorAll('.content'), { y: 275, autoAlpha: 1, rotation: -3 });
    tl.set(document.querySelectorAll('.content-image'), { y: 500, autoAlpha: 1, rotation: -3 });

    tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 1, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 1, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 1.85, ease: Power4.easeInOut }, 0.3);
    tl.staggerTo(document.querySelectorAll('.content'), 4, { y: 0, autoAlpha: 1, delay: 0, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.25);

    tl.staggerTo(document.querySelectorAll('.content-image'), 4, { y: 0, autoAlpha: 1, delay: 0, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.25);

    tl.to(document.querySelector('.seperator-reveal'), 3.5, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });

    tl.to(document.querySelectorAll('.swipe-reveal'), 2.5, { scaleY: 1, transformOrigin:"center bottom", delay: 0, ease: Power4.easeInOut });
  }
}
</script>