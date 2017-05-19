import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    searchMovie(query: string): string {
        return query;
    };
}
