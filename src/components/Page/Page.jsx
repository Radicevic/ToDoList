import './Page.css';
import { Header } from "../Header/Header";

export function Page({ children, pageTitle, pageNumber }) {
    return <div className="page">
        <Header title={pageTitle} />
        {children}
        <div className='footer'>{pageNumber}</div>
    </div>
}
