import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Agent } from '../model/agent.model';

// @ts-ignore
@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent {
  @Input() agent: Agent | null = null;
  @Output() close = new EventEmitter<void>();

  closeDetails(): void {
    this.close.emit();
  }
}
