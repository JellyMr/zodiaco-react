// import React, { useState } from 'react'
import { useState } from 'react';
import './Horoscopo.css';

const horoscopos = [
  {
    name: 'Aries',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-aries.png',
    start: '21/03',
    end: '19/04',
    description: 'Aries es impulsivo y directo, le encantan los retos y siempre se muestra valiente.'
  },
  {
    name: 'Tauro',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-tauro.png',
    start: '20/04',
    end: '20/05',
    description: 'Tauro es perseverante, confiable y tiene un enfoque práctico para la vida.'
  },
  {
    name: 'Géminis',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-geminis.png',
    start: '21/05',
    end: '20/06',
    description: 'Géminis es curioso, comunicativo y siempre está en búsqueda de nuevas experiencias.'
  },
  {
    name: 'Cáncer',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-cancer.png',
    start: '21/06',
    end: '22/07',
    description: 'Cáncer es emocional, protector y muy apegado a su familia y seres queridos.'
  },
  {
    name: 'Leo',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-leo.png',
    start: '23/07',
    end: '22/08',
    description: 'Leo es líder por naturaleza, le gusta ser el centro de atención y disfruta de los elogios.'
  },
  {
    name: 'Virgo',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-virgo.png',
    start: '23/08',
    end: '22/09',
    description: 'Virgo es analítico, detallista y siempre busca la perfección en todo lo que hace.'
  },
  {
    name: 'Libra',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-libra.png',
    start: '23/09',
    end: '22/10',
    description: 'Libra busca la armonía y el equilibrio en todas sus relaciones y situaciones.'
  },
  {
    name: 'Escorpio',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-escorpio.png',
    start: '23/10',
    end: '21/11',
    description: 'Escorpio es apasionado, intenso y tiene una gran determinación para alcanzar sus objetivos.'
  },
  {
    name: 'Sagitario',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-sagitario.png',
    start: '22/11',
    end: '21/12',
    description: 'Sagitario es aventurero, optimista y siempre busca la verdad y el conocimiento.'
  },
  {
    name: 'Capricornio',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-capricornio.png',
    start: '22/12',
    end: '19/01',
    description: 'Capricornio es ambicioso, disciplinado y siempre está enfocado en alcanzar sus metas.'
  },
  {
    name: 'Acuario',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-acuario.png',
    end: '18/02',
    description: 'Acuario es innovador, independiente y le gusta romper con las normas establecidas.'
  },
  {
    name: 'Piscis',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-piscis.png',
    start: '19/02',
    end: '20/03',
    description: 'Piscis es compasivo, creativo y muy conectado con su mundo interior y sus emociones.'
  }
];


const Horoscopo = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [signo, setSigno] = useState(null);

  const handleChange = (e) => setFechaNacimiento(e.target.value);

  const parseFecha = (fecha) => {
    const [dia, mes] = fecha.split('/').map(Number);
    return { dia, mes };
  };

  const calcularHoroscopo = () => {
    const [anio, mes, dia] = fechaNacimiento.split('-').map(Number);

    const signoEncontrado = horoscopos.find(({ start, end }) => {
      const { dia: startDia, mes: startMes } = parseFecha(start);
      const { dia: endDia, mes: endMes } = parseFecha(end);

      return (
        (mes === startMes && dia >= startDia) ||
        (mes === endMes && dia <= endDia)
      );
    });

    setSigno(signoEncontrado || null);
  };

  return (
    <div className="horoscopo-container">
      <div className="form-container">
        <h3>Ingresa tu fecha de nacimiento:</h3>
        <input
          type="date"
          value={fechaNacimiento}
          onChange={handleChange}
          className="input-date"
        />
        <button onClick={calcularHoroscopo}>Ver Horóscopo</button>
      </div>

      {signo && (
        <div className="resultado-container">
          <img src={signo.img} alt={signo.name} />
          <h3>{signo.name}</h3>
          <p>{signo.start} - {signo.end}</p>
          <p>{signo.description}</p>
        </div>
      )}
    </div>
  );
};


export default Horoscopo;
