import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertListComponent } from './desert-list.component';

describe('DesertListComponent', () => {
  let component: DesertListComponent;
  let fixture: ComponentFixture<DesertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
