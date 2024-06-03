import { SearchWrapper } from './styled.ts';
import { TotalMenu } from '../../interfaces/totalManus.ts';
import { MenuWrapper } from '../Menu/styled.ts';

interface Props {
  data: TotalMenu;
}

const SearchResult: React.FC<Props> = ({ data }) => {
  return (
    <>
      <SearchWrapper>
        {Object.entries(data).map(([, itemObj]) => (
          Object.entries(itemObj.menus).map(([name, item]) => (
            <MenuWrapper key={name} bgColor={item.color} color={item.color} tagColor={item.tag_color}>
              <div>
                <p>#{item.tags.replace(/, /g, " #")}</p>
                <img src={`/images/ice_creams/${itemObj.img_url}/${item.img_url}.png`} alt={name} />
              </div>
              <p color={item.color}>
                {name}
                {item.menuDetail && <p className='menu__detail'>({item.menuDetail})</p>}
              </p>
            </MenuWrapper>
          ))
        ))}
      </SearchWrapper>
    </>
  );
}

export default SearchResult;
