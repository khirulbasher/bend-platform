import { __extends } from "tslib";
import { createRequestOption } from './util/create-request-option.util';
import { BendCoreConstants } from '../environments/bend-core-constants';
var AbstractBaseService = /** @class */ (function () {
    function AbstractBaseService(BASE_URL, http, BASE_API_URL) {
        this.BASE_URL = BASE_URL;
        this.http = http;
        this.BASE_API_URL = BASE_API_URL;
        if (this.BASE_API_URL == null || this.BASE_API_URL.length < 1) {
            this.BASE_API_URL = BendCoreConstants.API_URL;
        }
        this.PRIVATE_URL = this.BASE_API_URL + '/private' + this.BASE_URL;
        this.PRIVATE_ADMIN_URL = this.BASE_API_URL + '/private/admin' + this.BASE_URL;
        this.PUBLIC_URL = this.BASE_API_URL + '/public' + this.BASE_URL;
        this.ACTUAL_URL = this.BASE_API_URL + this.BASE_URL;
        this.DEFAULT_URL = this.PRIVATE_URL;
    }
    return AbstractBaseService;
}());
export { AbstractBaseService };
var BaseService = /** @class */ (function (_super) {
    __extends(BaseService, _super);
    function BaseService(BASE_URL, http, BASE_API_URL) {
        if (BASE_API_URL === void 0) { BASE_API_URL = BendCoreConstants.API_URL; }
        return _super.call(this, BASE_URL, http, BASE_API_URL) || this;
    }
    BaseService.prototype.save = function (baseData) {
        return this.http.post(this.DEFAULT_URL, baseData, { observe: 'response' });
    };
    BaseService.prototype.update = function (baseData) {
        return this.http.put(this.DEFAULT_URL, baseData, { observe: 'response' });
    };
    BaseService.prototype.fetchAll = function (page) {
        var options = createRequestOption(page);
        return this.http.get(this.DEFAULT_URL, { params: options, observe: 'response' });
    };
    BaseService.prototype.fetchAllFlexible = function (page) {
        var options = createRequestOption(page);
        return this.http.get(this.DEFAULT_URL + "/flexible", { params: options, observe: 'response' });
    };
    BaseService.prototype.delete = function (id) {
        return this.http.delete(this.DEFAULT_URL + "/" + id, { observe: 'response' });
    };
    BaseService.prototype.findOne = function (id) {
        return this.http.get(this.DEFAULT_URL + "/" + id, { observe: 'response' });
    };
    return BaseService;
}(AbstractBaseService));
export { BaseService };
var BaseFetchService = /** @class */ (function (_super) {
    __extends(BaseFetchService, _super);
    function BaseFetchService(BASE_URL, http, BASE_API_URL) {
        return _super.call(this, BASE_URL, http, BASE_API_URL) || this;
    }
    BaseFetchService.prototype.fetch = function (inputs) {
        return this.http.post(this.DEFAULT_URL, inputs, { observe: 'response' });
    };
    return BaseFetchService;
}(AbstractBaseService));
export { BaseFetchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUV0RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUV0RTtJQU9FLDZCQUNtQixRQUFnQixFQUN2QixJQUFnQixFQUNULFlBQXFCO1FBRnJCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNULGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBRXRDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDOztBQUVEO0lBQWtGLCtCQUFtQjtJQUNuRyxxQkFDRSxRQUFnQixFQUNoQixJQUFnQixFQUNoQixZQUFnRDtRQUFoRCw2QkFBQSxFQUFBLGVBQXVCLGlCQUFpQixDQUFDLE9BQU87ZUFDL0Msa0JBQU0sUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7SUFBRSxDQUFDO0lBRWxDLDBCQUFJLEdBQVgsVUFBWSxRQUFnQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFlLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxRQUFnQjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLDhCQUFRLEdBQWYsVUFBZ0IsSUFBVztRQUN6QixJQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRU0sc0NBQWdCLEdBQXZCLFVBQXdCLElBQVc7UUFDakMsSUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEMsSUFBSSxDQUFDLFdBQVcsY0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN2SSxDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLEVBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBa0IsSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU0sNkJBQU8sR0FBZCxVQUFlLEVBQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXNCLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFrRixtQkFBbUIsR0FnQ3BHOztBQUVEO0lBQTRDLG9DQUFtQjtJQUM3RCwwQkFDRSxRQUFnQixFQUNoQixJQUFnQixFQUNoQixZQUFxQjtlQUNuQixrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztJQUFFLENBQUM7SUFFMUMsZ0NBQUssR0FBTCxVQUFNLE1BQVc7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFpQixJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFWRCxDQUE0QyxtQkFBbUIsR0FVOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIEh0dHBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0Jhc2VDcnVkRGF0YSwgQmFzZUNydWRWaWV3RGF0YX0gZnJvbSAnLi4vbW9kZWwvY3J1ZC9iYXNlLWNydWQuZGF0YSc7XHJcbmltcG9ydCB7QmFzZURhdGF9IGZyb20gJy4uL21vZGVsL2Jhc2UtZGF0YSc7XHJcbmltcG9ydCB7QmVuZFJlc3BvbnNlfSBmcm9tICcuLi9tb2RlbC9jcnVkL3Jlc3BvbnNlL2JlbmQtcmVzcG9uc2UubW9kZWwnO1xyXG5pbXBvcnQge0RhdGFSZXNwb25zZSwgUGFnZWFibGVEYXRhUmVzcG9uc2V9IGZyb20gJy4uL21vZGVsL2NydWQvcmVzcG9uc2UvZGF0YS1yZXNwb25zZS5tb2RlbCc7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSAnLi4vbW9kZWwvY3J1ZC9wYWdlLXJlcXVlc3QuZGF0YSc7XHJcbmltcG9ydCB7Y3JlYXRlUmVxdWVzdE9wdGlvbn0gZnJvbSAnLi91dGlsL2NyZWF0ZS1yZXF1ZXN0LW9wdGlvbi51dGlsJztcclxuaW1wb3J0IHtCYXNlRmxleGlibGVDcnVkVmlld0RhdGF9IGZyb20gJy4uL21vZGVsL2NydWQvYmFzZS1mbGV4aWJsZS1jcnVkLmRhdGEnO1xyXG5pbXBvcnQge0JlbmRDb3JlQ29uc3RhbnRzfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvYmVuZC1jb3JlLWNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCYXNlU2VydmljZSB7XHJcbiAgcHJvdGVjdGVkIFBSSVZBVEVfVVJMOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIFBSSVZBVEVfQURNSU5fVVJMOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIFBVQkxJQ19VUkw6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgQUNUVUFMX1VSTDogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBERUZBVUxUX1VSTDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfVVJMOiBzdHJpbmcsXHJcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9BUElfVVJMPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5CQVNFX0FQSV9VUkwgPT0gbnVsbCB8fCB0aGlzLkJBU0VfQVBJX1VSTC5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHRoaXMuQkFTRV9BUElfVVJMID0gQmVuZENvcmVDb25zdGFudHMuQVBJX1VSTDtcclxuICAgIH1cclxuICAgIHRoaXMuUFJJVkFURV9VUkwgPSB0aGlzLkJBU0VfQVBJX1VSTCArICcvcHJpdmF0ZScgKyB0aGlzLkJBU0VfVVJMO1xyXG4gICAgdGhpcy5QUklWQVRFX0FETUlOX1VSTCA9IHRoaXMuQkFTRV9BUElfVVJMICsgJy9wcml2YXRlL2FkbWluJyArIHRoaXMuQkFTRV9VUkw7XHJcbiAgICB0aGlzLlBVQkxJQ19VUkwgPSB0aGlzLkJBU0VfQVBJX1VSTCArICcvcHVibGljJyArIHRoaXMuQkFTRV9VUkw7XHJcbiAgICB0aGlzLkFDVFVBTF9VUkwgPSB0aGlzLkJBU0VfQVBJX1VSTCArIHRoaXMuQkFTRV9VUkw7XHJcbiAgICB0aGlzLkRFRkFVTFRfVVJMID0gdGhpcy5QUklWQVRFX1VSTDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZTxSIGV4dGVuZHMgQmFzZUNydWREYXRhLCBEb21haW4gZXh0ZW5kcyBCYXNlRGF0YT4gZXh0ZW5kcyBBYnN0cmFjdEJhc2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEJBU0VfVVJMOiBzdHJpbmcsXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgQkFTRV9BUElfVVJMOiBzdHJpbmcgPSBCZW5kQ29yZUNvbnN0YW50cy5BUElfVVJMXHJcbiAgKSB7c3VwZXIoQkFTRV9VUkwsIGh0dHAsIEJBU0VfQVBJX1VSTCk7IH1cclxuXHJcbiAgcHVibGljIHNhdmUoYmFzZURhdGE6IERvbWFpbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJlbmRSZXNwb25zZT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxCZW5kUmVzcG9uc2U+KHRoaXMuREVGQVVMVF9VUkwsIGJhc2VEYXRhLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShiYXNlRGF0YTogRG9tYWluKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmVuZFJlc3BvbnNlPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8QmVuZFJlc3BvbnNlPih0aGlzLkRFRkFVTFRfVVJMLCBiYXNlRGF0YSwge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaEFsbChwYWdlPzogUGFnZSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFBhZ2VhYmxlRGF0YVJlc3BvbnNlPEJhc2VDcnVkVmlld0RhdGFbXT4+PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihwYWdlKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhZ2VhYmxlRGF0YVJlc3BvbnNlPEJhc2VDcnVkVmlld0RhdGFbXT4+KHRoaXMuREVGQVVMVF9VUkwsIHtwYXJhbXM6IG9wdGlvbnMsIG9ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZXRjaEFsbEZsZXhpYmxlKHBhZ2U/OiBQYWdlKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8RGF0YVJlc3BvbnNlPEJhc2VGbGV4aWJsZUNydWRWaWV3RGF0YT4+PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihwYWdlKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhdGFSZXNwb25zZTxCYXNlRmxleGlibGVDcnVkVmlld0RhdGE+PihgJHt0aGlzLkRFRkFVTFRfVVJMfS9mbGV4aWJsZWAsIHtwYXJhbXM6IG9wdGlvbnMsIG9ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJlbmRSZXNwb25zZT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPEJlbmRSZXNwb25zZT4oYCR7dGhpcy5ERUZBVUxUX1VSTH0vJHtpZH1gLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRPbmUoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPERhdGFSZXNwb25zZTxSPj4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhdGFSZXNwb25zZTxSPj4oIGAke3RoaXMuREVGQVVMVF9VUkx9LyR7aWR9YCwge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRmV0Y2hTZXJ2aWNlPEksIE8+IGV4dGVuZHMgQWJzdHJhY3RCYXNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBCQVNFX1VSTDogc3RyaW5nLFxyXG4gICAgaHR0cDogSHR0cENsaWVudCxcclxuICAgIEJBU0VfQVBJX1VSTD86IHN0cmluZ1xyXG4gICkgeyBzdXBlcihCQVNFX1VSTCwgaHR0cCwgQkFTRV9BUElfVVJMKTsgfVxyXG5cclxuICBmZXRjaChpbnB1dHM6IElbXSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE1hcDxzdHJpbmcsIE8+Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE1hcDxzdHJpbmcsIE8+Pih0aGlzLkRFRkFVTFRfVVJMLCBpbnB1dHMsIHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==