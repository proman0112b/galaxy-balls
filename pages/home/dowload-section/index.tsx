import React from 'react'
import Image from 'next/image'
import Wrapper from '../../../components/wrapper'
import { DownloadSectionContainer, Card } from './styled'

const DownloadSection: React.FC = () => {
  return (
    <Wrapper>
      <DownloadSectionContainer>
        <Card style={{ marginRight: '36.88px' }}>
          <div>
            <Image src="/assets/icons/android.png" width={33.76} height={28.22} layout="fixed" alt="no img" />
            <span>Android</span>
          </div>
          <p>download</p>
        </Card>
        <Image src="/assets/icons/download-logo.png" width={240} height={224} layout="fixed" alt="no img" />
        <Card style={{ marginLeft: '63.86px' }}>
          <div>
            <Image src="/assets/icons/ios.png" width={33.76} height={28.22} layout="fixed" alt="no img" />
            <span>iOS</span>
          </div>
          <p>download</p>
        </Card>
      </DownloadSectionContainer>
    </Wrapper>
  )
}

export default DownloadSection
