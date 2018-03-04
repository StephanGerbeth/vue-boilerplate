<i18n>
{
  "en": {
    "test": "message 12",
    "hello": "hello world!"
  },
  "de": {
    "test": "nachricht 12345",
    "hello": "hallo welt"
  }
}
</i18n>
<i18n src="~/locales/_lang/about.json"></i18n>

<template>
  <div>
    <headline v-bind:content="$t('test')"></headline>
    hello2 {{$t('configxyz')}}
    {{ $t('test') }}
    <img src="~/assets/image.svg" />
    <img src="~/assets/image2.svg" />
    <img src="~/assets/image0.png.webp" />
  <br/>

  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';

export default {
  components: {
    headline: Headline
  }
};
</script>
