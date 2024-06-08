import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {
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
      piecesJointes: this.fb.group({
        description: [''],
        fichier: [null]
      })
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formulaire.valid) {
      const formData = new FormData();
      // @ts-ignore
      formData.append('nom', this.formulaire.get('nom').value);
      // @ts-ignore
      formData.append('prenom', this.formulaire.get('prenom').value);
      // @ts-ignore
      formData.append('pieceIdentite', this.formulaire.get('pieceIdentite').value);
      // @ts-ignore
      formData.append('numeroPieceIdentite', this.formulaire.get('numeroPieceIdentite').value);
      // @ts-ignore
      formData.append('dateNaissance', this.formulaire.get('dateNaissance').value);
      // @ts-ignore
      formData.append('adresse', this.formulaire.get('adresse').value);
      // @ts-ignore
      formData.append('email', this.formulaire.get('email').value);
      // @ts-ignore
      formData.append('confirmationEmail', this.formulaire.get('confirmationEmail').value);
      // @ts-ignore
      formData.append('numeroTelephone', this.formulaire.get('numeroTelephone').value);
      // @ts-ignore
      formData.append('numeroImmatriculation', this.formulaire.get('numeroImmatriculation').value);
      // @ts-ignore
      formData.append('numeroPatente', this.formulaire.get('numeroPatente').value);
      // @ts-ignore
      formData.append('description', this.formulaire.get('piecesJointes').get('description').value);
      // @ts-ignore
      formData.append('fichier', this.formulaire.get('piecesJointes').get('fichier').value);

      // this.agentService.saveFormData(formData).subscribe(
      //   response => {
      //     console.log('Données envoyées avec succès', response);
      //   },
      //   error => {
      //     console.error('Erreur lors de l\'envoi des données', error);
      //   }
      // );
      console.log("Form Data:");
      const formDataObject = {};
      formData.forEach((value, key) => {
        // @ts-ignore
        formDataObject[key] = value;
      });
      console.log(formDataObject);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
