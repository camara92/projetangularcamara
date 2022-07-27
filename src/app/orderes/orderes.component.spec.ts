import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderesComponent } from './orderes.component';

describe('OrderesComponent', () => {
  let component: OrderesComponent;
  let fixture: ComponentFixture<OrderesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
