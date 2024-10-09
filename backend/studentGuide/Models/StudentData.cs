using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studentGuide.Models
{
    public class StudentData
    {
            [Key]    
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]  
            public int id { get; set; }
            public string fullname { get; set; }

            public string address { get; set; }

            public DateTime dateofbirth { get; set; }

            public string email { get; set; }

            public string telephone { get; set; }

            public string gender { get; set; }   

    }
}
