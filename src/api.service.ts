
export class ApiService  { 
    getDataFormApi = (url): any => {
    return new Promise((resolve,reject) => {
        fetch(url)
            .then(response => (response.json()))
                .then((json) => resolve(json.free));
    });
  } 

  getDetailsOfParticularConference = (url, _confId): any => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => (response.json()))
          .then((json) => {
            let _conf = json.free;
            resolve(_conf.filter((val) => val.conference_id == _confId))
          });
    });
  }
};

export default ApiService;