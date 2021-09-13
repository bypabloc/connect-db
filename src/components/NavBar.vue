<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Admin DB</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">One Query</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/manys">Many Querys</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/command">Command</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/env">Env</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/config">Config</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export const props = {};

export default {
    props,
}
</script>

<style scoped>
.nav-custom{
    height: 12vh;
}
</style>