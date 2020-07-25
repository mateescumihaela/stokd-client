
import React, { useState } from 'react';
import Modal from '../commonComponents/Modal';
import 'tachyons'

const Newsletter = () => {
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div class="bg-transparent mw7 center pa8 br3-ns ba b--white-10">
            <h1 class="tc">Newsletter</h1>
            <p class="tc">Subscribe and get the latest articles delivered straight to your inbox</p>
            <input class="input-reset ba b--black-20 pa2 mb2 center db w-50" type="text"/>
            <br/>
            <a 
                className="center f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" 
                onClick={(e) => setIsOpen(true)}
                >Subscribe</a>
            <Modal 
                isOpen={isOpen}
                onClose={(e) => setIsOpen(false)}
                modalText={"Thank you for your subscription!"}
                />
        </div>
    )
}

export default Newsletter