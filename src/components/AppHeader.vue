<script>
export default {

}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-3">
                <ul class="d-flex list-unstyled justify-content-center">
                    <li class="me-3">
                        <router-link :to="{ name: 'home' }" class="text-decoration-none text-black">Home</router-link>
                    </li>
                    <li class="me-3">
                        <router-link :to="{ name: 'portfolio' }"
                            class="text-decoration-none text-black">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }"
                            class="text-decoration-none text-black">Contatti</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="">

</style>