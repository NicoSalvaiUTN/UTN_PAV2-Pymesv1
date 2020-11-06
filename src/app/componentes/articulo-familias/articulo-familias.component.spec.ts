import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloFamiliasComponent } from './articulo-familias.component';

describe('ArticuloFamiliasComponent', () => {
  let component: ArticuloFamiliasComponent;
  let fixture: ComponentFixture<ArticuloFamiliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloFamiliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloFamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
