import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PlayersService {

    constructor(private http: Http) { }

    private API_PREFIX = 'http://localhost:4200/assets/data/';

    loadPlayerTiles() {
        return this.http.get(`${this.API_PREFIX}tiles-data.json`)
        .map(data => data.json());
    }

    loadPlayerFaces() {
        return this.http.get(`${this.API_PREFIX}faces-data.json`)
        .map(data => data.json());
    }
}
