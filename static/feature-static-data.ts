import { HiOutlineCheck } from 'react-icons/hi'
import { RiWallet3Line } from 'react-icons/ri'
import { HiOutlineCreditCard } from 'react-icons/hi'
import type { FeatureStaticData } from '../types/feature-static-data'

export const featureStaticData: FeatureStaticData[] = [
  { icon: HiOutlineCheck, iconSize: 25, description: 'Your level increases and you are entered in a rank' },
  { icon: HiOutlineCreditCard, iconSize: 30, description: 'Are all over the world waiting for you' },
  { icon: RiWallet3Line, iconSize: 35, description: 'They come in different colors, sizes and some are rare' },
  { icon: HiOutlineCheck, iconSize: 25, description: 'They come in different colors, sizes and some are rare' },
  {
    icon: HiOutlineCreditCard,
    iconSize: 30,
    description: 'All SpaceBalls land in your bag and many have different functions that help you advance in the game',
  },
  { icon: RiWallet3Line, iconSize: 35, description: 'Every time you find one of them, you get 3 different things ' },
]
