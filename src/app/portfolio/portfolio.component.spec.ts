import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FilterComponent } from '../filter/filter.component';
import { PortfolioGridComponent } from '../portfolio-grid/portfolio-grid.component';
import { FooterComponent } from '../footer/footer.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PortfolioComponent, NavbarComponent, FilterComponent, PortfolioGridComponent, FooterComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
