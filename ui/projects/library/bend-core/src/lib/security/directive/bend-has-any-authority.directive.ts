import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {BendAuthenticationService} from '../auth/bend-authentication-service';

@Directive({
  selector: '[bendHasAnyAuthority]'
})
export class BendHasAnyAuthorityDirective {
  private authorities: string[];

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private authenticationService: BendAuthenticationService
  ) {
  }

  @Input()
  set bendHasAnyAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value] : value;
    this.updateView();
    this.authenticationService.getAuthenticationState().subscribe(info => this.updateView());
  }

  private updateView(): void {
    this.viewContainerRef.clear();
    if (this.hasAnyAuthorityCheck() ) { this.viewContainerRef.createEmbeddedView(this.templateRef); }
  }

  private hasAnyAuthorityCheck(): boolean {
    if (!this.authenticationService.isAuthenticated()) {return false; }
    return this.authenticationService.hasAnyAuthority(this.authorities);
  }
}
