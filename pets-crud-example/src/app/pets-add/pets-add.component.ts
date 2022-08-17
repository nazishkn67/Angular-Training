import { PetsService } from '../pets.service';
import { Pets } from '../pets';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-add',
  templateUrl: './pets-add.component.html',
  styleUrls: ['./pets-add.component.css']
})
export class PetsAddComponent implements OnInit {

  pets: Pets = new Pets();
  submitted = false;
  id:number=300;

  constructor(private petsService: PetsService,
    private router: Router) { }

  ngOnInit() {
  }

  newPets(): void {
    this.submitted = false;
    this.pets = new Pets();
    this.id =+ 1 ;
  }

  save() {
    this.petsService
    .PetsAdd(this.pets).subscribe((data: any) => {
      console.log(data)
      this.pets = new Pets();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }
  
  onSubmit() {
    console.log(this.pets);
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/pets']);
  }
}