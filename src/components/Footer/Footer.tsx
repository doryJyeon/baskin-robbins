import MoveImg from '../common/MoveImg';
import MoveLink from '../common/MoveLink';
import { CompanyLink, FooterWrapper, HappyLogos, LogoMenu, LogoWrapper, MenuWrapper, SnsLogos, SnsWrapper } from './style';
import { footerMenus } from '../../data/FooterMenus';

const Footer = () => {

  return (
    <footer>
      <FooterWrapper>
        <CompanyLink>
          <MoveLink to={"none"} text="신규 직영점 입점제의" />
          <MoveLink to={"none"} text="점포개설문의" />
          <MoveLink to={"none"} text="채용문의" />
          <MoveLink to={"none"} text="윤리신고센터" />
          <MoveLink to={"none"} text="해피포인트카드 이용약관" />
          <MoveLink to={"none"} text="배스킨라빈스 리워드 이용약관" />
          <MoveLink to={"none"} text="개인정보처리방침" />
          <MoveLink to={"none"} text="영상정보처리기기운영관리방침" />
          <MoveLink to={"none"} text="안전보건 경영방침" />
          <MoveLink to={"none"} text="거래희망회사 사전등록" />
        </CompanyLink>

        <LogoMenu>
          <LogoWrapper>
            <img src="/images/logos/h_logo_2.png" alt="baskin robbins logo" />

            <p>사업자 등록번호 : 303-81-09535</p>
            <p>비알코리아(주) 대표이사 도세호</p>
            <address>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</address>
            <p>TEL : <a href="tel:+8280-555-3131">080-555-3131</a></p>
            <p>개인정보관리책임자 : 조성희/상무보</p>
            <p>Copyright © 2023 BRKOREA Company. All Rights Reserved.</p>
          </LogoWrapper>

          <MenuWrapper>
            <ul>
              {Object.entries(footerMenus).map(([keys, values]) => (
                <li>
                  {keys}

                  <ol>
                    {Object.entries(values).map(([key, value]) => (
                      <MoveLink text={key} key={key} to={value[0]} isLi={true} />
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </MenuWrapper>
        </LogoMenu>

        <SnsWrapper>
          <HappyLogos>
            <MoveImg to={"https://www.happypointcard.com/page/main/index.spc"} src={"logos/btn_happy_point.png"} alt={"btn_happy_point"} blank={true} />
            <MoveImg to={"https://m.celectory.com/mobile/gift/recommend;jsessionid=fnRBrqkBa13UVG3epczaA1KY-Yl9C_13mIwvfMYAc1aaIg6mxo5E!1522053897!84788894"} src={"logos/btn_happy_market.png"} alt={"btn_happy_market"} blank={true} />
            <MoveImg to={"https://www.spc.co.kr/share/spc-foundation/introduction/"} src={"logos/btn_spc_story.png"} alt={"btn_spc_story"} blank={true} />
          </HappyLogos>

          <SnsLogos>
            <MoveImg to={"https://www.instagram.com/baskinrobbinskorea/"} src={"logos/btn_instagram.png"} alt={"btn_instagram"} blank={true} />
            <MoveImg to={"https://www.youtube.com/channel/UCdUlCaxi7gx9Q-WDVDe30YA"} src={"logos/btn_youtube.png"} alt={"btn_youtube"} blank={true} />
            <MoveImg to={"https://www.facebook.com/baskinrobbinskr/?locale=ko_KR"} src={"logos/btn_facebook.png"} alt={"btn_facebook"} blank={true} />
            <MoveImg to={"https://www.brmagazine.co.kr/"} src={"logos/btn_magazine.png"} alt={"btn_magazine"} blank={true} />
          </SnsLogos>
        </SnsWrapper>

        <p>
          이 홈페이지는 개인 포트폴리오용으로 실제 운영 중인 배스킨라빈스 홈페이지가 아닙니다.
          <br />icons &copy; Freepik
        </p>

      </FooterWrapper>
    </footer>
  );
}

export default Footer;
