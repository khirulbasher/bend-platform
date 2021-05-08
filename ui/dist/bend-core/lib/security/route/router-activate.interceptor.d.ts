import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
import * as ɵngcc0 from '@angular/core';
export declare class RouterActivateInterceptor implements CanActivate {
    private router;
    private authenticationService;
    constructor(router: Router, authenticationService: BendAuthenticationService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean>;
    checkLogin(authorities: string[], url: string): Promise<boolean>;
    private checkInternally;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterActivateInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWFjdGl2YXRlLmludGVyY2VwdG9yLmQudHMiLCJzb3VyY2VzIjpbInJvdXRlci1hY3RpdmF0ZS5pbnRlcmNlcHRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9iZW5kLWF1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJBY3RpdmF0ZUludGVyY2VwdG9yIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEJlbmRBdXRoZW50aWNhdGlvblNlcnZpY2UpO1xyXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBjaGVja0xvZ2luKGF1dGhvcml0aWVzOiBzdHJpbmdbXSwgdXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgcHJpdmF0ZSBjaGVja0ludGVybmFsbHk7XHJcbn1cclxuIl19