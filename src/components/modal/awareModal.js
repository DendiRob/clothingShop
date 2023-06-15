import { React } from 'react';
import './modal.sass'
import awareState from '../../store/awareState';

const AwareModal = () => {
    
    return(
        <div className='modal' onClick={()=> awareState.toggleModal(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <div className='modal__content_close' onClick={()=> awareState.toggleModal(false)}></div>
                <div className='modal__content_title'>
                    Это учебный проект, поэтому некоторые функций не работают
                </div> 
            </div>
        </div>
    )
}
export {AwareModal}