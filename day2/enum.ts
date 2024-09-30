//group of named constant values
// enumuated type
// keyword: enum
//syntax
//enum name{ con1,con2,......};
enum Month {
    Jan, Feb,Mar, Apr, May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
};
console.log(Month);




function isItSummer(month: Month) {
    let isSummer: boolean;
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
  console.log()


  
enum ApprovalStatus1{
  drafted, requested, approved,submitted
};

  const request =  {
    id: 1,
    status: ApprovalStatus1.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus1.approved) {
    // send an email
    console.log('Send email to the Applicant...');

}







