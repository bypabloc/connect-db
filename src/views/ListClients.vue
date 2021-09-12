<template>
    <table-custom
        :columns="[
            {
                label: 'Nº',
                field: 'id',
            },
            {
                label: 'Email',
                field: 'email',
            },
            {
                label: 'Nombres',
                field: 'names',
            },
            {
                label: 'Número',
                field: 'number',
            },
            {
                label: 'Canal de marketing',
                field: 'canal_marketing',
            },
            {
                label: 'Fecha de Nacimiento',
                field: 'birth_date',
            },
            {
                label: 'Ubicación',
                field: 'location',
            },
            {
                label: 'Observación',
                field: 'observation',
            },
            {
                label: 'Fecha de registro',
                field: 'created_at',
            },
        ]"
        :list="list"
        :per_page="per_page"
        @update="getClients"
    />
</template>

<script>
import TableCustom from '../components/Table.vue'

export const props = {}

export default {
    props,
    data() {
        return {
            fetchingData: false,
            list: [],
            page: 1,
            per_page: 10,
        }
    },
    components:{
        TableCustom,
    },
    methods: {
        getClients(args = {}){
            console.log('args',args)
        },
    },
    mounted() {
        this.getClients()
    },
    created(){
        const urlParams = new URLSearchParams(window.location.search);

        const page = urlParams.get('page');
        if(page){
            this.page = !isNaN(page) ? parseInt(page) : 5;
        }
        const per_page = urlParams.get('per_page');
        if(per_page){
            this.per_page = !isNaN(per_page) ? parseInt(per_page) : 5;
        }

    },
}
</script>
