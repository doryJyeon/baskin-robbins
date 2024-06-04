import MoveButton from '../common/MoveButton';
import TitleDesc from '../common/TitleDesc';
import { OtherAppWrapper, HowToOrder, DeliveryTitle, HappyOrderWrapper } from './styled';

const Delivery = () => {
  return (
    <>
      <TitleDesc title={"Delivery"} subTitle='모바일 사전주문 & 배달 서비스' desc={"내 손안의 배스킨라빈스!<br />이제 모바일에서 빠르고 간편하게 주문해보세요!"} />

      <DeliveryTitle>
        <h4>배스킨라빈스 모바일 사전주문 서비스</h4>
        <p>배스킨라빈스와 함께하는 달콤한 시간!<br />모바일 앱을 통해 간편하게 주문, 결제와 배달 예약 서비스를 이용하세요!</p>
        <MoveButton className='red large' text={'해피오더 주문하기'} to={'https://goo.gl/s7uxrP'} blank={true} />
      </DeliveryTitle>

      <HappyOrderWrapper>
        <div>
          <div>
            <img src="/images/icons/delivery/icon_list_1_1.png" alt="order advantages" />
          </div>
          <div>
            <h4>모바일에서 주문은 여유롭게!<br />기다리는 시간은 슬림하게!</h4>
            <p>해피오더를 통해 모바일로 주문하고 원하는 시간에<br className='only__pc' />픽업 또는 배달 서비스를 이용하세요!</p>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/icons/delivery/icon_list_1_2.png" alt="order advantages" />
          </div>
          <div>
            <h4>모임 또는 행사, 단체<br className='only__pc' />예약주문 서비스!</h4>
            <p>원하는 날짜, 원하는 시간에 맞추어<br />제품을 미리 예약주문하세요!</p>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/icons/delivery/icon_list_1_3.png" alt="order advantages" />
          </div>
          <div>
            <h4>쿠폰, 적립, 할인들 다양한<br className='only__pc' />멤버쉽 서비스!</h4>
            <p>해피오더에서 제공되는 다양한<br className='only__pc' />쿠폰과 해피포인트 적립 서비스!</p>
          </div>
        </div>
      </HappyOrderWrapper>

      <HowToOrder>
        <h4>HOW TO ORDER</h4>

        <ol className="howto__img">
          <li>
            <img src="/images/icons/delivery/icon_list_2_1.png" alt="order step 1" />
            <h4>STEP 1</h4>
            <p>해피앱에 접속 후, 해피마켓 해피오더에서<br />원하시는 제품을 선택!</p>
          </li>
          <li>
            <img src="/images/icons/delivery/icon_list_2_2.png" alt="order step 2" />
            <h4>STEP 2</h4>
            <p>원하시는 제품과 옵션을<br />선택 후 결제하면 주문 완료!</p>
          </li>
          <li>
            <img src="/images/icons/delivery/icon_list_2_3.png" alt="order step 3" />
            <h4>STEP 3</h4>
            <p>원하시는 제품과 옵션을<br />선택 후 결제하면 주문 완료!</p>
          </li>
        </ol>
      </HowToOrder>

      <OtherAppWrapper>
        <h3>해피오더 외에도 다양한 배달 앱에서<br />배스킨라빈스를 만나보세요!</h3>
        <div>
          <img src="/images/icons/delivery/icon_list_4_1.png" alt="kakakotalk" />
          <p>카카오톡 주문하기</p>
          <MoveButton className='red' text={'주문하기'} to={'https://order.kakao.com/etc/bridge?next=/brands/BRkorea'} blank={true} />
        </div>
        <div>
          <img src="/images/icons/delivery/icon_list_4_2.png" alt="coupang" />
          <p>쿠팡이츠</p>
          <MoveButton className='red' text={'주문하기'} to={'https://share.coupangeats.com/ijTQ0ofHWfb'} blank={true} />
        </div>
        <div>
          <img src="/images/icons/delivery/icon_list_4_3.png" alt="bemin" />
          <p>배달의 민족</p>
          <MoveButton className='red' text={'주문하기'} to={'https://baeminkr.onelink.me/XgL8/763121a'} blank={true} />
        </div>
        <div>
          <img src="/images/icons/delivery/icon_list_4_4.png" alt="yogiyo" />
          <p>요기요</p>
          <MoveButton className='red' text={'주문하기'} to={'https://goo.gl/s7uxrP'} blank={true} />
        </div>
      </OtherAppWrapper>
    </>
  );
}

export default Delivery;
