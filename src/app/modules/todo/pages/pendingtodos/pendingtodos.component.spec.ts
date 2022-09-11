import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingtodosComponent } from './pendingtodos.component';

describe('PendingtodosComponent', () => {
  let component: PendingtodosComponent;
  let fixture: ComponentFixture<PendingtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingtodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
