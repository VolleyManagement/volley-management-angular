import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VmComponent } from './vm.component';

describe('VmComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        VmComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(VmComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Volley Management'`, () => {
    const fixture = TestBed.createComponent(VmComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Volley Management');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(VmComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Volley Management app is running!');
  });
});
