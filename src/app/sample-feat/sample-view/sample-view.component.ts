import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalService } from 'src/app/app-common/modal/modal.service';

@Component({
  selector: 'baa-sample-view',
  templateUrl: './sample-view.component.html',
  styleUrls: ['./sample-view.component.css']
})
export class SampleViewComponent implements OnInit {
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

}
