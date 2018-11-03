import { PeopleRoutingModule } from './people-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [CommonModule, PeopleRoutingModule],
  declarations: [PersonDetailComponent, PeopleListComponent],
  providers: [PeopleService]
})
export class PeopleModule {}
