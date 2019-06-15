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

    <section class="pb-24 pt-24 md:pt-32 xl:pt-40 md:flex md:items-center">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full">
          <div class="w-4/5 xl:w-4/5">
            <div class="pb-18 md:pb-28 xl:pb-52">
              <div class="overflow-hidden relative block flex">
                <div class="seperator-reveal relative block">
                  <seperator width="w-8" class="inline-block align-middle mr-2" />
                </div>
                <div class="overflow-hidden">
                  <span class="font-serif text-11 uppercase inline-block align-middle meta">iii</span>
                </div>
              </div>
            </div>

            <span class="overflow-hidden relative block mb-12 md:mb-16">
              <span class="content relative block">
                <h1 class="
                  leading-none tracking-titleSmall md:tracking-title
                  text-60 md:text-127 lg:text-138 xl:text-142 pb-3 md:pb-6
                  font-serif"
                >
                  Hive<br/>Analytics.
                </h1>
              </span>
            </span>

            <span class="overflow-hidden relative block mb-12 md:mb-20 lg:mb-24">
              <span class="content relative block">
                <p class="text-15 md:text-20 lg:text-22 xl:text-26">Paul Smith is one of Britain’s most iconic fashion brands, with stores located in cities all over the world. To help make their online e-commerce experience as slick as the physical, I’ve been working with their internal team to tackle key user experience challenges and establish and evolve their existing visual language. </p>
              </span>
            </span>

            <div class="overflow-hidden relative">
              <div class="flex flex-wrap mb-12 md:mb-20 lg:mb-24 content">
                <div class="w-1/2 md:w-1/3">
                  <h2 class="leading-none tracking-tight
                  text-16 md:text-19 lg:text-22 xl:text-28
                  font-serif font-medium mb-2 md:mb-4">
                    Services
                  </h2>

                  <ul class="text-12 md:text-15 lg:text-19 xl:text-24">
                    <li>+ Visual Design</li>
                    <li>+ Consultancy</li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/3 mb-8">
                  <h2 class="leading-none tracking-tight
                  text-16 md:text-19 lg:text-22 xl:text-28
                  font-serif font-medium mb-2 md:mb-4">
                    Years
                  </h2>

                  <p class="text-12 md:text-15 lg:text-19 xl:text-24">2017 — 2019</p>
                </div>
                <div class="w-1/2 md:w-1/3">
                  <h2 class="leading-none tracking-tight
                  text-16 md:text-19 lg:text-22 xl:text-28
                  font-serif font-medium mb-2 md:mb-4">
                    Link
                  </h2>

                  <a href="www.paulsmith.co.uk" rel="noopener" target="_blank" class="fancy-link text-12 md:text-15 lg:text-19 xl:text-24">www.paulsmith.co.uk</a>
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
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-perspective@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-perspective.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-home@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-home@2x.jpg" class="w-full"/>
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
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">Campaigns and Stories are central to the Paul Smith website – not only as routes to new product lines, but also as a means for people to explore wider context for the variety of collaborations that the company are involved in. As each story is different, I created a range of flexible, modular layouts that could be put together in various ways to serve the content.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-stories@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-stories.jpg" class="w-full"/>
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
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26 mb-10">One of the broader challenges that we tackled revolved around product filters, and how we could enhance the usability of this function to make searching through large categories a breeze. Our initial research found that the filter implementation was difficult to use, only allowed for one-by-one category selection and generally went against intuition.</p>

          <p class="text-15 md:text-20 lg:text-22 xl:text-26">To improve this, we introduced the ability to select multiple options across several categories without needing to refresh the page, along with a new visual approach, meaning people could filter everything they needed in one swift action.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full mb-8 md:mb-12 block">
            <source srcset="/images/paul-smith/ps-filters-a@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-filters-a.jpg" class="w-full"/>
          </picture>

          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-filters-b@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-filters-b.jpg" class="w-full"/>
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
        <div class="w-4/5">
          <p class="text-15 md:text-20 lg:text-22 xl:text-26">As part of unifying and introducing new visual elements, the team also asked me to create an icon pack for use across the website and email campaigns.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-icons@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-icons.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-18 md:pb-24 lg:pb-32 md:flex md:items-center">
    <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
      <div class="w-full">
        <div class="w-4/5">
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
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-modules@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-modules.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="bleed--all pb-16 md:pb-24 lg:pb-32">
    <div class="bg-grey-light">
      <div class="w-full md:w-4/5 xl:w-2/3 mx-auto">
        <div class="w-full md:w-4/6 xl:w-3/5 mx-auto py-0 md:py-12">
          <picture class="w-full">
            <source srcset="/images/paul-smith/ps-newsletter@2x.jpg"
                    media="(min-width: 768px)">
            <img src="/images/paul-smith/ps-newsletter@2x.jpg" class="w-full"/>
          </picture>
        </div>
      </div>
    </div>
  </div>

  <section class="pb-16 md:pb-20 lg:pb-28 md:flex md:items-center">
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
              pb-3 md:pb-4
              text-32 md:text-43 lg:text-52 xl:text-60 h-trim"
            to="/projects/mat-hayward">
              Mat Hayward
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <site-footer />
</div>
</template>

