import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTileComponent } from './components/player-tile/player-tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayerTileComponent
  ],
  exports: [
    PlayerTileComponent
  ]
})
export class SharedModule { }
