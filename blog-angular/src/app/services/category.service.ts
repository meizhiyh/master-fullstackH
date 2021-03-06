import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { global } from './global';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    private url: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.url = global.url;
    }

    create(token: string, category: Category): Observable<any> {
        const url = `${this.url}category`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this.httpClient.post(url, category, {headers});
    }

    getCategories(): Observable<any> {
        const url = `${this.url}category`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.get(url, {headers});
    }

    getCategory(id: number): Observable<any> {
        const url = `${this.url}category/${id}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.get(url, {headers});
    }

    getPosts(categopryId: number): Observable<any> {
        const url = `${this.url}posts/category/${categopryId}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.get(url, {headers});
    }
}