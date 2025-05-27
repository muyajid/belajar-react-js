import { createRoot } from "react-dom/client";
import { Biodata } from "./Biodata";
import { Menu } from "./component/Menu";
import './styles/style.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <Menu />
)