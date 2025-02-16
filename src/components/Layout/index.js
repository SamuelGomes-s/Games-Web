import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import Menu from "../Menu";

export default function Layout() {
    return (
        <Container>
            <Menu />
            <Outlet />
        </Container>
    )
}