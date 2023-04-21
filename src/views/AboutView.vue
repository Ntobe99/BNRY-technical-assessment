<template>
  <div class="about">
    <h1>ARTICLES</h1>
    <form class="d-flex" role="search" @submit.prevent="Search"  >
        <input class="form-control me-2 text-center" type="search" placeholder="Search Quotes,News & Articles " aria-label="Search" v-model="query.content">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
      <div class="articles">
        {{ query.content }}
      </div>
  </div>
</template>

<script>

import { useStore } from 'vuex';
export default{
 
setup(){
  const store = useStore();
        let query = {
          source:'',
          author: '',
          title: '',
          description: '',
          url: '',
          urlToImage: '',
          publishedAt: '',
          content:''
                
            }
            const Search = () => {
            store.dispatch("searchQuery", query)
            store.dispatch("fetchNews");
            console.log(query);
        }

  return{
    query,
    Search
  }
}
}

 



</script>
<style scoped>
.about{
  padding-top:6rem;
}
</style>