import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrenneauComponent } from './crenneau.component';

describe('CrenneauComponent', () => {
  let component: CrenneauComponent;
  let fixture: ComponentFixture<CrenneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrenneauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrenneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
