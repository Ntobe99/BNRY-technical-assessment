import axios from "axios";
import { createStore } from 'vuex'
const  newsUrl= 'https://news-608t.onrender.com/'
export default createStore({
  state: {
    news:null,
    spinner:null,
    articles:[],
    loading: false,
    error: ''
  },
  getters: {
  },
  mutations: {
    setNews(state, values) {
      state.news = values;
    },
    setQuery(state,values){
      state.query=values;
    },
    setSpinner(state,values){
      state.query=values;
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },

  actions: {
    fetchNews: async (context) => {
      const response = await axios.get(`${newsUrl}news/headlines`);
      console.log(response)
      const articles = response.data;
      if (articles) {
        context.commit("setNews", articles);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },
    async searchArticles(context, query) {
      context.commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${newsUrl}news/search/${query}`);
        console.log(response)
        const articles = response.data
        context.commit('SET_ARTICLES', articles);
      } catch (error) {
        console.error(error);
        context.commit('SET_ERROR', 'Server Error');
      } finally {
        context.commit('SET_LOADING', false);
      }
    },
  },
  modules: {
  }
})
