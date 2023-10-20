# NodeJs KYC backend: enDe Project

enDe is a blockchain network build using avalanche subnets & precompile evm.

## Repos
- [NodeJs Backend for KYC](https://github.com/manojkgorle/improved-couscous)(This Repo)
- [NextJs frontend for KYC](https://github.com/aditya-git16/potential-fishstick)
- [Precompile Evm](https://github.com/manojkgorle/precompile-evm-extended)

## Features
- KYC 
- Native support for **Eddsa25519** curve using precompile
- Native **RandUint256** generator
- Custom **Mapping** precompile

## Env Example
```Shell
PRECOMPILE_RPC_URL = "http://127.0.0.1:9650/ext/bc/2Shnk726p9kf6zgp2wYH5itZSB4YawX18qEV2nHvew26ces9h2/rpc"
PRECOMPILE_PRIVATEKEY = "0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"
```

## Setup instructions

- Initialise the precompile-evm following instructinos in the Precompile-evm repo, start network & copy any nodes rpc endpoint.

- Set the `PRECOMPILE_RPC_URL` & `PRECOMPILE_PRIVATEKEY` in the .env in root directory

- in root directory run 
```Shell
node ./scripts/app.js
```

- Change the action parameter in form to the rpc port at app/kyc/page.tsx in frontend repo

## More Documentation 
- [Precompile Evm Readme](https://github.com/manojkgorle/precompile-evm-extended/blob/main/README.md)