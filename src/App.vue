<script>
import axios from 'axios'

export default {
     data(){
      return{
        projects: []
      }
     }, methods:{
      getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
          console.log(res.data)
        })
      }
     }, created(){
      this.getProjects();
     }
}
</script>
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">I miei progetti</h1>
        </div>
        <div class="col-12">

        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss'
</style>