//group of named constant values
// enumuated type
// keyword: enum
//syntax
//enum name{ con1,con2,......};
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
console.log(Month);
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log();
var ApprovalStatus1;
(function (ApprovalStatus1) {
    ApprovalStatus1[ApprovalStatus1["drafted"] = 0] = "drafted";
    ApprovalStatus1[ApprovalStatus1["requested"] = 1] = "requested";
    ApprovalStatus1[ApprovalStatus1["approved"] = 2] = "approved";
    ApprovalStatus1[ApprovalStatus1["submitted"] = 3] = "submitted";
})(ApprovalStatus1 || (ApprovalStatus1 = {}));
;
var request = {
    id: 1,
    status: ApprovalStatus1.approved,
    description: 'Please approve this request'
};
if (request.status === ApprovalStatus1.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
