import { FC } from "react";

const App: FC = () => {


  return (
    <>
      <div className="header">
        <h1>Save Ukraine</h1>
        {/* <img src="" alt="" /> */}
      </div>

      <div className="main-block">
        <div className="main-text">
          <h1>
            Кожна гривня допомоги українським захисникам наближає нас до
            перемоги!
          </h1>
          <h2>Вчасна допомога - врятоване життя</h2>
        </div>

        <div className="video-block">
          <div className="video-text">
            <a href="#" className="button-help">
              Допомогти
            </a>
          </div>

          <div className="video">
            <video width="480" height="300" autoPlay muted loop>
              <source src="https://rr5---sn-c0q7lns7.c.drive.google.com/videoplayback?expire=1655989176&ei=eCu0YoDvOYGokATlgLCIAQ&ip=194.44.56.202&cp=QVRKV0pfWFFVR1hPOk90WDNKRGpBYkxqXzhYUEc4allxWmNlODF6LThKUVJkelBweWMzamNBQnc&id=23807776ebf647f5&itag=18&source=webdrive&requiressl=yes&mh=Ht&mm=32&mn=sn-c0q7lns7&ms=su&mv=m&mvi=5&pl=24&sc=yes&ttl=transient&susc=dr&driveid=14-7vVDKhrWCTa-KQMhJs1eMzqlNjt7mn&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=39.891&lmt=1655918393605461&mt=1655974349&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgEVcXPaedhawbnyzJPAR2DUUsrEGYBJkxricGC7BAKccCIQDfL8HAPGlRW2yxBXCNknyDIYP9Y9UBwET-UQ4fzWxp3g==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRgIhAKCNGeXQyPLF9lS4ka46K_gOTpuyNXxdCp7OVtWAYnCaAiEAgg-p6NkSeIYH-m_k6ZN_mdZKe6u1VlkWBQcwdfGMYb8=&cpn=rouY2_DSnJwkJzKb&c=WEB_EMBEDDED_PLAYER&cver=1.20220615.02.00"></source>
            </video>
          </div> 
        </div>
      </div>

      <div className="main-buttons">
        <h1>Україна об'єдналась!</h1>
        <h2>Зроби свій внесок у перемогу нашої країни!</h2>
        <h4>Введіть суму: </h4>
        <p>
          <img src="img/ukraine.png" alt="img not found">
          </img>
        </p>
        <h4>Оберіть вид допомоги: </h4>

        <a href="#" className="button-1">
          Humanitarian
        </a>
        <a href="#" className="button-2">
          Ammunition
        </a>
      </div>

      <div className="ammunition">
        <h1>BLOCK Ammunition</h1>
      </div>

      <div className="Humanitarian">
        <h1>BLOCK Humanitarian</h1>
      </div>

      <div className="footer">
        <footer className="footer-bs">
          <div className="row">
            <div className="footer-info">
              <h2>ukraine-help-calculator</h2>
              <p>Створенно командою "А" для практики 2022р.</p>
              <p>© 2022 Team A, All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
