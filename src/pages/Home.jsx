import React from 'react';
import BtnViews from "../components/BtnViews";

import "../styles/home.scss";

const Home = () => {
    return(
        <div className="container py-3">
            <div className="header-home">
                <div className="item-header">
                    <h3>Welcome to Book Library</h3>
                </div>
                <div className="item-header">
                    <span>
                        Welcome to books and bookstore here you will find, a lot of opportunities to
                        organize your online bookstore, where you will find books, comics and manga.
                    </span>
                </div>
            </div>
            <div className="py-5">
                <div className="flex-home">
                    <div className="item-home">
                        <div className="box-home">
                            <h5>Our laundry</h5>
                            <span>
                                You can see all our catalog of books, comics and mangas
                                and create your own banner.
                            </span>
                            <BtnViews />
                        </div>
                    </div>
                    <div className="item-home">
                        <div className="box-home">
                            <h5>Book's</h5>
                            <span>
                                Books here you will find only books,
                                as its label indicates.
                            </span>
                            <BtnViews />
                        </div>
                    </div>
                    <div className="item-home">
                        <div className="box-home">
                            <h5>Comic's</h5>
                            <span>
                                It is now the time to explore and create a storyline full
                                of superheroes or incredible story fill dramas and mysteries inside the comic's.
                            </span>
                            <BtnViews />
                        </div>
                    </div>
                    <div className="item-home">
                        <div className="box-home">
                            <h5>Manga's</h5>
                            <span>
                                Dragon ball, naruto and bleach will attract your attention,
                                the world of the world of the history of the way of the horoe
                                is waiting for you in this section.
                            </span>
                            <BtnViews />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;