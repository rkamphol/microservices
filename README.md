# microservices
Designing a Resilient Microservices Architecture for End-to-End Solutions

This title reflects the intent to start the design process with a microservices architecture from the beginning. It emphasizes the goal of creating a system, that is built on microservices principles and is designed to be resilient while providing end-to-end solutions.

I have chosen to craft a microservices architecture for this demonstration project to showcase both the benefits and challenges associated with this approach.

# how to run on local machine
1. Setup database for microservices (using Postgres)
2. Create empty database as following
* microservices_auth
* microservice_invoices
3. Configure .env files in folder (auth, invoices) and update each settings
4. In auth and invoices folders, run migrate database schema using the below command. It’s will automatically create tables that use for the demo project.
* npx sequelize-cli db:migrate
5. Start each microservices with the below command
* npm start
