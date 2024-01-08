import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFunComponent } from './image-fun.component';

describe('ImageFunComponent', () => {
  let component: ImageFunComponent;
  let fixture: ComponentFixture<ImageFunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFunComponent]
    });
    fixture = TestBed.createComponent(ImageFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
