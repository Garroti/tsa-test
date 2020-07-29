<template>
    <div>
        <Header />
        <Titulo titulo='Cadastro' />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Titulo from '@/components/Titulo'

export default {
    name: 'Cadastro',
    components: {
        Header,
        Titulo
    },
    data () {
        return {

        }
    },
}
</script>