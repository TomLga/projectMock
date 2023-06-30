<template>
    <h1>Education</h1>
    <div class="container">
        <div class="row">
            <div class="card" v-for="thingg in education" :key="thingg.id" style="width: 18rem;">
  <img src="https://i.postimg.cc/7YZy1Mr2/css-logo.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{thingg.place}}</h5>
    <p class="card-text">{{thingg.qualification}}</p>
    <p class="card-text">{{thingg.time}}</p>
  </div>
</div>
</div>
</div>

</template>
<script>
    export default {
        computed:{
            education(){
                return this.$store.state.education
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation')
        }
    }
</script>

<style scoped>

</style>