import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = '6c68b39c7e427b7538a1';
    private client_secret = '71c4453fd12bdf3ebc2fda73f8fb67130024dbbf';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'ear78';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}
