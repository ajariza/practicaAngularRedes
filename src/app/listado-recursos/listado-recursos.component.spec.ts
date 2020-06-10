import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecursosComponent } from './listado-recursos.component';

describe('ListadoRecursosComponent', () => {
  let component: ListadoRecursosComponent;
  let fixture: ComponentFixture<ListadoRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
