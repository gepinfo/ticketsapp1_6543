import { Component, OnInit } from '@angular/core';
import { GetallticketsService } from './getalltickets.service';

@Component({
  selector: 'app-getalltickets',
  templateUrl: './getalltickets.component.html',
  styleUrls: ['./getalltickets.component.scss'],
})

export class GetallticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'ServiceTypes', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },{ headerName: 'Assignee', field: 'assignees'  },];
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
        private getallticketsService: GetallticketsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallticketsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}