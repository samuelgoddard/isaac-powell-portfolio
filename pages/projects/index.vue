<template>
<div class="flex flex-col flex-1">
  <site-header />
  <section class="flex-1 flex items-center justify-center">
    <div class="flex flex-wrap w-full">
      <div class="w-full md:w-1/2">
        <div class="hidden lg:flex md:flex-wrap items-center justify-center h-full">
          <div class="relative z-10 overflow-hidden">
            <div
              class="opacity-0 max-w-full relative project-image-cover"
              style="width: 400px; height: 260px;">

              <div
                v-for="(project, index) in projects"
                :key="project.name"
                class="absolute top-0 right-0 opacity-0 bottom-0 left-0 bg-cover bg-center project-image"
                :class="'project-image-' + project.id"
                :style="`background-image: url('${ project.image }')`">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-2xl md:flex-1 overflow-hidden">
        <parallax-container class="overflow-hidden">
        <parallax-element :parallaxStrength="10" :type="'depth'">
        <nav class="w-full overflow-y-auto overflow-x-hidden block md:p-2 lg:p-6" @mouseout="isHovering = false">
            <div
              v-for="(project, index) in projects"
              :key="project.name"
              class="flex flex-wrap items-center"
            >
              <span class="overflow-hidden relative block">
                <span class="nav-reveal relative block opacty-0">
                  <nuxt-link
                    @mouseover.native="projectImageUpdate(project.id, index, project.image, project.width, project.height)"
                    @focus.native="projectImageUpdate(project.id, index, project.image, project.width, project.height)"
                    @mouseout.native="projectImageReset()"
                    ref="opaque"
                    class="
                      flex flex-wrap items-end
                      leading-none tracking-tight
                      font-serif
                      text-white
                      py-3 xs:py-4 lg:py-6
                      text-28 xs:text-32 md:text-38 lg:text-47 xl:text-52 h-trim
                      transition"
                    :class="[{ 'opacity-25' : isHovering }, { 'opacity-100' :project.id == selected }]"
                    :to="project.uri">
                    <span class="font-sans text-8 uppercase w-8 mb-1 tracking-wide">{{ project.id }}</span>
                    <span :class="project.id">{{ project.name }}</span>
                    <span class="w-full text-8 lg:w-auto ml-8 lg:ml-3 lg:mb-0 mt-2 tracking-wide leading-snug font-sans uppercase block">{{ project.meta }}</span>
                  </nuxt-link>
                </span>
              </span>
            </div>
        </nav>
        </parallax-element>
        </parallax-container>
      </div>
    </div>
  </section>
  <site-footer />
</div>
</template>

<script>
import { StaggerTo, Power4, TweenMax } from "gsap";

import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

let tl = TweenMax;

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, delay: 0, rotation: -5, force3D: true, ease: Power4.easeInOut, onComplete: done }, -0.17);
      tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, delay: 0, rotation: 5, force3D: true, ease: Power4.easeInOut }, -0.17);

      tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut }, -0.25);

      tl.staggerTo(document.querySelectorAll('.nav-reveal'), 2.5, { y: 200, autoAlpha: 0, delay: -0.5, rotation: -20, force3D: true, ease: Power4.easeInOut, }, -0.15);

      tl.to(document.querySelector('.project-image-cover'), 2, { y: 0, autoAlpha: 0, rotation: 0, delay: -0.25, force3D: true, ease: Power4.easeInOut});

      tl.to(document.querySelectorAll('.fancy-link'), 0.5, { css: { backgroundSize: '0% 100%' }, ease: Power4.easeInOut });

      tl.to(document.querySelectorAll('.swipe-reveal'), 2.1, { scaleY: 0, transformOrigin:"center bottom", delay: 1.1, force3D: true, ease: Power4.easeInOut });
    },
  },
  components: {
    SiteHeader,
    SiteFooter,
  },
  created () {
    this.$store.commit('ui/TOGGLE_DARK')
  },
  data () {
    return {
      media: this.$mq,
      isHovering: false,
      selected: undefined,
      projects: [{
        name: 'Paul Smith',
        id: 'i',
        uri: '/projects/paul-smith',
        date: '2018',
        meta: 'Fashion House',
        image: '/images/nav/ps-hover@2x.jpg',
        width: 350,
        height: 235,
        current: false
      },{
        name: 'PRB Architects',
        id: 'ii',
        uri: '/projects/prb-architects',
        date: '2017',
        meta: 'Architects',
        image: '/images/nav/prb-hover@2x.jpg',
        width: 400,
        height: 235,
        current: false
      },{
        name: 'Mat Hayward',
        id: 'iii',
        uri: '/projects/mat-hayward',
        date: '2017',
        meta: 'Photographer',
        image: '/images/nav/mat-hover@2x.jpg',
        width: 280,
        height: 360,
        current: false
      },{
        name: 'CPMG',
        id: 'iv',
        uri: '/projects/cpmg-architects',
        date: '2017',
        meta: 'Architects',
        image: '/images/nav/cpmg-case@2x.jpg',
        width: 350,
        height: 235,
        current: false
      },{
        name: 'Archives',
        id: 'v',
        uri: '/projects/archives',
        date: '2016',
        meta: 'Personal',
        image: '/images/nav/misc-hover@2x.jpg',
        width: 350,
        height: 300,
        current: false
      }]
    }
  },
  head () {
    return {
      title: 'IJP - Project List',
    }
  },
  methods : {
    projectImageUpdate (id, index, imageUrl, width, height) {
      this.selected = id;
      this.isHovering = true;

      tl.to('.project-image-cover', 0, {
        ease: Power4.easeOut,
        force3D: true,
        autoAlpha: 1,
        width: this.$mq == '2xl' ? width * 1.3 : width * 1.1,
        height: this.$mq == '2xl' ? height * 1.3 : height  * 1.1});

      tl.to('.project-image', 0.1, { ease: Power4.easeOut, autoAlpha: 0 });
      let current = '.project-image-' + id;
      tl.to(current, 0.05, { ease: Power4.easeOut, autoAlpha: 1 });
    },
    projectImageReset () {
      // tl.to(this.$refs.projectimageCover, 0.66, { ease: Power4.easeOut, autoAlpha: 0 });
      tl.to('.project-image', 0.1, { ease: Power4.easeOut, autoAlpha: 0 });
    },
  },
  mounted () {
    tl.set(document.querySelector('.project-image-cover'), {  rotation: 0 });
    // tl.set(document.querySelector('.swipe-reveal'), { y: window.innerHeight });
    tl.set(document.querySelector('.mask'), { scaleY:0} );
    tl.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    tl.set(document.querySelectorAll('.nav-reveal'), { y: 200, autoAlpha: 0, rotation: -20 });
    tl.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );

    tl.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    tl.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });

    tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 0.6, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 0.6, force3D: true, ease: Power4.easeInOut }, 0.15);

    tl.to(document.querySelectorAll('.fancy-link.current'), 2.75, { css: { backgroundSize: '100% 100%' }, delay: 1, ease: Power4.easeInOut });

    tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 1.25, ease: Power4.easeInOut }, 0.3);

    tl.staggerTo(document.querySelectorAll('.nav-reveal'), 3, { y: 0, autoAlpha: 1, delay: 0.25, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.15);

    tl.to(document.querySelectorAll('.swipe-reveal'), 2.5, { scaleY: 1, transformOrigin:"center bottom", delay: 0, ease: Power4.easeInOut });
  },
}
</script>
