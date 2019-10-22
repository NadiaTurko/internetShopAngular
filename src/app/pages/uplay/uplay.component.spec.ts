import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplayComponent } from './uplay.component';

describe('UplayComponent', () => {
  let component: UplayComponent;
  let fixture: ComponentFixture<UplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
