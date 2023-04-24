<template>
    <div class="search">
      <h1>Search Articles</h1>
      <form @submit.prevent="search">
        <input type="text" class="search-input" placeholder="search ..." v-model="searchTerm" />
        <button type="submit" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <p v-if="loading"> <SpinnerComp/> </p>
      <p v-if="error">{{ error }}</p>
      <div v-if="articles.length">
        <div class="row">
        <div v-for="item in articles" :key="item.title">
            <div class="container text-center">
  <div class="row">
    <div class="col">
    <img :src="item.urlToImage" alt="" style="height: 25rem;width: 30rem;">
    </div>
    <div class="col">
     <h1 class="text-start">{{ item.title }}</h1>
     <p class="text-start">-{{ item.author }}</p>
     <p class="text-start">{{ item.content }}</p>
     <button class="btn btn-outline-danger"> 
        <a :href="item.url" target="_blank">SEE FULL ARTICLE</a>
     </button>
    </div>
    </div>
    <hr class="border border-danger border-2 opacity-50">
   
    </div>
      </div>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
import SpinnerComp from './SpinnerComp.vue';
import store from '@/store';
  
  export default {
    name: "News",
    data() {
        return {
            searchTerm: "",
        };
    },
    computed: {
        ...mapState({
            articles: state => state.articles,
            loading: state => state.loading,
            error: state => state.error,
            news: state => state.news
        }),
    },
    methods: {
        // ...mapActions(["searchArticles"]),
        search() {
         store.dispatch('searchArticles', this.searchTerm)   
        }
    },
    components: { SpinnerComp }
};
  </script>
  <style scoped>
  .search{
padding-top:6rem;
  }
  .row{
    padding-top: 2rem;
  }
  .btn{
    border-radius: 0px;
    text-decoration: none;
  }
  .btn a {
    text-decoration: none;
    color: black;
  }
.search-input{
  width: 30%;
  padding: 10px;
  border: 4px solid #db541a;
  border-radius:10px 0 0 10px ;
  border-right: none;
  outline: none;
  font-size: 20px;
  color: black;
  background: none;
  height: 51px;
}
.search-button{
text-align: center;
height: 51px;
width: 40px;
outline: none;
cursor: pointer;
border: 4px solid #db541a;
border-radius: 0 10px 10px 0 ;
border-left: none;
background: none;
font-size: 20px;
border-left: 4px solid #83411a;
}
</style>
  