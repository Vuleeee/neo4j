import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloFormComponent } from './jelo-form.component';

describe('JeloFormComponent', () => {
  let component: JeloFormComponent;
  let fixture: ComponentFixture<JeloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeloFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
