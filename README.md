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

# services
1. authentication
2. invoices and payments
3. client

# libraries
* <a href="https://expressjs.com/">express.js</a>
* <a href="https://www.npmjs.com/package/cors">cors</a>
* <a href="https://www.npmjs.com/package/dotenv">dotenv</a>
* <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>
* <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
* <a href="https://www.npmjs.com/package/pg">pg</a>
* <a href="https://sequelize.org/">sequelize</a> and <a href="https://www.npmjs.com/package/sequelize-cli">sequelize-cli</a>
* <a href="https://www.npmjs.com/package/axios">axios</a>
* <a href="https://getbootstrap.com/">bootstrap</a>
* <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a>

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
