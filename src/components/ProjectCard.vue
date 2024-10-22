<script>
export default {
    name: 'ProjectCard',
    props: {
        proj: Object
    }
}
</script>
<template>
    <div class="col-4 mb-3">
        <div class="card">
            <img class="img-fluid"
                :src="proj.image != null ? `http://127.0.0.1:8000/storage/${proj.image}` : 'https://placehold.co/600x400?text=Immagine+copertina'"
                alt="">
            <div class="card-content">
                <h3>{{ proj.title }}</h3>
                <p>{{ proj.description }}</p>
            </div>
        </div>
        <router-link class="btn btn-success"
            :to="{ name: 'single-project', params: { slug: proj.slug } }">Visualizza</router-link>
    </div>
</template>
<style lang="scss" scoped></style>