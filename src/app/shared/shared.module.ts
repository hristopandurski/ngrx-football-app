import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTileComponent } from './components/player-tile/player-tile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayerTileComponent,
    SidebarComponent
  ],
  exports: [
    PlayerTileComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
