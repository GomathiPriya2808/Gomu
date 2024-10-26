import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon,IonTabs,IonTabBar,IonFooter,IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton } from '@ionic/angular/standalone';
import {
  calculator,
  pencil,
  person,
  discOutline,
  callOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
  standalone: true,
  imports: [RouterLink,IonIcon,IonTabs,IonTabBar,IonFooter,IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CallsPage  {

  constructor() {
        addIcons({ discOutline, callOutline, person, pencil, calculator });

  }


}
