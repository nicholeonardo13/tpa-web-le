import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavareaComponent } from './navarea.component';

describe('NavareaComponent', () => {
  let component: NavareaComponent;
  let fixture: ComponentFixture<NavareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
