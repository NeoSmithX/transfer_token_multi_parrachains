interface type_chain_rpc {
   
    [key: string]: string;
}
export const rpc_parachains:type_chain_rpc = { //
    'ksm': "wss://kusama-rpc.polkadot.io",
    'bifrost_ksm':"wss://bifrost-rpc.dwellir.com",
    'astar':'wss://astar-rpc.dwellir.com',
    'zeitgeist':'wss://zeitgeist-rpc.dwellir.com',
    'centrifuge':'rpc-centrifuge.luckyfriday.io'

}