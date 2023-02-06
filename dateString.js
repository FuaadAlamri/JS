function kSumSubset(dateString) {
  const today = new Date();// Get today date
  const inputDate = new Date(dateString);// Get the date from the input STRING
  const maxDate = new Date(today.getFullYear() - 200, today.getMonth(), today.getDate());
        console.log(maxDate) ;

  // Set the max date
  const minDate = new Date(today.getFullYear() - 4, today.getMonth(), today.getDate());
            console.log(minDate) ;

// Set the min date


  if (inputDate > today || inputDate < maxDate || inputDate > minDate) {
    console.log(false) ;
  } else {
    console.log(true) ;
  }
