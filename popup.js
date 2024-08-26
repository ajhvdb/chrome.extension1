alert('Hello Popup!')


//fetch if user sync is not enabled by adding "accountStatus" param
//may need to be inside try block for legacy chrome users - otherwise it returns empy object for non-synced accounts
// chrome.identity.getProfileUserInfo({'accountStatus': 'ANY'}, function(info) {
//     email = info.email;
//     console.log(info);
//     document.querySelector('textarea').value=JSON.stringify(info);
//   });
  
//   //If only want users with sync on you can user the code below
//   chrome.identity.getProfileUserInfo(function(info) {
//     email = info.email;
//     console.log(info);
//     document.querySelector('textarea').value=JSON.stringify(info);
//   });