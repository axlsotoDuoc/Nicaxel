export function UserCard ({ userName, name, isFollowing }) {
    console.log(isFollowing)
    return (
        <div className="card-container">

            <div className="card">

                <img className="imag" src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fes%2Fs%2Ffotos%2Fhombre-espa%25C3%25B1ol&psig=AOvVaw30Tb00BgLfVpN1W3-JLojM&ust=1759280232138000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJD4k92j_48DFQAAAAAdAAAAABAE/${userName}"} alt="Imagen de mujer" />

                <div className="user-div">
                    <span>{name}</span>
                    <span>@{userName}</span>
                </div>

                <button>Seguir</button>

            </div>
        </div>
    )
}