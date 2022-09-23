import React from 'react'
import Image from 'next/image'
import { AiOutlineInstagram } from 'react-icons/ai'
import Wrapper from '../../../components/wrapper'
import { MainSectionContainer, Title, Description, CardList, Card, OfficialSiteWrapper, OfficialSite, Instagram } from './styled'

const MainSection: React.FC = () => {
  return (
    <Wrapper>
      <MainSectionContainer>
        <Title>partners</Title>
        <Description>
          Here you can find all the partners who worked on the GalaxyBalls project and supported us with their know-how. Each of them has contributed
          something that made this project unique, and that&apos;s how we got to this result.
        </Description>
        <CardList>
          <Card>
            <Image src="/assets/images/partners/blend.png" width={258} height={202} alt="no img" />
            <h4>Blend</h4>
            <span>Consulting</span>
            <p>
              Aldin has helped us in the areas of consulting and ideas. He was one of the first partners in this project and has led to further
              contacts as with aldin then also with besnik.
            </p>
            <OfficialSiteWrapper>
              <OfficialSite>Official site</OfficialSite>
              <Instagram>
                <AiOutlineInstagram />
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/aldin.png" width={258} height={202} alt="no img" />
            <h4>Aldin</h4>
            <span>Multitasking</span>
            <p>
              Aldin has supported us in the area of consulting, ideas and photography. We also owe him the cooperation with our current transporter.
              Aldin is very multitasking and a very reliable partner.
            </p>
            <OfficialSiteWrapper>
              <OfficialSite>Official site</OfficialSite>
              <Instagram>
                <AiOutlineInstagram />
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/besnik.png" width={258} height={202} alt="no img" />
            <h4>Besnik</h4>
            <span>Transporter</span>
            <p>
              Besnik tafallari is not only our official GalaxyBalls transporter but also the best jason statham double in the world. We found him so
              interesting that a collaboration was inevitable.
            </p>
            <OfficialSiteWrapper>
              <OfficialSite>Official site</OfficialSite>
              <Instagram>
                <AiOutlineInstagram />
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/samafro.png" width={258} height={202} alt="no img" />
            <h4>Samafro</h4>
            <span>Videomaker</span>
            <p>
              Samafaro has flown us very great video footage from around the world. His recordings are of the highest quality as well as his work.
            </p>
            <OfficialSiteWrapper>
              <OfficialSite>Official site</OfficialSite>
              <Instagram>
                <AiOutlineInstagram />
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
        </CardList>
        <CardList>
          <Card>
            <Image src="/assets/images/partners/john.png" width={258} height={202} alt="no img" />
            <h4>John</h4>
            <span>UI/UX Designer</span>
            <p>
              John is a master of design, we owe the website, the app and much more to him. His work is great and it was a pleasure to work with him
              for nights.
            </p>
          </Card>
          <Card>
            <Image src="/assets/images/partners/lisa.png" width={258} height={202} alt="no img" />
            <h4>Lisa</h4>
            <span>Consulting</span>
            <p>
              Lisa is the founder of the sqwr, a software company in Germany. She was responsible for consulting the project and was a great support
              for us.
            </p>
            <OfficialSiteWrapper>
              <OfficialSite>Official site</OfficialSite>
              <Instagram>
                <AiOutlineInstagram />
              </Instagram>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/crowdfunding.png" width={258} height={202} alt="no img" />
            <h4>Crowdfunding</h4>
            <span>List of all Superheroes</span>
            <p>Here you will soon find all the superheroes who supported us on ulule.com and Kickstarter. Coming soon</p>
            <OfficialSiteWrapper>
              <OfficialSite>ulule.com</OfficialSite>
              <OfficialSite style={{ width: '106px' }}>kickstarter.com</OfficialSite>
            </OfficialSiteWrapper>
          </Card>
          <Card>
            <Image src="/assets/images/partners/joinus.png" width={258} height={222} alt="no img" />
            <h4>Do you want to join us?</h4>
            <span>Contact us!</span>
            <p>
              We are always ready to collaborate with other talents. Whether you&apos;re a designer, artist, influencer, etc., just drop us a line so
              we can get you involved in the Galaxyballs project!
            </p>
          </Card>
        </CardList>
      </MainSectionContainer>
    </Wrapper>
  )
}

export default MainSection
