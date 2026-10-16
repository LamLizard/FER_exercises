import { useParams } from 'react-router-dom';
import { data } from '../shared/ListOfPlayersV2.jsx';

export default function Detail() {
    const { id } = useParams();
    const player = data.find((obj) => obj.id == id);
    const cost = player.cost.toLocaleString();

    return (
        <div className="container py-4">
            <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                <img
                    src={player.img}
                    alt={player.name}
                    className="card-img-top"
                    style={{ height: '320px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h3 className="card-title mb-1">{player.name}</h3>
                    <h5 className="text-muted">{player.club}</h5>
                    <p className="fw-bold">Market value: € {cost}</p>
                    <p className="card-text">{player.info}</p>
                </div>
            </div>
        </div>
    );
}
