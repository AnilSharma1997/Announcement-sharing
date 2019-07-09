import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Announcement } from '../models/announcement.model';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private announcementService: AnnouncementService,
    private tostr: ToastrService
  ) { }

  ngOnInit() {
  }

  confirm() {
      const id_announcement = this.announcementService.selectedAnnouncement._id;

      this.announcementService.deleteAnnouncement(id_announcement).subscribe((res) => {
        this.refreshAnnouncementList();
        this.tostr.success('Announcement Deleted successfully');
      }, err => {
        console.log(err);
        this.tostr.error('Error in Announcement Deletion');
      });
      this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  refreshAnnouncementList() {
    this.announcementService.getAnnouncementList().subscribe((res) => {
      this.announcementService.announcements = res as Announcement[];
    });
  }
}
