import React,{useEffect} from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BranchesElement from "../../components/Branches/Branches";

const Branches = (props) => {
    useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE + " | " + props.title;
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },[]);

    return(
        <div>
            <Breadcrumb title='شعبه های ما'/>
            <BranchesElement />
        </div>
    )
}
export default Branches
