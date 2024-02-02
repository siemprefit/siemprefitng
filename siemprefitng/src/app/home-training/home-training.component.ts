import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home-training',
  standalone: true,
  imports: [ AnimateOnScrollModule, DividerModule ],
  templateUrl: './home-training.component.html',
  styleUrl: './home-training.component.css'
})
export class HomeTrainingComponent {

}
