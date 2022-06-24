import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <div className="header">
        <h1>Save Ukraine</h1>
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
        </div>
      </div>

      <div className="main-buttons">
        <h1>Україна об'єдналась!</h1>
        <h2>Зроби свій внесок у перемогу нашої країни!</h2>
        <h4>Введіть суму: </h4>

        <img src="/image/map.png"  height='400' width='550' alt="img not found"></img>
        <h4>Оберіть вид допомоги: </h4>

        <a href="#" className="button-1">
          Humanitarian
        </a>
        <a href="#" className="button-2">
          Ammunition
        </a>
      </div>
{/* 
      <div className="ammunition">
        <h1>BLOCK Ammunition</h1>
      </div>

      <div className="Humanitarian">
        <h1>BLOCK Humanitarian</h1>
      </div> */}

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
