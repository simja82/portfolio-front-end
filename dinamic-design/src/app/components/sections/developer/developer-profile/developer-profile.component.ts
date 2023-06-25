import { Component, OnInit } from '@angular/core';

//Models
import { Account } from 'src/app/models/account';
import { DeveloperProfile } from 'src/app/models/developer_profile';

//Services
import { AccountService } from 'src/app/services/account.service';
import { DeveloperProfileService } from 'src/app/services/developer_profile.service';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html'
})

export class DeveloperProfileComponent implements OnInit {

  //Profile Model
  developer_profile: DeveloperProfile = new DeveloperProfile ("", "", "", "", "", "", "", "", "");
  
    //Inyección de Services
    constructor(private accountService:AccountService, private developerprofileService:DeveloperProfileService) { }

    //Traer Datos
    ngOnInit() {
      this.loadProfile();
    }

    loadProfile(){
      this.developerprofileService.findDeveloperProfile(1).subscribe({
          next: (data) => {
            this.developer_profile = data;
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });        
    }

  }
  