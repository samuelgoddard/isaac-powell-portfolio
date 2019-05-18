export const state = () => ({
  dark: false,
  light: false,
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
}