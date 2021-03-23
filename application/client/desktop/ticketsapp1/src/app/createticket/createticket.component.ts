import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
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
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.createticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    assigneesGpGetAllValues() {
        this.createticketService.assigneesGpGetAllValues().subscribe(data => {
            this.assigneesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.tickets).subscribe(data => {
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
}