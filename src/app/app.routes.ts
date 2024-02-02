import { Routes } from '@angular/router';
import { HomeTrainingComponent } from './home-training/home-training.component';
import { HealFoodComponent } from './heal-food/heal-food.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'home-training', component: HomeTrainingComponent },
    { path: 'heal-food', component: HealFoodComponent }
];
