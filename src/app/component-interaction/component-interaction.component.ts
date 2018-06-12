import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentData') public aliasName;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('This is from Child Component');
  }
}
