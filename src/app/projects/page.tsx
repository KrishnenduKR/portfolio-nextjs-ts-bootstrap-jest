export default function ProjectsPage() {
  return (
    <div className="container">
      <h4>Projects</h4>
      <ul>
        <li>
        <h6>FileRouter (Nov 2020 -  Feb 2022)</h6>
        <div className="row border border-dark shadow p-3 mb-4 rounded">
            <div className="col-sm-6">
                About:<br/>
                <p>This project is developed in .Net, as a windows scheduling program. Which is developed to manage the files sent by the client company’s clients(ie:manufacturing industry) and validate the content of file and group files according to a specific type, then send the files to another system.</p>
            </div>
            <div className="col-sm-6">
                Role:<br/>
                <p>The role was bug fixing and new feature addition. My part in this project was to do maintenance. For that purpose I went through the entire project step by step and did modifications where needed. For example, I changed the filenames according to the file type and changed the destination folder.</p>
            </div>
        </div>
        </li>
        <li>
        <h6>Activator (Sep 2021 - Feb 2022)</h6>
        <div className="row border border-dark shadow p-3 mb-4 rounded">
            <div className="col-sm-6">
                About:<br/>
                <p>The Activator project is developed in react-redux, nodejs, typescript. It is a file manipulation system. Reads files from an FTP folder and transforms into another form and writes to MongoDB, from there it reads and sends to another system from there the client can receive file information. </p>
            </div>
            <div className="col-sm-6">
                Role:<br/>
                <p>The role was in UI design and development using react and typescript. Design we did as a team, we discussed UI design and made sample diagrams. The part I got and completed in time was pipeline creation form, pipeline listing page, pipeline delete and pipeline edit. The term pipeline is used in the project to refer to some stages of actions, for example DBreader, mapper, CSV file writer, which is a single pipeline. Another duty was to write test cases using the JEST framework.</p>
            </div>
        </div>
        </li>
        <li>
        <h6>TicketPlus (June 2018 – April 2019)</h6> 
        <div className="row border border-dark shadow p-3 mb-4 rounded">
            <div className="col-sm-6">
                About:<br/>
                <p>TicketPlus is an event management system which developed using angular 7 and java. A 
solution which allows to create events, event templates and can generate tickets for the 
visitors of an event.</p>
            </div>
            <div className="col-sm-6">
                Role:<br/>
                <p>Front-end development using angular7 and back-end maintenance using spring boot 
hibernate.  
Example works carried out in the back end was to create an API to get all the events created, 
API to delete an event and to document all the API using swagger. 
Example works carried out in the front end was to create a popup box to get the details of an 
event, to create alert messages and to check or test if all the implemented UI are working 
perfectly without any bug. And another duty was to create event templates in JSON format. 
After QA evaluation, fix the bugs that are reported and so on.</p>
            </div>
        </div> 
        </li>
        <li>
        <h6>Glue (May 2019) </h6>
        <div className="row border border-dark shadow p-3 mb-4 rounded">
            <div className="col-sm-6">
                About:<br/>
                <p>Glue is an employee and project management system which helps to track project details, its 
statuses, progression, and so on.</p>
            </div>
            <div className="col-sm-6">
                Role:<br/>
                <p>This system was already implemented and my task was to add an extra feature, ie: to 
add and design HTML mail template which informs project statuses to responsible managers 
via email.</p>
            </div>
        </div>
        </li>
    <li>
    <h6>Eduplus (June 2019 - Sep 2019)</h6>
    <div className="row border border-dark shadow p-3 mb-4 rounded">
            <div className="col-sm-6">
                About:<br/>
                <p>Eduplus is a school management system that helps to manage students and their details, 
teachers, and staff of a school. Parents can track their children’s activity and can interact 
with school staff. This system was developed using angularJs and java.</p>
            </div>
            <div className="col-sm-6">
                Role:<br/>
                <p>My responsibility was to redesign the existing UI, example works carried out was to 
find new UI designs for the listing of student details, popup for the student homework list 
view and so on. Design including database design and creation of  new tables in mysql. Also 
got the opportunity to mentor a newly joined developer to get all things set up in his system 
and to verify and correct the AngularJS code written by that junior developer.</p>
            </div>
    </div>  
</li>
      </ul>
    </div>
  );
}
