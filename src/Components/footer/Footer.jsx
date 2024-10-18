import { Link } from "react-router-dom";
import { footerData, footerMedia } from "../../Data/FooterData";
import "./Footer.css";

const Footer = () => {
  return (
    <>

      <div className="footer">

        <div className="top"> 

          <div className="heading">
            <h2>TraWorld</h2>
            <p>Choose your favourite destination</p>
          </div>

          <div>
            {footerMedia?.map((value, index) => {
              return (
                <Link key={index} to={value.url}> <i>{value.icon}</i> </Link>
              );
            })}
          </div>

        </div>

        <div className="bottom">

            {footerData.map((value, index) => {
                return (
                    <div className="foot-links" key={index}>
                        <h2>{value.title}</h2>
                        {value.section.map((item, id) => {
                            return (
                                <Link onClick={() => window.scroll(0, 0)} key={id} className='foot-link' to={item.url}>{item.subtitle}</Link>
                            )
                        })}
                    </div>
                )
            })}

        </div>

      </div>

      <div className="copyright">
        <p>Copyright (c) 2023 Copyright Holder All Rights Reserved | Made By Anusree E</p>
      </div>

    </>
  );
};

export default Footer;
