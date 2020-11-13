import Сonfigurator from './Configurator';

function Order({ data }) {
    console.log(data);
    return (
        <div>
            <h2>Your order </h2> <br />
            <p>Pizza with: </p> <br />
            <ul>
                <li>{data.size.isLarge ? "35 sm" : "30 sm"}</li>
                <li>{data.dough}</li>
                <li>{data.sauce}</li>
                {Object.entries(data.ingredients).filter(el => el[1].checked).map(el => <li key={el[0]}>{el[0]}</li>)}



            </ul>
        </div>
    );
};

export default Order;