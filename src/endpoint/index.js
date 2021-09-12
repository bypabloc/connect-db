import endpoint from '../endpoint/settings'

export default {
    getKeywords(){
        return endpoint.get({
            url: 'keywords',
        })
    },
    setQuery( { params } ){
        return endpoint.post({
            url: 'test/debug/v1',
            params,
        })
    },
}