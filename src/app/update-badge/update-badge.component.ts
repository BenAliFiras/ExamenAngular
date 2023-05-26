import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '../badge.service';
import { Badge } from '../models/Badge';

@Component({
  selector: 'app-update-badge',
  templateUrl: './update-badge.component.html',
  styleUrls: ['./update-badge.component.css']
})
export class UpdateBadgeComponent implements OnInit {

  badge: Badge = new Badge();
  listBadges: Badge[];
  constructor(private ac:ActivatedRoute, private bs:BadgeService) { }

  ngOnInit(): void {
    let id= this.ac.snapshot.params['id'];
    this.bs.getBadgeById(id).subscribe(res=> this.badge = res);
  }

}
