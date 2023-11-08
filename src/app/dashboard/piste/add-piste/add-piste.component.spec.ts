import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPisteComponent } from './add-piste.component';

describe('AddPisteComponent', () => {
  let component: AddPisteComponent;
  let fixture: ComponentFixture<AddPisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
