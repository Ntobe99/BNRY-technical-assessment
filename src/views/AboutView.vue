<template>
  <div class="about">
    <h1>this is an about page </h1>
    <form class="d-flex" role="search"  >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
  </div>
</template>

<script>

export default{
//   computed: {
//         news() {
//           return this.$store.state.News
//         }
       
//     },
//   created() {
//       this.$store.dispatch('SearchQuery', this.params.query)
    
//     } 
//   } 

}
</script>
<style scoped>
.about{
  padding-top:6rem;
}
</style>