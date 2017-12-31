import { ApiBase } from './ApiBase.ts';
import { CombatActorPresenter } from '../model/CombatActor'
import resolve from 'axios';

export const ActorsApi = {
    getActorsList(): Promise<Array<CombatActorPresenter>> {
        return new Promise(((resolve, reject) => {
            ApiBase.get('/actors').then(response => {
                console.log(response)
                resolve(response.data as CombatActorPresenter[])
            })
        }))
    }
}