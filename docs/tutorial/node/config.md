# Config

## Configuration path

- Mac

  - mainnet： `$HOME` + `Library` + `Application Support`+ `GQlcchain`
    - example：`/Users/ss/Library/Application Support/GQlcchain`
  - testnet  ： `$HOME` + `Library` + `Application Support `+ `GQlcchain_test`
    - example：`/Users/ss/Library/Application Support/GQlcchain_test`

- Windows

  - mainnet： `$HOME` + `AppData` + `Roaming` + `GQlcchain`
    - example：`C:\Users\pgu\AppData\Roaming\GQlcchain`
  - testnet  ： `$HOME`+ `AppData` + `Roaming` + `GQlcchain_test`
    - example：`C:\Users\pgu\AppData\Roaming\GQlcchain_test`

- Other

  - mainnet： `$HOME` + `.gqlcchain`
    - example：`/root/.gqlcchain`
  - testnet  ： `$HOME` + `.gqlcchain_test`
    - example：`/root/.gqlcchain_test`

  

## Directory Structure

```bash
├── GQlcchain\
|   ├── ledger\
|       ├── 000000.vlog
|       ├── 000104.sst
|       └── MANIFEST
|   ├── log\
|       ├── 2019-03-20T17-06\
|           └── qlc.log  
|   ├── wallet\
|       ├── 000000.vlog
|       ├── 000394.sst
|       └── MANIFEST
|   └── qlc.json  # Configuration file
└──
```



## Detailed description of the configuration file

