
let AudioTemplate=(props)=>{
    let deleteAudio=()=>{
        debugger
        props.deleteAudio(props.id)
    }
    return<div>
        <div className="card mt-2">
            <div className="row">
                <div className="col-2">
                    <img src={props.img} className="img rounded w-100"/>
                </div>

                <div className="col-10">
                    <div className="card-body">
                        <h1 className="Link">
                            {props.name}-{props.compositor}
                            <div className="right">
                                <button onClick={deleteAudio}
                                className="btn btn-close" 
                                title="delete audio">
                                </button>
                            </div>
                        </h1>
                        <audio className="mt-4" controls="controls">
                            <source src={props.asrc}></source>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AudioTemplate 