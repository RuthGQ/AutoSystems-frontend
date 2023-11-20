import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEmpladoComponent } from './filtro-empleado.component';

describe('FiltroEmpleadoComponent', () => {
  let component: FiltroEmpladoComponent;
  let fixture: ComponentFixture<FiltroEmpladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroEmpladoComponent]
    });
    fixture = TestBed.createComponent(FiltroEmpladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});