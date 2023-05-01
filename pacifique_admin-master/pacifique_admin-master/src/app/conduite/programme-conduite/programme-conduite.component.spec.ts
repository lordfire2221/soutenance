import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeConduiteComponent } from './programme-conduite.component';

describe('ProgrammeConduiteComponent', () => {
  let component: ProgrammeConduiteComponent;
  let fixture: ComponentFixture<ProgrammeConduiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeConduiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeConduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
