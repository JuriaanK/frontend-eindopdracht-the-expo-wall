import React, {useState} from 'react';
import './Search.css';
import '../App.css';

import searchButton from "../assets/searchButton.png";

import banksy from "../assets/testImages/Banksy.jpg";
import drikBal from "../assets/testImages/Dirk-bal.jpg";
import pietMonderiaan from "../assets/testImages/piet_mondriaan.jpg";
import vincentVanGogh   from "../assets/testImages/Vincent-van-Gogh.jpg";

import Mainnavbar from "../components/Mainnavbar";


function Search(props) {
    const listOfTestProfiles = [
        {
            name: "Vincent van Gogh",
            profileImage : `${vincentVanGogh}`,
            place : "Auvers-sur-Oise"
        },

        {
            name: "Piet Mondriaan",
            profileImage : `${pietMonderiaan}`,
            place : "New York"
        },

        {
            name: "Banksy",
            profileImage : `${banksy}`,
            place : "London"
        },

        {
            name: "Dirk Bal",
            profileImage : `${drikBal}`,
            place : "Dordrecht"
        }

    ];

    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    function onFormSearch(e) {
        e.preventDefault();
        console.log('search!');

        setSearch(query);
    }




    return (

        <>
            <Mainnavbar/>

        <section className="outer-container">
            <article className="inner-container">
                <div className="profile-search">

                  <form className="search-bar" onSubmit={onFormSearch}>
                    <input
                        className="search-input"
                        type="text"
                        name="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="search profile"
                    />
                      <button><img src={searchButton} alt="searchButton" className="search-button-page"/></button>
                  </form>
                </div>
            {listOfTestProfiles.map((profile) => {
                return  <div className="profile-item">
                    <div className="profile-item-one">
                            <img src={profile.profileImage}  alt="profile-foto" className="profile-image-person"/>
                            <span>{profile.name}</span>
                    </div>
                    <div className="profile-item-two">
                            <span>{profile.place}</span>
                    </div>
                        </div>

                })
            }
            </article>
        </section>


        </>

        );
}

export default Search;
