<template>
  <div class="p-px-2">
    <!-- buttons list -->
    <buttons  class="p-mb-5" @on-show-list="onShowList" />
    <!-- github repositories list -->
    <github-repos :query="filter" />
  </div>
</template>

<script>
import Buttons from '~/components/Buttons'
import GithubRepos from '~/components/GithubRepos.vue'

export default {
  name: 'Home',
  components: { GithubRepos, Buttons },
  data() {
    return {
      filter: '',
    }
  },
  methods: {
    // when select the button, change the filter
    onShowList(filter) {
      this.filter = filter
    },
  },
}
</script>
