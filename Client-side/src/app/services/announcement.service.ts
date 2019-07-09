import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Announcement } from '../models/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  selectedAnnouncement: Announcement;
  announcements: Announcement[];
  readonly baseURL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  postAnnouncement(announce: Announcement) {
    return this.http.post(this.baseURL + 'announcements', announce);

  }

  getAnnouncementList() {
    return this.http.get(this.baseURL + 'announcements');
  }

  deleteAnnouncement(_id: string) {
    return this.http.delete(this.baseURL + 'announcements' + `/${_id}`);
  }

  putAnnouncement(announcement: Announcement) {
    return this.http.put(this.baseURL + 'announcements' + `/${announcement._id}`, announcement);
  }

}