using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using MySql.Data.Entity;

namespace MD2Contact.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class DatabaseContext : DbContext
    {
        public DbSet<ContactForms> ContactForm { get; set; }
      
        public DatabaseContext() : base("DefaultConnection")
        {
            Configuration.ValidateOnSaveEnabled = false;
        }
    }
}