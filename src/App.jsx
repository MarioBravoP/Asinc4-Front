import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { CgArrowsExpandLeft } from 'react-icons/cg';
import { BsReply, BsMoonStars } from 'react-icons/bs';
import { TiMail } from 'react-icons/ti';
import { IoHardwareChipOutline, IoHammerOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';

const iconMap = {
  FaShieldAlt: FaShieldAlt,
  CgArrowsExpandLeft: CgArrowsExpandLeft,
  BsReply: BsReply,
  BsMoonStars: BsMoonStars,
  TiMail: TiMail,
  IoHardwareChipOutline: IoHardwareChipOutline,
  IoHammerOutline: IoHammerOutline,
  AiOutlineLike: AiOutlineLike,
};

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error al acceder a los datos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <div className='hero-bg'>
        <div className='hero-text'>
          <img src={data.banners[0].extra[1].src} alt={data.banners[0].extra[1].alt} style={{ width: "75px" }} />
          <h1>{data.banners[0].title}</h1>
          <p style={{ fontWeight: "lighter" }}>{data.banners[0].description}</p>
          <img src={data.banners[0].extra[0].src} alt={data.banners[0].extra[0].alt} style={{ width: "250px" }} />
        </div>
        <div>
          <img src={data.banners[0].image} alt={data.banners[0].alt} className='hero-image' />
        </div>
      </div>

      <div className='archive-bg'>
        <div>
          <img src={data.banners[1].image} className='hero-image' />
        </div>
        <div className='archive-text'>
          <FaArrowLeft style={{ fontSize: "1.5em", color: "white", borderRadius: "100%", backgroundColor: "rgba(150, 150, 150, 0.71)", padding: "10px" }} />
          <h2>{data.banners[1].title}</h2>
          <p style={{ fontWeight: "lighter" }}>{data.banners[1].description}</p>
        </div>
      </div>

      <div className='keep-bg'>
        <div>
          <div className='keep-text'>
            <FaArrowRight style={{ fontSize: "1.5em", color: "white", borderRadius: "100%", backgroundColor: "rgba(150, 150, 150, 0.71)", padding: "10px" }} />
            <h2>{data.banners[2].title}</h2>
            <p style={{ fontWeight: "lighter" }}>{data.banners[2].description}</p>
          </div>
        </div>
        <div>
          <img src={data.banners[2].image} className='hero-image' />
        </div>
      </div>

      <div className='expand-bg'>
        <div>
          <img src={data.banners[3].image} className='hero-image' />
        </div>
        <div className='expand-text'>
          <CgArrowsExpandLeft style={{ fontSize: "1.5em", color: "white", borderRadius: "100%", backgroundColor: "rgba(150, 150, 150, 0.71)", padding: "10px" }} />
          <h2>{data.banners[3].title}</h2>
          <p style={{ fontWeight: "lighter" }}>{data.banners[3].description}</p>
        </div>
      </div>

      <div className='reply-bg'>
        <div className='reply-text'>
          <BsReply style={{ fontSize: "1.5em", color: "white", borderRadius: "100%", backgroundColor: "rgba(150, 150, 150, 0.71)", padding: "10px" }} />
          <h2>{data.banners[3].title}</h2>
          <p style={{ fontWeight: "lighter" }}>{data.banners[3].description}</p>
        </div>
        <div>
          <img src={data.banners[4].image} className='hero-image' />
        </div>
      </div>

      <div className='cards-bg'>
        {data.features.map((card, index) => {
          const IconComponent = iconMap[card.icon];
          return (
            <div key={index} className='card' style={{ backgroundColor: card.background, color: card.color }}>
              {IconComponent && <IconComponent style={{ fontSize: "2em" }} />}
              <h3>{card.title}</h3>
            </div>
          );
        })}
      </div>

      <div className="brag-bg">
        {data.testimonials[0]?.title}
        <div className="brag-grid">

          <div className="brag-card">
            <p>{data.testimonials[1][0].text}</p>
            <img src={data.testimonials[1][0].img} alt="testimonial 1" />
          </div>
          <div className="brag-card">
            <p>{data.testimonials[1][1].text}</p>
            <img src={data.testimonials[1][1].img} alt="testimonial 2" />
          </div>
          <div className="brag-card">
            <p>{data.testimonials[1][2].text}</p>
            <img src={data.testimonials[1][2].img} alt="testimonial 3" />
          </div>
          <div className="brag-card">
            <p>{data.testimonials[1][3].text}</p>
            <img src={data.testimonials[1][3].img} alt="testimonial 4" />
          </div>
          <div className="brag-card">
            <p>{data.testimonials[1][4].text}</p>
            <img src={data.testimonials[1][4].img} alt="testimonial 5" />
          </div>
          <div className="brag-card">
            <p>{data.testimonials[1][5].text}</p>
            <img src={data.testimonials[1][5].img} alt="testimonial 6" />
          </div>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <footer>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                color: 'grey',
                listStyle: 'none',
              }}
            >
              {data.footer.links.map((link, index) => {
                return <li key={index}>{link.text}</li>;
              })}
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
