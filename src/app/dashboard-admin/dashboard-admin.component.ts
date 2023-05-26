import { Component, OnInit } from '@angular/core';
import { Badge } from '../models/Badge';
import { BadgeService } from '../badge.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  badge: Badge = new Badge();
  listBadges: Badge[];
  constructor(private bs:BadgeService) { }

  ngOnInit(): void {

  }

}
