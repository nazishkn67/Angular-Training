import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pets } from './pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
 

 private apiUrl='http://localhost:3000/pets';
  constructor(private http:HttpClient) { }

  getPetsList():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  AddPets(pets: Pets) {
   return this.http.post(`${this.apiUrl}`,pets);
  }

  deletePets(name:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${name}`,{responseType: 'text'});
  }

  updatePets(name:string,value:any):Observable<Object>{
    return this.http.put(`${this.apiUrl}/${name}`,value);
  }

  getPets(name:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/${name}`);
  }
}