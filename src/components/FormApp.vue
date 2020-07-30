<template>
    <form @submit.prevent="save">
        <InputApp v-model="post.nome">Nome</InputApp>
        <InputApp type='email' v-model="post.email">Email</InputApp>
        <InputApp v-model="post.cpf">Email</InputApp>
        <InputApp v-model="post.endereco">Email</InputApp>
        <InputApp v-model="post.estado">Email</InputApp>
    </form>
</template>

<script>
import InputApp from './InputApp'

export default {
    name: 'FormApp',
    components: {
        InputApp
    },
    data () {
        return {
            post: {
                nome: '',
                email: ''
            }
        }
    },
}
</script>