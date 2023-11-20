import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroClienteComponent } from './filtro-cliente.component';

describe('FiltroClienteComponent', () => {
  let component: FiltroClienteComponent;
  let fixture: ComponentFixture<FiltroClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroClienteComponent]
    });
    fixture = TestBed.createComponent(FiltroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
