import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionsComponent } from './revisions.component';

describe('RevisionsComponent', () => {
  let component: RevisionsComponent;
  let fixture: ComponentFixture<RevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
