import { Link } from 'react-router-dom';
import { data } from '../shared/ListOfPlayersV2.jsx';

export default function Players() {
    return (
        <div className="container py-4">
            <div className="row g-4">
                {data.map((player) => (
                    <div className="col-6 col-md-4" key={player.id}>
                        <div className="card h-100 border-0">
                            <div className="product-img">
                                <img src={player.img} alt={player.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
                            </div>
                            <div className="card-body px-0">
                                <p className="card-text mb-1 fw-bold">{player.name}</p>
                                <p className="title text-muted mb-2">{player.club}</p>
                                <Link to={`detail/${player.id}`}>
                                    <button className="btn btn-outline-secondary btn-sm">Detail</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* Exercise 5 - Popup chi tiết cũ, đã thay thế bằng trang Detail (React Router)
   const [player, setPlayer] = useState([]);
   <div id="popup1" className="overlay">
     <div className="popup">
       <img src={player.img} alt="players" />
       <h2>{player.name}</h2>
       <a className="close" href="#">&times;</a>
       <div className="content">{player.info}</div>
     </div>
   </div>
*/