import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMydataComponent } from './create-mydata.component';

describe('CreateMydataComponent', () => {
  let component: CreateMydataComponent;
  let fixture: ComponentFixture<CreateMydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
