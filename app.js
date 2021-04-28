// node modules
const inquirer = require("inquirer");
const fs =  require("fs");
// const generateTeam = require("./app.js");
const path = require("path");
// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array for answers
const newStaffMemberData = [];

   
    const answers = inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",

        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "office",
        
        },
    ])

    const init = () => {
        answers.then(response=>{
            console.log(response);
            const newManager = new Manager(
                        response.name,
                        response.id,
                        response.email,
                        response.officeNumber
                    );
                    newStaffMemberData.push(newManager);
                    console.log(newStaffMemberData)
                    promptQuestions()
        })
    }
    init()
    // console.log(answers)
    // if manager is selected
    // if (answers.role === "Manager") {
    //     const managerAns =  await inquirer
    //     .prompt([
    //         {
    //             type: "input",
    //             message: "What is your office number",
    //             name: "officeNumber",
    //         },
    //     ])
    //     const newManager = new Manager(
    //         answers.name,
    //         answers.id,
    //         answers.email,
    //         managerAns.officeNumber
    //     );
    //     newStaffMemberData.push(newManager);
        
    //     // if engineer is selected
    // } else if (answers.role === "Engineer") {
    //     const githubAns = await inquirer
    //     .prompt([
    //         {
    //             type: "input",
    //             message: "What is your Github username?",
    //             name: "github",
    //         }

    //     ])
    //     const newEngineer = new Engineer (
    //         answers.name,
    //         answers.id,
    //         answers.email,
    //         githubAns.githubAns);
    //         newStaffMemberData.push(newEngineer);

    //     // if intern is selected
    //      } else if (answers.role === "Intern") {
    //         const internAns = await inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 message: "What university did you attend?",
    //                 name: "school",
    //             },
    
    //         ])
    //         const newIntern = new Intern (
    //             answers.name,
    //             answers.id,
    //             answers.email,
    //             internAns.school
    //             );
    //             newStaffMemberData.push(newIntern);
    //         }
    //     };
        function promptQuestions() {
           
            inquirer.prompt([
                {
                    name: "addMember",
                    type: "list",
                    choices: ["Add an intern", "Add an engineer", "Create team"],
                    message: "What would you like to do next?"
                }
            ]).then(response=>{
                console.log(response.addMember)

                // if (response.addMember === "Add an intern") {

              //  } if (response.addMember === "Add an engineer") {
                    // makeEngineer --> aske questions for engineer and create
                    // call promptQuestion()
                    // call a function to ask inquirer.prompt (...).then (make engineer , then call promptquestions)
            //  } else {
             //     build team
                    // call function to write file
           //   }
            })

            // if (addMemberAns.addMember === "Add a new member") {
            //     return promptQuestions()
            // }
            // return createTeam();


        }


            // promptQuestions();

            function createTeam() {
                console.log("new guy", newStaffMemberData)
                fs.writeFileSync(
                    "./output/index.html",
                    generateTeam(newStaffMemberData),
                    "utf-8"
                );
            }

            // function writeHTMLFile(html){
            //     // Creates the HTML file that will display the information gathered in the app on a web page.
            //     fs.writeFile(outputPath, html, function(error) {
            //         // If function should fail returns an error in the console log
            //         if(error){ return console.log(error); }
            //         // Returns a message in the console log confirmint the file was successfully created.
            //         console.log('Your team.html has been created!');

            //     })
            // }
        