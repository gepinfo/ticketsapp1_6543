import { Component, OnInit } from '@angular/core';
import { SearchticketService } from './searchticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.scss'],
})

export class SearchticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },{ headerName: 'Assignees', field: 'assignees'  },];
    servicetypesitemArray: any = [];
    severityitemArray: any = [];
    assigneesitemArray: any = [];
    public tickets = {
        name: '',
        description: '',
        types: '',
        severity: '',
        assignees: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchticketService: SearchticketService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    assigneesGpGetAllValues() {
        this.searchticketService.assigneesGpGetAllValues().subscribe(data => {
            this.assigneesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    servicetypesGpGetAllValues() {
        this.searchticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.searchticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchticketService.GpSearch(this.tickets).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updateticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}