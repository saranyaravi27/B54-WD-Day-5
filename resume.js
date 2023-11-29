//create your own resume in JSON Format

var resume = {
    name: "Saranya Ravi",
    Email: "saranya2721995@gmail.com",
    DOB: "27/02/1995",
    Gender: "Female",
    Languages_known: ["English", "Tamil","Thulu","Kannada","thelugu"],
    Age: 28,
    Qualification: ["B.sc. ECS","M.Tech. Information Technology"],
    Years_of_Experience: "8+",
    Primary_Skills: [
      "ITIL",
      "MS SQL",
      "javascript",
      "python",
      "HTML",
      "Excel",
      "vb Script"
    ]
  };
var JSON_Format = JSON.stringify(resume);
console.log(JSON_Format);
