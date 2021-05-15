import { NuxtAxiosInstance } from '@nuxtjs/axios'

const URL = 'https://api.github.com'

// /search?p=2&q=vue&type=Repositories&_pjax=%23js-pjax-container

export default (axios: NuxtAxiosInstance) => ({
  getRepositories: (query: string) =>
    axios.get(`${URL}/search/repositories?q=${query}&sort=stars`),
})
