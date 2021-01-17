import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTeacherComponent } from './modify-teacher.component';

describe('ModifyTeacherComponent', () => {
  let component: ModifyTeacherComponent;
  let fixture: ComponentFixture<ModifyTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
