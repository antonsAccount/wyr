export default function PreviousWyrs({prevWyrs}) {
    
    return(
        <div className="prevWyrs">
            <ul>
                {prevWyrs.map((prevWyr, index)=><li key={index}>-{prevWyr}</li>)}
            </ul>
        </div>
    )
}