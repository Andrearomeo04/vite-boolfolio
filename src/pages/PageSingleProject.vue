<script>
import axios from 'axios'
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            project: null
        }
    }, methods: {
        getProject() {
            axios.get(`${store.baseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    this.project = res.data.results
                }
            })
        }
    }, created() {
        this.getProject();
    }
}
</script>
<template>
    <div class="container" v-if="project">
        <div class="row">
            <div class="col-12">
                <img :src="project.image && project.image.startsWith('http') ? project.image : `http://127.0.0.1:8000/storage/${project.image}`"
                    alt="">
            </div>
            <div class="col-12">
                <h1>{{ project.title }}</h1>
                <p v-if="project.technologies.length > 0">Tecnologie:
                    <span class="pe-2" v-for="tech in project.technologies" :key="tech.id">
                        {{ tech.name }}
                    </span>
                </p>
                <p v-else>Nessuna tecnologia usata</p>
                <p>Tipologia: {{ project.type !== null ? project.type.name : 'nessuna tipologia presente' }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>