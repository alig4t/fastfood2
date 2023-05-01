import Spinner from 'react-bootstrap/Spinner';

import "./SpinnerLoading.css"

function SpinnerLoading() {
    return (
        <>
            <div className='fade modal-backdrop show'></div>
            <Spinner animation="border" />
        </>
    )

}

export default SpinnerLoading;
