import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export abstract class BaseApiClass {
  baseUrl!: string;

  protected constructor(protected httpClient: HttpClient) {
    // super(httpClient);
  }

  getAll(filterObject?: any): Observable<any> {
    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }
    return this.httpClient.get(`${this.baseUrl}${queryString}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getById(id: string, filterObject?: any): Observable<any> {
    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }
    return this.httpClient.get(`${this.baseUrl}/${id}${queryString}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  create(payload: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, payload).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  update(id: string, payload: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, payload).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updatePost(id: string, payload: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${id}`, payload).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/all`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  enabled(id: any) {
    return this.httpClient
      .get(`${this.baseUrl}/habilitar/${id}`)
      .pipe(
        map((body: any) => {
          return body;
        })
      );
  }

  nextPage(url: string): Observable<any> {
    
    const headers = new HttpHeaders()
      .set('paginate', String(true))
      .set('totalPagina', String(10));

    // const req = new HttpRequest('GET', url, {
    //   headers: headers,
    //   reportProgress: true, // Puedes ajustar esto según tus necesidades
    // });
    
    // return this.httpClient.request(req);
    return this.httpClient.get(url, { headers: headers });
    // return this.httpClient.get(url, { headers: headers, params: paramsNext });
  }

  getEnabledList() {
    return this.httpClient.get<any>(
      `${this.baseUrl}/habilitados/activos`
    );
  }
}
