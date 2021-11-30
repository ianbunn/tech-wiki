# Glue Primer

## Data Catalogs

*Data Catalogs* don't store any data, but DOES store metadata that routes to the target destination.

## Crawlers

*Crawlers* update the data catalogs.

## Workflows

*Workflows* can be written as Infrastructure-as-code using:

- CloudFormation
- Cloud Development Kit (CDK)
- Terraform

## Extract, Transform, Load Jobs (ETL)

### Transform Logic

Transform logic can be written using:

- Spark
- SparkStreaming (used for streaming data)
- Python shell (PySpark)

*ApacheSpark is a unified, analytics engine for large-scale data processing.

### Data Structures

When working with PySpark, there are 3 kind of data structures:

1. DataFrame (`df_` naming convention)
2. DynamicFrame (`dy` naming convention, Glue specific)
3. Resilient, Distributed Datasets (RDD)

### Basic ETL Example

```python
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.dynamicframe import DynamicFrame

# Initialize the connection to the cluster
# glueContext is used to read data from data stores
glueContext = GlueContext(SparkContext.getOrCreate())

# S3 location for output
output_dir = "s3://sample-bucket/output-dir/medicare_parquet"

# Read data into a DynamicFrame using the Data Catalog metadata
dy_medicare = glueContext.create_dynamic_frame.from_catalog(
    database="datalake",
    table_name="medicare"
)

# We can use the lower-level DataFrame to rename a column:
# Convert to data frame and rename a column
df_renamed = dy_medicare.toDF().withColumnRenamed("GivenName", "Name")
# Convert back to a dynamic frame
dy_output = DynamicFrame.fromDF(df_renamed, glueContext, "MedicareData")

# Or we rename a column through the higher-level DynamicFrame APIs
dy_output = dy_medicare.rename_field("GivenName", "Name")

# Write it out in Parquet
glueContext.write_dynamic_frame.from_options(
    frame=dy_output,
    connection_type="s3",
    connection_options={
        "path": output_dir
    },
    format = "parquet"
)
```

Ref: [AWS-blog.de/2021/06/aws-glue-primer](https://aws-blog.de/2021/06/what-i-wish-somebody-had-explained-to-me-before-i-started-to-use-aws-glue.html)
