# AWS API Gateway With Serverless

## Reference

[Serverless.com/docs/aws/apigateway](https://serverless.com/framework/docs/providers/aws/events/apigateway/)

[Serverless.com/docs/aws/apigateway#http-endpoints-with-custom-authorizers](https://serverless.com/framework/docs/providers/aws/events/apigateway/#http-endpoints-with-custom-authorizers) - `yaml` example below:

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

[Serverless.com/blog/cors-api-gateway-survival-guide](https://serverless.com/blog/cors-api-gateway-survival-guide/)

[Back home](../README.md)
