import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveableComponent } from './loveable.component';

describe('LoveableComponent', () => {
  let component: LoveableComponent;
  let fixture: ComponentFixture<LoveableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
