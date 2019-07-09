import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AnnouncementService} from '../services/announcement.service';
import {Announcement} from '../models/announcement.model';
import {MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({
	selector: 'app-announce-form',
	templateUrl: './announce-form.component.html',
	styleUrls: ['./announce-form.component.css']
})
export class AnnounceFormComponent implements OnInit {
	today = new Date();
	form: FormGroup;

	constructor(
		private announcementService: AnnouncementService,
		private tostr: ToastrService,
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<AnnounceFormComponent>
	) {
		this.form = this.fb.group({
			announcement: ['', Validators.required]
		});
	}

	ngOnInit() {}

	closeAnnounce() {
		this.resetForm();
		this.dialogRef.close();
	}

	addAnnounce() {
		const val = this.form.value;
		console.log('val:' + val);
		// To add new announcement

		val.date = this.today;
		if (val.announcement) {
			this.announcementService.postAnnouncement(val).subscribe(
				(res) => {
					this.tostr.success('Added Successfully');
					this.refreshAnnouncementList();
				},
				(err) => {
					console.log(err);
					this.tostr.error('Error in Announcement Save');
				}
			);
			this.dialogRef.close();
		}
		else {
			this.tostr.error('Please Enter Announcement');
		}
	}

	refreshAnnouncementList() {
		this.announcementService.getAnnouncementList().subscribe((res) => {
			this.announcementService.announcements = res as Announcement[];
		});
	}

	resetForm() {
		this.announcementService.selectedAnnouncement = {
			_id: '',
			announcement: '',
			modified_date: null
		};
	}
}
