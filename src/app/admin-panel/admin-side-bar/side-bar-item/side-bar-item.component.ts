import { Component, inject, Input } from '@angular/core';
import { AdminIconComponent } from '../../icons/admin-icon/admin-icon.component';
import { UserIconComponent } from '../../icons/user-icon/user-icon.component';
import { ModuleIconComponent } from '../../icons/module-icon/module-icon.component';
import { CourseIconComponent } from '../../icons/course-icon/course-icon.component';
import { UnitIconComponent } from '../../icons/unit-icon/unit-icon.component';
import { SessionIconComponent } from '../../icons/session-icon/session-icon.component';
import { DashboardIconComponent } from '../../icons/dashboard-icon/dashboard-icon.component';
import { CostIconComponent } from '../../icons/cost-icon/cost-icon.component';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-side-bar-item',
  standalone: true,
  imports: [
    AdminIconComponent,
    UserIconComponent,
    ModuleIconComponent,
    CourseIconComponent,
    UnitIconComponent,
    SessionIconComponent,
    DashboardIconComponent,
    CostIconComponent,
  ],
  templateUrl: './side-bar-item.component.html',
  styleUrl: './side-bar-item.component.css',
})
export class SideBarItemComponent {
  @Input() name: string = '';
  @Input() getEndpoint: string = '';
  @Input() postEndpoint: string = '';

  adminService: AdminService = inject(AdminService);

  ngOnInit(): void {
    if (this.getEndpoint == '/userprofile/list') {
      this.adminService.setGetEndpoint(this.getEndpoint);
      this.adminService.setPostEndpoint(this.postEndpoint);
      this.adminService.getDataList();
    }
  }

  onClick() {
    this.adminService.setGetEndpoint(this.getEndpoint);
    this.adminService.setPostEndpoint(this.postEndpoint);
    this.adminService.getDataList();
  }
}
