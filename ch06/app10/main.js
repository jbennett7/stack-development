var SomeNS;
(function (SomeNS) {
    function someFunc1() { alert("someFunc1"); }
    SomeNS.someFunc1 = someFunc1;
    ;
})(SomeNS || (SomeNS = {}));
var SomeNS;
(function (SomeNS) {
    function someFunc2() { alert("someFunc2"); }
    SomeNS.someFunc2 = someFunc2;
    ;
})(SomeNS || (SomeNS = {}));
/// <reference path="file1.ts" />
/// <reference path="file2.ts" />
SomeNS.someFunc1();
SomeNS.someFunc2();
