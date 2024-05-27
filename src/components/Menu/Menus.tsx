import { MenuInfo } from '../../interfaces/totalManus';
import TitleDesc from './TitleDesc';
import { MenusUl, MenuWrapper } from './styled';

interface Props {
  data: MenuInfo;
  menuType: string;
}

const Menus: React.FC<Props> = ({ data, menuType }) => {

  return (
    <>
      <TitleDesc title={menuType} desc={data.description.replace(/\n/g, "<br />")} />

      <MenusUl>
        {Object.entries(data.menus).map(([name, item]) => (
          <MenuWrapper key={name} bgColor={item.color} color={item.color} tagColor={item.tag_color}>
            <div>
              <p>#{item.tags.replace(/, /g, " #")}</p>
              <img src={`/images/ice_creams/${data.img_url}/${item.img_url}.png`} alt={name} />
            </div>
            <p color={item.color}>{name}</p>
          </MenuWrapper>
        ))}
      </MenusUl>
    </>
  );
}

export default Menus;
