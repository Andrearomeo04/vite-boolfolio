<script>
export default {

}
</script>
<template>
    <div>
        <div class="col-4">
            <div class="card">
                <img class="img-fluid"
                    :src="project.image != null ? 'http://127.0.0.1:8000/storage/${project.image}' : 'https://placehold.co/600x400?text=Immagine+copertina'"
                    alt="">
                <div class="card-content">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">

</style>