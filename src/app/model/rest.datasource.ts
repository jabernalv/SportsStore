import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";
import { map } from "rxjs/operators";

const PROTOCOL = "http",
  PORT = 3500;

@Injectable()
export class RestDataSource{
  baseUrl: string = '';
  auth_token: string | null = null;

  constructor(private http: HttpClient){
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = `${PROTOCOL}://restapi.localhost/`;
  }

  getProducts(): Observable<Product[]>{
    let productsUrl = this.baseUrl + "product";
    return this.http.get<Product[]>(productsUrl);

  }

  saveOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  authenticate(user: string, pass: string): Observable<boolean>{
    let authenticationUrl = this.baseUrl + "user/authenticate";
    return this.http.post<any>(authenticationUrl, {
      username: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "product",
      product, this.getOptions());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}product/update/${product.id}`,
      product, this.getOptions());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}product/delete/${id}`,
      this.getOptions());
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,
      this.getOptions());
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,
      order, this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.auth_token}`
      })
    }
  }
}
