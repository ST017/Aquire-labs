import React from "react";
import "./Card2.css";
import emplogo from '../../Images/DummyLogo.png'
 
const Card2 = ({name,logo}) => {
  // const [connects, setConnects] = useState(18);
  // const [proposals, setProposals] = useState(20);
 
  const names = [
    "AI & Big Data"	,
"	 Art	"	,
"	 Asset Management	"	,
"	 Asset-backed Tokens	"	,
"	 Augmented Reality	"	,
"	 Automated Market Maker (AMM)	"	,
"	 BNB Chain Ecosystem	"	,
"	 Centralized Exchange (CEX)	"	,
"	 Charity	"	,
"	 Communication	"	,
"	Content Creation	"	,
"	 Crowdfunding	"	,
" DAO	"	,
"	 Dapp	"	,
"	 Decentralized Exchange (DEX)	"	,
"	 DeFi	"	,
"	 Derivatives	"	,
"	 Dex Aggregator	"	,
"	 E-Commerce	"	,
"	 Education	"	,
"	 Energy	"	,
"	 Entertainment	"	,
"	 Esports	"	,
"	 Ethereum Ecosystem	"	,
"	 Exchange-based Tokens	"	,
"	 Fan Token	"	,
"	 Farming-as-a-Service (FaaS)	"	,
"	 File Sharing	"	,
"	 Gaming	"	,
"	 Governance	"	,
"	 Gambling	"	,
"	 Healthcare	"	,
"	 Insurance	"	,
"	 Interoperability	"	,
"	 IoT	"	,
"	 Launchpad	"	,
"	 Layer 1 (L1)	"	,
"	 Layer 2 (L2)	"	,
"	 Legal	"	,
"	 Lending & Borrowing	"	,
"	 Loyalty	"	,
"	 Manufacturing	"	,
"	 Marketplaces	"	,
"	 Marketing	"	,
"	 Media	"	,
"	 Memes	"	,
"	 Metaverse	"	,
"	 Mining	"	,
"	 Mobile	"	,
"	 Music	"	,
"	 NFT	"	,
"	 Oracles	"	,
"	 Polkadot Ecosystem	"	,
"	 Privacy	"	,
"	 Real Estate	"	,
"	 Rebase Tokens	"	,
"	 Retail	"	,
"	 RWA (Real World Assets)	"	,
"	 Sharing Economy	"	,
"	 Smart Contract Platform	"	,
"	 Social Money	"	,
"	 Social	"	,
"	 Sports	"	,
"	 Stablecoins	"	,
"	 Storage	"	,
"	 Supply Chain & Logistics	"	,
"	 Synthetic Issuer	"	,
"	 Technology & Science	"	,
"	 Tokenized Bitcoin	"	,
"	 Trading	"	,
"	 Virtual Goods	"	,
"	 VR/AR	"	,
"	 Wallet	"	,
"	 Web3	"	,
"Yield Aggregator"


  ];
  const visibleCount = 4;
 
  return (
    <>
      <div className="card-container">
        <div className="card-logo">
          <img src={emplogo} alt="logo" aria-placeholder="img"></img>
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