# 2MD-Example-contact-form
## Angular 8 + Angular Material + ASP.NET WEB API(.NET Framework 4.7.2) + Entity Framework

___
![Alt text](https://i.imgur.com/f2wDLBz.png "Preview")
___

## Pre-Configuration:
⋅⋅* Install Web Server + MySQL (XAMPP or any other web server solution stack package can come in handy)
⋅⋅* Turn on web server and MySQL (MySQL must be running on port 3306)

## 2MDContact - ASP.NET WEB API(.NET Framework 4.7.2) + Entity Framework Backend
⋅⋅* Run Visual Studio as Administrator
⋅⋅* Make sure you have .NET Framework 4.7.2 installed.
⋅⋅* Open NuGet Package Manager > Package Manager Console.
⋅⋅* Restore missing packages
⋅⋅* Enter command 'update-database'
⋅⋅* Run Solution

MySQL Database will be created automatically by running "update-database" command.
Backend is running on port 44364 by default.

## 2MDContactClient - Angular 8 + Angular Material Frontend
⋅⋅* 'npm install -g @angular/cli@8.3.19' 
⋅⋅* 'npm install'
⋅⋅* 'npm start'
⋅⋅* open http://localhost:4200/

Client is running on port 4200 by default.