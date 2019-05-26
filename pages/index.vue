<template>
  <section class="flex-1 flex items-center justify-center">
    
    <seperator width="w-20" class="hidden md:block mr-auto" />
    
    <div class="w-full md:w-4/5 md:mr-auto md:-ml-20 relative">

      <div class="relative flex items-center justify-center">
        
        <div class="z-0 absolute right-0 top-0 bottom-0 right-0 bg-cover bg-center imageBox opacity-0 transition" ref="imageBox">
        </div>
        
        <mq-layout mq="md+">
          <img src="/images/portfolio-loop.gif" alt="Portfolio" class="w-90 z-50 opacity-0 fixed" ref="imageBoxCarousel" />
        </mq-layout>

        <div ref="heading" class="opacity-0 scale-50 max-w-xl home-heading">
          <parallax-container class="overflow-hidden">
            <parallax-element :parallaxStrength="20" :type="'depth'">
              <mq-layout mq="md+">
                <h1 class="
                  relative z-10
                  leading-snug tracking-tight
                  text-21 md:text-31 lg:text-32 xl:text-42 2xl:text-52
                  font-serif
                  text-center
                  py-16 md:p-16 lg:p-24"
                >
                  <span ref="opaque">I’m Isaac, a freelance designer from Nottingham, UK.</span> <span ref="work"><nuxt-link v-on:mouseover.native="hover" v-on:mousemove.native="mouseMove" v-on:mouseout.native="mouseOut" to="/projects" class="underline">See my work</nuxt-link></span><span ref="opaque2">, or </span><a v-on:mouseover="hoverLine" v-on:mouseout="mouseOutLine" ref="line" href="mailto:isaac@40000ft.co.uk" class="underline">drop me a line</a><span ref="opaque3"> if you want to work with me on your next project.</span>
                </h1>
              </mq-layout>
              <mq-layout mq="sm">
                <h1 class="
                  relative z-10
                  leading-snug tracking-tight
                  text-21 md:text-31 lg:text-32 xl:text-42 2xl:text-52
                  font-serif
                  text-center
                  py-16 px-6 md:p-16 lg:p-24"
                >
                  I’m Isaac, a freelance designer from Nottingham, UK. <nuxt-link to="/projects" class="underline">See my work</nuxt-link>, or <a href="mailto:isaac@40000ft.co.uk" class="underline">drop me a line</a> if you want to work with me on your next project.
                </h1>
              </mq-layout>
            </parallax-element>
          </parallax-container>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Back, TweenMax } from 'gsap';
import Seperator from '~/components/Seperator.vue';

export default {
  transition: 'fade',
  components: {
    Seperator,
  },
  data() {
    return { 
      showImages: false,
      image: "/images/isaac.jpg"
    }
  },
  methods : {
    hover : function(e) {
      TweenMax.to(this.$refs.imageBoxCarousel, 0, { css: { autoAlpha: 1, left: e.pageX + 30, top: e.pageY + 30 } })
      TweenMax.to(this.$refs.opaque, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.opaque2, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.opaque3, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.line, 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseMove : function(e) {
      TweenMax.to(this.$refs.imageBoxCarousel, 0, { css: { left: e.pageX + 30, top: e.pageY + 30 } })
    },
    mouseOut : function() {
      TweenMax.to(this.$refs.opaque, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque2, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque3, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.line, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.imageBoxCarousel, 0, { css: { scale: 1, autoAlpha: 0 } })
    },
    hoverLine : function() {
      TweenMax.to(this.$refs.opaque, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.opaque2, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.opaque3, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.work, 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseOutLine : function() {
      TweenMax.to(this.$refs.opaque, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque2, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque3, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.work, 0.3, { css: { autoAlpha:1 } })
    }
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT')
  },
  mounted () {
    TweenMax.to(this.$refs.imageBox, 0.3, { css: { scale: 1, autoAlpha:1, backgroundImage:`url(${ this.image })` }, delay: 0.5 })
    // TweenMax.to(this.$refs.heading, 0.3, { css: { scale: 1, autoAlpha:1 }, delay: 0.25 })
    TweenMax.set(this.$refs.heading, { perspective:400} )

    TweenMax.to(this.$refs.heading, 0.8, {opacity:1, scale: 1 });

  }
}
</script>