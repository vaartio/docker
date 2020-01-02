# Why and when to use Kubernetes

Let's say you have decided to use containers for development of your service or application. Probably you use Docker
as a container platform. However, you still have one important issue waiting to be resolved. And that is orchestration
of your ecosystem. Containers are great but they don't provide any mechanism to deploy, scale or manage containers'
lifecycle themselves. For that you need orchestration system and Kubernetes is the de facto of them at the moment.
With Kubernetes you can determine access control of your cluster, memory and CPU limits and requirements of each of
containers and many other features that you ecosystem may need such as cron jobs, configuration, secrets, deployments,
load balancing and cluster IPs. Containers can also connect each other by using cluster's internal addresses and their
accessibility can be restricted, by namespaces for instance.

Kubernetes provides a flexible playground when your ecosystem consists of tens of separated apis and services. One big
advantage of using Kubernetes is that it allows you to use containers for everything in your system. Kind of no-brainer
but should not be forgotten. It has a learning curve which can be said deep. The configuration and management of all
yaml files can be confused. It also develops fast which means you must update your yaml templates every now and then.
However, there are more pros than cons and that enables micro-service design in application architecture. Deployment and
automated scaling of micro-services happens without an effort one they are configured. With third party extensions you
can also create A/B tests and canary deployments for any part of your ecosystem.
