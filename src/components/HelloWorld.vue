<template>
  <div class="home">
    <div class="row justify-content-center " v-if="spinner">
    <SpinnerComp />
    </div>
    <div class="news red full-width">
	<span>Breaking News</span>
	<ul class="scrollLeft">
    <li><a href="#">Headlines</a></li>
    <li><a href="#">Latest</a></li>
    <li><a href="#">Hotest</a></li>
    <li><a href="#">Freshest</a></li>
	</ul>
</div>
  
  <div class="row gap-2">
    <div
      class="card border-danger"
      style="width:30rem; height: 24rem"
      v-for="item in news"
      :key="item"
    >
      <img
        v-bind:src="item.urlToImage"
        class="card-img-top"
        style="border-radius: 0px;height:15rem 
        ; padding-top: 1rem;" 
      />
      <div class="card-body">

        <h5 class="card-title fw-bold">{{item.title }}</h5>
       <button class="btn btn-outline-danger"><a class="link" :href="item.url" target="_blank">See More</a> </button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
components: { SpinnerComp},
setup() {
  const store = useStore();
  store.dispatch("fetchNews");
  const news = computed(() => store.state.news); 
  const spinner = computed(() => store.state.Spinner);
  console.log(news)

  return {
    news,
    spinner,
  };
},
};
</script>

<style scoped>
.btn{
  border-radius: 0px;
}
.home{
  padding-top: 4rem;
  padding-left: 3rem;
  padding-right: 2rem;
}
.link{
  text-decoration: none;
  color: black;
}
.card{
  border-radius: 0px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.card:hover{
  background-color: rgb(241, 237, 237);
}
.news {
  box-shadow: inset 0 -15px 30px rgba(0,0,0,0.4), 0 5px 10px rgba(0,0,0,0.5);
  width: 350px;
  height: 30px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 4px;
  padding: 2px;
 
} 
.full-width{
    width: 100%;
}
.news span {
  float: left;
  color: #fff;
  padding: 6px;
  position: relative;
  top: 1%;
  border-radius: 4px;
  box-shadow: inset 0 -15px 30px rgba(0,0,0,0.4);
  font: 16px 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
 
  cursor: pointer
}

.news ul {
  float: left;
  padding-left: 20px;
  animation: ticker 10s cubic-bezier(1, 0, .5, 0) infinite;
 
}

.news ul li {line-height: 30px; list-style: none }

.news ul li a {
  color: #fff;
  text-decoration: none;
  font: 14px Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none
}
@keyframes ticker {
	0%   {margin-top: 0}
	25%  {margin-top: -30px}
	50%  {margin-top: -60px}
	75%  {margin-top: -90px}
	100% {margin-top: 0}
}
.news ul:hover { animation-play-state: paused }
.news span:hover+ul{animation-play-state: paused;}
.red{
  background: #d23435;
  padding:2px;
  padding-right: 2rem;}
</style>