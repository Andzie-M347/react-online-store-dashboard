import { Fragment, useRef } from 'react';

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

export const Dropdown = ({
  icon,
  image,
  content,
  badge,
  toggleMenu,
  renderItems,
  renderFooter,
  renderHeader,
}) => {
  const dropdown_toggle = useRef(null);
  const dropdown_content = useRef(null);

  outsideClickHandler(dropdown_content, dropdown_toggle);

  return (
    <Fragment>
      <div ref={dropdown_toggle} className='lzs-header'>
        {icon ? icon : ''}
        {image ? image : ''}
        {badge ? (
          <span className='lzs-navbar__settings--notifications-value'>
            {badge}
          </span>
        ) : (
          ''
        )}
        {toggleMenu ? toggleMenu() : ' '}
      </div>

      <div ref={dropdown_content} className='dropdown'>
        {renderHeader ? (
          <header className='dropdown__header'> {renderHeader()} </header>
        ) : (
          ''
        )}

        <div className='dropdown__content'>
          {content && renderItems
            ? content.map((item, index) => renderItems(item, index))
            : ''}
        </div>

        {renderFooter ? (
          <footer className='dropdown__footer'>{renderFooter()}</footer>
        ) : (
          ''
        )}
      </div>
    </Fragment>
  );
};
