import { IoMdSearch } from "react-icons/io";
import { ContentInput, Input, SearchButton } from "./styles";

export default function GameInput({ $onClickBtn, ...props }) {
    return (
        <ContentInput>
            <Input
                {...props}
            />
            <SearchButton onClick={$onClickBtn}>
                <IoMdSearch size={30} />
            </SearchButton>
        </ContentInput>
    )
}