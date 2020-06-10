import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRecursosComponent } from './detalle-recursos.component';

describe('DetalleRecursosComponent', () => {
  let component: DetalleRecursosComponent;
  let fixture: ComponentFixture<DetalleRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
