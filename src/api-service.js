import config from './config';

const ApiService = {
    getImages(url){
        return fetch(url, { method: 'get' })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
    },
};

export default ApiService;