# AWS CloudWatch

Sample query to parse message request by `path` and filter by a specific string, then filter by `method = "POST"`, and then filter by `body.email` (if included in log)

```sql
fields @timestamp, @message, method
| parse @message '"path":*' as pathText
| filter pathText like "replace_endpoint"
| filter method = "POST"
| filter body.email = "email@domain.com"
| sort @timestamp desc
```


[AWS Docs - CloudWatch: analyzing log data with CloudWatch Logs Insights - Sample queries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-examples.html)
