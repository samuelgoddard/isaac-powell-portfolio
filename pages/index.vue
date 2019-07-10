<template>
<div class="flex flex-col flex-1">
  <site-header />
  <section class="flex-1 flex items-center justify-center relative">
    <div class="hidden md:block w-20 mr-auto">
      <span class="seperator-reveal block relative">
        <seperator width="w-10 lg:w-20 xl:w-32" class="hidden md:block mr-auto" />
      </span>
    </div>
    <div class="w-full md:w-4/5 md:mr-auto md:-ml-20 relative">
      <div class="relative flex items-center justify-center max-w-6xl mx-auto">

        <div class="z-0 absolute top-0 bottom-0 right-0 bg-cover bg-center image-box opacity-0">
        </div>

        <img src="/images/portfolio-loop.gif" alt="Portfolio Work" class="z-50 opacity-0 left-0 fixed image-box-carousel" />
        <div ref="heading" class="home-heading">

          <parallax-container class="overflow-hidden">
            <parallax-element :parallaxStrength="10" :type="'depth'">
                <h1 class="
                  relative z-10
                  leading-snug tracking-tight leading
                  text-16 xs:text-19 md:text-31 lg:text-33 xl:text-42
                  font-serif
                  text-center
                  py-12 md:p-5 lg:p-24"
                >
                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-1 block relative">
                      <span class="opaque">I’m Isaac, a freelance designer from</span>
                    </span>
                  </span>

                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-2 block relative">
                      <span class="opaque">Nottingham, UK.</span>
                      <span class="work inline-block">
                        <mq-layout mq="md+" class="inline-block">
                          <nuxt-link v-on:mouseover.native="hover" v-on:mousemove.native="mouseMove" v-on:mouseout.native="mouseOut" to="/projects" class="fancy-link fancy-link--permanent">See some work</nuxt-link>
                        </mq-layout>
                        <mq-layout mq="sm" class="inline-block">
                          <nuxt-link to="/projects" class="no-underline fancy-link fancy-link--permanent">See some work</nuxt-link>
                        </mq-layout>
                      </span><span class="opaque">, or</span>
                    </span>
                  </span>

                  <span class="overflow-hidden relative block">
                    <span class="headline-reveal headline-reveal-3 block relative">
                      <mq-layout mq="md+" class="inline-block">
                        <a v-on:mouseover="hoverLine" v-on:mouseout="mouseOutLine" href="mailto:isaac@40000ft.co.uk" class="line fancy-link fancy-link--permanent">send me an email</a>
                      </mq-layout>
                      <mq-layout mq="sm" class="inline-block">
                        <a href="mailto:isaac@40000ft.co.uk" class="line fancy-link fancy-link--permanent">send me an email</a>
                      </mq-layout>
                      <span class="opaque"> if you want to work</span>
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

let tl = TweenMax;

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, delay: -0.5, rotation: -5, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, delay: -0.5, rotation: 5, force3D: true, ease: Power4.easeInOut }, -0.17);

      tl.to(document.querySelector('.seperator-reveal'), 2.65, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut });
      tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 2, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: 0, ease: Power4.easeInOut, onComplete: done }, -0.25);

      tl.to(document.querySelectorAll('.image-box'), 1.5, { autoAlpha:0, delay: 0, force3D: true, ease: Power4.easeInOut });

      tl.to(document.querySelector('.image-box-carousel'), 2, { y: 0, autoAlpha: 0, delay: -0.25, rotation: 0, force3D: true, ease: Power4.easeInOut });

      tl.to(document.querySelectorAll('.fancy-link'), 0.5, { css: { backgroundSize: '0% 100%' }, ease: Power4.easeInOut });

      tl.staggerTo(document.querySelectorAll('.headline-reveal'), 3.5, { y: 200, autoAlpha: 0, delay: -0.5, rotation: -20, force3D: true, ease: Power4.easeInOut }, -0.15);
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
  head () {
    return {
      title: 'IJP - Freelance Digital Designer'
    }
  },
  methods : {
    hover : function(e) {
      tl.to('.image-box-carousel', 0, { css: { autoAlpha: 1, left: e.pageX + 30, top: e.pageY + 30, display: 'block' } })
      tl.to('.opaque', 0.3, { css: { autoAlpha:0.15 } })
      tl.to('.line', 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseMove : function(e) {
      tl.to('.image-box-carousel', 0, { css: { left: e.pageX + 30, top: e.pageY + 30, display: 'block' } })
    },
    mouseOut : function() {
      tl.to('.opaque', 0.3, { css: { autoAlpha: 1 } })
      tl.to('.line', 0.3, { css: { autoAlpha: 1 } })
      tl.to('.image-box-carousel', 0, { css: { scale: 1, autoAlpha: 0 } })
    },
    hoverLine : function() {
      tl.to('.opaque', 0.3, { css: { autoAlpha:0.15 } })
      tl.to('.work', 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseOutLine : function() {
      tl.to('.opaque', 0.3, { css: { autoAlpha: 1 } })
      tl.to('.work', 0.3, { css: { autoAlpha:1 } })
    }
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT')
  },
  mounted () {
    tl.set(document.querySelector('.image-box-carousel'), { width: 320, css: { left: 0, bottom: 0, display: 'none' } });
    tl.set(document.querySelector('.image-box'), { width: 230, height: 320, css: { autoAlpha: 0, backgroundImage:`url(${ this.image })` } });
    tl.set(document.querySelectorAll('.headline-reveal'), { y: 200, autoAlpha: 0, rotation: -20 });
    tl.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    tl.set(document.querySelector('.mask'), { scaleY:0 } );
    tl.set(document.querySelector('.seperator-reveal'), { scaleX:0 } );
    tl.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );

    tl.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    tl.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });


    tl.to(document.querySelector('.image-box'), 5.5, { scale: 1, autoAlpha:0.9, delay: -2, ease: Power4.easeInOut });

    tl.to(document.querySelector('.seperator-reveal'), 3.5, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: -0.5, ease: Power4.easeInOut });

    tl.to(document.querySelectorAll('.fancy-link.current'), 2.75, { css: { backgroundSize: '100% 100%' }, delay: 0, ease: Power4.easeInOut });

    tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: -1.3, force3D: true, ease: Power4.easeInOut }, 0.17);
    tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: -1.3, force3D: true, ease: Power4.easeInOut }, 0.17);
    tl.staggerTo(document.querySelectorAll('.headline-reveal'), 2.85, { y: 0, autoAlpha: 1, delay: -1.4, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: -0.5, ease: Power4.easeInOut }, 0.3);
  }
}
</script>
