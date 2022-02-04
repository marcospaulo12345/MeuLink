import {useState} from 'react';
import {FiLink} from 'react-icons/fi';

import './home.css'

import Menu from '../../components/Menu/index';
import LinkItem from '../../components/LinkItem/index';

import api from '../../services/api';
import { saveLinks } from '../../services/storeLinks';

export default function Home() {
  const [link, setLink] = useState(''); 
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  
  async function handleShortLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLinks('@encurtaLink', response.data)

      setLink('')
    }catch{
      setLink('')
      alert('Parece que algo deu errado!')
    }
  }
  
  return (
      <div className="container-home">
        <div className="logo">
          <img src='/Logo.png' alt='logo' />
          <h1>My Link</h1>
          <span>Cole seu link para encurtar</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff" />
            <input 
              placeholder="Cole seu link aqui..." 
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleShortLink}>Encurtar Link</button>
        </div>

        <Menu />

        {showModal && (
          <LinkItem 
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}
      </div>
    )
  }
  