<template>
  <nuxt-link 
    to="/"
    class="font-serif leading-none tracking-tight text-28 md:text-42 lg:text-43 xl:text-47 2xl:text-63 align-middle inline-block no-underline logo w-24">
      IJP
    </nuxt-link>
</template>

<script>
import baffle from 'baffle';

export default {
  methods: {
    // startBaffle () {
    //   const b = baffle('.logo').start();

    //   b.start()
    //   .set({ speed: 75 })
    //   .text(text => 'IJP')
    //   .reveal(750);
    // },
  }
}
</script>