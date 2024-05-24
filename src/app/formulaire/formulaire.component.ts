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
      console.log(this.formulaire.value);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
