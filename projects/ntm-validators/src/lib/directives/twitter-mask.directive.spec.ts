import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';
import { TwitterMaskDirective } from './twitter-mask.directive';

@Component({
  template: `<input type="text" twitterMask>`
})
class TestTwitterMaskDirectiveComponent {
}

describe('PhoneMaskDirective', () => {
  let component: TestTwitterMaskDirectiveComponent;
  let fixture: ComponentFixture<TestTwitterMaskDirectiveComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TestTwitterMaskDirectiveComponent]
    }).createComponent(TestTwitterMaskDirectiveComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should return correct formated twitter user string', () => {
    const arr = [{
      input: "@user",
      expect: "@user",
    },
    {
      input: "@úser",
      expect: "@ser",
    },
    {
      input: "@úser_3",
      expect: "@ser_3",
    },
    {
      input: "@us-er",
      expect: "@user",
    }];
    let twitterMask = new TwitterMaskDirective(fixture);
    arr.forEach(arrage => {
      expect(twitterMask.createMask(arrage.input)).toBe(arrage.expect);
    })
  });
});
