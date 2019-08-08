
export class ApiService  { 
    getDataFormApi = (url): any => {
    return new Promise((resolve,reject) => {
        fetch(url)
            .then(response => (response.json()))
                .then((json) => resolve(json.free));
    });
  } 
};

export default ApiService;