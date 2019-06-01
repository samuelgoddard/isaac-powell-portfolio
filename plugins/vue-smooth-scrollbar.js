import Vue from 'vue'
import SmoothScrollbar from 'vue-smooth-scrollbar'

Vue.use(SmoothScrollbar, {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
    delegateTo: null,
    plugins: {}
})
