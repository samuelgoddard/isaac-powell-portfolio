<template>
  <section class="flex-1 flex items-center justify-center">
    
    <seperator width="w-20" class="hidden md:block mr-auto" />
    
    <div class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 md:mr-auto md:-ml-20 relative">

      <div class="relative flex items-end justify-end">
        <div class="z-0 absolute right-0 top-0 bottom-0 right-0 bg-cover bg-center imageBox imageBoxCarousel opacity-0 transition" ref="imageBox">
        </div>
        
        <mq-layout mq="md+">
          <div class="z-0 absolute right-0 top-0 bottom-0 right-0 bg-cover bg-center imageBox imageBoxCarousel" ref="imageBoxCarousel">
            <no-ssr placeholder="Loading...">
              <agile :infinite="true" :autoplay="true" :fade="true" :autoplaySpeed="650" :arrows="false" :dots="false">
                <div 
                  v-for="(image, index) in images"
                  :key="image.image"
                  class="slide imageBoxCarouselInner"
                  :class="`imageBoxCarouselInner-${ index }`"
                  :style="`background-image: url('${ image.image }')`">
                </div>
              </agile>
            </no-ssr>
          </div>
        </mq-layout>

        <mq-layout mq="md+">
          <parallax-container class="overflow-hidden">
            <parallax-element :parallaxStrength="20" :type="'depth'" class="">
              <h1 class="
                relative z-10
                leading-snug tracking-tight
                text-21 md:text-31 lg:text-32 xl:text-42 2xl:text-52
                font-serif
                text-center
                py-16 md:p-16 lg:p-24"
              >
                <span ref="opaque">I’m Isaac, a freelance designer from Nottingham, UK.</span> <span ref="work"><nuxt-link  v-on:mouseover.native="hover" v-on:mouseout.native="mouseOut" to="/projects" class="underline">See my work</nuxt-link></span><span ref="opaque2">, or </span><a v-on:mouseover="hoverLine" v-on:mouseout="mouseOutLine" ref="line" href="mailto:isaac@40000ft.co.uk" class="underline">drop me a line</a><span ref="opaque3"> if you want to work with me on your next project.</span>
              </h1>
            </parallax-element>
          </parallax-container>
        </mq-layout>
        <mq-layout mq="sm">
          <h1 class="
            relative z-10
            leading-snug tracking-tight
            text-21 md:text-31 lg:text-32 xl:text-42 2xl:text-52
            font-serif
            text-center
            py-16 md:p-16 lg:p-24"
          >
            I’m Isaac, a freelance designer from Nottingham, UK. <nuxt-link to="/projects" class="underline">See my work</nuxt-link>, or <a href="mailto:isaac@40000ft.co.uk" class="underline">drop me a line</a> if you want to work with me on your next project.
          </h1>
        </mq-layout>
      </div>


      <!-- <div class="absolute top-0 right-0 z-0" id="image-pin">
        <div v-if="showImages">
            <img :src="otherImage" />
        </div>
        <div v-else>
          <img :src="image"  />
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import { TimelineLite, TweenMax } from 'gsap';
import Seperator from '~/components/Seperator.vue';

export default {
  transition: 'fade',
  components: {
    Seperator,
  },
  data() {
    return { 
      showImages: false,
      image: "/images/isaac.jpg",
      images: [
        { image: "/images/cpmg.jpg" },
        { image: "/images/hive.jpg" },
        { image: "/images/misc.jpg" },
        { image: "/images/paul-smith.jpg" },
        { image: "/images/yale.jpg" }
      ]
    }
  },
  methods : {
    hover : function() {
      TweenMax.to(this.$refs.imageBox, 0.3, { css: { scale: 1, autoAlpha: 0 } })
      TweenMax.to(this.$refs.imageBoxCarousel, 0.3, { css: { scale: 0.75, autoAlpha: 0.15 } })
      TweenMax.to(this.$refs.opaque, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.opaque2, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.opaque3, 0.3, { css: { autoAlpha:0.15 } })
      TweenMax.to(this.$refs.line, 0.3, { css: { autoAlpha:0.15 } })
    },
    mouseOut : function() {
      TweenMax.killChildTweensOf(this.$refs.imageBoxCarousel)
      TweenMax.to(this.$refs.imageBox, 0.3, { css: { scale: 1, autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque2, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.opaque3, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.line, 0.3, { css: { autoAlpha: 1 } })
      TweenMax.to(this.$refs.imageBoxCarousel, 0.3, { css: { scale: 1, autoAlpha: 0 } })
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
    TweenMax.set(this.$refs.imageBox, { backgroundImage:`url(${ this.image })` });
    TweenMax.to(this.$refs.imageBox, 0.5, { css: { scale: 1, autoAlpha:1 } });
  }
}
</script>