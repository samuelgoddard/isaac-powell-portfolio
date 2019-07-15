<template>
<div>
  <site-header />
    <div class="block fixed top-0 right-0 mt-40 lg:mt-56 mr-6 md:mr-10 lg:mr-12 z-10">
      <span class="relative block mb-12 md:mb-16">
        <div class="content relative block sectionTitle hidden">
          <span class="text-16 lg:text-18 xl:text-20 sectionTitle-inner"></span>
        </div>
      </span>
    </div>
    <section class="pb-24 pt-60 md:pt-32 lg:pt-40 xl:pt-90 md:flex md:items-center">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full">
          <div class="w-4/5 md:w-8/12 xl:w-7/12">
            <div class="pb-18 md:pb-28 xl:pb-52">
              <div class="overflow-hidden relative block flex">
                <div class="seperator-reveal relative block">
                  <seperator width="w-8" class="inline-block align-middle mr-2" />
                </div>
                <div class="overflow-hidden">
                  <span class="font-serif text-11 uppercase inline-block align-middle meta">iv</span>
                </div>
              </div>
            </div>

            <span class="overflow-hidden relative block mb-12 md:mb-16">
              <span class="content relative block">
                <h1 class="
                  leading-none tracking-titleSmall md:tracking-title
                  text-60 md:text-127 lg:text-138 xl:text-226 pb-3 md:pb-6
                  font-serif"
                >
                  Archives.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">One fun thing about being a designer is having the opportunity to create lots of stuff, even if some of it ends up going unused, or even consigned to the virtual scrapheap never to be seen again. Here’s a collection of past client work, concepts and experiments I’ve done over the years.</p>
              </span>
            </span>

            <div class="overflow-hidden relative">
              <div class="flex flex-wrap mb-12 md:mb-20 lg:mb-24 content">
                <div class="w-1/2 md:w-1/3 mb-10">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Years
                  </h2>

                  <p class="text-14 md:text-15 lg:text-19 xl:text-24">2016-2019</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>



    <div class="pb-18 md:pb-24 lg:pb-32">
      <div class="bleed--all" :class="index == projects.length - 1 ? 'pb-0 md:pb-0' : 'pb-8 md:pb-12'" v-for="(project, index) in projects" :key="project.id">
        <div class="bg-grey-light">
          <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
            <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
              <picture class="w-full">
                <source :srcset="project.image + '@2x.jpg'"
                            media="(min-width: 768px)">
                    <img :src="project.image + '.jpg'" :alt="project.name" class="w-full"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="overflow-hidden relative block mb-12 md:mb-16">
      <span class="content relative block">
        <section class="pb-16 md:pb-20 xl:pb-28 md:flex md:items-center relative z-10">
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
                    fancy-link--permanent
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
let tl = TweenMax;
import ProjectBase from '~/pages/projects/base.vue';

export default {
  extends: ProjectBase,
  data () {
    return {
      projects: [{
        name: '98',
        id: 'i',
        image: '/images/archives/archive-98'
      },{
        name: 'HutHut',
        id: 'ii',
        image: '/images/archives/archive-huthut'
      },{
        name: 'HutHut Hero',
        id: 'iii',
        image: '/images/archives/archive-huthut-hero'
      },{
        name: 'Wiretap',
        id: 'iv',
        image: '/images/archives/archive-wiretap-I'
      },{
        name: 'Wiretap II',
        id: 'v',
        image: '/images/archives/archive-wiretap-II'
      },{
        name: 'Sweet',
        id: 'vi',
        image: '/images/archives/archive-sweet'
      },{
        name: 'Allure',
        id: 'vii',
        image: '/images/archives/archive-allure'
      },{
        name: 'Lost Future',
        id: 'viii',
        image: '/images/archives/archive-lost-future'
      },{
        name: 'Whisk',
        id: 'ix',
        image: '/images/archives/archive-whisk'
      }]
    }
  },
  head () {
    return {
      title: 'IJP - Archives',
    }
  },
}
</script>
