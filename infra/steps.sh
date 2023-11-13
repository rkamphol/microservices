# working in progress
# create ECR for each repository
# todo: change it to templates
aws cloudformation create-stack --region us-east-1 --stack-name ecr-microservices-authen --template-body file://ecr/ecr-authen.yaml
aws cloudformation create-stack --region us-east-1 --stack-name ecr-microservices-client --template-body file://ecr/ecr-client.yaml
aws cloudformation create-stack --region us-east-1 --stack-name ecr-microservices-invoices --template-body file://ecr/ecr-invoices.yaml
aws cloudformation create-stack --region us-east-1 --stack-name ecr-microservices-payments --template-body file://ecr/ecr-payments.yaml

# build docker image and push to ecr for each microservices
# examples
cd microservices-invoices
docker build -t microservices-invoices .
docker tag microservices-invoices:latest {your-account-id}.dkr.ecr.ap-southeast-1.amazonaws.com/microservices-invoices:latest
docker push {your-account-id}.dkr.ecr.ap-southeast-1.amazonaws.com/microservices-invoices:latest

# ecr image uri:
{your-account-id}.dkr.ecr.ap-southeast-1.amazonaws.com/microservices-invoices:latest

# create application load balance
# create target group for each microservices
# create security group for microservices-alb

# create ECS cluster
aws cloudformation create-stack --stack-name ecs-microservices --template-body file://ecs/ecs-microservices.yaml

# create ECS task definitation
# run ECS task