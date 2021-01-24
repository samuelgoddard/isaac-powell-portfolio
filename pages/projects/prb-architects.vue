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
                  PRB Architects.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">One of Nottingham’s fastest-rising Architectural practices, PRB combines a love of heritage with modern sensibilities. I worked with them to create a confident brand &amp; web direction that captured their design-led ethos, exploring form, space and function.</p>
              </span>
            </span>

            <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Introduction')"></div>

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
                    <li>+ Art Direction</li>
                    <li>+ Brand</li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/3 px-5 mb-8">
                  <h2 class="
                  text-18
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Year
                  </h2>

                  <p class="text-14 md:text-15 lg:text-19 xl:text-24">2020-21</p>
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
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pt-8 sm:pt-10 md:pt-24 lg:pt-38 pb-8 sm:pb-10 md:pb-12 lg:pb-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-case@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-case.jpg" alt="PRB Case Study Design" class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/prb/prb-brand-logo@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-brand-logo.jpg" alt="PRB Brand Logo Design" class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pb-8 sm:pb-10 md:pb-24 lg:pb-38 pt-8 sm:pt-10 md:pt-12 lg:pt-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-studio-copy@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-studio-copy.jpg" alt="PRB Studio Copy Design" class="w-full"/>
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
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">Much of the art direction was informed by historical forms, with the typography — Founders Grotesk &amp; Sohne — forming the backbone. Nods to way-finding are present with the brand motif, with clean lines acting as go-betweens for the various content structures.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-18 md:pb-24 lg:pb-32 ">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pt-8 sm:pt-10 md:pt-24 lg:pt-38 pb-8 sm:pb-10 md:pb-20 lg:pb-24">
          <picture class="w-full">
            <source srcset="/images/prb/prb-nav@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-nav.jpg" alt="PRB Nav Design" class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pb-8 sm:pb-10 md:pb-24 lg:pb-38 pt-8 sm:pt-10 md:pt-12 lg:pt-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-brand-ethos@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-brand-ethos.jpg" alt="PRB Brand Ethos Design" class="w-full"/>
          </picture>
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
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">A set of print material was created as part of the brief, with beautiful debossed business cards—printed on GF Smith high GSM stock—a particular highlight. We wanted to create a certain level of tangible quality as a means of inferring the attention to detail found in their actual architectural works.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pt-8 sm:pt-10 md:pt-24 lg:pt-38 pb-8 sm:pb-10 md:pb-12 lg:pb-12">
          <picture class="w-full mb-8 md:mb-12 block">
            <source srcset="/images/prb/prb-studio-header@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-studio-header.jpg" alt="PRB Studio Design"  class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pb-8 sm:pb-10 md:pb-24 lg:pb-38 pt-8 sm:pt-10 md:pt-12 lg:pt-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-brand-letter@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-brand-letter.jpg" alt="PRB Brand Letter Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full content">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">The aesthetic as a whole uses just a handful of colours, type treatments and shapes. By doing this, we create a modular art direction with clarity and purpose.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-18 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pt-8 sm:pt-10 md:pt-24 lg:pt-38 pb-8 sm:pb-10 md:pb-12 lg:pb-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-home@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-home.jpg" alt="PRB Home Design" class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/prb/prb-brand-slip@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-brand-slip.jpg" alt="PRB Brand Slip Design" class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pb-8 sm:pb-10 md:pb-24 lg:pb-38 pt-8 sm:pt-10 md:pt-12 lg:pt-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-case-detail@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-case-detail.jpg" alt="PRB Case Detail Design" class="w-full"/>
          </picture>
        </div>
      </div>

      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto pb-8 sm:pb-10 md:pb-24 lg:pb-38 pt-8 sm:pt-10 md:pt-12 lg:pt-12">
          <picture class="w-full">
            <source srcset="/images/prb/prb-index@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/prb/prb-index.jpg" alt="PRB Index Design" class="w-full"/>
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
