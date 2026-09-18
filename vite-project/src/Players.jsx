import { Players as playerList } from '../shared/ListOfPlayers.jsx';

export default function Players() {
    return (
        <div className="container">
            {playerList.map((player) => (
                <div className="column" key={player.id}>
                    <div className="card">
                        <img src={player.img} alt="Player" />
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))}
        </div>
    );
}