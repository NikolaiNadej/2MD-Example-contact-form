namespace MD2Contact.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ContactTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ContactForm",
                c => new
                    {
                        ContactId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(unicode: false),
                        LastName = c.String(unicode: false),
                        EmailAddress = c.String(unicode: false),
                        PhoneNumber = c.String(unicode: false),
                        AreaOfInterest = c.String(unicode: false),
                        Message = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.ContactId);
        }
        
        public override void Down()
        {
            DropTable("dbo.ContactForm");
        }
    }
}
