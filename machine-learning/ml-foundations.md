# Machine Learning Foundations

## Lesson 1

Learning Objectives

* Supervised learning VS Unsupervised learning
* ID problems that ML can solve
* Describe commonly used algorithms, includding:
  * Linear regression
  * Logistic regression
  * K-means
* Describe how model training and testing works
* Evaluate the performance of a ML model using metrics

### What is Machine Learning?

ML is a modern software development technique & a type of AI that enables computers to solve problems by using examples of real-world data.

ML allows computers to auto-learn & **improve from experience** without being explicilty programmed to do so (mind-blown).

## Lesson 2

### AI VS ML

AI performs activities using human-like intelligence.

ML is a type of AI.

ML is how computers learn from data to discover patterns & make predictions.

### Types of Tasks or Techniques

#### Supervised Learning

Supervised learning is a type of ML technique.

* Example-driven training: every data point has a corresponding label or output value associated with it
  * As a result, the algo learns to predict labels or output values

Use cases:

* Predictions of the sale price of a house
* Classify objects in an image

#### Unsupervised Learning

Unsupervised learning there are **no labels** for the training data.

The algos try to learn with the patterns discovered in the data.

* Models inspect patterns to gain insights or make predictions

#### Reinforcement Learning

Reinforcement learning is learning what actions to take in a situation to maximize rewards (in the form of a number).

* Learns through consequences of actions in an environment

### How does ML help solve problems?

Traditional problem solving VS ML solving problems

![Traditional problem solving VS ML solving problems](assets/tradml.png)

* Traditional problem solving has to consider all edge cases, which is a vast number of them
  * A person analyzes a problem, and then engineers a solution in code
* ML automates some of statistical reasoning & pattern matching
  * In ML, the problem solver abstracts away part of their solution as a flexible component called a **model**
  * Then, it uses a special program called a **model training algorithm** to adjust the moel to real-world data
  * The result is a trained model that can be used to predict outcomes that are not part of the data set used to train it

ML is a new field that combines many traditional disciplines:

* Applied math
* Statistics
* Computer science

## Lesson 3

### Components of ML

Nearly all ML tasks involve 3 primary compopnents:

* ML model
  * Generic program made specific by the data used to train it
  * It can serve many purposes
  * A block of code used to solve different, but related problems
  * This model can continue to be improved after time and more data is consumed
  * Linear regression can:
    * Predict number of ppl wanting snow cones as the temparature increases
    * Predict number of ppl attending college based on the costs of admission going up
* Model training algorithm
  * The procedure to use data to shape a model for some use cases
  * Determine the changes to get to the desired model
  * Make small changes to the model
* Model inference algorithm
  * Process to use a trained model to solve a task
  * Ready to start using a trained model to generate predictions
