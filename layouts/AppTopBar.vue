<template>
  <div class="p-mb-3">
    <menubar :model="items">
      <template #start>
        <div class="p-mr-5">
          <a class="p-d-flex p-ai-center">
            <Logo class="p-mr-2" />
            <h3>vue-test</h3>
          </a>
        </div>
      </template>
    </menubar>
  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      items: [
        {
          label: 'Documentation',
          url: 'https://nuxtjs.org/',
          target: '_blank',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/nuxt/nuxt.js',
          target: '_blank',
        },
      ],
      filter: '',
    }
  },
}
</script>