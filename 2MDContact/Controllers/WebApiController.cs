using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MD2Contact.Models;

namespace MD2Contact.Controllers
{
    public class ApiModel
    {
        public string Content { get; set; }
    }

    [RoutePrefix("api/WebApi")]
    public class WebApiController : ApiController
    {
        [HttpPost]
        [Route("SendContactData")]
        public IHttpActionResult SendContactData([FromBody] ApiModel body)
        {
            try
            {
                var json = System.Text.Encoding.UTF8.GetString(
                    System.Convert.FromBase64String(body.Content));
                var content = Newtonsoft.Json.JsonConvert.DeserializeObject<ContactForms>(json);

                using (var db = new DatabaseContext())
                {
                    var customers = db.Set<ContactForms>();
                    customers.Add(new ContactForms()
                    {
                        FirstName = content.FirstName, 
                        LastName = content.LastName,
                        EmailAddress = content.EmailAddress,
                        PhoneNumber = content.PhoneNumber,
                        AreaOfInterest = content.AreaOfInterest,
                        Message = content.Message
                    });

                    db.SaveChanges();
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return base.Content(HttpStatusCode.InternalServerError, ex.ToString());
            }
        }
    }
}
