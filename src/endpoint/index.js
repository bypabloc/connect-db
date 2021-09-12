import endpoint from '../endpoint/settings'

export default {
    getKeywords(){
        return endpoint.get({
            url: 'keywords',
        })
    },
    setQuery( { params } ){
        return endpoint.post({
            url: 'test/user/1',
            params,
        })
    },
    setManyQuerys( { params } ){
        return endpoint.post({
            url: 'test/user/2',
            params,
        })
    },
    setConfig(){
        return endpoint.get({
            url: 'test/user/3',
        })
    },
    setCommand( { params } ){
        return endpoint.post({
            url: 'test/user/4',
            params,
        })
    },
}