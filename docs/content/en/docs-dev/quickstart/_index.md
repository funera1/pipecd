---
title: "Quickstart"
linkTitle: "Quickstart"
weight: 3
description: >
  This page describes how to quickly get started with PipeCD on Kubernetes.
---

This page is a guideline for installing PipeCD into your Kubernetes cluster and deploying a "hello world" application to that same Kubernetes cluster.

Note: It's not required to install the PipeCD control plane to the cluster where your applications are running. Please read this [blog post](/blog/2021/12/29/pipecd-best-practice-01-operate-your-own-pipecd-cluster/) to understand more about PipeCD in real life use cases.

### Prerequisites
- Having a Kubernetes cluster and connect to it via [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/).
- Forked the [Examples](https://github.com/pipe-cd/examples) repository

### 1. Installing PipeCD client

The official PipeCD client named `pipectl` can be installed using the following command

``` console
OS="darwin" # or "linux"
curl -Lo ./pipectl https://github.com/pipe-cd/pipecd/releases/download/{{< blocks/latest_version >}}/pipectl_{{< blocks/latest_version >}}_${OS}_amd64
```

Then make the pipectl binary executable

``` console
chmod +x ./pipectl
```

You can also move the pipectl binary to the $PATH for later use

```console
sudo mv ./pipectl /usr/local/bin/pipectl
```

### 2. Installing PipeCD's component with pipectl

We can simply use __pipectl quickstart__ command to start the PipeCD installation process and follow the instruction

```console
pipectl quickstart --version {{< blocks/latest_version >}}
```

Follow the instruction, the PipeCD control plane will be available at [http://localhost:8080](http://localhost:8080) and pipectl command will open the PipeCD console automatically on your browser.

To login, you can use the configured static admin account as below:
- username: `hello-pipecd`
- password: `hello-pipecd`

![](/images/quickstart-login-form.png)

After logged in successfully, the browser will redirect you to the PipeCD console settings page at `piped` settings tab. You will find the `+ADD` button on the top of this page, click there and insert information to register the deployment runner for PipeCD (called `piped`).

![](/images/quickstart-adding-piped.png)

Click on the `Save` button, and then you can see the piped-id and secret-key.
Be sure to keep a copy for later use.

![](/images/quickstart-piped-registered.png)

Use the above value to fill the form showing in the terminal you run `pipectl quickstart` command

```console
...
Fill up your registered Piped information:
✔ ID: 2bf655c6-d7a8-4b97-8480-43fb0155539e█
Key: 02s3b0b6bo07kvzr8662tke4i292uo5n8w1x9pn8q9rww5lk0b
GitRemoteRepo: https://github.com/{FORKED_GITHUB_ORG}/examples.git

```

That's all!

Note: The __pipectl quickstart__ command will keep running to expose your PipeCD console on `localhost:8080`. If you stop the process, the installed PipeCD components will not lost, you can access to the PipeCD console anytime using __kubectl port-forward__ command

```console
kubectl -n pipecd port-forward svc/pipecd 8080
```

### 3. Registering a kubernetes application
Navigate to the `Applications` page, click on the `ADD` button on the top left corner.

Go to the `ADD FROM SUGGESTIONS` tab, then select:
- Piped: `dev` (you just registered)
- PlatformProvider: `kubernetes-default`

You should see a lot of suggested applications. Select the `canary` application and click the `SAVE` button to register.

![](/images/quickstart-adding-application-from-suggestions.png)

After a bit, the first deployment would be complete automatically to sync the application to the state specified in the current Git commit.

![](/images/quickstart-first-deployment.png)

### 4. Let's deploy!
Let's get started with deployment! All you have to do is to make a PR to update the image tag, scale the replicas, or change the manifests.

For instance, open the `kubernetes/canary/deployment.yaml` under the forked examples' repository, then change the tag from `v0.1.0` to `v0.2.0`.

![](/images/quickstart-update-image-tag.png)

After a short wait, a new deployment will be started to update to `v0.2.0`.

![](/images/quickstart-deploying.png)

### 5. Cleanup
When you’re finished experimenting with PipeCD, you can uninstall with:

``` console
pipectl quickstart --uninstall
```

### What's next?

To prepare your PipeCD for a production environment, please visit the [Installation](/docs/installation/) guideline. For guidelines to use PipeCD to deploy your application in daily usage, please visit the [User guide](/docs/user-guide/) docs.
