<template>
  <h1 class="Content__Title">{{ content }}</h1>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: 'Headline'
    }
  }
};
</script>
