import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLoginPageComponent } from './material-login-page.component';

describe('MaterialLoginPageComponent', () => {
  let component: MaterialLoginPageComponent;
  let fixture: ComponentFixture<MaterialLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
