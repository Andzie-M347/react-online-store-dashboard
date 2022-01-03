import { useRef } from 'react';

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
  const menu_ref = useRef(null);
  const toggle_ref = useRef(null);

  outsideClickHandler(menu_ref, toggle_ref);

  const settingsToggleHandler = () => {
    menu_ref.current.classList.add('show');
  };

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
              {mode.map((mode, index) => (
                <li key={index}>
                  <span>{mode.name} </span>
                  <div className={`mode-selector ${mode.class}`} />
                </li>
              ))}
            </ul>
          </div>
          <div className='lzs-settings__content--color'>
            <h4>Choose Color Scheme</h4>

            <ul>
              {colors.map((mode, index) => (
                <li key={index}>
                  <span>{mode.name} </span>
                  <div className={`color-selector ${mode.class}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
