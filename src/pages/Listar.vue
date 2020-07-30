<template>
    <div>
        <Header />
        <Titulo titulo='Lista' />
        <div class="container margem">
            <span class="text-blue">Lista de Clientes</span>
            <hr>
            <div class="form-group">
                <label class="label-style obrigatorio">Nome do Cliente</label>
                <input
                    @keyup="search($event)"
                    class="form-control input-style"
                    v-model="nome"
                >
            </div>
            <br>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pessoa, i) in pessoas" :key="i">
                        <td>{{ pessoa.nome }}</td>
                        <td>{{ pessoa.email }}</td>
                        <td>{{ pessoa.cpf }}</td>
                        <td>{{ pessoa.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
            nome: '',
            pessoas: []
        }
    },
    methods: {
        search(e) {
            if(this.nome != ''){
                let array = []
                this.pessoas.forEach(pessoa => {
                    if (!pessoa.nome.indexOf(e.target.value)) {
                        array.push(pessoa)
                    }
                });
                this.pessoas = array
            }
        },
        pessoasLista(){
            this.pessoas = this.$store.getters.getLista
        }
    },
    watch: {
        nome: function() {
            if (this.nome == '') {
                this.pessoasLista()
            }
        }
    },
    created() {
        this.pessoasLista()
    }
}
</script>

<style scoped>
    .margem {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .input-style {
        background: #EFF4F9;
        box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    }
    .label-style {
        color: #445566;
    }
    .text-blue {
        color: #1188EE;
    }
</style>