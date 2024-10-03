var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Per = /** @class */ (function () {
    function Per() {
    }
    return Per;
}());
var Stu = /** @class */ (function (_super) {
    __extends(Stu, _super);
    function Stu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stu.prototype.details = function () {
        this.n = "abi";
        console.log(this.n);
    };
    return Stu;
}(Per));
var object = new Stu();
object.details();
