import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company!: Company;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanyByNit('800220154').subscribe( company => {
      this.company = company;
    })
  }

}
