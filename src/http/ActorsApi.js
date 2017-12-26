import { ApiBase } from './ApiBase';

export const ActorsApi = {
    getActorsList: function() {
        return ApiBase.get('/actors')
    }
}