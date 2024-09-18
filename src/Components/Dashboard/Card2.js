import React from "react";
import "./Card2.css";
 
const Card2 = ({name,logo}) => {
  // const [connects, setConnects] = useState(18);
  // const [proposals, setProposals] = useState(20);
 
  const names = [
    'John', 'Jane', 'Alice', 'Bob', 'Charlie',
    'David', 'Eve', 'Frank', 'Grace', 'Heidi',
    'Ivan', 'Judy', 'Karl', 'Laura', 'Mallory',
    'Nick', 'Oscar', 'Peggy', 'Quincy', 'Rita',
    'Steve', 'Trudy', 'Uma', 'Victor', 'Wendy'
  ];
  const visibleCount = 10;
 
  return (
    <>
      <div className="card-container">
        <div className="card-logo">
          <img src={logo} alt="logo" aria-placeholder="img"></img>
        </div>
        <div className="card-content">
          <div className="header-card">
            <div className="title">{name} <img src="https://img.icons8.com/fluency/48/000000/verified-badge.png" alt="verified" className="verified-icon"/></div>
           
            <img
              src="https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png"
              alt="Bookmark"
              className="bookmark"
            />
           
          </div>
 
          <div className="Location-Card">
            <div><img src="https://img.icons8.com/ios-filled/16/000000/marker.png" alt="location" /> California</div>
            <div> <img src="https://img.icons8.com/color/48/000000/request-money.png" alt="Requests Received" /> Requests Received : 10</div>
            <div><img src="https://img.icons8.com/emoji/48/000000/envelope-emoji.png" alt="Requests Sent" /> Requests Sent : 05</div>
          </div>
 
          <div className="body-content">
            <div className="bio">
              Bio : Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting.
            </div>
          </div>
 
          <div className="cardin">
                    <div className="cardin-list" >
                        <ul>
                            {names.slice(0, visibleCount).map((name, index) => (
                            <li key={index}>{name}</li>
                            ))}
                         </ul>
                            {/* Show "+X more" if there are more than 5 names */}
                        {names.length > visibleCount && (
                            <div className="more-list">{names.length - visibleCount}+ more</div>
                        )}
                    </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Card2;