<script>
import { StaggerTo, Power4, TweenMax, TweenLite } from "gsap";

import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';
import Seperator from '~/components/Seperator.vue';

let tl = TweenMax;

if (process.client) {
  var html = document.documentElement;
  var body = document.body;

  var scroller = {
    target: document.querySelector("#scroll-container"),
    ease: 0.05, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  };

  var requestId = null;
}

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, rotation: -5, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, rotation: 5, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut }, -0.25);
      tl.staggerTo(document.querySelectorAll('.content'), 4, { y: 405, autoAlpha: 0, delay: 0.5, rotation: -20, force3D: true, ease: Power4.easeInOut, onComplete: done }, -0.2);
      tl.to(document.querySelectorAll('.meta'), 2, { y: 25, autoAlpha: 1, delay: 0.25, rotation: -5, force3D: true, ease: Power4.easeInOut });
      tl.to(document.querySelector('.seperator-reveal'), 2.65, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });
    },
  },
  components: {
    SiteHeader,
    SiteFooter,
    Seperator,
  },
  methods: {
    updateText (isVisible, entry, title) {
      document.querySelector('.sectionTitle-inner').innerText = title;
    },

    onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(this.updateScroller);
      }
    },

    onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(this.updateScroller);
      }
    },

    updateScroller() {  
      var resized = scroller.resizeRequest > 0;
        
      if (resized) {    
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }
          
      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }
      
      TweenLite.set(scroller.target, { 
        y: -scroller.y 
      });
      
      requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(this.updateScroller) : null;
    }
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT');
  },
  destroyed () {
    document.removeEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
  },
  mounted () {
    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true
    });

    this.updateScroller();

    document.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);

    document.querySelector('.sectionTitle-inner').innerText = 'Introduction';

    tl.set(document.querySelector('.mask'), { scaleY:0} );
    tl.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    tl.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );
    tl.set(document.querySelector('.seperator-reveal'), { scaleX:0 } );
    tl.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    tl.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });
    tl.set(document.querySelectorAll('.content'), { y: 275, autoAlpha: 1, rotation: -3 });
    tl.set(document.querySelectorAll('.meta'), { y: 20, autoAlpha: 1, rotation: -5 });

    tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 1, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 1, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 1.85, ease: Power4.easeInOut }, 0.3);
    tl.staggerTo(document.querySelectorAll('.content'), 4, { y: 0, autoAlpha: 1, delay: 0, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.25);

    tl.to(document.querySelector('.seperator-reveal'), 3.5, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });
    tl.to(document.querySelectorAll('.meta'), 3, { y: 0, autoAlpha: 1, delay: 0.4, rotation: 0, force3D: true, ease: Power4.easeInOut });
  }
}
</script>