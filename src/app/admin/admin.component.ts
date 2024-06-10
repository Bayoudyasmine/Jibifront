import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Agent } from '../model/agent.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  agents: Agent[] = [];
  selectedAgent: Agent | null = null;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents(): void {
    this.adminService.getAgents().subscribe(
      (data: Agent[]) => {
        this.agents = data;
      },
      error => {
        console.error('Error fetching agents', error);
      }
    );
  }

  addAgent(): void {
      this.router.navigate(['/formulaire']);
    }

  deleteAgent(id: number | undefined): void {
    this.agents = this.agents.filter(agent => agent.id !== id);
    this.adminService.deleteAgent(id).subscribe(
      () => {
        // Agent deleted successfully
      },
      error => {
        console.error('Error deleting agent', error);
      }
    );
  }

  viewDetails(agentId: number | undefined): void {
    this.selectedAgent = this.agents.find(agent => agent.id === agentId) || null;
  }

  closeDetails(): void {
    this.selectedAgent = null;
  }
}
