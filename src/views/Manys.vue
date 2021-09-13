<template>
    <div class="container my-3 border">
        <div class="container mt-3 p-3 border" v-for="(item, index) in querys" :key="index">
            <div class="">
                <textarea class="form-control" rows="3" v-model="item.text"></textarea>
            </div>

            <button class="btn btn-outline-primary mt-3" v-if="item.result" :disabled="!item.result" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-'+index" aria-expanded="false" :aria-controls="'collapse-'+index">
                Ver resultados
            </button>
            <button class="btn btn-outline-danger mt-3" v-if="item.errors" :disabled="!item.errors" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-'+index" aria-expanded="false" :aria-controls="'collapse-'+index">
                Ver errores
            </button>

            <div class="collapse mt-3" :id="'collapse-'+index"  v-if="item.result || item.errors">
                <div class="card card-body">
                    <pre v-if="item.result">{{ item.result }}</pre>
                    <pre v-if="item.errors">{{ item.errors }}</pre>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-outline-danger mt-3" v-if="errors" :disabled="!errors" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-errors" aria-expanded="false" aria-controls="collapse-errors">
                Ver errores
            </button>
            <div class="collapse mt-3" id="collapse-errors"  v-if="errors">
                <div class="card card-body">
                    <pre v-if="errors">{{ errors }}</pre>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary m-3 " @click="add">Add</button>
        <button type="button" class="btn btn-primary" @click="exec">Execute</button>
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

        const querys = ref([
            {
                text: `SELECT table_name FROM information_schema.tables WHERE table_schema = 'dibal_rest';`,
            },
        ])
        const errors = ref(null)
        
        const add = () => {
            querys.value.push({})
        }
        
        const exec = () => {
            axios.setManyQuerys({
                params: {
                    sqls: querys.value,
                },
            })
            .then(res => {
                console.log('res',res)
                for (const key in res) {
                    querys.value[key]['result'] = res[key]['result'];
                    querys.value[key]['errors'] = res[key]['errors'];
                }
                errors.value = null
            })
            .catch(err => {
                console.log('err',err)
                querys.value = querys.value.map(e => {
                    return {
                        text: e.text,
                        result: null,
                        errors: null,
                    }
                })

                if(err?.response){
                    const { response } = err
                    const { data, status } = response

                    switch (status) {
                        case 422:
                            errors.value = data
                            
                            break;
                    
                        default:
                            errors.value = 'Error no controlado'

                            break;
                    }
                }
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
            exec,
            querys,
            add,
            errors,
        };
    },
}
</script>
