import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedprojectComponent } from './detailedproject.component';

describe('DetailedprojectComponent', () => {
  let component: DetailedprojectComponent;
  let fixture: ComponentFixture<DetailedprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
