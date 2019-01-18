import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('MenuStatus') MenuStatus: ElementRef;
  @ViewChild('mainMenu') mainMenu: ElementRef;
  @ViewChild('menuButtonWrapper') menuButtonWrapper: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  nextSlide() {
    $('.carousel').carousel('next');
  }

  prevSlide() {
    $('.carousel').carousel('prev');
  }

  toggleMenu() {
    this.MenuStatus.nativeElement.classList.toggle('hamburger-menu-button-close');
    this.mainMenu.nativeElement.classList.toggle('menuCardToggle');
  }
}
