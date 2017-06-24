import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.template.html',
    styleUrls: ['./profile.css']
})

export class ProfileComponent {
    user:any;
    repos:any[];
    username:string;

    constructor(private _githubService: GithubService){
        this.user = false;
    }

    searchUser(){
        this.user = '';
        
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        })

        this._githubService.getRepos().subscribe(repos => {
            console.log(repos);
            this.repos = repos;
        })

    }
}
