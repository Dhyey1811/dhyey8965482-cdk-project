AWS CDK + CodePipeline Project - Dhyey8965482
1. Project Overview
This project demonstrates the use of AWS Cloud Development Kit (CDK) to create AWS resources and configure a CI/CD pipeline using AWS CodePipeline. The pipeline automatically deploys changes from a GitHub repository when code is pushed, enabling continuous integration and deployment of cloud infrastructure.

2. AWS Resources Created (Free Tier)
- Amazon S3 Bucket: Stores static files or Lambda artifacts.
- AWS Lambda Function: Simple function returning “Hello, World!”
- Amazon DynamoDB Table: For CRUD operations using partition key 'id'.

3. Technologies Used
- AWS CDK (TypeScript)
- AWS CodePipeline
- AWS CodeBuild
- AWS CLI
- GitHub (source repository)

4. CDK Stack Details
- S3 Bucket with versioning enabled.
- Lambda Function using inline Node.js code.
- DynamoDB Table with string partition key.

5. CodePipeline Setup Steps
1. Created GitHub repository and pushed CDK code.
2. Configured AWS CodePipeline:
   - Source: GitHub
   - Build: AWS CodeBuild using buildspec.yml
   - Deploy: CDK Deploy via CloudFormation

6. buildspec.yml

version: 0.2
phases:
  install:
    commands:
      - npm install -g aws-cdk
      - npm install
  build:
    commands:
      - cdk synth
      - cdk deploy --require-approval never
artifacts:
  files:
    - '**/*'

7. Permissions Issues & Fixes
Issue: CodeBuild role lacked permission to access SSM Parameter and S3 bucket.

Fix: Added inline policies to CodeBuild role:
- Allow ssm:GetParameter on /cdk-bootstrap/hnb659fds/version
- Allow s3:GetObject*, s3:PutObject*, s3:ListBucket on cdk-hnb659fds-assets-* bucket

8. Testing & Validation
- Verified successful creation of S3, Lambda, and DynamoDB in AWS Console.
- Modified Lambda function and pushed to GitHub.
- Verified that CodePipeline triggered automatically and updated resources.

9. Screenshots Included
- AWS Console: S3, Lambda, DynamoDB
- CodePipeline execution status (Success)

