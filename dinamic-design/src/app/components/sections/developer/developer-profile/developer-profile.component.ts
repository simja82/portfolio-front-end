import { Component, OnInit } from '@angular/core';

//Datos del JSON
//import { POVService } from 'src/assets/services/pov.service';

//Models
import { Account } from 'src/app/models/account';
import { DeveloperProfile } from 'src/app/models/developer_profile';
import { Section } from 'src/app/models/section';

//Services
import { AccountService } from 'src/app/services/account.service';
import { DeveloperProfileService } from 'src/app/services/developer_profile.service';
import { SectionService } from 'src/app/services/section';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html'
})

export class DeveloperProfileComponent implements OnInit {

  /*
  //Array Developer Profile
  developer_profile : any = [];

  //Array Sections
  sections : any = [];
  */

  //Account Model
  account?: Account[];

  //Profile Model
  developer_profile?: DeveloperProfile[];

  //Sections Model
  section? : Section[];
  
  //Combinación de Modelos
  blendedData: any;

  /*
  //Inyección de Service con JSON
    constructor (private povService:POVService) {
    }
    
  //ngOnInit con JSON
    ngOnInit(): void { 
      //Almacenamiento de datos en JSON
      this.povService.getData().subscribe(data => {
        //Información a mostrar
        this.developer_profile = data.developer_profile;
        this.sections = data.sections;
      })
    }
  */

    //Inyección de Services
    constructor(private accountService:AccountService, private developerprofileService:DeveloperProfileService, private sectionService:SectionService) { }

    //Buscar Datos
    ngOnInit() {
      this.accountService.findAccount(1).subscribe((data) => {
        this.account = data;
        this.dataPooling();
      });
      this.developerprofileService.findDeveloperProfile(1).subscribe((data) => {
        this.developer_profile = data;
        this.dataPooling();
      });
      this.sectionService.findSection(1).subscribe((data) => {
        this.section = data;
        this.dataPooling();
      });
    }

    //Combinación de Datos
    dataPooling() {
      if (this.account && this.developer_profile && this.section) {
        // Combinación de datos
        this.blendedData = {
          account: this.account,
          developer_profile: this.developer_profile,
          section: this.section
        };
      }
    }

  }
  