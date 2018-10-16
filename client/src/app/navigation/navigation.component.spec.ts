import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavComponent } from './mat-nav.component';

describe('MatNavComponent', () => {
  let component: MatNavComponent;
  let fixture: ComponentFixture<MatNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MatNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
