import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenyekComponent } from './esemenyek.component';

describe('EsemenyekComponent', () => {
  let component: EsemenyekComponent;
  let fixture: ComponentFixture<EsemenyekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsemenyekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsemenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
