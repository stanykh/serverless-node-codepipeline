# Basic CodePipeline and CodeBuild example

Demonstrate the use of CodePipeline and CodeBuild to build, test and deploy Lambda function on AWS. This example requires some configuration on CodePipeline, CodeBuild and IAM to get it working. The idea of this example is to show, how code can be tested with Mocha locally or during CodeBuild, which will eventually be deployed at the end of the pipeline. The sequence of events are as follow: 

1. Code (local).
2. Test (local).
3. Commit to repository (GitHub/CodeCommit).
4. Pipeline fetches the code from repository.
5. CodeBuild builds the code.
6. CodeBuild test and validate the code.
7. CodeBuild deploy/release the code to production (prod) or cicd. 

## Prerequisite

More details on configuration of CodePipeline, CodeBuild and IAM will be added to this section later. 

## buildspec.yml

This is the most important configuration file. That's where the magic happens. It determines what should be done at each stage of the CodeBuild. So, you may put your build conditions/logics, commands and etc here. 

## package.json

Standard package.json file to install dependencies. Here is where we will install Serverless, Mocha/Chai, and etc. Serverless is required for CodeBuild to deploy the code to CloudFormation at the end of the pipeline. A good part of the scripts section can be ignore as it is not used in this example. I just keep it there to served as an alternative command to those in buildspec.yml. 

```
"scripts": {
  "test": "./node_modules/.bin/mocha",
  "deploy": "./node_modules/.bin/serverless deploy",
  "remove:cicd": "./node_modules/.bin/serverless remove --stage cicd",
  "remove:prod": "./node_modules/.bin/serverless remove --stage prod",
  "deploy:cicd": "./node_modules/.bin/serverless deploy --stage cicd",
  "deploy:prod": "./node_modules/.bin/serverless deploy --stage prod"
}
```
