<template>
    <h1>Products</h1>
    <div class="container">
        <div class="row">
            <div class="card" v-for="item in shoes" :key="item.id" style="width: 18rem;">
  <img :src="item.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item.brand}}</h5>
    <p class="card-text">{{item.price}}.</p>
  </div>
</div>
</div>
</div>
    
</template>
<script>
    export default {
        computed:{
            shoes(){
                return this.$store.state.shoes
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style lang="scss" scoped>

</style>