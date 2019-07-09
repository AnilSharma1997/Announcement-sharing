import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AnnouncementService} from '../services/announcement.service';
import {Announcement} from '../models/announcement.model';
import {MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({
	selector: 'app-update-announce',
	templateUrl: './update-announce.component.html',
	styleUrls: ['./update-announce.component.css']
})
export class UpdateAnnounceComponent implements OnInit {
	today = new Date();
	form: FormGroup;
	ID: string;

	constructor(
		private announcementService: AnnouncementService,
		private tostr: ToastrService,
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<UpdateAnnounceComponent>
	) {
		this.form = this.fb.group({
			announcement: ['', Validators.required]
		});
	}

	FormGroup = new FormGroup({
		_id: new FormControl(null),
		announcement: new FormControl(''),
		date: new FormControl(''),
		__v: new FormControl('1')
	});

	populateForm(announcement1) {
		this.form.patchValue({
			announcement: announcement1.announcement
		});
	}

	ngOnInit() {
		this.populateForm(this.announcementService.selectedAnnouncement);
		this.ID = this.announcementService.selectedAnnouncement._id;
	}

	closeAnnounce() {
		this.resetForm();
		this.dialogRef.close();
	}

	updateAnnounce() {
		const val = this.form.value;
		val._id = this.announcementService.selectedAnnouncement._id;
		if (val.announcement) {
			this.announcementService.putAnnouncement(val).subscribe(
				(res) => {
					this.refreshAnnouncementList();
					this.resetForm();
					this.tostr.success('Updated Successfully');
				},
				(err) => {
					console.log(err);
					this.tostr.error('Error in Announcement Update');
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
