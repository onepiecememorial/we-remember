import nakamas from '../../lost-nakamas.json';

const Poneglyph = () => {
    return ( 
        <div>
            <>
                {nakamas.map((nakama)=>{
                    return (
                        <div>
                            <label>{nakama.name}</label>
                            <label>{nakama.year}</label>
                            <label>{nakama.text}</label>
                        </div>
                    )
                })} 
            </>
        </div>
    )
}

export default Poneglyph;