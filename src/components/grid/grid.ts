/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, NgFor} from 'typings/app.exports';
import {IOrder} from '../../models/order';
import {Orders} from '../../services/orders';

@Component({
    selector: 'grid',
    appInjector: [Orders]
})
@View({
    templateUrl: 'src/components/grid/grid.html',
    directives: [NgFor]
})
export class Grid {
    orders: Array<IOrder>;

    constructor(ordersSvc: Orders) {
        ordersSvc.get()
            .subscribe(orders => this.orders = orders);
    }
}
