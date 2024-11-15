import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonFooter,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  calculator,
  pencil,
  person,
  discOutline,
  callOutline,
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'Communities.page.html',
  styleUrls: ['Communities.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonTabs,
    IonTabBar,
    IonTabButton,
    RouterLink,
    IonButton,
    IonText,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCardTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class CommunitiesPage {
  constructor() {
    addIcons({ discOutline, callOutline, person, pencil, calculator });
  }
}
