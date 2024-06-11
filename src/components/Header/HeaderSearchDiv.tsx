import { SearchDiv, Searchform } from "./style"
import { FaRegCircleXmark, FaRegRectangleXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { handleKeyDownEnter, handleSubitCheckSearchValue } from "../../utils/utilityFunctions";
import useHeaderStore from "../../store/useHeaderStore";

const HeaderSearchDiv = () => {
  const { searching, checkSearching, checkBgColored } = useHeaderStore();

  const handleBlurSearch = () => {
    checkSearching(false);
    checkBgColored();
  }

  return (
    <SearchDiv show={searching}>
      <button onClick={handleBlurSearch}>
        <FaRegRectangleXmark />&nbsp;close
      </button>
      <Searchform action="/search" >
        <input
          type="text"
          name="searchText"
          placeholder="제품명을 입력하세요"
          onKeyDown={handleKeyDownEnter}
          onBlur={handleBlurSearch}
        />
        <button className="cancel" type="button" onClick={handleBlurSearch}><FaRegCircleXmark /></button>
        <button className="submit" type="submit" onClick={handleSubitCheckSearchValue}><FaSearch /></button>
      </Searchform>
    </SearchDiv>
  )
}

export default HeaderSearchDiv