```bash
{
	"version": 2, // Node version
	"dataDir": "C:\\Users\\65967\\AppData\\Roaming\\GQlcchain_test", // Default data directory to use for the databases and other persistence requirements
	"storageMax": "10GB", // The maximum storage space of the ledger, not used at present
	"autoGenerateReceive": false, // Auto generate receive block switch，default is false
	"logLevel": "error", // Log level，default is error
	"performanceEnabled": false, // Performance test switch，default is false
	"rpc": {
		"rpcEnabled": false, // RPC switch，default is false，if you want to enable RPC, you need to set it to true
		"httpEndpoint": "tcp4://0.0.0.0:19735",  // Http listening address 
		"httpEnabled": true, // Http switch，default is true
		"httpCors": [
			"*"
		], // Http access control，default is * 
		"httpVirtualHosts": [], // Http virtual host，not used at present
		"webSocketEnabled": true, // websocket switch，default is true
		"webSocketEndpoint": "tcp4://0.0.0.0:19736", // webSocket listening address 
		"ipcEndpoint": "\\\\.\\pipe\\gqlc-test.ipc", // IPC address，on Unix it assumes the endpoint is the full path to a unix socket, and Windows the endpoint is an identifier for a named pipe
		"ipcEnabled": true, // IPC switch，default is true
		"publicModules": [
			"qlcclassic",
			"ledger",
			"account",
			"net",
			"util",
			"mintage",
			"contract",
		] // A list of qlcchain modules that are exposed to RPC interface
	},
	"p2p": {
		"bootNode": [
			"/ip4/47.103.40.20/tcp/19734/ipfs/QmdFSukPUMF3t1JxjvTo14SEEb5JV9JBT6PukGRo6A2g4f",
			"/ip4/47.112.112.138/tcp/19734/ipfs/QmW9ocg4fRjckCMQvRNYGyKxQd6GiutAY4HBRxMrGrZRfc"
		], // List of defaults peers to connect on boot
		"listen": "/ip4/0.0.0.0/tcp/19734", // node listening info，use IPV4 and TCP，please ensure the port has not been occupied by other process
		"syncInterval": 120, // Synchronization block time interval
		"discovery": {
			"discoveryInterval": 30, // node search interval
			"limit": 20, // Maximum number of nodes per search
			"mDNSEnabled": false, // Local discovery switch
			"mDNSInterval": 30 // Local discovery interval
		},
		"identity": {
			"peerId": "QmTzyz1hfpRquGeSf6V4ErbZJ1hajDZqZSaViWWvUpzwBs", // Is a qlcchain peer identity
             // Qlcchain peer encrypted private key, note that it is not the account private key，is peer ID private key
			"privateKey": "CAASpgkwggSiAgEAAoIBAQC46DQQVE6DfW0UXencO0/esVefZyzqRrKZivLCQHHnRakwfMGBb1DuJcz63JVnf6cdUFcIjH3nv39R4/E0zdCScylQu9vGfHEOWsf2cDUWzG7U3u+9U4izI1+WcypFIbwiidU4NDAaW9936UVEWSEJiSHmNXzZBbewDBEqnRt3z3hIkM4eERt8O5TVopirT9oqXUe8OUK+8iamHA3A2b5S+H8Jo2AV3P9iZxSI1g0sKVqZU9/ClX3sKjaMmDv3fIjUK1GGPS6PJvebpJ1Bz0U1cR7rPMrWkAmvmC37xFlWiRgAPDDYZ+RaGvDzO+abaGR0AwR95A3DXEBLpBX8RYi7AgMBAAECggEAZK6jMsUFH1nbXDyqyy1MlyCPao9+iG5Ib4yWFKmMm/Z1Yp57qyPWuGXC0FHt1DZQ44hMa648HEVMaWWpgCwVRrkIJRq1V8WItd0+hnSgo7JbIvPlLHzgsVIwiTZaLNxqmY/dlsXr715ZNuzAt6+kapHN8JDtUypm06gubLqxKzHSVdPEG0YFI/T+V1XYchHC8199CpbUOvJ4hyAbiXn4O0askPvnYmFTWAgebzge+L/XxLjmrneNZD8PrQKPUbx4DhT7oP6XJ6sRKOZ3vtf3HnjaZoD6GPVyQWD+Bce1CwmD7snto+27tx0eOMGv5knkG0SJdhinLy+isoARPfI8oQKBgQDq6E5RhcvRQLAC5YWFsMvhCkEcIMC23gUJc/EuQpIyOjUoEOTdPzhrCKvXJClIbgg6i9v1AOi3c8DAC85EqSn8rpkh5KP0BOINvJqI7sQ94tBllTloBZf70axynTPvfVijDXPqoYt2gYIpK0cHNpm3/pMvzIdd3UqXqlD6NekBywKBgQDJgpCCpGEXzOTu2DOhYXk9qerL9RaEP0lUtdqXr4n1Phi7SVi33aHgfdWQixZH1tK/L9HArdg4qJL8Y4SObcgMysOF3l/FoCBdJgq97yuc1nK4AZpFHBUxZKiukqQqGI8yAbZQob3200Zko5BnpcLa/px3+u3tcdFH9+LrAbb20QKBgBzuz/aqjBgR55vzuSZmSDZHlQ1p21KqteQcK7CO8oLNOI7exdGaX9CPGNs+0Pbi1pCfeVAL9J3j2/HLgnRigZFlz+akyqzbjRw0BrSm8/TLYu+gGZn+VmHlyV+0jRkKT0iF96kGjK7j9KwtcGorB3PqHybcAjBFeVKE38Rxr2lRAoGARAN1kyK4Qrg9bQA8LPQhX9bCESUf/HL/5T+cECaHgeb7ofsXnreHs6XFN4w6cPTpHO6e9VG38Se0tMtCKnCTXP3zEHQGD0YEpmv4pDLdnYokHkcsMrdPz+QRqxqDnlG7wz0gtAZjf7O/xqgOTW19Xz0gwr5HICWSZaAdTwS9JIECgYBPkflSVEwaAZubm8JM5bFfgpRjiVKL3sFLX3aYjFXywVG7eNmRvCxSvJTcWZry7K6d8qGFJSjxuMUstrTMYgHZROxpr4B8FZVhKH2VTISCxApcj0FOPfHw4atmK3B6MKWo1DRBxFRwoAlzXMI1fCXzSqcPzSx2L3Uvo8FjMH6idw=="
		}
	},
	"pov": {
		"minerEnabled": false, // enable mining to generate blocks and earn QGAS
		"coinbase": "" // miner's coinbase QLC address
	} // PoV miner
}
```

