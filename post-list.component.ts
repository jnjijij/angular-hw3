import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    posts: any[];

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
            .subscribe(posts => this.posts = posts);
    }

    showPostDetails(post: any) {
        this.router.navigate(['/posts', post.id], { state: { post } });
    }
}
