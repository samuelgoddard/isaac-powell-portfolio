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
                  <span class="font-serif text-11 uppercase inline-block align-middle meta">i</span>
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
                  Paul<br/>Smith.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">Paul Smith is one of Britain’s most iconic fashion brands, with stores located in cities all over the world. To help make their online e-commerce experience as slick as the physical, I’ve been working with their internal team to tackle key user experience challenges and establish and evolve their existing visual language. </p>
              </span>
            </span>

            <div class="overflow-hidden relative">
              <div class="flex flex-wrap mb-2 md:mb-20 lg:mb-24 content">
                <div class="w-1/2 md:w-1/3">
                  <h2 class="
                  text-20
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Services
                  </h2>

                  <ul class="text-14 md:text-15 lg:text-19 xl:text-24">
                    <li>+ Visual Design</li>
                    <li>+ Consultancy</li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/3 mb-8">
                  <h2 class="
                  text-20
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Years
                  </h2>

                  <p class="text-14 md:text-15 lg:text-19 xl:text-24">2017 — 2019</p>
                </div>
                <div class="w-1/2 md:w-1/3">
                  <h2 class="
                  text-20
                  font-sans font-bold mt-4 md:mt-0 mb-2 md:mb-4">
                    Link
                  </h2>

                  <a href="http://www.paulsmith.co.uk" rel="noopener" target="_blank" class="fancy-link fancy-link--permanent text-14 md:text-15 lg:text-19 xl:text-24">www.paulsmith.co.uk</a>
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
            <source srcset="/images/paul-smith/ps-perspective@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-perspective.jpg" alt="Paul Smith Perspective Design" class="w-full"/>
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
            <source srcset="/images/paul-smith/ps-home@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-home@2x.jpg" alt="Paul Smith Home Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Campaigns')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">Campaigns and Stories are central to the Paul Smith website – not only as routes to new product lines, but also as a means for people to explore wider context for the variety of collaborations that the company are involved in. As each story is different, I created a range of flexible, modular layouts that could be put together in various ways to serve the content.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-stories@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-stories.jpg" alt="Paul Smith Stories Design" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Challenges')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">One of the broader challenges that we tackled revolved around product filters, and how we could enhance the usability of this function to make searching through large categories a breeze. Our initial research found that the filter implementation was difficult to use, only allowed for one-by-one category selection and generally went against intuition.</p>

          <p class="text-15 md:text-20 lg:text-22 xl:text-26">To improve this, we introduced the ability to select multiple options across several categories without needing to refresh the page, along with a new visual approach, meaning people could filter everything they needed in one swift action.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full mb-8 md:mb-12 block">
            <source srcset="/images/paul-smith/ps-filters-a@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-filters-a.jpg" alt="Paul Smith Filters Design" class="w-full"/>
          </picture>

          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-filters-b@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-filters-b.jpg" alt="Paul Smith Filters Design Version 2" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Unifying')">
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">As part of unifying and introducing new visual elements, the team also asked me to create an icon pack for use across the website and email campaigns.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-icons@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-icons.jpg" alt="Paul Smith Icons Design"  class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5 md:w-8/12 xl:w-7/12">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">There’s more exciting improvements and developments in the pipeline, many of which I can’t show right now, but here’s some additional interface elements which I’ve created with the team as part of the ongoing evolution of the visual language. </p>
        </div>
      </div>
    </div>
  </section>

  <div class="block" v-observe-visibility="(isVisible, entry) => updateText(isVisible, entry, 'Evolution')">
  </div>

  <div class="bleed--all pb-8 md:pb-12">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-5/6 md:w-5/6 xl:w-5/6 mx-auto py-8 sm:py-10 md:py-24 lg:py-38">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-modules@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-modules.jpg" alt="Paul Smith Modules Design"  class="w-full"/>
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
            <source srcset="/images/paul-smith/ps-newsletter@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-newsletter@2x.jpg" alt="Paul Smith Newsletters Design"  class="w-full"/>
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
                to="/projects/cpmg-architects">
                  CPMG Architects
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
      title: 'IJP - Paul Smith',
    }
  },
}
</script>