import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
import * as ɵngcc0 from '@angular/core';
export declare class BendIsAuthenticatedDirective {
    private templateRef;
    private viewContainerRef;
    private authenticationService;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, authenticationService: BendAuthenticationService);
    set bendIsAuthenticated(value: string);
    private updateView;
    private isAuthenticatedCheck;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BendIsAuthenticatedDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BendIsAuthenticatedDirective, "[bendIsAuthenticated]", never, {
    "bendIsAuthenticated": "bendIsAuthenticated";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1pcy1hdXRoZW50aWNhdGVkLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJiZW5kLWlzLWF1dGhlbnRpY2F0ZWQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlbmRBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2JlbmQtYXV0aGVudGljYXRpb24tc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJlbmRJc0F1dGhlbnRpY2F0ZWREaXJlY3RpdmUge1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQmVuZEF1dGhlbnRpY2F0aW9uU2VydmljZSk7XHJcbiAgICBzZXQgYmVuZElzQXV0aGVudGljYXRlZCh2YWx1ZTogc3RyaW5nKTtcclxuICAgIHByaXZhdGUgdXBkYXRlVmlldztcclxuICAgIHByaXZhdGUgaXNBdXRoZW50aWNhdGVkQ2hlY2s7XHJcbn1cclxuIl19