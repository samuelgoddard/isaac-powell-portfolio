<template>
  <section class="flex-1 flex items-center justify-center">
      <div class="flex flex-wrap w-full">
        <div class="w-full md:ml-auto md:w-1/2 overflow-x-hidden">
          <div class="w-full overflow-y-auto max-h-64 lg:max-h-90 block hide-scrollbars">
            <nav>
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
                        text-32 md:text-43 lg:text-48 h-trim"
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
        uri: '/projects/paul-smith',
        date: '2018',
        meta: 'Fashion House'
      },{
        name: 'CPMG',
        id: 'ii',
        uri: '/projects/cpmg',
        date: '2017',
        meta: 'Architecture Studio'
      },{
        name: 'Hive Analytics',
        id: 'iii',
        uri: '/projects/hive-analytics',
        date: '2017',
        meta: 'Data App'
      },{
        name: 'Yale',
        id: 'iv',
        uri: '/projects/hive-analytics',
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