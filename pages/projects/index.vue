<template>
<div class="flex flex-col flex-1">
  <site-header />
  <section class="flex-1 flex items-center justify-center">
    <div class="flex flex-wrap w-full">
      <div class="w-full md:w-1/2">
        <div class="hidden md:flex md:flex-wrap items-center justify-center h-full">
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
      <div class="w-full md:ml-auto md:flex-1 overflow-hidden">
        <parallax-container class="overflow-hidden">
        <parallax-element :parallaxStrength="15" :type="'depth'">
        <nav class="w-full overflow-y-auto overflow-x-hidden max-h-128 block hide-scrollbars md:p-8" @mouseover="isHovering = true" @mouseout="isHovering = false">
          <ul>
            <li
              v-for="(project, index) in projects"
              :key="project.name"
              ref="numbers"
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
                      flex flex-wrap items-center lg:items-end
                      leading-none tracking-tight
                      font-serif
                      text-white
                      py-3 lg:py-4
                      text-32 md:text-43 lg:text-48 xl:text-52 h-trim
                      transition"
                    :class="[{ 'opacity-25' : isHovering }, { 'opacity-100' :project.id == selected }]"
                    :to="project.uri">
                    <span class="font-serif text-8 uppercase w-6 lg:mb-4">{{ project.id }}</span>
                      <span :class="project.id">{{ project.name }}</span>
                    <span class="w-full text-6 lg:w-auto lg:text-7 ml-6 lg:ml-3 lg:mb-1 mt-2 lg:mt-0 tracking-widest uppercase block">{{ project.date }} / {{ project.meta }}</span>
                  </nuxt-link>
                </span>
              </span>
            </li>
          </ul>
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
import baffle from "baffle";

import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      TweenMax.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, rotation: -5, force3D: true, ease: Power4.easeInOut }, -0.17);
      TweenMax.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, rotation: 5, force3D: true, ease: Power4.easeInOut }, -0.17);

      TweenMax.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut }, -0.25);

      TweenMax.staggerTo(document.querySelectorAll('.nav-reveal'), 2.5, { y: 200, autoAlpha: 0, delay: 0.5, rotation: -20, force3D: true, ease: Power4.easeInOut }, -0.15);

      TweenMax.to(document.querySelector('.project-image-cover'), 1.5, { y: 400, autoAlpha: 0, rotation: -12, delay: 1, force3D: true, ease: Power4.easeInOut});

      TweenMax.to(document.querySelectorAll('.swipe-reveal'), 2.5, { scaleY: 0, transformOrigin:"center bottom", delay: 1.65, force3D: true, ease: Power4.easeInOut, onComplete: done });
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
        uri: '/projects/example',
        date: '2018',
        meta: 'Fashion House',
        image: '/images/paul-smith.jpg',
        width: 400,
        height: 240,
        current: false
      },{
        name: 'CPMG',
        id: 'ii',
        uri: '/projects/example',
        date: '2017',
        meta: 'Architecture Studio',
        image: '/images/cpmg.jpg',
        width: 260,
        height: 320,
        current: false
      },{
        name: 'Hive Analytics',
        id: 'iii',
        uri: '/projects/example',
        date: '2017',
        meta: 'Data App',
        image: '/images/hive.jpg',
        width: 350,
        height: 300,
        current: false
      },{
        name: 'Yale',
        id: 'iv',
        uri: '/projects/example',
        date: '2017',
        meta: 'Home Security',
        image: '/images/yale.jpg',
        width: 410,
        height: 250,
        current: false
      },{
        name: 'Misc',
        id: 'v',
        uri: '/projects/misc',
        date: '2016',
        meta: 'Personal',
        image: '/images/misc.jpg',
        width: 260,
        height: 320,
        current: false
      }]
    }
  },
  methods : {
    projectImageUpdate (id, index, imageUrl, width, height) {
      this.selected = id;

      // TweenMax.set(this.$refs.projectimage, { css: { backgroundImage:`url(${ imageUrl })` }});
      TweenMax.to('.project-image-cover', 0.35, {
        ease: Power4.easeOut,
        force3D: true,
        autoAlpha: 1,
        width: this.$mq == '2xl' ? width * 1.3 : width * 1.1,
        height: this.$mq == '2xl' ? height * 1.3 : height  * 1.1});

      // THIS IS FIRST
      TweenMax.to('.project-image', 0.35, { ease: Power4.easeOut, autoAlpha: 0 });
      // Need to do somethig with indx here....
      let current = '.project-image-' + id;
      console.log(current);
      TweenMax.to(current, 0.35, { ease: Power4.easeOut, autoAlpha: 1 });
    },
    projectImageReset () {
      // TweenMax.to(this.$refs.projectimageCover, 0.66, { ease: Power4.easeOut, autoAlpha: 0 });
      TweenMax.to('.project-image', 0.35, { ease: Power4.easeOut, autoAlpha: 0 });
    },
    startBaffle (id, name) {
      this.selected = id

      const b = baffle('.' + id).start();
      b.start()
      .set({ speed: 150 })
      .text(text => name)
      .reveal(750);
    },
  },
  mounted () {
    TweenMax.set(document.querySelector('.project-image-cover'), {  rotation: 0 });
    // TweenMax.set(document.querySelector('.swipe-reveal'), { y: window.innerHeight });
    TweenMax.set(document.querySelector('.mask'), { scaleY:0} );
    TweenMax.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    TweenMax.set(document.querySelectorAll('.nav-reveal'), { y: 200, autoAlpha: 0, rotation: -20 });
    TweenMax.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );

    TweenMax.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    TweenMax.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });

    TweenMax.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 1.25, force3D: true, ease: Power4.easeInOut }, 0.15);
    TweenMax.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 1.25, force3D: true, ease: Power4.easeInOut }, 0.15);


    TweenMax.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 1.85, ease: Power4.easeInOut }, 0.3);

    TweenMax.staggerTo(document.querySelectorAll('.nav-reveal'), 3, { y: 0, autoAlpha: 1, delay: 0.75, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.15);

    TweenMax.to(document.querySelectorAll('.swipe-reveal'), 2.5, { scaleY: 1, transformOrigin:"center bottom", delay: 0, ease: Power4.easeInOut });
  },
}
</script>
