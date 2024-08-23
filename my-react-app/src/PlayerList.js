import { Player } from "./Player";
import { players } from './Players';


export function PlayerList() {

    const playersCopy = players.map((player) => {
        return (
            <li className="col-lg-4 list-unstyled my-2">
                <Player 
                    nom={player.nom} 
                    equipe={player.equipe} 
                    imageJoueur={player.imageJoueur}
                    numero={player.numero}
                    nationalite={player.nationalite}
                    age={player.age}
                />
            </li>
        )
    })

    return (
        <ul className="row">
            {playersCopy}
        </ul>
    )
}