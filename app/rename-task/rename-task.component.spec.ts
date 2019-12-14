import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameTaskComponent } from './rename-task.component';

describe('RenameTaskComponent', () => {
  let component: RenameTaskComponent;
  let fixture: ComponentFixture<RenameTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
