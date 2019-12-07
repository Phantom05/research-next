import React, { Component } from 'react';
// import ReactTransitionGroup from 'react-addons-css-transition-group';
import css from './Modal.scss';

class Modal extends Component {

  render() {
    const { isOpen, close } = this.props;
    return (
      <div>
        {isOpen ?
            <div>
              <div className={css.Modal_overlay} onClick={close} />
              <div className={css.Modal}>
                <p className={css.title}>Modal Title</p>
                <div className={css.content}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?
              </p>
                </div>
                <div className={css.button_wrap}>
                  <button onClick={close}> Confirm </button>
                </div>
              </div>
            </div>
          : null
          }
      </div>
    );
  }
}

export default Modal;