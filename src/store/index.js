import axios from "axios";
import { createStore } from 'vuex'
const  newsUrl= 'https://news-608t.onrender.com/'
export default createStore({
  state: {
    news:null,
    query:null,
    spinner:null
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
    async searchQuery(context, query) {
      const res = await axios.get(`${newsUrl}/news/search/${query}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setQuery", result);
        console.log(result)
      } else {
        context.commit("setMessage", err);
        console.log(err)
      }
    },

  },
  modules: {
  }
})
