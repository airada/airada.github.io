import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProjectDetailsComponent } from './project-details.component';
import { FooterComponent } from '../footer/footer.component';


describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProjectDetailsComponent, NavbarComponent, FooterComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
