
export class ApiService  { 
    getDataFormApi = (url) => {
    return new Promise((resolve,reject) => {
        fetch(url)
            .then(response => (response.json()))
                .then((json) => resolve(json.free));
    });
  } 
};

export default ApiService;