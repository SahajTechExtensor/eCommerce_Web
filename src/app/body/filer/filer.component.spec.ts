import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerComponent } from './filer.component';

describe('FilerComponent', () => {
  let component: FilerComponent;
  let fixture: ComponentFixture<FilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
