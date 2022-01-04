import { useRef, useState, useEffect } from 'react';

import themeAction from '../../../redux/actions/Actions';
import { useDispatch } from 'react-redux';

const mode = [
  {
    id: 'default',
    name: 'Default',
    class: 'light-background',
  },
  {
    id: 'dark',
    name: 'Dark',
    class: 'dark-background',
  },
];

const colors = [
  {
    id: 'primary',
    name: 'Primary',
    class: 'accent-primary',
  },
  {
    id: 'secondary',
    name: 'Secondary',
    class: 'accent-secondary',
  },
];

const outsideClickHandler = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('show');
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('show');
      }
    }
  });
};

export const ThemeSettings = ({ icon }) => {
  const [currentMode, setCurrentMode] = useState('default');
  const [colorScheme, setColorScheme] = useState('primary');

  const dispatch = useDispatch();

  const menu_ref = useRef(null);
  const toggle_ref = useRef(null);

  outsideClickHandler(menu_ref, toggle_ref);

  const settingsToggleHandler = () => {
    menu_ref.current.classList.add('show');
  };

  const setMode = (mode) => {
    setCurrentMode(mode.id);
    localStorage.setItem('mode', mode.class);

    dispatch(themeAction.setMode(mode.class));
  };

  const setColor = (colors) => {
    setColorScheme(colors);
    localStorage.setItem('color', colors.class);
    dispatch(themeAction.setColor(colors.class));
  };

  useEffect(() => {
    const _mode = mode.find(
      (e) => e.class === localStorage.getItem('mode', 'light-background')
    );
    const _colors = colors.find(
      (e) => e.class === localStorage.getItem('color', 'accent-primary')
    );

    if (_mode === undefined) setCurrentMode(_mode.id);
    if (_colors === undefined) setColorScheme(_colors.id);
  }, []);

  return (
    <div>
      <div
        className='lzs-header'
        ref={toggle_ref}
        onClick={() => settingsToggleHandler()}
      >
        {icon}
      </div>
      <div className='lzs-settings' ref={menu_ref}>
        <header className='lzs-settings__header'>
          <h3>Dashboard Settings</h3>
        </header>

        <div className='lzs-settings__content'>
          <div className='lzs-settings__content--mode'>
            <h4>Choose Mode</h4>

            <ul>
              {mode.map((item, index) => (
                <li key={index}>
                  <span>{item.name} </span>
                  <div
                    className={`mode-selector ${item.class} ${item.class} ${
                      item.id === currentMode ? 'active' : ''
                    }`}
                    onClick={() => setMode(item)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='lzs-settings__content--color'>
            <h4>Choose Color Scheme</h4>

            <ul>
              {colors.map((item, index) => (
                <li key={index}>
                  <span>{item.name} </span>
                  <div
                    className={`color-selector ${item.class} ${
                      item.id === colorScheme ? 'active' : ''
                    } `}
                    onClick={() => setColor(item)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
