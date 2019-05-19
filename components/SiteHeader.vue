<template>
  <header class="relative z-10 flex items-center">
    <div class="md:flex-1">
      <logo />
      <div class="hidden md:inline-block align-middle">
        <span class="leading-snug tracking-tight font-serif pl-16 lg:pl-40">Nottingham, England</span>
      </div>
    </div>
    <div class="hidden md:block ml-auto mr-auto">
      <seperator width="w-8" />
    </div>
    <div class="flex-1 ml-auto text-right">
      <nuxt-link 
        v-for="(page, index) in pages"
        class="
          inline-block
          mx-2 md:mx-4 
          text-15 md:text-14 lg:text-base xl:text-20 2xl:text-26"
        :key="page.name"
        :to="page.uri">
          {{ page.name }}
      </nuxt-link>
      <a class="
          inline-block
          mx-2 md:mx-4 mr-0
          text-15 md:text-14 lg:text-base xl:text-20 2xl:text-26"
        href="mailto:isaac@40000ft.co.uk">
          Contact
      </a>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Seperator from '~/components/Seperator.vue';

export default {
  components: {
    Logo,
    Seperator,
  },
  data () {
    return {
      pages: [{
        name: 'Bio',
        uri: '/'
      },{
        name: 'Projects',
        uri: '/projects'
      }]
    }
  }
}
</script>