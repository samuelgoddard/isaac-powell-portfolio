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
                  Mat<br/>Hayward.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">Mat Hayward is a photographer with a love for the outdoors. To showcase his collections from Canada to Scotland, I created a site that would highlight not only his incredible shots, but also the story behind them.</p>
              </span>
            </span>

            <div class="overflow-hidden relative">
              <div class="flex flex-wrap mb-2 md:mb-20 lg:mb-24 content">
                <div class="w-1/2 md:w-1/3">
                  <h2 class="leading-none tracking-tight
                  text-18 md:text-19 lg:text-22 xl:text-28
                  font-serif font-medium mt-4 md:mt-0 mb-2 md:mb-4">
                    Services
                  </h2>

                  <ul class="text-14 md:text-15 lg:text-19 xl:text-24">
                    <li>+ Visual Design</li>
                    <li>+ Art Direction</li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/3 mb-8">
                  <h2 class="leading-none tracking-tight
                  text-18 md:text-19 lg:text-22 xl:text-28
                  font-serif font-medium mt-4 md:mt-0 mb-2 md:mb-4">
                    Year
                  </h2>

                  <p class="text-14 md:text-15 lg:text-19 xl:text-24">2019</p>
                </div>

                <div class="w-1/2 md:w-1/3">
                  <h2 class="leading-none tracking-tight
                  text-18 md:text-19 lg:text-22 xl:text-28
                  font-serif font-medium mt-4 md:mt-0 mb-2 md:mb-4">
                    Link
                  </h2>

                  <a href="www.mathayward.com" rel="noopener" target="_blank" class="fancy-link fancy-link--permanent text-14 md:text-15 lg:text-19 xl:text-24">www.mathayward.com</a>
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
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto py-0 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/mat-hayward/mat-bio@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/mat-hayward/mat-bio.jpg" alt="Mat Hayward Bio Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto py-0 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/mat-hayward/mat-nav@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/mat-hayward/mat-nav.jpg" alt="Mat Hayward Nav Design"  class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-18 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto py-0 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/mat-hayward/mat-location@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/mat-hayward/mat-location.jpg" alt="Mat Hayward Location Design"  class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Interface')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">Built entirely in Adobe XD, the interface builds upon brand and interface elements already present on the website, ensuring a cohesive design language across devices. Naturally, the app contains a number of native design patterns and animations, all of which follow device specific guidelines for usability.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto py-0 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/mat-hayward/mat-journal@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/mat-hayward/mat-journal.jpg" alt="Mat Hayward Journal Design"  class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-18 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-4/6 mx-auto px-12 py-18 md:py-24 overflow-hidden">
          <div class="flex flex-wrap -mx-6 lg:-mx-18">
            <picture class="w-1/2 px-6 lg:px-18">
              <source srcset="/images/mat-hayward/mat-mobile-a@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/mat-hayward/mat-mobile-a.jpg" alt="Mat Hayward Mobile Design"  class="w-full"/>
            </picture>
            <picture class="w-1/2 px-6 lg:px-18">
              <source srcset="/images/mat-hayward/mat-mobile-b@2x.jpg"
                      media="(min-width: 768px)">
              <img src="/images/mat-hayward/mat-mobile-b.jpg" alt="Mat Hayward Mobile Design Version 2"  class="w-full"/>
            </picture>
          </div>
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
                  pb-3 md:pb-4
                  text-32 md:text-43 lg:text-52 xl:text-60 h-trim"
                to="/projects/misc">
                  Misc
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
      title: 'IJP - Mat Hayward',
    }
  },
}
</script>