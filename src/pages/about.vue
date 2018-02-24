<template>
  <div class="Content">
    <div class="container">
      <headline v-bind="headline"></headline>

      <img src="~/assets/image0.jpg">
      <img src="~/assets/image0.jpg.webp">
      <img src="~/assets/image0.png">
      <img src="~/assets/image0.png24.png">
      <img src="~/assets/image0.png.webp">
      <img src="~/assets/image1.png">
      <img src="~/assets/image1.png24.png">
      <img src="~/assets/image1.png.webp">
      <img src="~/assets/image2.png">
      <img src="~/assets/image2.png24.png">
      <img src="~/assets/image2.png.webp">
      <img src="~/assets/image2.png.webp">

      <img src="~/assets/image.svg">
      <img src="~/assets/image2.svg">
      <p>{{ $t('about.introduction') }}</p>
    </div>
  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';
// import image from '~/assets/image.png';

// console.log(image);
export default {
  components: {
    Headline
  },

  data () {
    return {
      headline: {
        content: this.$t('about.title')
      }
    };
  },

  head () {
    console.log('toll', this.$route, this.$t('about.title'));
    return { title: this.$t('about.title') };
  }
};
</script>
