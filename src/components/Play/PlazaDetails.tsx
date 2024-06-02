import MoveButton from '../common/MoveButton';
import { PlazaWrapper, PlazaDetail } from './styled';

const PlazaDetails = () => {
  return (
    <PlazaWrapper >
      <PlazaDetail>
        <p>내가 만드는 맛이 <br />31가지 아이스크림이 된다고?</p>
        <h2>내가 만드는 아이스크림</h2>
        <MoveButton className='red' text={'만들어주세요'} to={"https://www.baskinrobbins.co.kr/play/plaza/new.php"} blank={true} />
      </PlazaDetail>

      <PlazaDetail bgColor="#f8e2c2">
        <p>우리 브랜드를 <br />"널리널리" 알리고 싶은 기업 모여라</p>
        <h2>중소기업 콜라보레이션</h2>
        <MoveButton className='red' text={'우리와 함께해요'} to={"https://www.baskinrobbins.co.kr/play/plaza/collabo.php"} blank={true} />
      </PlazaDetail>

      <PlazaDetail bgColor="#c7eeff">
        <p>배라와의 시작<br />베라로의 시작</p>
        <h2>점포개설 문의</h2>
        <MoveButton className='red' text={'동행을 희망해요'} to={"https://www.baskinrobbins.co.kr/play/plaza/consulting.php"} blank={true} />
        <MoveButton className='whiteRed' text={'더 알아보기'} to={"https://www.baskinrobbins.co.kr/information-center/consulting/br.php"} blank={true} />
      </PlazaDetail>
    </PlazaWrapper>
  );
}

export default PlazaDetails;
