<template>
  <div>
    <DataView
      :value="repos"
      layout="grid"
      :rows="30"
      :lazy="true"
    >
      <template #header>
        <div class="p-grid">
          <div class="p-col-12 p-d-flex p-ai-end p-text-left">
            <h2 class="p-mr-3">Repositories</h2>
            <div>{{totalCount}} <span v-if="!totalCount">Not</span> found.</div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-col-12 p-sm-6 p-md-4 p-xl-3">
          <div class="repo-card p-m-2 p-p-4">
            <div class="p-text-center">
              <img
                :src="slotProps.data.owner.avatar_url"
                :alt="slotProps.data.name"
              />
              <div class="repo-name p-mb-3">{{ slotProps.data.name }}</div>
              <div class="repo-description p-mb-4">
                {{ slotProps.data.description }}
              </div>
            </div>
            <div class="p-d-flex p-jc-between p-ai-center">
              <span>{{ slotProps.data.language }}</span>
              <a
                class="p-button p-button-success"
                :href="slotProps.data.html_url"
                target="_blank"
                ><span class="p-button-label">Open</span></a
              >
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  props: {
    // search query
    query: {
      type: String,
      required: true,
    },
  },
  computed: {
    // github repos
    repos: get('repos'),
    // totalcount of repos
    totalCount: get('totalCount'),
  },
  watch: {
    // when change the query, load repos
    query: {
      immediate: true,
      handler(newVal) {
        this.$store.dispatch('loadRepos', newVal)
      },
    },
  },
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}

.repo-card {
  box-shadow: 0 2px 1px -1px #00000020, 0 1px 1px 0 #00000014,
    0 1px 3px 0 #00000012;
  border-radius: 4px;
  border: 1px solid var(--surface-d);

  --lh: 1.4rem;
  line-height: var(--lh);

  img {
    width: 75%;
    box-shadow: 0 3px 6px #00000016, 0 3px 6px #00000023;
    padding: 1rem;
    margin: 2rem 0;
  }

  .repo-name {
    font-size: 1.5rem;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  $font-size: 16px;
  $line-height: 1.4;
  $lines-to-show: 3;

  .repo-description {
    display: -webkit-box;
    height: $font-size * $line-height * $lines-to-show; /* Fallback for non-webkit */
    font-size: $font-size;
    line-height: $line-height;
    -webkit-line-clamp: $lines-to-show;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
