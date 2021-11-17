import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SingleRecipeComponent } from './recipe-list/single-recipe/single-recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddRecipeComponent } from './recipe-list/add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRecipeComponent } from './recipe-list/update-recipe/update-recipe.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    SingleRecipeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AddRecipeComponent,
    UpdateRecipeComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
