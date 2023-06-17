const Singleplayer = ({ player }) => {
  const { name, picture, club, price, rating } = player;
  return (
    <div className="w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-72" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>club:{club}</p>
        <h2>price:{price}</h2>
        <p>rating:{rating}</p>
      </div>
    </div>
  );
};

export default Singleplayer;
