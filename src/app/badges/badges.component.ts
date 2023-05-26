import { Component, OnInit } from '@angular/core';
import { Badge } from '../models/Badge';
import { BadgeService } from '../badge.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  badge: Badge = new Badge();
  listBadges: Badge[];
  constructor(private bs:BadgeService) { }

  ngOnInit(): void {
    this.bs.getBadges().subscribe(res=>this.listBadges=res);
  }

}
