<template>
<div>
  <span class="fancy-link"></span>
</div>
</template>

<script>
import { StaggerTo, Power4, TweenMax, TweenLite } from "gsap";

import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';
import Seperator from '~/components/Seperator.vue';

let tl = TweenMax;

export default {
  transition: {
    mode: 'out-in',
    css: false,
    leave(el, done) {
      tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: -100, autoAlpha: 0, rotation: -5, delay: -1, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 100, autoAlpha: 0, rotation: 5, delay: -1, force3D: true, ease: Power4.easeInOut }, -0.17);
      tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.5, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: -1, ease: Power4.easeInOut }, -0.25);
      tl.to(document.querySelectorAll('.content'), 4, { y: 450, autoAlpha: 0, delay: -0.65, rotation: -20, force3D: true, ease: Power4.easeInOut });
      tl.to(document.querySelectorAll('.meta'), 2, { y: 25, autoAlpha: 1, delay: -1, rotation: -5, force3D: true, ease: Power4.easeInOut });
      tl.to(document.querySelector('.seperator-reveal'), 2.65, { scaleX: 0, autoAlpha: 1, transformOrigin:"left center", delay: -0.5, ease: Power4.easeInOut, onComplete: done });
      tl.to(document.querySelectorAll('.bleed--all'), 3.5, { autoAlpha: 0, delay: -0.5, rotation: 0, force3D: true, ease: Power4.easeInOut });
      tl.to(document.querySelectorAll('.fancy-link'), 0.5, { css: { backgroundSize: '0% 100%' }, ease: Power4.easeInOut });
    },
  },
  components: {
    SiteHeader,
    SiteFooter,
    Seperator,
  },
  data () {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0;
    },
    updateText (isVisible, entry, title) {
      if (this.scrolled) {
        document.querySelector('.sectionTitle-inner').innerText = title;
      }
    },
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT');
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted () {
    tl.set(document.querySelector('.mask'), { scaleY:0} );
    tl.set(document.querySelector('.swipe-reveal'), { scaleY:0 } );
    tl.set(document.querySelectorAll('.seperator-reveal-staggered'), { scaleX:0 } );
    tl.set(document.querySelector('.seperator-reveal'), { scaleX:0 } );
    tl.set(document.querySelectorAll('.top-mask'), { y: -100, autoAlpha: 0, rotation: -5 });
    tl.set(document.querySelectorAll('.bottom-mask'), { y: 100, autoAlpha: 0, rotation: 5 });
    tl.set(document.querySelectorAll('.content'), { y: 350, autoAlpha: 1, rotation: -3 });
    tl.set(document.querySelectorAll('.meta'), { y: 20, autoAlpha: 1, rotation: -5 });
    tl.set(document.querySelectorAll('.bleed--all'), { autoAlpha: 0 } );

    tl.staggerTo(document.querySelectorAll('.top-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: -1, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.bottom-mask'), 3, { y: 0, autoAlpha: 1, rotation: 0, delay: -1, force3D: true, ease: Power4.easeInOut }, 0.15);
    tl.staggerTo(document.querySelectorAll('.seperator-reveal-staggered'), 1.85, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: -0.5, ease: Power4.easeInOut }, 0.3);
    tl.staggerTo(document.querySelectorAll('.content'), 4, { y: 0, autoAlpha: 1, delay: -1.85, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.25);

    tl.staggerTo(document.querySelectorAll('.bleed--all'), 2.25, { autoAlpha: 1, delay: 0, rotation: 0, force3D: true, ease: Power4.easeInOut }, 0.25);

    tl.to(document.querySelector('.seperator-reveal'), 3.5, { scaleX: 1, autoAlpha: 1, transformOrigin:"left center", delay: -1, ease: Power4.easeInOut });
    tl.to(document.querySelectorAll('.meta'), 3, { y: 0, autoAlpha: 1, delay: -1, rotation: 0, force3D: true, ease: Power4.easeInOut });
  }
}
</script>
