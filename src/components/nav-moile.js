import { routes } from '../utils/routes';

export const NavMobile = () => {
    return (
        <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
            <ul role="list" className="nav-menu-two w-list-unstyled">
                {routes.map((route) => {
                    const { href, title } = route;
                    return (
                        <li>
                            <a
                                href={href}
                                target="_blank"
                                className="nav-link" rel="noreferrer"
                            >
                                {title}
                            </a>
                        </li>
                    )
                })}
                <li className="mobile-margin-top-10">
                    <div className="button1 main">
                        <a
                            href="https://raydium.io/swap/?outputCurrency=GDisrnbVWjKJuAVqeWfYd9zMyV9gP7gXb3FQfd8xbKuM"
                            target="_blank"
                            className="button w-inline-block" rel="noreferrer"
                        >
                            <h1 className="button-text main">buy me</h1>
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}