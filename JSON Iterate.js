//for the given JSON iterate over all for loops

var resume = {
    name: "Saranya Ravi",
    Email: "saranya2721995@gmail.com",
    DOB: "27/02/1995"
  };
  const count = Object.keys(resume);

 // for loop
for (let i = 0; i < count.length; i++) {
    console.log(resume[count[i]]);
  }
  
  // for in
  for (let keys in resume) {
    console.log(resume[keys]);
  }
  
  // for Of
  for (let i of count) {
    console.log(resume[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(resume[item]);
  }
  
  