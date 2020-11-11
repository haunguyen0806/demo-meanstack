import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title:'Fist Post', content:'This is the first post\'s'},
  //   {title:'Second Post', content:'This is the second post\'s'},
  //   {title:'Third Post', content:'This is the third post\'s'}
  // ]
  @Input() posts: Post[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}
