import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopictableComponent } from './topictable.component';

describe('TopictableComponent', () => {
  let component: TopictableComponent;
  let fixture: ComponentFixture<TopictableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopictableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopictableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
