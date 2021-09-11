import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardQuickviewComponent } from './product-card-quickview.component';

describe('ProductCardQuickviewComponent', () => {
  let component: ProductCardQuickviewComponent;
  let fixture: ComponentFixture<ProductCardQuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardQuickviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardQuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
