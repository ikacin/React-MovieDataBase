import "./footer.css";
import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from  "./images/footer-logo.svg"

const Footer = () => {

    const navigate = useNavigate();

    const goToPage = () => {
        navigate(`/Register-detail/signup`);
    }

    return(
       <>
           <footer className="single_column  ">
               <nav>
                   <div className="join">
                      <a href={"/"}><img
                          src={logo}
                          alt="The Movie Database (TMDB)" width="130" height="94"/></a>

                           <a onClick={() => goToPage()} className="rounded" >Foruma Katılın</a>
                   </div>

                   <div>
                       <h3>Temel</h3>
                       <ul>
                           <li><a href="/about">TMDB Hakkında</a></li>
                           <li><a href="/about/staying-in-touch">Bize Ulaşın</a></li>
                           <li><a href="/talk">Destek Forumları</a></li>
                           <li><a href="/documentation/api">API</a></li>
                           <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">Sistem
                               Durumu</a></li>
                       </ul>
                   </div>
                   <div>
                       <h3>Katkıda Bulunun</h3>
                       <ul>
                           <li><a href="/bible"><span className="glyphicons glyphicons-asterisk"></span> Katılım
                               Başvuru Kitabı</a></li>
                           <li><a href="/movie/new">Yeni Film Ekle</a></li>
                           <li><a href="/tv/new">Yeni Dizi Ekle</a></li>
                       </ul>
                   </div>
                   <div>
                       <h3>Topluluk</h3>
                       <ul>
                           <li><a href="/documentation/community/guidelines">Rehberler</a></li>
                           <li><a href="/discuss">Tartışmalar</a></li>
                           <li><a href="/leaderboard">Öne Çıkanlar</a></li>
                           <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
                       </ul>
                   </div>
                   <div>
                       <h3>Yasal</h3>
                       <ul>
                           <li><a href="/documentation/website/terms-of-use">Kullanım Koşulları</a></li>
                           <li><a href="/documentation/api/terms-of-use">API Kullanım Şartları</a></li>
                           <li><a href="/privacy-policy">Gizlilik Politikası</a></li>
                       </ul>
                   </div>
               </nav>

           </footer>
       </>
    )

}
export default Footer