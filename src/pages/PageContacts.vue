<script>
import { store } from '../store'
import axios from 'axios';
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: ''
        }
    }, methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content,
            }

            axios.post(`${store.baseUrl}/contacts`, data).then((res) => {
                if (res.data.success) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.content = '';
                }

            })
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row gy-3">
            <div class="col-12">
                <h1>Contatti</h1>
            </div>
            <div class="col-12">
                <form action="post" @submit.prevent="sendForm()">
                    <div class="row">
                        <div class="col-12">
                            <label class="control-label">Nome</label>
                            <input type="text" class="form-control" name="name" id="name" v-model="name"
                                placeholder="Nome">
                        </div>
                        <div class="col-12">
                            <label class="control-label">Cognome</label>
                            <input type="text" class="form-control" name="surname" id="surname" v-model="surname"
                                placeholder="Cognome">
                        </div>

                        <div class="col-12">
                            <label class="control-label">Email</label>
                            <input type="text" class="form-control" name="email" id="email" v-model="email"
                                placeholder="Email">
                        </div>

                        <div class="col-12">
                            <label class="control-label">Telefono</label>
                            <input type="text" class="form-control" name="phone" id="phone" v-model="phone"
                                placeholder="Telefono">
                        </div>

                        <div class="col-12">
                            <label class="control-label">Contenuto</label>
                            <textarea type="text" class="form-control" name="content" id="content" v-model="content"
                                placeholder="Contenuto"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-success">Invia</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>