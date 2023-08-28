const { ApiPromise} = require('@polkadot/api')
const { WsProvider} = require('@polkadot/rpc-provider')
const { Keyring } = require('@polkadot/api')
const Papa = require('papaparse')
const fs = require('fs')

import { rpc_parachains } from "./public_data/rpc"
import { chain_names, decimal } from "../config"
async function main(){
    // Construct
    let api:Record<any,any> = {}
    
    for (let i = 0; i<chain_names.length;i++){
        let chain_name:string = chain_names[i]
        if (chain_name in rpc_parachains){
            let wsProvider  = new WsProvider(rpc_parachains[chain_name])
            api[chain_name] = await ApiPromise.create({ provider: wsProvider })
        }else{
            console.log('init the chain api error and return ' + chain_name)
            return
        }
    }
   
    
    // const api = await ApiPromise.create({ provider: wsProvider })

    // create account 
    const seed_phase = process.env.my_seed as string
    const keyring = new Keyring({ type: 'sr25519' })
    const signer = keyring.addFromUri(seed_phase)
    const anyChainAddress = signer.address
    console.log('my address is '+anyChainAddress)
    // return
    // load csv
    let csvData = fs.readFileSync('public_data/transfer_data.csv', 'utf8');
    let results = Papa.parse(csvData, {
    header: true
    });
    // console.log('transfer data: ')
    // console.log(results)
    // transfer
    let transfer_data = results.data
    let tx_batch = []
    for (let i =0;i<transfer_data.length;i++){
        let chain_name = transfer_data[i].chain_name
        if (chain_name ==''){
            continue
        }
        let tx = await api[chain_name].tx.balances.transferKeepAlive(
            {Id: transfer_data[i].target_address},
            Math.floor(transfer_data[i].amount * decimal[chain_name] ).toLocaleString().replace(/[^\d.]/g, "")
            
        )
        // console.log(transfer_data[i].target_address)
        // console.log(transfer_data[i].amount * decimal[chain_name] )
        tx_batch.push(tx)
        let if_submit = false
        if (i == transfer_data.length-1){
            if_submit = true
        }else if (chain_name != transfer_data[i+1].chain_name){
            if_submit = true
        }
        if (if_submit){
            // console.log(tx_batch)
            await api[chain_name].tx.utility.batchAll(tx_batch).signAndSend(signer,{nonce:-1})
            tx_batch = []
            console.log('transfer completed in'+ chain_name)
        }
    }
    

  

}
main().then(() => {
    console.log('test end')
})