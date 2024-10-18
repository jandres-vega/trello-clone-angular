import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

interface Product {
  id: string,
  title: string,
  price:number,
  images: string[]
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    NavbarComponent,
    NgForOf,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf
  ],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  products:Product[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data)=>{
      console.log(data)
      this.products = data
    })
  }
}
