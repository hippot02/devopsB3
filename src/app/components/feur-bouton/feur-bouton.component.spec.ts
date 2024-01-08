import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeurBoutonComponent } from './feur-bouton.component';

describe('FeurBoutonComponent', () => {
  let component: FeurBoutonComponent;
  let fixture: ComponentFixture<FeurBoutonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeurBoutonComponent]
    });
    fixture = TestBed.createComponent(FeurBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
