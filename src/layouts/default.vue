<template>
  <div>
    <page-header></page-header>
    <main>
      <nuxt/>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '../components/page/Header';
  import PageFooter from '../components/page/Footer';

  export default {
    components: {
      PageHeader,
      PageFooter
    }
  };
</script>
