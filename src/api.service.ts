import { Observable, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter,map ,tap} from 'rxjs/operators';

export class ApiService  { 

  constructor(){
  }
  getDataFromApi = (url): Observable<any> => {
    return ajax(url)
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