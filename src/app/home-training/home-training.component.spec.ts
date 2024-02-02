import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrainingComponent } from './home-training.component';

describe('HomeTrainingComponent', () => {
  let component: HomeTrainingComponent;
  let fixture: ComponentFixture<HomeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
