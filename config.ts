

export const chain_names = ['ksm','astar','bifrost_ksm']

interface type_decimal {
    ksm: number;
    bifrost_ksm: number;
    astar: number;
    [key: string]: number;
}
export const decimal:type_decimal  = {
    'ksm': 1e12,
    'bifrost_ksm': 1e12,
    'astar': 1e18,
    'zeitgeist': 1e10,
    'centrifuge': 1e18 
}