import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-heal-food',
  standalone: true,
  imports: [ ButtonModule, DividerModule, ImageModule, AnimateOnScrollModule, TabViewModule ],
  templateUrl: './heal-food.component.html',
  styleUrl: './heal-food.component.css'
})
export class HealFoodComponent {

}
