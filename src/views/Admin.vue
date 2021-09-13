<template>
    <div class="container p-3 my-3 border">
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Query</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="queryString"></textarea>
        </div>
        <button type="button" class="btn btn-outline-primary" @click="ejecutarQuery">Ejecutar</button>
    </div>
    <div class="container p-3 my-3 border">
        <pre>{{ results }}</pre>
    </div>
</template>

<script>
import { ref, reactive, computed } from "vue";

import axios from '../endpoint'

export default {
    components: {
    },
    created() {
        
    },
    setup: () => {

        const queryString = ref(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'dibal_rest';`);

        const results = ref(null)
        
        const ejecutarQuery = () => {
            axios.setQuery({
                params: {
                    sql: queryString.value,
                },
            })
            .then(res => {
                console.log('res',res)
                results.value = res
            })
            .catch(err => {
                console.log('err',err)
            })
        }

        /**
         * deshashear la contraseña en laravel no es tan facil
         * la APP_KEY del proyecto es la sig: base64:RU9HQHQ9hBt+XK9MSUO2zRt1JaNVj0nl7ITIGiPLpq4=
         * lease este articulo para recordar: https://tighten.co/blog/app-key-and-you/
         * lo que se puede hacer es obtener las contraseñas e intentar descifrarlas con el sig script;
            $password = 'mypasswordhere12345';
            // encrypt using password_hash()
            $crypted = password_hash($password, PASSWORD_DEFAULT); 
            
            // decrypt using password_verify()
            return password_verify($password, $crypted) ? 'Password Matches.' : 'Invalid password.';
         */

        return {
            ejecutarQuery,
            results,
            queryString,
        };
    },
}
</script>
