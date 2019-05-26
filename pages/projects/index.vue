<template>
  <section class="flex-1 flex items-center justify-center">
    <div class="flex flex-wrap w-full">
      <div class="w-full md:w-1/2">
        <div class="hidden md:flex md:flex-wrap items-center justify-center h-full">
          <div 
            ref="projectimage" 
            class="bg-cover bg-center opacity-0 max-w-full"
            style="width: 300px; height: 200px; background-image: url('/images/paul-smith.jpg')"
          >
          </div>
        </div>
      </div>
      <div class="w-full md:ml-auto md:w-1/2 overflow-hidden">
        <parallax-container class="overflow-hidden">
        <parallax-element :parallaxStrength="15" :type="'depth'">
        <nav class="w-full overflow-y-auto overflow-x-hidden max-h-128 block hide-scrollbars md:p-8 opacity-0 scale-85" ref="menu" @mouseover="isHovering = true" @mouseout="isHovering = false">
          <ul>
            <li 
              v-for="(project, index) in projects"
              :key="project.name"
              ref="numbers"
              class="flex flex-wrap items-center"
            >
              <nuxt-link
                @mouseover.native="projectImageUpdate(project.id, project.image, project.width, project.height)"
                @focus.native="projectImageUpdate(project.id, project.image, project.width, project.height)"
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
            </li>
          </ul>
        </nav>
        </parallax-element>
        </parallax-container>
      </div>
    </div>
  </section>
</template>

<script>
import { Power2, TweenMax } from "gsap";
import baffle from "baffle";

export default {
  transition: 'fade',
  created () {
    this.$store.commit('ui/TOGGLE_DARK')
  },
  data () {
    return {
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
        height: 260,
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
    projectImageUpdate (id, imageUrl, width, height) {
      this.selected = id;

      TweenMax.set(this.$refs.projectimage, { css: { backgroundImage:`url(${ imageUrl })` }});
      TweenMax.to(this.$refs.projectimage, 0.33, { ease: Power2.easeOut, scale: 1, autoAlpha: 1, width: width, height: height });
    },
    projectImageReset () {
      this.selected = undefined;

      TweenMax.to(this.$refs.projectimage, 0.33, { ease: Power2.easeOut, scale: 0.95, autoAlpha: 0 });
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
    TweenMax.to(this.$refs.menu, 0.3, { css: { scale: 1, autoAlpha:1 }, delay: 0.25 })
    TweenMax.set(this.$refs.projectimage, { scale: 0.95 });
  }
}
</script>