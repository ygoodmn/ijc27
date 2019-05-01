import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugglerListComponent } from './juggler-list.component';

describe('JugglerListComponent', () => {
  let component: JugglerListComponent;
  let fixture: ComponentFixture<JugglerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugglerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugglerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
