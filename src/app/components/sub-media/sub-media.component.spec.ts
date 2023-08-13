import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMediaComponent } from './sub-media.component';

describe('SubMediaComponent', () => {
  let component: SubMediaComponent;
  let fixture: ComponentFixture<SubMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
