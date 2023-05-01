import img1 from "./img/Ajoodanieh1.png"
import img2 from "./img/Bamland4.png"
import img3 from "./img/Elahieh2.png"
import img4 from "./img/Gisha-1.png"
import "./Branches.css"

const Branches = () => {


    /*********************  Branch Lists   *********************/
    const branches = [
        { state: 'میرداماد', address: '', img: { img1 } },
        { state: 'گیشا', address: '', img: { img2 } },
        { state: 'سعادت آباد', address: '', img: { img3 } },
        { state: 'آجودانیه', address: '', img: { img4 } },
        { state: 'الهیه', address: '', img: { img2 } },
        { state: 'پونک', address: '', img: { img1 } },
    ]
    

    /*********************  Branch Elements   *********************/
    const BranchElements = branches.map((item,index) => {
        let imgNum =  Object.keys(item.img)[0];
        return (
            <li className="media col-md-6" key={index}>
                <div className="media-right">
                    <img className="media-object" src={item.img[imgNum]} alt="branch" />
                </div>
                <div className="media-body media-middle">
                    <h4 className="media-heading bold ">{item.state}</h4>
                    <p><span className="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                </div>
            </li>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="all-branches ">
                        <ul className="branches clearfix">
                                {BranchElements}
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Branches;