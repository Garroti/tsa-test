<template>
    <div>
        <Header />
        <Titulo titulo='Cadastro' />
        <div class="container margem">
            <form @submit.prevent="onSave">
                <div class="form-group">
                    <label class="label-style obrigatorio">Nome</label>
                    <input
                        required
                        class="form-control input-style"
                        v-model="post.nome"
                    >
                </div>
                <div class="form-group">
                    <label class="label-style obrigatorio">Email</label>
                    <input
                        required
                        type="email"
                        class="form-control input-style"
                        v-model="post.email"
                    >
                </div>
                <div class="form-group">
                    <label class="label-style obrigatorio">CPF</label>
                    <input
                        required
                        v-mask="'###.###.###-##'"
                        class="form-control input-style"
                        v-model="post.cpf"
                    >
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label class="input-label obrigatorio">Endereço</label>
                        <input 
                            required
                            placeholder="Rua, Número e Bairro"
                            class="form-control input-style"
                            v-model="post.endereco"
                        >
                    </div>
                    <div class="form-group col-md-2"></div>
                    <div class="form-group col-md-5">
                        <label class="input-label obrigatorio">Estado</label>
                        <select v-model="post.estado" class="form-control input-style" @change="changeState($event)">
                            <option value="0" selected></option>
                            <option value="1">Minas Gerais</option>
                            <option value="2">Espirito Santo</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label class="input-label obrigatorio">CEP</label>
                        <input 
                            required
                            v-mask="'#####-###'"
                            class="form-control input-style"
                            v-model="post.cep"
                        >
                    </div>
                    <div class="form-group col-md-2"></div>
                    <div class="form-group col-md-5">
                        <label class="input-label obrigatorio">Cidade</label>
                        <select v-model="post.cidade" class="form-control input-style">
                            <option v-for="(cidade, i) in cidades" :key="i" :value="i + 1">{{ cidade }}</option>
                        </select>
                    </div>
                </div>
                <span class="text-blue">Forma de Pagamento</span>
                <hr>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" checked name="radio" type="radio" value="true" @click="changePayment()">
                    <label class="form-check-label">Cartão de Credito</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" name="radio" type="radio" value="false" @click="changePayment()">
                    <label class="form-check-label">Boleto</label>
                </div>
                <br>
                <br>
                <div v-if="pagamento">
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label class="input-label obrigatorio">Nome no Cartão</label>
                            <input
                                required
                                class="form-control input-style"
                                v-model="post.nomeCard"
                            >
                        </div>
                        <div class="form-group col-md-2"></div>
                        <div class="form-group col-md-2">
                            <label class="input-label obrigatorio">Data de expiração</label>
                            <select v-model="post.mes" class="form-control input-style">
                                <option value="0" selected>Mes</option>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="form-group col-md-1"></div>
                        <div class="form-group col-md-2">
                            <label class="input-label">________________________</label>
                            <select v-model="post.ano" class="form-control input-style">
                                <option value="0" selected>Ano</option>
                                <option value="20">2020</option>
                                <option value="21">2021</option>
                                <option value="22">2022</option>
                                <option value="23">2023</option>
                                <option value="24">2024</option>
                                <option value="25">2025</option>
                                <option value="26">2026</option>
                                <option value="27">2027</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label class="input-label obrigatorio">Número do Cartão</label>
                            <input 
                                required
                                class="form-control input-style"
                                v-model="post.numeroCard"
                            >
                        </div>
                        <div class="form-group col-md-2"></div>
                        <div class="form-group col-md-2">
                            <label class="input-label obrigatorio">Código de Segurança</label>
                            <input 
                                required
                                class="form-control input-style"
                                v-model="post.codSeguranca"
                            >
                        </div>
                        <div class="form-group col-md-3"></div>
                    </div>
                    <br>
                    <p>Seu cartão sera debitado em R$49,00</p>
                </div>
                <div v-if="!pagamento">
                    <p>Seu boleto sera gerado em R$49,00</p>
                </div>
                <button type="submit" class="btn btn-primary">Realizar Matricula</button>
                <br>
                <small>Informações seguras e criptografadas</small>
            </form>
        </div>
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
            post: {
                nome: '',
                email: '',
                cpf: '',
                endereco: '',
                estado: '0',
                cep: '',
                cidade: '0',
                nomeCard: '',
                numeroCard: '',
                mes: '0',
                ano: '0',
                codSeguranca: '',
                createdAt: null
            },
            cidades: [],
            pagamento: true
        }
    },
    methods: {
        changeState(e) {
            this.cidades = []
            if(e.target.value == 1){
                this.cidades = this.$store.getters.getCidadesMinas
            } else if(e.target.value == 2){
                this.cidades = this.$store.getters.getCidadesES
            }
        },
        changePayment() {
            this.pagamento = !this.pagamento
            this.numeroCard = ''
            this.mes = '0'
            this.ano = '0'
            this.codSeguranca = ''
        },
        onSave() {
            let current_datetime = new Date()
            this.post.createdAt = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
            if(this.pagamento){
                if(
                    this.post.nome == '' || this.post.email == '' || this.post.cpf == '' || this.post.endereco == '' || this.post.estado == '0' || this.post.cep == '' ||
                    this.post.cidade == '0' || this.post.nomeCard == '' || this.post.numeroCard == '' || this.post.mes == '0' || this.post.ano == '0' || this.post.codSeguranca == ''
                )
                    alert('Preencha todos os campos')
                else {
                    this.$store.commit('setLista', this.post)
                    alert('Salvo com sucesso')  
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 2000)
                }
            } else {
                if(
                    this.post.nome == '' || this.post.email == '' || this.post.cpf == '' || this.post.endereco == '' || 
                    this.post.estado == '0' || this.post.cep == '' || this.post.cidade == '0'
                )
                    alert('Preencha todos os campos')
                else {
                    this.$store.commit('setLista', this.post) 
                    alert('Salvo com sucesso')  
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 2000)
                }
            }
        }
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
    .obrigatorio:after {
        content:" *";
        color: red;
    }
</style>