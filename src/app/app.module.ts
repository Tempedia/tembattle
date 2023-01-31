import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedTeamPageComponent } from './page/shared-team-page/shared-team-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ApiInterceptor } from './service/api.interceptor';
import { SnackbarMessageComponent } from './components/base/snackbar-message/snackbar-message.component';
import { TeamTemtemItemComponent } from './components/team-temtem-item/team-temtem-item.component';
import { ImageComponent } from './components/base/image/image.component';
import { TemtemPortraitComponent } from './components/temtem-portrait/temtem-portrait.component';
import { TemtemTypeIconComponent } from './components/temtem-type-icon/temtem-type-icon.component';
import { TemtemTraitLabelComponent } from './components/temtem-trait-label/temtem-trait-label.component';
import { TemtemTechniqueListComponent } from './components/temtem-technique-list/temtem-technique-list.component';
import { TemtemTechniquePriorityPainterComponent } from './components/temtem-technique-priority-painter/temtem-technique-priority-painter.component';
import { TemtemTechniqueDamageComponent } from './components/temtem-technique-damage/temtem-technique-damage.component';
import { TemtemTechniqueItemComponent } from './components/temtem-technique-item/temtem-technique-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    SharedTeamPageComponent,
    NotFoundPageComponent,
    SnackbarMessageComponent,
    TeamTemtemItemComponent,
    ImageComponent,
    TemtemPortraitComponent,
    TemtemTypeIconComponent,
    TemtemTraitLabelComponent,
    TemtemTechniqueListComponent,
    TemtemTechniquePriorityPainterComponent,
    TemtemTechniqueDamageComponent,
    TemtemTechniqueItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
