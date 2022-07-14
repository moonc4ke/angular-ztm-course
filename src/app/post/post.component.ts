import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor() {
    console.log('constructor', this.postImg);
  }

  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('ngOnInit', this.postImg);
    
  }
}
