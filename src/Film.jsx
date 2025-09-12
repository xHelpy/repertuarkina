import React from "react";

function  Film ({Image,SubTags,Description,TimeTable,Title,MainTag}) {
    return (
        <div className="Film">
            <div className="FilmData">
                <img src={Image} alt="Zdjecie Filmu"></img>
                <div className="Data">

                    <div className="Titles">
                        <h2 className="Title">
                            {Title}
                        </h2>

                        <p className="Tags">
                            <p className="MainTag">
                                {MainTag}
                            </p>
                            {SubTags.map(function (tag)
                            {
                                return (
                                    <p className="Tag">{tag}</p>
                                )
                            })}
                        </p>
                    </div>
                    <p className="Description">
                        {Description}
                    </p>
                </div>
            </div>

            <div className="Tickets">
                <button className="Purchase">Kup Bilet ></button>
                <div className="TimeTable">
                    {TimeTable.map(function (time) {
                        return (
                            <div className="Timer">
                                <h3>Napisy</h3>
                                <p>{time}</p>
                                <button>
                                    kup bilet
                                </button>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default  Film