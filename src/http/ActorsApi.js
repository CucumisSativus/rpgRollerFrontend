import {ApiBase} from './http/ApiBase';

export const ActorsApi = {
  getActorsList: function() {
    ApiBase.get('/actors')
  }
}
