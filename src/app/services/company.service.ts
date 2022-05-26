import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  getCompanyByNit(nit: string) {
   return this.http.post<Company>('https://t55rkrwn3i.execute-api.us-east-1.amazonaws.com/default/service-bank', {nit});
  }
}
