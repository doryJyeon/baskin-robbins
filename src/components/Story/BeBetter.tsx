import TitleDesc from '../common/TitleDesc';
import { Better, BetterWrapper } from './styled';

const BeBetter = () => {
  return (
    <>
      <TitleDesc title={"Be Better"} desc={"배려가 사회와 함께 하는 방법,<br />가치 있는 같이"} />

      <BetterWrapper>
        <Better>
          <img src="/images/be_better/img_dream.png" alt="pink dream" />

          <div>
            <h3 className="pink">핑크드림 캠페인이란?</h3>
            <p>
              배라와 소비자가 함께 만드는 따뜻한 31데이!
            </p>
            <p className="small">
              핑크드림 캠페인은 브랜드와 소비자가 함께 도움이 필요한 이웃을 지원하는 사회공헌 활동입니다.<br />
              배스킨라빈스는 2023년부터 핑크드림 캠페인의 일환으로 월드비전과 협업해<br />
              브랜드의 대표적 행사인 ‘31데이’ 수익의 3.1%를 기부금으로 적립하고 있습니다.
            </p>
            <ul className="pink">
              <li>31명의 자립준비청년 선발해 생애최초 종합건강검진 및 장학금 지원</li>
              <li>자립준비청년 대상 주거 환경 개선비 및 역량강화 교육비 지급</li>
              <li>핑크스푼 업사이클링 및 어린이 놀이터 환경 조성 사업 진행</li>
            </ul>
          </div>
        </Better>

        <Better>
          <img src="/images/be_better/img_farm.png" alt="pink farm" />

          <div>
            <h3 className="brown">핑크팜 캠페인이란?</h3>
            <p>
              지역 농가 상생 프로젝트
            </p>
            <p className="small">
              핑크팜 캠페인은 배스킨라빈스와 지역농가 청년농부지원을 위한 콜라보레이션 상생 프로젝트 입니다. <br />
              지역농가 지원을 위한 상품개발부터 원료 수급,특화 제품 개발, 홍보까지 지역농가 지원을 위한캠페인을 진행하고 있습니다.
            </p>
            <ul className="brown">
              <li>지역농가, 청년농부 지원 콜라보레이션 제품 출시</li>
            </ul>
          </div>
        </Better>

        <Better>
          <img src="/images/be_better/img_link.png" alt="pink link" />

          <div>
            <h3 className="green">핑크링크 캠페인이란?</h3>
            <p>
              중소 기업 콜라보 프로젝트
            </p>
            <p className="small">
              핑크링크 캠페인은 배스킨라빈스에서 중소기업 지원을 위해 진행하는 콜라보레이션 상생 프로젝트입니다. <br />
              제품 개발부터, 전국 매장 제품 출시 및 광고 지원까지 중소기업과 함께 상생하기 위해 노력합니다.
            </p>
            <ul className="green">
              <li>중소기업 콜라보레이션 제품 출시</li>
            </ul>
          </div>
        </Better>
      </BetterWrapper>
    </>
  );
}

export default BeBetter;
