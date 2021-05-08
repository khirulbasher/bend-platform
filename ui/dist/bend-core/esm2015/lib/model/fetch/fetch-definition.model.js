export var IJoinType;
(function (IJoinType) {
    IJoinType[IJoinType["INNER_JOIN"] = 0] = "INNER_JOIN";
    IJoinType[IJoinType["LEFT_JOIN"] = 1] = "LEFT_JOIN";
    IJoinType[IJoinType["RIGHT_JOIN"] = 2] = "RIGHT_JOIN";
    IJoinType[IJoinType["LEFT_OUTER_JOIN"] = 3] = "LEFT_OUTER_JOIN";
    IJoinType[IJoinType["RIGHT_OUTER_JOIN"] = 4] = "RIGHT_OUTER_JOIN";
    IJoinType[IJoinType["FULL_JOIN"] = 5] = "FULL_JOIN";
})(IJoinType || (IJoinType = {}));
export class SqlJoin {
    constructor(joinType, dependentAlias, relationName, alias) {
        this.joinType = joinType;
        this.dependentAlias = dependentAlias;
        this.relationName = relationName;
        this.alias = alias;
    }
}
export class Parameter {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
export class FetchDefinition {
    constructor() { }
}
export class SqlFetchDefinition extends FetchDefinition {
    constructor() { super(); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtZGVmaW5pdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9mZXRjaC9mZXRjaC1kZWZpbml0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLFNBT1g7QUFQRCxXQUFZLFNBQVM7SUFDbkIscURBQVUsQ0FBQTtJQUNWLG1EQUFTLENBQUE7SUFDVCxxREFBVSxDQUFBO0lBQ1YsK0RBQWUsQ0FBQTtJQUNmLGlFQUFnQixDQUFBO0lBQ2hCLG1EQUFTLENBQUE7QUFDWCxDQUFDLEVBUFcsU0FBUyxLQUFULFNBQVMsUUFPcEI7QUFTRCxNQUFNLE9BQU8sT0FBTztJQUNsQixZQUNTLFFBQW1CLEVBQ25CLGNBQXNCLEVBQ3RCLFlBQW9CLEVBQ3BCLEtBQWE7UUFIYixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVE7SUFDbkIsQ0FBQztDQUNMO0FBT0QsTUFBTSxPQUFPLFNBQVM7SUFDcEIsWUFDUyxJQUFZLEVBQ1osS0FBYTtRQURiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQ25CLENBQUM7Q0FDTDtBQWdCRCxNQUFNLE9BQU8sZUFBZTtJQUcxQixnQkFDRyxDQUFDO0NBQ0w7QUFFRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQU9yRCxnQkFBZ0IsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSUpvaW5UeXBlIHtcclxuICBJTk5FUl9KT0lOLFxyXG4gIExFRlRfSk9JTixcclxuICBSSUdIVF9KT0lOLFxyXG4gIExFRlRfT1VURVJfSk9JTixcclxuICBSSUdIVF9PVVRFUl9KT0lOLFxyXG4gIEZVTExfSk9JTlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcWxKb2luIHtcclxuICBqb2luVHlwZTogSUpvaW5UeXBlO1xyXG4gIGRlcGVuZGVudEFsaWFzOiBzdHJpbmc7XHJcbiAgcmVsYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgYWxpYXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNxbEpvaW4gaW1wbGVtZW50cyBJU3FsSm9pbiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgam9pblR5cGU6IElKb2luVHlwZSxcclxuICAgIHB1YmxpYyBkZXBlbmRlbnRBbGlhczogc3RyaW5nLFxyXG4gICAgcHVibGljIHJlbGF0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgcHVibGljIGFsaWFzOiBzdHJpbmdcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtZXRlciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgaW1wbGVtZW50cyBJUGFyYW1ldGVyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZ1xyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmV0Y2hEZWZpbml0aW9uIHtcclxuICBrZXk6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3FsRmV0Y2hEZWZpbml0aW9uIGV4dGVuZHMgSUZldGNoRGVmaW5pdGlvbiB7XHJcbiAgY29sdW1uczogc3RyaW5nW107XHJcbiAgY29uZGl0aW9uOiBzdHJpbmc7XHJcbiAgam9pbnM6IElTcWxKb2luW107XHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG4gIGFsaWFzOiBzdHJpbmc7XHJcbiAgcGFyYW1ldGVyczogSVBhcmFtZXRlcltdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmV0Y2hEZWZpbml0aW9uIGltcGxlbWVudHMgSUZldGNoRGVmaW5pdGlvbiB7XHJcbiAgcHVibGljIGtleTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkb21haW46IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcWxGZXRjaERlZmluaXRpb24gZXh0ZW5kcyBGZXRjaERlZmluaXRpb24gaW1wbGVtZW50cyBJU3FsRmV0Y2hEZWZpbml0aW9uIHtcclxuICBwdWJsaWMgY29sdW1uczogc3RyaW5nW107XHJcbiAgcHVibGljIGNvbmRpdGlvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyBqb2luczogSVNxbEpvaW5bXTtcclxuICBwdWJsaWMgb3JkZXJCeTogc3RyaW5nO1xyXG4gIHB1YmxpYyBhbGlhczogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiBJUGFyYW1ldGVyW107XHJcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxufVxyXG4iXX0=