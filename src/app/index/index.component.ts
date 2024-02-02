import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ ImageModule, AnimateOnScrollModule, DividerModule ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
