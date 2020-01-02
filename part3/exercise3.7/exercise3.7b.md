# When to use Docker and what are the benefits

Docker has been the de facto container platform in the past years. However its market share is going down because more
competitors enter the market. The most prominent competitor seems to be rkt (rocket) which is said to play pretty well
with Kubernetes. With that said, Docker is still overwhelmingly the biggest system out there with around ~80 percent
market share. Along that position it has the best integration solutions and support for third party systems. Therefore
it is an easy (and business wise) choice for the most of the developers who are considering to use containers for their
application or service. More precisely the question is whether to use containers at all. If the other option is to
build your application and deploy it to servers which have been provisioned directly by some provisioning tool, such as
Ansible, the answer is absolutely Docker (or some other container platform).

Containers have many advantages against traditionally provisioned servers. One significant advantage is that container
images are immutable. It is guaranteed that each container will have the same software and operating system installed.
That makes scaling much more easier and faster. On the other hand, containers also make the development of the
application faster and easier. With Docker, the developers can set up their local development environment much faster
and easier than before (when they had to deal with different virtual boxes). They also can develop multiple applications
at the same time because every application has its stack of software inside the container. This also means that
containers' software can be easily updated.

However, there are options for containers. Today most of the web applications leverage the power of cloud services. All
of the biggest players (AWS, Azure, Google) provide serverless solutions which means you can run your code in the cloud
provider's service and you have to manage nothing related to environment where the service is running. This sets you
free of updating all software you have installed in your Dockerfile such as version of container's operating system. It
also sets you free of worrying of the scalability of your service. Serverless solutions usually pay more than using
your own cluster solution but they have become cheaper and are useful solutions for many companies today.
