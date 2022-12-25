import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
         <Sidebar/>
         <div className="profileRight">
             <div className="profileRightTop">
                <div className="profileCover">
                <img 
                className="profileCoverImg" 
                src="assets/post/images (5).jpeg" 
                alt="">

                </img>
                
                <img 
                className="profileUserImg" 
                src="assets/person/download.jpeg" 
                alt="">

                </img>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Poojita Dagar</h4>
                    <span className="profileInfoDesc">Hey guys!</span>
                </div>
             </div>
             <div className="profileRightBottom">
             <Feed/>
             <Rightbar profile/>
             </div>
        
        </div>
        
        </div>
        
    </>
  );
}
