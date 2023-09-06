import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    console.log("====================test")
  }

  openDrawer() {
    // Utilisez le service de tiroir ou un drapeau pour ouvrir le tiroir ici
    // Par exemple, vous pouvez utiliser un ViewChild pour accéder au mat-drawer
    // et définir sa propriété opened à true.
  }

}
