import React, { useContext, useEffect, useState } from 'react';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { Home } from './pages/home/Home';
import { ImContrast, ImBrightnessContrast } from 'react-icons/im';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Admin } from './pages/admin';
import { Modal } from './components/Modal';
import { BirdsPage } from './pages/birds/BirdsPage';
import { ModalContext } from './context/Modal';

const MAX_SIZE = 2;

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState(1);
  const [date, setDate] = useState('');
  const [selectClient, setSelectClient] = useState({});
  const [selectFalcoeiro, setSelectFalcoeiro] = useState({});
  const [selectBird, setSelectBird] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [isloggedIn, setisloggedIn] = useState<boolean>(true);
  const [admin, setAdmin] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { modal, onSetModalHandler, onResetModalHandler } =
    useContext(ModalContext);

  const onChangeTheme = () => {
    if (selectedTheme === 'light') setSelectedTheme('dark');
    else setSelectedTheme('light');
  };

  const onInputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onSelectHandler = (option: {
    label: string;
    value: string;
    name: string;
  }) => {
    if (option.name === 'clients') {
      setSelectClient(option);
    }
    if (option.name === 'falcoeiros') {
      setSelectFalcoeiro(option);
    }
    if (option.name === 'birds') {
      setSelectBird(option);
    }
    console.log(option, 'option');
  };

  const onOpenModal = () => {
    onSetModalHandler({
      isOpen: true,
      type: 'warning',
      onCloseCallback: null,
      onConfirmCallback: () => {
        console.log('hi there');
      },
      title: 'Temperature too high',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod, accusantium minus illum eligendi doloribus tenetur accusamus nulla consequuntur reprehenderit amet magnam quisquam libero rerum quo fugiat ipsum, facere ex.',
    });
  };

  const onOpenCustomModal = () => {
    onSetModalHandler({
      isOpen: true,
      type: 'info',
      onCloseCallback: () => {
        console.log('You canceled me');
      },
      onConfirmCallback: () => {
        console.log('You confirmed me');
      },
      title: 'Hello world',
      description: 'Hi there',
    });
  };

  console.log('APPPPPPPPPPPPPPPPPPPPP');

  return (
    <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <h3 className="test">T-Falcon</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '30px',
        }}
      >
        {selectedTheme === 'light' ? (
          <ImContrast size={20} onClick={onChangeTheme} />
        ) : (
          <ImBrightnessContrast size={20} onClick={onChangeTheme} />
        )}
      </div>

      <button onClick={onOpenModal}>Default Modal</button>
      <button onClick={onOpenCustomModal}>Custom Modal</button>

      <Modal {...modal} />

      <Routes>
        {!isloggedIn && <Route path="/" element={<Login />} />}
        {isloggedIn && !admin && <Route path="/" element={<Home />} />}
        {isloggedIn && admin && <Route path="/" element={<Admin />} />}
      </Routes>
      {/* <NavLink to="">Peencher Relatorio</NavLink> */}
    </ThemeProvider>
  );
};

export default App;
