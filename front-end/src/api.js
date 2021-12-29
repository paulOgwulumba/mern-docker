import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'content-type':'application/json',
    },
});
export default {
    getData: () =>
        instance({
            'method':'GET',
            'url':'/',
            'params': {
                'search':'parameter',
            },
            // transformResponse: [function (data) {
            //     // Do whatever you want to transform the data
            //     console.log('Transforming data...')
            //     const json = JSON.parse(data)
            //     // list of nested object keys
            //     const dates = Object.keys(json['nested object'])
            //     data = {
            //         dates
            //     }
            //     return data;
            // }],
        }),
    postData: () =>
        instance({
            'method': 'POST',
            'url':'/',
            'data': {
                'item1':'Whatever happened to the values of humanity.',
                'item2':'Whatever happened to the fairness and equality'
            },
            'headers': { 'content-type':'application/json' // override instance defaults
            },
        })
}