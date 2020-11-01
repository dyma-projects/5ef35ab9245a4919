import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public titre: string = "Projet 1";
  public txt: string = "";

  constructor() {
    this.txt = "Bienvenue sur la page du projet 1 Angular de Dyma..";
  }

  ngOnInit(): void {}

  changerTxt(): void {
    this.txt = "Trop cool le texte change !";
  }
}
