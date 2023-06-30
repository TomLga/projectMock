<template>
    <h1>Projects</h1>
    <div class="flip-card" v-for="web in projects" :key="web.id">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://i.postimg.cc/DZF4080X/vans-tshirt-rose.jpg" style="width:300px;height:300px; padding:19px;">
          </div>
          <div class="flip-card-back">
            <h1>portfolio</h1> 
            <p>{{ web.name }}</p>
           
            <p>github : {{ web.github }}</p>
            <p>live View : {{ web.net }}</p>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
      computed:{
        projects(){
          return this.$store.state.projects
        }
      },
      mounted(){
        this.$store.dispatch('fetchProjects')
      }
        
    }
</script>

<style scoped>

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #2cef25;
    color: black;
  }
  
  .flip-card-back {
    background-color: #0f0f0f;
    color: white;
    transform: rotateY(180deg);
  }

</style>