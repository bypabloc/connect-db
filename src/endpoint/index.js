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
    setConfig( { params } ){
        return endpoint.post({
            url: 'test/user/3',
            params,
        })
    },
    setCommand( { params } ){
        return endpoint.post({
            url: 'test/user/4',
            params,
        })
    },
}