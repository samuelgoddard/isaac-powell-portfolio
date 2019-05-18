<template>
  <div
    class="seperator transition-color block border-b"
    :class="width"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false
    }
  }
}
</script>