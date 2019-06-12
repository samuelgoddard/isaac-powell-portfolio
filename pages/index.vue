<template>
<div class="flex flex-col flex-1">
  <site-header />
  <section class="flex-1 flex items-center justify-center relative">
    <div class="hidden md:block w-20 mr-auto">
      <span class="seperator-reveal block relative">
        <seperator width="w-20" class="hidden md:block mr-auto" />
      </span>
    </div>
    <div class="w-full md:w-4/5 md:mr-auto md:-ml-20 relative">
      <div class="relative flex items-center justify-center max-w-6xl mx-auto">

        <div class="z-0 absolute top-0 bottom-0 right-0 bg-cover bg-center image-box opacity-0">
        </div>

        <img src="/images/portfolio-loop.gif" alt="Portfolio" class="z-50 opacity-0 left-0 fixed image-box-carousel" />
        <div ref="heading" class="home-heading">
          <parallax-container class="overflow-hidden">
            <parallax-element :parallaxStrength="20" :type="'depth'">
                <h1 class="
                  relative z-10
                  leading-snug tracking-tight
                  text-16 xs:text-20 md:text-31 lg:text-32 xl:text-42
                  font-serif
                  text-center
                  py-16 md:p-8 lg:p-24"
                >
                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-1 block relative">
                      <span class="opaque">I’m Isaac, a freelance designer from</span>
                    </span>
                  </span>

                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-2 block relative">
                      <span class="opaque">Nottingham, UK.</span>
                      <span class="work">
                        <mq-layout mq="md+" class="inline-block">
                          <nuxt-link v-on:mouseover.native="hover" v-on:mousemove.native="mouseMove" v-on:mouseout.native="mouseOut" to="/projects" class="underline">See my work</nuxt-link>
                        </mq-layout>
                        <mq-layout mq="sm" class="inline-block">
                          <nuxt-link to="/projects" class="underline">See my work</nuxt-link>
                        </mq-layout>
                      </span><span class="opaque">, or</span>
                    </span>
                  </span>

                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-3 block relative">
                      <a v-on:mouseover="hoverLine" v-on:mouseout="mouseOutLine" href="mailto:isaac@40000ft.co.uk" class="underline line">drop me a line</a><span class="opaque"> if you want to work</span>
                    </span>
                  </span>

                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-4 block relative">
                      <span class="opaque">with me on your next project.</span>
                    </span>
                  </span>
                </h1>
            </parallax-element>
          </parallax-container>
        </div>
      </div>
    </div>
  </section>
  <site-footer />
</div>
</template>

<script>
import { Power2, Power4, TweenMax } from "gsap";
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';
import Seperator from '~/components/Seperator.vue';

let t = TweenMax;

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      t.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, rotation: -5, force3D: true, ease: Power4.easeInOut }, -0.17);
      t.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, rotation: 5, force3D: true, ease: Power4.easeInOut }, -0.17);

      t.to(document.querySelector('.seperator-reveal'), 2.65, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });
      t.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut }, -0.25);

      t.to(document.querySelectorAll('.image-box'), 1.5, { scale: 0.8, autoAlpha:0, delay: 0.5, force3D: true, ease: Power4.easeInOut });

      t.to(document.querySelector('.image-box-carousel'), 1.5, { y: 250, autoAlpha: 0, delay: 0.5, rotation: -20, force3D: true, ease: Power4.easeInOut });

      t.staggerTo(document.querySelectorAll('.headline-reveal'), 3.5, { y: 200, autoAlpha: 0, delay: 0.5, rotation: -20, force3D: true, ease: Power4.easeInOut, onComplete: done }, -0.15);
    },
  },
  components: {
    Seperator,
    SiteHeader,
    SiteFooter,
  },
  data() {
    return {
      showImages: false,
      image: "/images/isaac.jpg"
    }
  },
  methods : {
    hover : function(e) {
      t.to('.image-box-carousel', 0, { css: { autoAlpha: 1, left: e.pageX + 30, top: e.pageY + 30, display: 'block' } })
      t.to('.opaque', 0.3, { css: { autoAlpha:0.15 } })
      t.to('.line', 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseMove : function(e) {
      t.to('.image-box-carousel', 0, { css: { left: e.pageX + 30, top: e.pageY + 30, display: 'block' } })
    },
    mouseOut : function() {
      t.to('.opaque', 0.3, { css: { autoAlpha: 1 } })
      t.to('.line', 0.3, { css: { autoAlpha: 1 } })
      t.to('.image-box-carousel', 0, { css: { scale: 1, autoAlpha: 0 } })
    },
    hoverLine : function() {
      t.to('.opaque', 0.3, { css: { autoAlpha:0.15 } })
      t.to('.work', 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseOutLine : function() {
      t.to('.opaque', 0.3, { css: { autoAlpha: 1 } })
      t.to('.work', 0.3, { css: { autoAlpha:1 } })
    }
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT')
  },
  mounted () {
    t.set(document.querySelector('.image-box-carousel'), { width: 320, css: { left: 0, bottom: 0, display: 'none' } });
    t.set(document.querySelector('.image-box'), { width: 230, height: 320, css: { autoAlpha: 0, backgroundImage:`url(${ this.image })` } });
    t.set(document.querySelectorAll('.headline-reveal'), { y: 200, autoAlpha: 0, rotation: -20 });
    t.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    t.set(document.querySelector('.mask'), { scaleY:0 } );
    t.set(document.querySelector('.seperator-reveal'), { scaleX:0 } );
    t.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );

    t.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    t.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });

    t.to(document.querySelector('.image-box'), 4, { scale: 1, autoAlpha:1,  delay: 0.05, ease: Power4.easeInOut });

    t.to(document.querySelector('.seperator-reveal'), 3.5, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });

    t.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 0.85, force3D: true, ease: Power4.easeInOut }, 0.17);
    t.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: 0.85, force3D: true, ease: Power4.easeInOut }, 0.17);
    t.staggerTo(document.querySelectorAll('.headline-reveal'), 2.85, { y: 0, autoAlpha: 1, delay: 0.4, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.15);
    t.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: 1, ease: Power4.easeInOut }, 0.3);
  }
}
</script>
