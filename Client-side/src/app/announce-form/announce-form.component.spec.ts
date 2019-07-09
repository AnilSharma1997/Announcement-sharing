import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceFormComponent } from './announce-form.component';

describe('AnnounceFormComponent', () => {
  let component: AnnounceFormComponent;
  let fixture: ComponentFixture<AnnounceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
