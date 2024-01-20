import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloListaComponent } from './jelo-lista.component';

describe('JeloListaComponent', () => {
  let component: JeloListaComponent;
  let fixture: ComponentFixture<JeloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeloListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
