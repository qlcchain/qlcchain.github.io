# Install

## Prepare  executable file

There are three ways to get  executable file：

- Compile go-qlc  source code
- Download from go-qlc release page
- Download the docker image from docker hub

### Compile go-qlc  source code

:::warning
Go 1.11.1 or above version is required. See Go installation guild: [go installation](https://golang.org/doc/install)
:::

#### Get go-qlc source code

- Use `go get`：

  ```bash
  go get github.com/qlcchain/go-qlc
  ```

  source code is downloaded at：

  ```bash
  $GOPATH/src/github.com/qlcchain/go-qlc/
  ```

  

- Use `git clone`：

  ```bash
  git clone https://github.com/qlcchain/go-qlc.git
  ```

  source code is downloaded at current directory

#### Compile

```bashthen you can get the executable file for all platforms，like this：
make clean all
```

then you can get the executable file for all platforms，like this：

```bash
gqlc-darwin-amd64-v1.0.1-9406ee2			      // go-qlc mainnet server for mac OS
gqlc-linux-amd64-v1.0.1-9406ee2             // go-qlc mainnet server for linux OS
gqlc-windows-386-v1.0.1-9406ee2.exe         // go-qlc mainnet server for Windows 386 OS
gqlc       // go-qlc mainnet server for Windows amd64
```

Select the files you need based on your own operating system.

### Download from  go-qlc release page

Link is：

```bash
https://github.com/qlcchain/go-qlc/releases
```

### Download the docker image

You can access [go-qlc dockerhub](<https://hub.docker.com/r/qlcchain/go-qlc/tags>) to find  latest release version and download it.

for example，now our latest release version is v1.0.1，use command

```bash
docker pull qlcchain/go-qlc:v1.0.1
```



## Start go-qlc node

### Start node

#### start a normal node without an account

example：

```bash
gqlc
```

#### start an account node

- by seed

  example：

  ```bash
  gqlc \
  --seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50
  ```

- by privateKey

  example：

  ```bash
  gqlc \
  --privateKey 9ca95e184d99769a3e324bbcf57906d04a9c221db72c5af491fc8e7c958f1c6526691fd4b19f28cf279f188769c672cdde577c8360498083da653e02b53f5a8a
  ```

- by account

  if you want start a node by account ，you need first import account into wallet

  - Import account into wallet

     example：

    ```bash
    gqlc walletimport \
    --seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50 \
    --password 123456
    ```

    if you cat

    ```bash
    import seed[ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50] \
    password[123456] => qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha \
    success
    ```

    prove that the import was successful

  - start a node

    example：

    ```bash
    gqlc \
    --account qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha \
    --password 123456
    ```



### Start  node by Docker  

If you want to start a node by docker, you need to refer to `Prepare  executable file` and download the docker image from docker hub .

You can choose to start a normal node without an account or start an account node.

#### start a normal node without an account

example：

```bash
docker container run -d --name go-qlc \
--restart always \
-p 19734:19734 \
-p 19735:19735 \
-p 19736:19736 \
-v /root/.gqlcchain:/root/.gqlcchain \
qlcchain/go-qlc:v1.0.1

```

> `--restart always` for more docker docs, please refer to the docker [website](<https://docs.docker.com/>)

#### start an account node

You only need to assign a value to the environment variable `seed` to start an account node

example：

```bash
docker container run -d --name go-qlc \
--restart always \
-p 19734:19734 \
-p 19735:19735 \
-p 19736:19736 \
-v /root/.gqlcchain:/root/.gqlcchain \
qlcchain/go-qlc:v1.0.1 --seed=ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50

```

#### start an account node by Docker Compose

- create `docker-compose.yml`

    ```yml
    version: "3.5"

    services:
    qlcchain_node:
        image: qlcchain/go-qlc:${version}
        container_name: qlcchain_node
        command: ["--configParams=rpc.rpcEnabled=true", "--seed=B4F6494E3DD8A036EFF547C0293055B2A0644605DE4D9AC91B45343CD0E0E559", "--nobootnode=true"]
        ports:
        - "9734:9734"
        - "9735:9735"
        - "127.0.0.1:9736:9736"
        networks:
        - qlcchain
        volumes:
        - type: bind
            source: ./data/
            target: /root/.gqlcchain/
        restart: unless-stopped
    
    networks:
    qlcchain:
        name: qlcchain

    ```
- run 
    ```bash
    docker-compose down -v && docker-compose up -d



