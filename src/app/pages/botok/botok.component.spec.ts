import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotokComponent } from './botok.component';

describe('BotokComponent', () => {
  let component: BotokComponent;
  let fixture: ComponentFixture<BotokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
