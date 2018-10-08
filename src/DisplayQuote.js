import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <ul>
                <li>Quote : {quote}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;