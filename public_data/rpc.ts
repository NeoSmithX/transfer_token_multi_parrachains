interface type_chain_rpc {
    ksm: string;
    bifrost_ksm: string;
    astar: string;
    [key: string]: string;
}
export const rpc_parachains:type_chain_rpc = {
    'ksm': "wss://kusama-rpc.polkadot.io",
    'bifrost_ksm':"wss://bifrost-rpc.dwellir.com",
    'astar':'wss://astar-rpc.dwellir.com'

}