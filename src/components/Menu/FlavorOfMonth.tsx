import TitleDesc from '../common/TitleDesc';
import { getDate } from '../../utils/dateUtils';
import { FlavorItemWrapper, FlavorMonth, FlavorWrapper } from './styled';

const FlavorOfMonth = () => {
  return (
    <>
      <TitleDesc title={`${getDate("nextMonth")}월 이달의 맛`} desc={undefined} />

      <FlavorMonth>
        <article>
          <h4>Would U Like Bon Bon</h4>
          <h3>우주 라이크 봉봉</h3>
          <p>넛츠 초코&밀크 초코, 바닐라에 달콤한 초코 아몬드 리본과<br className='only__mobile' /> 바삭한 초코 프레첼 볼이 가득!</p>
          <hr />
          <FlavorWrapper>
            <li>
              <img src="/images/icons/flavor/milk_chocolate.png" alt="milk chocolate" />
              <p>밀크 초콜릿</p>
            </li>
            <li>
              <img src="/images/icons/flavor/vanilla.png" alt="vanilla" />
              <p>바닐라</p>
            </li>
            <li>
              <img src="/images/icons/flavor/chocolate_almond.png" alt="chocolate almond" />
              <p>초코 아몬드</p>
            </li>
            <li>
              <img src="/images/icons/flavor/chocolate_pretzel.png" alt="chocolate pretzel" />
              <p>초코 프레첼</p>
            </li>
          </FlavorWrapper>

        </article>

        <img src="/images/flavor_of_the_month/poster.jpg" alt="poster" />

        <h2>이달의 신제품</h2>

        <FlavorItemWrapper>
          <li>
            <img src="/images/flavor_of_the_month/icecream.jpg" alt="" />
            <p>우주 라이크 봉봉</p>
          </li>
          <li>
            <img src="/images/flavor_of_the_month/cake.jpg" alt="cake" />
            <p>우주 라이크 봉봉 케이크</p>
          </li>
          <li>
            <img src="/images/flavor_of_the_month/blast.jpg" alt="blast" />
            <p>우주 라이크 봉봉 블라스트</p>
          </li>
          <li>
            <img src="/images/flavor_of_the_month/mozzi.jpg" alt="mozzi" />
            <p>우주 라이크 봉봉 모찌</p>
          </li>
        </FlavorItemWrapper>
      </FlavorMonth>
    </>
  );
}

export default FlavorOfMonth;
