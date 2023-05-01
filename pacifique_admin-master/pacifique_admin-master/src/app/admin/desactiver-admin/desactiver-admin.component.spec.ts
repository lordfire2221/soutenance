import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactiverAdminComponent } from './desactiver-admin.component';

describe('DesactiverAdminComponent', () => {
  let component: DesactiverAdminComponent;
  let fixture: ComponentFixture<DesactiverAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesactiverAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesactiverAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
