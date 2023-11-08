import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import { environment } from 'src/environments/environment';
import { Piste } from '../../models/Piste';
import { Color } from '../../models/Color';
@Injectable({
  providedIn: 'root'
})
export class PisteService {
  public piste : Piste = new Piste(); 
  public listPistes:Piste[]=[];

  protected url = `${environment.apiUrl}`;
  constructor(private http:HttpClient,private router: Router,private activeRoute: ActivatedRoute )
  {}

  goToComponent(component:string) : void {this.router.navigateByUrl(component);} 

  insert(piste: Piste) : Observable<HttpResponse<any>>{
    return this.http.post(`${this.url}piste/add`,piste,
                          {observe : 'response'  });
  }
  getAll() : Observable<HttpResponse<any>>{return this.http.get(`${this.url}piste/all`, {observe : 'response'  })}

  getById(id: any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}get/${id}`,
                          {observe : 'response' });
  }
  update(id:number ,  piste:Piste) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}piste/update/${id}`,piste,
           {observe : 'response'});
  }
  delete(id:any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}piste/delete/${id}`,
                            {observe : 'response'});}
  public readonly  listColor = [{ label: 'GREEN', value:  Color.GREEN },{ label: 'BLUE', value:  Color.BLUE },{ label: 'RED', value:  Color.RED },{ label: 'BLACK', value:  Color.BLACK }];
}
