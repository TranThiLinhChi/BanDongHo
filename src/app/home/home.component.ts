import { Component, OnInit,Injector } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from './../lib/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  list_item: any;
  sp_new:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/product/get-new'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.sp_new= res[0];
    }, err => {});
     Observable.combineLatest(this._api.get('api/product/get-all'))
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          this.list_item = res[0];
          console.log(this.list_item);
          setTimeout(() => {
            this.loadScripts();
          });
        },
        (err) => {}
      );
  }
    addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
