
import './ProfileSidebar.css';

const ProfileSidebar= () => {
  return (
    <div className="sidebar-container">
      <aside className="profile-sidebar">
        <div className="profile">
          <img  alt="Laura Sullivan" className="profile-pic" />
          <h3>Laura Sullivan</h3>
          <p>18 Available Requests | 2 Sent Requests</p>
          <button>Edit Profile</button>
        </div>

        <div className="availability">
          <h3>Availability</h3>
          <p>18 Available Connects | 2 Submitted Proposals</p>
          <div className="categories">
            <span>UI Designer</span>
            <span>UX Designer</span>
          </div>
          <button>View Profile</button>
        </div>
      </aside>
      <aside className="profile-sidebar1">
        <div className="profile">
          <img  alt="Laura Sullivan" className="profile-pic" />
          <h3>Laura Sullivan</h3>
          <p>18 Available Requests | 2 Sent Requests</p>
          <button>Edit Profile</button>
        </div>

        <div className="availability">
          <h3>Availability</h3>
          <p>18 Available Connects | 2 Submitted Proposals</p>
          <div className="categories">
            <span>UI Designer</span>
            <span>UX Designer</span>
          </div>
          <button>View Profile</button>
        </div>
      </aside>
    </div>
  );
};

export default ProfileSidebar;
