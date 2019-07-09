import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';

import {AnnouncementService} from './services/announcement.service';

import {AnnouncementComponent} from './announcement/announcement.component';
import {HeaderComponent} from './header/header.component';
import {AnnounceFormComponent} from './announce-form/announce-form.component';
import {LoginComponent} from './login/login.component';
import {UpdateAnnounceComponent} from './update-announce/update-announce.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@NgModule({
	declarations:
		[
			AppComponent,

			AnnouncementComponent,
			HeaderComponent,
			AnnounceFormComponent,
			LoginComponent,
			UpdateAnnounceComponent,
			ConfirmDialogComponent
		],
	imports:
		[
			BrowserAnimationsModule,
			BrowserModule,
			AppRoutingModule,
			MatToolbarModule,
			MatCardModule,
			MatListModule,
			MatButtonModule,
			MatDividerModule,
			MatCheckboxModule,
			MatSelectModule,
			MatDialogModule,
			MatIconModule,
			MatInputModule,
			MatExpansionModule,
			FormsModule,
			ReactiveFormsModule,
			HttpClientModule,
			ToastrModule.forRoot(),
			NgxPaginationModule,
			MatPaginatorModule,
			MatTableModule,
			CdkTableModule
		],
	providers: [AnnouncementService],
	entryComponents: [AnnounceFormComponent, UpdateAnnounceComponent, LoginComponent, ConfirmDialogComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
