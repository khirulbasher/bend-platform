import { Component, OnInit } from '@angular/core';
import {AppUtilService, BendFlexibleCompilerService, ConsoleService, UserCrudData} from 'bend-core';
import {BendAbstractListViewComponent, BendToastService} from 'bend-core-ui';
import {BmuUserCrudService} from '../../../service/bmu-user-crud.service';
import {bendUserUiModel} from '../crud-ui-model';

@Component({
  selector: 'main-bmu-user-view',
  templateUrl: '../../bmu-abstract-list-view.component.html'
})
export class BmuUserViewComponent extends BendAbstractListViewComponent<UserCrudData, UserCrudData> implements OnInit {

  constructor(
    crudService: BmuUserCrudService,
    toastService: BendToastService,
    consoleService: ConsoleService,
    appUtilService: AppUtilService,
    compiler: BendFlexibleCompilerService
  ) {
    super(crudService, toastService, consoleService, appUtilService, compiler, bendUserUiModel);
    this.pageSize = 20;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
