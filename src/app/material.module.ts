import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule
];


@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {
}
