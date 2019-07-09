import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AnnounceFormComponent } from '../announce-form/announce-form.component';
import { UpdateAnnounceComponent } from '../update-announce/update-announce.component';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../models/announcement.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private announcementService: AnnouncementService,
    private tostr: ToastrService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      announcement: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.refreshAnnouncementList();
  }

  openAnnounceForm() {
    this.dialog.open(AnnounceFormComponent, { width: '500px', height: '420px' });
  }

  openUpdateAnnounceForm() {
    this.dialog.open(UpdateAnnounceComponent, { width: '500px', height: '420px' });
  }

  refreshAnnouncementList() {
    this.announcementService.getAnnouncementList().subscribe((res) => {
      this.announcementService.announcements = res as Announcement[];
    }, err => {
      console.log(err);
      this.tostr.error('Error in Retriving Announcements');
    });
  }

  onDelete(announcement) {
    this.announcementService.selectedAnnouncement = announcement;
    this.openConfirmDialog();
  }

  onEdit(announcement) {
    this.announcementService.selectedAnnouncement = announcement;
    this.openUpdateAnnounceForm();
  }

  openConfirmDialog() {
    this.dialog.open(ConfirmDialogComponent, {
      width: '390px', panelClass: 'confirm-dialog-container',
      disableClose: true
    })
  }

  pageChange(newPage: number) {
    this.router.navigate(['/announcements'], { queryParams: { page: newPage } });
  }
}