<template>
    <div class="container my-3 border">

        <table class="table table-striped table-dark table-hover mt-3 p-3 border">
            <thead>
                <tr>
                    <th scope="col">KEY</th>
                    <th scope="col">VALUE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in vars" :key="index">
                    <td><input type="text" v-model.trim="item.key" @input="item.key = $event.target.value.toUpperCase()"></td>
                    <td><input type="text" v-model="item.value"></td>
                    <td><button type="button" class="btn btn-outline-danger" @click="rem({index})">-</button></td>
                </tr>
            </tbody>
        </table>

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
        <button type="button" class="btn btn-primary" @click="getVars">Guardar</button>
    </div>
</template>

<script>
import { ref, reactive, computed } from "vue";

import ListClients from './ListClients'

import axios from '../endpoint'

export default {
    components: {
        ListClients,
    },
    created() {
        
    },
    setup: () => {

        const vars = ref([])
        const errors = ref(null)
        
        const add = () => {
            vars.value.push({
                new: true,
            })
        }
        
        const rem = ({index,}) => {
            vars.value.splice(index,1)
        }
        
        const getVars = () => {
            axios.setConfig({
                params: {
                    values: vars.value,
                },
            })
            .then(res => {
                console.log('res',res)
                vars.value = [];
                for (const key in res.env) {
                    vars.value.push({
                        key,
                        value: res.env[key],
                    });
                }
            })
            .catch(err => {
                console.log('err',err)
                vars.value = null

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

        getVars()

        return {
            getVars,
            vars,
            add,
            rem,
            errors,
        };
    },
}
</script>
