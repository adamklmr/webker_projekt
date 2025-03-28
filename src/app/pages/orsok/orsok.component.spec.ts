import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrsokComponent } from './orsok.component';

describe('OrsokComponent', () => {
  let component: OrsokComponent;
  let fixture: ComponentFixture<OrsokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrsokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrsokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
