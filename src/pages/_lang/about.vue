<i18n>
{
  "en": {
    "test": "message2",
    "hello": "hello world!"
  },
  "de": {
    "test": "nachricht 12345678",
    "hello": "hallo welt"
  }
}
</i18n>

<template>
  <div>
    {{test}} hello2 huhu234
    {{ $t('test') }}
  <br/>

  </div>
</template>

<script>
export default {
  data () {
    console.log(this.constructor.name);
    return {test: this.$t('test')};
  }
};
</script>
