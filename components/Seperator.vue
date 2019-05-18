<template>
  <div
    class="block border-b border-black"
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