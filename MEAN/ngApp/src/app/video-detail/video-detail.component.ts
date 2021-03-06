import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() video: any
  @Output() updateVideoEvent = new EventEmitter()
  @Output() deleteVideoEvent = new EventEmitter()

  editTitle:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video)
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.video)
  }

}
