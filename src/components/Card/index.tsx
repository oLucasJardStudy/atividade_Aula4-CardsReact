import './styles.css';

type CardProps = {
    name: string;
    github: string;
    time: string;
    photo: string;
}
export function Card({name, github, time, photo}: CardProps) {
    return (
        <div className="card">
            <img src={photo} alt={`Foto de ${name}`} className="card-photo" />
            <h2>{name}</h2>
            <p>{time}</p>
            <a href={github} target="_blank" rel="noopener noreferrer">
             Perfil do github 
            </a>
        </div> 
    )
}