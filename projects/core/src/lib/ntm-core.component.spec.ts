import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtmCoreComponent } from './ntm-core.component';

describe('NtmCoreComponent', () => {
  let component: NtmCoreComponent;
  let fixture: ComponentFixture<NtmCoreComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [NtmCoreComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtmCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
