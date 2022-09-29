import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { DownloadSectionContainer, Card } from './styled'

const DownloadSection: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

  return (
    <Wrapper>
      <DownloadSectionContainer>
        <Card>
          <div>
            <Image src="/assets/icons/android.png" width={isMobile ? 19 : 33.76} height={isMobile ? 18 : 28.22} layout="fixed" alt="no img" />
            <span>Android</span>
          </div>
          <p>download</p>
        </Card>
        <Image src="/assets/icons/download-logo.png" width={isTablet ? 162.57 : 240} height={isTablet ? 163.09 : 224} layout="fixed" alt="no img" />
        <Card>
          <div>
            <Image src="/assets/icons/ios.png" width={isMobile ? 19 : 33.76} height={isMobile ? 18 : 28.22} layout="fixed" alt="no img" />
            <span>iOS</span>
          </div>
          <p>download</p>
        </Card>
      </DownloadSectionContainer>
    </Wrapper>
  )
}

export default DownloadSection
