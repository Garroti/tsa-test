<template>
    <nav class="navbar navbar-expand-lg navbar-color">
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link font" to='/'>Lista</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link font" to='/cadastrar'>Cadastro</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .navbar-color {
        background: #17222D;
    }
    .font {
        color: white;
    }
</style>