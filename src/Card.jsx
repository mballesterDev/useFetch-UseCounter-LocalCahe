import React, { useEffect } from "react";
import { useState } from "react";

function Card({ counter, increment, discrement, data, isLoading, hasError, setCounter }) {

    useEffect(() => {
        if (counter === 0) {
            alert('No puede ser menor que 0 !');
            setCounter(1);
        }
    }, [counter]);

    return (
        <>
            <h1 className="text-center">Pokemon API</h1>
            <hr />

            <div className="card mx-auto" style={{ width: "12rem" }}>
                <div className="card-body border-5">
                    <h5 className="card-title text-center">
                        {isLoading ? (
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : `${counter}. ${data?.name}`}
                    </h5>
                    {data && (
                        <>
                            <img src={data.sprites.front_default} className="card-img-top" alt="Pokemon" />
                            <div className="d-flex flex-column gap-2">
                                <button onClick={discrement} className='btn btn-primary'>Prev</button>
                                <button onClick={increment} className='btn btn-primary'>Next</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Card;