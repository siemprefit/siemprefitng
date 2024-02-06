import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import usersList from '../assets/users/users.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabMenuModule, ButtonModule, DialogModule, InputTextModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("loged") == "true"){
      this.loged = true;
    }

    if(sessionStorage.getItem("rol") == "Admin"){
      this.admin = true;
    }
  }

  title = 'siemprefit';
  visible: boolean = false;
  users: any = usersList;

  cedula!: string;
  token!: string;

  loged!: boolean;
  admin!: boolean;

  showLogin(){
    this.visible = true;
  }

  closeLogin(){
    this.visible = false;
  }

  login(){
    this.visible = false;
    sessionStorage.clear();
    for(const us of this.users){
      if(us.cedula == this.cedula && us.token == this.token){
        sessionStorage.setItem("loged", "true");
        sessionStorage.setItem("rol", us.rol);
        break;
      }
    } 
    this.router.navigate(['']);
    window.location.reload()
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
    window.location.reload()
  }
}
