import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealFoodComponent } from './heal-food.component';

describe('HealFoodComponent', () => {
  let component: HealFoodComponent;
  let fixture: ComponentFixture<HealFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
