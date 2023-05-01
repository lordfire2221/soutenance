import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierExoComponent } from './modifier-exo.component';

describe('ModifierExoComponent', () => {
  let component: ModifierExoComponent;
  let fixture: ComponentFixture<ModifierExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierExoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
