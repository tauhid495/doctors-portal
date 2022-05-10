import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? "text-primary" : "text-baseBlack"}
                to={to}

            >
                {children}
            </Link>

        </div>
    );
}
export default CustomLink;