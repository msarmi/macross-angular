import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.scss']
})
export class UserTimelineComponent implements OnInit {
  @Input() isMale: any = true;
  @Input() age: number = 30;
  @Input() height: number = 175;
  @Input() weight: number = 74;
  constructor() { }

  ngOnInit() {
    
  }

}
