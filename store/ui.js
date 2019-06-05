export const state = () => ({
  dark: false,
  light: false,
  header: false
})

export const mutations = {
  TOGGLE_DARK(state) {
    state.dark = true;
    state.light = false;
  },
  TOGGLE_LIGHT(state) {
    state.light = true;
    state.dark = false;
  },
  TOGGLE_HEADER(state) {
    state.header = true;
  },
}