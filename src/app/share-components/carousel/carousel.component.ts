import { CommonModule } from '@angular/common';
import { Component,Inject,OnInit, OnDestroy,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy  {
  images: string[] = [
    'assets/images/slides/slide_1.JPG',
    'assets/images/slides/slide_3.JPG',
    'assets/images/slides/slide_2.JPG'
  ];
  currentIndex: number = 0;
  intervalId?: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
