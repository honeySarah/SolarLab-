import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { AboutComponent } from "./pages/about/about.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";


const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'catalog', component:CatalogComponent},
    {path: 'home', component:HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule],
})

export class AppRoutingModule{}