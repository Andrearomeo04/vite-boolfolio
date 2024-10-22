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
            axios.get(`${store.baseUrl}/projects/$this.$route.params.slug`).then((res) => {
                if (res.data.success) {
                    this.project = res.data.result
                }
            })
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>titolo</h1>
            </div>
            <div class="col-12">

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>