import { useEffect } from "react";

const Account = (props) => {

    useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE + " | " + props.title;
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);

    return (
        <div>
            <h1>
                حساب کاربری
            </h1>
        </div>
    );
}

export default Account;