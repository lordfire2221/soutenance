import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRevComponent } from './ajout-rev.component';

describe('AjoutRevComponent', () => {
  let component: AjoutRevComponent;
  let fixture: ComponentFixture<AjoutRevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
