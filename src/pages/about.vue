<template>
  <div class="Content">
    <div class="container">
      <headline v-bind="headline"></headline>
      <p>{{ $t('about.introduction') }}</p>
    </div>
  </div>
</template>

<script>
  import Headline from '~/components/atoms/Headline'

  export default {
    components: {
      Headline
    },

    data() {
      return {
        headline: {
          content: this.$t('about.title')
        }
      }
    },

    head() {
      console.log('toll', this.$route, this.$t('about.title'));
      return { title: this.$t('about.title') }
    }
  }
</script>
