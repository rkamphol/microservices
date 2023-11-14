# microservices
Designing a Resilient Microservices Architecture for End-to-End Solutions

This title reflects the intent to start the design process with a microservices architecture from the beginning. It emphasizes the goal of creating a system, that is built on microservices principles and is designed to be resilient while providing end-to-end solutions.

I have chosen to craft a microservices architecture for this demonstration project to showcase both the benefits and challenges associated with this approach.

# objectives of the Service Infrastructure Design
1. Demonstratate Modular System Resilience: Designing the system modules to operate independently so that if one service experiences downtime, other services can continue serving customers seamlessly.
Optimize Cost Efficiency with Serverless:
2. Choosing serverless architecture to maximize cost savings by leveraging on-demand resources and efficient scaling based on actual usage.
3. Scalability Management: Facilitating easy scalability of services on cloud, allowing for straightforward and efficient management of system growth and demand fluctuations.

# technology stacks
1. Frontend: React.js
Dynamic UI: React.js for responsive, component-based frontend
2. Backend: Node.js (Express.js)
Fast & Scalable: Node.js with Express.js for efficient server-side processing.
3. Authentication: JWT
Secure Access: JWT for stateless and secure user authentication.
4. Infrastructure AWS
* ECR
* ECS Fargate Serverless
* Docker
* Amazon Aurora PostgreSQL Serverless
* Application Load Balancer

3. Database: AWS RDS (Aurora Postgres)
Reliable Storage: AWS RDS with Aurora Postgres for secure data storage.
3. Authentication: JWT
Secure Access: JWT for stateless and secure user authentication.
● Hosting & Deployment: 
● Efficient Deployment: AWS ECS for scalable hosting and streamlined deployment.

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
