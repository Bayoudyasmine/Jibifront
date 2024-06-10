import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../service/agent.service';
import { ClientDTO } from '../model/ClientDTO.model';


@Component({
  selector: 'app-agent-component',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  clients: ClientDTO[] = [];
  showCreatePaymentAccount: boolean = false;
  selectedClient: ClientDTO | null = null;

  constructor(private agentService: AgentService, private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.agentService.getClients().subscribe(
      (data: ClientDTO[]) => {
        this.clients = data;
      },
      error => {
        console.error('Error fetching clients', error);
      }
    );
  }

  addClient(): void {
    this.router.navigate(['/create-payment-account']);
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter(client => client.id !== id);
    this.agentService.deleteClient(id).subscribe(
      () => {
      },
      error => {
        console.error('Error deleting client', error);
      }
    );
  }

  viewDetails(client: ClientDTO): void {
    this.selectedClient = client;
  }

  closeDetails(): void {
    this.selectedClient = null;
  }

  toggleCreatePaymentAccount(show: boolean): void {
    this.showCreatePaymentAccount = show;
  }

  shouldShowOverlay(): boolean {
    return this.showCreatePaymentAccount || this.selectedClient !== null;
  }
}
