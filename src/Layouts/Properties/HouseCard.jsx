

const HouseCard = ({ houseInfo }) => {
    const { image } = houseInfo;
    console.log(houseInfo)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="p-2"><img className="rounded-lg h-[300px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn bg-primary-color text-white text-lg">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;