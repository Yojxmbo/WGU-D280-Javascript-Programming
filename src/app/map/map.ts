import { AfterViewInit, Component, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class MapComponent implements AfterViewInit {
  @Input() countryData: any;
  @Output() countrySelected = new EventEmitter<string>();

  private selectedCountryId: string | null = null;
  private lastClickedPath: SVGPathElement | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const paths = this.elementRef.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      this.renderer.listen(path, 'click', (event) => this.onCountryClick(event));
      this.renderer.listen(path, 'mouseenter', (event) => this.onMouseEnter(event));
      this.renderer.listen(path, 'mouseleave', (event) => this.onMouseLeave(event));
    });
  }

  onMouseEnter(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    if (target.id && target.id !== this.selectedCountryId) {
      this.renderer.setStyle(target, 'fill', '#999');
    }
  }

  onMouseLeave(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    if (target.id && target.id !== this.selectedCountryId) {
      this.renderer.setStyle(target, 'fill', 'black');
    }
  }

  onCountryClick(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    if (this.lastClickedPath) {
      this.renderer.setStyle(this.lastClickedPath, 'fill', 'black');
    }

    if (target.id) {
      this.renderer.setStyle(target, 'fill', '#007bff');
      this.selectedCountryId = target.id;
      this.lastClickedPath = target;
      this.countrySelected.emit(target.id);
    }
  }
}