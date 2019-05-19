<template>
  <section class="flex-1 flex items-center justify-center">
      <div class="flex flex-wrap w-full">
        <div class="w-full md:ml-auto md:w-1/2 overflow-hidden">
          <parallax-container class="overflow-hidden">
          <parallax-element :parallaxStrength="15" :type="'depth'">
          <nav class="w-full overflow-y-auto overflow-x-hidden max-h-64 lg:max-h-90 xl:max-h-128 block hide-scrollbars md:p-8 opacity-0 scale-85" ref="menu" @mouseover="isHovering = true" @mouseout="isHovering = false">
            <ul>
              <li 
                v-for="(project, index) in projects"
                :key="project.name"
                ref="numbers"
                class="mb-8 lg:mb-12 flex flex-wrap items-center"
              >
                <nuxt-link
                  @mouseover.native="selected = project.id"
                  @mouseout.native="selected = undefined"
                  ref="opaque"
                  class="
                    flex flex-wrap items-center lg:items-end
                    leading-none tracking-tight
                    font-serif
                    text-white
                    mb-2 lg:mb-0
                    text-32 md:text-43 lg:text-48 xl:text-52 h-trim
                    transition"
                  :class="[{'opacity-25' : isHovering}, { 'opacity-100' :project.id == selected}]"
                  :to="project.uri">
                  <span class="font-serif text-8 uppercase w-6 lg:mb-4">{{ project.id }}</span>
                    {{ project.name }}
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
import { TweenMax } from 'gsap';

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
        current: false
      },{
        name: 'CPMG',
        id: 'ii',
        uri: '/projects/example',
        date: '2017',
        meta: 'Architecture Studio',
        current: false
      },{
        name: 'Hive Analytics',
        id: 'iii',
        uri: '/projects/example',
        date: '2017',
        meta: 'Data App',
        current: false
      },{
        name: 'Yale',
        id: 'iv',
        uri: '/projects/example',
        date: '2017',
        meta: 'Home Security',
        current: false
      },{
        name: 'Misc',
        id: 'v',
        uri: '/projects/misc',
        date: '2016',
        meta: 'Personal',
        current: false
      }]
    }
  },
  methods : {
  },
  mounted () {
    TweenMax.to(this.$refs.menu, 0.3, { css: { scale: 1, autoAlpha:1 }, delay: 0.25 })
  }
}
</script>