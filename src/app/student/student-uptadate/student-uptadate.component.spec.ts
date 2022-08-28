import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUptadateComponent } from './student-uptadate.component';

describe('StudentUptadateComponent', () => {
  let component: StudentUptadateComponent;
  let fixture: ComponentFixture<StudentUptadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUptadateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUptadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
