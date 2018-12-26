import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenDiaComponent } from './buen-dia.component';

describe('BuenDiaComponent', () => {
  let component: BuenDiaComponent;
  let fixture: ComponentFixture<BuenDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuenDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
