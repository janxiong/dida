import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero,Contact,Role,InformType,Parm,JobType} from './hero';
@Component({
  selector: 'my-parm-joblist',
  templateUrl: 'app/joblist.html'
})
export class JobListParm implements OnInit {
	@Input()
	parm: Parm;
  role: Role;
  informtype:InformType;
  informtypes:InformType[]=[];
  jobtype:JobType;
  jobtypes:JobType[]=[];
  roles: Role[] = [];
  // SelectedName:string;
  // contacts: Contact[] = [];
  selectedRole :any = 0;
  selectedType :any = 0;

  // loadModules(){
  //   selectedRole={id: 2,  role: 'Team Leader'};
  // }

	constructor(private heroService: HeroService,private route: ActivatedRoute) {  }
	ngOnInit(): void {
      var me=this;

  		this.route.params.forEach((params: Params) => {
    		let id = params['id'];
    		this.heroService.getJobList(id)
    		.then(parm => 
          {
            this.parm = parm;
            // console.log(this.SelectedRole);
            // this.SelectedRole.role=this.contact.Role;
            // console.log(contact);
          });
  		});

      this.heroService.getRoles()
      .then(roles => {
        this.roles = roles;
      });

      this.heroService.getJobTypes()
      .then(jobtypes => {
        this.jobtypes = jobtypes;
      });

	}
  goBack(): void {
      window.history.back();
  }
  // updateRole(SelectedRole):void {
  //     // this.contact.Role=SelectedRole.role;
  //     // this.contact.role_id=SelectedRole.id;
  // }

  updateJobType(Selected:JobType):void {
      this.parm.priority=Selected.id;
  }
  // updateContactshift(SelectedContact):void {
  //     this.hero.shift=SelectedContact.name;
  //     this.hero.shiftcall=SelectedContact.cellphone;
  // }
  save(): void {
  this.heroService.updateJobList(this.parm)
    .then(this.goBack);
  }

}
