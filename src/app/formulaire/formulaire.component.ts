import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AgentService} from "../service/agent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder,private agentService:AgentService,private router:Router) {
    this.formulaire = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      pieceIdentite: ['C.I.N', Validators.required],
      numeroPieceIdentite: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmationEmail: ['', [Validators.required, Validators.email]],
      numeroTelephone: ['', Validators.required],
      numeroImmatriculation: ['', Validators.required],
      numeroPatente: ['', Validators.required],
      description: [''],
      piecesJointes: this.fb.group({
        fichierRecto: [null],
        fichierVerso: [null]
      })
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any, fileType: string): void {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    if (fileType === 'recto') {
      // @ts-ignore
      this.formulaire.get('piecesJointes').patchValue({ fichierRecto: file });
    } else if (fileType === 'verso') {
      // @ts-ignore
      this.formulaire.get('piecesJointes').patchValue({ fichierVerso: file });
    }
  }

  onSubmit(): void {
    if (this.formulaire.valid) {
      const formData = new FormData();
      // @ts-ignore
      formData.append('lastname', this.formulaire.get('nom').value);
      // @ts-ignore
      formData.append('firstname', this.formulaire.get('prenom').value);
      // @ts-ignore
      formData.append('pieceIdentite', this.formulaire.get('pieceIdentite').value);
      // @ts-ignore
      formData.append('numCin', this.formulaire.get('numeroPieceIdentite').value);
      // @ts-ignore
      formData.append('birthdate', this.formulaire.get('dateNaissance').value);
      // @ts-ignore
      formData.append('address', this.formulaire.get('adresse').value);
      // @ts-ignore
      formData.append('email', this.formulaire.get('email').value);
      // @ts-ignore
      formData.append('emailConfirmation', this.formulaire.get('confirmationEmail').value);
      // @ts-ignore
      formData.append('phonenumber', this.formulaire.get('numeroTelephone').value);
      // @ts-ignore
      formData.append('numRegCom', this.formulaire.get('numeroImmatriculation').value);
      // @ts-ignore
      formData.append('numLicence', this.formulaire.get('numeroPatente').value);
      // @ts-ignore
      formData.append('description', this.formulaire.get('description').value);

      // @ts-ignore
      const fileRecto = this.formulaire.get('piecesJointes').get('fichierRecto').value;
      if (fileRecto) {
        formData.append('cinRecto', fileRecto);
      }

      // @ts-ignore
      const fileVerso = this.formulaire.get('piecesJointes').get('fichierVerso').value;
      if (fileVerso) {
        formData.append('cinVerso', fileVerso);
      }

      this.agentService.subscribeAgent(formData).subscribe(
        response => {
          console.log('Données envoyées avec succès', response);
          this.router.navigate(['/creditors-list']);
        },
        error => {
          console.error('Erreur lors de l\'envoi des données', error);
        }
      );

      // console.log("Form Data:");
      // const formDataObject = {};
      // formData.forEach((value, key) => {
      //   // @ts-ignore
      //   formDataObject[key] = value;
      // });
      // console.log(formDataObject);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
