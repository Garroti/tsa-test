<template>
    <div>
        <Header />
        <Titulo titulo='Lista' />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Titulo from '@/components/Titulo'

export default {
    name: 'Listar',
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