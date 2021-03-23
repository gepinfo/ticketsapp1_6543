import { Component, OnInit } from '@angular/core';
import { UpdateticketService } from './updateticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
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

    constructor (
        private updateticketService: UpdateticketService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    servicetypesGpGetAllValues() {
        this.updateticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.updateticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    assigneesGpGetAllValues() {
        this.updateticketService.assigneesGpGetAllValues().subscribe(data => {
            this.assigneesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketService.GpUpdate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.assignees = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updateticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}