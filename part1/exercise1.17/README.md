# My Javascript Environment

Usage:

```
$ docker pull vaartio/my-js-environment
$ docker run --mount type=bind,source="$(pwd)"/app,target=/app/ -it vaartio/my-js-environment
```

You can now edit all files inside `./app` directory on you host machine and run them in the container.

Run in container:
```
root@6bfb0380eb53:/app# node index.js
Node is working!
```
