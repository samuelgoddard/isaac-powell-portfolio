<template>
<div>
  <site-header />
  <div class="block fixed top-0 right-0 mt-40 lg:mt-56 mr-6 md:mr-10 lg:mr-12 z-10">
    <span class="relative block mb-12 md:mb-16">
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
                  <span class="font-serif text-11 uppercase inline-block align-middle meta">ii</span>
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
                  CPMG<br/>Architects.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">As one of Nottingham’s most established Architects, CPMG’s website did not best represent their core values or prestigious reputation. So I designed them a new one, with a user-centered approach and clean, minimal aesthetic that would really show off their work in full technicolour.</p>
              </span>
            </span>

            <div class="overflow-hidden relative">
              <div class="flex flex-wrap mb-2 md:mb-20 lg:mb-24 content">
                <div class="w-1/2 md:w-1/3">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Services
                  </h2>

                  <ul class="text-14 md:text-15 lg:text-19 xl:text-24">
                    <li>+ Visual Design</li>
                    <li>+ Art Direction</li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/3 mb-8">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Year
                  </h2>

                  <p class="text-14 md:text-15 lg:text-19 xl:text-24">2018</p>
                </div>
                <div class="w-1/2 md:w-1/3">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Link
                  </h2>

                  <a href="http://www.cpmg-architects.com" rel="noopener" target="_blank" class="fancy-link fancy-link--permanent text-14 md:text-15 lg:text-19 xl:text-24">www.cpmg-architects.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <div class="bleed--all pb-8 md:pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/cpmg/cpmg-header@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-header.jpg" alt="CPMG Header Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/cpmg/cpmg-home@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-home@2x.jpg" alt="CPMG Home Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'User Journeys')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full content">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">To start, I conducted a series of staff interviews — accross different seniority levels to establish balance — to get a feel for different perspectives, what they each saw as opportunities for improvement, and how we could better present the various facets of their work.</p>

          <p class="text-15 md:text-20 lg:text-22 xl:text-26">From there, outcomes were discussed, prioritised and streamlined, resulting in a series of sitemaps, user journeys and wireframes. These items would define the problems we were trying to solve, and outline the targets we would aim for.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/cpmg/cpmg-team@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-team.jpg" alt="CPMG Team Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Minimalism')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full content">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">Visually we had a blank slate, so plenty of creative freedom was afforded. Mindful that anything I presented needed to introduce new functionality, serve CPMG’s ethos, and would become a significant cornerstone of the brand identity going forwards, I let the photography do the talking, supported by bold typography, plenty of negative space and minimalist detail.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/cpmg/cpmg-nav@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-nav.jpg" alt="CPMG Nav Design" class="w-full"/>
          </picture>
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
              <source srcset="/images/cpmg/cpmg-mob-a@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/cpmg/cpmg-mob-a.jpg" alt="CPMG Mobile Design Version 1" class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/cpmg/cpmg-mob-b@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/cpmg/cpmg-mob-b.jpg" alt="CPMG Mobile Design Version 2" class="w-full"/>
            </picture>
            <picture class="w-1/3 px-6">
              <source srcset="/images/cpmg/cpmg-mob-c@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/cpmg/cpmg-mob-c.jpg" alt="CPMG Mobile Design Version 3" class="w-full"/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full mb-8 md:mb-12 block">
            <source srcset="/images/cpmg/cpmg-careers@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-careers.jpg" alt="CPMG Careers Design" class="w-full"/>
          </picture>

          <picture class="w-full">
            <source srcset="/images/cpmg/cpmg-project@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-project.jpg" alt="CPMG Project Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Structure')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full content">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">To develop the design aesthetic further, a series of subtle animation guidelines were created. This included specific on-load motion rules, generative scroll interactions and  image treatments when moused over and dragged.</p>

          <p class="text-15 md:text-20 lg:text-22 xl:text-26">As a result, we were able to enhance the presentation of the work without distracting  from the core purpose, as all good motion design should.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/cpmg/cpmg-wireframe@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/cpmg/cpmg-wireframe.jpg" alt="CPMG Wireframes" class="w-full"/>
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
                to="/projects/hive-inc">
                  Hive Inc
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
      title: 'IJP - CPMG Architects',
    }
  },
}
</script>
