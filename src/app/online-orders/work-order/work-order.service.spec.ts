import { async, TestBed, inject } from '@angular/core/testing';

import { WorkOrderService } from './work-order.service';
import { environment } from '../../../environments/environment';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployersService } from '../../employers/employers.service';
import { AuthService } from "../../shared/index";

describe('WorkOrderService', () => {
  let service: WorkOrderService;
  let httpMock: HttpTestingController;
  let baseref: string  = environment.dataUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkOrderService, EmployersService, AuthService],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(WorkOrderService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([WorkOrderService], (service1: WorkOrderService) => {
    expect(service1).toBeTruthy();
  }));
});
