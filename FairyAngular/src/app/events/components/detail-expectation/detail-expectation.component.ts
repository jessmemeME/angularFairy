import { Component, Input } from '@angular/core';
import { ExpectationIdea } from '../../models/idea.interface';

@Component({
  selector: 'app-detail-expectation',
  templateUrl: './detail-expectation.component.html',
  styleUrl: './detail-expectation.component.css'
})
export class DetailExpectationComponent {
  @Input() ideas: ExpectationIdea[] | []=[];
  modalIsOpen = false;
  openModal() {
    this.modalIsOpen = true;
  }
  closeModal() {
    this.modalIsOpen = false;
  }  
}

