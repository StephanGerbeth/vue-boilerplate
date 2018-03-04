<template>
  <ul>
    <li v-for="item in list">
      <nuxt-link :to="$i18n.path(item.url)" exact>
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  }
};
</script>
