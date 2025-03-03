import { IoMdSearch } from "react-icons/io";
import { ContentInput, Input, SearchButton } from "./styles";
import Loader from "../../../../components/Loader";

export default function GameInput({ $loader, $onClickBtn, ...props }) {
    return (
        <ContentInput>
            <Input
                {...props}
            />
            {$loader ? <Loader /> : <SearchButton onClick={$onClickBtn} >
                <IoMdSearch size={30} />
            </SearchButton>}
        </ContentInput>
    )
}