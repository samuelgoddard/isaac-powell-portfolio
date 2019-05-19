<template>
  <section class="flex-1 flex items-center justify-center">
    
    <seperator width="w-20" class="hidden md:block mr-auto" />
    
    <div class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 md:-ml-20 md:mr-auto">
      <h1 class="
        leading-snug tracking-tight
        text-21 md:text-31 lg:text-32 xl:text-42 2xl:text-52
        font-serif
        text-center
        py-16 md:p-16 lg:p-24"
      >
        I’m Isaac, a freelance designer from Nottingham, UK. <nuxt-link to="/projects" class="underline">See my work</nuxt-link>, or <a href="mailto:isaac@40000ft.co.uk" class="underline">drop me a line</a> if you want to work with me on your next project.
      </h1>
    </div>
  </section>
</template>

<script>
import Seperator from '~/components/Seperator.vue';

export default {
  transition: 'fade',

  components: {
    Seperator,
  },
  created () {
    this.$store.commit('ui/TOGGLE_LIGHT')
  },
}
</script>