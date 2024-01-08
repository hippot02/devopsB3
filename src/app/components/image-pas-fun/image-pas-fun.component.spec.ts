import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePasFunComponent } from './image-pas-fun.component';

describe('ImagePasFunComponent', () => {
  let component: ImagePasFunComponent;
  let fixture: ComponentFixture<ImagePasFunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagePasFunComponent]
    });
    fixture = TestBed.createComponent(ImagePasFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
