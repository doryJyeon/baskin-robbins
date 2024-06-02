import MoveButton from '../common/MoveButton';
import TitleDesc from '../common/TitleDesc';
import { CateringWrapper, Caterings, DeliveryTitle, HowToOrder } from './styled';

const Catering = () => {
  return (
    <>
      <TitleDesc title={"단체주문"} desc={"단체주문도 언제나, 어디서나 배스킨라빈스!"} />

      <DeliveryTitle>
        <h3>특별한 날, 이벤트 행사 등 단체 선물이 필요할 때 <br />배스킨라빈스 단체주문 혜택도 받고 편하게 받아보세요!</h3>
        <MoveButton className="red large" text={"주문서 접수하기"} to={'https://www.baskinrobbins.co.kr/store/catering-order.php'} blank={true} />
        <p className="small">수령일 기준 최소 3일전 주문 가능</p>
      </DeliveryTitle>

      <CateringWrapper>
        <Caterings>
          <div style={{ backgroundImage: "url(/images/icons/delivery/img_info_item_1.png)" }} />
          <div>
            <p className="small">아이스크림 제품</p>
            <h4>회사, 관공서, 은행, 학교 등</h4>
            <h4 className="deep">한 장소로 일괄배송</h4>
            <div>
              <div>
                <p className="round_title">할인 및 혜택</p>
                <p>할인혜택 <span className="deep">별도협의 필요</span></p>
                <p>50만원 이상 <span className="deep">배송/배달 서비스</span></p>
              </div>
              <div>
                <p className="round_title">결제방식</p>
                <p>현금 (계좌이체) / 카드 (전화결제)</p>
              </div>
            </div>
          </div>
        </Caterings>
        <Caterings>
          <div style={{ backgroundImage: "url(/images/icons/delivery/img_info_item_2.png)" }} />
          <div>
            <p className="small">아이스크림 제품</p>
            <h4>전국 VIP 고객에게 원하는 시간 / 장소로 배달</h4>
            <h4 className="deep">여러곳 배달</h4>
            <div>
              <div>
                <p className="round_title">할인 및 혜택</p>
                <p>50만원 이상 <span className="deep">5%</span></p>
                <p>100만원 이상 <span className="deep">별도 협의 필요</span></p>
                <p>50만원 이상 <span className="deep">주문 가능</span></p>
              </div>
              <div>
                <p className="round_title">결제방식</p>
                <p>카드 (전화결제)</p>
              </div>
            </div>
          </div>
        </Caterings>
        <Caterings>
          <div className='bg_bottom' style={{ backgroundImage: "url(/images/icons/delivery/img_info_item_3.png)" }} />
          <div>
            <p className="small">온/오프라인 상품권</p>
            <h4>매장, 해피오더, 배달앱 다양한 채널 결제 가능</h4>
            <h4 className="deep">모바일교환권</h4>
            <div>
              <div>
                <p className="round_title">할인 및 혜택</p>
                <p>500만원 이상 <span className="deep">1%</span></p>
                <p><span className="deep">발송료 무료 </span>(건당 50원)</p>
              </div>
              <div>
                <p className="round_title">결제방식</p>
                <p>현금 (계좌이체) /</p>
                <p>법인카드 (전화결제)</p>
              </div>
            </div>
          </div>
        </Caterings>
        <Caterings>
          <div style={{ backgroundImage: "url(/images/icons/delivery/img_info_item_4.png)" }} />
          <div>
            <p className="small">온/오프라인 상품권</p>
            <h4>모바일사용이 익숙지 않은 분께 감사의 마음을 전하고 싶다면?</h4>
            <h4 className="deep">지류상품권</h4>
            <div>
              <div>
                <p className="round_title">할인 및 혜택</p>
                <p>300만원 이상 <span className="deep">2%</span></p>
                <p>500만원 이상 <span className="deep">3%</span></p>
                <p>포장봉투 제공 / 등기발송 (1곳)</p>
              </div>
              <div>
                <p className="round_title">결제방식</p>
                <p>현금 (계좌이체) /</p>
                <p>법인카드 (현장결제)</p>
              </div>
            </div>
          </div>
        </Caterings>
        <Caterings>
          <div style={{ backgroundImage: "url(/images/icons/delivery/img_info_item_5.png)" }} />
          <div>
            <p className="small">아이스크림, 음료 제품</p>
            <h4>실내외 공연, 연예인, 축제 등 이벤트 장소 케이터링</h4>
            <h4 className="deep">아이스크림 트레일러</h4>
            <div>
              <div>
                <p className="round_title">할인 및 혜택</p>
                <p>별도 협의 필요</p>
              </div>
              <div>
                <p className="round_title">결제방식</p>
                <p>1:1 문의 (400만원 이상)</p>
              </div>
            </div>
          </div>
        </Caterings>
      </CateringWrapper>

      <HowToOrder>
        <h4>HOW TO ORDER</h4>

        <ol className="howto__img">
          <div>
            <img src="/images/icons/delivery/img_order_item_1.png" alt="order step 1" />
            <h4>STEP 1</h4>
            <p>해피앱에 접속 후, 해피마켓 해피오더에서<br />원하시는 제품을 선택!</p>
          </div>
          <div>
            <img src="/images/icons/delivery/img_order_item_2.png" alt="order step 2" />
            <h4>STEP 2</h4>
            <p>원하시는 제품과 옵션을<br />선택 후 결제하면 주문 완료!</p>
          </div>
          <div>
            <img src="/images/icons/delivery/img_order_item_3.png" alt="order step 3" />
            <h4>STEP 3</h4>
            <p>원하시는 제품과 옵션을<br />선택 후 결제하면 주문 완료!</p>
          </div>
        </ol>

        <ul className="howto__desc">
          <li>배달 서비스는 인근 매장에서 진행되며, 단체 주문 시 배달비 무료 혜택을 드립니다. (단, 매장 상황에 따라 배달 서비스가 제한될 수 있습니다.)</li>
          <li>문의: 월~금 AM 9:00 ~ PM 6:00</li>
          <li>연락처 : 010-2881-9236</li>
        </ul>

        <MoveButton className="red large" text={"주문서 접수하기"} to={'https://www.baskinrobbins.co.kr/store/catering-order.php'} blank={true} />
      </HowToOrder>
    </>
  );
}

export default Catering;
