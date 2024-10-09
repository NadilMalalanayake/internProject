using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using studentGuide.Data;
namespace studentGuide.Controllers;
using studentGuide.Models;

//localhost:xxx/api/student
//[Route("api/[controller]")]
[Route("api/StudentApi")]
[ApiController]
public class StudentController : ControllerBase
{
    private readonly AppDbContext Data;

    public StudentController(AppDbContext data) {
        Data = data;
    }



    [HttpGet]
    public IActionResult GetAllStudents()
    {
        var allStudents = Data.Student_Map.ToList();
        return Ok(allStudents);

    }


    [HttpGet("{id:int}")]
    public IActionResult GetStudentById(int id)
    {
        var data = Data.Student_Map.Find(id);
        if (data == null)
        {
            return NotFound($"Student with ID {id} not found.");
        }

        return Ok(data);


    }



    [HttpGet("{phone}")]
    public IActionResult GetStudentByPhone(string phone)
     {
        var studentdata = Data.Student_Map.FirstOrDefault(sc => sc.telephone == phone);

        if (studentdata == null) {
            return NotFound();
        }

        return Ok(studentdata);

    }



    [HttpPost]
    public IActionResult AddStudents(StudentData students)
    {
        StudentData model = new()
        {
            fullname = students.fullname,
            address = students.address,
            dateofbirth = students.dateofbirth,
            email = students.email,
            telephone = students.telephone,
            gender = students.gender
        };


        Data.Student_Map.Add(model);
        Data.SaveChanges();

        return Ok(model);

    }

    [HttpPut("{id:int}")]
    public IActionResult UpdateEmployee(int id, StudentData students)
    {
        var student = Data.Student_Map.Find(id);

        if (student == null)
        {
            return NotFound();

        }

        student.fullname = students.fullname;
        student.address = students.address;
        student.dateofbirth = students.dateofbirth;
        student.email = students.email;
        student.telephone = students.telephone;
        student.gender = students.gender;
        

        Data.SaveChanges();

        return Ok(student);

    }




    [HttpDelete("{id}")]
    public IActionResult DeleteStudent(int id)
    {
        var Child=Data.Student_Map.Find(id);
        
        if (Child == null)
        {
            return NotFound();

        }

        Data.Student_Map.Remove(Child);
        Data.SaveChanges();


        return Ok();
    }

}
