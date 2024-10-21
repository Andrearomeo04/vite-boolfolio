<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []
        }
    }, methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
                this.projects = res.data.results
            })
        }
    }, created() {
        this.getProjects();
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-4">
                <h1 class="text-center">I miei progetti</h1>
            </div>
            <div class="row">
                <ProjectCard v-for="project in projects" :key="project.id" :proj="project" />
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>