import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAppBarComponent } from './header-app-bar.component';

describe('HeaderAppBarComponent', () => {
  let component: HeaderAppBarComponent;
  let fixture: ComponentFixture<HeaderAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
