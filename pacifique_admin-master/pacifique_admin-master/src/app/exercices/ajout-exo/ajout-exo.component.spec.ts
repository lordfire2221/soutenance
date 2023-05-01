import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutExoComponent } from './ajout-exo.component';

describe('AjoutExoComponent', () => {
  let component: AjoutExoComponent;
  let fixture: ComponentFixture<AjoutExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutExoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
