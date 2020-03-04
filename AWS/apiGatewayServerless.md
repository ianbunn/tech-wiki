# [AWS API Gateway with Serverless Framework](https://serverless.com/framework/docs/providers/aws/events/apigateway/)

## [HTTP Endpoints with Custom Authorizers](https://serverless.com/framework/docs/providers/aws/events/apigateway/#http-endpoints-with-custom-authorizers)

```yml
functions:
  create:
    handler: posts.create
    events:
      - http:
          path: posts/create
          method: post
          authorizer:
            arn: xxx:xxx:Lambda-Name
            resultTtlInSeconds: 0
            identitySource: method.request.header.Authorization, context.identity.sourceIp
            identityValidationExpression: someRegex
            type: request
```

## [CORS and API Gateway Survival Guide](https://serverless.com/blog/cors-api-gateway-survival-guide/)