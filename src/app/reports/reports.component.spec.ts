import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DialogModule, CalendarModule, DataTableModule, TabViewModule, DropdownModule} from 'primeng/primeng';
import {ReportsComponent} from './reports.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ReportsService } from './reports.service';
import { Report } from './models/report';
import { Observable } from 'rxjs/Observable';

class ReportsServiceSpy {
  getReportList = jasmine.createSpy('getReportList')
    .and.callFake(
      () => Observable.of( new Array<Report>())
    );
  getReportData = jasmine.createSpy('')
    .and.callFake(
      () => Observable.of(new Array<any>())
    );
  saveReport = jasmine.createSpy('saveReport');
}

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;
  let reportsServiceSpy: ReportsServiceSpy;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        ReportsComponent
      ],
      imports: [
        NoopAnimationsModule,
        DataTableModule,
        DropdownModule,
        TabViewModule,
        CalendarModule,
        DialogModule,
        FormsModule,
        HttpModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    })
    .overrideComponent(ReportsComponent, {
      set: {
        providers: [
          { provide: ReportsService, useClass: ReportsServiceSpy }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    reportsServiceSpy = fixture.debugElement.injector.get(ReportsService) as any;        
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('save', () => {
    it('should be a method', () => {
      expect(typeof component.save).toBe("function");
    });

    it('should call the reports service save method', () => {
      //spyOn(reportsServiceSpy, 'saveReport');

      component.save();

      expect(reportsServiceSpy.saveReport).toHaveBeenCalled();
    });
  });
});
