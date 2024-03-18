# Creating quote-of-the-day using mongodb and nodejs lambda

1. **Create lambda**
> ref https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html

```bash
cd ./quote-of-the-day/lambda
nvm use 20 # becouse we will use node 20 on aws and package must be from the same version.
npm install mongodb
zip -r lambda_function.zip .
aws lambda update-function-code --function-name quote-of-the-day \
--zip-file fileb://lambda_function.zip
```


2. **Initilize quotes**
```bash
cd ./quote-of-the-day/init
nvm use 20
npm instal mongodb
node insertQuotes.js
```