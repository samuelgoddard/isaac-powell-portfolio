<template>
  <section class="flex-1 flex items-center justify-center">
      <div class="flex flex-wrap w-full">
        <div class="w-full md:ml-auto md:w-1/2 overflow-hidden">
          <nav class="w-full overflow-y-auto overflow-x-hidden max-h-64 lg:max-h-90 xl:max-h-128 block hide-scrollbars p-8">
            <ul>
              <li 
                v-for="(project, index) in projects"
                :key="project.name"
                class="mb-8 lg:mb-12 flex flex-wrap items-center"
              >
                <span 
                  class="font-serif text-8 uppercase w-6"
                >
                  {{ project.id }}
                </span>
                
                <div class="lg:flex lg:flex-wrap lg:items-end">
                  <nuxt-link 
                    class="
                      inline-block 
                      leading-none tracking-tight
                      font-serif
                      mb-2 lg:mb-0
                      text-32 md:text-43 lg:text-48 xl:text-52 h-trim"
                    :to="project.uri">
                      {{ project.name }}
                  </nuxt-link>
                  <span class="text-6 lg:text-7 lg:ml-4 lg:mb-1 tracking-widest uppercase block">{{ project.date }} / {{ project.meta }}</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'fade',
  created () {
    this.$store.commit('ui/TOGGLE_DARK')
  },
  data () {
    return {
      projects: [{
        name: 'Paul Smith',
        id: 'i',
        uri: '/projects/example',
        date: '2018',
        meta: 'Fashion House'
      },{
        name: 'CPMG',
        id: 'ii',
        uri: '/projects/example',
        date: '2017',
        meta: 'Architecture Studio'
      },{
        name: 'Hive Analytics',
        id: 'iii',
        uri: '/projects/example',
        date: '2017',
        meta: 'Data App'
      },{
        name: 'Yale',
        id: 'iv',
        uri: '/projects/example',
        date: '2017',
        meta: 'Home Security'
      },{
        name: 'Misc',
        id: 'v',
        uri: '/projects/misc',
        date: '2016',
        meta: 'Personal'
      }]
    }
  }
}
</script>