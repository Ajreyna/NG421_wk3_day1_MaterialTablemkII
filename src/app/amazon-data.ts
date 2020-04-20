import {IAmazonProducts} from '../app/interfaces/iamazon-products';
import { APP_BOOTSTRAP_LISTENER } from '@angular/core';

const DATA: IAmazonProducts[] =[
 {
    id: 1,
    name: 'hot sauce',
    price: 3.99,
    inStock: true
},
{
    id: 2,
    name: 'watch battery',
    price: 5.35,
    inStock: true
},
{
    id : 3,
    name: 'floor cleaner',
    price: 1.75,
    inStock: false
}

];

export {DATA};