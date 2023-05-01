import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeCrenneauComponent } from './programme-crenneau.component';

describe('ProgrammeCrenneauComponent', () => {
  let component: ProgrammeCrenneauComponent;
  let fixture: ComponentFixture<ProgrammeCrenneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeCrenneauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeCrenneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
