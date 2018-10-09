import  React  from  'react';

const  DisplayQuote = ({ quote, isLoaded }) => {
    if (isLoaded) {
        return (
        <div  className="DisplayQuote">
            <img  src={quote.image}  alt="picture"  />
            <ul>
                <li>Quote : {quote.quote}
                </li>
                <li>Character : {quote.character}
                </li>
            </ul>
        </div>
    ) 
}
else return (<div>Click on Get Quote !</div>);
};

export  default  DisplayQuote;