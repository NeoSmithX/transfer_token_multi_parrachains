

export const chain_names = ['ksm','astar','bifrost_ksm']

interface type_decimal {
    ksm: number;
    bifrost_ksm: number;
    astar: number;
    [key: string]: number;
}
export const decimal:type_decimal  = {
    'ksm': 10**12,
    'bifrost_ksm': 10 **12,
    'astar': 10**18 
}