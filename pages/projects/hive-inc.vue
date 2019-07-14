<template>
<div>
  <site-header />
  <div class="block fixed top-0 right-0 mt-40 lg:mt-56 mr-6 md:mr-10 lg:mr-12 z-10">
    <span class="overflow-hidden relative block mb-12 md:mb-16">
      <div class="content relative block sectionTitle">
        <span class="text-16 lg:text-18 xl:text-20 sectionTitle-inner">Introduction</span>
      </div>
    </span>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Introduction')">
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
                  Hive Inc.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">The Hive mobile app is an app concept to help users to test and optimise their site through a suite of built-in tools, like surveys, heatmaps, funnels and A/B tests. It’s intent is to be visually engaging in a way most apps of this type aren’t.</p>
              </span>
            </span>

            <div class="overflow-hidden relative">
              <div class="flex flex-wrap mb-2 md:mb-20 lg:mb-24 content -mx-5">
                <div class="w-1/2 md:w-1/3 px-5">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Services
                  </h2>

                  <ul class="text-14 md:text-15 lg:text-19 xl:text-24">
                    <li>+ Visual Design</li>
                    <li>+ UX</li>
                    <li>+ Prototyping</li>
                    <li>+ Art Direction</li>
                    <li>+ Identity</li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/3 px-5 mb-8">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Year
                  </h2>

                  <p class="text-14 md:text-15 lg:text-19 xl:text-24">2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <div class="bleed--all pb-18 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/hive/hive-perspective@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/hive/hive-perspective.jpg" alt="Hive Perspective Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Interface')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full content">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">the interface builds upon brand and interface elements already present on the website, ensuring a cohesive design language across devices. Naturally, the app contains a number of native design patterns and animations, all of which follow device specific guidelines for usability.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-12 ">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto px-12 py-18 md:py-24 overflow-hidden">
          <div class="flex flex-wrap -mx-6">
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-graph@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-graph.jpg" alt="Hive Graph Design" class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-uniques@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-uniques.jpg" alt="Hive Uniques Design" class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-bounce@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-bounce.jpg" alt="Hive Bounce Design" class="w-full"/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto px-12 py-18 md:py-24 overflow-hidden">
          <div class="flex flex-wrap -mx-6">
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-loading@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-loading.jpg" alt="Hive Loading Design"  class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-login@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-login.jpg" alt="Hive Login Design"  class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-notifications@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-notifications.jpg" alt="Hive Notifications Design"  class="w-full"/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-12 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto px-12 py-18 md:py-24 overflow-hidden">
          <div class="flex flex-wrap -mx-6">
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-nav@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-nav.jpg" alt="Hive Nav Design" class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-settings@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-settings.jpg" alt="Hive Settings Design" class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/hive/hive-funnels@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/hive/hive-funnels.jpg" alt="Hive Funnels Design" class="w-full"/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'User Flow')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full content">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">Since it’s easy to find usability suffering when presenting lots of different types of data, user flows and interaction maps were considered in conjunction with the visual design, ensuring a simple and predictable flow through the app.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full mb-8 md:mb-12 block">
            <source srcset="/images/hive/hive-proto@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/hive/hive-proto.jpg" alt="Hive Prototype"  class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <span class="overflow-hidden relative block mb-12 md:mb-16">
    <span class="content relative block">
      <section class="pb-16 md:pb-20 xl:pb-28 md:flex md:items-center relative z-10">
        <div class="w-full mx-auto">
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
                  fancy-link--permanent
                  pb-3 md:pb-4
                  text-32 md:text-43 lg:text-52 xl:text-60 h-trim"
                to="/projects/mat-hayward">
                  Mat Hayward
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
import ProjectBase from '~/pages/projects/base.vue';

export default {
  extends: ProjectBase,
  head () {
    return {
      title: 'IJP - Hive Inc',
    }
  },
}
</script>