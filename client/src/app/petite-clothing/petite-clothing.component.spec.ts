import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteClothingComponent } from './petite-clothing.component';

describe('PetiteClothingComponent', () => {
  let component: PetiteClothingComponent;
  let fixture: ComponentFixture<PetiteClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiteClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiteClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
