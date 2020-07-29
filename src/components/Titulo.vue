<template>
    <div class="titulo">
        <p>{{ texto }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            texto: ''
        }
    },
    props: ["titulo"],
    created() {
        this.texto = this.$props.titulo
    }
}
</script>

<style scoped>
    .titulo {
        background: #EFF4F9;
        width: 100%;
        height: 150px;
        text-align: center;
        font-family: "Nunito", Helvetica, Arial;
        font-size: 80px;
    }
</style>