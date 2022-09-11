import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedtodosComponent } from './completedtodos.component';

describe('CompletedtodosComponent', () => {
  let component: CompletedtodosComponent;
  let fixture: ComponentFixture<CompletedtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedtodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
