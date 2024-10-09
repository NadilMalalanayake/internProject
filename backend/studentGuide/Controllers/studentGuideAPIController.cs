//using Microsoft.AspNetCore.JsonPatch;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.SqlServer.Server;
//using studentGuide.Data;
//using studentGuide.Models;

//namespace studentGuide.Controllers
//{

//    [Route("api/StudentApi")]  //Base URL route for the COntrolers actions making API accessable
//    [ApiController]  //class makes api controller , which enabels featuers like automate validation and bind incoming HTTP requests
//    public class studentGuideAPIController : ControllerBase   //inherit controller Base providing basic functionality for handling HTTP requests in a Web API.
//    {
//        private readonly AppDbContext _db;  // private field intractb with APPDbcontext

//        public studentGuideAPIController(AppDbContext db)   //which receives an AppDbContext instance (via Dependency Injection)
//                                                            //and assigns it to _db, enabling database access.
//        {
//            _db = db;
//        }


//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<StudentData>>> GetForms()  //get all student data  //async having connection between 2 connection and engag
//                                                                                //with real time same system
//        {                                                                                             //Action result contain List of student Data
//                                                                                            //retrives all rows of student MAp
//            var forms = await _db.Student_Map.ToListAsync();
//            return Ok(forms);
//        }



//        [HttpGet("{Id:int}", Name = "GetStudentDetails")] //Getstudent Details is the name of the Route
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(StatusCodes.Status404NotFound)]
//        public async Task<ActionResult<StudentData>> GetForm(int Id)  //this id returns details of the student and it is action relt of type student data
//        {
//            if (Id == 0)
//            {
//                return BadRequest("Invalid ID");
//            }

//            var form = await _db.Student_Map.FirstOrDefaultAsync(u => u.id == Id);   //Student_Map table for the student with the matching Id
//                                                                                     //. It uses FirstOrDefaultAsync to return the first matching record or null if no match is found.
//            if (form == null)
//            {
//                return NotFound($"Form with Id {Id} not found.");
//            }

//            return Ok(form);
//        }

//        [HttpPost]
//        [ProducesResponseType(StatusCodes.Status201Created)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        public async Task<ActionResult<StudentData>> CreateForm([FromBody] StudentData student)   //return action result of type student data
//        {
//            if (student == null || await _db.Student_Map.AnyAsync(u => u.fullname.ToLower() == student.fullname.ToLower())) //check stduent data is null
//            {                                                                                  //checks students is in the same name(case_sensitive)  exist in DB
//                ModelState.AddModelError("", "Name already exists!");
//                return BadRequest(ModelState);
//            }

//            StudentData model = new()  //if no issues STudent data model createusing provide data 
//            {
//                fullname = student.fullname,
//                address = student.address,
//                dateofbirth = student.dateofbirth,
//                gender = student.gender,
//                email = student.email,
//                telephone = student.telephone
//            }; 

//            _db.Student_Map.Add(model);   //add newly create student data
//            await _db.SaveChangesAsync();   //changes save to db

//            student.id = model.id; //after saving id genartae by DB and assign to the original student

//            return CreatedAtRoute("GetForm", new { Id = student.id }, student);
//        }

//        // Delete a form
//        [HttpDelete("{Id:int}", Name = "DeleteForm")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(StatusCodes.Status404NotFound)]
//        public async Task<IActionResult> DeleteForm(int Id)
//        {
//            if (Id == 0)
//            {
//                return BadRequest("Invalid ID");
//            }

//            var form = await _db.Student_Map.FirstOrDefaultAsync(u => u.id == Id);
//            if (form == null)
//            {
//                return NotFound($"Form with Id {Id} not found.");
//            }

//            _db.Student_Map.Remove(form);
//            await _db.SaveChangesAsync();

//            return NoContent();
//        }

//        // Update an existing form
//        [HttpPut("{Id:int}", Name = "UpdateForm")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        public async Task<IActionResult> UpdateForm(int Id, [FromBody] StudentData student)
//        {
//            if (student == null || Id != student.id)
//            {
//                return BadRequest("Invalid form data or ID mismatch");
//            }

//            StudentData model = new()
//            {
//                id = student.id,
//                fullname = student.fullname,
//                address = student.address,
//                dateofbirth = student.dateofbirth,
//                gender = student.gender,
//                email = student.email,
//                telephone = student.telephone
//            };

//            _db.Student_Map.Update(model);
//            await _db.SaveChangesAsync();

//            return NoContent();
//        }
    

//}
//}
