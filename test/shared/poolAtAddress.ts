import { abi as POOL_ABI } from '@etcswap/v3-core/artifacts/contracts/ETCswapV3Pool.sol/ETCswapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IETCswapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IETCswapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IETCswapV3Pool
}
