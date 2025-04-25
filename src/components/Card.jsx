import React from 'react';


// const Card = (props) => {
const Card = ({country}) => {
    console.log(country)
    // console.log(props.country)
    return (
    
     <li className="card w-[250px] h-[200px] flex flex-col justify-center items-center rounded-xl shadow-2xl  relative ">
        <div className="infos w-[100%] h-[100%] gap-2">
            <img src={country.flags.svg}
            alt= {"image de" + country.translations.fra.common}
            // alt={"drapeau du " + country.translations.fra.common} 
             className="w-[100%] h-[100%] object-cover rounded" />
             <div className="absolute  opacity-100 w-[100%] h-[100%] top-[0%]  md:bg-green-400 flex flex-col justify-center items-center gap-2 md:opacity-0 md:hover:opacity-100 text-[#333] font-bold  
             ">
            <h2>Pays:{country.translations.fra.common}</h2>
            <h4>Capital:{country.capital}</h4>
            <p>Pop.{country.population.toLocaleString()}</p>
            </div>
        </div>
     </li>



    
    );
};

export default Card;