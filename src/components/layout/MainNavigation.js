import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (  
        <header className={classes.header}>
            <div className={classes.logo}>
                Bergen Real Estate
                <img src="https://w7.pngwing.com/pngs/573/614/png-transparent-ng%C5%A9-hanh-s%C6%A1n-district-house-apartment-real-estate-volta-redonda-real-estate-logos-for-sale-angle-text-apartment.png" width="80px" alt="image" />
                <span>Tlf: +47 95235507; E-mail: zhekovdobri@gmail.com</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Apartments</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Inquiry</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header> 
     );
}

export default MainNavigation;