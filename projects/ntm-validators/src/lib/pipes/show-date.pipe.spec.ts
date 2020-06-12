import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';

@Component({
  template: '<span>{{value | showDate}}</span>',
})
class ShowDatePipeModel {
  public value;
}

describe('ShowDatePipe', () => {
  let component: ShowDatePipeModel;
  let fixture: ComponentFixture<ShowDatePipeModel>;
  let el;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ShowDatePipeModel],
    }).createComponent(ShowDatePipeModel);
    component = fixture.componentInstance;
  });

  it('should apply pipe for date', () => {
    const arr = {
      input: '2000-12-08',
      expect: '08/12/2000',
    };

    component.value = arr.input;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(el.innerHTML).toEqual(arr.expect);
  });

  it('should not apply pipe for not valid date', () => {
    const arr = {
      input: '20001208',
      expect: '08/12/2000',
    };

    component.value = arr.input;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(el.innerHTML).not.toEqual(arr.expect);
  });
});
